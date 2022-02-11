(function(t){function e(e){for(var r,a,c=e[0],i=e[1],l=e[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00ae":function(t,e,n){},2700:function(t,e,n){},"307b":function(t,e,n){"use strict";n("e1637")},"389e":function(t,e,n){"use strict";n("5679")},"3b18":function(t,e,n){"use strict";n("d7b8")},5679:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(t,e,n,o,s,a){var c=Object(r["m"])("Header"),i=Object(r["m"])("Board"),l=Object(r["m"])("Keyboard"),u=Object(r["m"])("Toast"),d=Object(r["m"])("Modal"),f=Object(r["m"])("Loading"),h=Object(r["m"])("Settings");return Object(r["i"])(),Object(r["e"])(r["a"],null,[Object(r["g"])(c,{onShare:a.shareBoard,onOpenStats:a.openStats,onOpenSettings:a.openSettings},null,8,["onShare","onOpenStats","onOpenSettings"]),Object(r["g"])(i,{words:s.words},null,8,["words"]),Object(r["g"])(l,{onCheck:a.check,onType:a.type,onClear:a.clear,usedLetters:s.usedLetters},null,8,["onCheck","onType","onClear","usedLetters"]),Object(r["g"])(u,{message:s.message,open:s.openToast},null,8,["message","open"]),Object(r["g"])(d,{open:s.openModal,finished:s.finished,onShare:a.shareBoard,onCloseModal:a.closeModal},null,8,["open","finished","onShare","onCloseModal"]),Object(r["g"])(f,{open:s.loading},null,8,["open"]),Object(r["g"])(h,{open:s.showSettings,page:s.settingsPage,onCloseSettings:a.closeSettings},null,8,["open","page","onCloseSettings"])],64)}var s=n("5530"),a=(n("d3b7"),n("a15b"),n("d81d"),n("159b"),n("4de4"),n("ac1f"),n("1276"),n("c740"),n("e9c4"),n("99af"),n("25f0"),{class:"menu"}),c=Object(r["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[Object(r["f"])("path",{fill:"#565758",d:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"})],-1),i=[c],l=Object(r["f"])("div",{class:"title"},"FJALËZ",-1),u={class:"menu"},d=Object(r["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[Object(r["f"])("path",{fill:"#565758",d:"M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"})],-1),f=[d],h=Object(r["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[Object(r["f"])("path",{fill:"#565758",d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})],-1),b=[h];function j(t,e,n,o,s,c){return Object(r["i"])(),Object(r["e"])("header",null,[Object(r["f"])("div",a,[Object(r["f"])("button",{id:"help-button",class:"icon","aria-label":"help",onClick:e[0]||(e[0]=function(t){return c.openSettings("info")})},i)]),l,Object(r["f"])("div",u,[Object(r["f"])("button",{id:"statistics-button",class:"icon","aria-label":"statistics",onClick:e[1]||(e[1]=function(){return c.openStats&&c.openStats.apply(c,arguments)})},f),Object(r["f"])("button",{id:"settings-button",class:"icon","aria-label":"settings",onClick:e[2]||(e[2]=function(t){return c.openSettings("settings")})},b)])])}var p={methods:{openStats:function(){this.$emit("openStats")},openSettings:function(t){console.log("openSettings header"),this.$emit("openSettings",t)}}},O=(n("9f3f"),n("d959")),g=n.n(O);const v=g()(p,[["render",j]]);var m=v,w={class:"board-container"},k={class:"board"};function S(t,e,n,o,s,a){var c=Object(r["m"])("LetterTile");return Object(r["i"])(),Object(r["e"])("div",w,[Object(r["f"])("div",k,[(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["l"])(n.words,(function(t,e){return Object(r["i"])(),Object(r["e"])("div",{class:"word",key:e},[(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["l"])(t,(function(t,e){return Object(r["i"])(),Object(r["c"])(c,{letter:t,class:"letter",key:e},null,8,["letter"])})),128))])})),128))])])}function y(t,e,n,o,s,a){return Object(r["i"])(),Object(r["e"])("div",{class:Object(r["h"])(["letter",a.letterState])},Object(r["n"])(n.letter.letter),3)}var L={0:"absent",1:"present",2:"correct"},z=[[{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""}],[{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""}],[{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""}],[{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""}],[{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""}],[{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""}]],M={props:["letter"],computed:{letterState:function(){return L[this.letter.state]}}};n("307b");const C=g()(M,[["render",y],["__scopeId","data-v-300a0224"]]);var x=C,_={components:{LetterTile:x},props:["words"]};n("3b18");const P=g()(_,[["render",S],["__scopeId","data-v-4c1e33b6"]]);var T=P,I={class:"keyboard"},B={class:"row"},J=["onClick"],N={class:"row"},$=["onClick"],D={class:"row"},E=["onClick"],H=Object(r["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[Object(r["f"])("path",{fill:"#fafafa",d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"})],-1),V=[H];function q(t,e,n,o,s,a){return Object(r["i"])(),Object(r["e"])("div",I,[Object(r["f"])("div",B,[(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["l"])(s.row1,(function(t,e){return Object(r["i"])(),Object(r["e"])("button",{key:"r1-".concat(e),onClick:function(e){return a.type(t)},class:Object(r["h"])(a.letterState(t))},Object(r["n"])(t),11,J)})),128))]),Object(r["f"])("div",N,[(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["l"])(s.row2,(function(t,e){return Object(r["i"])(),Object(r["e"])("button",{key:"r2-".concat(e),onClick:function(e){return a.type(t)},class:Object(r["h"])(a.letterState(t))},Object(r["n"])(t),11,$)})),128))]),Object(r["f"])("div",D,[Object(r["f"])("button",{id:"enter",onClick:e[0]||(e[0]=function(){return a.check&&a.check.apply(a,arguments)})},"Enter"),(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["l"])(s.row3,(function(t,e){return Object(r["i"])(),Object(r["e"])("button",{key:"r3-".concat(e),onClick:function(e){return a.type(t)},class:Object(r["h"])(a.letterState(t))},Object(r["n"])(t),11,E)})),128)),Object(r["f"])("button",{id:"backspace",onClick:e[1]||(e[1]=function(){return a.clear&&a.clear.apply(a,arguments)}),"aria-label":"clear"},V)])])}var F={props:["usedLetters"],data:function(){return{row1:["q","e","r","t","y","u","i","o","p","ç"],row2:["a","s","d","f","g","h","j","k","l","ë"],row3:["z","x","c","v","b","n","m"]}},methods:{check:function(){this.$emit("check")},clear:function(){this.$emit("clear")},type:function(t){this.$emit("type",t)},letterState:function(t){var e=this.usedLetters.filter((function(e){if(e.letter===t)return e}));return e.length?L[e[e.length-1].state]:""}},mounted:function(){var t=this;window.addEventListener("keyup",(function(e){"Enter"===e.key?t.check():"Backspace"===e.key?t.clear():e.keyCode>=65&&e.keyCode<=90&&t.type(e.key)}))}};n("f653");const A=g()(F,[["render",q]]);var G=A;function K(t,e,n,o,s,a){return Object(r["i"])(),Object(r["e"])("div",{class:Object(r["h"])(["toast",a.openToast])},Object(r["n"])(n.message),3)}var U={props:["message","open"],computed:{openToast:function(){return this.open?"show":"hide"}}};n("a31a");const W=g()(U,[["render",K],["__scopeId","data-v-6c58d5ed"]]);var Z=W,Q=function(t){return Object(r["k"])("data-v-391bb7bc"),t=t(),Object(r["j"])(),t},R={class:"modal",role:"dialog","aria-modal":"true"},X={class:"modal__header"},Y=Q((function(){return Object(r["f"])("h3",null,"Statistika",-1)})),tt={class:"modal__body"},et=Q((function(){return Object(r["f"])("p",null,"Nuk janë akoma gati. Mundesh thjesht të ndash rezultatin në fund të lojës",-1)}));function nt(t,e,n,o,s,a){return Object(r["i"])(),Object(r["e"])("aside",{class:Object(r["h"])(["backdrop",a.showModal]),tabIndex:"-1",role:"presentation"},[Object(r["f"])("div",R,[Object(r["f"])("div",X,[Y,Object(r["f"])("button",{class:"close",onClick:e[0]||(e[0]=function(){return a.closeModal&&a.closeModal.apply(a,arguments)})},"x")]),Object(r["f"])("div",tt,[et,n.finished?(Object(r["i"])(),Object(r["e"])("button",{key:0,class:"share",onClick:e[1]||(e[1]=function(){return a.shareBoard&&a.shareBoard.apply(a,arguments)})},"Share")):Object(r["d"])("",!0)])])],2)}var rt={props:["open","finished"],computed:{showModal:function(){return this.open?"show":"hide"}},methods:{shareBoard:function(){this.$emit("share"),this.$emit("closeModal")},closeModal:function(){this.$emit("closeModal")}},mounted:function(){var t=this;document.addEventListener("keyup",(function(e){t.open&&"Escape"===e.key&&t.$emit("closeModal")}))}};n("cec9");const ot=g()(rt,[["render",nt],["__scopeId","data-v-391bb7bc"]]);var st=ot,at=function(t){return Object(r["k"])("data-v-0a884229"),t=t(),Object(r["j"])(),t},ct=at((function(){return Object(r["f"])("div",{class:"lds-dual-ring"},null,-1)})),it=[ct];function lt(t,e,n,o,s,a){return Object(r["i"])(),Object(r["e"])("div",{class:Object(r["h"])(["loading",a.show])},it,2)}var ut={props:["open"],computed:{show:function(){return console.log(this.open),this.open?"show":"hide"}}};n("b978");const dt=g()(ut,[["render",lt],["__scopeId","data-v-0a884229"]]);var ft=dt,ht=function(t){return Object(r["k"])("data-v-6ff0bf6c"),t=t(),Object(r["j"])(),t},bt={class:"settings__header"},jt={key:0},pt={key:1},Ot={key:0,class:"settings__body"},gt=ht((function(){return Object(r["f"])("p",null,"Gjej FJALËZËN me 6 prova",-1)})),vt=ht((function(){return Object(r["f"])("p",null,"Cdo provë duhet të jetë një fjalë e vlefshme me 5 gërma (gërmat dyshe numërohen si 2 gërma 🙁)",-1)})),mt=ht((function(){return Object(r["f"])("p",null,null,-1)})),wt=ht((function(){return Object(r["f"])("p",null,"Pas cdo prove ngjyra e gërmave do ndryshojë për të treguar sa pranë gjetjes së fjales je.",-1)})),kt=ht((function(){return Object(r["f"])("hr",null,null,-1)})),St=ht((function(){return Object(r["f"])("h2",null,"Shembuj",-1)})),yt={class:"word"},Lt=ht((function(){return Object(r["f"])("p",null,"Gërma Q gjendet në fjale në atë pozicion",-1)})),zt={class:"word"},Mt=ht((function(){return Object(r["f"])("p",null,"Gërma K është pjesë e fjalës, por jo në këtë pozicion",-1)})),Ct={class:"word"},xt=ht((function(){return Object(r["f"])("p",null,"Gërma J nuk është pjesë e fjalës",-1)})),_t=ht((function(){return Object(r["f"])("hr",null,null,-1)})),Pt=ht((function(){return Object(r["f"])("p",null,"Cdo ditë një FJALËZ e re!",-1)})),Tt={key:1},It=ht((function(){return Object(r["f"])("p",null,"Nuk janë akoma gati.",-1)}));function Bt(t,e,n,o,s,a){var c=Object(r["m"])("LetterTile");return Object(r["i"])(),Object(r["e"])("div",{class:Object(r["h"])(["settings",n.open?"show":"hide"])},[Object(r["f"])("header",bt,["info"==n.page?(Object(r["i"])(),Object(r["e"])("h2",jt,"Si te luajme")):Object(r["d"])("",!0),"settings"==n.page?(Object(r["i"])(),Object(r["e"])("h2",pt,"Parametrat")):Object(r["d"])("",!0),Object(r["f"])("button",{class:"close-settings",onClick:e[0]||(e[0]=function(){return a.closeSettings&&a.closeSettings.apply(a,arguments)})},"x")]),"info"==n.page?(Object(r["i"])(),Object(r["e"])("article",Ot,[gt,vt,mt,wt,kt,St,Object(r["f"])("div",yt,[Object(r["g"])(c,{letter:{letter:"q",state:"correct"}}),Object(r["g"])(c,{letter:{letter:"a",state:""}}),Object(r["g"])(c,{letter:{letter:"r",state:""}}),Object(r["g"])(c,{letter:{letter:"t",state:""}}),Object(r["g"])(c,{letter:{letter:"ë",state:""}})]),Lt,Object(r["f"])("div",zt,[Object(r["g"])(c,{letter:{letter:"s",state:""}}),Object(r["g"])(c,{letter:{letter:"i",state:""}}),Object(r["g"])(c,{letter:{letter:"k",state:"present"}}),Object(r["g"])(c,{letter:{letter:"u",state:""}}),Object(r["g"])(c,{letter:{letter:"r",state:""}})]),Mt,Object(r["f"])("div",Ct,[Object(r["g"])(c,{letter:{letter:"m",state:""}}),Object(r["g"])(c,{letter:{letter:"a",state:""}}),Object(r["g"])(c,{letter:{letter:"t",state:""}}),Object(r["g"])(c,{letter:{letter:"j",state:"absent"}}),Object(r["g"])(c,{letter:{letter:"e",state:""}})]),xt,_t,Pt])):"settings"==n.page?(Object(r["i"])(),Object(r["e"])("article",Tt,[It,Object(r["f"])("p",null,[Object(r["p"])(Object(r["f"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return s.secret=t})},null,512),[[r["o"],s.secret]]),Object(r["f"])("button",{onClick:e[2]||(e[2]=function(){return a.reset&&a.reset.apply(a,arguments)})},"Reset")])])):Object(r["d"])("",!0)],2)}var Jt={components:{LetterTile:x},props:["open","page"],data:function(){return{le_secret:"00000",secret:""}},methods:{closeSettings:function(){this.$emit("closeSettings")},reset:function(){this.secret===this.le_secret&&(localStorage.removeItem("fjaleza"),window.location.reload())}},mounted:function(){var t=this;window.addEventListener("keyup",(function(e){t.open&&"Escape"===e.key&&t.$emit("closeSettings")}))}};n("389e");const Nt=g()(Jt,[["render",Bt],["__scopeId","data-v-6ff0bf6c"]]);var $t=Nt,Dt=function(t){for(var e={},n=0;n<t.length;n++){var r=t.charAt(n);e[r]=isNaN(e[r])?1:e[r]+1}return e},Et=["ideal","maçok","provë","janar","qasje","idiot","trung","pirun","tigër","dhjam","misër","qitje","andej","diell","rosak","shqip","dhunë","parim","tigan","dukje","avari","dajak","zjarr","piper","yjësi","flakë","lutje","vulgu","lodër","katër","pilot","drekë","pahir"],Ht={name:"App",components:{Header:m,Board:T,Keyboard:G,Toast:Z,Modal:st,Loading:ft,Settings:$t},data:function(){return{fjalezat:Et,fjaleza:"",fIndex:0,round:0,letterPointer:0,words:z,usedLetters:[],finished:!1,openToast:!1,message:"",openModal:!1,loading:!1,showSettings:!1,settingsPage:"INFO"}},methods:{type:function(t){!this.finished&&this.letterPointer<5&&(this.words[this.round][this.letterPointer].letter=t,this.letterPointer++)},clear:function(){this.finished||this.letterPointer>0&&(this.letterPointer--,this.words[this.round][this.letterPointer].letter="")},check:function(){var t=this;if(!this.finished)if(this.letterPointer<5)this.showToast("S'ka mjaftueshem germa");else{var e=this.joinWord();this.loading=!0,fetch("https://qub10cxllf.execute-api.eu-central-1.amazonaws.com/prod/define/".concat(e)).then((function(t){return t.json()})).then((function(e){t.loading=!1,0===e.exactMatches.length?t.showToast("Fjalë e pavlefshme"):t.feedback()})).catch((function(e){console.log(e),alert("Error"),t.loading=!1}))}},joinWord:function(){var t=this.words[this.round].map((function(t){var e=t.letter;return e})).join("");return t},feedback:function(){var t=this,e=!1,n=this.joinWord();n===this.fjaleza&&(e=!0);var r=Dt(n),o=Dt(this.fjaleza);this.words[this.round].forEach((function(e,s){var a=r[e.letter],c=o[e.letter];if(a==c||a<c)t.checkPosition(e,s);else if(a>c&&c>0){var i=n.split("").map((function(t,n){if(t===e.letter)return n})).filter((function(t){return void 0!==t}));s<i[c]?t.checkPosition(e,s):e.state=0}else c||(e.state=0)})),(e||6===this.round)&&(this.finished=!0),e&&setTimeout((function(){t.openModal=!0}),3e3),this.round++,this.letterPointer=0,this.updateUsedLetters(),this.saveToLocalStorage()},checkPosition:function(t,e){t.letter===this.fjaleza[e]?t.state=2:-1!==this.fjaleza.indexOf(t.letter)&&(t.state=1)},updateUsedLetters:function(){for(var t=this,e=function(e){var n=Object(s["a"])({},t.words[t.round-1][e]),r=t.usedLetters.findIndex((function(t){return t.letter===n.letter}));-1!=r?n.state>t.usedLetters[r].state&&(t.usedLetters[r].state=n.state):t.usedLetters.push(n)},n=0;n<5;n++)e(n)},saveToLocalStorage:function(){var t={boardState:this.words,round:this.round,finished:this.finished,usedLetters:this.usedLetters};localStorage.setItem("fjaleza",JSON.stringify(t))},shareBoard:function(){for(var t="Fjalez ".concat(this.fIndex," ").concat(this.round,"/6\n"),e=0;e<this.round;e++){for(var n=0;n<5;n++)switch(this.words[e][n].state){case 0:t+="⬛";break;case 1:t+="🟨";break;case 2:t+="🟩";break;default:break}t+="\n"}navigator.clipboard.writeText(t)},showToast:function(t){var e=this;this.message=t,this.openToast=!0,setTimeout((function(){e.openToast=!1}),1e3)},openStats:function(){this.openModal=!0},closeModal:function(){this.openModal=!1},openSettings:function(t){this.showSettings=!0,this.settingsPage=t},closeSettings:function(){this.showSettings=!1}},mounted:function(){var t,e=new Date(2022,2,4,0,0,0),n=new Date;if(localStorage.getItem("flp")){t=JSON.parse(localStorage.getItem("flp"));var r=new Date(t.date),o=n.getDate()-r.getDate();if(o>0&&localStorage.removeItem("fjaleza"),localStorage.getItem("fjaleza")){var s=JSON.parse(localStorage.getItem("fjaleza"));this.words=s.boardState,this.round=s.round,this.finished=s.finished,this.usedLetters=s.usedLetters}var a={date:(new Date).toString()};localStorage.setItem("flp",JSON.stringify(a))}else{localStorage.removeItem("fjaleza");var c={date:(new Date).toString()};localStorage.setItem("flp",JSON.stringify(c))}var i=n.getDate()-e.getDate();this.fIndex=i,this.fjaleza=this.fjalezat[i]}};n("7643");const Vt=g()(Ht,[["render",o]]);var qt=Vt;Object(r["b"])(qt).mount("#game")},7643:function(t,e,n){"use strict";n("c42c")},"9f3f":function(t,e,n){"use strict";n("00ae")},a31a:function(t,e,n){"use strict";n("f7de")},b4d1:function(t,e,n){},b978:function(t,e,n){"use strict";n("2700")},c42c:function(t,e,n){},cec9:function(t,e,n){"use strict";n("f112")},d7b8:function(t,e,n){},e1637:function(t,e,n){},f112:function(t,e,n){},f653:function(t,e,n){"use strict";n("b4d1")},f7de:function(t,e,n){}});
//# sourceMappingURL=app.385ae9a1.js.map