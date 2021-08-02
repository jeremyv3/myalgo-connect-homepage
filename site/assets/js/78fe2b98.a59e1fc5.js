"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[790],{1160:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(7333),s=n(2669),o=n(7954),l=n(474);function i(e){var t=(0,a.useState)(e.value||"14241387"),n=t[0],i=t[1];return a.createElement(a.Fragment,null,a.createElement(s.Z,{className:"align-items-center"},a.createElement(o.Z,{className:"tx-label"},"App Index"),a.createElement(r.Z,{value:n,onValueChange:function(t){t.value&&(i(t.value),e.onChangeAppIndex(t.value))},className:"form-control tx-input",placeholder:"0",allowNegative:!1,isNumericString:!0,disabled:e.disabled}),a.createElement(l.Z,null,"Invalid number")))}},7720:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(2669),s=n(7954),o=n(6704),l=n(2842),i=n(2866),c=n(8227);function p(e){var t=e.accounts&&e.accounts.length>0?e.accounts[0]:{name:"No wallet loaded"},n=(0,a.useState)(t),p=n[0],m=n[1],u=(0,a.useState)(!1),d=u[0],f=u[1];(0,a.useEffect)((function(){e.accounts.length>0&&e.onSelectSender(e.accounts[0].address)}),[]);return a.createElement(a.Fragment,null,a.createElement(r.Z,{className:"align-items-center"},a.createElement(s.Z,{className:"tx-label"},"From"),a.createElement(o.Z,{disabled:e.disabled||!e.accounts||0===e.accounts.length,className:"from-dropdown",isOpen:d,toggle:function(e){e.preventDefault(),f(!d)}},a.createElement(l.Z,{caret:!0,disabled:e.disabled},a.createElement("span",{className:"text-ellipsis"},p?p.name:"No account loaded")),a.createElement(i.Z,null,e.accounts&&e.accounts.map((function(t){return a.createElement(c.Z,{onClick:function(){return function(t){m(t),e.onSelectSender(t.address)}(t)},key:"account-"+t.address},a.createElement("span",{className:"text-ellipsis"},t.name))}))))))}},5456:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(7294),r=n(7462),s=n(3366),o=n(7326),l=n(2856),i=n(5697),c=n.n(i),p=n(4184),m=n.n(p),u=n(3663),d={children:c().node,type:c().string,size:c().oneOfType([c().number,c().string]),bsSize:c().string,valid:c().bool,invalid:c().bool,tag:u.iC,innerRef:c().oneOfType([c().object,c().func,c().string]),plaintext:c().bool,addon:c().bool,className:c().string,cssModule:c().object},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind((0,o.Z)(n)),n.focus=n.focus.bind((0,o.Z)(n)),n}(0,l.Z)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,l=e.bsSize,i=e.valid,c=e.invalid,p=e.tag,d=e.addon,f=e.plaintext,g=e.innerRef,h=(0,s.Z)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(o)>-1,b=new RegExp("\\D","g"),x=p||("select"===o||"textarea"===o?o:"input"),E="form-control";f?(E+="-plaintext",x=p||"input"):"file"===o?E+="-file":"range"===o?E+="-range":v&&(E=d?null:"form-check-input"),h.size&&b.test(h.size)&&((0,u.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var y=(0,u.mx)(m()(t,c&&"is-invalid",i&&"is-valid",!!l&&"form-control-"+l,E),n);return("input"===x||p&&"function"==typeof p)&&(h.type=o),h.children&&!f&&"select"!==o&&"string"==typeof x&&"select"!==x&&((0,u.O4)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),a.createElement(x,(0,r.Z)({},h,{ref:g,className:y,"aria-invalid":c}))},t}(a.Component);f.propTypes=d,f.defaultProps={type:"text"};var g=f,h=n(2669),v=n(7954),b=n(8764).Buffer;function x(e){var t=(0,a.useState)(""),n=t[0],r=t[1];return a.createElement(a.Fragment,null,a.createElement(h.Z,null,a.createElement(v.Z,{className:"tx-label"},"Note"),a.createElement(g,{className:"tx-input note",type:"textarea",placeholder:"Note",value:n,onChange:function(t){r(t.target.value),e.onChangeNote(new Uint8Array(b.from(t.target.value,"utf8")))},disabled:e.disabled})))}},711:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return T},default:function(){return P},frontMatter:function(){return w},metadata:function(){return S},toc:function(){return R}});var a=n(7462),r=n(3366),s=n(7294),o=n(3905),l=n(5861),i=n(7757),c=n.n(i),p=n(412),m=n(7243),u=n(3999),d=n(8008),f=n(9393),g=n(8829),h=n(267),v=n(1252),b=n(5538),x=n(7975),E=n(7954),y=n(3130),Z=n(1160),N=n(1152),k=n(7720),C=n(5456);function A(){var e=(0,s.useContext)(y.E),t=p.Z.canUseDOM&&window.sharedAccounts&&Array.isArray(window.sharedAccounts)?window.sharedAccounts:[],n=(0,s.useState)(""),a=n[0],r=n[1],o=(0,s.useState)("14241387"),i=o[0],A=o[1],I=(0,s.useState)(),O=I[0],w=I[1],T=(0,s.useState)(),S=T[0],R=T[1],M=(0,s.useState)("1"),P=M[0],z=M[1],j=function(e){P!==e&&z(e)},D=function(){var n=(0,l.Z)(c().mark((function n(r){var s,o,l;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),n.prev=1,0!==t.length){n.next=4;break}return n.abrupt("return");case 4:return s={fee:1e3,firstRound:15249878,flatFee:!1,genesisHash:"SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=",genesisID:"testnet-v1.0",lastRound:15250878},o=e.algosdk.makeApplicationOptInTxnFromObject({suggestedParams:Object.assign({},s,{fee:1e3,flatFee:!0}),from:a,appIndex:parseInt(i),note:O}),n.next=8,e.myAlgoWallet.signTransaction(o.toByte());case 8:l=n.sent,R(l),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(1),console.error(n.t0),R(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}();return s.createElement("div",{className:"interactive-example"},s.createElement(m.Z,{tabs:!0},s.createElement(u.Z,null,s.createElement(d.Z,{className:"1"===P?"active active-tab":"",onClick:function(){j("1")}},"Form")),s.createElement(u.Z,null,s.createElement(d.Z,{className:"2"===P?"active active-tab":"",onClick:function(){j("2")}},"Code"))),s.createElement(f.Z,{activeTab:P},s.createElement(g.Z,{tabId:"1"},s.createElement(h.Z,{className:"mt-3"},s.createElement(v.Z,{xs:"12",lg:"6",className:"mt-2"},s.createElement(b.Z,{id:"payment-tx",onSubmit:D},s.createElement(k.Z,{onSelectSender:r,accounts:t}),s.createElement(Z.Z,{onChangeAppIndex:A}),s.createElement(C.Z,{onChangeNote:w}),s.createElement(x.Z,{color:"primary",block:!0,type:"submit",className:"mt-2",disabled:0===t.length},"Submit"))),s.createElement(v.Z,{xs:"12",lg:"6",className:"mt-2 mt-xs-2"},s.createElement(E.Z,{className:"tx-label"},"signTransaction() Response"),s.createElement("div",{className:"response-base txn-optin-response"},s.createElement(N.Z,{code:S?JSON.stringify(S,null,1):"",language:"js",plugins:["response"]})),s.createElement(x.Z,{className:"button-margin",color:"primary",block:!0,disabled:!S,onClick:function(){return R("")}},"Clear Method Response"))),0===t.length&&s.createElement("div",{className:"error-connect mt-3"}," In order to run this example, you need to execute connect() method. ")),s.createElement(g.Z,{tabId:"2"},s.createElement("div",{className:"mt-4"}," The following codes allow you to create and sent to MyAlgo Connect an opt-in transaction to be sign by the user. There are two alternatives to create it. Pick the one you prefere."),s.createElement(h.Z,{className:"mt-3"},s.createElement(v.Z,null,s.createElement(E.Z,{className:"tx-label"},"Using Algosdk (Recommended)"),s.createElement(N.Z,{code:"\nimport algosdk from \"algosdk\";\nimport MyAlgoConnect from '@randlabs/myalgo-connect';\n \nconst algodClient = new algosdk.Algodv2(\"\",'https://api.testnet.algoexplorer.io', '');\nconst params = await algodClient.getTransactionParams().do();\n\nconst txn = algosdk.makeApplicationOptInTxnFromObject({\n    suggestedParams: {\n        ...params,\n    },\n    from: sender,\n    appIndex: appIndex,\n    note: note\n});\n\nconst myAlgoConnect = new MyAlgoConnect();\nconst signedTxn = await myAlgoConnect.signTransaction(txn.toByte());\n",language:"js"})),s.createElement(v.Z,{className:"mt-4"},s.createElement(E.Z,{className:"tx-label"},"Another alternative"),s.createElement(N.Z,{code:"\nimport algosdk from \"algosdk\";\nimport MyAlgoConnect from '@randlabs/myalgo-connect';\n \nconst algodClient = new algosdk.Algodv2(\"\",'https://api.testnet.algoexplorer.io', '');\nconst params = await algodClient.getTransactionParams().do();\n\nconst txn : any = {\n    ...params,\n    type: \"appl\",\n    appOnComplete: 1, // OnApplicationComplete.OptInOC\n    from: sender,\n    appIndex: appIndex,\n    note: note,\n};\n\nconst myAlgoConnect = new MyAlgoConnect();\nconst signedTxn = await myAlgoConnect.signTransaction(txn);\n",language:"js"}))))))}var I=function(){return s.createElement(y.Z,null,s.createElement(A,null))},O=["components"],w={sidebar_position:4},T="Appl Opt-In Transaction",S={unversionedId:"interactive-examples/ApplOptIn",id:"interactive-examples/ApplOptIn",isDocsHomePage:!1,title:"Appl Opt-In Transaction",description:"Create and send an opt-in transaction to be signed by the user already engaged.",source:"@site/docs/interactive-examples/ApplOptIn.mdx",sourceDirName:"interactive-examples",slug:"/interactive-examples/ApplOptIn",permalink:"/docs/interactive-examples/ApplOptIn",editUrl:"https://github.com/randlabs/myalgo-connect-homepage/edit/master/docs/interactive-examples/ApplOptIn.mdx",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Asset Transfer Transaction",permalink:"/docs/interactive-examples/ASATransacation"},next:{title:"Appl CloseOut Transaction",permalink:"/docs/interactive-examples/ApplCloseOut"}},R=[{value:"Preconditions",id:"preconditions",children:[]},{value:"Interactive Example",id:"interactive-example",children:[]}],M={toc:R};function P(e){var t=e.components,n=(0,r.Z)(e,O);return(0,o.kt)("wrapper",(0,a.Z)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"appl-opt-in-transaction"},"Appl Opt-In Transaction"),(0,o.kt)("p",null,"Create and send an opt-in transaction to be signed by the user already engaged."),(0,o.kt)("h3",{id:"preconditions"},"Preconditions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"User is already engaged and shared some account.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Transaction sender should match with one of address shared by the user, otherwise user will be alert."))),(0,o.kt)("h3",{id:"interactive-example"},"Interactive Example"),(0,o.kt)(I,{mdxType:"ApplOptIn"}))}P.isMDXComponent=!0},5538:function(e,t,n){var a=n(7462),r=n(3366),s=n(7326),o=n(2856),l=n(7294),i=n(5697),c=n.n(i),p=n(4184),m=n.n(p),u=n(3663),d={children:c().node,inline:c().bool,tag:u.iC,innerRef:c().oneOfType([c().object,c().func,c().string]),className:c().string,cssModule:c().object},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind((0,s.Z)(n)),n.submit=n.submit.bind((0,s.Z)(n)),n}(0,o.Z)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,s=e.inline,o=e.tag,i=e.innerRef,c=(0,r.Z)(e,["className","cssModule","inline","tag","innerRef"]),p=(0,u.mx)(m()(t,!!s&&"form-inline"),n);return l.createElement(o,(0,a.Z)({},c,{ref:i,className:p}))},t}(l.Component);f.propTypes=d,f.defaultProps={tag:"form"},t.Z=f}}]);