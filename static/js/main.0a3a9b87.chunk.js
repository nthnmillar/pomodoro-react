(this["webpackJsonpcalculator-react"]=this["webpackJsonpcalculator-react"]||[]).push([[0],{10:function(e,t,n){e.exports=n(24)},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(2),r=n.n(o),i=(n(15),n(1)),l=n(3),s="0",u="0",d=0,m=!1,p=!1,h=!1,g=!1,E="",f=function(e){return{type:"entry",payload:e}},y=function(e){return{type:"sum",payload:e}},b=Object(i.b)({mathEntry:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{entry:"0"},t=arguments.length>1?arguments[1]:void 0;return"entry"===t.type?{entry:t.payload}:e},mathSum:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{sum:"0"},t=arguments.length>1?arguments[1]:void 0;return"sum"===t.type?{sum:t.payload}:e}}),$=Object(i.c)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),v=function(e){return{entry:e.mathEntry.entry,sum:e.mathSum.sum}},C=function(e){return{displayEntry:function(){return e(f())},displaySum:function(){return e(y())}}},S=function(){console.log("maxLength screenSum",u);var e=u.toString().replace(/\&#247;|\&#215;/g," ");return console.log("maxLength screenSum Replaced",e),(s.length>8||e.length>=23)&&(console.log(u),!0)},k=function(){s="0",u="0",d=0,$.dispatch(f("0")),$.dispatch(y("Limit"))},_=function(){d=0,h=!1,g=!1,s="0",u="0",$.dispatch(f(s)),$.dispatch(y(u))},w=function(){m=!1,p=!0,h=!1,s="0";console.log("CE screenSum before replace",u),g||(g||(console.log("epPressed",g,"screenSum",u),u=u.toString().replace(/\+$|\-$|\&#247;$|\&#215;$|\d+\.\d+$|\d+$|\.$|\d+\.$|^\-\d+$|^\-\d+\.\d+$/,"")),console.log("CE screenSum after replace",u),""===u&&(u="0"),$.dispatch(f(s)),$.dispatch(y(u)))},O=function(e){"-"===s&&1==/\d$/.test(e)&&(u+=E,u+=s,E="",$.dispatch(y(u))),"-"!==s&&!0===/\d$/.test(e)&&(console.log("Number adds operator to Sum display",E,"screenSum",u),u+=E,E="",$.dispatch(y(u))),!1===S()?(("0"===s&&"0"===u||"0"===d&&!0===g)&&(s="",u="",d=0,g=!1),"0"===s&&!0===p&&(s=""),m=!1,s=s.replace(/\+|\-|\&#247;|\&#215;/g,""),!1===p&&"-"!==e?(s+=e,u+=e,$.dispatch(f(s)),$.dispatch(y(u))):!0!==/\d$/.test(u)&&!0===p&&"-"!==e&&(p=!1,s+=e,u+=e,$.dispatch(f(s)),$.dispatch(y(u)))):k()},F=function(e){!0===g&&(g=!1,u=d,d=0),!1===S()?(h=!1,!0===/\.$/.test(u)&&(u=u.slice(0,-1)),!0===/\.0+$/.test(u)&&(u=u.replace(/\.0+$/,"")),!0===/\./g.test(u)&&!0===/0+$/.test(u)&&(u=u.replace(/0+$/,"")),"0"!==s&&!1===m&&"0"!==u&&(s=e,$.dispatch(f(s)),"-"!==e&&(E=e),!1===m&&"0"!==u&&"-"!==e&&(E=e)),!0===p&&!1===m&&"0"!==u&&!0===/\d$/.test(u)&&(m=!0,s=e,"-"!==e&&(E=e))):k()},L=function(){!1===S()?!1===h&&!1===m&&!1===p?(h=!0,s+=".",u+=".",$.dispatch(f(s)),$.dispatch(y(u))):!1===h&&!0===m&&!1===p?(m=!1,h=!0,s="0.",u+="0.",$.dispatch(f(s)),$.dispatch(y(u))):!1===h&&!0!==/\d$/.test(u)&&!0===p?(p=!1,h=!0,s="0.",u+="0.",$.dispatch(f(s)),$.dispatch(y(u))):!1===h&&!1===m&&"0"===u&&!0===p&&(p=!1,h=!0,s+=".",u+=".",$.dispatch(f(s)),$.dispatch(y(u))):k()},N=function(){if(!0===/\d$/.test(u)){var e=u;console.log("equalPress screenSum String",u),u=u.replace(/\&#247;/g,"/").replace(/\&#215;/g,"*").replace(/(\/)/g," $1 ").replace(/(\*)/g," $1 ").replace(/(\+)/g," $1 ").replace(/((?!^)\-)/g," $1 ").split(" "),console.log("equalPress screenSum Array",u);for(var t=0;t<u.length;t++)if(""===u[t]&&(u.splice(t,1),console.log("space removed",u,"screenSum[i]",u[t])),"-"===u[t]&&!0===/\+|\-|\*|\//.test(u[t-1])){var n=u[t].concat(u[t+1]);u.splice(t,1),u.splice(t,1),u.splice(t,0,n),console.log("negetive interger",u)}for(t=0;t<u.length;t++)0===t&&(d+=parseFloat(u[t])),1==/\//.test(u[t])&&(d/=parseFloat(u[t+1])),1==/\*/.test(u[t])&&(d*=parseFloat(u[t+1])),1==/\+/.test(u[t])&&(d+=parseFloat(u[t+1])),1==/^\-$/.test(u[t])&&(console.log("just a minus",d),d-=parseFloat(u[t+1]));console.log("Equal calculation",d),(d=d.toFixed(4).replace(/\.0+$|0+$/,"")).length>8?k():($.dispatch(f(d)),$.dispatch(y(e+="="+d)),console.log("array clacuation return, calculation","screenSum",u,"is array?",Array.isArray(u)),g=!0,"0"===d&&(s="0",u="0"))}},x=Object(l.b)(v,C)((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.entry},id:"display"}))})),T=Object(l.b)(v,C)((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.sum},id:"disString"}))})),A=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:_,id:"clear"},"AC"),c.a.createElement("button",{onClick:w,id:"CE"},"CE"),c.a.createElement("button",{onClick:function(){F("&#247;")},id:"divide"},"\xf7"),c.a.createElement("button",{onClick:function(){F("&#215;")},id:"multiply"},"\xd7"),c.a.createElement("button",{onClick:function(){O("7")},id:"seven"},"7"),c.a.createElement("button",{onClick:function(){O("8")},id:"eight"},"8"),c.a.createElement("button",{onClick:function(){O("9")},id:"nine"},"9"),c.a.createElement("button",{onClick:function(){F("-")},id:"subtract"},"-"),c.a.createElement("button",{onClick:function(){O("4")},id:"four"},"4"),c.a.createElement("button",{onClick:function(){O("5")},id:"five"},"5"),c.a.createElement("button",{onClick:function(){O("6")},id:"six"},"6"),c.a.createElement("button",{onClick:function(){F("+")},id:"add"},"+"),c.a.createElement("button",{onClick:function(){O("1")},id:"one"},"1"),c.a.createElement("button",{onClick:function(){O("2")},id:"two"},"2"),c.a.createElement("button",{onClick:function(){O("3")},id:"three"},"3"),c.a.createElement("button",{onClick:N,id:"equals"},"="),c.a.createElement("button",{onClick:function(){var e;e="0",!1===S()?"0"!==s&&!1===m?(s+=e,u+=e,$.dispatch(f(s)),$.dispatch(y(u))):!0===h&&(s+="0",u+="0",$.dispatch(f(s)),$.dispatch(y(u))):k()},id:"zero"},"0"),c.a.createElement("button",{onClick:L,id:"decimal"},"."))},j=function(){return c.a.createElement(l.a,{store:$},c.a.createElement("div",{id:"calcBase",className:"container"},c.a.createElement("div",{id:"padDiv"},c.a.createElement("h1",{className:"text-center"},"CALCULATOR"),c.a.createElement("div",{id:"screen",className:"text-right"},c.a.createElement(x,null),c.a.createElement(T,null)),c.a.createElement(A,null))),"]")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(23);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.0a3a9b87.chunk.js.map