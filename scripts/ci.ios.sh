#!/bin/bash -ex

echo $REACT_NATIVE_VERSION

source $(dirname "$0")/ci.sh
mkdir -p coverage

pushd detox/test

run_f "npm run build:ios"
cp ../coverage/lcov.info ../../coverage/unit.lcov

run_f "npm run e2e:ios-ci"
cp coverage/lcov.info ../../coverage/e2e-ios-ci.lcov

run_f "scripts/ci_unhappy.sh ios"

# run_f "npm run verify-artifacts:ios"
popd
