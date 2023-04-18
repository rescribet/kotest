"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[70565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),k=r,d=m["".concat(c,".").concat(k)]||m[k]||u[k]||s;return n?o.createElement(d,a(a({ref:t},p),{},{components:n})):o.createElement(d,a({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const s={id:"clock",title:"Test Clock",sidebar_label:"Test Clock",slug:"test_clock.html"},a=void 0,i={unversionedId:"extensions/clock",id:"version-5.6/extensions/clock",title:"Test Clock",description:"Latest Release",source:"@site/versioned_docs/version-5.6/extensions/clock.md",sourceDirName:"extensions",slug:"/extensions/test_clock.html",permalink:"/docs/extensions/test_clock.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/extensions/clock.md",tags:[],version:"5.6",frontMatter:{id:"clock",title:"Test Clock",sidebar_label:"Test Clock",slug:"test_clock.html"},sidebar:"extensions",previous:{title:"WireMock",permalink:"/docs/extensions/wiremock.html"},next:{title:"Pitest",permalink:"/docs/extensions/pitest.html"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest.extensions/kotest-extensions-clock"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-extensions-clock",alt:"Latest Release"}))),(0,r.kt)("p",null,"The JVM provides the java.time.Clock interface which is used to generate ",(0,r.kt)("inlineCode",{parentName:"p"},"Instant"),"s. When we have code that relies on time,\nwe can use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Clock")," to generate the values, rather than using things like ",(0,r.kt)("inlineCode",{parentName:"p"},"Instant.now()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"System.currentTimeMillis()"),"."),(0,r.kt)("p",null,"Then in tests we can provide a fixed or controllable clock which avoids issues where the time changes on each test run.\nIn your real code, you provide an instance of Clock.systemUTC() or whatever."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The following module is needed: ",(0,r.kt)("inlineCode",{parentName:"p"},"io.kotest.extensions:kotest-extensions-clock")," in your build. Search maven central for latest version ",(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=kotest-extensions-clock"},"here"),".")),(0,r.kt)("p",null,"In order to use it, we create an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"TestClock")," passing in an instant and a zone offset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"val timestamp = Instant.ofEpochMilli(1234)\nval clock = TestClock(timestamp, ZoneOffset.UTC)\n")),(0,r.kt)("p",null,"We can control the clock via ",(0,r.kt)("inlineCode",{parentName:"p"},"plus")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"minus")," which accept durations, eg"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"clock.plus(6.minutes)\n")),(0,r.kt)("p",null,"Note that the clock is mutable, and the internal state is changed when you use plus or minus."))}u.isMDXComponent=!0}}]);