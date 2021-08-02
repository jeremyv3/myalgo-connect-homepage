"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[566],{1160:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(7333),l=n(2669),s=n(7954),o=n(474);function c(e){var t=(0,a.useState)(e.value||"14241387"),n=t[0],c=t[1];return a.createElement(a.Fragment,null,a.createElement(l.Z,{className:"align-items-center"},a.createElement(s.Z,{className:"tx-label"},"App Index"),a.createElement(r.Z,{value:n,onValueChange:function(t){t.value&&(c(t.value),e.onChangeAppIndex(t.value))},className:"form-control tx-input",placeholder:"0",allowNegative:!1,isNumericString:!0,disabled:e.disabled}),a.createElement(o.Z,null,"Invalid number")))}},7720:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),r=n(2669),l=n(7954),s=n(6704),o=n(2842),c=n(2866),i=n(8227);function m(e){var t=e.accounts&&e.accounts.length>0?e.accounts[0]:{name:"No wallet loaded"},n=(0,a.useState)(t),m=n[0],p=n[1],d=(0,a.useState)(!1),u=d[0],g=d[1];(0,a.useEffect)((function(){e.accounts.length>0&&e.onSelectSender(e.accounts[0].address)}),[]);return a.createElement(a.Fragment,null,a.createElement(r.Z,{className:"align-items-center"},a.createElement(l.Z,{className:"tx-label"},"From"),a.createElement(s.Z,{disabled:e.disabled||!e.accounts||0===e.accounts.length,className:"from-dropdown",isOpen:u,toggle:function(e){e.preventDefault(),g(!u)}},a.createElement(o.Z,{caret:!0,disabled:e.disabled},a.createElement("span",{className:"text-ellipsis"},m?m.name:"No account loaded")),a.createElement(c.Z,null,e.accounts&&e.accounts.map((function(t){return a.createElement(i.Z,{onClick:function(){return function(t){p(t),e.onSelectSender(t.address)}(t)},key:"account-"+t.address},a.createElement("span",{className:"text-ellipsis"},t.name))}))))))}},1693:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return D},default:function(){return O},frontMatter:function(){return w},metadata:function(){return S},toc:function(){return I}});var a=n(7462),r=n(3366),l=n(7294),s=n(3905),o=n(5861),c=n(7757),i=n.n(c),m=n(412),p=n(7243),d=n(3999),u=n(8008),g=n(9393),f=n(8829),b=n(267),v=n(1252),x=n(5538),h=n(7975),E=n(7954),Z=n(3130),y=n(1160),k=n(1152),A=n(7720);function N(){var e=(0,l.useContext)(Z.E),t=m.Z.canUseDOM&&window.sharedAccounts&&Array.isArray(window.sharedAccounts)?window.sharedAccounts:[],n=(0,l.useState)("17140470"),a=n[0],r=n[1],s=(0,l.useState)(""),c=s[0],N=s[1],C=(0,l.useState)(),T=C[0],w=C[1],D=(0,l.useState)("1"),S=D[0],I=D[1],M=function(e){S!==e&&I(e)},O=function(){var n=(0,o.Z)(i().mark((function n(r){var l,s,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),n.prev=1,0!==t.length&&a){n.next=4;break}return n.abrupt("return");case 4:return l={fee:1e3,firstRound:15249878,flatFee:!1,genesisHash:"SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=",genesisID:"testnet-v1.0",lastRound:15250878},s=e.algosdk.makeApplicationDeleteTxnFromObject({suggestedParams:Object.assign({},l,{fee:1e3,flatFee:!0}),from:c,appIndex:parseInt(a)}),n.next=8,e.myAlgoWallet.signTransaction(s.toByte());case 8:o=n.sent,w(o),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(1),console.error(n.t0),w(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}();return l.createElement("div",{className:"interactive-example"},l.createElement(p.Z,{tabs:!0},l.createElement(d.Z,null,l.createElement(u.Z,{className:"1"===S?"active active-tab":"",onClick:function(){M("1")}},"Form")),l.createElement(d.Z,null,l.createElement(u.Z,{className:"2"===S?"active active-tab":"",onClick:function(){M("2")}},"Code"))),l.createElement(g.Z,{activeTab:S},l.createElement(f.Z,{tabId:"1"},l.createElement(b.Z,{className:"mt-3"},l.createElement(v.Z,{xs:"12",lg:"6",className:"mt-2"},l.createElement(x.Z,{id:"payment-tx",onSubmit:O},l.createElement(A.Z,{onSelectSender:N,accounts:t}),l.createElement(y.Z,{onChangeAppIndex:r}),l.createElement(h.Z,{color:"primary",block:!0,type:"submit",className:"mt-2",disabled:0===t.length},"Submit"))),l.createElement(v.Z,{xs:"12",lg:"6",className:"mt-2 mt-xs-2"},l.createElement(E.Z,{className:"tx-label"},"signTransaction() Response"),l.createElement("div",{className:"txn-appl-delete-response"},l.createElement(k.Z,{code:T?JSON.stringify(T,null,1):"",language:"js",plugins:["response"]})),l.createElement(h.Z,{className:"button-margin",color:"primary",block:!0,disabled:!T,onClick:function(){return w("")}},"Clear Method Response"))),0===t.length&&l.createElement("div",{className:"error-connect mt-3"}," In order to run this example, you need to execute connect() method. ")),l.createElement(f.Z,{tabId:"2"},l.createElement("div",{className:"mt-4"}," The following codes allow you to create and sent to MyAlgo Connect an application delete transaction to be sign by the user. There are two alternatives to create it. Pick the one you prefere."),l.createElement(b.Z,{className:"mt-3"},l.createElement(v.Z,null,l.createElement(E.Z,{className:"tx-label"},"Using Algosdk (Recommended)"),l.createElement(k.Z,{code:"\nimport algosdk from \"algosdk\";\nimport MyAlgoConnect from '@randlabs/myalgo-connect';\n \nconst algodClient = new algosdk.Algodv2(\"\",'https://api.testnet.algoexplorer.io', '');\nconst params = await algodClient.getTransactionParams().do();\n\nconst txn = algosdk.makeApplicationDeleteTxnFromObject({\n    suggestedParams: {\n        ...params,\n    },\n    from: sender,\n    appIndex: 17140470,\n});\n\nconst myAlgoConnect = new MyAlgoConnect();\nconst signedTxn = await myAlgoConnect.signTransaction(txn.toByte());\n",language:"js"})),l.createElement(v.Z,{className:"mt-4"},l.createElement(E.Z,{className:"tx-label"},"Another alternative"),l.createElement(k.Z,{code:"\nimport algosdk from \"algosdk\";\nimport MyAlgoConnect from '@randlabs/myalgo-connect';\n \nconst algodClient = new algosdk.Algodv2(\"\",'https://api.testnet.algoexplorer.io', '');\nconst params = await algodClient.getTransactionParams().do();\n\nconst txn : any = {\n    ...params,\n    type: \"appl\",\n    appOnComplete: 5, // OnApplicationComplete.DeleteApplicationOC\n    from: sender,\n    appIndex: 17140470,\n};\n\nconst myAlgoConnect = new MyAlgoConnect();\nconst signedTxn = await myAlgoConnect.signTransaction(txn);\n",language:"js"}))))))}var C=function(){return l.createElement(Z.Z,null,l.createElement(N,null))},T=["components"],w={sidebar_position:9},D="Appl Delete Transaction",S={unversionedId:"interactive-examples/ApplDeleteTransaction",id:"interactive-examples/ApplDeleteTransaction",isDocsHomePage:!1,title:"Appl Delete Transaction",description:"Create and send a delete application transaction to be signed by the user already engaged.",source:"@site/docs/interactive-examples/ApplDeleteTransaction.mdx",sourceDirName:"interactive-examples",slug:"/interactive-examples/ApplDeleteTransaction",permalink:"/docs/interactive-examples/ApplDeleteTransaction",editUrl:"https://github.com/randlabs/myalgo-connect-homepage/edit/master/docs/interactive-examples/ApplDeleteTransaction.mdx",version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"sidebar",previous:{title:"Appl Create Transaction",permalink:"/docs/interactive-examples/ApplCreateTransaction"},next:{title:"Appl Update Transaction",permalink:"/docs/interactive-examples/ApplUpdateTransaction"}},I=[{value:"Preconditions",id:"preconditions",children:[]},{value:"Interactive Example",id:"interactive-example",children:[]}],M={toc:I};function O(e){var t=e.components,n=(0,r.Z)(e,T);return(0,s.kt)("wrapper",(0,a.Z)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"appl-delete-transaction"},"Appl Delete Transaction"),(0,s.kt)("p",null,"Create and send a delete application transaction to be signed by the user already engaged."),(0,s.kt)("h3",{id:"preconditions"},"Preconditions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"User is already engaged and shared some account.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Transaction sender should match with one of address shared by the user, otherwise user will be alert."))),(0,s.kt)("h3",{id:"interactive-example"},"Interactive Example"),(0,s.kt)(C,{mdxType:"ApplDeleteTransaction"}))}O.isMDXComponent=!0},5538:function(e,t,n){var a=n(7462),r=n(3366),l=n(7326),s=n(2856),o=n(7294),c=n(5697),i=n.n(c),m=n(4184),p=n.n(m),d=n(3663),u={children:i().node,inline:i().bool,tag:d.iC,innerRef:i().oneOfType([i().object,i().func,i().string]),className:i().string,cssModule:i().object},g=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind((0,l.Z)(n)),n.submit=n.submit.bind((0,l.Z)(n)),n}(0,s.Z)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,l=e.inline,s=e.tag,c=e.innerRef,i=(0,r.Z)(e,["className","cssModule","inline","tag","innerRef"]),m=(0,d.mx)(p()(t,!!l&&"form-inline"),n);return o.createElement(s,(0,a.Z)({},i,{ref:c,className:m}))},t}(o.Component);g.propTypes=u,g.defaultProps={tag:"form"},t.Z=g}}]);