"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:o,values:m,groupId:c,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,i.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[f,x]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=c){const e=y[c];null!=e&&e!==f&&b.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==f&&(w(t),x(a),null!=c&&N(c,String(a)))},D=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},k)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>T.push(e),onKeyDown:D,onClick:C},o,{className:(0,l.Z)("tabs__item",d,o?.className,{"tabs__item--active":f===t})}),n??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function c(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},9113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={},s="Contributing",p={unversionedId:"contributing",id:"version-20.x/contributing",title:"Contributing",description:"This guide is about contributing to our codebase.",source:"@site/versioned_docs/version-20.x/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/Detox/docs/contributing",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/contributing.md",tags:[],version:"20.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Migration Guide",permalink:"/Detox/docs/guide/migration"}},u={},d=[{value:"Environment",id:"environment",level:3},{value:"Install the monorepo management tool, <code>lerna</code>",id:"install-the-monorepo-management-tool-lerna",level:4},{value:"Install common React Native dependencies",id:"install-common-react-native-dependencies",level:4},{value:"xcpretty",id:"xcpretty",level:4},{value:"Detox",id:"detox",level:3},{value:"Clone Detox and Submodules",id:"clone-detox-and-submodules",level:4},{value:"Installing and Linking Internal Projects",id:"installing-and-linking-internal-projects",level:4},{value:"Building and Testing",id:"building-and-testing",level:4},{value:"Automatically",id:"automatically",level:5},{value:"Manually",id:"manually",level:5},{value:"1. Unit Tests and Lint",id:"1-unit-tests-and-lint",level:6},{value:"2. Running Detox E2E Coverage Tests",id:"2-running-detox-e2e-coverage-tests",level:6},{value:"3. Android Native Unit-Tests",id:"3-android-native-unit-tests",level:6},{value:"Detox - Example Projects",id:"detox---example-projects",level:3},{value:"Detox Documentation Website",id:"detox-documentation-website",level:3},{value:"Updating the Website",id:"updating-the-website",level:4},{value:"Website Deployment",id:"website-deployment",level:5},{value:"Update Old Versions",id:"update-old-versions",level:5}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"This guide is about contributing to our codebase."),(0,r.kt)("p",null,"We don\u2019t have any special guidelines - just some setup walk-through!"),(0,r.kt)("h3",{id:"environment"},"Environment"),(0,r.kt)("p",null,"First, complete our ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/introduction/getting-started"},"Getting Started")," guide."),(0,r.kt)("h4",{id:"install-the-monorepo-management-tool-lerna"},"Install the monorepo management tool, ",(0,r.kt)("inlineCode",{parentName:"h4"},"lerna")),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install lerna@3.x.x --global\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add lerna@3.x.x\n")))),(0,r.kt)("p",null,"For all the internal projects (detox, detox-cli, demos, test) ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna")," will create symbolic links in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," copying the content of the projects. This way, any change you do on any code is there immediately. There is no need to update node modules or copy files between projects."),(0,r.kt)("h4",{id:"install-common-react-native-dependencies"},"Install common React Native dependencies"),(0,r.kt)("p",null,"React-Native CLI:"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-cli --global\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add react-native-cli\n")))),(0,r.kt)("p",null,"Watchman:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install watchman\n")),(0,r.kt)("h4",{id:"xcpretty"},"xcpretty"),(0,r.kt)("p",null,"You must also have ",(0,r.kt)("inlineCode",{parentName:"p"},"xcpretty")," installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gem install xcpretty\n")),(0,r.kt)("h3",{id:"detox"},"Detox"),(0,r.kt)("h4",{id:"clone-detox-and-submodules"},"Clone Detox and Submodules"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:wix/Detox.git\ncd detox\ngit submodule update --init --recursive\n")),(0,r.kt)("p",null,"(this makes sure all git submodule dependencies have been properly checked out)"),(0,r.kt)("h4",{id:"installing-and-linking-internal-projects"},"Installing and Linking Internal Projects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lerna bootstrap\n")),(0,r.kt)("h4",{id:"building-and-testing"},"Building and Testing"),(0,r.kt)("h5",{id:"automatically"},"Automatically"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"scripts/ci.ios.sh")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts/ci.android.sh")," are the scripts Detox runs in CI, they will run ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna bootstrap"),", unit tests, and E2E tests. Make sure these scripts pass before submitting a PR, this is exactly what Detox is going to run in CI."),(0,r.kt)("h5",{id:"manually"},"Manually"),(0,r.kt)("p",null,"The following steps can be run manually in order to build / test the various components of Detox."),(0,r.kt)("h6",{id:"1-unit-tests-and-lint"},"1. Unit Tests and Lint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lerna run test\n")),(0,r.kt)("p",null,"Detox JS code is 100% test covered and is set to break the build if coverage gets below, so make sure you run unit tests (",(0,r.kt)("inlineCode",{parentName:"p"},"lerna run test"),") locally before pushing."),(0,r.kt)("p",null,"Alternatively, to run only the JS tests, run the following from the ",(0,r.kt)("inlineCode",{parentName:"p"},"detox/detox")," directory:"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run unit\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run unit\n")))),(0,r.kt)("p",null,"or"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run unit:watch\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run unit:watch\n")))),(0,r.kt)("p",null,"After running the tests, ",(0,r.kt)("em",{parentName:"p"},"Jest")," will create a coverage report you can examine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd detox\nopen coverage/lcov-report/index.html\n")),(0,r.kt)("h6",{id:"2-running-detox-e2e-coverage-tests"},"2. Running Detox E2E Coverage Tests"),(0,r.kt)("p",null,'Detox has a suite of end-to-end tests to test its own API while developing (and for regression); We maintain a special application that is "tested" against Detox\u2019s API, but essentially, it\u2019s the API that is tested, not the app.'),(0,r.kt)("p",null,"To run the tests, you must first build the native code and then run based on your target of choice (Android / iOS):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"iOS:")),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd detox/test\nnpm run build:ios\nnpm run e2e:ios\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd detox/test\nyarn run build:ios\nyarn run e2e:ios\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Android:")),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd detox/test\nnpm run build:android\nnpm run e2e:android\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd detox/test\nyarn run build:android\nyarn run e2e:android\n")))))),(0,r.kt)("p",null,"FYI Android test project includes two flavors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fromBin")," - (",(0,r.kt)("strong",{parentName:"li"},"standard use case"),") utilizes the precompiled ",(0,r.kt)("inlineCode",{parentName:"li"},".aar")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," just like a standard RN project."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fromSource")," - compiles the project with RN sources from ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules"),", this is useful when developing and debugging Espresso idle resource.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/wiki/Building-from-source#android"},"Here")," are the prerequisites to compiling React Native from source.")),(0,r.kt)("p",null,"Each build can be triggered separately by running its Gradle assembling task (under ",(0,r.kt)("inlineCode",{parentName:"p"},"detox/test/android/"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew assembleFromSourceDebug\n")),(0,r.kt)("p",null,"or:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew assembleFromBinDebug\n")),(0,r.kt)("p",null,"To run from Android Studio, React Native\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"react.gradle")," script may require ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," to be in path.\nOn MacOS, environment variables can be exported to desktop applications by adding the following to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),"/",(0,r.kt)("inlineCode",{parentName:"p"},".zshrc"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"launchctl setenv PATH $PATH\n")),(0,r.kt)("h6",{id:"3-android-native-unit-tests"},"3. Android Native Unit-Tests"),(0,r.kt)("p",null,"Under ",(0,r.kt)("inlineCode",{parentName:"p"},"detox/android"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew testFullRelease\n")),(0,r.kt)("h3",{id:"detox---example-projects"},"Detox - Example Projects"),(0,r.kt)("p",null,"This is in fact a monorepo that also sports some example projects (for usage reference), alongside the main test project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"examples/demo-react-native-jest"),": Demonstrate usage of Detox in a React Native app project."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"examples/demo-native-ios"),": Demonstrates usage of Detox in a pure-native iOS app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"examples/demo-native-android")," (broken): Demonstrates usage of Detox in a pure-native Android app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"examples/demo-pure-native-android"),": Demonstrates usage of the ",(0,r.kt)("em",{parentName:"li"},"pure")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/tree/master/detox-native/README.md"},"Detox-Native")," project"),(0,r.kt)("li",{parentName:"ul"},"more...")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In order to run E2E tests associated with any of these projects, refer to the ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/wix/Detox/tree/master/examples"},"project-specific")," READMEs.")),(0,r.kt)("h3",{id:"detox-documentation-website"},"Detox Documentation Website"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://wix.github.io/Detox"},"documentation website")," is built using ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),"."),(0,r.kt)("p",null,"To run the website locally, run the following commands:"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd website\nnpm install\nnpm start\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd website\nyarn install\nyarn start\n# couldn't auto-convert command\n")))),(0,r.kt)("h4",{id:"updating-the-website"},"Updating the Website"),(0,r.kt)("p",null,"To update a specific page, edit the corresponding markdown file in ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/"),". To add a new page, create a new markdown file in ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/")," and add a link to it in ",(0,r.kt)("inlineCode",{parentName:"p"},"website/sidebars.json"),"."),(0,r.kt)("h5",{id:"website-deployment"},"Website Deployment"),(0,r.kt)("p",null,"While changes to the website are published automatically on every commit to ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Next")," version, tagging and locking docs to a specific version is done automatically on every Detox release."),(0,r.kt)("p",null,"In case you want to update the docs for a specific version, you can change the related files and code under ",(0,r.kt)("inlineCode",{parentName:"p"},"website/versioned_docs/version-<version>/")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"website/versioned_sidebars/version-<version>-sidebars.json"),"."),(0,r.kt)("h5",{id:"update-old-versions"},"Update Old Versions"),(0,r.kt)("p",null,"To update a specific version with the latest changes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Remove the version from ",(0,r.kt)("inlineCode",{parentName:"li"},"versions.json"),"."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run docusaurus docs:version <version>"),".")))}c.isMDXComponent=!0}}]);