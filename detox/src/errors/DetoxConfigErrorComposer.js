const _ = require('lodash');
const DetoxConfigError = require('./DetoxConfigError');
const deviceAppTypes = require('../configuration/utils/deviceAppTypes');
const J = s => JSON.stringify(s);

class DetoxConfigErrorComposer {
  constructor() {
    this.setDetoxConfigPath();
    this.setDetoxConfig();
    this.setConfigurationName();
  }

  _atPath() {
    return this.filepath ? ` at path:\n${this.filepath}` : '.';
  }

  _getSelectedConfiguration() {
    return _.get(this.contents, ['configurations', this.configurationName]);
  }

  _focusOnConfiguration(postProcess = _.identity) {
    const configuration = _.get(this.contents, ['configurations', this.configurationName]);
    if (configuration === undefined) {
      return;
    }

    return {
      configurations: {
        [this.configurationName]: postProcess(configuration)
      },
    };
  }

  _focusOnDeviceConfig(deviceAlias, postProcess = _.identity) {
    const { type, device } = this._getSelectedConfiguration();
    if (!deviceAlias) {
      if (type) {
        return this._focusOnConfiguration(postProcess);
      } else {
        return this._focusOnConfiguration(c => {
          postProcess(c.device);
          return _.pick(c, 'device');
        });
      }
    }

    return {
      devices: {
        [device]: postProcess(this.contents.devices[device]),
      },
    };
  }

  _focusOnAppConfig(appPath, postProcess = _.identity) {
    const value = _.get(this.contents, appPath);
    return _.set({}, appPath, postProcess(value));
  }

  _resolveSelectedDeviceConfig(alias) {
    if (alias) {
      return this.contents.devices[alias];
    } else {
      const config = this._getSelectedConfiguration();
      return config.type ? config : config.device;
    }
  }

  _ensureProperty(...names) {
    return obj => {
      for (const name of names) {
        return _.set(obj, name, _.get(obj, name));
      }
    };
  }

  setDetoxConfigPath(filepath) {
    this.filepath = filepath || '';
    return this;
  }

  setDetoxConfig(contents) {
    this.contents = contents || null;
    return this;
  }

  setConfigurationName(configurationName) {
    this.configurationName = configurationName || '';
    return this;
  }

  // region configuration/index

  noConfigurationSpecified() {
    return new DetoxConfigError({
      message: 'Cannot run Detox without a configuration file.',
      hint: _.endsWith(this.filepath, 'package.json')
        ? `Create an external .detoxrc.json configuration, or add "detox" configuration section to your package.json at:\n${this.filepath}`
        : 'Make sure to create external .detoxrc.json configuration in the working directory before you run Detox.'
    });
  }

  noConfigurationAtGivenPath() {
    return new DetoxConfigError({
      message: 'Failed to find Detox config at:\n' + this.filepath,
      hint: 'Make sure the specified path is correct.',
    });
  }

  failedToReadConfiguration(unknownError) {
    return new DetoxConfigError({
      message: 'An error occurred while trying to load Detox config from:\n' + this.filepath,
      debugInfo: unknownError && unknownError.message,
    });
  }

  noConfigurationsInside() {
    return new DetoxConfigError({
      message: `There are no configurations in the given Detox config${this._atPath()}`,
      hint: `Examine the config:`,
      debugInfo: this.contents ? {
        configurations: undefined,
        ...this.contents,
      } : {},
      inspectOptions: { depth: 1 },
    });
  }

  cantChooseConfiguration() {
    const configurations = this.contents.configurations;

    return new DetoxConfigError({
      message: `Cannot determine which configuration to use from Detox config${this._atPath()}`,
      hint: 'Use --configuration to choose one of the following:\n' + hintConfigurations(configurations),
    });
  }

  noConfigurationWithGivenName() {
    const configurations = this.contents.configurations;

    return new DetoxConfigError({
      message: `Failed to find a configuration named ${J(this.configurationName)} in Detox config${this._atPath()}`,
      hint: 'Below are the configurations Detox was able to find:\n' + hintConfigurations(configurations),
    });
  }

  configurationShouldNotBeEmpty() {
    const name = this.configurationName;
    const configurations = this.contents.configurations;

    return new DetoxConfigError({
      message: `Cannot use an empty configuration ${J(name)}.`,
      hint: `A valid configuration should have "device" and "app" properties defined, e.g.:\n
{
  "apps": {
*-->"myApp.ios": {
|     "type": "ios.app",
|     "binaryPath": "path/to/app"
|   },
| },
| "devices": {
|*->"simulator": {
||    "type": "ios.simulator",
||    "device": { type: "iPhone 12" }
||  },
||},
||"configurations": {
||  ${J(name)}: {
|*--- "device": "simulator",
*---- "app": "myApp.ios"
    }
  }
}
Examine your Detox config${this._atPath()}`,
      debugInfo: {
        configurations: {
          [name]: configurations[name],
          ...configurations,
        }
      },
      inspectOptions: { depth: 1 }
    });
  }

  // endregion

  // region composeDeviceConfig

  thereAreNoDeviceConfigs(deviceAlias) {
    return new DetoxConfigError({
      message: `Cannot use device alias ${J(deviceAlias)} since there is no "devices" config in Detox config${this._atPath()}`,
      hint: `\
You should create a dictionary of device configurations in Detox config, e.g.:
{
  "devices": {
*-> ${J(deviceAlias)}: {
|     "type": "ios.simulator", // or "android.emulator", or etc...
|     "device": { "type": "iPhone 12" }, // or e.g.: { "avdName": "Pixel_API_29" }
|   }
| },
| "configurations": {
|   ${J(this.configurationName)}: {
*---- "device": ${J(deviceAlias)},
      ...
    }
  }
}\n`,
    });
  }

  cantResolveDeviceAlias(alias) {
    return new DetoxConfigError({
      message: `Failed to find a device config ${J(alias)} in the "devices" dictionary of Detox config${this._atPath()}`,
      hint: 'Below are the device configurations Detox was able to find:\n'
        + hintConfigurations(this.contents.devices) + '\n\n'
        + `Check your configuration ${J(this.configurationName)}:`,
      debugInfo: this._getSelectedConfiguration(),
      inspectOptions: { depth: 0 },
    });
  }

  deviceConfigIsUndefined() {
    return new DetoxConfigError({
      message: `Missing "device" property in the selected configuration ${J(this.configurationName)}:`,
      hint: `It should be an alias to the device config, or the device config itself, e.g.:
{
  ...
  "devices": {
*-> "myDevice": {
|     "type": "ios.simulator", // or "android.emulator", or etc...
|     "device": { "type": "iPhone 12" }, // or e.g.: { "avdName": "Pixel_API_29" }
|   }
| },
| "configurations": {
|   ${J(this.configurationName)}: {
*---- "device": "myDevice", // or { type: 'ios.simulator', ... }
      ...
    },
    ...
  }
}

Examine your Detox config${this._atPath()}`,
    });
  }

  missingDeviceType(deviceAlias) {
    return new DetoxConfigError({
      message: `Missing "type" inside the device configuration.`,
      hint: `Usually, "type" property should hold the device type to test on (e.g. "ios.simulator" or "android.emulator").\n` +
        `Check that in your Detox config${this._atPath()}`,
      debugInfo: this._focusOnDeviceConfig(deviceAlias, this._ensureProperty('type')),
      inspectOptions: { depth: 3 },
    });
  }

  malformedUtilBinaryPaths(deviceAlias) {
    return new DetoxConfigError({
      message: `Invalid type of "utilBinaryPaths" inside the device configuration.`
            + ` Expected an array of strings.`,
      hint: `Check that in your Detox config${this._atPath()}`,
      debugInfo: this._focusOnDeviceConfig(deviceAlias),
      inspectOptions: { depth: 3 },
    });
  }

  missingDeviceMatcherProperties(deviceAlias, expectedProperties) {
    const { type } = this._resolveSelectedDeviceConfig(deviceAlias);
    return new DetoxConfigError({
      message: `Invalid or empty "device" matcher inside the device config.`,
      hint: `It should have the device query to run on, e.g.:\n
{
  "type": ${J(type)},
  "device": ${expectedProperties.map(p => `{ ${J(p)}: ... }`).join('\n      // or ')}
}
Check that in your Detox config${this._atPath()}`,
      debugInfo: this._focusOnDeviceConfig(deviceAlias),
      inspectOptions: { depth: 4 },
    });
  }

  // endregion

  // region composeAppsConfig

  thereAreNoAppConfigs(appAlias) {
    return new DetoxConfigError({
      message: `Cannot use app alias ${J(appAlias)} since there is no "apps" config in Detox config${this._atPath()}`,
      hint: `\
You should create a dictionary of app configurations in Detox config, e.g.:
{
  "apps": {
*-> ${J(appAlias)}: {
|     "type": "ios.app", // or "android.apk", or etc...
|     "binaryPath": "path/to/your/app", // ... and so on
|   }
| },
| "configurations": {
|   ${J(this.configurationName)}: {
*---- "app": ${J(appAlias)},
      ...
    }
  }
}\n`,
    });
  }

  cantResolveAppAlias(appAlias) {
    return new DetoxConfigError({
      message: `Failed to find an app config ${J(appAlias)} in the "apps" dictionary of Detox config${this._atPath()}`,
      hint: 'Below are the app configurations Detox was able to find:\n' + hintConfigurations(this.contents.apps) +
        `\n\nCheck your configuration ${J(this.configurationName)}:`,
      debugInfo: this._getSelectedConfiguration(),
      inspectOptions: { depth: 1 },
    });
  }

  appConfigIsUndefined(appPath) {
    const appProperty = appPath[2] === 'apps'
      ? `"apps": [..., "myApp", ...]`
      : `"app": "myApp"`;

    return new DetoxConfigError({
      message: `Undefined or empty app config in the selected ${J(this.configurationName)} configuration:`,
      hint: `\
It should be an alias to an existing app config in "apps" dictionary, or the config object itself, e.g.:

{
  "apps": {
*-> "myApp": {
|     "type": "ios.app", // or "android.apk", or etc...
|     "binaryPath": "path/to/your/app", // ... and so on
|   }
| },
| "configurations": {
|   ${J(this.configurationName)}: {
*---- ${appProperty}
      ...
    }
  }
Examine your Detox config${this._atPath()}`,
      debugInfo: this._focusOnConfiguration(),
      inspectOptions: { depth: 2 }
    });
  }

  malformedAppLaunchArgs(appPath) {
    return new DetoxConfigError({
      message: `Invalid type of "launchArgs" property in the app config.\nExpected an object:`,
      debugInfo: this._focusOnAppConfig(appPath),
      inspectOptions: { depth: 4 },
    });
  }

  missingAppBinaryPath(appPath) {
    return new DetoxConfigError({
      message: `Missing "binaryPath" property in the app config.\nExpected a string:`,
      debugInfo: this._focusOnAppConfig(appPath, this._ensureProperty('binaryPath')),
      inspectOptions: { depth: 4 },
    });
  }

  invalidAppType({ appPath, allowedAppTypes, deviceType }) {
    return new DetoxConfigError({
      message: `Invalid app "type" property in the app config.\nExpected ${allowedAppTypes.map(J).join(' or ')}.`,
      hint: `\
You have a few options:
1. Replace the value with the suggestion.
2. Use a correct device type with this app config. Currently you have ${J(deviceType)}.`,
      debugInfo: this._focusOnAppConfig(appPath),
      inspectOptions: { depth: 4 },
    });
  }

  duplicateAppConfig({ appName, appPath, preExistingAppPath }) {
    const config1 = { ..._.get(this.contents, preExistingAppPath) };
    config1.name = config1.name || '<GIVE IT A NAME>';
    const config2 = { ..._.get(this.contents, appPath) };
    config2.name = '<GIVE IT ANOTHER NAME>';

    const name = this.configurationName;
    const hintMessage = appName
      ? `Both apps use the same name ${J(appName)} — try giving each app a unique name.`
      : `The app configs are missing "name" property that serves to distinct them.`;

    return new DetoxConfigError({
      message: `App collision detected in the selected configuration ${J(name)}.`,
      hint: `\
${hintMessage}

detox → ${preExistingAppPath.join(' → ')}:
${DetoxConfigError.inspectObj(config1, { depth: 0 })}

detox → ${appPath.join(' → ')}:
${DetoxConfigError.inspectObj(config2, { depth: 0 })}

Examine your Detox config${this._atPath()}`,
    });
  }

  noAppIsDefined(deviceType) {
    const name = this.configurationName;
    const [appType] = deviceAppTypes[deviceType] || [''];
    const [appPlatform] = appType.split('.');
    const appAlias = appType ? `myApp.${appPlatform}` : 'myApp';

    return new DetoxConfigError({
      message: `The ${J(name)} configuration has no defined "app" config.`,
      hint: `There should be an inlined object or an alias to the app config, e.g.:\n
{
  "apps": {
*-->"${appAlias}": {
|     "type": "${appType || 'someAppType'}",
|     "binaryPath": "path/to/app"
|   },
| },
| "configurations": {
|   ${J(name)}: {
*---- "app": "${appAlias}"
      ...
    }
  }
}

Examine your Detox config${this._atPath()}`,
      debugInfo: this._focusOnConfiguration(),
      inspectOptions: { depth: 0 }
    });
  }

  ambiguousAppAndApps() {
    return new DetoxConfigError({
      message: `You can't have both "app" and "apps" defined in the ${J(this.configurationName)} configuration.`,
      hint: 'Use "app" if you have a single app to test.' +
        '\nUse "apps" if you have multiple apps to test.' +
        `\n\nCheck your Detox config${this._atPath()}`,
      debugInfo: this._focusOnConfiguration(this._ensureProperty('app', 'apps')),
      inspectOptions: { depth: 2 },
    });
  }

  multipleAppsConfigArrayTypo() {
    return new DetoxConfigError({
      message: `Invalid type of the "app" property in the selected configuration ${J(this.configurationName)}.`,
      hint: 'Rename "app" to "apps" if you plan to work with multiple apps.' +
        `\n\nCheck your Detox config${this._atPath()}`,
      debugInfo: this._focusOnConfiguration(this._ensureProperty('app')),
      inspectOptions: { depth: 2 },
    });
  }

  multipleAppsConfigShouldBeArray() {
    return new DetoxConfigError({
      message: `Expected an array in "apps" property in the selected configuration ${J(this.configurationName)}.`,
      hint: 'Rename "apps" to "app" if you plan to work with a single app.' +
        '\nOtherwise, make sure "apps" contains a valid array of app aliases or inlined app configs.' +
        `\n\nCheck your Detox config${this._atPath()}`,
      debugInfo: this._focusOnConfiguration(this._ensureProperty('apps')),
      inspectOptions: { depth: 3 },
    });
  }

  // endregion

  // region composeSessionConfig

  invalidServerProperty() {
    return new DetoxConfigError({
      message: `session.server property is not a valid WebSocket URL`,
      hint: `Expected something like "ws://localhost:8099".\nCheck that in your Detox config${this._atPath()}`,
      inspectOptions: { depth: 3 },
      debugInfo: _.omitBy({
        session: _.get(this.contents, ['session']),
        ...this._focusOnConfiguration(c => _.pick(c, ['session'])),
      }, _.isEmpty),
    });
  }

  invalidSessionIdProperty() {
    return new DetoxConfigError({
      message: `session.sessionId property should be a non-empty string`,
      hint: `Check that in your Detox config${this._atPath()}`,
      inspectOptions: { depth: 3 },
      debugInfo: _.omitBy({
        session: _.get(this.contents, ['session']),
        ...this._focusOnConfiguration(c => _.pick(c, ['session'])),
      }, _.isEmpty),
    });
  }

  invalidDebugSynchronizationProperty() {
    return new DetoxConfigError({
      message: `session.debugSynchronization should be a positive number`,
      hint: `Check that in your Detox config${this._atPath()}`,
      inspectOptions: { depth: 3 },
      debugInfo: _.omitBy({
        session: _.get(this.contents, ['session']),
        ...this._focusOnConfiguration(c => _.pick(c, ['session'])),
      }, _.isEmpty),
    });
  }

  // endregion

  missingBuildScript(appConfig) {
    return new DetoxConfigError({
      message: `\
Failed to build the app for the configuration ${J(this.configurationName)}, because \
there was no "build" script inside.
Check contents of your Detox config${this._atPath()}`,
      debugInfo: { build: undefined, ...appConfig },
      inspectOptions: { depth: 0 },
    });
  }
}

function hintConfigurations(configurations) {
  return _.keys(configurations).map(c => `* ${c}`).join('\n')
}

module.exports = DetoxConfigErrorComposer;