(this["webpackJsonppomodoro-react"]=this["webpackJsonppomodoro-react"]||[]).push([[0],{10:function(e,t,n){e.exports=n(24)},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),r=n.n(c),l=(n(15),n(3)),i=n(1),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{entry:"0"},t=arguments.length>1?arguments[1]:void 0;return"DISPLAY_ENTRY"===t.type?{entry:t.payload}:e},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{sum:"0"},t=arguments.length>1?arguments[1]:void 0;return"DISPLAY_SUM"===t.type?{sum:t.payload}:e},m=Object(i.b)({mathEntry:u,mathSum:s}),d=Object(i.c)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());function p(e){return{type:"DISPLAY_ENTRY",payload:e}}function g(e){return{type:"DISPLAY_SUM",payload:e}}var E="0",f="0",h=0,S=!1,b=!1,y=!1,$=!1,v="",C=function(e){d.dispatch(p(e))},k=function(e){d.dispatch(g(e))},_=function(){console.log("maxLength screenSum",f);var e=f.toString().replace(/\&#247;|\&#215;/g," ");return console.log("maxLength screenSum Replaced",e),(E.length>8||e.length>=23)&&(console.log(f),!0)},w=function(){E="0",f="0",h=0,C("0"),k("Limit")};function L(){h=0,y=!1,$=!1,f="0",C(E="0"),k(f)}function O(){S=!1,b=!0,y=!1,E="0";console.log("CE screenSum before replace",f),$||($||(console.log("epPressed",$,"screenSum",f),f=f.toString().replace(/\+$|\-$|\&#247;$|\&#215;$|\d+\.\d+$|\d+$|\.$|\d+\.$|^\-\d+$|^\-\d+\.\d+$/,"")),console.log("CE screenSum after replace",f),""===f&&(f="0"),C(E),k(f))}function A(e){"-"===E&&1==/\d$/.test(e)&&(f+=v,v="",k(f+=E)),"-"!==E&&!0===/\d$/.test(e)&&(console.log("Number adds operator to Sum display",v,"screenSum",f),f+=v,v="",k(f)),!1===_()?(("0"===E&&"0"===f||"0"===h&&!0===$)&&(E="",f="",h=0,$=!1),"0"===E&&!0===b&&(E=""),S=!1,E=E.replace(/\+|\-|\&#247;|\&#215;/g,""),!1===b&&"-"!==e?(f+=e,C(E+=e),k(f)):!0!==/\d$/.test(f)&&!0===b&&"-"!==e&&(b=!1,f+=e,C(E+=e),k(f))):w()}function N(e){!0===$&&($=!1,f=h,h=0),!1===_()?(y=!1,!0===/\.$/.test(f)&&(f=f.slice(0,-1)),!0===/\.0+$/.test(f)&&(f=f.replace(/\.0+$/,"")),!0===/\./g.test(f)&&!0===/0+$/.test(f)&&(f=f.replace(/0+$/,"")),"0"!==E&&!1===S&&"0"!==f&&(C(E=e),"-"!==e&&(v=e),!1===S&&"0"!==f&&"-"!==e&&(v=e)),!0===b&&!1===S&&"0"!==f&&!0===/\d$/.test(f)&&(S=!0,E=e,"-"!==e&&(v=e))):w()}function D(){!1===_()?!1===y&&!1===S&&!1===b?(y=!0,f+=".",C(E+="."),k(f)):!1===y&&!0===S&&!1===b?(S=!1,y=!0,f+="0.",C(E="0."),k(f)):!1===y&&!0!==/\d$/.test(f)&&!0===b?(b=!1,y=!0,f+="0.",C(E="0."),k(f)):!1===y&&!1===S&&"0"===f&&!0===b&&(b=!1,y=!0,f+=".",C(E+="."),k(f)):w()}function F(){if(!0===/\d$/.test(f)){var e=f;console.log("equalPress screenSum String",f),f=f.replace(/\&#247;/g,"/").replace(/\&#215;/g,"*").replace(/(\/)/g," $1 ").replace(/(\*)/g," $1 ").replace(/(\+)/g," $1 ").replace(/((?!^)\-)/g," $1 ").split(" "),console.log("equalPress screenSum Array",f);for(var t=0;t<f.length;t++)if(""===f[t]&&(f.splice(t,1),console.log("space removed",f,"screenSum[i]",f[t])),"-"===f[t]&&!0===/\+|\-|\*|\//.test(f[t-1])){var n=f[t].concat(f[t+1]);f.splice(t,1),f.splice(t,1),f.splice(t,0,n),console.log("negetive interger",f)}for(t=0;t<f.length;t++)0===t&&(h+=parseFloat(f[t])),1==/\//.test(f[t])&&(h/=parseFloat(f[t+1])),1==/\*/.test(f[t])&&(h*=parseFloat(f[t+1])),1==/\+/.test(f[t])&&(h+=parseFloat(f[t+1])),1==/^\-$/.test(f[t])&&(console.log("just a minus",h),h-=parseFloat(f[t+1]));console.log("Equal calculation",h),(h=h.toFixed(4).replace(/\.0+$|0+$/,"")).length>8?w():(C(h),k(e+="="+h),console.log("array clacuation return, calculation","screenSum",f,"is array?",Array.isArray(f)),$=!0,"0"===h&&(E="0",f="0"))}}var I=function(e){return{entry:e.mathEntry.entry,sum:e.mathSum.sum}},T=function(e){return{displayEntry:function(){return e(p())},displaySum:function(){return e(g())}}},x=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:L,id:"clear"},"AC"),a.a.createElement("button",{onClick:O,id:"CE"},"CE"),a.a.createElement("button",{onClick:function(){N("&#247;")},id:"divide"},"\xf7"),a.a.createElement("button",{onClick:function(){N("&#215;")},id:"multiply"},"\xd7"),a.a.createElement("button",{onClick:function(){A("7")},id:"seven"},"7"),a.a.createElement("button",{onClick:function(){A("8")},id:"eight"},"8"),a.a.createElement("button",{onClick:function(){A("9")},id:"nine"},"9"),a.a.createElement("button",{onClick:function(){N("-")},id:"subtract"},"-"),a.a.createElement("button",{onClick:function(){A("4")},id:"four"},"4"),a.a.createElement("button",{onClick:function(){A("5")},id:"five"},"5"),a.a.createElement("button",{onClick:function(){A("6")},id:"six"},"6"),a.a.createElement("button",{onClick:function(){N("+")},id:"add"},"+"),a.a.createElement("button",{onClick:function(){A("1")},id:"one"},"1"),a.a.createElement("button",{onClick:function(){A("2")},id:"two"},"2"),a.a.createElement("button",{onClick:function(){A("3")},id:"three"},"3"),a.a.createElement("button",{onClick:F,id:"equals"},"="),a.a.createElement("button",{onClick:function(){var e;e="0",!1===_()?"0"!==E&&!1===S?(f+=e,C(E+=e),k(f)):!0===y&&(f+="0",C(E+="0"),k(f)):w()},id:"zero"},"0"),a.a.createElement("button",{onClick:D,id:"decimal"},"."))},P=Object(l.b)(I,T)((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.entry},id:"display"}))})),R=Object(l.b)(I,T)((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.sum},id:"disString"}))})),Y=function(){return a.a.createElement(l.a,{store:d},a.a.createElement("div",{id:"calcBase",className:"container"},a.a.createElement("div",{id:"padDiv"},a.a.createElement("h1",{className:"text-center"},"CALCULATOR"),a.a.createElement("div",{id:"screen",className:"text-right"},a.a.createElement(P,null),a.a.createElement(R,null)),a.a.createElement(x,null))),"]")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(23);r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.88ef90bc.chunk.js.map