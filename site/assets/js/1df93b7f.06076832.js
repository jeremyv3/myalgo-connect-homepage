"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[237],{8857:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(4996),a=n(7294);function s(){return a.createElement("section",{className:"section5"},a.createElement("div",{className:"custom-container"},a.createElement("div",{className:"row1"},a.createElement("div",{className:"left"},a.createElement("img",{src:(0,r.Z)("/img/connect-icon.svg"),alt:"",className:"logo"})),a.createElement("div",{className:"right"},a.createElement("div",{className:"icons"},a.createElement("div",{className:"aligned"},a.createElement("a",{href:"https://github.com/randlabs/myalgo-connect/releases"},a.createElement("img",{src:(0,r.Z)("/img/github-icon.svg"),alt:"",className:"scale-on-hover"})),a.createElement("a",{href:"https://twitter.com/myalgo_"},a.createElement("img",{src:(0,r.Z)("/img/twitter-icon.svg"),alt:"",className:"scale-on-hover"})),a.createElement("a",{href:"https://medium.com/randlabs"},a.createElement("img",{src:(0,r.Z)("/img/mm-icon.svg"),alt:"",className:"scale-on-hover medium"})),a.createElement("div",{className:"contact-us scale-on-hover"},a.createElement("a",{href:"https://randlabs.io/contact"},"Contact Us \xa0 >")))))),a.createElement("div",{className:"row2"},a.createElement("div",{className:"right-reserved"},"\xa9 2021 My Algo Connect. All Rights Reserved."),a.createElement("a",{href:"https://randlabs.io",className:"powered scale-on-hover"},"\xa0 Powered by Randlabs"))))}},6642:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(5861),a=n(7757),s=n.n(a),i=n(2263),o=n(4996),c=n(6016),l=n(6010),m=n(7294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=new Map,h=new WeakMap,p=0;function g(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(h.has(n)||(p+=1,h.set(n,p.toString())),h.get(n)):"0":e[t]);var n})).toString()}function v(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var r=function(e){var t=g(e),n=d.get(t);if(!n){var r,a=new Map,s=new IntersectionObserver((function(t){t.forEach((function(t){var n,s=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(n=a.get(t.target))||n.forEach((function(e){e(s,t)}))}))}),e);r=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:a},d.set(t,n)}return n}(n),a=r.id,s=r.observer,i=r.elements,o=i.get(e)||[];return i.has(e)||i.set(e,o),o.push(t),s.observe(e),function(){o.splice(o.indexOf(t),1),0===o.length&&(i.delete(e),s.unobserve(e)),0===i.size&&(s.disconnect(),d.delete(a))}}function f(e){return"function"!=typeof e.children}var E=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),f(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,a=e.trackVisibility,s=e.delay;this._unobserveCb=v(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:a,delay:s})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!f(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var r=this.props,a=r.children,s=r.as,i=r.tag,o=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(r,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return(0,m.createElement)(s||i||"div",u({ref:this.handleNode},o),a)},r}(m.Component);function w(e){var t=void 0===e?{}:e,n=t.threshold,r=t.delay,a=t.trackVisibility,s=t.rootMargin,i=t.root,o=t.triggerOnce,c=t.skip,l=t.initialInView,u=(0,m.useRef)(),d=(0,m.useState)({inView:!!l}),h=d[0],p=d[1],g=(0,m.useCallback)((function(e){void 0!==u.current&&(u.current(),u.current=void 0),c||e&&(u.current=v(e,(function(e,t){p({inView:e,entry:t}),t.isIntersecting&&o&&u.current&&(u.current(),u.current=void 0)}),{root:i,rootMargin:s,threshold:n,trackVisibility:a,delay:r}))}),[Array.isArray(n)?n.toString():n,i,s,o,c,a,r]);(0,m.useEffect)((function(){u.current||!h.entry||o||c||p({inView:!!l})}));var f=[g,h.inView,h.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}E.displayName="InView",E.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var C=n(8857),b=n(3130),y=n(1152),N=function(e){var t=(0,m.useContext)(b.E),n=(0,m.useState)([]),a=(n[0],n[1]),i=w({threshold:1,triggerOnce:!0}),o=i.ref,c=i.inView,l=(i.entry,function(){var n=(0,r.Z)(s().mark((function n(){var r,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=e.onComplete,n.next=4,t.myAlgoWallet.connect();case 4:i=n.sent,a(i),r(i),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}());return m.createElement("div",{ref:o,className:"custom-container from-small "+(c?"appear":"")},m.createElement("div",{className:"function"},m.createElement("h1",{className:"title"},"Know your user"),m.createElement("h2",{className:"subtitle"},"Connect your dApp(s) with the user\u2019s wallet(s)."),m.createElement("div",{className:"button button-blue scale-on-hover",onClick:l},"Connect")),m.createElement("div",{ref:o,className:"code-max-width from-right "+(c?"appear":"")},m.createElement("div",{className:"mb-3 install-code"},m.createElement(y.Z,{code:"npm install @randlabs/myalgo-connect",language:"js"})),m.createElement(y.Z,{code:"\nimport MyAlgoConnect from '@randlabs/myalgo-connect';\n \nconst myAlgoConnect = new MyAlgoConnect();\n\nconst accountsSharedByUser = await myAlgoConnect.connect();\n",language:"js"})))};function k(e){var t=(0,m.useContext)(b.E),n=(0,m.useState)(""),a=n[0],i=n[1],o=w({threshold:1,triggerOnce:!0}),c=o.ref,l=o.inView,u=(o.entry,function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.algoClient.sendRawTransaction(e.txToSend.blob).do();case 3:r=n.sent,i(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}());return m.createElement("div",{ref:c,className:"custom-container from-small "+(l?"appear":"")},m.createElement("div",{className:"function"},m.createElement("div",null,m.createElement("h1",{className:"title"},"Send it"),m.createElement("h2",{className:"subtitle"},"Now you only need to send the user\u2019s approved transaction to the Algorand blockchain and voil\xe0!"),m.createElement("div",{className:"button button-blue scale-on-hover "+(e.txToSend?"":"disabled"),onClick:u},"Send!"))),m.createElement("div",null,m.createElement("div",{ref:c,className:"code-max-width from-right "+(l?"appear":"")},m.createElement(y.Z,{code:"\nimport algosdk from \"algosdk\";\n\nconst algodClient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');\n\nconst response = await algodClient.sendRawTransaction(signedTxn.blob).do();\n",language:"js"})),m.createElement("div",{ref:c,className:"code-max-width from-bottom "+(a?"appear":"hidden")+" mt-2"},m.createElement(y.Z,{code:a?JSON.stringify(a,null,1):"",language:"js",plugins:["response"]}))))}var Z=(0,m.createContext)([]);function x(e){return m.createElement(Z.Provider,{value:e.accounts},e.children)}function L(e){var t=(0,m.useContext)(b.E),n=(0,m.useContext)(Z),a=n&&n.length>0?n[0].address:"",i=w({threshold:1,triggerOnce:!0}),o=i.ref,c=i.inView,l=function(){var n=(0,r.Z)(s().mark((function n(){var r,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t.params&&a){n.next=3;break}return n.abrupt("return");case 3:return r=t.algosdk.makePaymentTxnWithSuggestedParamsFromObject({suggestedParams:Object.assign({},t.params,{fee:1e3,flatFee:!0}),from:a,to:a,amount:1e3}),n.next=6,t.myAlgoWallet.signTransaction(r.toByte());case 6:i=n.sent,e.callbackSignedTxn(i),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();return m.createElement("div",{ref:o,className:"custom-container from-small "+(c?"appear":"")},m.createElement("div",{className:"function"},m.createElement("div",null,m.createElement("h1",{className:"title"},"Let him sign"),m.createElement("h2",{className:"subtitle"},"Time for the user to review and sign your transaction(s) interacting with My Algo Connect\u2019s friendly UI."),m.createElement("div",{className:"button button-blue scale-on-hover "+(n.length>0?"":"disabled"),onClick:l},"Sign!"))),m.createElement("div",{ref:o,className:"code-max-width from-right "+(c?"appear":"")},m.createElement(y.Z,{code:'\nimport algosdk from "algosdk";\n\nconst txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({\n  suggestedParams: params,\n  from: sender,\n  to: receiver,\n  amount: 1000 // 0.001 Algo\n});\n\nconst signedTxn = await myAlgoConnect.signTransaction(txn.toByte());\n',language:"js"})))}function S(e){return A.apply(this,arguments)}function A(){return(A=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){(0,m.useContext)(b.E);var e=(0,i.Z)().siteConfig,t=(0,m.useState)([]),n=t[0],a=t[1],u=(0,m.useState)(),d=u[0],h=u[1],p=(0,m.useState)(0),g=p[0],v=p[1],f=(0,m.useState)(!0),E=f[0],y=f[1],Z=(0,m.useState)(!1),A=Z[0],M=Z[1],V=(0,m.useState)(0),O=V[0],T=V[1],j=w({threshold:.5}),P=j.ref,I=j.inView,_=(j.entry,"#245EC7"),U="white",B=function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==g){e.next=2;break}return e.abrupt("return");case 2:M(!0),y(!1),v(t),S(400).then((function(){T(t)})),S(500).then((function(){y(!0)}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return m.createElement(c.Z,{title:"Hello from "+e.title,description:"Description will go into a meta tag in <head />"},m.createElement("div",{className:"homepage"},m.createElement("section",{className:"section1"},m.createElement("div",{className:"custom-container"},m.createElement("div",{className:"left"},m.createElement("h1",{className:"title"},"Dapp gateways have never been easier"),m.createElement("h2",{className:"subtitle"},"Connect your application to Algorand while allowing your user to interact with it in the simplest and most secure way."),m.createElement("div",{className:"connect-button"},m.createElement("a",{href:"/docs/introduction"},m.createElement("div",{className:"button-blue scale-on-hover"},"Get Started")))),m.createElement("div",{className:"right"},m.createElement("img",{src:(0,o.Z)("/img/myalgo-connect-tour.gif"),className:"gif"}))),m.createElement("h1",{className:"message"},"An intuitive UI inspired by users")),m.createElement("section",{className:"section2"},m.createElement("div",{className:"custom-container"},m.createElement("h2",{className:"message"},"Connect your application to Algorand while allowing your user to interact with it in the simplest and most secure way."),m.createElement("div",{ref:P},m.createElement("div",{className:(0,l.Z)("feature-section")},m.createElement("div",{className:(0,l.Z)("left","from-left",0===g&&E?"appear":"",0!==g&&A?"disappear":"",0===O?"":"hidden")},m.createElement("img",{src:(0,o.Z)("/img/hardware.svg"),alt:""})),m.createElement("div",{className:(0,l.Z)("left","from-left",1===g&&E?"appear":"",1!==g&&A?"disappear":"",1===O?"":"hidden")},m.createElement("img",{src:(0,o.Z)("/img/extension.svg"),alt:""})),m.createElement("div",{className:(0,l.Z)("left","from-left",2===g&&E?"appear":"",2!==g&&A?"disappear":"",2===O?"":"hidden")},m.createElement("img",{src:(0,o.Z)("/img/feature.svg"),alt:""})),m.createElement("div",{className:(0,l.Z)("left","from-left",3===g&&E?"appear":"",3!==g&&A?"disappear":"",3===O?"":"hidden")},m.createElement("img",{src:(0,o.Z)("/img/warning.svg"),alt:""})),m.createElement("div",{className:"right"},m.createElement("div",{className:"icons"},m.createElement("div",{className:(0,l.Z)("icon-container","scale-on-hover",0===g?"selected":""),onClick:function(){return B(0)}},m.createElement("svg",{width:"47",height:"47",viewBox:"0 0 47 47",fill:0===g?U:_,xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M0.621314 37.6431L9.71906 46.7409C10.0645 47.0864 10.6403 47.0864 11.0146 46.7409L19.4502 38.3053L21.5231 40.3782C21.8686 40.7237 22.4444 40.7237 22.8186 40.3782L45.6828 17.385C47.4391 15.6 47.439 12.7209 45.6828 10.9647L36.2972 1.57905C34.5122 -0.205951 31.6331 -0.20595 29.8769 1.57905L7.01277 24.5723C6.66728 24.9178 6.66728 25.4936 7.01277 25.8679L9.08567 27.9408L0.6501 36.3764C0.275825 36.7218 0.275828 37.2977 0.621314 37.6431ZM11.8495 39.2266L10.0358 41.0404L8.74019 39.7448L10.554 37.931L11.8495 39.2266ZM7.84769 35.2248L9.14326 36.5203L7.32946 38.3341L6.0339 37.0385L7.84769 35.2248Z"}))),m.createElement("div",{className:(0,l.Z)("icon-container","scale-on-hover",1===g?"selected":""),onClick:function(){return B(1)}},m.createElement("svg",{width:"41",height:"50",viewBox:"0 0 41 50",fill:1===g?U:_,xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M23.5352 48.5352L23.5352 43.8282C23.5352 42.0403 22.0807 40.5859 20.293 40.5859C18.5053 40.5859 17.0508 42.0403 17.0508 43.8282L17.0508 48.5352C17.0508 49.3441 16.3949 50 15.5859 50L1.46484 50C0.655859 50 -2.1569e-06 49.3441 -2.12154e-06 48.5352L-1.50429e-06 34.4141C-1.46892e-06 33.6051 0.655859 32.9492 1.46484 32.9492L6.17187 32.9492C7.95957 32.9492 9.41406 31.4947 9.41406 29.707C9.41406 27.9193 7.95967 26.4648 6.17187 26.4648L1.46484 26.4648C0.65586 26.4648 -1.12815e-06 25.809 -1.09278e-06 25L-4.75532e-07 10.8789C-4.4017e-07 10.0699 0.65586 9.41406 1.46484 9.41406L14.1211 9.41406L14.1211 6.17187C14.1211 2.76875 16.8898 -1.03579e-06 20.293 -8.87034e-07C23.6961 -7.38278e-07 26.4648 2.76875 26.4648 6.17187L26.4648 9.41406L39.1211 9.41406C39.9301 9.41406 40.5859 10.0699 40.5859 10.8789L40.5859 23.5352L40.5859 35.8789L40.5859 48.5352C40.5859 49.3441 39.9301 50 39.1211 50L25 50C24.191 50 23.5352 49.3441 23.5352 48.5352Z"}))),m.createElement("div",{className:(0,l.Z)("feature-icon icon-container","scale-on-hover",2===g?"selected":""),onClick:function(){return B(2)}},m.createElement("svg",{width:"68",height:"63",viewBox:"0 0 68 63",fill:2===g?U:_,xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M8.9389 14.9146C8.96826 25.8747 9.00046 36.8348 9.03039 47.795C9.03406 48.9815 9.24207 50.3089 11.1874 50.9573C26.4486 56.2546 40.8206 43.494 56.082 48.7915C57.2696 49.272 58.2303 48.844 58.2268 47.6575C58.1967 36.6974 58.1896 25.7368 58.1356 14.7769C58.1269 13.018 57.1661 12.0952 55.9782 11.6145C40.7172 6.31708 26.3448 19.0776 11.0833 13.78C9.89576 13.3 8.93547 13.7279 8.9389 14.9146ZM13.3256 47.3957C13.3176 44.3719 13.3084 41.348 13.3004 38.3242C16.6031 39.0936 19.6695 39.2073 23.0388 38.8803C23.0467 41.9041 23.0558 44.9282 23.0637 47.9518C19.6949 48.2785 16.6283 48.1654 13.3256 47.3957ZM53.8655 24.3811C53.876 27.817 53.8848 31.2531 53.8943 34.6889C50.4263 33.8665 47.1729 33.7941 43.6406 34.2008C43.6494 37.2248 43.6578 40.2487 43.6658 43.2725C40.1696 43.8315 36.7768 44.7133 33.365 45.6487C33.3569 42.6251 33.3478 39.601 33.3396 36.5771C36.7515 35.6419 40.1446 34.7596 43.6406 34.2008C43.6309 30.765 43.6216 27.3289 43.6121 23.8931C47.1445 23.4867 50.3976 23.559 53.8655 24.3811ZM43.5863 14.6886C43.5951 17.7567 43.6035 20.8251 43.612 23.8935C40.1403 24.4478 36.7722 25.3211 33.3847 26.25C33.3762 23.1816 33.3676 20.1133 33.3592 17.0449C36.7464 16.1158 40.1148 15.243 43.5863 14.6886ZM33.3116 26.2698C33.3205 29.7056 33.3302 33.1416 33.3395 36.5775C29.9291 37.5091 26.5404 38.367 23.0389 38.8801C23.029 35.4443 23.0195 32.0083 23.0101 28.5726C26.5112 28.059 29.9008 27.2015 33.3116 26.2698ZM22.9245 19.375C22.9333 22.4431 22.9417 25.5115 22.9504 28.58C19.6025 28.8994 16.553 28.7818 13.2721 28.0164C13.2634 24.9479 13.2548 21.8797 13.2459 18.8116C16.527 19.5769 19.5769 19.6947 22.9245 19.375Z"}))),m.createElement("div",{className:(0,l.Z)("icon-container","scale-on-hover",3===g?"selected":""),onClick:function(){return B(3)}},m.createElement("svg",{width:"46",height:"41",viewBox:"0 0 46 41",fill:3===g?U:_,xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M0.919561 30.8367L17.0353 3.39941C19.6676 -1.13314 26.3241 -1.13314 28.9469 3.39941L45.0721 30.8367C47.7044 35.3692 44.4283 41 39.1163 41L6.93219 41C1.62024 41 -1.71274 35.3134 0.919561 30.8367ZM23.0006 34.9132C24.4019 34.9132 25.5666 33.7684 25.5666 32.391C25.5666 31.0135 24.402 29.8687 23.0006 29.8687C21.5992 29.8687 20.4346 31.0135 20.4914 32.4561C20.4251 33.7684 21.656 34.9132 23.0006 34.9132ZM20.6618 18.6072C20.7754 20.5617 20.8985 22.5068 21.0122 24.4613C21.069 25.0942 21.069 25.6712 21.069 26.2948C21.1258 27.3279 21.9496 28.1283 23.0006 28.1283C24.0516 28.1283 24.8659 27.3837 24.9322 26.3507C25.1026 23.3072 25.2825 20.3197 25.453 17.2763C25.5098 16.4759 25.5666 15.6661 25.6329 14.8657C25.6329 13.5441 24.8754 12.4552 23.6445 12.1108C22.4135 11.8223 21.1921 12.3994 20.6618 13.5441C20.4819 13.9443 20.4251 14.3445 20.4251 14.8099C20.4819 16.085 20.605 17.3507 20.6618 18.6072Z"})))),m.createElement("div",{className:(0,l.Z)("from-right","message-item",0===g&&E?"appear":"",0!==g&&A?"disappear":"",0===O?"":"hidden")},m.createElement("h1",{className:"title"},"Hardware wallet support"),m.createElement("h2",{className:"subtitle"},"Connect your users to their favorite hardware wallets like Ledger Nano X or S, giving them the tools to interact with your dApp in the most secure way.")),m.createElement("div",{className:(0,l.Z)("from-right","message-item",1===g&&E?"appear":"",1!==g&&A?"disappear":"",1===O?"":"hidden")},m.createElement("h1",{className:"title"},"Forget about extensions"),m.createElement("h2",{className:"subtitle"},"My Algo Connect is managed in the user\u2019s browser without any backend service, downloads, extensions, or browser plugins providing a simpler intuitive interaction.")),m.createElement("div",{className:(0,l.Z)("from-right","message-item",2===g&&E?"appear":"",2!==g&&A?"disappear":"",2===O?"":"hidden")},m.createElement("h1",{className:"title"},"Advanced Features"),m.createElement("h2",{className:"subtitle"},"Power up your dApp\u2019s UX with My Algo Connect advanced features like bulk and group transactions, full transaction overviews, warning alerts, and more. Multiple transactions can be signed at the same time, giving your users the best experience.")),m.createElement("div",{className:(0,l.Z)("from-right","message-item",3===g&&E?"appear":"",3!==g&&A?"disappear":"",3===O?"":"hidden")},m.createElement("h1",{className:"title"},"Warning Alerts"),m.createElement("h2",{className:"subtitle"},"Users will receive clear and visible alerts, raising their awareness when they rekey or empty an account, modify or destroy an asset, update or delete an application from the ledger. Your users have never felt safer interacting with the blockchain."))))))),m.createElement("section",{className:"section3"},m.createElement("div",{ref:P,className:(0,l.Z)("from-small","custom-container",I?"appear":"")},m.createElement("h1",{className:"title"},"Simplify your work, while giving a great experience to your dApp users"),m.createElement("h2",{className:"subtitle"},"Compatible with all browsers, including Safari and smartphones."))),m.createElement("section",{className:"section4"},m.createElement("div",{className:"custom-container"},m.createElement("div",{className:"row1"},m.createElement("h1",{className:"title"},"An SDK for developers, ",m.createElement("br",null),"by developers"),m.createElement("h2",{className:"subtitle"},"Start connecting your users with ",m.createElement("br",null),"your dApp in three simple steps.")),m.createElement("div",{className:"code-section"},m.createElement(b.Z,null,m.createElement(N,{onComplete:function(e){a(e)}}),m.createElement(x,{accounts:n},m.createElement(L,{callbackSignedTxn:function(e){h(e)}})),m.createElement(k,{txToSend:d})))))),m.createElement(C.Z,null))}}}]);