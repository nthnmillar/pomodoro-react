(this["webpackJsonpcalculator-react"]=this["webpackJsonpcalculator-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),c=n(3),d=n.n(c),l=n(1),r=(n(9),"0"),a="0",m=0,u=!1,s=!1,g=!1,E=!1;function f(){console.log("max sum",a);var e=a.replace(/\&#247;|\&#215;/g," ");return console.log("max sum Replaced",e),(r.length>8||e.length>=23)&&(console.log(a),!0)}function $(){r="0",a="0",m=0,document.getElementById("disNum").innerHTML="0",document.getElementById("disString").innerHTML="Limit"}function p(){m=0,g=!1,E=!1,r="0",a="0",document.getElementById("disNum").innerHTML=r,document.getElementById("disString").innerHTML=a}function y(){u=!1,s=!0,g=!1,r="0","string"!==typeof a?(console.log("Sum IS string"),console.log("CE sum before replace",a),a.replace(/\+$|\-$|\&#247;$|\&#215;$|\d+\.\d+$|\d+$|\.$|\d+\.$|^\-\d+$|^\-\d+\.\d+$/,""),console.log("CE sum after replace",a)):(console.log("Sum NOT string"),a.toString(),console.log("CE sum before replace",a),a.replace(/\+$|\-$|\&#247;$|\&#215;$|\d+\.\d+$|\d+$|\.$|\d+\.$|^\-\d+$|^\-\d+\.\d+$/,""),console.log("CE sum after replace",a)),""===a&&(a="0"),document.getElementById("disNum").innerHTML=r,document.getElementById("disString").innerHTML=a}function B(){x("1")}function L(){x("2")}function I(){x("3")}function T(){x("4")}function M(){x("5")}function H(){x("6")}function b(){x("7")}function C(){x("8")}function k(){x("9")}function S(){var e;e="0",!1===f()?"0"!==r&&!1===u?(r+=e,a+=e,document.getElementById("disNum").innerHTML=r,document.getElementById("disString").innerHTML=a):!0===g&&(r+="0",a+="0",document.getElementById("disNum").innerHTML=r,document.getElementById("disString").innerHTML=a):$()}function N(){F("+")}function h(){F("-")}function v(){F("&#247;")}function w(){F("&#215;")}function x(e){!1===f()?(("0"===r&&"0"===a||"0"===m&&!0===E)&&(r="",a="",m=0,E=!1),"0"===r&&!0===s&&(r=""),u=!1,r=r.replace(/\+|\-|\&#247;|\&#215;/g,""),!1===s?(r+=e,a+=e,document.getElementById("disNum").innerHTML=r,document.getElementById("disString").innerHTML=a):!0!==/\d$/.test(a)&&!0===s&&(s=!1,r+=e,a+=e,document.getElementById("disNum").innerHTML=r,document.getElementById("disString").innerHTML=a)):$()}function F(e){!0===E&&(E=!1,a=m,m=0),!1===f()?(g=!1,!0===/\.$/.test(a)&&(a=a.slice(0,-1)),!0===/\.0+$/.test(a)&&(a=a.replace(/\.0+$/,"")),!0===/\./g.test(a)&&!0===/0+$/.test(a)&&(a=a.replace(/0+$/,"")),"0"!==r&&!1===u&&"0"!==a&&(r=e,document.getElementById("disNum").innerHTML=r,!1===u&&"0"!==a&&(u=!0,a+=e,document.getElementById("disString").innerHTML=a)),!0===s&&!1===u&&"0"!==a&&!0===/\d$/.test(a)&&(u=!0,r=e,a+=e,document.getElementById("disNum").innerHTML=r,document.getElementById("disString").innerHTML=a)):$()}function O(){!1===f()?!1===g&&!1===u&&!1===s?(g=!0,r+=".",a+=".",document.getElementById("disNum").innerHTML=r,document.getElementById("disString").innerHTML=a):!1===g&&!0===u&&!1===s?(u=!1,g=!0,r="0.",a+="0.",document.getElementById("disNum").innerHTML=r,document.getElementById("disString").innerHTML=a):!1===g&&!0!==/\d$/.test(a)&&!0===s?(s=!1,g=!0,r="0.",a+="0.",document.getElementById("disNum").innerHTML=r,document.getElementById("disString").innerHTML=a):!1===g&&!1===u&&"0"===a&&!0===s&&(s=!1,g=!0,r+=".",a+=".",document.getElementById("disNum").innerHTML=r,document.getElementById("disString").innerHTML=a):$()}function j(){if(!0===/\d$/.test(a)){a=a.replace(/\&#247;/g,"/").replace(/\&#215;/g,"*").replace(/(\/)/g," $1 ").replace(/(\*)/g," $1 ").replace(/(\+)/g," $1 ").replace(/((?!^)\-)/g," $1 ").split(" ");for(var e=0;e<a.length;e++)0===e&&(m+=parseFloat(a[e])),!0===/\//.test(a[e])&&(m/=parseFloat(a[e+1])),!0===/\*/.test(a[e])&&(m*=parseFloat(a[e+1])),!0===/\+/.test(a[e])&&(m+=parseFloat(a[e+1])),!0===/^\-$/.test(a[e])&&(m-=parseFloat(a[e+1]));(m=m.toFixed(2).replace(/\.0+$|0+$/,"")).length>8?$():(document.getElementById("disNum").innerHTML=m,document.getElementById("disString").innerHTML+="="+m,E=!0,"0"===m&&(r="0",a="0"))}}var A=function(){var e=Object(i.useState)("0"),t=Object(l.a)(e,2),n=t[0],c=(t[1],Object(i.useState)("0")),d=Object(l.a)(c,2),r=d[0];return d[1],o.a.createElement("div",{id:"calcBase",className:"container"},o.a.createElement("div",{id:"padDiv"},o.a.createElement("h1",{className:"text-center"},"CALCULATOR"),o.a.createElement("div",{id:"display",className:"text-right"},o.a.createElement("p",{id:"disNum"},n),o.a.createElement("p",{id:"disString"},r)),o.a.createElement("button",{onClick:p,id:"AC"},"AC"),o.a.createElement("button",{onClick:y,id:"clear"},"CE"),o.a.createElement("button",{onClick:v,id:"divide"},"\xf7"),o.a.createElement("button",{onClick:w,id:"multiply"},"\xd7"),o.a.createElement("button",{onClick:b,id:"seven"},"7"),o.a.createElement("button",{onClick:C,id:"eight"},"8"),o.a.createElement("button",{onClick:k,id:"nine"},"9"),o.a.createElement("button",{onClick:h,id:"subtract"},"-"),o.a.createElement("button",{onClick:T,id:"four"},"4"),o.a.createElement("button",{onClick:M,id:"five"},"5"),o.a.createElement("button",{onClick:H,id:"six"},"6"),o.a.createElement("button",{onClick:N,id:"add"},"+"),o.a.createElement("button",{onClick:B,id:"one"},"1"),o.a.createElement("button",{onClick:L,id:"two"},"2"),o.a.createElement("button",{onClick:I,id:"three"},"3"),o.a.createElement("button",{onClick:j,id:"equals"},"="),o.a.createElement("button",{onClick:S,id:"zero"},"0"),o.a.createElement("button",{onClick:O,id:"decimal"},".")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13);d.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(14)}},[[4,1,2]]]);
//# sourceMappingURL=main.a7ac632e.chunk.js.map