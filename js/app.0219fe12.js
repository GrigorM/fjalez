(function(t){function e(e){for(var n,a,o=e[0],l=e[1],i=e[2],d=0,h=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&h.push(c[a][0]),c[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var l=r[o];0!==c[l]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},c={app:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var i=0;i<o.length;i++)e(o[i]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"365a":function(t,e,r){"use strict";r("b113")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function c(t,e,r,c,s,a){var o=Object(n["j"])("Header"),l=Object(n["j"])("Board"),i=Object(n["j"])("Keyboard");return Object(n["h"])(),Object(n["c"])(n["a"],null,[Object(n["f"])(o),Object(n["f"])(l,{words:s.words},null,8,["words"]),Object(n["f"])(i,{onCheck:a.check,onType:a.type,onClear:a.clear,usedLetters:s.usedLetters},null,8,["onCheck","onType","onClear","usedLetters"])],64)}r("d81d"),r("a15b"),r("d3b7"),r("159b");var s=Object(n["e"])('<div class="menu"><button id="help-button" class="icon" aria-label="help"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ababab" d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></svg></button></div><div class="title">FJALËZ</div><div class="menu"><button id="statistics-button" class="icon" aria-label="statistics"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ababab" d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path></svg></button><button id="settings-button" class="icon" aria-label="settings"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#ababab" d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"></path></svg></button></div>',3),a=[s];function o(t,e){return Object(n["h"])(),Object(n["c"])("header",null,a)}var l=r("d959"),i=r.n(l);const u={},d=i()(u,[["render",o]]);var h=d,b={class:"board-container"},f={class:"board"};function p(t,e,r,c,s,a){return Object(n["h"])(),Object(n["c"])("div",b,[Object(n["d"])("div",f,[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(r.words,(function(t,e){return Object(n["h"])(),Object(n["c"])("div",{class:"word",key:e},[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(t,(function(t,e){return Object(n["h"])(),Object(n["c"])("div",{class:Object(n["g"])(["letter",t.state]),key:e},Object(n["k"])(t.letter),3)})),128))])})),128))])])}var j={props:["words"]};const v=i()(j,[["render",p]]);var O=v,w={class:"keyboard"},g={class:"row"},k=["onClick"],y={class:"row"},m=Object(n["d"])("div",{class:"spacer-half"},null,-1),L=["onClick"],x=Object(n["d"])("div",{class:"spacer-half"},null,-1),z={class:"row"},C=["onClick"],P=Object(n["d"])("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[Object(n["d"])("path",{fill:"#000000",d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"})],-1),M=[P];function S(t,e,r,c,s,a){return Object(n["h"])(),Object(n["c"])("div",w,[Object(n["d"])("div",g,[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(s.row1,(function(t,e){return Object(n["h"])(),Object(n["c"])("button",{key:"r1-".concat(e),onClick:function(e){return a.type(t)},class:Object(n["g"])(a.letterState(t))},Object(n["k"])(t),11,k)})),128))]),Object(n["d"])("div",y,[m,(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(s.row2,(function(t,e){return Object(n["h"])(),Object(n["c"])("button",{key:"r2-".concat(e),onClick:function(e){return a.type(t)},class:Object(n["g"])(a.letterState(t))},Object(n["k"])(t),11,L)})),128)),x]),Object(n["d"])("div",z,[Object(n["d"])("button",{id:"enter",onClick:e[0]||(e[0]=function(){return a.check&&a.check.apply(a,arguments)})},"Enter"),(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(s.row3,(function(t,e){return Object(n["h"])(),Object(n["c"])("button",{key:"r3-".concat(e),onClick:function(e){return a.type(t)},class:Object(n["g"])(a.letterState(t))},Object(n["k"])(t),11,C)})),128)),Object(n["d"])("button",{id:"backspace",onClick:e[1]||(e[1]=function(){return a.clear&&a.clear.apply(a,arguments)}),"aria-label":"clear"},M)])])}r("4de4");var H={props:["usedLetters"],data:function(){return{row1:["q","w","e","r","t","y","u","i","o","p","ë"],row2:["a","s","d","f","g","h","j","k","l","ç"],row3:["z","x","c","v","b","n","m"]}},methods:{check:function(){this.$emit("check")},clear:function(){this.$emit("clear")},type:function(t){this.$emit("type",t)},letterState:function(t){console.log(this.usedLetters),console.log(t);var e=this.usedLetters.filter((function(e){if(e.letter===t)return e}));return e.length?e[0].state:""}},mounted:function(){var t=this;window.addEventListener("keyup",(function(e){"Enter"===e.key?t.check():"Backspace"===e.key?t.clear():e.keyCode>=65&&e.keyCode<=90&&t.type(e.key)}))}};const B=i()(H,[["render",S]]);var V=B,_={name:"App",components:{Header:h,Board:O,Keyboard:V},data:function(){return{fjaleza:"parim",round:0,letterPointer:0,words:[[{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""}],[{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""}],[{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""}],[{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""}],[{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""}],[{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""},{letter:"",state:""}]],usedLetters:[]}},methods:{check:function(){var t=this;if(this.letterPointer<5)alert("s'ka mjaftueshem germa");else{var e=this.words[this.round].map((function(t){var e=t.letter;return e}));e=e.join(""),fetch("https://qub10cxllf.execute-api.eu-central-1.amazonaws.com/prod/define/".concat(e)).then((function(t){return t.json()})).then((function(e){console.log(e),0===e.exactMatches.length?alert("nuk osht llaf"):t.feedback()})).catch((function(t){return console.log(t)}))}},clear:function(){this.letterPointer>0&&(this.letterPointer--,this.words[this.round][this.letterPointer].letter="")},type:function(t){this.words[this.round][this.letterPointer].letter=t,this.letterPointer++},feedback:function(){var t=this;console.log("feedback"),this.words[this.round].forEach((function(e,r){e.letter===t.fjaleza[r]?e.state="correct":-1!==t.fjaleza.indexOf(e.letter)?e.state="present":e.state="absent"})),this.round++,this.letterPointer=0,this.updateUsedLetters()},updateUsedLetters:function(){for(var t=0;t<this.round;t++)for(var e=0;e<5;e++)-1===this.usedLetters.indexOf(this.words[t][e])&&this.usedLetters.push(this.words[t][e])}}};r("365a");const E=i()(_,[["render",c]]);var T=E;Object(n["b"])(T).mount("#game")},b113:function(t,e,r){}});
//# sourceMappingURL=app.0219fe12.js.map