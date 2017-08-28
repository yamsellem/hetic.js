'use strict';

// anonymous function wrapper to avoid let declaration collision in user code
(function() {

/*! highlight.js v9.12.0 */
!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs}))}(function(e){function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0===t.index}function a(e){return k.test(e)}function i(e){var n,t,r,i,o=e.className+" ";if(o+=e.parentNode?e.parentNode.className:"",t=B.exec(o))return w(t[1])?t[1]:"no-highlight";for(o=o.split(/\s+/),n=0,r=o.length;r>n;n++)if(i=o[n],a(i)||w(i))return i}function o(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function u(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3===i.nodeType?a+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function c(e,r,a){function i(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value).replace('"',"&quot;")+'"'}s+="<"+t(e)+E.map.call(e.attributes,r).join("")+">"}function u(e){s+="</"+t(e)+">"}function c(e){("start"===e.event?o:u)(e.node)}for(var l=0,s="",f=[];e.length||r.length;){var g=i();if(s+=n(a.substring(l,g[0].offset)),l=g[0].offset,g===e){f.reverse().forEach(u);do c(g.splice(0,1)[0]),g=i();while(g===e&&g.length&&g[0].offset===l);f.reverse().forEach(o)}else"start"===g[0].event?f.push(g[0].node):f.pop(),c(g.splice(0,1)[0])}return s+n(a.substr(l))}function l(e){return e.v&&!e.cached_variants&&(e.cached_variants=e.v.map(function(n){return o(e,{v:null},n)})),e.cached_variants||e.eW&&[o(e)]||[e]}function s(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var o={},u=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?u("keyword",a.k):x(a.k).forEach(function(e){u(e,a.k[e])}),a.k=o}a.lR=t(a.l||/\w+/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=t(a.i)),null==a.r&&(a.r=1),a.c||(a.c=[]),a.c=Array.prototype.concat.apply([],a.c.map(function(e){return l("self"===e?a:e)})),a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var c=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=c.length?t(c.join("|"),!0):{exec:function(){return null}}}}r(e)}function f(e,t,a,i){function o(e,n){var t,a;for(t=0,a=n.c.length;a>t;t++)if(r(n.c[t].bR,e))return n.c[t]}function u(e,n){if(r(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?u(e.parent,n):void 0}function c(e,n){return!a&&r(n.iR,e)}function l(e,n){var t=N.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,n,t,r){var a=r?"":I.classPrefix,i='<span class="'+a,o=t?"":C;return i+=e+'">',i+n+o}function h(){var e,t,r,a;if(!E.k)return n(k);for(a="",t=0,E.lR.lastIndex=0,r=E.lR.exec(k);r;)a+=n(k.substring(t,r.index)),e=l(E,r),e?(B+=e[1],a+=p(e[0],n(r[0]))):a+=n(r[0]),t=E.lR.lastIndex,r=E.lR.exec(k);return a+n(k.substr(t))}function d(){var e="string"==typeof E.sL;if(e&&!y[E.sL])return n(k);var t=e?f(E.sL,k,!0,x[E.sL]):g(k,E.sL.length?E.sL:void 0);return E.r>0&&(B+=t.r),e&&(x[E.sL]=t.top),p(t.language,t.value,!1,!0)}function b(){L+=null!=E.sL?d():h(),k=""}function v(e){L+=e.cN?p(e.cN,"",!0):"",E=Object.create(e,{parent:{value:E}})}function m(e,n){if(k+=e,null==n)return b(),0;var t=o(n,E);if(t)return t.skip?k+=n:(t.eB&&(k+=n),b(),t.rB||t.eB||(k=n)),v(t,n),t.rB?0:n.length;var r=u(E,n);if(r){var a=E;a.skip?k+=n:(a.rE||a.eE||(k+=n),b(),a.eE&&(k=n));do E.cN&&(L+=C),E.skip||(B+=E.r),E=E.parent;while(E!==r.parent);return r.starts&&v(r.starts,""),a.rE?0:n.length}if(c(n,E))throw new Error('Illegal lexeme "'+n+'" for mode "'+(E.cN||"<unnamed>")+'"');return k+=n,n.length||1}var N=w(e);if(!N)throw new Error('Unknown language: "'+e+'"');s(N);var R,E=i||N,x={},L="";for(R=E;R!==N;R=R.parent)R.cN&&(L=p(R.cN,"",!0)+L);var k="",B=0;try{for(var M,j,O=0;;){if(E.t.lastIndex=O,M=E.t.exec(t),!M)break;j=m(t.substring(O,M.index),M[0]),O=M.index+j}for(m(t.substr(O)),R=E;R.parent;R=R.parent)R.cN&&(L+=C);return{r:B,value:L,language:e,top:E}}catch(T){if(T.message&&-1!==T.message.indexOf("Illegal"))return{r:0,value:n(t)};throw T}}function g(e,t){t=t||I.languages||x(y);var r={r:0,value:n(e)},a=r;return t.filter(w).forEach(function(n){var t=f(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}),a.language&&(r.second_best=a),r}function p(e){return I.tabReplace||I.useBR?e.replace(M,function(e,n){return I.useBR&&"\n"===e?"<br>":I.tabReplace?n.replace(/\t/g,I.tabReplace):""}):e}function h(e,n,t){var r=n?L[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function d(e){var n,t,r,o,l,s=i(e);a(s)||(I.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,l=n.textContent,r=s?f(s,l,!0):g(l),t=u(n),t.length&&(o=document.createElementNS("http://www.w3.org/1999/xhtml","div"),o.innerHTML=r.value,r.value=c(t,u(o),l)),r.value=p(r.value),e.innerHTML=r.value,e.className=h(e.className,s,r.language),e.result={language:r.language,re:r.r},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.r}))}function b(e){I=o(I,e)}function v(){if(!v.called){v.called=!0;var e=document.querySelectorAll("pre code");E.forEach.call(e,d)}}function m(){addEventListener("DOMContentLoaded",v,!1),addEventListener("load",v,!1)}function N(n,t){var r=y[n]=t(e);r.aliases&&r.aliases.forEach(function(e){L[e]=n})}function R(){return x(y)}function w(e){return e=(e||"").toLowerCase(),y[e]||y[L[e]]}var E=[],x=Object.keys,y={},L={},k=/^(no-?highlight|plain|text)$/i,B=/\blang(?:uage)?-([\w-]+)\b/i,M=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,C="</span>",I={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=f,e.highlightAuto=g,e.fixMarkup=p,e.highlightBlock=d,e.configure=b,e.initHighlighting=v,e.initHighlightingOnLoad=m,e.registerLanguage=N,e.listLanguages=R,e.getLanguage=w,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=function(n,t,r){var a=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e});hljs.registerLanguage("javascript",function(e){var r="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},n={cN:"subst",b:"\\$\\{",e:"\\}",k:t,c:[]},c={cN:"string",b:"`",e:"`",c:[e.BE,n]};n.c=[e.ASM,e.QSM,c,a,e.RM];var s=n.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:t,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,c,e.CLCM,e.CBCM,a,{b:/[{,]\s*/,r:0,c:[{b:r+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:r,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+r+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:r},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:s}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:r}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:s}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}});hljs.registerLanguage("json",function(e){var i={literal:"true false null"},n=[e.QSM,e.CNM],r={e:",",eW:!0,eE:!0,c:n,k:i},t={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(r,{b:/:/})],i:"\\S"},c={b:"\\[",e:"\\]",c:[e.inherit(r)],i:"\\S"};return n.splice(n.length,0,t,c),{c:n,k:i,i:"\\S"}});hljs.registerLanguage("xml",function(s){var e="[A-Za-z0-9\\._:-]+",t={eW:!0,i:/</,r:0,c:[{cN:"attr",b:e,r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},s.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[t],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},t]}]}});

/*! marked.js 0.3.6 */
 (function(){function e(e){this.tokens=[],this.tokens.links={},this.options=e||a.defaults,this.rules=p.normal,this.options.gfm&&(this.options.tables?this.rules=p.tables:this.rules=p.gfm)}function t(e,t){if(this.options=t||a.defaults,this.links=e,this.rules=u.normal,this.renderer=this.options.renderer||new n,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=u.breaks:this.rules=u.gfm:this.options.pedantic&&(this.rules=u.pedantic)}function n(e){this.options=e||{}}function r(e){this.tokens=[],this.token=null,this.options=e||a.defaults,this.options.renderer=this.options.renderer||new n,this.renderer=this.options.renderer,this.renderer.options=this.options}function s(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function i(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function l(e,t){return e=e.source,t=t||"",function n(r,s){return r?(s=s.source||s,s=s.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,s),n):new RegExp(e,t)}}function o(){}function h(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function a(t,n,i){if(i||"function"==typeof n){i||(i=n,n=null),n=h({},a.defaults,n||{});var l,o,p=n.highlight,u=0;try{l=e.lex(t,n)}catch(c){return i(c)}o=l.length;var g=function(e){if(e)return n.highlight=p,i(e);var t;try{t=r.parse(l,n)}catch(s){e=s}return n.highlight=p,e?i(e):i(null,t)};if(!p||p.length<3)return g();if(delete n.highlight,!o)return g();for(;u<l.length;u++)!function(e){return"code"!==e.type?--o||g():p(e.text,e.lang,function(t,n){return t?g(t):null==n||n===e.text?--o||g():(e.text=n,e.escaped=!0,void(--o||g()))})}(l[u])}else try{return n&&(n=h({},a.defaults,n)),r.parse(e.lex(t,n),n)}catch(c){if(c.message+="\nPlease report this to https://github.com/chjj/marked.",(n||a.defaults).silent)return"<p>An error occured:</p><pre>"+s(c.message+"",!0)+"</pre>";throw c}}var p={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:o,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:o,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:o,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};p.bullet=/(?:[*+-]|\d+\.)/,p.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,p.item=l(p.item,"gm")(/bull/g,p.bullet)(),p.list=l(p.list)(/bull/g,p.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+p.def.source+")")(),p.blockquote=l(p.blockquote)("def",p.def)(),p._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",p.html=l(p.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,p._tag)(),p.paragraph=l(p.paragraph)("hr",p.hr)("heading",p.heading)("lheading",p.lheading)("blockquote",p.blockquote)("tag","<"+p._tag)("def",p.def)(),p.normal=h({},p),p.gfm=h({},p.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),p.gfm.paragraph=l(p.paragraph)("(?!","(?!"+p.gfm.fences.source.replace("\\1","\\2")+"|"+p.list.source.replace("\\1","\\3")+"|")(),p.tables=h({},p.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),e.rules=p,e.lex=function(t,n){var r=new e(n);return r.lex(t)},e.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},e.prototype.token=function(e,t,n){for(var r,s,i,l,o,h,a,u,c,e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),h={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},u=0;u<h.align.length;u++)/^ *-+: *$/.test(h.align[u])?h.align[u]="right":/^ *:-+: *$/.test(h.align[u])?h.align[u]="center":/^ *:-+ *$/.test(h.align[u])?h.align[u]="left":h.align[u]=null;for(u=0;u<h.cells.length;u++)h.cells[u]=h.cells[u].split(/ *\| */);this.tokens.push(h)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t,!0),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),l=i[2],this.tokens.push({type:"list_start",ordered:l.length>1}),i=i[0].match(this.rules.item),r=!1,c=i.length,u=0;c>u;u++)h=i[u],a=h.length,h=h.replace(/^ *([*+-]|\d+\.) +/,""),~h.indexOf("\n ")&&(a-=h.length,h=this.options.pedantic?h.replace(/^ {1,4}/gm,""):h.replace(new RegExp("^ {1,"+a+"}","gm"),"")),this.options.smartLists&&u!==c-1&&(o=p.bullet.exec(i[u+1])[0],l===o||l.length>1&&o.length>1||(e=i.slice(u+1).join("\n")+e,u=c-1)),s=r||/\n\n(?!\s*$)/.test(h),u!==c-1&&(r="\n"===h.charAt(h.length-1),s||(s=r)),this.tokens.push({type:s?"loose_item_start":"list_item_start"}),this.token(h,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(!n&&t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),this.tokens.links[i[1].toLowerCase()]={href:i[2],title:i[3]};else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),h={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},u=0;u<h.align.length;u++)/^ *-+: *$/.test(h.align[u])?h.align[u]="right":/^ *:-+: *$/.test(h.align[u])?h.align[u]="center":/^ *:-+ *$/.test(h.align[u])?h.align[u]="left":h.align[u]=null;for(u=0;u<h.cells.length;u++)h.cells[u]=h.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(h)}else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var u={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:o,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:o,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};u._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,u._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,u.link=l(u.link)("inside",u._inside)("href",u._href)(),u.reflink=l(u.reflink)("inside",u._inside)(),u.normal=h({},u),u.pedantic=h({},u.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),u.gfm=h({},u.normal,{escape:l(u.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:l(u.text)("]|","~]|")("|","|https?://|")()}),u.breaks=h({},u.gfm,{br:l(u.br)("{2,}","*")(),text:l(u.gfm.text)("{2,}","*")()}),t.rules=u,t.output=function(e,n,r){var s=new t(n,r);return s.output(e)},t.prototype.output=function(e){for(var t,n,r,i,l="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),l+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=":"===i[1].charAt(6)?this.mangle(i[1].substring(7)):this.mangle(i[1]),r=this.mangle("mailto:")+n):(n=s(i[1]),r=n),l+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),l+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):s(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,l+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){l+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,l+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),l+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),l+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),l+=this.renderer.codespan(s(i[2],!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),l+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),l+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),l+=this.renderer.text(s(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(i[0].length),n=s(i[1]),r=n,l+=this.renderer.link(r,null,n);return l},t.prototype.outputLink=function(e,t){var n=s(t.href),r=t.title?s(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,s(e[1]))},t.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},t.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;r>s;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},n.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+s(t,!0)+'">'+(n?e:s(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:s(e,!0))+"\n</code></pre>"},n.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},n.prototype.html=function(e){return e},n.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},n.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},n.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},n.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},n.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},n.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},n.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},n.prototype.tablecell=function(e,t){var n=t.header?"th":"td",r=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";return r+e+"</"+n+">\n"},n.prototype.strong=function(e){return"<strong>"+e+"</strong>"},n.prototype.em=function(e){return"<em>"+e+"</em>"},n.prototype.codespan=function(e){return"<code>"+e+"</code>"},n.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},n.prototype.del=function(e){return"<del>"+e+"</del>"},n.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(i(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(s){return""}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:"))return""}var l='<a href="'+e+'"';return t&&(l+=' title="'+t+'"'),l+=">"+n+"</a>"},n.prototype.image=function(e,t,n){var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},n.prototype.text=function(e){return e},r.parse=function(e,t,n){var s=new r(t,n);return s.parse(e)},r.prototype.parse=function(e){this.inline=new t(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var n="";this.next();)n+=this.tok();return n},r.prototype.next=function(){return this.token=this.tokens.pop()},r.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},r.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},r.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s,i="",l="";for(n="",e=0;e<this.token.header.length;e++)r={header:!0,align:this.token.align[e]},n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",s=0;s<t.length;s++)n+=this.renderer.tablecell(this.inline.output(t[s]),{header:!1,align:this.token.align[s]});l+=this.renderer.tablerow(n)}return this.renderer.table(i,l);case"blockquote_start":for(var l="";"blockquote_end"!==this.next().type;)l+=this.tok();return this.renderer.blockquote(l);case"list_start":for(var l="",o=this.token.ordered;"list_end"!==this.next().type;)l+=this.tok();return this.renderer.list(l,o);case"list_item_start":for(var l="";"list_item_end"!==this.next().type;)l+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(l);case"loose_item_start":for(var l="";"list_item_end"!==this.next().type;)l+=this.tok();return this.renderer.listitem(l);case"html":var h=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(h);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},o.exec=o,a.options=a.setOptions=function(e){return h(a.defaults,e),a},a.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new n,xhtml:!1},a.Parser=r,a.parser=r.parse,a.Renderer=n,a.Lexer=e,a.lexer=e.lex,a.InlineLexer=t,a.inlineLexer=t.output,a.parse=a,"undefined"!=typeof module&&"object"==typeof exports?module.exports=a:"function"==typeof define&&define.amd?define(function(){return a}):this.marked=a}).call(function(){return this||("undefined"!=typeof window?window:global)}());

marked.setOptions({
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
});

/*! dedent-js 1.0.1 */
function dedent(a){let b=[],c='string'==typeof a?[a]:a.slice();c[c.length-1]=c[c.length-1].replace(/\r?\n([\t ]*)$/,'');for(let d=0;d<c.length;d++){let e;(e=c[d].match(/\n[\t ]+/g))&&b.push(...e)}if(b.length){let d=Math.min(...b.map(f=>f.length-1)),e=new RegExp(`\n[\t ]{${d}}`,'g');for(let f=0;f<c.length;f++)c[f]=c[f].replace(e,'\n')}return c[0]=c[0].replace(/^\r?\n/,''),c[0]}

// Body

document.body.innerHTML = `
<div id="app" class="ui fluid container">
    <div data-hook="view"></div>
</div>
`;

// Basics

let random = function(min, max) {
    return Math.floor(Math.random() * (max - min || 99)) + (min || 1);
};

let randomize = function() {
    let array = [].slice.call(arguments);
    return array[Math.floor(Math.random() * array.length)];
};

let equals = function(a, b) {
    return a && b && Object.keys(a).length === Object.keys(b).length
        && Object.keys(a).reduce(function(memo, key) { return memo && a[key] === b[key]; }, true)
        && Object.keys(b).reduce(function(memo, key) { return memo && a[key] === b[key]; }, true);
}

let equalsContent = function(a, b) {
    return JSON.stringify(a.slice(0).sort()) === JSON.stringify(b.slice(0).sort());
}

// DOM

let cartman = [
    {}, {cadmiumyellow: true}, {bondiblue: true}, {},
    {candyapplered: true}, {champagne: true}, {champagne: true}, {candyapplered: true},
    {candyapplered: true}, {candyapplered: true}, {candyapplered: true}, {candyapplered: true},
    {braken: true}, {candyapplered: true}, {candyapplered: true}, {braken: true}
];
let kenny = [
    {safetyorange: true}, {safetyorange: true}, {safetyorange: true}, {safetyorange: true},
    {safetyorange: true}, {braken: true}, {champagne: true}, {safetyorange: true},
    {safetyorange: true}, {safetyorange: true}, {safetyorange: true}, {safetyorange: true},
    {braken: true}, {braken: true}, {braken: true}, {braken: true},
];
let kyle = [
    {kellygreen: true}, {islamicgreen: true}, {islamicgreen: true}, {kellygreen: true},
    {kellygreen: true}, {champagne: true}, {champagne: true}, {kellygreen: true},
    {safetyorange: true}, {safetyorange: true}, {safetyorange: true}, {safetyorange: true},
    {}, {darkgreen: true}, {darkgreen: true}, {}
];

let board = function(squares) {
    let ul = document.createElement('ul');
    ul.className = 'board';
    squares.forEach(function(square) {
        let li = document.createElement('li');
        li.className = '';
        for (let property in square)
            li.className += property + ' ';
        li.className = li.className.slice(0, -1);
        ul.appendChild(li);
    });

    return ul.outerHTML;
}

// Forms

let todolist = function() {
    return `
        <div class="todos">
            <div class="ui input">
                <input type="text" placeholder="Ajouter un todo...">
            </div>
            <ul class="ui list"></ul>
            <div class="ui tiny buttons">
                <button class="ui button filter-todo">0 à faire</button>
                <button class="ui button filter-done">0 fait</button>
            </div>
        </div>
    `;
}

// Carousel

let carousel = function(dots) {
    let elDots = !dots ? '' : `
        <span class="dots">
            <ul>
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </span>
    `;

    return `
        <div class="carousel">
            <ul>
                <li class="visible">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <span class="prev"><i class="angle left icon"></i></span>
                <span class="next"><i class="angle right icon"></i></span>
                ${elDots}
           </ul>
        </div>
    `;
}

// Sliding

let sliding = function() {
    return `
        <div class="sliding">
            <ul>
                <li class="square1"></li>
                <li class="square2"></li>
                <li class="square0"></li>
                <li class="square3"></li>
                <li class="square4"></li>
                <li class="square5"></li>
                <li class="square6"></li>
                <li class="square7"></li>
                <li class="square8"></li>
            </ul>
            <button class="ui pink button">Mélanger</button>
        </div>
    `;
}

// Maps

let maps = function(searchable) {
    if (!searchable)
        return `
            <div class="places">
                <div class="map"></div>
            </div>
        `;

    return `
        <div class="places">
            <div class="ui icon mini input">
                <i class="search icon"></i>
                <input type="text" placeholder="Rechercher un lieu">
            </div>
            <div class="map"></div>
        </div>
    `;
}

let mapsWait = function() {
    return new Promise(function(resolve) {
        setTimeout(resolve, 3000);
        google.maps.event.addListenerOnce(map, 'idle', resolve);
    });
}

let near = function(positionA, positionB) {
    if (!positionA || !positionB)
        return false;

    return 0.01 > +positionA.lat.toFixed(4) - +positionB.lat.toFixed(4)
        && 0.01 > +positionA.lng.toFixed(4) - +positionB.lng.toFixed(4)
        && -0.01 < +positionA.lat.toFixed(4) - +positionB.lat.toFixed(4)
        && -0.01 < +positionA.lng.toFixed(4) - +positionB.lng.toFixed(4);
}

// Booking

let booking = function() {
    return `
        <div class="booking">
            <div class="ui stackable grid">
                <div class="sixteen wide yellow center aligned column">
                    <h4 class="ui header">
                        <i class="plane icon"></i>
                        <div class="content">Réserver un vol</div>
                    </h4>
                </div>
                <div class="eight wide column">
                    <div class="ui card">
                        <div class="content">
                            <div class="header">DEL</div>
                            <div class="meta">
                                <span class="date">NEW DEHLI</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="eight wide column">
                    <div class="ui card">
                        <div class="content">
                            <div class="header">BKK</div>
                            <div class="meta">
                                <span class="date">BANGKOK</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="eight wide column">
                    <div class="ui card from">
                        <div class="content">
                            <a class="header formatted">-</a>
                            <div class="ui input">
                                <input type="date" placeholder="yyyy-mm-dd"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="eight wide column">
                    <div class="ui card to">
                        <div class="content">
                            <a class="header formatted">-</a>
                            <div class="ui input">
                                <input type="date" placeholder="yyyy-mm-dd"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="eight wide column">
                    <select class="ui fluid dropdown">
                        <option value="1">1 voyageur</option>
                        <option value="2">2 voyageurs</option>
                        <option value="3">3 voyageurs</option>
                        <option value="4">4 voyageurs</option>
                    </select>
                </div>
                <div class="eight wide column">
                    <div class="ui grey center aligned card">
                        <div class="content">
                            <span class="header price">0€</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Connect Four

let connectfour = function() {
    return `
        <div class="connectfour">
            <table></table>
        </div>
    `;
}

// Search

let httpWait = function(url) {
    var open = XMLHttpRequest.prototype.open;
    var fetching = fetch;

    return new Promise(function(resolve) {
        setTimeout(resolve, 3000);

        XMLHttpRequest.prototype.open = function() {
            this.addEventListener('readystatechange', function(event) {
                if (event.target.readyState !== 4)
                    return;

                // await for xhr listeners to be called
                setTimeout(resolve.bind(null, event.target.responseURL), 200);
            });

            open.apply(this, arguments);
        }

        fetch = function() {
            let promise = fetching.apply(this, arguments);
            promise.then(function() {
                let url = arguments[0] && arguments[0].url;
                // await for json() to be completed
                setTimeout(resolve.bind(null, url), 200);
            });
            return promise;
        }
    }).then(function(url) {
        // remove listener
        XMLHttpRequest.prototype.open = open;
        fetch = fetching;

        return url;
    });
}

let getParameterByName = function(url, name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

let search = function() {
    return `
        <div class="ui centered stackable grid favorites">
            <div class="ui eight wide column">
                <div class="ui labeled search focus">
                    <div class="ui icon fluid input">
                        <input class="prompt" type="text" placeholder="Search repositories..." autocomplete="off">
                        <i class="search icon"></i>
                    </div>
                    <div class="results transition"></div>
                </div>
            </div>
            <div class="ui eight wide column">
                <div class="ui right labeled left icon action input">
                    <i class="star icon"></i>
                    <input type="text" placeholder="0" disabled="disabled" class="count">
                    <button class="ui icon button direction">
                        <i class="sort content descending icon"></i>
                    </button>
                </div>
                <button class="ui labeled icon button fetch">
                    <i class="refresh icon"></i>Actualiser
                </button>
                <button class="ui labeled icon button remove">
                    <i class="trash icon"></i>Supprimer
                </button>

                <div class="ui middle aligned divided list">
                    <div class="basic center aligned segment"></div>
                </div>
            </div>
        </div>
    `;
}

// Might

let might = function() {
    var tiles = [
        '', '', '', '', '', '',
        '', '', '', '', '', '',
        'peon', '', '', 'peon', '', 'peon',
        'peon', 'block', '', 'peon', 'peon', 'peon',
        'attack', 'peon', 'peon', '', 'peon', 'peon',
        'peon', 'peon', '', '', 'peon', '',
        '', '', '', '', '', '',
        '', '', '', '', '', ''
    ];

    var html = '<div class="might">';
    for (var y = 0; y < 8; y++) {
        if (y === 0)
            html += '<table class="active" data-p="1"><thead><th class="floating ui teal label">2 ♥♥</th></thead><tbody>';
        else if (y === 4)
            html += '<table data-p="2"><thead><th class="floating ui teal label">0 ♥♥</th></thead><tbody>';

        html += '<tr>';
        for (var x = 0; x < 6; x++) {
            var clazz = tiles[y*6+x];
            html += `<td class="${clazz}" data-y="${y<4 ? 4-y%4 : y%4+1}" data-x="${x+1}"></td>`;
        }
        html += '</tr>';

        if (y === 3 || y === 7)
            html += '</tbody></table>';
    }

    html += '</div>';
    return html;
}

// Helpers

let keypress = function(el, key) {
    keyevent(el, key, 'keypress');
    keyevent(el, key, 'keyup');
    keyevent(el, key, 'keydown');
}

let keyevent = function(el, key, event) {
    let oEvent = document.createEvent('KeyboardEvent');

    // Chromium Hack
    Object.defineProperty(oEvent, 'keyCode', { get : function() { return this.keyCodeVal; }});
    Object.defineProperty(oEvent, 'which', { get : function() { return this.keyCodeVal; } });

    if (oEvent.initKeyboardEvent) {
        oEvent.initKeyboardEvent(event, true, true, document.defaultView, false, false, false, false, key, key);
    } else {
        oEvent.initKeyEvent(event, true, true, document.defaultView, false, false, false, false, key, 0);
    }

    oEvent.keyCodeVal = key;
    el.dispatchEvent(oEvent);
}

let change = function(el) {
    var event = new Event('change');
    el.dispatchEvent(event);
}

let elContains = function(el, value) {
    return !!(el && el.innerHTML.indexOf(value) !== -1);
}
let elHasClass = function(el, clazz) {
    return !!(el && el.classList.contains(clazz));
}

let getClassNames = function(selector) {
    var classNames = [];
    var els = document.querySelectorAll(selector);
    for (var i = 0; i < els.length; i++) {
        classNames.push(els[i].className);
    }
    return classNames;
}

//
// Chapters
//

let chapters = [
    {
        title: "Le langage du web",
        description: "JavaScript est un langage de programmation notamment utilisé pour réaliser des applications web dynamiques et des applications mobiles et desktop natives.<br><br>Ce chapitre présente l'histoire du langage et ses grands principes.",
        color: "green",
        steps: [
            {
                title: "Historique",
                course: true,
                description: `
                    Connu aussi sous le nom d'ECMAScript (le standard qui le sous-tend), JavaScript est un langage de programmation dynamique, principalement utilisé dans les navigateurs web pour interagir avec l'utilisateur, modifier l'état de la page et communiquer avec un serveur de façon asynchrone. Depuis peu, il est aussi utilisé côté serveur à l'aide d'environnements d'exécution (comme Node.js).

                    * 1995 — Création du langage JavaScript dans le navigateur Netscape par Brendan Eich
                    * 1996 — Apparition dans Internet Explorer 3 aux côté des CSS (Cascading Style Sheets)
                    * 1997 — Standardisation du langage via la norme ECMAScript
                    * 1999 — Microsoft crée le précurseur d'Ajax pour appeler un serveur de façon asynchrone
                    * 2006 — La librairie jQuery standardise la manipulation cross-browser des pages
                    * 2008 — Popularisation de l'architecture REST (Representational State Transfer)
                    * 2009 — Sortie du navigateur Google Chrome équipé de V8, axé sur les performances
                    * 2009 — Usage du moteur d'exécution V8 pour créer un serveur d'application, Node.js
                    * 2010 — Démocratisation des RIA (Rich Internet Application) JavaScript succédant à Flash
                    * 2012 — Démocratisation des outils de développement web (Require.js, Grunt, Bower)
                    * 2014 — Standardisation de HTML5
                    * 2015 — Standardisation de ECMAScript 6

                    À son apparition, JavaScript ajouta une pointe de vie aux sites internet. Il fût possible de naviguer au sein d'un carrousel d'images sans quitter la page ou de valider un formulaire avant de l'envoyer. L'arrivée de moteurs d'exécution performants, V8 en tête, changea la donne. D'un langage d'appoint, JavaScript allait devenir le langage du web.

                    Une grande majorité des sites internet a désormais recours à lui. Il joue de plus en plus un rôle de chef d'orchestre, gérant toutes les problématiques d'un site internet. Il permet également de construire des applications mobiles (Mozilla développe même un système d'exploitation dont les applications sont développées en JavaScript) des jeux vidéos et des applications de bureau (l'application de streaming musical Spotify et l'éditeur de code Atom).
                `
            },
            {
                title: "Principe",
                course: true,
                description: `
                    L'usage classique de JavaScript se fait au sein d'une page HTML. Cette dernière est composé de deux parties, une en-tête — la balise [\`<head>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) — et un contenu — la balise [\`<body>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body). Son entête peut contenir des liens vers d'autres ressources nécessaires à la page, comme des fichiers CSS et/ou JS.

                    À la saisie d'une URL dans un navigateur web, celui-ci se connecte à un serveur et télécharge les données transmises par ce serveur — par exemple, un fichier HTML. Si ce fichier référence des ressources dans son entête, elles sont téléchargées automatiquement.

                    Le CSS permet de mettre en forme le contenu d'un fichier HTML (couleurs, organisation, effets au survol, etc). Il est inséré à l'aide de la balise [\`<link>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link).

                    Le JS permet de rendre dynamique le contenu d'un fichier HTML (action lors d'un clic, notification utilisateur lors d'une action, etc). Il est inséré à l'aide de la balise [\`<script>\`](https://developer.mozilla.org/en/docs/Web/HTML/Element/script)

                    Les premières applications web étaient statiques, et nombreuses sont celles qui le sont encore. Une application statique a le fonctionnement suivant :
                    * l'utilisateur saisit une adresse dans son navigateur (ou clique sur le résultat d'un moteur de recherche)
                    * le navigateur se connecte à un serveur et récupère la page concernée
                    * le navigateur télécharge les ressources listées dans l'entête de la page
                    * le navigateur efface la page précédente et affiche la nouvelle page, la met en forme avec le CSS et exécute le JS de son entête
                    * si l'utilisateur clique sur un lien [\`<a>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) de la page, ces étapes reprennent à l'étape 2
                `
            },
            {
                title: 'Principe (suite)',
                course: true,
                description: `
                    Les applications web dynamiques — ou RIA (Rich Internet Application) — sont apparues plus tard, d'abord avec Flash, ensuite avec JavaScript. Une application dynamique a le même fonctionnement qu'une application statique à la différence qu'elle est en mesure :
                    * d'écouter des événements utilisateurs plus variés qu'un clic sur un lien, par exemple, la saisie d'un champ de formulaire, le glisser déposer d'une image, l'appui sur une touche
                    * de modifier une partie de la page sans la recharger en entier
                    * de requêter un serveur

                    L'ambition des RIA est de reproduire l'expérience utilisateur des applications de bureau, comme un client mail ou un traitement de texte, dont l'interaction utilisateur est suivie presque instantanément de son effet — en supprimant le rechargement classique du web.

                    Les RIA accompagnent l'émergence des applications mobile : toute l'interface est embarquée par l'utilisateur. Plusieurs interfaces (application, site web, dispositif embarqué) requêtent un même serveur et affichent les données chacune à leur façon.

                    **Une page HTML5** :

                        <!doctype html>
                        <html>
                            <head>
                                <link href="style.css" rel="stylesheet">
                                <script src="application.js"></script>
                            </head>
                            <body>
                                <p>Hey Jude</p>
                            </body>
                        </html>
                `
            }
        ]
    }, {
        title: "Variables et opérations",
        description: "JavaScript est un langage de script au typage dynamique.<br><br>Ce chapitre présente les bases du langage avec les variables (<i>nombres, chaines de caractères, etc</i>) et les opérations (<i>addition, concaténation</i>).",
        color: "green",
        steps: [
            {
                course: true,
                description: `
                    JavaScript est un langage de script au typage dynamique. C'est un langage orienté objet à prototype qui supporte la programmation impérative et fonctionnelle (ses fonctions sont des citoyens de première classe). Sa syntaxe est héritée du C tandis que sa sémantique est inspirée par Smalltalk et Lisp.

                    ### Les variables

                    Une variable est un symbole qui associe un nom à une valeur stockée en mémoire. Le nom doit être unique. La valeur peut être de plusieurs types.

                    JavaScript est un langage typé dynamiquement, toutes les variables sont définies avec le mot clé \`var\` et le moteur d'exécution se charge de leur affecter le type adéquat (type qui peut évoluer dans le temps). Le langage propose trois types primitifs — [\`Boolean\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [\`Number\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) et [\`String\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) — et deux types composites — [\`Object\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) et [\`Array\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

                    ### Les variables de type primitif

                    Les chaînes de caractères (String), peuvent être déclarées à l'aide de guillemets simples \`''\` ou doubles \`""\`.
                    Les nombres (Number), représentent des entiers ou des flottants. L'entier maximum représentable est 2<sup>53</sup>-1 et le minimum -1*(2<sup>53</sup>-1). La précision des flottants suit la même règle (ils sont représentés de la même façon en mémoire), avec 16 bits (un nombre avec 2 chiffres avant la virgule peut en compter jusqu'à 14 après).

                    Les booléens (Boolean), représentent l'une des deux valeurs \`true\` ou \`false\`.

                    **Déclaration de trois variables primitives :**

                        var name = 'Paul';
                        var age = 72;
                        var guitar = true;
                `
            },
            {
                title: "Initialiser une variable (de type nombre)",
                description: "Déclarer une variable nommée <code>secret</code> et lui affecter la valeur numérique <code>12</code>",
                excerpt: "Une variable est un symbole qui associe un nom à une valeur stockée en mémoire. Le nom doit être unique. La valeur peut être de plusieurs types.<br><br><strong>Exemple</strong> : l'instruction <code>var value = 5;</code> déclare la variable <code>value</code> et lui affecte la valeur numérique <code>5</code> (<i>le point virgule en fin de chaque ligne est optionnel</i>).",
                solved: "var secret = 12;",
                warn: "La variable <code>secret</code> doit être déclarée et initialisée à <code>12</code>",
                answer: function() {
                    return secret === 12;
                }
            },
            {
                title: "Initialiser une variable (de type chaîne de caractères)",
                description: "Déclarer une variable nommée <code>secret</code> et lui affecter la valeur <code>'lorem ipsum'</code>",
                solved: "var secret = 'lorem ipsum';",
                warn: "La variable <code>secret</code> doit être déclarée et initialisée à <code>'lorem ipsum'</code>",
                answer: function() {
                    return secret === 'lorem ipsum';
                }
            },
            {
                title: "Initialiser une variable (de type booléen)",
                description: "Déclarer une variable nommée <code>secret</code> et lui affecter la valeur <code>true</code>",
                solved: "var secret = true;",
                warn: "La variable <code>secret</code> doit être déclarée et initialisée à <code>true</code>",
                answer: function() {
                    return secret === true;
                }
            },
            {
                title: "Les opérateurs",
                course: true,
                description: `
                    Un opérateur est un symbole qui représente une action. Il permet d'opérer sur deux valeurs, les additionner, les soustraire ou autre. Tous les opérateurs ne s'appliquent pas à tous les types de valeurs.

                    **Opérations sur des variables primitives :**

                        22 + 10 * 5;
                        → 72

                        'Paul' + ' ' + 'McCartney';
                        → 'Paul McCartney'

                        22 % 6;
                        → 4

                    L'opérateur mathématiques \`+\` additionne les nombres et concatène les chaînes de caractères (les ajoute bout à bout).

                    Les opérateurs mathématiques \`-\`, \`*\`, \`/\`, \`%\` s'appliquent aux nombres uniquement. Les opérations mathématiques sont effectuées de gauche à droite, la multiplication, la division et le modulo (reste de la division euclidienne) ont la priorité sur l'addition et la soustraction. Pour modifier l'ordre, il est possible d'utiliser des parenthèses.
                `
            },
            {
                title: "Additionner deux nombres",
                description: "Créer une variable nommée <code>secret</code> et lui affecter la somme des variables numériques <code>x</code> et <code>y</code> (<i>déclarées par ce tutoriel</i>).",
                excerpt: "Un opérateur est un symbole qui représente une action. Il permet d'opérer sur deux valeurs, les additionner, les soustraire ou autre. Une variable peut être affectée du résultat d'un opérateur.<br><br><strong>Exemple</strong> : l'instruction <code>var value = 5 + 10;</code> déclare la variable <code>value</code> et lui affecte le résultat de l'opération, <code>15</code>.",
                solved: "var secret = x + y;",
                init: function() {
                    window.x = this.x = random();
                    window.y = this.y = random();
                },
                secret: function() {
                    return this.x + this.y;
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code>";
                },
                answer: function() {
                    return secret === this.secret();
                }
            },
            {
                title: "Concaténer deux chaines de caractères",
                description: "Créer une variable nommée <code>secret</code> et lui affecter la concaténation des variables <code>x</code> et <code>y</code> séparées d'un espace (<i>déclarées par ce tutoriel</i>).",
                excerpt: "Ajouter une chaine de caractères à une autre avec l'opérateur <code>+</code> permet de les concaténer (<i>les mettre bout à bout</i>).<br><br>Pour ajouter un espace à une chaine existante, il est possible de créer une chaine composée uniquement d'un espace <code>' '</code>. Les chaines de caractères peuvent être déclarées à l'aide de guillemets simples <code>'lorem ipsum'</code> ou double <code>\"lorem ipsum bacon\"</code>.<br><br><strong>Exemple</strong> : <code>'lorem ' + 'ipsum'</code> crée la chaine <code>'lorem ipsum'</code>.",
                solved: "var secret = x + ' ' + y;",
                init: function() {
                    window.x = this.x = randomize('purple', 'sapphire', 'blue', 'red');
                    window.y = this.y = randomize('skate', 'rollers', 'submarine');
                },
                secret: function() {
                    return this.x + ' ' + this.y;
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code>";
                },
                answer: function() {
                    return secret === this.secret();
                }
            },
            {
                title: "Diviser deux nombres",
                description: "Créer une variable nommée <code>secret</code> et lui affecter le résultat de la division de la variables <code>x</code> par <code>y</code> (<i>déclarées par ce tutoriel</i>) arrondi à l'entier inférieur.",
                excerpt: "Il est possible d'effectuer des arrondis avec la fonction <code>parseInt(value, 10)</code> ou <code>Math.floor(value)</code> (<i>founies par tous les navigateurs</i>).",
                solved: "var secret = parseInt(x / y, 10);",
                init: function() {
                    window.x = this.x = randomize(13, 23, 33, 43, 53);
                    window.y = this.y = randomize(2, 4, 6, 8);
                },
                secret: function() {
                    return parseInt(this.x / this.y, 10);
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code>";
                },
                answer: function() {
                    return secret === this.secret();
                }
            }
        ]
    }, {
        title: "Conditions et boucles",
        description: "Les algorithmes ont recours aux expressions conditionnelles afin d'effectuer une opération dans certaines circonstances.<br><br>Ce chapitre présente les bases du langage avec les conditions et le boucles.",
        color: "green",
        steps: [
            {
                title: "Les expressions conditionnelles",
                course: true,
                description: `
                    Les algorithmes ont recours aux expressions conditionnelles afin d'effectuer une opération (ou plusieurs) uniquement dans certaines circonstances ou bien répéter une opération (ou plusieurs) tant qu'une circonstance est vérifiée.

                    Les expressions conditionnelles s'appuient sur des opérateurs mathématiques (applicables aux valeurs numériques) \`>\`, \`>=\`, \`<\`, \`<=\` qui testent si la première valeur est supérieure, supérieure ou égale, inférieure, inférieure ou égale à la seconde. Des opérateurs d'équivalence (applicables à tout type de valeur) \`==\`, \`!=\`, \`===\` et \`!==\` testent si deux valeurs sont égales/différentes qu'importe leur type ou égales/différentes et de même type.

                    **Opérations conditionnelles, \`// permet d'ajouter un commentaire\` :**

                         5  >   5; // → false
                         5  >=  5; // → true
                        '5' ==  5; // → true
                        '5' !=  5; // → false
                        '5' === 5; // → false
                        '5' !== 5; // → true
                         5  === 5; // → true

                    L'expression conditionnelle \`if\` effectue une opération si sa condition est vérifiée (égale à\`true\`). L'expression facultative \`else\` effectue une opération dans le cas inverse.

                    **Expression conditionnelle if :**

                        if (song == 'A little help from my friend') {
                          singer = 'Paul';
                        } else {
                          singer = 'John';
                        }

                    Les opérations conditionnées par une de ces expressions sont encadrées par des accolades ouvrantes \`{\` et fermantes \`}\`. Les accolades sont facultatives si elles concernent une seule opération.
                `
            },
            {
                title: "Retourner le plus grand de deux nombres",
                description: "Créer une variable nommée <code>secret</code> et lui affecter la valeur du plus grand nombre parmi <code>x</code> et <code>y</code> (<i>déclarées par ce tutoriel</i>).",
                excerpt: "L'objet <code>Math</code> dispose également d'autres fonctionnalités pour identifier les maximum, minimum, sinus, etc. Il est également possible d'écrire une condition qui vérifie lequel de deux nombres est le plus grand avec <code>if</code>.",
                solved: "var secret = Math.max(x, y);",
                init: function() {
                    window.x = this.x = random();
                    window.y = this.y = random();
                },
                secret: function() {
                    return Math.max(this.x, this.y);
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code>";
                },
                answer: function() {
                    return secret === this.secret();
                }
            },
            {
                title: "Retourner la plus grande de deux chaines",
                description: "Créer une variable nommée <code>secret</code> et lui affecter la valeur de la chaîne de caractères la plus longue parmi <code>x</code> et <code>y</code> (<i>déclarées par ce tutoriel</i>).",
                excerpt: "Les chaines de caractères sont des tableaux de caractères. Elles disposent donc d'un attribut <code>length</code> indiquant leur nombre d'éléments. Il est également possible d'accéder - comme pour un tableau - à un élément avec son index.<br><br><strong>Exemple</strong> : <code>'lorem ipsum'.length</code> retourne <code>11</code>, car la chaine est composée de 11 caractères. <code>'lorem ipsum'[3]</code> retourne <code>e</code>, car il s'agit du 4iem caractère de la chaine (<i>l'index des tableaux commence à zéro</i>).",
                solved: "var secret;<br>if (x.length > y.length) {<br>  secret = x;<br>} else {<br>  secret = y;<br>}",
                init: function() {
                    window.x = this.x = randomize('purple', 'sapphire', 'blue', 'red');
                    window.y = this.y = randomize('skate', 'rollers', 'submarine');
                },
                secret: function() {
                    return this.x.length > this.y.length ? this.x : this.y;
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code>";
                },
                answer: function() {
                    return secret === this.secret();
                }
            },
            {
                title: "Initialiser un booléen",
                description: "Créer une variable nommée <code>secret</code> et lui affecter <code>true</code> si la somme de <code>x</code> et <code>y</code> (<i>déclarées par ce tutoriel</i>) est supérieure à 100, <code>false</code> sinon.",
                excerpt: "En plus des nombres et des chaines de caractères, le langage dispose de booléens, des variables dont la valeur est <code>true</code> ou <code>false</code>. Les conditions et les boucles sont basées sur des tests booléens (<i>faits par le navigateur</i>).",
                solved: "var secret = x + y > 100;",
                init: function() {
                    window.x = this.x = randomize(30, 40, 50);
                    window.y = this.y = randomize(50, 60, 70);
                },
                secret: function() {
                    return this.x + this.y > 100;
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code>";
                },
                answer: function() {
                    return secret === this.secret();
                }
            },
            {
                title: "Les opérateurs booléens",
                course: true,
                description: `
                    Les opérateurs booléens \`||\` et \`&&\` représentent \`ou\` et \`et\`. L'opérateur \`||\` retourne \`true\` si l'un de ces membres est évalué à \`true\`. L'opérateur \`&&\` retourne \`true\` si tous ses membres sont évalués à \`true\`. En cas contraire, ces opérateurs retournent \`false\`.

                    L'opérateur \`||\` évalue ses membres un à un jusqu'à trouver une valeur évaluée à \`true\`, il arrête d'évaluer ses membres dès qu'il en a trouvé une. L'opérateur \`&&\` évalue ses membres un à un tant qu'il trouve une valeur évaluée à \`true\`, il arrête d'évaluer ses membres dès qu'il en a trouvé une \`false\`.

                    S'ils trouvent une valeur évaluée à \`true\`, ces opérateurs retourne la valeur évaluée.

                    **Opérateurs booléens et évaluation :**

                        false || true;
                        → true

                        false && true;
                        → false

                        false || 5;
                        → 5

                        false && 5;
                        → false
                `
            },
            {
                title: "Effectuer deux conditions simultanées",
                description: "Créer une variable nommée <code>secret</code> et lui affecter <code>true</code> si <code>x</code> et <code>y</code> (<i>déclarées par ce tutoriel</i>) sont tous deux supérieurs à 10, <code>false</code> sinon.",
                excerpt: "Les opérateurs et <code>&&</code> et ou <code>||</code> permettent de combiner des conditions.<br><br><strong>Exemple</strong> : <code>10 < 12 && 12 < 15</code> retourne <code>true</code> car les deux conditions sont vérifiées. <code>10 < 12 || 12 > 15</code> retourne <code>true</code> car une des deux conditions est vérifiée. <code>10 > 12 || 12 > 15</code> retourne <code>false</code> car aucune des deux conditions n'est vérifiée.",
                solved: "var secret = x > 10 && y > 10;",
                init: function() {
                    window.x = this.x = randomize(5, 9, 14, 18);
                    window.y = this.y = randomize(5, 9, 14, 18);
                },
                secret: function() {
                    return this.x > 10 && this.y > 10;
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code>";
                },
                answer: function() {
                    return secret === this.secret();
                }
            },
            {
                title: "Effectuer une condition ou une autre",
                description: "Créer une variable nommée <code>secret</code> et lui affecter <code>true</code> si <code>x</code> ou <code>y</code> (<i>déclarées par ce tutoriel</i>) est supérieur à 10, <code>false</code> sinon.",
                solved: "var secret = x > 10 || y > 10;",
                init: function() {
                    window.x = this.x = randomize(5, 9, 14, 18);
                    window.y = this.y = randomize(5, 9, 14, 18);
                },
                secret: function() {
                    return this.x > 10 || this.y > 10;
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code>";
                },
                answer: function() {
                    return secret === this.secret();
                }
            },
            {
                title: "L'expressions de boucle for",
                course: true,
                description: `
                    L'expression conditionnelle de boucle \`for\` effectue une opération tant que sa condition est vérifiée (égale à \`true\`). Cette expression est originale : elle se définit en trois parties facultatives, d'abord une initialisation, ensuite une condition, enfin une opération finale. L'initialisation est effectuée au premier pas de boucle, ensuite, tant que la condition n'est pas vérifiée, la ou les opérations sont évaluées, puis l'opération finale est évaluée à son tour.

                    **Opération conditionnelle for :**

                        var notes = '';
                        for (var instruments = 0; instruments < 4; instruments++) {
                            notes = notes + '♬';
                        }

                        → '♬♬♬♬' // after the for loop, notes has been updated four times

                    Il est tout à fait possible d'itérer en sens inverse. Il suffit pour cela de modifier l'initialisation, d'inverser la condition et de modifier l'opération finale afin de décrémenter à chaque tour de boucle. Des itérations plus évoluées sont également imaginables (2 à 2, etc).

                    Les opérateurs \`++\` et \`--\` sont couramment utilisés dans les boucles. Ils incrémentent (plus 1) ou décrémentent (moins 1) la valeur d'une variable numérique. Ils peuvent être utilisés avant et après une variable. Avant, la valeur est modifiée puis retournée, après, la valeur est retournée puis modifiée.

                    Les opérateurs \`+=\`, \`-=\`, \`*=\` et \`/=\` quant à eux modifient la valeur d'une variable numérique à partir de sa valeur actuelle.

                    **Opérateurs raccourcis :**

                        var instruments = 2;
                        ++instruments;
                        → 3

                        instruments++; // return instruments' value before adding 1, but the variable is incremented
                        → 3

                        instruments += 2;
                        → 6
                `
            },
            {
                title: "Effectuer une boucle",
                description: "Créer une variable nommée <code>secret</code> et lui affecter la valeur de la chaîne <code>x</code> répétée autant de fois que la valeur numérique <code>y</code> (<i>ex. 3, skate -> skateskateskate — déclarées par ce tutoriel</i>)",
                excerpt: "L'expression conditionnelle de boucle <code>for</code> effectue une opération tant que sa condition est vérifiée (<i>égale à true</i>). Cette expression est originale : elle se définit en trois parties facultatives, d'abord une initialisation, ensuite une condition, enfin une opération finale. L'initialisation est effectuée au premier pas de boucle, ensuite, tant que la condition n'est pas vérifiée, la ou les opérations sont évaluées, puis l'opération finale est évaluée à son tour.<br><br><strong>Exemple</strong> : <pre><code>for (var i = 0; i < 5; i++) {<br> console.log(i);<br>}</code></pre> affiche <code>0 1 2 3 4</code> dans la console du navigateur. Elle peut se lire ainsi : « Soit <code>i</code> initialisé à zéro, tant que <code>i</code> est inférieur à <code>5</code> effectuer les opérations suivantes. Après avoir effectué les opérations, ajouter <code>1</code> à <code>i</code>, puis recommencer ».",
                solved: "var secret = '';<br>for (var i = 0; i < y; i++) {<br>  secret = secret + x;<br>}",
                init: function() {
                    window.x = this.x = randomize('skate', 'rollers', 'submarine');
                    window.y = this.y = randomize(3, 5, 8, 13);
                },
                secret: function() {
                    let result = '';
                    for(let i = 0; i < this.y; i++)
                        result += this.x;
                    return result;
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code>";
                },
                answer: function() {
                    return secret === this.secret();
                }
            },
            {
                title: "Effectuer une boucle",
                description: "Créer une variable nommée <code>secret</code> et lui affecter la valeur de <code>x</code> (<i>déclarée par ce tutoriel</i>) dont tous les <code>e</code> ont été retirés.",
                excerpt: "Les condition et les boucles peuvent être imbriquées les unes dans les autres.",
                solved: "var secret = '';<br>for (var i = 0; i < x.length; i++) {<br>  var char = x[i];<br>  if (char !== 'e') {<br>    secret = secret + char;<br>  }<br>}",
                init: function() {
                    window.x = this.x = randomize('skate', 'rollers', 'submarine');
                },
                secret: function() {
                    return this.x.replace(/[e]+/g, '');
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code>";
                },
                answer: function() {
                    return secret === this.secret();
                }
            },
            {
                title: "Effectuer une boucle et une condition",
                description: "Créer une variable nommée <code>secret</code> et lui affecter la valeur de tous les nombres de 1 jusqu'à <code>x</code> (<i>déclarée par ce tutoriel</i>) sans les pairs (<i>ex. 7 -> 7 + 5 + 3 + 1</i>).",
                solved: "var secret = 0;<br>for (var i = 1; i <= x; i++) {<br>  if (i % 2 === 1) {<br>    secret = secret + i;<br>  }<br>}",
                init: function() {
                    window.x = this.x = random(5, 9);
                },
                secret: function() {
                    let result = 0;
                    for(let i = 1; i <= this.x; i++)
                        if (i % 2 !== 0)
                            result += i;
                    return result;
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code>";
                },
                answer: function() {
                    return secret === this.secret();
                }
            },
            {
                title: "L'expression de boucle while",
                course: true,
                description: `
                    L'expression conditionnelle de boucle \`while\` effectue une opérateur tant que sa condition est vérifiée (égale à \`true\`). Il est également possible d'utiliser le mot clé do afin d'effectuer l'opération une première fois avant d'itérer.

                    **Opération conditionnelle while :**

                        while (albums < 12)
                          albums = albums + 1;

                        do {
                          albums++;
                        } while (albums < 12)
                `
            },
            {
                title: "L'expression conditionnelle switch",
                course: true,
                description: `
                    L'expression conditionnelle switch effectue l'opération relative à l'une de ces conditions case si la valeur est strictement égale, ===, ou sa condition default si aucune condition n'est respectée. Le mot clé break termine les opérations d'une condition.

                    **Expressions conditionnelles switch :**

                        switch (name) {
                            case 'Paul': instrument = 'bass'; break;
                            case 'John':
                            case 'George': instrument = 'guitar'; break;
                            case 'Ringo': instrument = 'drums'; break;
                            default: instrument = 'cymbal';
                        }
                `
            }
        ]
    }, {
        title: "Tableaux",
        description: "Les tableaux (Array), représentent une liste ordonnée de valeurs (qu'importe leur type).<br><br>Ce chapitre présente les bases du langage avec les tableaux.",
        color: "green",
        steps: [
            {
                title: "Les tableaux",
                course: true,
                description: `
                    Les tableaux (Array), représentent une liste ordonnée de valeurs (qu'importe leur type).

                    **Déclaration d'un tableau :**

                        var beatles = ['paul', 'john', 'george', 'ringo'];

                    Les variables primitives, lorsqu'elles sont modifiées voient leur valeur remplacée, là où les variables composites peuvent être modifiées partiellement. Et, contrairement aux variables primitives, il est possible d'itérer sur les variables composites (de récupérer une à une les valeurs listées dans un tableau, pour les additioner par exemple).

                    Il est possible de manipuler les tableaux par index, mais cela peut s'avérer délicat pour certaines opérations, par exemple ajouter un élément au début du tableau demande de déplacer tous les éléments existants et supprimer un élément de décaler les éléments suivants afin de combler le « vide » ainsi créé.

                    Les éléments d'un tableaux sont ajoutés de façon consécutive et leur premier index est zéro.

                    **Modification manuelle d'un tableau :**

                        var beatles = ['paul', 'john'];
                        beatles[3] = 'ringo';
                        → ['paul', 'john', undefined, 'ringo']
                `
            },
            {
                title: "Créer un tableau",
                description: "Créer une variable nommée <code>secret</code> de type tableau et lui ajouter les valeurs de <code>x</code> et de <code>y</code> (<i>déclarées par ce tutoriel</i>).",
                excerpt: "Les tableaux représentent une liste ordonnée de variables (qu'importe leur type). La propriété <code>length</code> permet de connaitre le nombre d'éléments d'un tableau. Les crochets <code>[ ]</code> permettent d'accèder à un élément par index (<i>l'index des tableaux commence à zéro</i>).",
                solved: "var secret = [x, y];",
                init: function() {
                    window.x = this.x = random(1, 10);
                    window.y = this.y = random(11, 20);
                },
                secret: function() {
                    return [this.x, this.y];
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code>";
                },
                answer: function() {
                    return equals(secret, this.secret());
                }
            },
            {
                title: "Attributs et méthodes des tableaux",
                course: true,
                description: `
                    Afin de faciliter les opérations, des attributs et des méthodes sont proposés par le langage sur les tableaux. Chaque tableau dispose ainsi d'un attribut \`length\` indiquant son nombre d'éléments et de méthodes :

                    * \`push(element1, …, elementN)\` ajoute des éléments en dernière position
                    * \`unshift(element1, …, elementN)\` ajoute des éléments en première position
                    * \`pop()\` supprime le dernier élément
                    * \`shift()\` supprime le premier élément
                    * \`sort()\` trie les éléments (par défaut dans l'ordre croissant)
                    * \`indexOf(element)\` recherche la position d'un élément
                    * \`splice(start, deleteCount)\` supprime des éléments
                    * \`reverse()\` inverse l'ordre des éléments, le premier devenant le dernier, et ainsi de suite
                    * \`join()\` crée une chaîne de caractère en concaténant tous les éléments
                    * \`contat(array1, …, arrayN)\` concatène des tableaux à la suite

                    **Attributs et méthodes des tableaux :**

                        var beatles = ['paul', 'john', 'george', 'ringo'];
                        beatles.length;
                        → 4

                        beatles.push('brian');
                        → 'paul', 'john', 'george', 'ringo', 'brian'

                        beatles.shift();
                        → 'john', 'george', 'ringo', 'brian'

                        beatles.indexOf('ringo');
                        → 2

                        beatles.splice(1, 2);
                        → 'john', 'brian'

                        beatles.sort();
                        → 'brian', 'john'

                    Les méthodes disponibles sur les tableaux sont fournies par le langage. Il est également possible d'écrire ses propres méthodes.
                `
            },
            {
                title: "Concaténer deux tableaux",
                description: "Créer une variable nommée <code>secret</code> de type tableau et lui ajouter les valeurs de <code>x</code> (un tableau également) et de <code>y</code> (<i>déclarées par ce tutoriel</i>).",
                excerpt: "La méthode <code>concat</code> permet de rassembler un tableau à tableaux autres.",
                solved: "var secret = [].concat(x, y);",
                init: function() {
                    this.x = [random(1, 10), random(1, 10)];
                    window.x = this.x.slice(0);
                    window.y = this.y = random(11, 20);
                },
                secret: function() {
                    return [].concat(this.x, this.y);
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code>";
                },
                answer: function() {
                    return equals(secret, this.secret());
                }
            },
            {
                title: "Itérer sur un tableau",
                course: true,
                description: `
                    Il existe plusieurs façon d'itérer sur un tableau. La boucle \`for\` classique et l'expression conditionnelle \`for..in\` permettent d'itérer sur les éléments d'un tableau un à un. Il est alors possible de récupérer l'élément du tableau situé à cette position à l'aide de cet index, \`array[index]\`.

                    **Boucle for sur un tableau :**

                        var beatles = ['paul', 'john', 'george', 'ringo'];

                        var everyone = '';
                        for (var i = 0; i < beatles.length; i++) {
                          everyone += i + ' -> ' + beatles[i] + ', ';
                        }

                        → 0 -> paul, 1 -> john, 2 -> george, 3-> ringo,

                    L'opération entre accolades va être effectuée tant que la condition de sortie de boucle (\`i < beatles.length\`) est égale à \`true\`, 4 fois dans le cas présent.

                    * D'abord \`i\` est initialisé à \`0\`, la condition de sortie de boucle n'est pas vérifiée pour \`i\` égal \`0\` (tant que \`i < 4\`, la boucle continue)
                    * l'opération entre accolades est effectuée une première fois
                    * l'opération finale est effectuée, \`i++\`, i est désormais égal à 1, la condition de sortie de boucle n'est pas vérifiée pour \`i\` égal \`1\`
                    * l'opération entre accolades est effectuée une deuxième fois
                    * ainsi de suite jusqu'à ce que \`i\` égal \`4\`, à ce moment, la condition de sortie de boucle est vérifée, la boucle s'arrête (l'opération de boucle n'est plus effectuée) et passe à l'opération suivante (le code après l'accolade de fin \`}\`)

                    La variable \`i\` est couramment utilisée pour maintenir la position actuelle de la boucle (i est un diminutif d'index).

                    **Boucle for..in sur un tableau :**

                        var beatles = ['paul', 'john', 'george', 'ringo'];

                        var everyone = '';
                        for (var i in beatles) {
                          everyone += i + ' -> ' + beatles[i] + ', ';
                        }

                        → 0 -> paul, 1 -> john, 2 -> george, 3-> ringo,

                    Cette version est une alternative à la boucle classique, il existe de nombreuses manières d'itérer sur des tableaux.
                `
            },
            {
                title: "Modifier un tableau",
                description: "Créer une variable nommée <code>secret</code> de type tableau avec toutes les valeurs du tableau <code>x</code> (<i>déclarée par ce tutoriel</i>) dont chaque valeur a été doublée (<i>ex. [1, 5, 7] -> [2, 10, 14]</i>).",
                excerpt: "Les boucles <code>for</code> sont souvent utilisées pour parcourir un tableau et récupérer chacune de ses valeurs une à une.<br><br><strong>Exemple</strong> : <pre><code>for (var i = 0; i < items.length; i++) { <br>  console.log('value', items[i]); <br>}</code></pre> parcourt un tableau et affiche chacune de ses valeurs.",
                solved: "var secret = [];<br>for (var i = 0; i < x.length; i++) {<br>  var value = x[i];<br>  secret.push(value * 2); <br>}",
                init: function() {
                    this.x = [random(1, 10), random(1, 10), random(1, 10), random(1, 10)];
                    window.x = this.x.slice(0);
                },
                secret: function() {
                    return this.x.map(function(item) { return item * 2; });
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code>";
                },
                answer: function() {
                    return equals(secret, this.secret());
                }
            },
            {
                title: "Filtrer un tableau",
                description: "Créer une variable nommée <code>secret</code> de type tableau avec toutes les valeurs du tableau <code>x</code> dont la valeur de <code>y</code> a été retirée (<i>ex. 3, [1, 3, 3, 1] -> [1, 1] — déclarées par ce tutoriel</i>).",
                solved: "var secret = [];<br>for (var i = 0; i < x.length; i++) {<br>  if (x[i] !== y) {<br>    secret.push(x[i]);<br>  }<br>}",
                init: function() {
                    this.x = [random(1, 3), random(1, 3), random(1, 3), ''+random(1, 3), random(1, 3), ''+random(1, 3), random(1, 3), ''+random(1, 3)];
                    window.x = this.x.slice(0);
                    window.y = this.y = randomize.apply(null, x);
                },
                secret: function() {
                    let y = this.y;
                    return this.x.filter(function(i) { return i !== y; });
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code> (<i>attention, le tableau contient des entiers et des chaines de caractères</i>).";
                },
                answer: function() {
                    return equals(secret, this.secret());
                }
            },
            {
                title: "Réduire un tableau",
                description: "Créer une variable nommée <code>secret</code> ayant pour la valeur la somme de toutes les valeur du tableau <code>x</code> (<i>ex. [1, 5, 7] -> 13 — déclarée par ce tutoriel</i>).",
                solved: "var secret = 0;<br>for (var i = 0; i < x.length; i++) {<br>  secret = secret + x[i];<br>}",
                init: function() {
                    this.x = [random(1, 10), random(1, 10), random(1, 10), random(1, 10)];
                    window.x = this.x.slice(0);
                },
                secret: function() {
                    return this.x.reduce(function(memo, value) { return memo + value; }, 0);
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + this.secret() + "</code>";
                },
                answer: function() {
                    return secret === this.secret();
                }
            }
        ]
    }, {
        title: "Dictionnaires",
        description: "Les objets littéraux (Object) ou dictionnaire, représentent une suite de paires clé - valeur séparées par une virgule.<br><br>Ce chapitre présente les bases du langage avec les dictionnaires.",
        color: "green",
        steps: [
            {
                title: "Les dictionnaires",
                course: true,
                description: `
                    Les objets littéraux (Object) ou dictionnaire, représentent une suite de paires clé - valeur séparées par une virgule. Chacune des valeurs ainsi listées peut être d'une type primitif ou composite.

                    **Déclaration d'un dictionnaire :**

                        var paul = {
                          name: 'Paul',
                          age: 72,
                          guitar: true
                        };

                        var beatles = ['paul', 'john', 'george', 'ringo'];

                    Les attributs des objets littéraux peuvent être ajoutés, modifiés et même supprimés. Il en va de même des éléments des tableaux.

                    **Ajout et modification d'attributs d'un dictionnaire :**

                        var paul = {
                          name: 'Paul',
                          age: 72,
                          guitar: true
                        };

                        paul.guitar = false;
                        paul.bass = true;

                        delete paul.age;
                        → {name: 'Paul', guitar: false, bass: true}

                    Itérer sur un objet littéral retourne ses attributs un à un. Il est alors possible de récupérer la valeur de chacun d'entre eux.

                    **Boucle for..in sur un dictionnaire :**

                        var paul = {
                          name: 'Paul',
                          age: 72,
                          guitar: true
                        };

                        var profil = '';
                        for (var attribute in paul) {
                          profil += attribute + ' -> ' + paul[attribute] +  ', ';
                        }

                        → name -> paul, age -> 72, guitar -> true,

                    Contrairement aux tableaux ou l'ordre d'itération est normé, l'ordre d'itération sur les attributs d'un objet littéral n'est pas garanti. La majorité des implémentations (des navigateurs) itèrent sur les attributs selon l'ordre dans lequel ils ont été définis, mais pas toutes.
                `
            },
            {
                title: "Créer un dictionnaire (ou un objet littéral)",
                description: "Créer une variable nommée <code>secret</code> de type dictionnaire avec deux clés, <code>min</code> et <code>max</code>, ayant pour valeur le minimum et le maximum des valeurs <code>x</code> et <code>y</code> (<i>ex. 7, 5 -> {min: 5, max: 7} — déclarées par ce tutoriel</i>).",
                excerpt: "Les objets littéraux (<i> ou dictionnaires</i>), représentent une suite de paires clé - valeur séparées par une virgule. Chacune des valeurs ainsi listées peut être d'une type primitif ou composite.<br><br><strong>Exemple</strong> : <code>var obj = { age: 27, name: 'paul' }</code> déclare un objet littéral avec deux clés, la première ayant pour valeur un nombre, la seconde, une chaine de caractères. Ainsi <code>obj.age</code> retourne <code>27</code> et <code>obj.name</code> retourne <code>'paul'</code>. Ces valeurs peuvent être modifiées comme elles sont accédées, <code>obj.age = 32</code>.",
                solved: "var secret = {};<br>if (x < y) {<br>  secret.min = x;<br>  secret.max = y;<br>} else {<br>  secret.min = y;<br>  secret.max = x;<br>}",
                init: function() {
                    window.x = this.x = random(1, 50);
                    window.y = this.y = random(1, 50);
                },
                secret: function() {
                    return {min: Math.min(this.x, this.y), max: Math.max(this.x, this.y)};
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + JSON.stringify(this.secret()) + "</code>";
                },
                answer: function() {
                    return equals(secret, this.secret());
                }
            },
            {
                title: "Créer un dictionnaire",
                description: "Créer une variable nommée <code>secret</code> de type dictionnaire avec deux clés, <code>min</code> et <code>max</code>, ayant pour valeur le minimum et le maximum des dictionnaires <code>x</code> et <code>y</code> (<i>déclarées par ce tutoriel</i>) ayant chacun une clé <code>min</code> et <code>max</code> (<i>ex. {min: 1, max: 7}, {min: 4, max: 12} -> {min: 1, max: 12}</i>).",
                solved: "var secret = {};<br>if (x.min < y.min) {<br>  secret.min = x.min;<br>} else {<br>  secret.min = y.min;<br>}<br>if (x.max > y.max) {<br>  secret.max = x.max;<br>} else {<br>  secret.max = y.max;<br>}",
                init: function() {
                    window.x = this.x = {min: random(1, 24), max: random(25, 40)};
                    window.y = this.y = {min: random(1, 24), max: random(25, 40)};
                },
                secret: function() {
                    return {min: Math.min(this.x.min, this.y.min), max: Math.max(this.x.max, this.y.max)};
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + JSON.stringify(this.secret()) + "</code>";
                },
                answer: function() {
                    return equals(secret, this.secret());
                }
            },
            {
                title: "Filter un dictionnaire",
                description: "Créer une variable nommée <code>secret</code> de type dictionnaire avec les clés de <code>x</code> dont les clés égale à la valeur de <code>y</code> ont été retirées (<i>ex. 2, {a: 1, b: 2} -> {a: 1} — déclarées par ce tutoriel</i>).",
                solved: "var secret = {};<br>for (var key in x) {<br>  if (x[key] !== y) {<br>    secret[key] = x[key];<br>  }<br>}",
                init: function() {
                    window.x = this.x = {a: random(1, 3), b: random(1, 3), c: random(1, 3), d: random(1, 3), e: random(1, 3), f: random(1, 3)};
                    window.y = this.y = randomize(this.x.a, this.x.b, this.x.c, this.x.d, this.x.e, this.x.f);
                },
                secret: function() {
                    let result = {};
                    Object.keys(this.x).forEach(function(key) {
                        if (this.x[key] !== this.y) result[key] = this.x[key];
                    }.bind(this));
                    return result;
                },
                warn: function() {
                    return "La variable <code>secret</code> vaut <code>" + JSON.stringify(secret) + "</code> et non la résultat attendu, <code>" + JSON.stringify(this.secret()) + "</code>";
                },
                answer: function() {
                    return equals(secret, this.secret());
                }
            }
        ]
    }, {
        title: "Le DOM",
        description: "JavaScript permet d'écouter les actions utilisateur et de modifier dynamiquement la page à l'aide d'une structure arborescente : le DOM.<br><br>Ce chapitre présente les accès au DOM (<i>sélecteurs CSS</i>) et les écouteurs d'événements (<i>clics ou appuis de touches</i>).",
        color: "yellow",
        steps: [
            {
                title: "Le navigateur",
                course: true,
                description: `
                    L'environnement classique d'exécution de JavaScript est le navigateur web. Un navigateur est une application qui récupère, affiche les ressources d'Internet et permet de naviguer parmi elles. Il en existe de très nombreux ([Chrome](http://www.google.com/chrome/), [Firefox](https://www.mozilla.org/en-US/firefox/new/), [Edge](https://www.microsoft.com/en-us/windows/microsoft-edge), [Opera](http://www.opera.com/), [Safari](https://www.apple.com/safari/) pour ne citer qu'eux) et chacun d'entre eux à son propre moteur d'exécution. Chaque navigateur interprète donc le HTML, le CSS et le JS à sa manière.

                    Ces dernières années ont vu l'intensification de deux mouvements concomitants, d'un côté la normalisation des navigateurs avec la convergence vers un rendu standard des pages et, d'un autre, l'ajout de nouvelles fonctionnalités aux langages du web, HTML5, CSS3 et ES6 (ECMAScript 6, la dernière version de la spécification JavaScript) intégrées au fur et à mesure par les navigateurs (des sites, comme [caniuse.com](http://caniuse.com/) listent la compatibilité des navigateurs avec ces standards).

                    ### Le DOM

                    Les fonctionnalités principales de JavaScript dans le navigateur sont d'écouter les actions utilisateur et de modifier dynamiquement la page. Pour ce faire, il manipule une structure arborescente, le DOM (Document Object Model), représentant le contenu de la page.

                    Le DOM a pour noeud racine la balise \`<html>\` dotée de deux noeuds enfants \`<head>\` et \`<body>\`. Chacun de ces noeuds à également des noeuds imbriqués. Il est alors possible d'écouter les événements sur un noeud particulier et de modifier la page en conséquence. Ces noeuds sont accessibles via la variable globale \`document\`.

                    **Cliquer sur la page remplace tout le contenu du body par un message :**

                        var el = document.body;
                        el.addEventListener('click', function(){
                          el.innerHTML = 'You have just clicked on the HTML body';
                        });
                `
            },
            {
                title: "Les balises HTML",
                course: true,
                description: `
                    Le DOM peut être composé de nombreuses balises afin d'indiquer la sémantique des informations qu'il affiche (en voici une courte sélection) :

                    * \`<p>\` affiche un paragraphe de texte
                    * \`<ul>\` affiche une liste dont chaque élément est affiché dans un \`<li>\`
                    * \`<a>\` affiche un lien vers une autre page
                    * \`<img>\` affiche une image
                    * \`<table>\` affiche un tableau, dont chaque ligne est affichée dans un \`<tr>\` et chaque colonne dans un \`<td>\`
                    * \`<form>\` affiche un formulaire dont les champs de saisi sont affichés dans des \`<input>\` et validé par un \`<button type="submit">\`
                    * \`<h1>\`, \`<h2>\`, …, \`<h6>\` affichent des titres par ordre d'importance (h1 étant le plus important)

                    **Une page HTML5 et de nombreuses balises :**

                        <!doctype html>
                        <html>
                          <head></head>
                          <body>
                            <h1>Hey Jude</h1>
                            <p>"Hey Jude" is a song by the English rock band <a href="http://www.thebeatles.com">the Beatles</a></p>
                            <ul id="musicians">
                              <li>Paul McCartney – lead vocal, piano, bass </li>
                              <li>John Lennon – backing vocal, acoustic guitar</li>
                              <li>George Harrison – backing vocal, lead guitar </li>
                              <li>Ringo Starr – backing vocal, drums, tambourine</li>
                            </ul>

                            <img src="http://www.thebeatles.com/Hey_Jude.jpg"/>
                            <table>
                              <tr class="release">
                                <td>26 August 1968</td>
                                <td class="place">United States</td>
                              </tr>
                              <tr class="release">
                                <td>30 August 1968</td>
                                <td class="place">United Kingdom</td>
                              </tr>

                              <form>
                                <input name="email">
                                <button type="submit">
                              </form>

                          </body>
                        </html>

                    La majorité des balises peuvent s'imbriquer les unes dans les autres. Les balises disposent couramment d'attributs optionnels, la balise \`<a>\` indique le lien vers lequel elle redirige avec l'attribut \`href\`, la balise \`<img>\` indique l'image qu'elle affiche avec l'attribut \`src\`, sa longueur (\`width\`) et largeur (\`height\`), etc. Toutes les balises disposent des attributs \`id\` — l'identifiant unique de cette balise — et \`class\` — la famille de cette balise.

                    Chaque balise dispose d'un CSS par défaut qu'il est possible de modifier. Au delà de la mise en forme graphique, le véritable intérêt de l'usage des balises est de communiquer au navigateur l'importance et le rôle de chaque élément de la page. Ces informations sont utilisées notamment par les moteurs de recherche ([Google](https://google.com), [Yahoo](https://yahoo.com), [DuckDuckGo](https://duckduckgo.com/) et bien d'autres) pour référencer les sites internet. À la saisie de mots clés, ces moteurs listent par ordre d'importance les sites qu'ils estiment les plus pertinents en partie via leur sémantique.

                    Une [liste complète des balises](https://developer.mozilla.org/en/docs/Web/HTML/Element) et de leurs attributs est disponible pour plus de détails.
                `
            },
            {
                title: "Les sélecteurs CSS",
                course: true,
                description: `
                    Afin d'écouter les actions utilisateur ou de modifier dynamiquement la page, il est possible de cibler une ou plusieurs balises HTML. Ce ciblage est réalisé à l'aide de sélecteurs CSS, une syntaxe particulière utilisée par les feuilles de style CSS lors de la définition de la mise en page. Cette syntaxe permet de cibler :

                    * un type : \`'ul'\` sélectionne tous les \`<ul>\`
                    * une famille : \`'.release'\` sélectionne tous les éléments dotés de la classe release
                    * un identifiant : \`'#musicians'\` sélectionne l'élément avec l'identifiant musicians
                    * un attribut : \`'[name=email]'\` sélectionne les éléments avec attribut \`name\` égal email
                    * un enfant : \`'li img'\` sélectionne toutes les \`<img>\` dont un parent est un \`<li>\`
                    et \`'li > img'\` sélectionne les \`<img>\` dont le parent immédiat est un \`<li>\`
                    * un voisin : \`'h1 + p'\` sélectionne les \`<p>\` dont le voisin précédent est un \`<h1>\`
                    * une combinaison : \`'tr.release td'\` sélectionne les \`<td>\` enfants \`<tr>\` dotés de la classe release

                    Deux méthodes sont disponibles sur l'objet document pour effectuer une sélection, \`querySelector\` retourne le premier élément qui correspond et \`querySelectorAll\` retourne tous les éléments qui correspondent.

                    **Sélecteurs CSS basés sur la page HTML de l'exemple précédent :**

                    \`\`\`javascript
                    document.querySelector('#musicians');
                    // → <ul>..</ul>

                    document.querySelectorAll('li');
                    // → [<li>..</li>, <li>..</li>, <li>..</li>, <li>..</li>]

                    document.querySelectorAll('tr.release');
                    // → [<tr>..</tr>, <tr>..</tr>]
                    \`\`\`

                    Les sélecteurs CSS fonctionnent en cascade ; les éléments sont sélectionnés en descendant l'arborescence, des noeuds parents vers les noeuds enfants, en d'autres termes, il est impossible de remonter l'arbre du DOM à l'aide d'un sélecteur.

                    Dans une feuille de style CSS il n'existe pas d'alternative à cette logique, la mise en forme du contenu doit se faire en respectant ces règles. En JS, ceci dit, une fois un élément sélectionné, l'objet Element qui le représente permet d'effectuer des opérations avancées, notamment :

                    * accéder à ses attributs (méthode \`getAttribute\`)
                    * accéder à ses noeuds enfants (attribut \`children\`)
                    * accéder à son noeud parent (attribut \`parentNode\`)
                    * effectuer un sélecteur CSS à l'intérieur de ce noeud (méthodes \`querySelector\`)
                    * s'abonner aux actions utilisateur (méthode \`addEventListener\`)
                    * modifier ses classes CSS (attribut \`classList\`)
                    * modifier son contenu HTML (attribut \`innerHTML\` ou \`value\`)
                    * se supprimer du DOM (méthode \`remove\`)

                    **Manipulations du DOM basées sur la page HTML de l'exemple précédent :**

                    \`\`\`javascript
                    var img = document.querySelector('img');
                    img.getAttribute('src');
                    → 'http://www.thebeatles.com/Hey_Jude.jpg'

                    var input = document.querySelector('input[name=email]');
                    input.parentNode;
                    // → <form>..</form>

                    var table = document.querySelector('table');
                    var tds = table.querySelectorAll('td.place');
                    tds;
                    // → [<td>..</td>, <td>..</td>]

                    for (var i = 0; i < tds.length; i++) {
                      tds[i].remove();
                    }
                    \`\`\`

                    Une [liste complète des sélecteurs CSS](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors) est disponible pour plus de détails.
                `
            },
            {
                title: "Sélectionner un élément",
                description: "Ajouter la classe <code>cadmiumyellow</code> au premier <code>li</code> contenu dans <code>ul.board</code>.",
                excerpt: "La méthode <code>document.querySelector</code> peut être utilisée avec un sélecteur css pour récupérer un élément. Cet élément dispose d'un attribut <code>classList</code> qui permet de modifier ses classes css.<br><br><strong>Exemple</strong> : <pre><code>var div = document.querySelector('div');<br>div.classList.add('visible');</code></pre> ajouter la classe <code>visible</code> au premier <code>div</code> de la page.",
                solved: "var li = document.querySelector('.board li');<br>li.classList.add('cadmiumyellow');",
                dom: function() {
                    return board.bind(board, cartman);
                },
                warn: function() {
                    return "Le premier <code>li</code> doit avoir la classe <code>cadmiumyellow</code>";
                },
                answer: function() {
                    let li = document.querySelector('.board li');
                    return li.classList.contains('cadmiumyellow');
                }
            },
            {
                title: "Sélectionner plusieurs éléments",
                description: "Supprimer la classe <code>braken</code> des éléments qui la possède, et remplacer la par <code>candyapplered</code>.",
                excerpt: "La méthode <code>document.querySelectorAll</code> peut être utilisée pour récupérer une liste d'éléments. Ensuite, il est nécessaire d'effectuer une boucle <code>for</code> pour parcourir chacun des éléments.",
                solved: "var lis = document.querySelectorAll('.board li.braken');<br>for (var i = 0; i < lis.length; i++) {<br>  lis[i].className = 'candyapplered';<br>}",
                dom: function() {
                    return board.bind(board, cartman);
                },
                warn: function() {
                    return "Aucun <code>li</code> ne doit avoir la classe <code>braken</code> et dix <code>li</code> doivent avoir la classe <code>candyapplered</code>";
                },
                answer: function() {
                    let braken = document.querySelectorAll('.board li.braken');
                    let candyapplered = document.querySelectorAll('.board li.candyapplered');
                    return braken.length === 0 && candyapplered.length === 10;
                }
            },
            {
                title: "Modifier dynamiquement le DOM",
                course: true,
                description: `
                    Une fois un \`Element\` récupéré à l'aide d'un sélecteur CSS, il est possible de consulter son état et son contenu HTML, et de les modifier. Ainsi :
                    * l'attribut \`classList\` permet d'ajouter une classe avec \`add\`, de la supprimer avec \`remove\`, et de l'inverser avec \`toggle\` (ajout si absent, suppression sinon)
                    * l'attribut \`innerHTML\` est une chaîne de caractères représentant le contenu du noeud. Si elle est modifiée, elle sera transformée automatiquement en noeuds et ajoutée au DOM
                    * l'attribut \`value\` représente la valeur d'un champ de saisie

                    Le type de l'élément (\`ul\`, \`table\`, etc) et son identifiant ne sont pas modifiables.

                    **Manipulations du DOM d'un élément :**

                    \`\`\`javascript
                    document.querySelector('tr').classList.remove('release');

                    document.querySelector('p').innerHTML;
                    → '<p>Hey Jude is a song by the English rock band <a href="http://www.thebeatles.com">the Beatles</a></p>'

                    document.querySelector('p').innerHTML = '<p>Live performance footage <a href=".."><img src=".."></a></p>';
                    \`\`\`

                    Une documentation détaillée est disponible pour [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) et [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) pour plus de détails.
                `
            },
            {
                title: "Capturer les actions utilisateur",
                course: true,
                description: `
                    Lorsqu'un utilisateur clique sur un bouton ou un lien, lorsqu'il saisit quelque chose au clavier, lorsqu'il déplace la souris ou redimensionne la fenêtre, le navigateur émet des événements. Ces événements sont déclenchés sur la balise HTML ou l'action a eu lieue puis sur chaque élément parent de cette balise. Le terme « bubble » est souvent utilisé pour imager cette propagation qui remonte comme une bulle de savon.

                    L'objet \`Event\` qui représente cette action utilisateur peut être capturé directement sur un \`Element\` cible ou sur un de ces parents. En voici les principaux :
                    * souris : \`click\`, \`dblclick\`, \`mouseover\`, \`mouseleave\`, \`drag\`, \`dragend\`, notifient, entre autres, un clic, un double clic, le survol d'un élément, le fait que la souris quitte un élément ou le glisser déposer d'un élément
                    * clavier : \`keydown\`, \`keyup\`, notifient, entre autres, quelle touche a été appuyée ou relâchée (avec un code pour identifier la touche, voir la liste des codes pour plus de détails)
                    * souris ou clavier : \`focus\`, \`blur\`, \`change\`, \`submit\`, notifient, entre autres, la sélection d'un élément, sa désélection, la modification d'une valeur (très utilisés pour les champ de saisie) et la soumission d'un formulaire
                    * document : \`resize\`, \`scroll\`, notifient, entre autres, le redimensionnement de la fenêtre ou le défilement de la page vers le haut ou le bas

                    S'abonner à ces événements, à l'aide de la méthode addEventListener, permet d'effectuer un traitement lorsqu'ils se produisent. Il est également possible de stopper leur propagation, avec \`stopPropagation\`, afin de limiter l'effet de l'événement à ce noeud du DOM, ou d'annuler leur effet avec \`preventDefault\`.

                    **Abonnement aux événements du DOM :**

                        var input = document.querySelector('input');
                        input.addEventListener('change', function() {
                          console.log(input.value); // displays input content on value change
                        });

                        input.addEventListener('keydown', function(event) {
                          if (event.which === 107)
                            event.preventDefault(); // ignores '+' key
                        });

                        input.addEventListener('blur', function(event) {
                          // keep first 10 characters on input leave
                          if (input.value.length > 10)
                            input.value = input.value.substring(0, 10);
                        });

                    Une [liste complète des événements](https://developer.mozilla.org/en-US/docs/Web/Events) est disponible pour plus de détails.
                `
            },
            {
                title: "Écouter un événement",
                description: "Ajouter un écouteur d'événement sur le premier élément doté de la classe <code>cadmiumyellow</code>, et, au clic, remplacer cette classe par <code>bondiblue</code>.",
                excerpt: "La méthode <code>addEventListener</code> peut être utilisée sur un élément pour l'abonner aux événements utilisateur comme <code>click</code>.<br><br><strong>Exemple</strong> : <pre><code>var div = document.querySelector('div');<br>div.addEventListener('click', function() { <br>  console.log('clicked'); <br>});</code></pre> ajoute un écouteur sur le premier <code>div</code> de la page et affiche <code>'clicked'</code> dans la console à chaque clic sur celui-ci.",
                solved: "var li = document.querySelector('.board li.cadmiumyellow');<br>li.addEventListener('click', function() {<br>  li.className = 'bondiblue';<br>});",
                dom: function() {
                    return board.bind(board, cartman);
                },
                warn: function() {
                    return "Au clic sur le premier <code>li.cadmiumyellow</code> sa classe doit être remplacée par <code>bondiblue</code>";
                },
                answer: function() {
                    let li = document.querySelector('.board li.cadmiumyellow');
                    let basic = li.className === 'cadmiumyellow';
                    li.click();
                    return basic && li.className === 'bondiblue';
                }
            },
            {
                title: "Écouter un événement et boucle",
                description: "Ajouter un écouteur d'événement sur le premier élément doté de la classe <code>candyapplered</code>, et, au clic, remplacer la classe de tous les <code>li</code> de <code>ul.board</code> par <code>candyapplered</code>.",
                solved: "var li = document.querySelector('.board li.candyapplered');<br>li.addEventListener('click', function() {<br>  var lis = document.querySelectorAll('.board li');<br>  for (var i = 0; i < lis.length; i++)<br>    lis[i].className = 'candyapplered';<br>});",
                dom: function() {
                    return board.bind(board, cartman);
                },
                warn: function() {
                    return "Au clic sur le premier <code>li.candyapplered</code> les seize <code>li</code> doivent avoir la classe <code>candyapplered</code>";
                },
                answer: function() {
                    let li = document.querySelector('.board li.candyapplered');
                    li.click();
                    return 16 === document.querySelectorAll('.board li.candyapplered').length;
                }
            },
            {
                title: "Écouter plusieurs événements",
                description: "Ajouter un écouteur d'événement sur tous les éléments dotés de la classe <code>champagne</code>, et, au clic, remplacer cette classe par <code>braken</code>.",
                excerpt: "Le code déclaré dans la fonction d'un écouteur d'événement n'est excuté par le navigateur qu'on moment où l'événement se produit. Cela pose problème avec les boucles car elles modifient les variables <code>i</code> & co. et la valeur du code dans l'écouteur d'événement se retrouve être la dernière positionnée par la boucle.<br><br>Pour éviter cela, il est possible d'utiliser <code>this</code> dasn l'écouteur d'événement (<i>qui correspond à l'élément qui a été cliqué</i>) ou de déclarer toutes les variables de la boucles avec <code>let name</code> au lieu de <code>var name</code> (<i>leur portée est ainsi limitée à la boucle</i>) ou encore de créer une fonction qui encapsule le code déclenché par l'événement.<br><br>Ce problème tient à la portée des variables déclarées avec <code>var</code> qui est locale à la fonction qui l'encapsule, et non à la boucle qui l'encapsule.",
                solved: "var lis = document.querySelectorAll('.board li.champagne');<br>for (var i = 0; i < lis.length; i++) {<br>  var li = lis[i];<br>  li.addEventListener('click', function() {<br>    this.className = 'braken';<br>  });<br>}",
                dom: function() {
                    return board.bind(board, cartman);
                },
                warn: function() {
                    return "Au clic sur les <code>li.champagne</code>, l'un puis l'autre, ils doivent tous deux avoir la classe <code>braken</code>";
                },
                answer: function() {
                    let lis = document.querySelectorAll('.board li.champagne');
                    let braken = document.querySelectorAll('.board li.braken');
                    let basic = lis.length === 2 && braken.length === 2;

                    for (let i = 0; i < lis.length; i++)
                        lis[i].click();

                    braken = document.querySelectorAll('.board li.braken');
                    return basic && braken.length === 4;
                }
            },
            {
                title: "Écouter un événement",
                description: "Ajouter un écouteur d'événement sur le premier élément doté de la classe <code>braken</code> et le premier doté de la classe <code>champagne</code>, et, au clic sur l'un des deux, intervertir leurs classes.",
                excerpt: "Lorsque du code se retrouve dupliqué, il est possible de le rassembler au sein d'une fonction et d'appeller celle-ci plusieurs fois. Le mot clé <code>function</code> permet de déclarer un sous programme qui peut être appelé par du code externe (<i>ou s'appeller elle-même, en cas d'appels récursifs</i>). Comme une boucle conditionnelle, une fonction est composée d'une liste d'opérations (<i>délimitées entre accolades</i>), il est possible de lui fournir des arguments et elle peut retourner une valeur avec le mot clé <code>return</code>. Une fonction est variables comme les autres.<br><br><strong>Exemple</strong> : <pre><code>var double = function(value) { <br>  return value * 2; <br>}</code></pre> crée une fonction qui retourne le double d'un nombre. utilisée ainsi <code>double(12)</code> elle retourne <code>24</code>.",
                solved: "var lib = document.querySelector('.board li.braken');<br>var lic = document.querySelector('.board li.champagne');<br><br>var toggle = function(li) {<br>  if (li.className === 'champagne') {<br>    li.className = 'braken';<br>  } else {<br>    li.className = 'champagne';<br>  }<br>}<br><br>lib.addEventListener('click', function() {<br>  toggle(lib);<br>  toggle(lic);<br>});<br><br>lic.addEventListener('click', function() {<br>  toggle(lib);<br>  toggle(lic);<br>});",
                dom: function() {
                    return board.bind(board, kenny);
                },
                warn: function() {
                    return "Au clic sur le premier <code>li.braken</code>, il doit avoir la classe <code>champagne</code> et le premier <code>li.champagne</code> doit avoir la classe <code>braken</code>. Au clic suivant, ces deux <code>li</code> retrouvent leurs classes de départ. Et ainsi de suite";
                },
                answer: function() {
                    let lib = document.querySelector('.board li.braken');
                    let lic = document.querySelector('.board li.champagne');

                    let basic = true
                    lib.click();
                    basic = basic && lib.className === 'champagne' && lic.className === 'braken';
                    lic.click();
                    basic = basic && lib.className === 'braken' && lic.className === 'champagne';
                    lic.click();
                    basic = basic && lib.className === 'champagne' && lic.className === 'braken';
                    if (basic) {
                        for (let i = 0; i < 20; i ++)
                            setTimeout(function() { lic.click(); }, 100 * i);
                    }
                    return basic;
                }
            },
            {
                title: "Mémoriser un état",
                description: "Ajouter un écouteur d'événement sur le premier élément doté de la classe <code>champagne</code>, et, après 3 clics répétés sur celui-ci, remplacer sa classe par <code>braken</code>.",
                excerpt: "Utiliser une variable d'état est souvent plus pratique que sauvegarder des données dans le DOM.",
                solved: "var li = document.querySelector('.board li.champagne');<br>var i = 0;<br>li.addEventListener('click', function() {<br>  i++;<br>  if (i > 2) {<br>    li.className = 'braken';<br>  }<br>});",
                dom: function() {
                    return board.bind(board, kenny);
                },
                warn: function() {
                    return "Au clic sur le premier <code>li.champagne</code>, rien ne se produit. Mais après trois clics répétés, ce <code>li</code> doit avoir la classe <code>braken</code>. Au quatrième clic, il doit conserver cette nouvelle classe";
                },
                answer: function() {
                    let li = document.querySelector('.board li.champagne');

                    let basic = true
                    li.click();
                    basic = basic && li.className === 'champagne';
                    li.click();
                    basic = basic && li.className === 'champagne';
                    li.click();
                    basic = basic && li.className === 'braken';
                    li.click();
                    basic = basic && li.className === 'braken';
                    return basic;
                }
            },
            {
                title: "Mémoriser un état",
                description: "Ajouter un écouteur d'événement sur tous les éléments dotés de la classe <code>braken</code>, et, après 3 clics répétés sur n'importe lequel d'entre eux, remplacer sa classe par <code>champagne</code>.",
                solved: "var handleClick = function(lis, count, i) {<br>  count[i] = 0;<br>  var li = lis[i];<br>  li.addEventListener('click', function() {<br>    count[i]++;<br>    if (count[i] > 2) {<br>      li.className = 'champagne';<br>    }<br>  });<br>}<br><br>var lis = document.querySelectorAll('.board li.braken');<br>var count = [];<br>for (var i = 0; i < lis.length; i++) {<br>  handleClick(lis, count, i);<br>}",
                dom: function() {
                    return board.bind(board, kenny);
                },
                warn: function() {
                    return "Au clic sur un <code>li.braken</code> rien ne se produit. Mais après trois clics répétés, ce <code>li</code> doit avoir la classe <code>braken</code>. Au quatrième clic, il doit conserver cette nouvelle classe";
                },
                answer: function() {
                    let lis = document.querySelectorAll('.board li.braken');

                    let basic = true;
                    basic = basic && lis[1].className === 'braken';
                    lis[1].click();
                    lis[1].click();
                    lis[1].click();
                    return lis[1].className === 'champagne';
                }
            },
            {
                title: "Ajout d'éléménts à la fin",
                description: "Ajouter 4 <code>li</code> à la suite des <code>li</code> contenus par <code>ul.board</code> avec les deux du milieu dotés de la classe <code>darkgreen</code>.",
                excerpt: "L'attribut <code>innerHTML</code> des éléments du DOM permet de modifier leur contenu.<br><br><strong>Exemple</strong> : <pre><code>var div = document.querySelector('div');<br>div.innerHTML = '&lt;ul&gt;&lt;li&gt;paul&lt;/li&gt;&lt;li&gt;john&lt;/li&gt;&lt;/ul&gt;';</code></pre> ajoute un <code>ul</code> avec deux <code>li</code> au premier <code>div</code> de la page.",
                solved: "var ul = document.querySelector('.board');<br>ul.innerHTML += '&lt;li&gt;&lt;/li&gt;&lt;li class=\"darkgreen\"&gt;&lt;/li&gt;&lt;li class=\"darkgreen\"&gt;&lt;/li&gt;&lt;li&gt;&lt;/li&gt;';",
                dom: function() {
                    return board.bind(board, kyle.slice(0, 12));
                },
                warn: function() {
                    return "Quatre <code>li</code> doivent être ajoutés à la suite de ceux déjà présents dans <code>ul.board</code>";
                },
                answer: function() {
                    let basic = true;
                    let lis = document.querySelectorAll('.board li');
                    basic = basic && 16 === lis.length;
                    kyle.forEach(function(value, i) {
                        if (i === 12 || i === 15)
                            basic = basic && lis[i].className === '';
                        if (i === 13 || i === 14)
                            basic = basic && lis[i].classList.contains('darkgreen')
                    });
                    return basic;
                }
            },
            {
                title: "Ajout d'éléménts au milieu",
                description: "Ajouter 4 <code>li</code> après le huitième <code>li</code> de <code>ul.board</code> tous dotés de la classe <code>safetyorange</code>.",
                excerpt: "La méthode <code>insertAdjacentHTML</code>, plus rarement utilisée, permet d'insérer du texte à une position donné dans un élément.",
                solved: "var li = document.querySelector('.board li:nth-child(8)');<br>li.insertAdjacentHTML('afterend', '&lt;li class=\"safetyorange\"&gt;&lt;/li&gt;&lt;li class=\"safetyorange\"&gt;&lt;/li&gt;&lt;li class=\"safetyorange\"&gt;&lt;/li&gt;&lt;li class=\"safetyorange\"&gt;&lt;/li&gt;');",
                dom: function() {
                    return board.bind(board, kyle.slice(0, 8).concat(kyle.slice(12, 16)));
                },
                warn: function() {
                    return "Quatre <code>li</code> doivent être ajoutés après le huitième <code>li</code> de <code>ul.board</code>";
                },
                answer: function() {
                    let basic = true;
                    let lis = document.querySelectorAll('.board li');
                    basic = basic && 16 === lis.length;
                    kyle.forEach(function(value, i) {
                        if (i >= 8 && i <= 11)
                            basic = basic && lis[i].classList.contains('safetyorange')
                    });
                    return basic;
                }
            },
            {
                title: "Inverser deux éléménts",
                description: "Mémoriser lorsqu'un <code>li</code> de <code>ul.board</code> est cliqué, et, lorsqu'un second l'est à son tour, intervertir les classes de ces élements.",
                solved: "var memo;<br>var lis = document.querySelectorAll('.board li');<br><br>for (let i = 0; i < lis.length; i++) {<br>  let li = lis[i];<br>  li.addEventListener('click', function() {<br>    if (!memo) {<br>      memo = li;<br>    } else {<br>      var className = memo.className;<br>      memo.className = li.className;<br>      li.className = className;<br>      memo = undefined;<br>    }<br>  });<br>}",
                dom: function() {
                    return board.bind(board, kyle);
                },
                warn: function() {
                    return "Au clic sur le premier <code>li</code> et le second, leurs classes doivent être interverties. Puis, au clic du second et du troisième <code>li</code>, leurs classes doivent être interverties également";
                },
                answer: function() {
                    let basic = true;
                    let lis = document.querySelectorAll('.board li');
                    lis[0].click();
                    lis[1].click();
                    lis[1].click();
                    lis[2].click();
                    kyle.forEach(function(value, i) {
                        if (i === 0 || i === 1)
                            basic = basic && lis[i].classList.contains('islamicgreen');
                        if (i === 2 || i === 3)
                            basic = basic && lis[i].classList.contains('kellygreen');
                    });
                    return basic;
                }
            },
            {
                title: "Manipuler les attributs data-*",
                description: "À chaque clic sur un <code>li</code> de <code>ul.board</code>, ajouter un attribut <code>data-value</code> sur cet élément avec le nombre d'éléments sélectionnés jusque là.<br><br>Un élément ne peut être sélectionné deux fois.",
                solved: "var value = 0;<br>var lis = document.querySelectorAll('.board li');<br>for (var i = 0; i < lis.length; i++) {<br>  var li = lis[i];<br>  li.addEventListener('click', function() {<br>    if (!this.dataset.value) {<br>      this.dataset.value = value++;<br>    }<br>  });<br>}",
                dom: function() {
                    return board.bind(board, kyle);
                },
                warn: function() {
                    return "Au clic sur le premier <code>li</code> il doit avoir un attribut <code>data-value</code> égal à zéro. Au clic sur un autre <code>li</code>, il doit avoir un attribut <code>data-value</code> égal à un. Et ainsi de suite. Au clic sur un élément ayant déjà un <code>data-value</code> celui-ci ne change pas";
                },
                answer: function() {
                    let lis = document.querySelectorAll('.board li');
                    lis[2].click();
                    lis[4].click();
                    lis[6].click();
                    lis[4].click();

                    return lis[2].dataset.value === "0" &&
                        lis[4].dataset.value === "1" &&
                        lis[6].dataset.value === "2";
                }
            },
            {
                title: "Les variables globales du navigateur",
                course: true,
                description: `
                    Avant d'exécuter les scripts JS d'une page HTML, le navigateur déclare des variables globales, les rendant ainsi accessibles à tous les scripts de la page :

                    * \`window\` liste les propriétés de la fenêtre du navigateur, comme sa largeur, sa longueur etc. Par convention, toutes les variables globales sont stockées dans \`window\`, il est possible d'y accéder ainsi \`window.document\` ou directement document
                    * \`document\` est le point d'entrée pour accéder au contenu de la page HTML (le DOM), de le modifier et de s'abonner à ses événements (clic utilisateur, saisie de formulaire, etc)
                    * \`console\`, la console de débogage du navigateur, il est ainsi possible d'écrire des trace lors de l'exécution d'un programme pour analyser d'où provient un problème
                    * \`Math\`, des fonctions mathématiques avancées, comme sinus, cosinus, etc
                    * \`Date\`, des fonctions calendaires de gestion du temps et de la date
                    * \`Boolean\`, \`Number\`, \`String\`, \`Object\`, \`Array\` et \`Function\` les types de variables
                    * \`RegExp\`, des fonctions pour manipuler des expressions régulières
                    * \`XMLHttpRequest\`, nommé également Ajax, des fonctions pour requêter un serveur

                    **Variables globales du navigateur :**

                        Math.sqrt(9);
                        → 3

                        new Date().getHours();
                        → 10

                        console.log('Hey Jude');
                        → 'Hey Jude'
                `
            },
            {
                title: "Les outils de développement du navigateur",
                course: true,
                description: `
                    Chaque navigateur dispose d'outils dédiés aux développeurs permettant d'analyser le fonctionnement du site affiché. Bien qu'ils diffèrent pour chaque navigateur, les classiques du genre sont :

                    * « Elements » donne accès au contenu de la page HTML et permet de sélectionner visuellement des noeuds, de les modifier ou de modifier leur CSS, voire, de les supprimer
                    * « Network » liste tous les appels réseaux effectués par la page HTML et ses différentes ressources. Le type de chaque ressource est indiqué (image, script, etc), son poids, le temps observé pour la télécharger ou le code d'erreur si sa récupération a échoué.
                    * « Sources » donne accès au contenu des scripts JS, permet de les modifier ou d'y ajouter des points d'arrêt afin de les déboguer. Ainsi, au rechargement de la page, ou dès qu'une action se produit, si la ligne où est posé le point d'arrêt est exécutée par le navigateur, celui-ci se met en pause et bascule dans un mode pas à pas. Il est alors possible d'exécuter le script ligne après ligne, d'entrer dans les méthodes et de consulter la valeur des variables.
                    * « Console » permet d'exécuter du JS sur la page actuelle à des fins de test, par exemple.
                    * « Profile » permet d'analyser la performance de la page et les étapes qui lui sont les plus coûteuses lors de l'affichage de ces différentes balises.
                    * « Resources » donne accès aux mécanismes de stockage du navigateur, cookies et local storage, notamment. Ces mécanismes permettent de conserver des informations en mémoire lors de la navigation d'un utilisateur, lorsqu'il se connecte, par exemple, afin de ne pas lui demander son mot de passe à chaque fois qu'il recharge la page. De manière générale, le cache navigateur permet d'économiser le rechargement d'informations du serveur que le navigateur sait valide pour une durée.
                `
            }
        ]
    }, {
        title: "Dates",
        description: "Les dates sont des types natifs comme les nombres ou les chaines de caractères. Chaque date représente un instant du calendrier, précis à la miliseconde près. Les langages de programmation ne facilitent pas forcément la comparaison de dates, leur formatage ou la gestion de différents fuseaux horaires.<br><br>Ce chapitre présente la manipulation de dates avec la librairie moment — qui en facilite grandement l'usage.",
        color: "yellow",
        steps: [
            {
                title: "Formatter des dates",
                description: "Mettre en forme les dates saisies dans <code>.from input</code> et <code>.to input</code> de façon a ce qu'elles s'affichent dans <code>.from .formatted</code> et <code>.to .formatted</code> sous le format « JANV. 10 » (<i>premières initiales du mois, suivies du jour, avec la locale française</i>).",
                excerpt: "La librairie <a target=\"_blank\" href=\"http://momentjs.com/\">moment</a> permet de manipuler facilement des dates, et, notamment, de les mettre en forme en fonction de la locale.",
                solved: "/* à ajouter avant le script principal<br>&lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js\"&gt;&lt;/script&gt;<br>&lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/locale/fr.js\"&gt;&lt;/script&gt;<br>*/<br>document.querySelector('.booking .from input').addEventListener('change', function() {<br>  var date = moment(this.value);<br>  document.querySelector('.from .formatted').innerHTML = date.format('MMM').toUpperCase() + ' ' + date.format('D');<br>});<br><br>document.querySelector('.booking .to input').addEventListener('change', function() {<br>  var date = moment(this.value);<br>  document.querySelector('.to .formatted').innerHTML = date.format('MMM').toUpperCase() + ' ' + date.format('D');<br>});",
                dom: function() {
                    return booking.bind(booking);
                },
                answer: function() {
                    var from = {
                        input: document.querySelector('.from input'),
                        formatted: document.querySelector('.from .formatted')
                    }
                    var to = {
                        input: document.querySelector('.to input'),
                        formatted: document.querySelector('.to .formatted')
                    }

                    from.input.value = '2017-01-24';
                    change(from.input);

                    to.input.value = '2017-01-26';
                    change(to.input);

                    if (elContains(from.formatted, 'JANV. 24') !== true)
                        this.warn = this.warn || "La date affichée dans <code>.from .formatted</code> doit être égale à JANV. 24, lorsque la date saisie est le 24 janvier";
                    if (elContains(to.formatted, 'JANV. 26') !== true)
                        this.warn = this.warn || "La date affichée dans <code>.to .formatted</code> doit être égale à JANV. 26, lorsque la date saisie est le 26 janvier";
                    return !this.warn;
                }
            },
            {
                title: "Limiter les dates",
                description: "Si la date de retour saisie est antérieure ou égale à la date de l'aller, elle est par défaut 1 jour après l'aller (<i>l'aller est le 12 janvier, la date de retour doit être le 13 janvier au plus tôt</i>).",
                solved: "var from = {<br>  value: null,<br>  input: document.querySelector('.from input'),<br>  formatted: document.querySelector('.from .formatted')<br>}<br>var to = {<br>  value: null,<br>  input: document.querySelector('.to input'),<br>  formatted: document.querySelector('.to .formatted')<br>}<br><br>from.input.addEventListener('change', function() {<br>  from.value = moment(from.input.value);<br>  from.formatted.innerHTML = from.value.format('MMM').toUpperCase() + ' ' + from.value.format('D');<br>});<br><br>to.input.addEventListener('change', function() {<br>  to.value = moment(to.input.value);<br>  if (to.value.isSameOrBefore(from.value)) {<br>    to.value = from.value.clone().add(1, 'day');<br>    to.input.value = to.value.format('YYYY-MM-DD');<br>  }<br>  to.formatted.innerHTML = to.value.format('MMM').toUpperCase() + ' ' + to.value.format('D');<br>});",
                dom: function() {
                    return booking.bind(booking);
                },
                answer: function() {
                    var from = {
                        input: document.querySelector('.from input'),
                        formatted: document.querySelector('.from .formatted')
                    }
                    var to = {
                        input: document.querySelector('.to input'),
                        formatted: document.querySelector('.to .formatted')
                    }

                    from.input.value = '2017-01-24';
                    change(from.input);

                    to.input.value = '2017-01-24';
                    change(to.input);

                    if (elContains(from.formatted, 'JANV. 24') !== true)
                        this.warn = this.warn || "La date affichée dans <code>.from .formatted</code> doit être égale à JANV. 24, lorsque la date saisie est le 24 janvier";
                    if (elContains(to.formatted, 'JANV. 25') !== true)
                        this.warn = this.warn || "La date affichée dans <code>.to .formatted</code> doit être égale à JANV. 25, lorsque la date de l'aller est le 24 janvier et que la date saisie lui est antérieure";
                    if (to.input.value !== '2017-01-25')
                        this.warn = this.warn || "La date de l'input <code>.to</code> doit être égale au 25 janvier, lorsque la date de l'aller est le 24 janvier et que la date saisie lui est antérieure";
                    return !this.warn;
                }
            },
            {
                title: "Compter le nombre de jours de voyage",
                description: "Pour chaque jour de voyage, compter 40€, et afficher le total dans <code>.price</code>.",
                solved: "var from = {<br>  value: null,<br>  input: document.querySelector('.from input'),<br>  formatted: document.querySelector('.from .formatted')<br>}<br>var to = {<br>  value: null,<br>  input: document.querySelector('.to input'),<br>  formatted: document.querySelector('.to .formatted')<br>}<br><br>var total = function() {<br>  if (!from.value || !to.value)<br>    return;<br><br>  var days = to.value.diff(from.value, 'days') + 1;<br>  document.querySelector('.price').innerHTML = 40 * days + '€';<br>}<br><br>from.input.addEventListener('change', function() {<br>  from.value = moment(from.input.value);<br>  from.formatted.innerHTML = from.value.format('MMM').toUpperCase() + ' ' + from.value.format('D');<br>});<br><br>to.input.addEventListener('change', function() {<br>  to.value = moment(to.input.value);<br>  if (to.value.isSameOrBefore(from.value)) {<br>    to.value = from.value.clone().add(1, 'day');<br>    to.input.value = to.value.format('YYYY-MM-DD');<br>  }<br>  to.formatted.innerHTML = to.value.format('MMM').toUpperCase() + ' ' + to.value.format('D');<br>  total();<br>});",
                dom: function() {
                    return booking.bind(booking);
                },
                answer: function() {
                    var from = {
                        input: document.querySelector('.from input'),
                        formatted: document.querySelector('.from .formatted')
                    }
                    var to = {
                        input: document.querySelector('.to input'),
                        formatted: document.querySelector('.to .formatted')
                    }

                    from.input.value = '2017-01-24';
                    change(from.input);

                    to.input.value = '2017-01-27';
                    change(to.input);

                    if (elContains(document.querySelector('.price'), '160€') !== true)
                        this.warn = "Le prix doit être de 160€ pour un voyage du 24 au 27 janvier";
                    return !this.warn;
                }
            },
            {
                title: "Multiplier par le nombre de voyageurs",
                description: "Pour chaque voyageur, multiplier le prix (<i>un voyage à 80€ coûtera 240€ pour 3 voyageurs</i>).",
                solved: "var from = {<br>  value: null,<br>  input: document.querySelector('.from input'),<br>  formatted: document.querySelector('.from .formatted')<br>}<br>var to = {<br>  value: null,<br>  input: document.querySelector('.to input'),<br>  formatted: document.querySelector('.to .formatted')<br>}<br>var passengers = 1;<br><br>var total = function() {<br>  if (!from.value || !to.value)<br>    return;<br><br>  var days = to.value.diff(from.value, 'days') + 1;<br>  document.querySelector('.price').innerHTML = 40 * days * passengers + '€';<br>}<br><br>from.input.addEventListener('change', function() {<br>  from.value = moment(from.input.value);<br>  from.formatted.innerHTML = from.value.format('MMM').toUpperCase() + ' ' + from.value.format('D');<br>});<br><br>to.input.addEventListener('change', function() {<br>  to.value = moment(to.input.value);<br>  if (to.value.isSameOrBefore(from.value)) {<br>    to.value = from.value.clone().add(1, 'day');<br>    to.input.value = to.value.format('YYYY-MM-DD');<br>  }<br>  to.formatted.innerHTML = to.value.format('MMM').toUpperCase() + ' ' + to.value.format('D');<br>  total();<br>});<br><br>document.querySelector('select').addEventListener('change', function() {<br>  passengers = this.value;<br>  total();<br>});",
                dom: function() {
                    return booking.bind(booking);
                },
                answer: function() {
                    var from = {
                        input: document.querySelector('.from input'),
                        formatted: document.querySelector('.from .formatted')
                    }
                    var to = {
                        input: document.querySelector('.to input'),
                        formatted: document.querySelector('.to .formatted')
                    }

                    from.input.value = '2017-01-24';
                    change(from.input);

                    to.input.value = '2017-01-27';
                    change(to.input);

                    var select = document.querySelector('select');
                    select.value = 3;
                    change(select);

                    if (elContains(document.querySelector('.price'), '480€') !== true)
                        this.warn = "Le prix doit être de 160€ pour un voyage du 24 au 27 janvier pour 3 voyageurs";
                    return !this.warn;
                }
            },
            {
                title: "Décompter les weekends",
                description: "Les samedis et dimanches ne sont pas facturés (<i>vendredi, samedi, dimanche coûtera 40€ — 1 jour —, vendredi, samedi, dimanche, lundi coûtera 80€ — 2 jours —, du lundi au lundi deux semaines après, coûtera 840€ — 11 jours</i>).",
                solved: "var from = {<br>  value: null,<br>  input: document.querySelector('.from input'),<br>  formatted: document.querySelector('.from .formatted')<br>}<br>var to = {<br>  value: null,<br>  input: document.querySelector('.to input'),<br>  formatted: document.querySelector('.to .formatted')<br>}<br>var passengers = 1;<br><br>var total = function() {<br>  if (!from.value || !to.value)<br>    return;<br><br>  var days = 0;<br>  var clone = from.value.clone();<br>  while (clone.isSameOrBefore(to.value)) {<br>    if (clone.day() !== 6 && clone.day() !== 0)<br>      days++;<br>    clone.add(1, 'days');<br>  }<br><br>  document.querySelector('.price').innerHTML = 40 * days * passengers + '€';<br>}<br><br>from.input.addEventListener('change', function() {<br>  from.value = moment(from.input.value);<br>  from.formatted.innerHTML = from.value.format('MMM').toUpperCase() + ' ' + from.value.format('D');<br>});<br><br>to.input.addEventListener('change', function() {<br>  to.value = moment(to.input.value);<br>  if (to.value.isSameOrBefore(from.value)) {<br>    to.value = from.value.clone().add(1, 'day');<br>    to.input.value = to.value.format('YYYY-MM-DD');<br>  }<br>  to.formatted.innerHTML = to.value.format('MMM').toUpperCase() + ' ' + to.value.format('D');<br>  total();<br>});<br><br>document.querySelector('select').addEventListener('change', function() {<br>  passengers = this.value;<br>  total();<br>});",
                dom: function() {
                    return booking.bind(booking);
                },
                answer: function() {
                    var from = {
                        input: document.querySelector('.from input'),
                        formatted: document.querySelector('.from .formatted')
                    }
                    var to = {
                        input: document.querySelector('.to input'),
                        formatted: document.querySelector('.to .formatted')
                    }

                    from.input.value = '2017-01-27';
                    change(from.input);

                    to.input.value = '2017-01-30';
                    change(to.input);

                    var select = document.querySelector('select');
                    select.value = 2;
                    change(select);

                    var basic = true;
                    basic = basic && elContains(document.querySelector('.price'), '160€');
                    if (elContains(document.querySelector('.price'), '160€') !== true)
                        this.warn = this.warn || "Le prix doit être de 160€ pour un voyage de 4 jours incluant samedi et dimanche pour 2 voyageurs";

                    from.input.value = '2017-01-13';
                    change(from.input);

                    to.input.value = '2017-01-30';
                    change(to.input);

                    if (elContains(document.querySelector('.price'), '960€') !== true)
                        this.warn = this.warn || "Le prix doit être de 960€ pour un voyage de 18 jours incluant 3 samedis et dimanches pour 2 voyageurs";
                    return !this.warn;
                }
            }
        ]
    }, {
        title: "Fonctions",
        description: "Une fonction est un sous programme qui peut être appelé par du code externe, l'utilisation de fonctions permet de structurer un programme..<br><br>Ce chapitre présente la déclaration et l'usage des fonctions, de leurs paramètres et valeur de retour.",
        color: "yellow",
        steps: [
            {
                course: true,
                description: `
                    Une fonction est un sous programme qui peut être appelé par du code externe (ou interne, en cas d'appels récursifs). Comme une boucle conditionnelle, une fonction est composée d'une liste d'opérations (délimitées entre accolades). Le mot clé \`function\` permet de déclarer une fonction, il est possible de lui fournir des arguments et elle peut retourner une valeur avec le mot clé \`return\`.

                    **Une fonction avec 1 argument qui retourne true si son argument est pair :**

                        var isOdd = function(value) {
                          return value % 2 === 0;
                        }

                        isOdd(17);
                        → false

                        isOdd(12);
                        → true

                    L'utilisation de fonctions permet de structurer un programme. Au lieu de lister toutes les opérations d'un programme les unes à la suite des autres, il est préférable de regrouper les opérations en plusieurs fonctions correspondant à des parties clairement identifiées du programme.

                    **Imbrication de fonctions :**

                        var squareOdd = function(number) {
                          var odd = isOdd(number);
                          if (odd)
                            return number * number;
                          else
                            return -1;
                        }

                        squareOdd(17);
                        → -1

                        squareOdd(12);
                        → 144
                `
            },
            {
                course: true,
                description: `
                    Déclarer une fonction (avec le mot clé var) ne l'exécute pas, pour l'exécuter il est nécessaire de l'appeler à l'aide de parenthèses (via lesquelles des paramètres peuvent être transmis). Si la fonction retourne un résultat, il est possible de récupérer ce dernier dans une variable.

                    Les fonctions sont des citoyens de première classe, c'est à dire qu'elles sont manipulées comme toute autre variable (ce qui n'est pas le cas de tous les langages). Il est ainsi possible que le résultat ou les paramètres d'une fonction soient une fonction.

                    **Fonction dont un des arguments est une fonction :**

                        var squareConditional = function(number, condition) {
                          if (condition(number))
                            return number * number;
                          else
                            return number;
                        }

                        var isEven = function(value) {
                          return value % 2 === 1;
                        }

                        squareConditional(17, isEven);
                        → 289

                    Il est ainsi possible d'écrire des fonctions s'appelant elles-mêmes, des fonctions récursives.

                    **Fonction récursive :**

                        var power = function(number, exponent) {
                          if (exponent === 0)
                            return 1;
                          else
                            return number + power(number, exponent - 1);
                        }

                        power(3, 2);
                        → 9
                `
            },
            {
                title: "Identifier un nombre positif",
                description: "Créer une fonction nommée <code>positive</code> qui prend un paramètre et retourne <code>true</code> si celui-ci est supérieur ou égal à zéro, <code>false</code> sinon.",
                excerpt: "Une fonction est comme une usine, elle transforme quelque chose (<i>ses paramètres d'entrée</i>) en autre chose (<i>son paramètre de sortie</i>). L'utilisation de fonctions permet de structurer un programme. Au lieu de lister toutes les opérations d'un programme les unes à la suite des autres, il est préférable de regrouper les opérations en plusieurs fonctions correspondant à des parties clairement identifiées du programme.<br><br><strong>Exemple </strong>: <pre><code>var double = function(value) {<br>  return value * 2; <br>}</code></pre> déclare une variable <code>value</code> qui sera initialisée à une valeur à chaque appel de la fonction. Cette variable est locale à la fonction, elle n'existe pas à l'extérieur du code de celle-ci. Le mot clé <code>return</code> interrompt immédiatement la fonction et retourne le résultat au code appelant. <pre><code>var x = double(12);<br>x; /* 24 */<br>var y = double(7);<br>y; /* 14 */<br>var weird = double('hello');<br>weird; /* NaN */<br>value; /* undefined */<br></code></pre>",
                solved: "var positive = function(value) {<br>  return value >= 0;<br>};",
                answer: function() {
                    let x = random();
                    let y = random();
                    if (positive(0) !== true)
                        this.warn = this.warn || "La fonction <code>positive(0)</code> doit retourner <code>true</code>";

                    if (positive(x) !== true )
                        this.warn = this.warn || `La fonction <code>positive(${x})</code> doit retourner <code>true</code>, le paramètre est positif`;

                    if (positive(-y) !== false )
                        this.warn = this.warn || `La fonction <code>positive(${-y})</code> doit retourner <code>false</code>, le paramètre est négatif`;

                    return !this.warn;
                }
            },
            {
                title: "Additionner deux nombres",
                description: "Créer une fonction <code>add</code> qui prend deux paramètres et retourne leur somme. Cette fonction retourne <code>0</code> si un de ces paramètres n'est pas un nombre.",
                excerpt: "Une fonction peut prendre plusieurs paramètres en entrée, séparés par des virgules <code>function(a, b, c) { ... }</code>. L'opérateur <code>typeof</code> permet quant à lui de vérfier le type d'une variable.<br><br><strong>Exemple </strong>: <pre><code>typeof 12 === 'number'; /* true */<br>typeof 'hello' === 'string'; /* true */<br>typeof ['1', '2', '3'] === 'string'; /* false */</code></pre>",
                solved: "var add = function(a, b) {<br>  if (typeof a !== 'number' || typeof b !== 'number') {<br>    return 0;<br>  }<br>  return a + b;<br>};",
                answer: function() {
                    let x = random();
                    let y = random();
                    if (add(x, y) !== x + y)
                        this.warn = this.warn || `La fonction <code>add(${x}, ${y})</code> doit retourner ${x+y}`;

                    if (add('invalid', y) !== 0)
                        this.warn = this.warn || `La fonction <code>add('invalid', ${y})</code> doit retourner <code>0</code>, le premier paramètre est invalide`;

                    if (add(x, 'invalid') !== 0)
                        this.warn = this.warn || `La fonction <code>add(${x}, 'invalid')</code> doit retourner <code>0</code>, le second paramètre est invalide`;

                    return !this.warn;
                }
            },
            {
                title: "Calculer l'hypoténuse d'un triangle",
                description: "Créer une fonction <code>hypotenuse</code> qui prend deux paramètres, représentant la dimension de deux côtés d'un triangle, et retourne l'hypoténuse de celui-ci.",
                excerpt: "Une fonction peut elle-même appeler d'autres fonctions.",
                solved: "var hypotenuse = function(a, b) {<br>  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));<br>};",
                answer: function() {
                    if (hypotenuse(3, 4) !== 5)
                        this.warn = this.warn || "La fonction <code>hypotenuse(3, 4)</code> doit retourner <code>5</code>";

                    if (hypotenuse(5, 12) !== 13)
                        this.warn = this.warn || "La fonction <code>hypotenuse(5, 12)</code> doit retourner <code>13</code>";
                    return !this.warn;
                }
            },
            {
                title: "Trouver une valeur dans un tableau",
                description: "Créer une fonction <code>includes</code> qui prend deux paramètres, un tableau et une valeur. Si la valeur est une des valeurs du tableau, la fonction retourne <code>true</code>, sinon elle retrourne <code>false</code>.",
                solved: "var includes = function(array, value) {<br>  for (var i = 0; i < array.length; i++) {<br>    if (array[i] === value) {<br>      return true;<br>    }<br>  }<br>  return false;<br>};",
                answer: function() {
                    if (includes(['banana', 'kiwi', 'apple'], 'kiwi') !== true)
                        this.warn = this.warn || "La fonction <code>includes(['banana', 'kiwi', 'apple'], 'kiwi')</code> doit retourner <code>true</code>";

                    if (includes(['banana', 'kiwi', 'apple'], 'orange') !== false)
                        this.warn = this.warn || "La fonction <code>includes(['banana', 'kiwi', 'apple'], 'orange')</code> doit retourner <code>false</code>";

                    if (includes([5, 8, 13], 5) !== true)
                        this.warn = this.warn || "La fonction <code>includes([5, 8, 13], 5)</code> doit retourner <code>true</code>";

                    if (includes([5, 8, 13], 3) !== false)
                        this.warn = this.warn || "La fonction <code>includes([5, 8, 13], 3)</code> doit retourner <code>false</code>";

                    return !this.warn;
                }
            },
            {
                title: "Calculer le maximum d'une série de nombres",
                description: "Créer une fonction <code>max</code> qui prend un nombre quelconque de paramètres et retourne le nombre le plus élevé parmi eux. Si aucun paramètre n'est indiqué, elle retourne <code>-1</code>.",
                excerpt: "Les fonctions disposent toutes d'un paramètre spécial <code>arguments</code> qui est un tableau listant tous les paramètres reçus par la fonction. Il est ainsi possible de créer des fonctions dotées d'un nombre indéterminé de paramètres (<i>et sans avoir besoin de nommer chacun d'entre eux</i>).<br><br><strong>Exemple </strong>: <pre><code>var sum = function() { <br>  var total = 0;<br>  for (var i = 0; i < arguments.length; i++) {<br>    total += arguments[i];<br>  }<br>  return total;<br>}</code></pre> crée une méthode calculant la somme d'un nombre quelconque de paramètres, par exemple <code>sum(5, 8, 13)</code> retourne <code>26</code>.",
                solved: "var max = function() {<br>  if (arguments.length === 0)<br>    return -1;<br><br>  var result = arguments[0];<br>  for (var i = 1; i < arguments.length; i++) {<br>    if (arguments[i] > result) {<br>      result = arguments[i];<br>    }<br>  }<br>  return result;<br>};",
                answer: function() {
                    if (max(5, 12) !== 12)
                        this.warn = this.warn || "La fonction <code>max(5, 12)</code> doit retourner <code>12</code>";

                    if (max(3, 5, 13, 2) !== 13)
                        this.warn = this.warn || "La fonction <code>max(3, 5, 13, 2)</code> doit retourner <code>13</code>";

                    if (max() !== -1)
                        this.warn = this.warn || "La fonction <code>max()</code> doit retourner <code>-1</code>";

                    return !this.warn;
                }
            },
            {
                title: "Compter le nombre de « a » et « e »",
                description: "Créer une fonction <code>count</code> qui prend un paramètre et retourne un littéral indiquant le nombre de « a » et de « e » de cette chaine (<i>sous la forme <code>{a: 5, e: 7}</code></i>).",
                solved: "var text = 'Short ribs fatback pork chop turducken. Hamburger capicola turkey sausage tail leberkas ham andouille pork chop picanha pancetta landjaeger brisket. Ground round pork belly jowl pancetta frankfurter beef ribs ham cupim turkey tenderloin drumstick sausage shoulder. Pig cow short ribs tenderloin tongue pork belly.';<br>var count = function(text) {<br>  text = text.toLowerCase();<br>  var total = {a: 0, e: 0};<br>  for (var i = 0; i < text.length; i++) {<br>    var char = text.charAt(i);<br>    if (char === 'a')<br>      total.a++;<br>    else if (char === 'e')<br>      total.e++;<br>  };<br>  return total;<br>};",
                answer: function() {
                    if (equals({a: 0, e: 0}, count('')) !== true)
                        this.warn = this.warn || "La fonction <code>count('')</code> doit retourner <code>{a: 0, e: 0}</code>";

                    if (equals({a: 2, e: 1}, count('Short ribs fatback pork chop turducken.')) !== true)
                        this.warn = this.warn || "La fonction <code>count('Short ribs fatback pork chop turducken.')</code> doit retourner <code>{a: 2, e: 1}</code>";

                    if (equals({a: 7, e: 5}, count('Andouille pork chop picanha pancetta landjaeger brisket.')) !== true)
                        this.warn = this.warn || "La fonction <code>count('Andouille pork chop picanha pancetta landjaeger brisket.')</code> doit retourner <code>{a: 7, e: 5}</code>";

                    return !this.warn;
                }
            },
            {
                title: "Rechercher dans un arbre binaire",
                description: "Créer une fonction <code>search</code> qui prend deux paramètres, un arbre binaire et une valeur. Si la valeur est une des valeurs de l'arbre, la fonction retourne <code>true</code>, sinon elle retrourne <code>false</code>.",
                excerpt: "<pre><code>var tree = {<br>  value: 8, <br>  left: {value: 3, left: {value: 1}, right: {value: 6}}, <br>  right: {value: 11, right: {value: 14}}<br>};<br><br>//       8<br>//    3 ─┴─ 11<br>// 1 ─┴─ 6   └─ 14</code></pre>Un arbre binaire dispose d'une racine, <code>8</code> (<i>ici</i>), celle-ci est dotée d'une noeud gauche, <code>3</code> et droit, <code>10</code>, qui, eux-mêmes peuvent disposer d'un noeud gauche et droit, et ainsi de suite. Un arbre binaire est trié de telle sorte que la noeud gauche d'une valeur lui est inférieur, <code>3 > 8</code> et que son noeud droit lui est supérieur, <code>8 < 10</code>. Et ceci récursivement, chaque noeud gauche inférieur à sa racine, chaque noeud droit supérieur à sa racine. Cette structure permet d'effectuer des recherches très efficaces (<i>peu de comparaison</i>) au sein d'un ensemble de valeurs.<br><br>La fonction à réaliser est une fonction récursive (<i>elle peut s'appeler elle-même</i>). Elle vérifie si la racine est égale, supérieure ou inférieure à la valeur recherchée. En cas d'égalité, elle retourne <code>true</code>, en cas d'infériorité, elle s'appelle elle-même avec le noeud gauche, en cas de supériorité, avec le noeud droit. Arrivée en fin d'arbre (<i>sur une feuille — un noeud sans noeud enfant</i>), elle retourne <code>false</code> si sa valeur n'est pas celle recherchée.",
                solved: "var search = function(tree, value) {<br>  if (!tree)<br>    return false;<br>  else if (value === tree.value)<br>    return true;<br>  else if (value > tree.value)<br>    return search(tree.right, value);<br>  else<br>    return search(tree.left, value);<br>};",
                answer: function() {
                    let tree = {value: 8,
                        left: {value: 3, left: {value: 1}, right: {value: 6}},
                        right: {value: 11, left: {value:9, right: {value: 10}}, right: {value: 14}}
                    };

                    if (search(tree, 3) !== true)
                        this.warn = this.warn || "La fonction <code>search(tree, 3)</code> doit retourner <code>true</code>";
                    if (search(tree, 14) !== true)
                        this.warn = this.warn || "La fonction <code>search(tree, 14)</code> doit retourner <code>true</code>";
                    if (search(tree, 10) !== true)
                        this.warn = this.warn || "La fonction <code>search(tree, 10)</code> doit retourner <code>true</code>";
                    if (search(tree, 7) !== false)
                        this.warn = this.warn || "La fonction <code>search(tree, 7)</code> doit retourner <code>false</code>";
                    if (search(tree, 2) !== false)
                        this.warn = this.warn || "La fonction <code>search(tree, 2)</code> doit retourner <code>false</code>";
                    return !this.warn;
                }
            },
            {
                title: "La portée des variables",
                course: true,
                description: `
                    Les variables déclarées à l'intérieur d'une fonction ne sont pas accessibles à l'extérieur mais le contraire est vrai. La portée, ou scope, des variables est ainsi déterminée par la fonction qui la déclare, toutes les fonctions exécutée à l'intérieur de cette dernière peuvent y accéder, les autres n'y ont pas accès.

                    Déclarer une variable du même nom qu'une fonction appelante crée bien une nouvelle variable sans modifier l'autre.

                    **Portée des variables :**

                        var value = 10;
                        var by = 2;

                        var multiply = function(value) {
                          var result = value * by;
                          return result;
                        }

                        multiply(15);
                        → 30

                        value;
                        → 10

                        result;
                        → undefined

                    Dans cet exemple, la fonction \`multiply\` déclare la variable \`value\` (c'est un de ces paramètres) elle ignore donc la variable du même nom déclarée plus haut. Cependant, comme elle ne déclare pas de variable \`by\` elle peut manipuler celle qui est déclarée plus haut. La variable \`result\` qu'elle déclare n'est pas accessible à l'extérieur.
                `
            },
            {
                title: "Passage de paramètre par valeur et par référence",
                course: true,
                description: `
                    Fournir un entier ou une chaîne de caractère à une fonction ne permet pas de modifier ce dernier. En effet, les variables de types simples sont passés par valeur. Ceci dit, cela est possible avec les variables de types composites (objets et tableaux).

                    **Passage de paramètre par valeur et par référence :**

                        var multiply = function(value) {
                            value = value * 2;
                        };

                        var count = 10;
                        multiply(count);
                        count;
                        → 10


                        var multiply = function(obj) {
                            obj.value = obj.value * 2;
                        };

                        var count = {value: 10};
                        multiply(count);
                        count;
                        → {value: 20}
                `
            }
        ]
    }, {
        title: "Composant | Carrousel",
        description: "Un carrousel est une liste dont un seul élément est visible et dont la navigation de l'un à l'autre de ses éléments s'effectue à l'aide de flèches « précédente » et « suivante » situées de part et d'autre du contenu. Il est souvent utilisé pour afficher une image plein cadre, et naviguer parmi un catalogue de photos.<br><br>Ce chapitre présente la réalisation d'un carrousel pas à pas.",
        color: "violet",
        steps: [
            {
                title: "Naviguer au suivant",
                description: "Lors du clic sur l'élément doté de la classe <code>next</code>, masquer le premier élément du carrousel et révéler le second.",
                excerpt: "Les items du carrousel se situent dans la liste <code>.carousel > ul > li</code> et un seul d'entre eux à la classe <code>visible</code> (<i>ainsi, les autres sont masqués</i>). Retirer la classe <code>visible</code> d'un élément et l'ajouter à un autre, permet de masquer le premier et de révéler le second.<br><br><strong>Exemple </strong>: <pre><code>var next = document.querySelector('.next');<br>next.addEventListener('click', function() {<br>  var li = document.querySelector('.carousel > ul > li.visible');<br>  li.classList.remove('visible');<br>});</code></pre> déclare un écouteur d'événement sur la flêche de droite, et masque le premier élément du carrousel.",
                solved: "var lis = document.querySelectorAll('.carousel li');<br>var elNext = document.querySelector('.next');<br><br>elNext.addEventListener('click', function() {<br>  lis[0].classList.remove('visible');<br>  lis[1].classList.add('visible');<br>});",
                dom: function() {
                    return carousel.bind(carousel);
                },
                answer: function() {
                    var elPrev = document.querySelector('.prev');
                    var elNext = document.querySelector('.next');

                    var lis = document.querySelectorAll('.carousel > ul > li');

                    if (lis.length !== 5)
                        this.warn = this.warn || "Le <code>.carousel > ul</code> doit contenir 5 <code>li</code>";
                    if (elHasClass(lis[0], 'visible') !== true)
                        this.warn = this.warn || "Le premier <code>li</code> doit avoir la classe <code>visible</code>";
                    if (elHasClass(lis[1], 'visible') !== false)
                        this.warn = this.warn || "Le second <code>li</code> ne doit avoir la classe <code>visible</code>";

                    elNext.click();
                    if (elHasClass(lis[0], 'visible') !== false)
                        this.warn = this.warn || "Après un clic sur suivant, le premier <code>li</code> ne doit plus avoir la classe <code>visible</code>";
                    if (elHasClass(lis[1], 'visible') !== true)
                        this.warn = this.warn || "Après un clic sur suivant, le second <code>li</code> doit avoir la classe <code>visible</code>";

                    return !this.warn;
                }
            },
            {
                title: "Naviguer au suivant, sans dépasser le dernier",
                description: "S'assurer que cliquer sur la flêche de droite permet de passer d'un élément au suivant, mais qu'une fois arrivé au dernier, n'a plus d'effet.",
                solved: "var index = 0;<br>var lis = document.querySelectorAll('.carousel li');<br>var elNext = document.querySelector('.next');<br><br>elNext.addEventListener('click', function() {<br>  lis[index].classList.remove('visible');<br>  index++;<br>  if (index > 4)<br>    index = 4;<br><br>  lis[index].classList.add('visible');<br>});",
                dom: function() {
                    return carousel.bind(carousel);
                },
                answer: function() {
                    var elPrev = document.querySelector('.prev');
                    var elNext = document.querySelector('.next');

                    var lis = document.querySelectorAll('.carousel > ul > li');

                    if (lis.length !== 5)
                        this.warn = this.warn || "Le <code>.carousel > ul</code> doit contenir 5 <code>li</code>";
                    if (elHasClass(lis[0], 'visible') !== true)
                        this.warn = this.warn || "Le premier <code>li</code> doit avoir la classe <code>visible</code>";
                    if (elHasClass(lis[1], 'visible') !== false)
                        this.warn = this.warn || "Le second <code>li</code> ne doit avoir la classe <code>visible</code>";

                    elNext.click(); elNext.click(); elNext.click(); elNext.click(); elNext.click();
                    if (elHasClass(lis[1], 'visible') !== false)
                        this.warn = this.warn || "Après quatre clic sur suivant, le premier <code>li</code> ne doit plus avoir la classe <code>visible</code>";
                    if (elHasClass(lis[4], 'visible') !== true)
                        this.warn = this.warn || "Après quatre clic sur suivant, le cinquième <code>li</code> doit avoir la classe <code>visible</code>";

                    return !this.warn;
                }
            },
            {
                title: "Naviguer au précédent",
                description: "Appliquer le même fonctionnement à la flêche de gauche, dotée de la classe <code>prev</code>, cette fois-ci pour passer d'un élément à l'élément précédent, sans avoir d'effet sur le premier.",
                excerpt: "Déclarer une variable <code>index</code> et l'utiliser pour mémoriser la position actuelle peut faciliter les choses. À chaque action utilisateur, le <code>li</code> à cet index peut être masqué et la position du suivant (<i>ou précédent</i>) peut être déduite à partir de cette variable (<i>et non du DOM</i>).",
                solved: "var index = 0;<br>var lis = document.querySelectorAll('.carousel li');<br>var elNext = document.querySelector('.next');<br>var elPrev = document.querySelector('.prev');<br><br>elPrev.addEventListener('click', function() {<br>  lis[index].classList.remove('visible');<br>  index--;<br>  if (index < 0)<br>    index = 0;<br><br>  lis[index].classList.add('visible');<br>});<br><br>elNext.addEventListener('click', function() {<br>  lis[index].classList.remove('visible');<br>  index++;<br>  if (index > 4)<br>    index = 4;<br><br>  lis[index].classList.add('visible');<br>});",
                dom: function() {
                    return carousel.bind(carousel);
                },
                answer: function() {
                    var elPrev = document.querySelector('.prev');
                    var elNext = document.querySelector('.next');

                    var lis = document.querySelectorAll('.carousel > ul > li');

                    if (lis.length !== 5)
                        this.warn = this.warn || "Le <code>.carousel > ul</code> doit contenir 5 <code>li</code>";
                    if (elHasClass(lis[0], 'visible') !== true)
                        this.warn = this.warn || "Le premier <code>li</code> doit avoir la classe <code>visible</code>";
                    if (elHasClass(lis[1], 'visible') !== false)
                        this.warn = this.warn || "Le second <code>li</code> ne doit avoir la classe <code>visible</code>";

                    elPrev.click();
                    if (elHasClass(lis[0], 'visible') !== true)
                        this.warn = this.warn || "Après un clic sur précédent, le premier <code>li</code> doit avoir la classe <code>visible</code>";
                    if (elHasClass(lis[1], 'visible') !== false)
                        this.warn = this.warn || "Après un clic sur précédent, le second <code>li</code> ne doit avoir la classe <code>visible</code>";

                    elNext.click(); elNext.click(); elPrev.click();
                    if (elHasClass(lis[0], 'visible') !== false)
                        this.warn = this.warn || "Après un clic sur suivant, précédent, suivant, le premier <code>li</code> ne doit plus avoir la classe <code>visible</code>";
                    if (elHasClass(lis[1], 'visible') !== true)
                        this.warn = this.warn || "Après un clic sur suivant, précédent, suivant, le second <code>li</code> doit avoir la classe <code>visible</code>";

                    return !this.warn;
                }
            },
            {
                title: "Cacher les fléches de navigation",
                description: "Lorsque le premier élément du carrousel est affiché, masquer la flêche de gauche, sur le dernier, cacher la flêche de droite. Ajouter la classe <code>hidden</code> à l'élément <code>next</code> ou <code>prev</code> permet de les masquer.",
                excerpt: "Il est possible de regrouper le code de passage d'un élément au suivant (<i>ou au précédent</i>) dans une fonction <code>jump</code>. Cette fonction peut être dotée d'un paramètre d'entrée indiquant le prochain index (<i>calculé par l'appelant</i>), la fonction peut ainsi vérifier que l'index ne passe pas en dessous de <code>0</code> ou au dessus de <code>4</code>. Elle peut également se charger d'afficher / masquer les flêches de navigation.<br><br><strong>Exemple </strong>: <pre><code>var index =  0;<br>var jump = function(to) {<br>  /* retrait de la classe .visible du li actuel */<br>  /* modification de l'index */<br>  /* ajout de la classe .visible au li correspondant au nouvel index */<br>  /* affichage / masquage des flêches de navigation en fonction du nouvel index */<br>};<br><br>document.querySelector('.next').addEventListener('click', function() {<br>  jump(index + 1);<br>});</code></pre>",
                solved: "var index = 0;<br>var lis = document.querySelectorAll('.carousel li');<br>var elNext = document.querySelector('.next');<br>var elPrev = document.querySelector('.prev');<br><br>var navigation = function(index) {<br>  elPrev.classList.toggle('hidden', index === 0);<br>  elNext.classList.toggle('hidden', index === 4);<br>}<br><br>var jump = function(to) {<br>  lis[index].classList.remove('visible');<br>  index = to;<br>  if (index > 4)<br>    index = 4;<br>  if (index < 0)<br>    index = 0;<br>  lis[index].classList.add('visible');<br>  navigation(index);<br>}<br><br>elPrev.addEventListener('click', function() {<br>  jump(index - 1);<br>});<br><br>elNext.addEventListener('click', function() {<br>  jump(index + 1);<br>});<br><br>navigation(0);",
                dom: function() {
                    return carousel.bind(carousel);
                },
                answer: function() {
                    var elPrev = document.querySelector('.prev');
                    var elNext = document.querySelector('.next');

                    var lis = document.querySelectorAll('.carousel > ul > li');

                    if (lis.length !== 5)
                        this.warn = this.warn || "Le <code>.carousel > ul</code> doit contenir 5 <code>li</code>";
                    if (elHasClass(elPrev, 'hidden') !== true)
                        this.warn = this.warn || "La flêche de gauche doit être masquée quand le premier élément est affiché";
                    if (elHasClass(elNext, 'hidden') !== false)
                        this.warn = this.warn || "La flêche de gauche doit être affichée quand le premier élément est affiché";

                    elNext.click();
                    if (elHasClass(elPrev, 'hidden') !== false)
                        this.warn = this.warn || "La flêche de gauche doit être affichée quand le second élément est affiché";
                    if (elHasClass(elNext, 'hidden') !== false)
                        this.warn = this.warn || "La flêche de gauche doit être affichée quand le second élément est affiché";

                    elNext.click(); elNext.click(); elNext.click();
                    if (elHasClass(lis[4], 'visible') !== true)
                        this.warn = this.warn || "Après quatre clic sur suivant, le cinquième <code>li</code> doit avoir la classe <code>visible</code>";
                    if (elHasClass(elPrev, 'hidden') !== false)
                        this.warn = this.warn || "La flêche de gauche doit être affichée quand le cinquième élément est affiché";
                    if (elHasClass(elNext, 'hidden') !== true)
                        this.warn = this.warn || "La flêche de gauche doit être masquée quand le cinquième élément est affiché";

                    return !this.warn;
                }
            },
            {
                title: "Afficher la position",
                description: "Une liste d'indicateurs <code>.dots li</code> est disponible sous le carrousel. Ajouter la classe <code>active</code> à celui d'entre eux qui correspond à l'élément du carrousel affiché (<i>le premier rond quand le premier élément est affiché, le second pour le second, etc</i>). Mettre à jour cet indicateur lors du changement d'élément dans le carrousel.",
                solved: "var index = 0;<br>var lis = document.querySelectorAll('.carousel li');<br>var elNext = document.querySelector('.next');<br>var elPrev = document.querySelector('.prev');<br><br>var dots = document.querySelectorAll('.carousel .dots li');<br>var navigation = function(index) {<br>  elPrev.classList.toggle('hidden', index === 0);<br>  elNext.classList.toggle('hidden', index === 4);<br><br>  for (var i = 0; i < dots.length; i++) {<br>    dots[i].classList.remove('active');<br>  }<br>  dots[index].classList.add('active');<br>}<br><br>var jump = function(to) {<br>  lis[index].classList.remove('visible');<br>  index = to;<br>  if (index > 4)<br>    index = 4;<br>  if (index < 0)<br>    index = 0;<br>  lis[index].classList.add('visible');<br>  navigation(index);<br>}<br><br>elPrev.addEventListener('click', function() {<br>  jump(index - 1);<br>});<br><br>elNext.addEventListener('click', function() {<br>  jump(index + 1);<br>});<br><br>navigation(0);",
                dom: function() {
                    return carousel.bind(carousel, true);
                },
                answer: function() {
                    var elPrev = document.querySelector('.prev');
                    var elNext = document.querySelector('.next');

                    var lis = document.querySelectorAll('.carousel > ul > li');
                    var dots = document.querySelectorAll('.carousel .dots li');

                    if (lis.length !== 5)
                        this.warn = this.warn || "Le <code>.carousel > ul</code> doit contenir 5 <code>li</code>";
                    if (elHasClass(dots[0], 'active') !== true)
                        this.warn = this.warn || "Le premier indicateur doit avoir la classe <code>active</code> lorsque le premier élément est affiché";

                    elNext.click();
                    if (elHasClass(dots[0], 'active') !== false)
                        this.warn = this.warn || "Après un clic sur suivant, le premier indicateur ne doit pas avoir la classe <code>active</code>";
                    if (elHasClass(dots[1], 'active') !== true)
                        this.warn = this.warn || "Après un clic sur suivant, le second indicateur doit avoir la classe <code>active</code>";

                    elNext.click(); elNext.click(); elNext.click();
                    if (elHasClass(lis[4], 'visible') !== true)
                        this.warn = this.warn || "Après quatre clic sur suivant, le cinquième <code>li</code> doit avoir la classe <code>visible</code>";
                    if (elHasClass(elPrev, 'hidden') !== false)
                        this.warn = this.warn || "La flêche de gauche doit être affichée quand le cinquième élément est affiché";
                    if (elHasClass(elNext, 'hidden') !== true)
                        this.warn = this.warn || "La flêche de gauche doit être masquée quand le cinquième élément est affiché";

                    return !this.warn;
                }
            },
            {
                title: "Modifier la position",
                description: "Cliquer sur l'un des ronds doit permettre de naviguer à l'élément du carrousel à la même position. Les flêches de navigation gauche ou droite sont masquées si il s'agit du premier ou dernier élément du carrousel (<i>comme lors de la navigation manuelle de l'utilisateur</i>).",
                solved: "var index = 0;<br>var lis = document.querySelectorAll('.carousel li');<br>var elNext = document.querySelector('.next');<br>var elPrev = document.querySelector('.prev');<br><br>var dots = document.querySelectorAll('.carousel .dots li');<br>var navigation = function(index) {<br>  elPrev.classList.toggle('hidden', index === 0);<br>  elNext.classList.toggle('hidden', index === 4);<br><br>  for (var i = 0; i < dots.length; i++) {<br>    dots[i].classList.remove('active');<br>  }<br>  dots[index].classList.add('active');<br>}<br><br>var jump = function(to) {<br>  lis[index].classList.remove('visible');<br>  index = to;<br>  if (index > 4)<br>    index = 4;<br>  if (index < 0)<br>    index = 0;<br>  lis[index].classList.add('visible');<br>  navigation(index);<br>}<br><br>elPrev.addEventListener('click', function() {<br>  jump(index - 1);<br>});<br><br>elNext.addEventListener('click', function() {<br>  jump(index + 1);<br>});<br><br>for (let i = 0; i < dots.length; i++) {<br>  dots[i].addEventListener('click', function() {<br>    jump(i);<br>  });<br>}<br><br>navigation(0);",
                dom: function() {
                    return carousel.bind(carousel, true);
                },
                answer: function() {
                    var elPrev = document.querySelector('.prev');
                    var elNext = document.querySelector('.next');

                    var lis = document.querySelectorAll('.carousel > ul > li');
                    var dots = document.querySelectorAll('.carousel .dots li');

                    if (lis.length !== 5)
                        this.warn = this.warn || "Le <code>.carousel > ul</code> doit contenir 5 <code>li</code>";
                    if (elHasClass(dots[0], 'active') !== true)
                        this.warn = this.warn || "Le premier indicateur doit avoir la classe <code>active</code> lorsque le premier élément est affiché";

                    dots[2].click();
                    if (elHasClass(dots[0], 'active') !== false)
                        this.warn = this.warn || "Après un clic le troisième indicateur, le premier indicateur ne doit pas avoir la classe <code>active</code>";
                    if (elHasClass(dots[2], 'active') !== true)
                        this.warn = this.warn || "Après un clic le troisième indicateur, le troisième indicateur doit avoir la classe <code>active</code>";

                    elNext.click();
                    if (elHasClass(dots[2], 'active') !== false)
                        this.warn = this.warn || "Après un clic le troisième indicateur puis sur suivant, le troisième indicateur ne doit pas avoir la classe <code>active</code>";
                    if (elHasClass(dots[3], 'active') !== true)
                        this.warn = this.warn || "Après un clic le troisième indicateur puis sur suivant, le quatrième indicateur doit avoir la classe <code>active</code>";

                    dots[0].click();
                    if (elHasClass(dots[3], 'active') !== false)
                        this.warn = this.warn || "Après un clic le premier indicateur, le troisième indicateur ne doit pas avoir la classe <code>active</code>";
                    if (elHasClass(dots[0], 'active') !== true)
                        this.warn = this.warn || "Après un clic le premier indicateur, le premier indicateur doit avoir la classe <code>active</code>";

                    if (elHasClass(elPrev, 'hidden') !== true)
                        this.warn = this.warn || "La flêche de gauche doit être masquée quand le premier élément est affiché";
                    if (elHasClass(elNext, 'hidden') !== false)
                        this.warn = this.warn || "La flêche de gauche doit être affichée quand le premier élément est affiché";

                    return !this.warn;
                }
            }
        ]
    }, {
        title: "Composant | Todolist",
        description: "Pour faciliter la réalisation d'applications et leur maintenance, plusieurs approches MV* (<i>modèle, vue & co</i>) ont vu le jour ces dernières années. Un modèle stocke l'état de l'application (<i>ex. les articles dans un panier</i>). Les vues affichent les informations issues d'un ou plusieurs modèles, modifient ceux-ci, et se rafraichissent.<br><br>Ce chapitre présente la réalisation d'une liste de tâches pas à pas. Il propose dans un premier temps de manipuler le DOM de façon classique, puis, dans un second temps, d'utiliser une approche MV*.",
        color: "violet",
        steps: [
            {
                title: "Ajouter un todo",
                description: "Ajouter un <code>li</code> au <code>.todos ul</code> existant à chaque appui sur entrée dans le champ de formulaire. Ce nouveau <code>li</code> à pour texte la valeur saisie dans le champ de formulaire.",
                excerpt: "Un écouteur d'événement reçoit en premier paramètre l'événement qui l'a déclenché. s'il s'agit d'un événement clavier <code>keypress</code> celui indique via <code>event.keyCode</code> quelle touche a été saisie, et via <code>event.target.value</code> quelle est la valeur actuelle du champ de formulaire.<br><br><strong>Exemple</strong> : <pre><code>var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) { <br>  console.log(event.keyCode, event.target.value); <br>});</code></pre> affiche ces deux informations à chaque saisie dans le premier <code>input</code> de la page.",
                solved: "var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    var ul = document.querySelector('.todos ul');<br>    ul.innerHTML = '&lt;li class=\"item\"&gt;&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + event.target.value + '&lt;/li&gt;';<br>  }<br>});",
                dom: function() {
                    return todolist.bind(todolist);
                },
                answer: function() {
                    let input = document.querySelector('input');

                    input.value = 'apple';
                    keypress(input, 13);

                    let lis = document.querySelectorAll('.todos ul li');

                    if (lis.length !== 1)
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, un <code>li</code> doit être créé dans le <code>.todos ul</code>";
                    if (elContains(lis[0], 'apple') !== true)
                        this.warn = this.warn || "Le <code>li</code> doit contenir le mot saisi dans l'input";

                    return !this.warn;
                }
            },
            {
                title: "Ajouter plusieurs todos",
                description: "Si le champ de formulaire est vide, aucun <code>li</code> ne doit être créé. Et, losqu'un <code>li</code> est créé, le champ de formulaire doit être vidé.",
                solved: "var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    var ul = document.querySelector('.todos ul');<br>    ul.innerHTML += '&lt;li class=\"item\"&gt;&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + event.target.value + '&lt;/li&gt;';<br>    event.target.value ='';<br>  }<br>});",
                dom: function() {
                    return todolist.bind(todolist);
                },
                answer: function() {
                    let input = document.querySelector('input');
                    input.value = '';
                    keypress(input, 13);

                    input.value = 'apple';
                    keypress(input, 13);

                    input.value = 'pear';
                    keypress(input, 13);

                    let lis = document.querySelectorAll('.todos ul li');

                    if (input.value !== '')
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, l'input doit être vidé";
                    if (lis.length !== 2)
                        this.warn = this.warn || "À la saisie d'un mot vide, puis d'entrée, aucun <code>li</code> ne doit être créé";
                    if (elContains(lis[0], 'apple') !== true)
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, un <code>li</code> doit être créé";
                    if (elContains(lis[1], 'pear') !== true)
                        this.warn = this.warn || "À la saisie d'un second mot, puis d'entrée, un second <code>li</code> doit être créé";

                    return !this.warn;
                }
            },
            {
                title: "Supprimer des todos",
                description: "Lorsqu'un <code>li</code> est ajouté au <code>.todos ul</code> existant, son texte est préfixé par <code>&lt;i class=\"remove icon\"&gt;&lt;/i&gt;</code>. Cette balise fait apparaitre une croix devant son nom. Au clic sur cette croix, le <code>li</code> doit être supprimé.",
                excerpt: "À la création d'un élément dans le DOM, il est possible d'ajouter un écouteur d'événement sur un de ses sous éléments, ou sur lui même.",
                solved: "var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    var ul = document.querySelector('.todos ul');<br>    var li = document.createElement('li');<br>    li.className = 'item';<br>    li.innerHTML = '&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + event.target.value;<br>    li.querySelector('i').addEventListener('click', function() {<br>      li.remove();<br>    });<br>    ul.appendChild(li);<br>    event.target.value = '';<br>  }<br>});",
                dom: function() {
                    return todolist.bind(todolist);
                },
                answer: function() {
                    let input = document.querySelector('input');
                    input.value = 'apple';
                    keypress(input, 13);

                    input.value = 'pear';
                    keypress(input, 13);

                    let remove = document.querySelector('.todos ul .remove.icon');
                    remove.click();

                    let lis = document.querySelectorAll('.todos ul li');

                    if (lis.length !== 1)
                        this.warn = this.warn || "Après l'ajout d'un <code>li</code> un clic sur la croix du premier doit le supprimer";
                    if (elContains(lis[0], 'pear') !== true)
                        this.warn = this.warn || "Après l'ajout de deux <code>li</code> un clic sur la croix du premier ne doit laisser que le second dans la liste";

                    return !this.warn;
                }
            },
            {
                title: "Cocher les todos",
                description: "Lorsqu'un <code>li</code> est cliqué, la classe <code>done</code> doit lui être ajoutée. S'il est cliqué de nouveau, cette classe est supprimée.",
                solved: "var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    var ul = document.querySelector('.todos ul');<br>    var li = document.createElement('li');<br>    li.className = 'item';<br>    li.innerHTML = '&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + event.target.value;<br>    li.querySelector('i').addEventListener('click', function() {<br>      li.remove();<br>    });<br>    li.addEventListener('click', function() {<br>        li.classList.toggle('done');<br>    });<br>    ul.appendChild(li);<br>    event.target.value = '';<br>  }<br>});",
                dom: function() {
                    return todolist.bind(todolist);
                },
                answer: function() {
                    let input = document.querySelector('input');
                    input.value = 'apple';
                    keypress(input, 13);

                    input.value = 'pear';
                    keypress(input, 13);

                    let lis = document.querySelectorAll('.todos ul li');

                    if (lis.length !== 2)
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, à deux reprises, deux <code>li</code> doivent être créés dans le <code>.todos ul</code>";

                    lis[0].click(); lis[0].click(); lis[0].click();
                    lis[1].click(); lis[1].click();

                    lis = document.querySelectorAll('.todos ul li');

                    if (elContains(lis[0], 'apple') !== true)
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, un <code>li</code> doit être créé";
                    if (elContains(lis[1], 'pear') !== true )
                        this.warn = this.warn || "À la saisie d'un second mot, puis d'entrée, un second <code>li</code> doit être créé";

                    if (lis[0].classList.contains('done') !== true)
                        this.warn = this.warn || "Après avoir été cliqué trois fois, le premier <code>li</code> doit avoir la classe <code>done</code>";
                    if (lis[1].classList.contains('done') !== false)
                        this.warn = this.warn || "Après avoir été cliqué deux fois, le second <code>li</code> ne doit pas avoir la classe <code>done</code>";

                    return !this.warn;
                }
            },
            {
                title: "Séparer le modèle de la vue",
                description: "Créer une variable <code>todos</code> pour stocker l'état du composant (<i>combien d'éléments, lesquels sont cochés, etc</i>). À chaque modification de cette variable, appeller une méthode <code>render</code> charger de mettre à jour l'affichage.",
                excerpt: "Au lieu d'ajouter directement les <code>li</code> au DOM, créer un tableau <code>todos</code> et une méthode <code>render</code>. À chaque appui sur entrée dans le champ de formulaire, ajouter un object <code>{name: event.target.value, done: false}</code> au tableau <code>todos</code> et déclencher la méthode <code>render</code>. Le rôle de cette méthode est de vider le contenu du <code>ul</code> à chaque fois, et de parcourir le tableau <code>todos</code> afin de générer autant de <code>li</code> qu'il y a d'éléments dans le tableau. <br><br>Au lieu de modifier le DOM lors des événements (<i>clic sur la croix ou clic sur le nom du todo</i>), c'est l'élément du tableau qui est modifié et la méthode <code>render</code> qui est appellée de nouveau. Ce découpage sépare le modèle (<i>les données</i>) de la vue (<i>l'affichage</i>) et va simplifier les opérations suivantes. Supprimer et afficher de nouveaux tous les éléments n'est pas coûteux en terme de performance, tant que leur nombre n'est pas très grand.",
                solved: "var todos = [];<br>var render = function() {<br>  var ul = document.querySelector('.todos ul');<br>  ul.innerHTML = '';<br>  for (let i = 0; i < todos.length; i++) {<br>    let todo = todos[i];<br><br>    let li = document.createElement('li');<br>    li.classList.add('item');<br>    li.classList.toggle('done', todo.done);<br>    li.innerHTML = todo.name;<br><br>    li.querySelector('i').addEventListener('click', function() {<br>      todos.splice(i, 1);<br>      render();<br>    });<br>    li.addEventListener('click', function() {<br>      todo.done = !todo.done;<br>      render();<br>    });<br><br>    ul.appendChild(li);<br>  }<br>}<br><br>var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    todos.push({<br>      name: '&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + event.target.value,<br>      done: false<br>    });<br>    event.target.value = '';<br>    render();<br>  }<br>});",
                dom: function() {
                    return todolist.bind(todolist);
                },
                answer: function() {
                    let input = document.querySelector('input');
                    input.value = 'apple';
                    keypress(input, 13);

                    input.value = 'pear';
                    keypress(input, 13);

                    let lis = document.querySelectorAll('.todos ul li');
                    if (lis.length !== 2)
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, à deux reprises, deux <code>li</code> doivent être créés dans le <code>.todos ul</code>";

                    let ul = document.querySelector('.todos ul');
                    ul.innerHTML += '<li class="item done"><i class="remove icon"></i>banana</li>';

                    render && render();

                    lis = document.querySelectorAll('.todos ul li');
                    if (lis.length !== 2)
                        this.warn = this.warn || "À l'appel de la méthode <code>render</code>, les deux <code>li</code> doivent être créés de nouveau et remplacer ceux du <code>.todos ul</code>";

                    return !this.warn;
                }
            },
            {
                title: "Compter les todos",
                description: "À chaque création d'un todo, le texte de <code>.filter-todo</code> doit afficher le nombre total de todo non cochés (<i>sans le classe <code>done</code></i>). Le texte de <code>.filter-done</code> affiche quant à lui, le nombre total de todo cochés (<i>avec la classe <code>done</code></i>). Penser au pluriel pour « 0 fait », « 1 fait » et « 2 faits ».",
                solved: "var todos = [];<br>var render = function() {<br>  var ul = document.querySelector('.todos ul');<br>  ul.innerHTML = '';<br>  var todoCount = 0, doneCount = 0;<br>  for (let i = 0; i < todos.length; i++) {<br>    let todo = todos[i];<br><br>    if (todo.done)<br>      doneCount++;<br>    else<br>      todoCount++;<br><br>    let li = document.createElement('li');<br>    li.classList.add('item');<br>    li.classList.toggle('done', todo.done);<br>    li.innerHTML = todo.name;<br><br>    li.querySelector('i').addEventListener('click', function() {<br>      todos.splice(i, 1);<br>      render();<br>    });<br>    li.addEventListener('click', function() {<br>      todo.done = !todo.done;<br>      render();<br>    });<br><br>    ul.appendChild(li);<br>  }<br><br>  document.querySelector('.filter-todo').innerHTML = todoCount + ' à faire';<br>  document.querySelector('.filter-done').innerHTML = doneCount + (doneCount > 1 ? ' faits' : ' fait');<br>}<br><br>var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    todos.push({<br>      name: '&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + event.target.value,<br>      done: false<br>    });<br>    event.target.value = '';<br>    render();<br>  }<br>});",
                dom: function() {
                    return todolist.bind(todolist);
                },
                answer: function() {
                    let input = document.querySelector('input');
                    input.value = 'apple';
                    keypress(input, 13);

                    input.value = 'pear';
                    keypress(input, 13);

                    let lis = document.querySelectorAll('.todos ul li');
                    let todoCount = document.querySelector('.filter-todo');
                    let doneCount = document.querySelector('.filter-done');

                    if (elContains(todoCount, '2 à faire') !== true)
                        this.warn = this.warn || "Après la création de 2 todos, le compte todo doit indiquer « 2 à faire »"
                    if (elContains(doneCount, '0 fait') !== true)
                        this.warn = this.warn || "Après la création de 2 todos, le compte done doit indiquer « 0 fait »"

                    lis[0].click();
                    lis = document.querySelectorAll('.todos ul li');
                    if (elContains(todoCount, '1 à faire') !== true)
                        this.warn = this.warn || "Après la création de 2 todos et le clic sur l'un des deux, le compte todo doit indiquer « 1 à faire »"
                    if (elContains(doneCount, '1 fait') !== true)
                        this.warn = this.warn || "Après la création de 2 todos et le clic sur l'un des deux, le compte done doit indiquer « 1 fait »"

                    lis[1].click();
                    lis = document.querySelectorAll('.todos ul li');
                    if (elContains(todoCount, '0 à faire') !== true)
                        this.warn = this.warn || "Après la création de 2 todos et le clic sur les deux, le compte todo doit indiquer « 0 à faire »"
                    if (elContains(doneCount, '2 faits') !== true)
                        this.warn = this.warn || "Après la création de 2 todos et le clic sur les deux, le compte done doit indiquer « 2 faits »"

                    return !this.warn;
                }
            },
            {
                title: "Filtrer les todos",
                description: "Au clic sur <code>.filter-done</code> cet élément récupère la classe <code>active</code> et seuls les todos terminés sont affichés. Idem pour <code>.filter-todo</code>. Seul un de ces deux boutons peut être actif à la fois. Cliquer sur un bouton actif le désactive (<i>et affiche ainsi tous les todos</i>). Plutôt que se baser sur le DOM pour savoir quel filtre est activé, utiliser une variable à 3 états, et modifier la méthode <code>render</code> pour la mise à jour de la classe <code>active</code> sur les boutons.",
                solved: "var todos = [];<br>var state = 'all';<br>var render = function() {<br>  var ul = document.querySelector('.todos ul');<br>  ul.innerHTML = '';<br>  var todoCount = 0, doneCount = 0;<br>  for (let i = 0; i < todos.length; i++) {<br>    let todo = todos[i];<br><br>    if (todo.done)<br>      doneCount++;<br>    else<br>      todoCount++;<br><br>    if (state !== 'all') {<br>      if ((state === 'todo' && todo.done) || (state === 'done' && !todo.done)) {<br>        continue;<br>      }<br>    }<br><br>    let li = document.createElement('li');<br>    li.classList.add('item');<br>    li.classList.toggle('done', todo.done);<br>    li.innerHTML = todo.name;<br><br>    li.querySelector('i').addEventListener('click', function() {<br>      todos.splice(i, 1);<br>      render();<br>    });<br>    li.addEventListener('click', function() {<br>      todo.done = !todo.done;<br>      render();<br>    });<br><br>    ul.appendChild(li);<br>  }<br><br>  document.querySelector('.filter-todo').innerHTML = todoCount + ' à faire';<br>  document.querySelector('.filter-done').innerHTML = doneCount + (doneCount > 1 ? ' faits' : ' fait');<br><br>  document.querySelector('.filter-todo').classList.toggle('active', state === 'todo');<br>  document.querySelector('.filter-done').classList.toggle('active', state === 'done');<br>}<br><br>var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    todos.push({<br>      name: '&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + event.target.value,<br>      done: false<br>    });<br>    event.target.value = '';<br>    render();<br>  }<br>});<br><br>document.querySelector('.filter-todo').addEventListener('click', function() {<br>  if (state !== 'todo')<br>    state = 'todo';<br>  else<br>    state = 'all';<br>  render();<br>});<br><br>document.querySelector('.filter-done').addEventListener('click', function() {<br>  if (state !== 'done')<br>    state = 'done';<br>  else<br>    state = 'all';<br>  render();<br>});",
                dom: function() {
                    return todolist.bind(todolist);
                },
                answer: function() {
                    let input = document.querySelector('input');
                    input.value = 'apple';
                    keypress(input, 13);

                    input.value = 'pear';
                    keypress(input, 13);

                    input.value = 'banana';
                    keypress(input, 13);

                    let lis = document.querySelectorAll('.todos ul li');
                    let todoCount = document.querySelector('.filter-todo');
                    let doneCount = document.querySelector('.filter-done');

                    lis[1].click();

                    if (lis.length !== 3)
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, à trois reprises, trois <code>li</code> doivent être créés dans le <code>.todos ul</code>";
                    if (elContains(todoCount, '2 à faire') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, le compte todo doit indiquer « 2 à faire »";
                    if (elContains(doneCount, '1 fait') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, le compte done doit indiquer « 1 fait »";

                    todoCount.click();
                    lis = document.querySelectorAll('.todos ul li');
                    if (lis.length !== 2)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 2 à faire » seuls les deux todos concernés sont affichés";

                    todoCount.click();
                    lis = document.querySelectorAll('.todos ul li');
                    if (lis.length !== 3)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 2 à faire » à deux reprises, tous les todos sont affichés";

                    doneCount.click();
                    lis = document.querySelectorAll('.todos ul li');
                    if (lis.length !== 1)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » seul le todo concerné est affiché";
                    if (elContains(lis[0], 'pear') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » ce todo contient toujours la valeur d'origine";
                    if (elContains(todoCount, '2 à faire') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » le compte todo doit indiquer « 2 à faire »";
                    if (elContains(doneCount, '1 fait') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » le compte done doit indiquer « 1 fait »"

                    return !this.warn;
                }
            }
        ]
    }, {
        title: "Composant | Carte",
        description: "Les cartes sont devenues une des fonctionnalités clés des navigateurs web, notamment sur mobile. Elle affichent les rues, les adresses, les itinéraires et les points d'intérêt (<i>restaurants, cinémas, métros, gares & co</i>). À l'aide de géolocalisation (<i>gps et wifi notamment</i>), elles peuvent également afficher la position de l'utilisateur.<br><br>Ce chapitre présente l'utilisation des cartes google pas à pas.",
        color: "violet",
        steps: [
            {
                title: "Afficher une carte",
                description: "Créer une variable <code>map</code> et l'initialiser avec une carte de <a target=\"_blank\" href=\"https://developers.google.com/maps/\">la librairie google maps</a>. L'afficher dans la balise <code>.map</code>, la centrer sur Paris (<i>lat: 48.86, lng: 2.35</i>) et zoomer x12.",
                excerpt: "<strong>Ne pas utiliser la propriété <code>async</code> du script ni son <code>callback</code></strong>. Bien qu'il s'agisse de la méthode classique pour manipuler une carte google (<i>l'affichage de la carte ne bloque pas le chargement du reste de la page</i>), cette méthode n'est pas compatible avec ce tutoriel. Sans callback, le script de la librairie doit être avant le script qui l'utilise, et ce dernier n'a pas besoin d'une fonction englobante (<i>puisque la page est bloquée tant que google maps n'est pas chargé</i>), et peut être directement déclaré <code>var map = new google.maps.Map(..)</code>.<br><br>Il est possible d'obtenir une clé d'usage via la documentation (<i>les librairies ont courament des clés afin d'effectuer un suivi / limite d'usage</i>).",
                solved: "/* à ajouter avant le script principal<br>&lt;script src=\"https://maps.googleapis.com/maps/api/js?key=\"&gt;&lt;/script&gt;<br>*/<br>var map = new google.maps.Map(document.querySelector('.map'), {<br>  center: {lat: 48.86, lng: 2.35},<br>  scrollwheel: false,<br>  zoom: 12<br>});",
                dom: function() {
                    return maps.bind(maps);
                },
                answer: function() {
                    if (!map)
                        return;

                    return mapsWait().then(function() {
                        if (near({lat: map.center.lat(), lng: map.center.lng()}, {lat: 48.86, lng: 2.35}) !== true)
                            this.warn = this.warn || "Le centre le carte doit être positionné proche de <code>{lat: 48.86, lng: 2.35}</code>";
                        if (map.zoom !== 12)
                            this.warn = this.warn || "Le zoom de la carte doit être égal à <code>12</code>";
                        return !this.warn;
                    }.bind(this));
                }
            },
            {
                title: "Ajouter un point d'intérêt",
                description: "Créer une variable <code>marker</code> et l'initialiser avec un marqueur de carte (<i>le célèbre pin rouge</i>) aux coordonnées du pont des arts de Paris.",
                solved: "var map = new google.maps.Map(document.querySelector('.map'), {<br>  center: {lat: 48.86, lng: 2.35},<br>  scrollwheel: false,<br>  zoom: 12<br>});<br><br>var marker = new google.maps.Marker({<br>  position: {lat: 48.8583459,lng: 2.3353197},<br>  map: map<br>});",
                dom: function() {
                    return maps.bind(maps);
                },
                answer: function() {
                    if (!map || !marker)
                        return;

                    return mapsWait().then(function() {
                        if (near({lat: marker.position.lat(), lng: marker.position.lng()}, {lat: 48.8583, lng: 2.3353}) !== true)
                            this.warn = this.warn || "Le marqueur doit être positionné proche de <code>{lat: 48.8583, lng: 2.3353}</code>";
                        return !this.warn;
                    }.bind(this));
                }
            },
            {
                title: "Ajouter une popin au clic sur un point d'intérêt",
                description: "Afficher « Le Pont des Arts » dans une <code>infowindow</code> au clic sur le point d'intérêt. Cette fenêtre doit se fermer au clic sur la carte.",
                solved: "var map = new google.maps.Map(document.querySelector('.map'), {<br>  center: {lat: 48.86, lng: 2.35},<br>  scrollwheel: false,<br>  zoom: 12<br>});<br><br>var marker = new google.maps.Marker({<br>  position: {lat: 48.8583459,lng: 2.3353197},<br>  map: map<br>});<br><br>var infowindow = new google.maps.InfoWindow({<br>  content: 'Le Pont des Arts'<br>});<br><br>marker.addListener('click', function() {<br>  infowindow.open(map, marker);<br>});<br><br>map.addListener('click', function() {<br>  infowindow.close();<br>});",
                dom: function() {
                    return maps.bind(maps, true);
                },
                answer: function() {
                    if (!map || !marker)
                        return;

                    return mapsWait().then(function() {
                        google.maps.event.trigger(marker, 'click');

                        let basic = true;
                        if (elContains(document.querySelector('.gm-style-iw div div'), 'Le Pont des Arts') !== true)
                            this.warn = this.warn || "Le popin doit afficher « Le Pont des Arts »";

                        google.maps.event.trigger(map, 'click');
                        if (elContains(document.querySelector('.gm-style-iw div div'), 'Le Pont des Arts') !== false)
                            this.warn = this.warn || "Au clic sur la carte, le popin doit être masqué";

                        return !this.warn;
                    }.bind(this));
                }
            },
            {
                title: "Déplacer le marqueur à l'adresse recherchée",
                description: "Lorsqu'une adresse est saisie dans <code>.places input</code> suivi de la touche entrée, le marqueur actuel est déplacé vers l'adresse ainsi recherchée et la carte est centrée sur ce point.",
                excerpt: "La librairie offre un géocodeur pour transformer une adresse en coordonnées latitude, longitude.",
                solved: "var map = new google.maps.Map(document.querySelector('.map'), {<br>  center: {lat: 48.86, lng: 2.35},<br>  scrollwheel: false,<br>  zoom: 12<br>});<br><br>var marker = new google.maps.Marker({<br>  position: {lat: 48.8583459,lng: 2.3353197},<br>  map: map<br>});<br><br>var infowindow = new google.maps.InfoWindow({<br>  content: 'Le Pont des Arts'<br>});<br><br>marker.addListener('click', function() {<br>  infowindow.open(map, marker);<br>});<br><br>map.addListener('click', function() {<br>  infowindow.close();<br>});<br><br>geocoder = new google.maps.Geocoder();<br>document.querySelector('.places input').addEventListener('keypress', function(event) {<br>  if (event.keyCode !== 13)<br>    return;<br><br>  geocoder.geocode({'address': event.target.value}, function(results, status) {<br>    if (status !== google.maps.GeocoderStatus.OK)<br>      return;<br><br>    map.setCenter(results[0].geometry.location);<br>    marker.setPosition(results[0].geometry.location);<br>  });<br>});",
                dom: function() {
                    return maps.bind(maps, true);
                },
                answer: function() {
                    if (!map || !marker)
                        return;

                    return mapsWait().then(function() {
                        let input = document.querySelector('.places input');

                        if (near({lat: marker.position.lat(), lng: marker.position.lng()}, {lat: 48.8583, lng: 2.3353}) !== true)
                            this.warn = this.warn || "Le marqueur doit être positionné proche de <code>{lat: 48.8583, lng: 2.3353}</code>";

                        input.value = '29 Rue des Trois Frères';
                        keypress(input, 13);

                        return Promise
                        .resolve()
                        .then(function() {
                            // wait for the geocoder
                            return new Promise(function(res, rej) { setTimeout(res, 100); });
                        })
                        .then(function() {
                            if (near( {lat: marker.position.lat(), lng: marker.position.lng()}, {lat: 48.8848, lng: 2.3407}) !== true)
                                this.warn = this.warn || "Après une recherche sur « 29 Rue des Trois Frères », la marqueur doit être positionné proche de <code>{lat: 48.8848, lng: 2.3407}</code>";
                            if (near({lat: map.center.lat(), lng: map.center.lng()}, {lat: 48.8848, lng: 2.3407}) !== true)
                                this.warn = this.warn || "Après une recherche sur « 29 Rue des Trois Frères », la carte doit être centrée proche de <code>{lat: 48.8848, lng: 2.3407}</code>";

                            input.value = '13 Boulevard Garibaldi';
                            keypress(input, 13);
                        }.bind(this))
                        .then(function() {
                            // wait for the geocoder
                            return new Promise(function(res, rej) { setTimeout(res, 100); });
                        })
                        .then(function() {
                            if (near({lat: marker.position.lat(), lng: marker.position.lng()}, {lat: 48.8476, lng: 2.3036}) !== true)
                                this.warn = this.warn || "Après une recherche sur « 13 Boulevard Garibaldi », le marqueur doit être positionné proche de <code>{lat: 48.8476, lng: 2.3036}</code>";

                            if (near({lat: map.center.lat(), lng: map.center.lng()}, {lat: 48.8476, lng: 2.3036}) !== true)
                                this.warn = this.warn || "Après une recherche sur « 13 Boulevard Garibaldi », le carte doit être centrée proche de <code>{lat: 48.8476, lng: 2.3036}</code>";

                            return !this.warn;
                        }.bind(this));
                    }.bind(this));
                }
            },
            {
                title: "Déplacer le marqueur à l'adresse de l'utilisateur",
                description: "Lorsque l'adresse saisie est « ici », le navigateur est géolocalisé et sa position est affichée sur la carte.",
                excerpt: "Le navigateur est en mesure d'acèder à <a target=\"_blank\" href=\"https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation\">sa position géographique</a>, cepdendant, il a besoin de l'autorisation de l'utilisateur pour ce faire.",
                solved: "var map = new google.maps.Map(document.querySelector('.map'), {<br>  center: {lat: 48.86, lng: 2.35},<br>  scrollwheel: false,<br>  zoom: 12<br>});<br><br>var marker = new google.maps.Marker({<br>  position: {lat: 48.8583459,lng: 2.3353197},<br>  map: map<br>});<br><br>var infowindow = new google.maps.InfoWindow({<br>  content: 'Le Pont des Arts'<br>});<br><br>marker.addListener('click', function() {<br>  infowindow.open(map, marker);<br>});<br><br>map.addListener('click', function() {<br>  infowindow.close();<br>});<br><br>geocoder = new google.maps.Geocoder();<br>document.querySelector('.places input').addEventListener('keypress', function(event) {<br>  if (event.keyCode !== 13)<br>    return;<br><br>  if (event.target.value === 'ici') {<br>    return navigator.geolocation.getCurrentPosition(function(position) {<br>      map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});<br>      marker.setPosition({lat: position.coords.latitude, lng: position.coords.longitude});<br>    });<br>  }<br><br>  geocoder.geocode({'address': event.target.value}, function(results, status) {<br>    if (status !== google.maps.GeocoderStatus.OK)<br>      return;<br><br>    map.setCenter(results[0].geometry.location);<br>    marker.setPosition(results[0].geometry.location);<br>  });<br>});",
                dom: function() {
                    return maps.bind(maps, true);
                },
                answer: function() {
                    if (!map || !marker)
                        return;

                    return mapsWait().then(function() {
                        let input = document.querySelector('.places input');

                        if (near({lat: marker.position.lat(), lng: marker.position.lng()}, {lat: 48.8583, lng: 2.3353}) !== true)
                            this.warn = this.warn || "Le marqueur doit être positionné proche de <code>{lat: 48.8583, lng: 2.3353}</code>";

                        input.value = 'ici';
                        keypress(input, 13);

                        return Promise
                        .resolve()
                        .then(function() {
                            return new Promise(function(res, rej) {
                                navigator.geolocation.getCurrentPosition(function(geoloc) {
                                    res(geoloc);
                                });
                            });
                        })
                        .then(function(geoloc) {
                            // wait for the marker
                            return new Promise(function(res, rej) { setTimeout(function() { res(geoloc); }, 100); });
                        })
                        .then(function(geoloc) {
                            if (near({lat: marker.position.lat(), lng: marker.position.lng()}, {lat: geoloc.coords.latitude, lng: geoloc.coords.longitude}) !== true)
                                this.warn = this.warn || "Après une recherche sur « ici », le marqueur doit être positionné proche de la position de l'utilisateur";

                            return !this.warn;
                        }.bind(this));
                    }.bind(this));
                }
            }
        ]
    }, {
        title: "Ajax",
        description: "Une application web peut poser des questions à un serveur distant ; vérifier si une carte bleue est valide et réagir en fonction. Ajax — basé sur le protocole HTTP — est une option pour ce faire. Le navigateur émet une requête et attend une réponse du serveur. Cette requête est asynchrone, elle ne bloque pas le navigateur, qui peut continuer à interagir avec l'utilisateur, et sera notifié lors du retour du serveur.<br><br>Ce chapitre présente ajax pas à pas.",
        color: "teal",
        steps: [
            {
                title: "Rechercher un repository github",
                description: "Effectuer un appel ajax vers <code>https://api.github.com/search/repositories?access_token={token}&q={query}</code> à l'appui sur entrée dans <code>.search input</code> en indiquant comme {query} la recherche saisie.<br><br>Afficher les trois premiers résultats dans <code>.results</code> chacun sous la forme <code>&lt;span class=\"result\"&gt;{full_name}&lt;/span&gt;</code> (<i>et ajouter la classe <code>visible</code> à <code>.results</code> pour le révéler</i>).",
                excerpt: "Pour accèder à l'api de github, il est préférable de créer une clé (<i>ou token</i>), pour ce faire aller dans <code>Github > Settings > Personnal Access Token</code> puis <code>Generate new token</code>. Ce token est à ajouter à l'url <code>https://api.github.com/..?access_token={token}&q={query}</code>.<br><br>Il est possible d'effectuer une requête ajax à l'aide des objets <a target=\"_blank\" href=\"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest\">xhr</a>, <a target=\"_blank\" href=\"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch\">fetch</a> ou <a target=\"_blank\" href=\"http://api.jquery.com/jquery.ajax/\">jQuery.ajax</a>. Ajax est une technologie utilisée pour requêter un serveur de façon asynchrone. Pour effectuer une requête vers un serveur, trois informations sont nécessaires, son adresse <code>http://..</code>, l'action à réaliser, <code>GET</code> (<i>lecture</i>), <code>POST</code> (<i>création</i>), <code>PUT</code> (<i>modification</i>) ou <code>DELETE</code> (<i>suppression</i>) et la fonction à invoquer lorsque le serveur aura répondu.",
                solved: "/* remplacer {token} par le token github généré */<br><br>/* --------------------- xhr --------------------- */<br><br>var search = document.querySelector('.search');<br>var input = search.querySelector('input');<br>var results = search.querySelector('.results');<br><br>var ajax = function(method, url, fn) {<br>  var xhr = new XMLHttpRequest();<br>  xhr.addEventListener('load', function() {<br>    if (xhr.readyState === 4) {<br>      fn(JSON.parse(xhr.response));<br>    }<br>  });<br>  xhr.open(method, url);<br>  xhr.send();<br>}<br><br>input.addEventListener('keypress', function(event) {<br>  if(event.keyCode !== 13 || !input.value) {<br>    return<br>  }<br><br>  ajax('GET', 'https://api.github.com/search/repositories?access_token={token}&q=' + input.value, function(data) {<br>    results.innerHTML = '';<br>    results.classList.toggle('visible', data.items.length > 0);<br><br>    for (var i = 0; i < Math.min(data.items.length, 3); i++) {<br>      results.innerHTML += '&lt;span class=\"result\"&gt;' + data.items[i].full_name + '&lt;/span&gt;';<br>    }<br>  });<br>});<br><br>/* -------------------- fetch -------------------- */<br><br>var search = document.querySelector('.search');<br>var input = search.querySelector('input');<br>var results = search.querySelector('.results');<br><br>input.addEventListener('keypress', function(event) {<br>  if(event.keyCode !== 13 || !input.value) {<br>    return<br>  }<br><br>  fetch('https://api.github.com/search/repositories?access_token={token}&q=' + input.value)<br>  .then(function(response) {<br>    return response.json();<br>  })<br>  .then(function(data) {<br>    results.innerHTML = '';<br>    results.classList.toggle('visible', data.items.length > 0);<br>      for (var i = 0; i < Math.min(data.items.length, 3); i++) {<br>      results.innerHTML += '&lt;span class=\"result\"&gt;' + data.items[i].full_name + '&lt;/span&gt;';<br>    }<br>  });<br>});",
                dom: function() {
                    return search.bind(search);
                },
                answer: function() {
                    var input = document.querySelector('.search input');
                    var promise = httpWait();

                    input.value = 'hetic';
                    keypress(input, 13);

                    return promise.then(function(value) {
                        var results = document.querySelectorAll('.search .result');
                        if (results.length !== 3)
                            this.warn = this.warn || "Des résultats doivent apparaitre dans <code>.results</code> et être limités à 3";
                        if (elContains(results[0], 'hetic') !== true)
                            this.warn = this.warn || "Le premier résultat doit porter le nom d'un projet github";
                        return !this.warn;
                    }.bind(this));
                }
            },
            {
                title: "Afficher un indicateur de chargement",
                description: "Ajouter la classe <code>loading</code> sur <code>.search</code> lorsque l'appel ajax est lancé, la retirer lorsque le serveur répond.",
                solved: "var search = document.querySelector('.favorites .search');<br>var input = search.querySelector('input');<br>var results = search.querySelector('.results');<br><br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode !== 13 || !input.value) {<br>    return<br>  }<br><br>  search.classList.add('loading');<br><br>  fetch('https://api.github.com/search/repositories?access_token={token}&q=' + input.value)<br>  .then(function(response) {<br>    search.classList.remove('loading');<br>    return response.json();<br>  })<br>  .then(function(data) {<br>    results.innerHTML = '';<br>    results.classList.toggle('visible', data.items.length > 0);<br>    for (var i = 0; i < Math.min(data.items.length, 3); i++) {<br>      results.innerHTML += '&lt;span class=\"result\"&gt;' + data.items[i].full_name + '&lt;/span&gt;';<br>    }<br>  });<br>});",
                dom: function() {
                    return search.bind(search);
                },
                answer: function() {
                    var search = document.querySelector('.search');
                    var input = search.querySelector('input');
                    var promise = httpWait();

                    input.value = 'hetic';
                    keypress(input, 13);

                    if (elHasClass(search, 'loading') !== true)
                        this.warn = this.warn || "La classe <code>loading</code> n'est pas ajoutée lors de l'appel au serveur";

                    return promise.then(function() {
                        if (elHasClass(search, 'loading') !== false)
                            this.warn = this.warn || "La classe <code>loading</code> n'est pas retirée après la réponse du serveur";

                        var results = document.querySelectorAll('.search .result');
                        if (results.length !== 3)
                            this.warn = this.warn || "Des résultats doivent apparaitre dans <code>.results</code> et être limités à 3";

                        return !this.warn;
                    }.bind(this));
                }
            },
            {
                title: "Afficher la liste des favoris",
                description: "Effectuer un appel ajax vers <code>https://api.github.com/user/starred</code> (<i>avec un access_token</i>) au clic sur <code>.fetch</code> (<i>le bouton Actualiser</i>).<br><br>Afficher les résultats dans <code>.list</code> chacun sous la forme <code>&lt;div class=\"item ui checkbox\"&gt;&lt;input type=\"checkbox\" id=\"{full_name}\"&gt;&lt;label for=\"{full_name}\"&gt;{full_name}&lt;/label&gt;&lt;/div&gt;</code>. Afficher le nombre total de résultats dans <code>.count</code>.",
                solved: "var search = document.querySelector('.favorites .search');<br>var input = search.querySelector('input');<br>var results = search.querySelector('.results');<br><br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode !== 13 || !input.value) {<br>    return<br>  }<br><br>  search.classList.add('loading');<br><br>  fetch('https://api.github.com/search/repositories?access_token={token}&q=' + input.value)<br>  .then(function(response) {<br>    search.classList.remove('loading');<br>    return response.json();<br>  })<br>  .then(function(data) {<br>    results.innerHTML = '';<br>    results.classList.toggle('visible', data.items.length > 0);<br>    for (var i = 0; i < Math.min(data.items.length, 3); i++) {<br>      results.innerHTML += '&lt;span class=\"result\"&gt;' + data.items[i].full_name + '&lt;/span&gt;';<br>    }<br>  });<br>});<br><br>var list = document.querySelector('.list');<br>var refresh = document.querySelector('.fetch');<br>var count = document.querySelector('.count');<br><br>var render = function() {<br>  fetch('https://api.github.com/user/starred?access_token={token}')<br>  .then(function(response) {<br>    return response.json();<br>  })<br>  .then(function(starred) {<br>    count.value = starred.length;<br>    list.innerHTML = '';<br>    for (var i = 0; i < starred.length; i++) {<br>      list.innerHTML += '&lt;div class=\"item ui checkbox\"&gt;&lt;input type=\"checkbox\" id=\"' + starred[i].full_name + '\"&gt;&lt;label for=\"' + starred[i].full_name + '\"&gt;' + starred[i].full_name + '&lt;/label&gt;&lt;/div&gt;';<br>    }<br>  });<br>}<br><br>refresh.addEventListener('click', render);",
                excerpt: "Pour accéder aux repositories favoris, github requiert des autorisations supplémentaires. Dans l'écran <code>Personnal Access Tokens</code> il est nécessaire d'ajouter le scope <code>repo</code> au token précédemment créé.",
                dom: function() {
                    return search.bind(search);
                },
                answer: function() {
                    var refresh = document.querySelector('.fetch');
                    var promise = httpWait();

                    refresh.click();

                    return promise.then(function() {
                        var count = document.querySelector('.count');
                        var items = document.querySelectorAll('.list .item');

                        if (count.value === "" || +count.value !== items.length)
                            this.warn = this.warn || "Le compte de <code>.count</code> et le nombre d'items dans <code>.list</code> doit être le même.";

                        return !this.warn;
                    }.bind(this));
                }
            },
            {
                title: "Afficher un indicateur de chargement",
                description: "Ajouter la classe <code>loading</code> sur <code>.fetch</code> lorsque l'appel ajax est lancé, la retirer lorsque le serveur répond.",
                solved: "var search = document.querySelector('.favorites .search');<br>var input = search.querySelector('input');<br>var results = search.querySelector('.results');<br><br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode !== 13 || !input.value) {<br>    return<br>  }<br><br>  search.classList.add('loading');<br><br>  fetch('https://api.github.com/search/repositories?access_token={token}&q=' + input.value)<br>  .then(function(response) {<br>    search.classList.remove('loading');<br>    return response.json();<br>  })<br>  .then(function(data) {<br>    results.innerHTML = '';<br>    results.classList.toggle('visible', data.items.length > 0);<br>    for (var i = 0; i < Math.min(data.items.length, 3); i++) {<br>      results.innerHTML += '&lt;span class=\"result\"&gt;' + data.items[i].full_name + '&lt;/span&gt;';<br>    }<br>  });<br>});<br><br>var list = document.querySelector('.list');<br>var refresh = document.querySelector('.fetch');<br>var count = document.querySelector('.count');<br><br>var render = function() {<br>  return fetch('https://api.github.com/user/starred?access_token={token}')<br>  .then(function(response) {<br>    return response.json();<br>  })<br>  .then(function(starred) {<br>    count.value = starred.length;<br>    list.innerHTML = '';<br>    for (var i = 0; i < starred.length; i++) {<br>      list.innerHTML += '&lt;div class=\"item ui checkbox\"&gt;&lt;input type=\"checkbox\" id=\"' + starred[i].full_name + '\"&gt;&lt;label for=\"' + starred[i].full_name + '\"&gt;' + starred[i].full_name + '&lt;/label&gt;&lt;/div&gt;';<br>    }<br>  });<br>}<br><br>refresh.addEventListener('click', function() {<br>  refresh.classList.add('loading');<br><br>  render().then(function() {<br>    refresh.classList.remove('loading');<br>  });<br>});",
                excerpt: "Une <a target=\"_blank\" href=\"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise\">promesse</a> est le résultat futur d'une action asynchrone. Les promesses sont souvent utilisées pour chainer plusieurs appels ajax ou s'abonner au résultat qu'elles renveront lorsque le serveur aura répondu. Les objets <a target=\"_blank\" href=\"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch\">fetch</a> et <a target=\"_blank\" href=\"http://api.jquery.com/jquery.ajax/\">jQuery.ajax</a> proposent de récupérer la réponse du serveur avec une promesse.<pre><code>fetch('https://api.github.com/..')<br>.then(function(response) {<br>  return response.json();<br>})<br>.then(function(data) {<br>  console.log(data);<br>});</code></pre>La méthode <code>then</code> permet de s'abonner au résultat futur, et sera invoquée une seule fois lorsque le serveur aura répondu. Il est possible de retourner une promesse à l'intérieur d'une méthode <code>then</code> et d'ainsi chainer les promesses. La méthode <code>catch</code> permet de capturer les erreurs levées par n'importe laquelle des promesses de la chaine.",
                dom: function() {
                    return search.bind(search);
                },
                answer: function() {
                    var refresh = document.querySelector('.fetch');
                    var promise = httpWait();

                    refresh.click();

                    if (elHasClass(refresh, 'loading') !== true)
                        this.warn = this.warn || "La classe <code>loading</code> n'est pas ajoutée lors de l'appel au serveur";

                    return promise.then(function() {
                        var count = document.querySelector('.count');
                        var items = document.querySelectorAll('.list .item');

                        if (+count.value !== items.length)
                            this.warn = this.warn || "Le compte de <code>.count</code> et le nombre d'items dans <code>.list</code> doit être le même.";

                        if (elHasClass(refresh, 'loading') !== false)
                            this.warn = this.warn || "La classe <code>loading</code> n'est pas retirée après la réponse du serveur";

                        return !this.warn;
                    }.bind(this));
                }
            },
            {
                title: "Ajouter un favoris",
                description: "Au clic sur un résultat <code>.result</code> (<i>après une recherche</i>), effectuer un appel ajax <code>https://api.github.com/user/starred/{full_name}</code> avec la méthode <code>PUT</code> pour l'ajouter aux favoris. Mettre à jour la liste de favoris en fonction.",
                excerpt: "Attention, les réponses github ont un cache de plusieurs dizaines de secondes, le navigateur mémorise la dernière réponse et la retourne à chaque appel avant que ce laps ne soit écoulé. <code>https://api.github.com/..?bust=' + Date.now()</code> le force a appeler le serveur, en lui faisant croire qu'il s'agit d'une nouvelle route pour qu'il ignore son cache.<br><br>Lors d'appels <code>POST</code> et <code>PUT</code>, il est également possible d'envoyer un body sous forme de texte ou de <code>JSON</code> au serveur pour enregistrer des informations.",
                solved: "var search = document.querySelector('.favorites .search');<br>var input = search.querySelector('input');<br>var results = search.querySelector('.results');<br><br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode !== 13 || !input.value) {<br>    return<br>  }<br><br>  search.classList.add('loading');<br><br>  fetch('https://api.github.com/search/repositories?access_token={token}&q=' + input.value)<br>  .then(function(response) {<br>    search.classList.remove('loading');<br>    return response.json();<br>  })<br>  .then(function(data) {<br>    results.innerHTML = '';<br>    results.classList.toggle('visible', data.items.length > 0);<br>    for (var i = 0; i < Math.min(data.items.length, 3); i++) {<br>      results.innerHTML += '&lt;span class=\"result\"&gt;' + data.items[i].full_name + '&lt;/span&gt;';<br>    }<br>  });<br>});<br><br>results.addEventListener('click', function(event) {<br>  if (!event.target.matches('.result')) {<br>    return;<br>  }<br>  results.classList.remove('visible');<br>  fetch('https://api.github.com/user/starred/' + event.target.innerHTML + '?access_token={token}', {<br>    method: 'PUT'<br>  }).then(render);<br>});<br><br>var list = document.querySelector('.list');<br>var refresh = document.querySelector('.fetch');<br>var count = document.querySelector('.count');<br><br>var render = function() {<br>  return fetch('https://api.github.com/user/starred?access_token={token}&bust=' + Date.now())<br>  .then(function(response) {<br>    return response.json();<br>  })<br>  .then(function(starred) {<br>    count.value = starred.length;<br>    list.innerHTML = '';<br>    for (var i = 0; i < starred.length; i++) {<br>      list.innerHTML += '&lt;div class=\"item ui checkbox\"&gt;&lt;input type=\"checkbox\" id=\"' + starred[i].full_name + '\"&gt;&lt;label for=\"' + starred[i].full_name + '\"&gt;' + starred[i].full_name + '&lt;/label&gt;&lt;/div&gt;';<br>    }<br>  });<br>}<br><br>refresh.addEventListener('click', function() {<br>  refresh.classList.add('loading');<br><br>  render().then(function() {<br>    refresh.classList.remove('loading');<br>  });<br>});",
                dom: function() {
                    return search.bind(search);
                },
                answer: function() {
                    var refresh = document.querySelector('.fetch');
                    var initialCount = 0;
                    var promise = httpWait();
                    var token, added;

                    refresh.click();

                    return promise.then(function(url) {
                        token = getParameterByName(url, 'access_token');

                        promise = httpWait();

                        var search = document.querySelector('.search');
                        var input = search.querySelector('input');

                        input.value = 'beatles';
                        keypress(input, 13);

                        return promise;
                    }.bind(this))
                    .then(function() {
                        var results = document.querySelectorAll('.search .result');
                        if (results.length !== 3)
                            this.warn = this.warn || "Des résultats doivent apparaitre dans <code>.results</code> et être limités à 3";

                        added = results[0];

                        return fetch('https://api.github.com/user/starred/' + added.innerHTML + '?access_token=' + token, {
                            method: 'DELETE'
                        });
                    }.bind(this))
                    .then(function() {
                        promise = httpWait();
                        refresh.click();
                        return promise;
                    }.bind(this))
                    .then(function() {
                        var items = document.querySelectorAll('.list .item');
                        initialCount = +(document.querySelector('.count').value);

                        if (initialCount !== items.length)
                            this.warn = this.warn || "Le compte de <code>.count</code> et le nombre d'items dans <code>.list</code> doit être le même.";

                        promise = httpWait();

                        added.click();

                        return promise;
                    }.bind(this))
                    .then(function() {
                        var count = +(document.querySelector('.count').value);

                        if (count !== initialCount + 1)
                            this.warn = this.warn || "Le compte de <code>.count</code> doit être mis à jour à l'ajout d'un favoris.";
                    }.bind(this))
                    .then(function() {
                        return fetch('https://api.github.com/user/starred/' + added.innerHTML + '?access_token=' + token, {
                            method: 'DELETE'
                        });
                    }.bind(this))
                    .then(function() {
                        return !this.warn;
                    }.bind(this));
                }
            },
            {
                title: "Trier les favoris",
                description: "Au clic sur <code>.direction</code> modifier l'ordre de tri des favoris en rejouant la requête ajax de listing avec le paramètre d'url <code>direction</code> (<i>asc/desc</i>). Mettre à jour la liste de favoris en fonction.",
                solved: "var search = document.querySelector('.favorites .search');<br>var input = search.querySelector('input');<br>var results = search.querySelector('.results');<br><br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode !== 13 || !input.value) {<br>    return<br>  }<br><br>  search.classList.add('loading');<br><br>  fetch('https://api.github.com/search/repositories?access_token={token}&q=' + input.value)<br>  .then(function(response) {<br>    search.classList.remove('loading');<br>    return response.json();<br>  })<br>  .then(function(data) {<br>    results.innerHTML = '';<br>    results.classList.toggle('visible', data.items.length > 0);<br>    for (var i = 0; i < Math.min(data.items.length, 3); i++) {<br>      results.innerHTML += '&lt;span class=\"result\"&gt;' + data.items[i].full_name + '&lt;/span&gt;';<br>    }<br>  });<br>});<br><br>results.addEventListener('click', function(event) {<br>  if (!event.target.matches('.result')) {<br>    return;<br>  }<br>  results.classList.remove('visible');<br>  fetch('https://api.github.com/user/starred/' + event.target.innerHTML + '?access_token={token}', {<br>    method: 'PUT'<br>  }).then(render);<br>});<br><br>var list = document.querySelector('.list');<br>var refresh = document.querySelector('.fetch');<br>var count = document.querySelector('.count');<br><br>var direction = 'desc';<br>var render = function() {<br>  return fetch('https://api.github.com/user/starred?access_token={token}&bust=' + Date.now() + '&direction=' + direction)<br>  .then(function(response) {<br>    return response.json();<br>  })<br>  .then(function(starred) {<br>    count.value = starred.length;<br>    list.innerHTML = '';<br>    for (var i = 0; i < starred.length; i++) {<br>      list.innerHTML += '&lt;div class=\"item ui checkbox\"&gt;&lt;input type=\"checkbox\" id=\"' + starred[i].full_name + '\"&gt;&lt;label for=\"' + starred[i].full_name + '\"&gt;' + starred[i].full_name + '&lt;/label&gt;&lt;/div&gt;';<br>    }<br>  });<br>}<br><br>refresh.addEventListener('click', function() {<br>  refresh.classList.add('loading');<br><br>  render().then(function() {<br>    refresh.classList.remove('loading');<br>  });<br>});<br><br>document.querySelector('.direction').addEventListener('click', function() {<br>  var i = this.querySelector('i');<br>  i.classList.toggle('ascending');<br>  i.classList.toggle('descending');<br>  direction = (direction === 'desc') ? 'asc' : 'desc';<br><br>  this.classList.add('loading');<br>  render().then(function() {<br>    this.classList.remove('loading');<br>  }.bind(this));<br>});",
                dom: function() {
                    return search.bind(search);
                },
                answer: function() {
                    var refresh = document.querySelector('.fetch');
                    var direction = document.querySelector('.direction');
                    var promise = httpWait();

                    refresh.click();

                    return promise.then(function() {
                        var count = document.querySelector('.count');
                        var items = document.querySelectorAll('.list .item');

                        if (+count.value !== items.length)
                            this.warn = this.warn || "Le compte de <code>.count</code> et le nombre d'items dans <code>.list</code> doit être le même.";

                        promise = httpWait();

                        direction.click();

                        return promise;
                    }.bind(this))
                    .then(function(url) {
                        var dir = getParameterByName(url, 'direction');

                        if (dir !== 'asc')
                            this.warn = this.warn || "Au premier clic sur <code>.direction</code> le sens doit être <code>asc</code>.";

                        var items = document.querySelectorAll('.list .item');

                        promise = httpWait();

                        direction.click();

                        return promise;
                    }.bind(this))
                    .then(function(url) {
                        var dir = getParameterByName(url, 'direction');

                        if (dir !== 'desc')
                            this.warn = this.warn || "Au second clic sur <code>.direction</code> le sens doit être <code>desc</code>.";

                        return !this.warn;
                    }.bind(this));
                }
            },
            {
                title: "Supprimer des favoris",
                description: "Lorsque des <code>checkbox</code> sont cochées, au clic sur <code>.remove</code> effectuer un appel ajax <code>https://api.github.com/user/starred/{full_name}</code> avec la méthode <code>DELETE</code> pour supprimer ces favoris. Mettre à jour la liste de favoris en fonction.",
                excerpt: "La méthode <code>DELETE</code> permet de supprimer une resource à la fois.",
                solved: "var search = document.querySelector('.favorites .search');<br>var input = search.querySelector('input');<br>var results = search.querySelector('.results');<br><br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode !== 13 || !input.value) {<br>    return<br>  }<br><br>  search.classList.add('loading');<br><br>  fetch('https://api.github.com/search/repositories?access_token={token}&q=' + input.value)<br>  .then(function(response) {<br>    search.classList.remove('loading');<br>    return response.json();<br>  })<br>  .then(function(data) {<br>    results.innerHTML = '';<br>    results.classList.toggle('visible', data.items.length > 0);<br>    for (var i = 0; i < Math.min(data.items.length, 3); i++) {<br>      results.innerHTML += '&lt;span class=\"result\"&gt;' + data.items[i].full_name + '&lt;/span&gt;';<br>    }<br>  });<br>});<br><br>results.addEventListener('click', function(event) {<br>  if (!event.target.matches('.result')) {<br>    return;<br>  }<br>  results.classList.remove('visible');<br>  fetch('https://api.github.com/user/starred/' + event.target.innerHTML + '?access_token={token}', {<br>    method: 'PUT'<br>  }).then(render);<br>});<br><br>var list = document.querySelector('.list');<br>var refresh = document.querySelector('.fetch');<br>var count = document.querySelector('.count');<br><br>var direction = 'desc';<br>var render = function() {<br>  return fetch('https://api.github.com/user/starred?access_token={token}&bust=' + Date.now() + '&direction=' + direction)<br>  .then(function(response) {<br>    return response.json();<br>  })<br>  .then(function(starred) {<br>    count.value = starred.length;<br>    list.innerHTML = '';<br>    for (var i = 0; i < starred.length; i++) {<br>      list.innerHTML += '&lt;div class=\"item ui checkbox\"&gt;&lt;input type=\"checkbox\" id=\"' + starred[i].full_name + '\"&gt;&lt;label for=\"' + starred[i].full_name + '\"&gt;' + starred[i].full_name + '&lt;/label&gt;&lt;/div&gt;';<br>    }<br>  });<br>}<br><br>refresh.addEventListener('click', function() {<br>  refresh.classList.add('loading');<br><br>  render().then(function() {<br>    refresh.classList.remove('loading');<br>  });<br>});<br><br>document.querySelector('.direction').addEventListener('click', function() {<br>  var i = this.querySelector('i');<br>  i.classList.toggle('ascending');<br>  i.classList.toggle('descending');<br>  direction = (direction === 'desc') ? 'asc' : 'desc';<br><br>  this.classList.add('loading');<br>  render().then(function() {<br>    this.classList.remove('loading');<br>  }.bind(this));<br>});<br><br>var remove = document.querySelector('.remove');<br>remove.addEventListener('click', function(event) {<br>  remove.classList.add('loading');<br><br>  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');<br>  var promises = [];<br>  for (var i = 0; i < checkboxes.length; i++) {<br>    var promise = fetch('https://api.github.com/user/starred/' + checkboxes[i].id + '?access_token={token}', {<br>      method: 'DELETE'<br>    });<br>    promises.push(promise);<br>  }<br><br>  Promise.all(promises)<br>  .then(render)<br>  .then(function() {<br>    remove.classList.remove('loading');<br>  });<br>});",
                dom: function() {
                    return search.bind(search);
                },
                answer: function() {
                    var refresh = document.querySelector('.fetch');
                    var initialCount = 0;
                    var promise = httpWait();
                    var token, added;

                    refresh.click();

                    return promise.then(function(url) {
                        token = getParameterByName(url, 'access_token');

                        promise = httpWait();

                        var search = document.querySelector('.search');
                        var input = search.querySelector('input');

                        input.value = 'beatles';
                        keypress(input, 13);

                        return promise;
                    }.bind(this))
                    .then(function() {
                        var results = document.querySelectorAll('.search .result');
                        if (results.length !== 3)
                            this.warn = this.warn || "Des résultats doivent apparaitre dans <code>.results</code> et être limités à 3";

                        added = results[0];

                        return fetch('https://api.github.com/user/starred/' + added.innerHTML + '?access_token=' + token, {
                            method: 'DELETE'
                        });
                    }.bind(this))
                    .then(function() {
                        promise = httpWait();
                        refresh.click();
                        return promise;
                    }.bind(this))
                    .then(function() {
                        var items = document.querySelectorAll('.list .item');
                        initialCount = +(document.querySelector('.count').value);

                        if (initialCount !== items.length)
                            this.warn = this.warn || "Le compte de <code>.count</code> et le nombre d'items dans <code>.list</code> doit être le même.";

                        promise = httpWait();

                        added.click();

                        return promise;
                    }.bind(this))
                    .then(function() {
                        var count = +(document.querySelector('.count').value);

                        if (count !== initialCount + 1)
                            this.warn = this.warn || "Le compte de <code>.count</code> doit être mis à jour à l'ajout d'un favoris.";
                    }.bind(this))
                    .then(function() {
                        var checkbox = document.querySelector('input[id="' + added.innerHTML + '"]');
                        if (!checkbox)
                            this.warn = this.warn || "Une checkbox avec l'id ajouté doit être présente dans les favoris.";
                        else
                            checkbox.checked = true;

                        promise = httpWait();

                        var remove = document.querySelector('.remove');
                        remove.click();
                        return promise;
                    }.bind(this))
                    .then(function() {
                        var count = +(document.querySelector('.count').value);

                        if (count !== initialCount)
                            this.warn = this.warn || "Le compte de <code>.count</code> doit être mis à jour à la suppression d'un favoris.";

                        return !this.warn;
                    }.bind(this));
                }
            }
        ]
    }, {
        title: "La programmation objet",
        description: "La programmation orientée objet propose de définir un ensemble de concepts, les classes, dont il est possible de manipuler des exemplaires, les objets. JavaScript est un langage à prototype (contrairement aux langages objets classiques, des attributs peuvent être ajoutés aux objets, même si la classe ne les déclare pas).<br><br>Ce chapitre présente la réalisation (corsée) d'un puzzle rpg au tour par tour.",
        color: "teal",
        steps: [
            {
                title: "Créer une classe",
                description: "Créer une classe <code>Player</code> avec un attribut <code>name</code>, de façon à ce que <code>new Player(1)</code> crée un objet avec l'attrbut <code>name</code> initialisé à <code>1</code>.",
                excerpt: "Dans ce jeu deux adversaires s'affrontent, et jouent deux coups à tour de rôle. Avec un coup, un joueur peut déplacer un pion d'une colonne vers une autre. Si plusieurs pions sont sur la même colonne, seul le plus éloigné du territoire adverse peut être déplacé. Et, quand un pion arrive dans une colonne, il arrive dans la première ligne disponible, la plus éloignée du territoire adverse.<br><br>Dans les étapes suivantes, deux objets de la classe <code>Player</code> vont être utilisés pour gérer les actions des deux joueurs ; la classe va définir un comportement similaire, unique pour les deux joueurs, le premier de ses objets gérera le premier joueur, et le second, le second joueur.<br><br>Il est possible (et souvent souhaitable) de structurer un programme à l'aide de composants au comportement clairement défini. Une classe est un modèle (comme un moule à pâtisserie) qui définit un ensemble d'attributs (la taille, les fruits utilisés) et de méthodes (découper, manger). <pre><code>var Player = function(name) {<br>  this.name = name;<br>}<br>var player = new Player(1);</code></pre>Par convention les classes commencent par une majuscule et les variables / instances par une minuscules.",
                solved: "var Player = function(name) {<br>  this.name = name;<br>};",
                dom: function() {
                    return might.bind(might);
                },
                answer: function() {
                    var player = new Player(1);
                    if (player.name !== 1)
                        this.warn = this.warn || "L'attribut <code>name</code> de la classe <code>Player</code> doit être initialisé avec son premier paramètre de constructeur.";

                    return !this.warn;
                }
            },
            {
                title: "Modifier le constructeur d'une classe",
                description: "Modifier le constructeur de la classe <code>Player</code>, afin que le <code>name</code> passé en paramètre soit utilisé également pour initialiser un attribut <code>table</code> avec la <code>table[data-p=..]</code> du dom correspondante. Les deux tables disposent chacune d'un attribut <code>data-p</code> différent avec le « nom » du joueur (1 ou 2).",
                excerpt: "Le constructeur d'une classe peut être utilisé pour configurer l'objet qu'il créé. Ici, deux objet <code>Player</code> vont être créés, ils partageront le même comportement, mais l'un gérera la <code>table</code> du haut (joueur 1), l'autre la <code>table</code> du bas (joueur 2).",
                solved: "var Player = function(name) {<br>  this.name = name;<br>  this.table = document.querySelector('table[data-p=\"' + name + '\"]');<br>};",
                dom: function() {
                    return might.bind(might);
                },
                answer: function() {
                    var player = new Player(1);
                    if (player.table.querySelectorAll('td').length !== 24)
                        this.warn = this.warn || "L'attribut <code>table</code> de la classe <code>Player</code> doit être initialisé avec son premier paramètre de constructeur.";

                    return !this.warn;
                }
            }, {
                title: "Modifier le prototype d'une classe",
                description: "Modifier le prototype de la classe <code>Player</code>, en lui ajoutant la méthode <code>get(x, y)</code> pour récupérer un <code>td</code> de sa <code>table</code> par ses coordonnées x,y. Chaque <code>td</code> dispose d'attributs <code>data-x</code> et <code>data-y</code> pour faciliter cette recherche.",
                excerpt: "Dans les étapes suivantes, afin de déplacer les pions, il sera nécessaire de pouvoir récupérer chaque case du territoire d'un joueur et de savoir si elle libre ou occupée. La méthode <code>get</code> est créée pour cela.<br><br>Pour ajouter un comportement commun à chaque objet d'une classe, il est possible de modifier le prototype de celle-ci. De cette façon, tous les objets créés à partir de cette clase, disposeront de la même fonction.<pre><code>Player.prototype.get = function(x, y) {<br>  return this.table.querySelector('[data-x=\"' + x + '\"]');<br>}</code></pre>",
                solved: "var Player = function(name) {<br>  this.name = name;<br>  this.table = document.querySelector('table[data-p=\"' + name + '\"]');<br>};<br><br>Player.prototype = {<br>  get: function(x, y) {<br>    return this.table.querySelector('[data-x=\"' + x + '\"][data-y=\"' + y + '\"]') || {};<br>  }<br>};",
                dom: function() {
                    return might.bind(might);
                },
                answer: function() {
                    var player = new Player(1);
                    if (player.get(1, 1).className !== 'peon')
                        this.warn = this.warn || "La case 1,1 du joueur 1 contient la classe <code>peon</code>. La méthode <code>new Player(1).get(1, 1)</code> doit retourner ce <code>td</code>.";
                    if (player.get(2, 1).className !== 'block')
                        this.warn = this.warn || "La case 2,1 du joueur 1 contient la classe <code>block</code>. La méthode <code>new Player(1).get(2, 1)</code> doit retourner ce <code>td</code>.";

                    return !this.warn;
                }
            }, {
                title: "Modifier le prototype d'une classe",
                description: "Modifier le prototype de la classe <code>Player</code>, en lui ajoutant la méthode <code>set(x, y, className)</code> pour modifier la classe d'un <code>td</code> de sa <code>table</code> en le recherchant par ses coordonnées x,y et en remplacant sa classe par className.",
                excerpt: "Dans les étapes suivantes, afin de déplacer les pions, il sera nécessaire de pouvoir modifier une case du territoire d'un joueur, celle dont il vient devra ne plus avoir de classe (pour apparaitre vide), celle ou il arrive devra obtenir la classe correspondante, <code>.peon</code>, <code>.block</code> ou <code>.attack</code>. La méthode <code>set</code> est créée pour cela.",
                solved: "var Player = function(name) {<br>  this.name = name;<br>  this.table = document.querySelector('table[data-p=\"' + name + '\"]');<br>};<br><br>Player.prototype = {<br>  get: function(x, y) {<br>    return this.table.querySelector('[data-x=\"' + x + '\"][data-y=\"' + y + '\"]') || {};<br>  },<br>  set: function(x, y, className) {<br>    var td = this.get(x, y);<br>    td.className = className;<br>  }<br>};",
                dom: function() {
                    return might.bind(might);
                },
                answer: function() {
                    var player = new Player(1);
                    if (player.get(1, 1).className !== 'peon')
                        this.warn = this.warn || "La case 1,1 du joueur 1 contient la classe <code>peon</code>. La méthode <code>new Player(1).get(1, 1)</code> doit retourner ce <code>td</code>.";

                    player.set(2, 1, 'peon');
                    if (player.get(2, 1).className !== 'peon')
                        this.warn = this.warn || "La case 2,1 du joueur 1 ne contient pas la classe <code>peon</code>. La méthode <code>new Player(1).set(2, 1, 'peon')</code> doit lui ajouter.";

                    return !this.warn;
                }
            }, {
                title: "Modifier le prototype d'une classe",
                description: "Modifier le prototype de la classe <code>Player</code>, en lui ajoutant la méthode <code>free(x)</code> qui retourne l'index de la première ligne disponible (de 1 à 4) pour cette colonne ou <code>undefined</code> sinon. Cette méthode ne gère pas le clic sur la colonne, elle indique juste, pour une colonne donnée, quelle est la première ligne disponible.",
                excerpt: "Dans les étapes suivantes, au clic sur une colonne, le dernier pion de la colonne (le plus loin du territoire adverse) pourra être déplacé vers une autre colonne. La méthode <code>free</code> permettra de connaître le premier emplacement disponible de la colonne d'arrivée du déplacement.",
                solved: "var Player = function(name) {<br>  this.name = name;<br>  this.table = document.querySelector('table[data-p=\"' + name + '\"]');<br>};<br><br>Player.prototype = {<br>  get: function(x, y) {<br>    return this.table.querySelector('[data-x=\"' + x + '\"][data-y=\"' + y + '\"]') || {};<br>  },<br>  set: function(x, y, className) {<br>    var td = this.get(x, y);<br>    td.className = className;<br>  },<br>  free: function(x) {<br>    for (var y = 1; y <= 4; y++) {<br>      var td = this.get(x, y);<br>      if (!td.className) {<br>        return y;<br>      }<br>    }<br>  },<br>  last: function(x) {<br>    var i = this.free(x);<br>    if (i) {<br>      return i - 1;<br>    } else {<br>      return 4;<br>    }<br>  }<br>};",
                dom: function() {
                    return might.bind(might);
                },
                answer: function() {
                    var player = new Player(1);
                    if (player.free(1) !== 3)
                        this.warn = this.warn || "La colonne 1 est occupée jusqu'en case 3, la méthode <code>free(1)</code> doit retourner <code>3</code>.";

                    if (player.free(2) !== 2)
                        this.warn = this.warn || "La colonne 2 est occupée jusqu'en case 2, la méthode <code>free(2)</code> doit retourner <code>2</code>.";

                    if (player.free(3) !== 1)
                        this.warn = this.warn || "La colonne 3 est inoccupée, la méthode <code>free(3)</code> doit retourner <code>1</code>.";

                    if (player.free(4) !== 3)
                        this.warn = this.warn || "La colonne 4 est occupée jusqu'en case 3, la méthode <code>free(4)</code> doit retourner <code>3</code>.";

                    return !this.warn;
                }
            }, {
                title: "Modifier le prototype d'une classe",
                description: "Modifier le prototype de la classe <code>Player</code>, en lui ajoutant la méthode <code>last(x)</code> qui retourne l'indice de la dernière ligne occupée (de 1 à 4) pour cette colonne ou <code>undefined</code> sinon.",
                excerpt: "Dans les étapes suivantes, au clic sur une colonne, le dernier pion de la colonne (le plus loin du territoire adverse) pourra être déplacé vers une autre colonne. La méthode <code>last</code> permettra de connaître le dernier emplacement occupé de la colonne de départ du déplacement.",
                solved: "var Player = function(name) {<br>  this.name = name;<br>  this.table = document.querySelector('table[data-p=\"' + name + '\"]');<br>};<br><br>Player.prototype = {<br>  get: function(x, y) {<br>    return this.table.querySelector('[data-x=\"' + x + '\"][data-y=\"' + y + '\"]') || {};<br>  },<br>  set: function(x, y, className) {<br>    var td = this.get(x, y);<br>    td.className = className;<br>  },<br>  free: function(x) {<br>    for (var y = 1; y <= 4; y++) {<br>      var td = this.get(x, y);<br>      if (!td.className) {<br>        return y;<br>      }<br>    }<br>  },<br>  last: function(x) {<br>    var y = this.free(x);<br>    if (y) {<br>      return y - 1;<br>    } else {<br>      return 4;<br>    }<br>  }<br>};",
                dom: function() {
                    return might.bind(might);
                },
                answer: function() {
                    var player = new Player(1);
                    if (player.last(3) !== 0)
                        this.warn = this.warn || "La colonne 3 est inoccupée, la méthode <code>last(3)</code> doit retourner <code>0</code>.";

                    if (player.last(4) !== 2)
                        this.warn = this.warn || "La colonne 4 est occupée jusqu'en case 2, la méthode <code>last(4)</code> doit retourner <code>2</code>.";

                    if (player.last(5) !== 1)
                        this.warn = this.warn || "La colonne 5 est occupée jusqu'en case 1, la méthode <code>last(5)</code> doit retourner <code>1</code>.";

                    return !this.warn;
                }
            }, {
                title: "Commencer la partie",
                description: "Créer un dictionnaire <code>game</code> pour représenter la partie. Lui ajouter l'attribut <code>player</code> (le joueur actif) initialisé avec <code>new Player(1)</code>, l'attribut <code>moves</code> (le nombre de coups du joueur actif) intialisé à 2 et la méthode <code>select(x)</code> qui récupère (à l'aide de <code>this.player.last(x)</code>) la dernière case contenant un pion et la mémorise dans un attribut <code>memo</code> au format <code>{x:.., y:..}</code>.<br><br>Ajouter un écouteur d'événement sur tous les <code>td</code> des deux <code>table</code>, et, au clic sur l'un d'entre eux, récupérer sa colonne, x, et invoquer la méthode <code>game.select(x)</code>.",
                excerpt: "Dans les étapes suivantes, l'attribut <code>game.memo</code> permettra de déplacer le pion. ",
                solved: "var Player = function(name) {<br>  this.name = name;<br>  this.table = document.querySelector('table[data-p=\"' + name + '\"]');<br>};<br><br>Player.prototype = {<br>  get: function(x, y) {<br>    return this.table.querySelector('[data-x=\"' + x + '\"][data-y=\"' + y + '\"]') || {};<br>  },<br>  set: function(x, y, className) {<br>    var td = this.get(x, y);<br>    td.className = className;<br>  },<br>  free: function(x) {<br>    for (var y = 1; y <= 4; y++) {<br>      var td = this.get(x, y);<br>      if (!td.className) {<br>        return y;<br>      }<br>    }<br>  },<br>  last: function(x) {<br>    var y = this.free(x);<br>    if (y) {<br>      return y - 1;<br>    } else {<br>      return 4;<br>    }<br>  }<br>};<br><br>var player1 = new Player(1);<br><br>var game = {<br>  player: player1,<br>  moves: 2,<br>  memo: null,<br>  select: function(x) {<br>    var y = this.player.last(x);<br>    if (y) {<br>      this.memo = {x: x, y: y, className: this.player.get(x, y).className};<br>    }<br>  }<br>}<br><br>var tds = document.querySelectorAll('td');<br>for (var i = 0; i < tds.length; i++) {<br>  tds[i].addEventListener('click', function() {<br>    game.select(+this.dataset.x);<br>  });<br>}",
                dom: function() {
                    return might.bind(might);
                },
                answer: function() {
                    var player = new Player(1);
                    player.get(4, 1).click();
                    if (game.memo.x !== 4 || game.memo.y !== 2)
                        this.warn = this.warn || "Au clic sur le <code>td</code> en case 4,1 <code>game.memo</code> doit être initialisée à <code>{x: 4, y: 2}</code> car il s'agit de la dernière case avec une classe de cette colonne.";

                    return !this.warn;
                }
            }, {
                title: "Déplacer un péon",
                description: "Lors d'un clic sur une colonne occupée par un péon (bleu), puis sur une autre colonne, la dernière case occupée cliquée (c'est à dire <code>game.memo</code>), est vidée et déplacée vers la première case libre de la seconde colonne cliquée. Si les deux colonnes sont identiques, rien ne se passe. Si la seconde colonne n'a plus d'espace libre, rien ne se passe non plus.",
                solved: "var Player = function(name) {<br>  this.name = name;<br>  this.table = document.querySelector('table[data-p=\"' + name + '\"]');<br>};<br><br>Player.prototype = {<br>  get: function(x, y) {<br>    return this.table.querySelector('[data-x=\"' + x + '\"][data-y=\"' + y + '\"]') || {};<br>  },<br>  set: function(x, y, className) {<br>    var td = this.get(x, y);<br>    td.className = className;<br>  },<br>  free: function(x) {<br>    for (var y = 1; y <= 4; y++) {<br>      var td = this.get(x, y);<br>      if (!td.className) {<br>        return y;<br>      }<br>    }<br>  },<br>  last: function(x) {<br>    var y = this.free(x);<br>    if (y) {<br>      return y - 1;<br>    } else {<br>      return 4;<br>    }<br>  }<br>};<br><br>var player1 = new Player(1);<br><br>var game = {<br>  player: player1,<br>  moves: 2,<br>  memo: null,<br>  select: function(x) {<br>    var y = this.player.last(x);<br>    if (y) {<br>      this.memo = {x: x, y: y, className: this.player.get(x, y).className};<br>    }<br>  },<br>  move: function(x) {<br>    if (x === this.memo.x)<br>      return;<br><br>    var y = this.player.free(x);<br>    if (y) {<br>      this.player.set(x, y, this.memo.className);<br>      this.player.set(this.memo.x, this.memo.y, '');<br>      this.memo = null;<br>    }<br>  }<br>}<br><br>var tds = document.querySelectorAll('td');<br>for (var i = 0; i < tds.length; i++) {<br>  tds[i].addEventListener('click', function() {<br>    var x = +this.dataset.x;<br>    if (game.memo) {<br>      game.move(x);<br>    } else if (this.className) {<br>      game.select(x);<br>    }<br>  });<br>}",
                dom: function() {
                    return might.bind(might);
                },
                answer: function() {
                    var player = new Player(1);
                    player.get(5, 1).click();
                    player.get(3, 1).click();
                    if (player.get(3, 1).className !== 'peon' || player.get(5, 1).className !== '')
                        this.warn = this.warn || "Au clic sur le <code>td</code> en case 5,1 puis 3,1 leur classes doivent s'intervertir.";

                    player.get(3, 1).click();
                    player.get(2, 1).click();
                    if (player.get(2, 2).className !== 'peon' || player.get(3, 1).className !== '')
                        this.warn = this.warn || "Au clic sur le <code>td</code> en case 3,1 puis 2,1 la colonne 2 doit contenir 2 péons.";

                    return !this.warn;
                }
            }, {
                title: "Gérer le tour des joueurs",
                description: "Lors du déplacement d'une case, diminuer le nombre de coups du joueur en cours de 1. Si ce nombre tombe à 0, supprimer la classe <code>active</code> de sa <code>table</code> et l'ajouter à la <code>table</code> de l'autre joueur. Les méthodes pour effectuer ces modifications peuvent être ajoutées à la classe <code>Player</code>. Modifier le compteur de tour dans le <code>th</code> de la <code>table</code> des joueurs. Lorsque ce n'est pas son tour, les <code>td</code> de la <code>table</code> d'un joueur ne doivent pas être cliquable.",
                solved: "var Player = function(name) {<br>  this.name = name;<br>  this.table = document.querySelector('table[data-p=\"' + name + '\"]');<br>};<br><br>Player.prototype = {<br>  life: '♥♥',<br>  get: function(x, y) {<br>    return this.table.querySelector('[data-x=\"' + x + '\"][data-y=\"' + y + '\"]') || {};<br>  },<br>  set: function(x, y, className) {<br>    var td = this.get(x, y);<br>    td.className = className;<br>  },<br>  free: function(x) {<br>    for (var y = 1; y <= 4; y++) {<br>      var td = this.get(x, y);<br>      if (!td.className) {<br>        return y;<br>      }<br>    }<br>  },<br>  last: function(x) {<br>    var y = this.free(x);<br>    if (y) {<br>      return y - 1;<br>    } else {<br>      return 4;<br>    }<br>  },<br>  title: function(moves) {<br>    this.table.querySelector('th').innerHTML = moves + ' ' + this.life;<br>  },<br>  stop: function() {<br>    this.table.classList.remove('active');<br>  },<br>  start: function() {<br>    this.table.classList.add('active');<br>  }<br>};<br><br>var player1 = new Player(1);<br>var player2 = new Player(2);<br><br>var game = {<br>  player: player1,<br>  moves: 2,<br>  memo: null,<br>  select: function(x) {<br>    var y = this.player.last(x);<br>    if (y) {<br>      this.memo = {x: x, y: y, className: this.player.get(x, y).className};<br>    }<br>  },<br>  move: function(x) {<br>    if (x === this.memo.x)<br>      return;<br><br>    var y = this.player.free(x);<br>    if (y) {<br>      this.player.set(x, y, this.memo.className);<br>      this.player.set(this.memo.x, this.memo.y, '');<br>      this.memo = null;<br><br>      this.moves--;<br>      this.player.title(this.moves);<br>      if (this.moves === 0) {<br>        this.player.stop();<br><br>        this.player = this.opponent();<br>        this.player.start();<br>        this.moves = 2;<br>        this.player.title(this.moves);<br>      }<br>    }<br>  },<br>  opponent: function() {<br>    return this.player === player1 ? player2 : player1;<br>  },<br>  isActivePlayer(playerName) {<br>    return this.player.name === playerName;<br>  }<br>}<br><br>var tds = document.querySelectorAll('td');<br>for (var i = 0; i < tds.length; i++) {<br>  tds[i].addEventListener('click', function() {<br>    var table = this.closest('table');<br>    if (!game.isActivePlayer(+table.dataset.p)) {<br>      return;<br>    }<br><br>    var x = +this.dataset.x;<br>    if (game.memo) {<br>      game.move(x);<br>    } else if (this.className) {<br>      game.select(x);<br>    }<br>  });<br>}",
                dom: function() {
                    return might.bind(might);
                },
                answer: function() {
                    var player = new Player(1);
                    player.get(5, 1).click();
                    player.get(3, 1).click();
                    if (player.table.querySelector('th').innerHTML !== '1 ♥♥')
                        this.warn = this.warn || "Après 1 déplacement, le compteur du joueur 1 doit indiquer 1 ♥♥.";

                    player.get(3, 1).click();
                    player.get(4, 1).click();
                    if (player.table.querySelector('th').innerHTML !== '0 ♥♥')
                        this.warn = this.warn || "Après 2 déplacement, le compteur du joueur 1 doit indiquer 0 ♥♥.";

                    var opponent = new Player(2);
                    opponent.get(3, 1).click();
                    opponent.get(4, 1).click();
                    if (opponent.get(3, 1).className !== '' || opponent.get(4, 1).className !== 'peon')
                        this.warn = this.warn || "Au clic sur le <code>td</code> en case 3,1 puis 4,1 du joueur 2 la colonne 2 doit contenir 3 péons.";

                    if (opponent.table.querySelector('th').innerHTML !== '1 ♥♥')
                        this.warn = this.warn || "Après 1 déplacement, le compteur du joueur 2 doit indiquer 1 ♥♥.";

                    return !this.warn;
                }
            }, {
                title: "La tête brûlée",
                description: "Lorsqu'après un déplacement 3 péons (bleus) se retrouvent dans la même colonne, ils sont supprimés et une unique tête brûlée (un <code>td.attack</code>) les remplace à la place du premier d'entre eux (celui le plus proche du territoire adverse).",
                solved: "var Player = function(name) {<br>  this.name = name;<br>  this.table = document.querySelector('table[data-p=\"' + name + '\"]');<br>};<br><br>Player.prototype = {<br>  life: '♥♥',<br>  get: function(x, y) {<br>    return this.table.querySelector('[data-x=\"' + x + '\"][data-y=\"' + y + '\"]') || {};<br>  },<br>  set: function(x, y, className) {<br>    var td = this.get(x, y);<br>    td.className = className;<br>  },<br>  free: function(x) {<br>    for (var y = 1; y <= 4; y++) {<br>      var td = this.get(x, y);<br>      if (!td.className) {<br>        return y;<br>      }<br>    }<br>  },<br>  last: function(x) {<br>    var y = this.free(x);<br>    if (y) {<br>      return y - 1;<br>    } else {<br>      return 4;<br>    }<br>  },<br>  title: function(moves) {<br>    this.table.querySelector('th').innerHTML = moves + ' ' + this.life;<br>  },<br>  stop: function() {<br>    this.table.classList.remove('active');<br>  },<br>  start: function() {<br>    this.table.classList.add('active');<br>  },<br>  column: function(x) {<br>    var y = this.last(x);<br>    var td1 = (y === 3) ? this.get(x, 1) : this.get(x, 2);<br>    var td2 = (y === 3) ? this.get(x, 2) : this.get(x, 3);<br>    var td3 = (y === 3) ? this.get(x, 3) : this.get(x, 4);<br>    if (td1.className === 'peon' && td1.className === td2.className && td2.className === td3.className) {<br>      td1.className = 'attack';<br>      td2.className = td3.className = '';<br>    }<br>  }<br>};<br><br>var player1 = new Player(1);<br>var player2 = new Player(2);<br><br>var game = {<br>  player: player1,<br>  moves: 2,<br>  memo: null,<br>  select: function(x) {<br>    var y = this.player.last(x);<br>    if (y) {<br>      this.memo = {x: x, y: y, className: this.player.get(x, y).className};<br>    }<br>  },<br>  move: function(x) {<br>    if (x === this.memo.x)<br>      return;<br><br>    var y = this.player.free(x);<br>    if (y) {<br>      this.player.set(x, y, this.memo.className);<br>      this.player.set(this.memo.x, this.memo.y, '');<br>      this.memo = null;<br><br>      this.player.column(x)<br><br>      this.moves--;<br>      this.player.title(this.moves);<br>      if (this.moves === 0) {<br>        this.player.stop();<br><br>        this.player = this.opponent();<br>        this.player.start();<br>        this.moves = 2;<br>        this.player.title(this.moves);<br>      }<br>    }<br>  },<br>  opponent: function() {<br>    return this.player === player1 ? player2 : player1;<br>  },<br>  isActivePlayer(playerName) {<br>    return this.player.name === playerName;<br>  }<br>}<br><br>var tds = document.querySelectorAll('td');<br>for (var i = 0; i < tds.length; i++) {<br>  tds[i].addEventListener('click', function() {<br>    var table = this.closest('table');<br>    if (!game.isActivePlayer(+table.dataset.p)) {<br>      return;<br>    }<br><br>    var x = +this.dataset.x;<br>    if (game.memo) {<br>      game.move(x);<br>    } else if (this.className) {<br>      game.select(x);<br>    }<br>  });<br>}",
                dom: function() {
                    return might.bind(might);
                },
                answer: function() {
                    var player = new Player(1);
                    player.get(5, 1).click();
                    player.get(4, 1).click();
                    if (player.get(4, 1).className !== 'attack')
                        this.warn = this.warn || "Après 1 déplacement d'un <code>td</code> en 4,1 en 5,1 les 3 péons doivent se transformer en une tête brûlée.";

                    return !this.warn;
                }
            }, {
                title: "L'attaque de la tête brûlée",
                description: "Au clic sur une tête brûlée, celle-ci disparait (les péons de derrière avance alors d'une case) et diminue d'un point le nombre de ♥ de l'adversaire. Si l'adversaire n'a plus de ♥, un x est affiché à la place et la partie prend fin (plus aucune case n'est cliquable).",
                solved: "var Player = function(name) {<br>  this.name = name;<br>  this.table = document.querySelector('table[data-p=\"' + name + '\"]');<br>};<br><br>Player.prototype = {<br>  life: '♥♥',<br>  get: function(x, y) {<br>    return this.table.querySelector('[data-x=\"' + x + '\"][data-y=\"' + y + '\"]') || {};<br>  },<br>  set: function(x, y, className) {<br>    var td = this.get(x, y);<br>    td.className = className;<br>  },<br>  free: function(x) {<br>    return this.match(x, '');<br>  },<br>  last: function(x) {<br>    var y = this.free(x);<br>    if (y) {<br>      return y - 1;<br>    } else {<br>      return 4;<br>    }<br>  },<br>  title: function(moves) {<br>    this.table.querySelector('th').innerHTML = moves + ' ' + this.life;<br>  },<br>  stop: function() {<br>    this.table.classList.remove('active');<br>  },<br>  start: function() {<br>    this.table.classList.add('active');<br>  },<br>  column: function(x) {<br>    var y = this.last(x);<br>    var td1 = (y === 3) ? this.get(x, 1) : this.get(x, 2);<br>    var td2 = (y === 3) ? this.get(x, 2) : this.get(x, 3);<br>    var td3 = (y === 3) ? this.get(x, 3) : this.get(x, 4);<br>    if (td1.className === 'peon' && td1.className === td2.className && td2.className === td3.className) {<br>      td1.className = 'attack';<br>      td2.className = td3.className = '';<br>    }<br>  },<br>  match: function(x, className) {<br>    for (var y = 1; y <= 4; y++) {<br>      var td = this.get(x, y);<br>      if (td.className === className) {<br>        return y;<br>      }<br>    }<br>  },<br>  attack: function(x) {<br>    var match = this.match(x, 'attack')<br>    if (match) {<br>        for (var y = match + 1; y < 4; y++) {<br>          this.set(x, y - 1, this.get(x, y).className);<br>        }<br>        this.set(x, 4, '');<br>        return true;<br>    }<br>  },<br>  hurt: function() {<br>    if (this.life === '♥♥')<br>      this.life = '♥';<br>    else<br>      this.life = 'x';<br>  },<br>  dead: function() {<br>    return this.life === 'x';<br>  }<br>};<br><br>var player1 = new Player(1);<br>var player2 = new Player(2);<br><br>var game = {<br>  player: player1,<br>  moves: 2,<br>  memo: null,<br>  select: function(x) {<br>    if (this.player.attack(x)) {<br>      this.opponent().hurt();<br>      this.opponent().title(2);<br>      if (this.opponent().dead())<br>        this.player.stop();<br>      else<br>        this.next();<br>      return;<br>    }<br><br>    var y = this.player.last(x);<br>    if (y) {<br>      this.memo = {x: x, y: y, className: this.player.get(x, y).className};<br>    }<br>  },<br>  move: function(x) {<br>    if (x === this.memo.x)<br>      return;<br><br>    var y = this.player.free(x);<br>    if (y) {<br>      this.player.set(x, y, this.memo.className);<br>      this.player.set(this.memo.x, this.memo.y, '');<br>      this.memo = null;<br><br>      this.player.column(x)<br>      this.next();<br>    }<br>  },<br>  next: function() {<br>    this.moves--;<br>    this.player.title(this.moves);<br>    if (this.moves === 0) {<br>      this.player.stop();<br><br>      this.player = this.opponent();<br>      this.player.start();<br>      this.moves = 2;<br>      this.player.title(this.moves);<br>    }<br>  },<br>  opponent: function() {<br>    return this.player === player1 ? player2 : player1;<br>  },<br>  isActivePlayer(playerName) {<br>    return this.player.name === playerName;<br>  }<br>}<br><br>var tds = document.querySelectorAll('td');<br>for (var i = 0; i < tds.length; i++) {<br>  tds[i].addEventListener('click', function() {<br>    var table = this.closest('table');<br>    if (!game.isActivePlayer(+table.dataset.p)) {<br>      return;<br>    }<br><br>    var x = +this.dataset.x;<br>    if (game.memo) {<br>      game.move(x);<br>    } else if (this.className) {<br>      game.select(x);<br>    }<br>  });<br>}",
                dom: function() {
                    return might.bind(might);
                },
                answer: function() {
                    var player = new Player(1);
                    player.get(5, 1).click();
                    player.get(4, 1).click();
                    player.get(1, 1).click();
                    player.get(6, 1).click();

                    var opponent = new Player(2);
                    opponent.get(2, 1).click();
                    opponent.get(3, 1).click();
                    opponent.get(3, 1).click();
                    opponent.get(2, 1).click();

                    player.get(4, 1).click();
                    player.get(6, 1).click();

                    if (opponent.table.querySelector('th').innerHTML !== '2 x')
                        this.warn = this.warn || "Après 2 attaques, le compteur du joueur 2 doit indiquer x.";

                    return !this.warn;
                }
            }, {
                title: "La tête d'arbre",
                description: "Lorsqu'après un déplacement au moins 3 péons (bleus) se retrouvent dans la même ligne, ils sont remplacés par des têtes d'arbre (un <code>td.block</code>).",
                solved: "var Player = function(name) {<br>  this.name = name;<br>  this.table = document.querySelector('table[data-p=\"' + name + '\"]');<br>};<br><br>Player.prototype = {<br>  life: '♥♥',<br>  get: function(x, y) {<br>    return this.table.querySelector('[data-x=\"' + x + '\"][data-y=\"' + y + '\"]') || {};<br>  },<br>  set: function(x, y, className) {<br>    var td = this.get(x, y);<br>    td.className = className;<br>  },<br>  free: function(x) {<br>    return this.match(x, '');<br>  },<br>  last: function(x) {<br>    var y = this.free(x);<br>    if (y) {<br>      return y - 1;<br>    } else {<br>      return 4;<br>    }<br>  },<br>  title: function(moves) {<br>    this.table.querySelector('th').innerHTML = moves + ' ' + this.life;<br>  },<br>  stop: function() {<br>    this.table.classList.remove('active');<br>  },<br>  start: function() {<br>    this.table.classList.add('active');<br>  },<br>  column: function(x) {<br>    var y = this.last(x);<br>    var td1 = (y === 3) ? this.get(x, 1) : this.get(x, 2);<br>    var td2 = (y === 3) ? this.get(x, 2) : this.get(x, 3);<br>    var td3 = (y === 3) ? this.get(x, 3) : this.get(x, 4);<br>    if (td1.className === 'peon' && td1.className === td2.className && td2.className === td3.className) {<br>      td1.className = 'attack';<br>      td2.className = td3.className = '';<br>    }<br>  },<br>  line: function(x, y) {<br>    var count = 0;<br>    for (var _x = x - 1; _x >= 1; _x--) {<br>      if (this.get(_x, y).className === 'peon')<br>        count++;<br>      else<br>        break;<br>    }<br><br>    for (var _x = x + 1; _x <= 7; _x++) {<br>      if (this.get(_x, y).className === 'peon')<br>        count++;<br>      else<br>        break;<br>    }<br><br>    if (count >= 3) {<br>      this.get(x, y).className = 'block'<br>      for (var _x = x - 1; _x >= 1; _x--) {<br>        if (this.get(_x, y).className === 'peon')<br>          this.get(_x, y).className = 'block';<br>        else<br>          break;<br>      }<br><br>      for (var _x = x + 1; _x <= 7; _x++) {<br>        if (this.get(_x, y).className === 'peon')<br>          this.get(_x, y).className = 'block';<br>        else<br>          break;<br>      }<br>    }<br>  },<br>  match: function(x, className) {<br>    for (var y = 1; y <= 4; y++) {<br>      var td = this.get(x, y);<br>      if (td.className === className) {<br>        return y;<br>      }<br>    }<br>  },<br>  attack: function(x) {<br>    var match = this.match(x, 'attack')<br>    if (match) {<br>        for (var y = match + 1; y < 4; y++) {<br>          this.set(x, y - 1, this.get(x, y).className);<br>        }<br>        this.set(x, 4, '');<br>        return true;<br>    }<br>  },<br>  hurt: function() {<br>    if (this.life === '♥♥')<br>      this.life = '♥';<br>    else<br>      this.life = 'x';<br>  },<br>  dead: function() {<br>    return this.life === 'x';<br>  }<br>};<br><br>var player1 = new Player(1);<br>var player2 = new Player(2);<br><br>var game = {<br>  player: player1,<br>  moves: 2,<br>  memo: null,<br>  select: function(x) {<br>    if (this.player.attack(x)) {<br>      this.opponent().hurt();<br>      this.opponent().title(2);<br>      if (this.opponent().dead())<br>        this.player.stop();<br>      else<br>        this.next();<br>      return;<br>    }<br><br>    var y = this.player.last(x);<br>    if (y) {<br>      this.memo = {x: x, y: y, className: this.player.get(x, y).className};<br>    }<br>  },<br>  move: function(x, y) {<br>    if (x === this.memo.x)<br>      return;<br><br>    var y = this.player.free(x);<br>    if (y) {<br>      this.player.set(x, y, this.memo.className);<br>      this.player.set(this.memo.x, this.memo.y, '');<br>      this.memo = null;<br><br>      this.player.column(x);<br>      this.player.line(x, y);<br>      this.next();<br>    }<br>  },<br>  next: function() {<br>    this.moves--;<br>    this.player.title(this.moves);<br>    if (this.moves === 0) {<br>      this.player.stop();<br><br>      this.player = this.opponent();<br>      this.player.start();<br>      this.moves = 2;<br>      this.player.title(this.moves);<br>    }<br>  },<br>  opponent: function() {<br>    return this.player === player1 ? player2 : player1;<br>  },<br>  isActivePlayer(playerName) {<br>    return this.player.name === playerName;<br>  }<br>}<br><br>var tds = document.querySelectorAll('td');<br>for (var i = 0; i < tds.length; i++) {<br>  tds[i].addEventListener('click', function() {<br>    var table = this.closest('table');<br>    if (!game.isActivePlayer(+table.dataset.p)) {<br>      return;<br>    }<br><br>    var x = +this.dataset.x;<br>    var y = +this.dataset.y;<br>    if (game.memo) {<br>      game.move(x, y);<br>    } else if (this.className) {<br>      game.select(x);<br>    }<br>  });<br>}",
                dom: function() {
                    return might.bind(might);
                },
                answer: function() {
                    var player = new Player(1);
                    player.get(4, 1).click();
                    player.get(3, 1).click();
                    if (player.get(1, 1).className !== 'peon' || player.get(3, 1).className !== 'block' || player.get(4, 1).className !== 'block' || player.get(3, 1).className !== 'block' || player.get(5, 1).className !== 'block' || player.get(6, 1).className !== 'block')
                        this.warn = this.warn || "Après 1 déplacement d'un <code>td</code> en 4,1 vers 3,1 les 4 péons de la première ligne doivent se transformer en une tête d'arbre.";

                    return !this.warn;
                }
            }, {
                title: "La défense de la tête d'arbre",
                description: "Lorsqu'une tête brûle attaque et qu'une tête d'arbre lui fait fasse en première ligne dans le territoire adverse, les deux disparraissent (les péons de derrière avance alors d'une case) sans causer de dégats à l'adversaire.",
                solved: "var Player = function(name) {<br>  this.name = name;<br>  this.table = document.querySelector('table[data-p=\"' + name + '\"]');<br>};<br><br>Player.prototype = {<br>  life: '♥♥',<br>  get: function(x, y) {<br>    return this.table.querySelector('[data-x=\"' + x + '\"][data-y=\"' + y + '\"]') || {};<br>  },<br>  set: function(x, y, className) {<br>    var td = this.get(x, y);<br>    td.className = className;<br>  },<br>  free: function(x) {<br>    return this.match(x, '');<br>  },<br>  last: function(x) {<br>    var y = this.free(x);<br>    if (y) {<br>      return y - 1;<br>    } else {<br>      return 4;<br>    }<br>  },<br>  title: function(moves) {<br>    this.table.querySelector('th').innerHTML = moves + ' ' + this.life;<br>  },<br>  stop: function() {<br>    this.table.classList.remove('active');<br>  },<br>  start: function() {<br>    this.table.classList.add('active');<br>  },<br>  column: function(x) {<br>    var y = this.last(x);<br>    var td1 = (y === 3) ? this.get(x, 1) : this.get(x, 2);<br>    var td2 = (y === 3) ? this.get(x, 2) : this.get(x, 3);<br>    var td3 = (y === 3) ? this.get(x, 3) : this.get(x, 4);<br>    if (td1.className === 'peon' && td1.className === td2.className && td2.className === td3.className) {<br>      td1.className = 'attack';<br>      td2.className = td3.className = '';<br>    }<br>  },<br>  line: function(x, y) {<br>    var count = 0;<br>    for (var _x = x - 1; _x >= 1; _x--) {<br>      if (this.get(_x, y).className === 'peon')<br>        count++;<br>      else<br>        break;<br>    }<br><br>    for (var _x = x + 1; _x <= 7; _x++) {<br>      if (this.get(_x, y).className === 'peon')<br>        count++;<br>      else<br>        break;<br>    }<br><br>    if (count >= 3) {<br>      this.get(x, y).className = 'block'<br>      for (var _x = x - 1; _x >= 1; _x--) {<br>        if (this.get(_x, y).className === 'peon')<br>          this.get(_x, y).className = 'block';<br>        else<br>          break;<br>      }<br><br>      for (var _x = x + 1; _x <= 7; _x++) {<br>        if (this.get(_x, y).className === 'peon')<br>          this.get(_x, y).className = 'block';<br>        else<br>          break;<br>      }<br>    }<br>  },<br>  match: function(x, className) {<br>    for (var y = 1; y <= 4; y++) {<br>      var td = this.get(x, y);<br>      if (td.className === className) {<br>        return y;<br>      }<br>    }<br>  },<br>  attack: function(x) {<br>    var match = this.match(x, 'attack')<br>    if (match) {<br>        this.dash(x, match);<br>        return true;<br>    }<br>  },<br>  block: function(x) {<br>    if (this.get(x, 1).className === 'block') {<br>      this.dash(x, 1);<br>      return true;<br>    }<br>  },<br>  dash: function(x, y) {<br>    for (var _y = y + 1; _y < 4; _y++) {<br>      this.set(x, _y - 1, this.get(x, _y).className);<br>    }<br>    this.set(x, 4, '');<br>  },<br>  hurt: function() {<br>    if (this.life === '♥♥')<br>      this.life = '♥';<br>    else<br>      this.life = 'x';<br>  },<br>  dead: function() {<br>    return this.life === 'x';<br>  }<br>};<br><br>var player1 = new Player(1);<br>var player2 = new Player(2);<br><br>var game = {<br>  player: player1,<br>  moves: 2,<br>  memo: null,<br>  select: function(x) {<br>    if (this.player.attack(x)) {<br>      if (!this.opponent().block(x)) {<br>        this.opponent().hurt();<br>        this.opponent().title(2);<br>      }<br><br>      if (this.opponent().dead())<br>        this.player.stop();<br>      else<br>        this.next();<br>      return;<br>    }<br><br>    var y = this.player.last(x);<br>    if (y) {<br>      this.memo = {x: x, y: y, className: this.player.get(x, y).className};<br>    }<br>  },<br>  move: function(x, y) {<br>    if (x === this.memo.x)<br>      return;<br><br>    var y = this.player.free(x);<br>    if (y) {<br>      this.player.set(x, y, this.memo.className);<br>      this.player.set(this.memo.x, this.memo.y, '');<br>      this.memo = null;<br><br>      this.player.column(x);<br>      this.player.line(x, y);<br>      this.next();<br>    }<br>  },<br>  next: function() {<br>    this.moves--;<br>    this.player.title(this.moves);<br>    if (this.moves === 0) {<br>      this.player.stop();<br><br>      this.player = this.opponent();<br>      this.player.start();<br>      this.moves = 2;<br>      this.player.title(this.moves);<br>    }<br>  },<br>  opponent: function() {<br>    return this.player === player1 ? player2 : player1;<br>  },<br>  isActivePlayer(playerName) {<br>    return this.player.name === playerName;<br>  }<br>}<br><br>var tds = document.querySelectorAll('td');<br>for (var i = 0; i < tds.length; i++) {<br>  tds[i].addEventListener('click', function() {<br>    var table = this.closest('table');<br>    if (!game.isActivePlayer(+table.dataset.p)) {<br>      return;<br>    }<br><br>    var x = +this.dataset.x;<br>    var y = +this.dataset.y;<br>    if (game.memo) {<br>      game.move(x, y);<br>    } else if (this.className) {<br>      game.select(x);<br>    }<br>  });<br>}",
                dom: function() {
                    return might.bind(might);
                },
                answer: function() {
                    var player = new Player(1);
                    player.get(5, 1).click();
                    player.get(4, 1).click();
                    player.get(6, 1).click();
                    player.get(1, 1).click();

                    var opponent = new Player(2);
                    opponent.get(5, 1).click();
                    opponent.get(4, 1).click();
                    opponent.get(2, 1).click();
                    opponent.get(1, 1).click();

                    player.get(4, 1).click();
                    player.get(1, 1).click();

                    if (opponent.get(4, 1).className !== '')
                        this.warn = this.warn || "Si une attaque a lieu et qu'une tête d'arbre lui fait fasse, celle-ci doit disparaitre.";

                    if (opponent.table.querySelector('th').innerHTML !== '2 ♥')
                        this.warn = this.warn || "Après 2 attaques, dont 1 bloquée, le compteur du joueur 2 doit indiquer ♥.";

                    return !this.warn;
                }
            }
        ]
    }, {
        title: "Puzzle | Taquin",
        description: "Un taquin est ce puzzle en plastique à résoudre du bout des pouces. Une pièce peut être glissée horizontalement ou verticalement pour venir prendre la place de l'espace libre (<i>un libre pour neuf cases sur les versions simples</i>).<br><br>Ce chapitre présente la réalisation (<i>corsée</i>) d'un taquin pas à pas.",
        color: "pink",
        steps: [
            {
                title: "Mélanger les cases",
                description: "Mélanger les 9 <code>li</code> du puzzle listés dans <code>.sliding ul</code> au clic sur le bouton « mélanger ».",
                excerpt: "La méthode <code>Math.floor(Math.random() * 9)</code> retourne un nombre aléatoire entre 0 et 8.",
                solved: "var shuffle = function(o){<br>  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);<br>  return o;<br>}<br><br>var render = function(matrix) {<br>  var ul = document.querySelector('.sliding ul');<br>  ul.innerHTML = '';<br><br>  var squares = [].concat(matrix[0], matrix[1], matrix[2])<br>  for (var square of squares) {<br>    var li = document.createElement('li');<br>    li.className = 'square' + square;<br>    ul.appendChild(li);<br>  }<br>}<br><br>document.querySelector('.sliding button').addEventListener('click', function() {<br>  var squares = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);<br>  var matrix = [<br>    [squares[0], squares[1], squares[2]],<br>    [squares[3], squares[4], squares[5]],<br>    [squares[6], squares[7], squares[8]]<br>  ];<br>  render(matrix);<br>});",
                dom: function() {
                    return sliding.bind(sliding);
                },
                answer: function() {
                    let classNames = getClassNames('.sliding li');

                    if (classNames.length !== 9)
                        this.warn = this.warn || "Le puzzle doit contenir 9 <code>li</code>";
                    if (equals(classNames, ['square1', 'square2', 'square0', 'square3', 'square4', 'square5', 'square6', 'square7', 'square8']) !== true)
                        this.warn = this.warn || "Les cases doivent être dans l'ordre avant le mélange";

                    let button = document.querySelector('.sliding button');
                    button.click();

                    classNames = getClassNames('.sliding li');
                    if (classNames.length !== 9)
                        this.warn = this.warn || "Le puzzle doit contenir 9 <code>li</code>";
                    if (equals(classNames, ['square1', 'square2', 'square0', 'square3', 'square4', 'square5', 'square6', 'square7', 'square8']) !== false)
                        this.warn = this.warn || "Les cases doivent être dans le désordre après le mélange";
                    if (equalsContent(classNames, ['square1', 'square2', 'square0', 'square3', 'square4', 'square5', 'square6', 'square7', 'square8']) !== true)
                        this.warn = this.warn || "Les cases doivent toutes être présentes, sans doublon";

                    return !this.warn;
                }
            },
            {
                title: "Gérer le déplacement horizontal d'une case",
                description: "Au clic sur une case, celle-ci doit être intervertie avec la case vide <code>.square0</code> à condition que l'une et l'autre soit à côté (<i>et pas en diagonale</i>).",
                excerpt: "Stocker l'état du puzzle dans une variable (<i>une matrice de préférence — un tableau de tableaux, 3 lignes, 3 colonnes</i>), et trouver une façon condensée pour lister quelles cases sont accessibles à partir d'une autre case. Se concentrer pour l'instant sur les mouvements horizontaux.",
                solved: "var shuffle = function(o){<br>  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);<br>  return o;<br>}<br><br>var render = function(matrix) {<br>  var ul = document.querySelector('.sliding ul');<br>  ul.innerHTML = '';<br><br>  var squares = [].concat(matrix[0], matrix[1], matrix[2])<br>  for (var square of squares) {<br>    var li = document.createElement('li');<br>    li.className = 'square' + square;<br>    li.setAttribute('data-id', square);<br>    li.addEventListener('click', function() {<br>      move(matrix, parseInt(this.getAttribute('data-id')));<br>    });<br>    ul.appendChild(li);<br>  }<br>}<br>var move = function(matrix, square) {<br>  if (square === 0)<br>    return false;<br>  if (matrix[0][0] === square)<br>    canToggle(matrix, [0, 0], [[0, 1]]);<br>  else if (matrix[0][1] === square)<br>    canToggle(matrix, [0, 1], [[0, 0], [0, 2]]);<br>  else if (matrix[0][2] === square)<br>    canToggle(matrix, [0, 2], [[0, 1]]);<br>  else if (matrix[1][0] === square)<br>    canToggle(matrix, [1, 0], [[1, 1]]);<br>  else if (matrix[1][1] === square)<br>    canToggle(matrix, [1, 1], [[1, 0], [1, 2]]);<br>  else if (matrix[1][2] === square)<br>    canToggle(matrix, [1, 2], [[1, 1]]);<br>  else if (matrix[2][0] === square)<br>    canToggle(matrix, [2, 0], [[2, 1]]);<br>  else if (matrix[2][1] === square)<br>    canToggle(matrix, [2, 1], [[2, 0], [2, 2]]);<br>  else if (matrix[2][2] === square)<br>    canToggle(matrix, [2, 2], [[2, 1]]);<br>}<br>var canToggle = function(matrix, from, combinaisons) {<br>  for (var c of combinaisons) {<br>    if (matrix[c[0]][c[1]] === 0) {<br>      toggle(matrix, [from[0], from[1]], [c[0], c[1]]);<br>      break;<br>    }<br>  }<br>}<br>var toggle = function(matrix, from, to) {<br>  var memo = matrix[from[0]][from[1]];<br>  matrix[from[0]][from[1]] = matrix[to[0]][to[1]];<br>  matrix[to[0]][to[1]] = memo;<br>  render(matrix);<br>}<br><br>document.querySelector('.sliding button').addEventListener('click', function() {<br>  var squares = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);<br>  var matrix = [<br>    [squares[0], squares[1], squares[2]],<br>    [squares[3], squares[4], squares[5]],<br>    [squares[6], squares[7], squares[8]]<br>  ];<br>  render(matrix);<br>});",
                dom: function() {
                    return sliding.bind(sliding);
                },
                answer: function() {
                    let button = document.querySelector('.sliding button');
                    button.click();

                    // click on possible
                    let classNames = getClassNames('.sliding li');
                    let expected = classNames.slice(0);
                    let position = classNames.indexOf('square0') + 1;
                    let toPosition;
                    if ([1, 2, 4, 5, 7, 8].indexOf(position) !== -1) {
                        toPosition = position + 1;
                    } else {
                        toPosition = position - 1;
                    }
                    document.querySelector(`.sliding li:nth-child(${toPosition})`).click();
                    let memo = expected[position - 1];
                    expected[position - 1] = expected[toPosition - 1];
                    expected[toPosition - 1] = memo;

                    classNames = getClassNames('.sliding li');

                    let basic = true;
                    basic = basic && equals(expected, classNames);

                    // click on empty
                    expected = classNames.slice(0);
                    position = classNames.indexOf('square0') + 1;
                    document.querySelector(`.sliding li:nth-child(${position})`).click();
                    classNames = getClassNames('.sliding li');
                    basic = basic && equals(expected, classNames);

                    // click on impossible
                    expected = classNames.slice(0);
                    position = classNames.indexOf('square0');
                    position = ((position + 4) % 9) + 1;
                    document.querySelector(`.sliding li:nth-child(${position})`).click();
                    classNames = getClassNames('.sliding li');
                    basic = basic && equals(expected, classNames);

                    if (!basic)
                        this.warn = "Le déplacement horizontal d'une case doit fonctionner";
                    return basic;
                }
            },
            {
                title: "Gérer le déplacement vertical d'une case",
                description: "Au clic sur une case, celle-ci doit être intervertie avec la case vide <code>.square0</code> à condition que l'une et l'autre soit à côté (<i>et pas en diagonale</i>).",
                solved: "var shuffle = function(o){<br>  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);<br>  return o;<br>}<br><br>var render = function(matrix) {<br>  var ul = document.querySelector('.sliding ul');<br>  ul.innerHTML = '';<br><br>  var squares = [].concat(matrix[0], matrix[1], matrix[2])<br>  for (var square of squares) {<br>    var li = document.createElement('li');<br>    li.className = 'square' + square;<br>    li.setAttribute('data-id', square);<br>    li.addEventListener('click', function() {<br>      move(matrix, parseInt(this.getAttribute('data-id')));<br>    });<br>    ul.appendChild(li);<br>  }<br>}<br>var move = function(matrix, square) {<br>  if (square === 0)<br>    return false;<br>  if (matrix[0][0] === square)<br>    canToggle(matrix, [0, 0], [[0, 1], [1, 0]]);<br>  else if (matrix[0][1] === square)<br>    canToggle(matrix, [0, 1], [[0, 0], [1, 1], [0, 2]]);<br>  else if (matrix[0][2] === square)<br>    canToggle(matrix, [0, 2], [[0, 1], [1, 2]]);<br>  else if (matrix[1][0] === square)<br>    canToggle(matrix, [1, 0], [[0, 0], [1, 1], [2, 0]]);<br>  else if (matrix[1][1] === square)<br>    canToggle(matrix, [1, 1], [[0, 1], [1, 0], [1, 2], [2, 1]]);<br>  else if (matrix[1][2] === square)<br>    canToggle(matrix, [1, 2], [[0, 2], [1, 1], [2, 2]]);<br>  else if (matrix[2][0] === square)<br>    canToggle(matrix, [2, 0], [[1, 0], [2, 1]]);<br>  else if (matrix[2][1] === square)<br>    canToggle(matrix, [2, 1], [[2, 0], [1, 1], [2, 2]]);<br>  else if (matrix[2][2] === square)<br>    canToggle(matrix, [2, 2], [[2, 1], [1, 2]]);<br>}<br>var canToggle = function(matrix, from, combinaisons) {<br>  for (var c of combinaisons) {<br>    if (matrix[c[0]][c[1]] === 0) {<br>      toggle(matrix, [from[0], from[1]], [c[0], c[1]]);<br>      break;<br>    }<br>  }<br>}<br>var toggle = function(matrix, from, to) {<br>  var memo = matrix[from[0]][from[1]];<br>  matrix[from[0]][from[1]] = matrix[to[0]][to[1]];<br>  matrix[to[0]][to[1]] = memo;<br>  render(matrix);<br>}<br><br>document.querySelector('.sliding button').addEventListener('click', function() {<br>  var squares = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);<br>  var matrix = [<br>    [squares[0], squares[1], squares[2]],<br>    [squares[3], squares[4], squares[5]],<br>    [squares[6], squares[7], squares[8]]<br>  ];<br>  render(matrix);<br>});",
                dom: function() {
                    return sliding.bind(sliding);
                },
                answer: function() {
                    let button = document.querySelector('.sliding button');
                    button.click();

                    // click on possible
                    let classNames = getClassNames('.sliding li');
                    let expected = classNames.slice(0);
                    let position = classNames.indexOf('square0') + 1;
                    let toPosition;
                    if ([1, 2, 3, 4, 5, 6].indexOf(position) !== -1) {
                        toPosition = position + 3;
                    } else {
                        toPosition = position - 3;
                    }
                    document.querySelector(`.sliding li:nth-child(${toPosition})`).click();
                    let memo = expected[position - 1];
                    expected[position - 1] = expected[toPosition - 1];
                    expected[toPosition - 1] = memo;

                    classNames = getClassNames('.sliding li');

                    let basic = true;
                    basic = basic && equals(expected, classNames);

                    if (!basic)
                        this.warn = "Le déplacement vertical d'une case doit fonctionner";
                    return basic;
                }
            }
        ]
    }, {
        title: "Puzzle | Puissance 4",
        description: "Un puissance 4 est un puzzle pour 2 joueurs (<i>l'un jaune, l'autre rouge</i>) jouant à tour de rôle un jeton dans une des 7 colonnes disponibles. Chaque jeton s'empile aux jetons précédement joués dans cette colonne. Le premier joueur à aligner 4 jetons, horizontalement, verticalement ou en diagonale gagne.<br><br>Ce chapitre présente la réalisation (<i>corsée</i>) d'un puissance 4 pas à pas.",
        color: "pink",
        steps: [
            {
                title: "Générer une table de jeu",
                description: "Dans la <code>table</code> générer 6 lignes <code>tr</code> avec chacune 7 colonnes <code>td</code> afin de créer le plateau de jeu.",
                solved: "var table = document.querySelector('table');<br>var grid = [<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0]<br>];<br><br>var render = function() {<br>  table.innerHTML = '';<br>  for (var row of grid) {<br>    var tr = document.createElement('tr');<br>    for (var column of row) {<br>      var td = document.createElement('td');<br>      tr.append(td);<br>    }<br>    table.append(tr);<br>  }<br>};<br>render();",
                dom: function() {
                    return connectfour.bind(connectfour);
                },
                answer: function() {
                    if (document.querySelectorAll('table tr').length !== 6)
                        this.warn = this.warn || "La table doit contenir 6 <code>tr</code>";
                    if (document.querySelectorAll('table tr td').length !== 42)
                        this.warn = this.warn || "La table doit contenir 42 <code>td</code>";
                    return !this.warn;
                }
            },
            {
                title: "Ajouter un jeton alternativement jaune puis rouge",
                description: "Au clic sur n'importe quel <code>td</code> d'une colonne, ajouter au <code>td</code> en pied de cette colonne la classe <code>yellow</code> ou <code>red</code> alternativement (<i>si il n'a pas de classe</i>). Au fur et à mesure des clics, les jetons s'empilent ainsi les uns sur les autres. Si une colonne est remplie, elle ne reçoit plus de jeton au clic.",
                solved: "var table = document.querySelector('table');<br>var grid = [<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0]<br>];<br><br>var color = 'red';<br>var render = function() {<br>  table.innerHTML = '';<br>  for (var row of grid) {<br>    var tr = document.createElement('tr');<br>    for (var column of row) {<br>      var td = document.createElement('td');<br>      if (column)<br>        td.className = column;<br><br>      td.addEventListener('click', function(e) {<br>        var index = Array.prototype.indexOf.call(this.parentElement.children, this);<br>        for (var i = 5; i >= 0; i--) {<br>          if (!grid[i][index]) {<br>            color = (color === 'yellow' ? 'red' : 'yellow');<br>            grid[i][index] = color;<br>            break;<br>          } else continue;<br>        }<br>        render();<br>      });<br>      tr.append(td);<br>    }<br>    table.append(tr);<br>  }<br>};<br>render();",
                dom: function() {
                    return connectfour.bind(connectfour);
                },
                answer: function() {
                    var cell = function(tr, td) {
                        return document.querySelector('table tr:nth-child(' + tr + ') td:nth-child(' + td + ')');
                    }

                    cell(1, 1).click();
                    cell(1, 1).click();
                    cell(1, 1).click();
                    cell(1, 2).click();

                    if (elHasClass(cell(6, 1), 'yellow') !== true)
                        this.warn = this.warn || "Après un clic sur la première colonne, le pion de la première case de cette colonne doit être jaune";
                    if (elHasClass(cell(5, 1), 'red') !== true)
                        this.warn = this.warn || "Après un clic sur la première colonne, le pion de la deuxième case de cette colonne doit être rouge";
                    if (elHasClass(cell(4, 1), 'yellow') !== true)
                        this.warn = this.warn || "Après un clic sur la première colonne, le pion de la troisième case de cette colonne doit être jaune";
                    if (elHasClass(cell(6, 2), 'red') !== true)
                        this.warn = this.warn || "Après un clic sur la première colonne, le pion de la quatrième case de cette colonne doit être rouge";
                    return !this.warn;
                }
            },
            {
                title: "Combinaison horizontale gagnante",
                description: "Lorsque 4 jetons consécutifs de la même couleur sont alignés horizontalement, leur ajouter la classe <code>victory</code>. Les clics suivants sur la table n'ajoutent plus de jetons.",
                solved: "var table = document.querySelector('table');<br>var grid = [<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0]<br>];<br><br>var color = 'red';<br>var winner = false;<br>var render = function() {<br>  table.innerHTML = '';<br>  for (var row of grid) {<br>    var tr = document.createElement('tr');<br>    for (var column of row) {<br>      var td = document.createElement('td');<br>      if (column)<br>        td.className = column;<br><br>      td.addEventListener('click', function(e) {<br>        if (winner)<br>          return;<br><br>        var index = Array.prototype.indexOf.call(this.parentElement.children, this);<br>        for (var i = 5; i >= 0; i--) {<br>          if (!grid[i][index]) {<br>            color = (color === 'yellow' ? 'red' : 'yellow');<br>            grid[i][index] = color;<br>            break;<br>          } else continue;<br>        }<br><br>        winner = wins(grid);<br>        if (winner) {<br>          for (var i = 0; i < winner.length; i++) {<br>            var position = winner[i].split('-');<br>            grid[position[0]][position[1]] += ' victory';<br>          }<br>        }<br>        render();<br>      });<br>      tr.append(td);<br>    }<br>    table.append(tr);<br>  }<br>};<br><br>var wins = function() {<br>  return horizontalWinner(grid);<br>};<br><br>var horizontalWinner = function() {<br>  var player, positions;<br>  for (var row = 5; row >= 0; row--) {<br>    positions = []<br>    for (var column = 0; column < 7; column++) {<br>      var color = grid[row][column];<br>      if (!color || player !== color) positions = [];<br>      if (!color) continue;<br><br>      positions.push(row + '-' + column);<br><br>      if (positions.length >= 4) return positions;<br>      player = color;<br>    }<br>  }<br>  return;<br>};<br><br>render();",
                dom: function() {
                    return connectfour.bind(connectfour);
                },
                answer: function() {
                    var cell = function(tr, td) {
                        return document.querySelector('table tr:nth-child(' + tr + ') td:nth-child(' + td + ')');
                    }

                    cell(1, 2).click(); cell(1, 3).click();
                    cell(1, 4).click(); cell(1, 5).click();
                    cell(1, 2).click(); cell(1, 1).click();
                    cell(1, 3).click(); cell(1, 6).click();
                    cell(1, 1).click(); cell(1, 1).click();
                    cell(1, 4).click(); cell(1, 4).click();

                    var basic = true;
                    basic = basic && elHasClass(cell(5, 1), 'victory');
                    basic = basic && elHasClass(cell(5, 2), 'victory');
                    basic = basic && elHasClass(cell(5, 3), 'victory');
                    basic = basic && elHasClass(cell(5, 4), 'victory');
                    basic = basic && !elHasClass(cell(4, 4), 'red');

                    if (!basic)
                        this.warn = "Les combinaisons horizontales gagnantes doivent fonctionner";
                    return basic;
                }
            },
            {
                title: "Combinaison verticale gagnante",
                description: "Faire de même lorsque 4 jetons sont alignés verticalement.",
                solved: "var table = document.querySelector('table');<br>var grid = [<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0]<br>];<br><br>var color = 'red';<br>var winner = false;<br>var render = function() {<br>  table.innerHTML = '';<br>  for (var row of grid) {<br>    var tr = document.createElement('tr');<br>    for (var column of row) {<br>      var td = document.createElement('td');<br>      if (column)<br>        td.className = column;<br><br>      td.addEventListener('click', function(e) {<br>        if (winner)<br>          return;<br><br>        var index = Array.prototype.indexOf.call(this.parentElement.children, this);<br>        for (var i = 5; i >= 0; i--) {<br>          if (!grid[i][index]) {<br>            color = (color === 'yellow' ? 'red' : 'yellow');<br>            grid[i][index] = color;<br>            break;<br>          } else continue;<br>        }<br><br>        winner = wins(grid);<br>        if (winner) {<br>          for (var i = 0; i < winner.length; i++) {<br>            var position = winner[i].split('-');<br>            grid[position[0]][position[1]] += ' victory';<br>          }<br>        }<br>        render();<br>      });<br>      tr.append(td);<br>    }<br>    table.append(tr);<br>  }<br>};<br><br>var wins = function() {<br>  return verticalWinner(grid) || horizontalWinner(grid);<br>};<br><br>var verticalWinner = function() {<br>  var player, positions;<br>  for (var column = 0; column < 7; column++) {<br>    positions = [];<br>    for (var row = 5; row >= 0; row--) {<br>      var color = grid[row][column];<br>      if (!color || player !== color) positions = [];<br>      if (!color) continue;<br><br>      positions.push(row + '-' + column);<br><br>      if (positions.length >= 4) return positions;<br>      player = color;<br>    }<br>  }<br>  return;<br>};<br><br>var horizontalWinner = function() {<br>  var player, positions;<br>  for (var row = 5; row >= 0; row--) {<br>    positions = []<br>    for (var column = 0; column < 7; column++) {<br>      var color = grid[row][column];<br>      if (!color || player !== color) positions = [];<br>      if (!color) continue;<br><br>      positions.push(row + '-' + column);<br><br>      if (positions.length >= 4) return positions;<br>      player = color;<br>    }<br>  }<br>  return;<br>};<br><br>render();",
                dom: function() {
                    return connectfour.bind(connectfour);
                },
                answer: function() {
                    var cell = function(tr, td) {
                        return document.querySelector('table tr:nth-child(' + tr + ') td:nth-child(' + td + ')');
                    }

                    cell(1, 4).click(); cell(1, 4).click();
                    cell(1, 1).click(); cell(1, 2).click();
                    cell(1, 1).click(); cell(1, 2).click();
                    cell(1, 1).click(); cell(1, 2).click();
                    cell(1, 1).click(); cell(1, 2).click();

                    var basic = true;
                    basic = basic && elHasClass(cell(6, 1), 'victory');
                    basic = basic && elHasClass(cell(5, 1), 'victory');
                    basic = basic && elHasClass(cell(4, 1), 'victory');
                    basic = basic && elHasClass(cell(3, 1), 'victory');
                    basic = basic && !elHasClass(cell(6, 2), 'victory');
                    basic = basic && !elHasClass(cell(5, 2), 'victory');
                    basic = basic && elHasClass(cell(4, 2), 'red');
                    basic = basic && !elHasClass(cell(3, 2), 'red');

                    if (!basic)
                        this.warn = "Les combinaisons verticales gagnantes doivent fonctionner";
                    return basic;
                }
            }
        ]
    }
];

let digest = function(el, data, methods) {
    let completion = data.completion;

    let enter = methods.enter;

    return {
        render: function() {
            el.innerHTML = `
            <div class="digest">
                <div class="ui centered grid">
                    <div class="fifteen wide computer sixteen wide tablet column">
                        <h1 class="ui grey header">JavaScript</h1>
                        <h2 class="ui grey header">Le langage du web</h2>
                    </div>
                </div>
                <div class="ui stackable center aligned grid" data-hook="cards"></div>
            </div>`;

            let grid = el.querySelector('[data-hook="cards"]');

            for (let chapter = 0; chapter < chapters.length; chapter++) {
                let chapterContent = chapters[chapter];
                let div = document.createElement('div');
                div.className = 'five wide computer height wide tablet column';

                let lis = '';
                for (let step = 0; step < chapterContent.steps.length; step++) {
                    let className = this.methods.isDone(step + 1, chapter + 1) ? 'complete ' : '';
                    className += this.methods.isCourse(step + 1, chapter + 1) ? 'course ' : '';
                    lis += `<li class="${className}"></li>`;
                }

                div.innerHTML = `
                <div class="ui fluid card h-colored h-${chapterContent.color}">
                    <div class="content">
                        <ul>${lis}</ul>
                    </div>
                    <div class="content">
                        <h3 class="header">${chapterContent.title}</h3>
                        <div class="description">${chapterContent.description}</div>
                    </div>
                    <div class="extra content">
                        <button class="ui ${chapterContent.color} button" data-hook="enter">Parcourir</button>
                    </div>
                </div>`;

                let enters = div.querySelectorAll('[data-hook=enter]');
                for (let i = 0; i < enters.length; i++) {
                    enters[i].addEventListener('click', function(event) {
                        event.preventDefault();
                        enter(chapter + 1);
                    });
                }

                grid.appendChild(div);
            }
        },
        methods: {
            isDone: function(step, chapter) {
                return completion[chapter] && completion[chapter][step];
            },
            isCourse: function(step, chapter) {
                return chapters[chapter - 1].steps[step - 1].course;
            }
        }
    }
};

let stepper = function(el, data, methods) {
    let completion = data.completion;
    let chapter = data.chapter;
    let step = data.step;

    let leave = methods.leave;
    let jump = methods.jump;
    let completed = methods.completed;
    let nextChapter = methods.nextChapter;
    let nextStep = methods.nextStep;

    let chapterContent = chapters[chapter - 1];
    let stepContent = chapters[chapter - 1].steps[step - 1];

    return {
        render: function() {
            let excerptHidden = !stepContent.excerpt ? 'hidden' : '';
            let labelNext = !this.methods.isLast(step) ? 'Étape suivante' : (!this.methods.isLatest(chapter, step) ? `Chapitre ${chapter+1}` : 'Chapitres');
            let description = stepContent.course ? marked(dedent(stepContent.description)) : `<p>${stepContent.description}</p>`;
            let title = !stepContent.title ? '' : `<h3 class="header">${stepContent.title}</h3>`;

            let lis = '';
            for (let _step = 0; _step < chapterContent.steps.length; _step++) {
                let className = '';
                className += this.methods.isDone(_step + 1) ? 'complete ' : '';
                className += this.methods.isActive(_step + 1) ? 'active ' : '';
                className += this.methods.isCourse(_step + 1) ? 'course ' : '';
                lis += `<li class="${className}"></li>`;
            }

            el.innerHTML = `
            <div class="stepper">
                <h2 class="ui grey header"><a href="" data-hook="leave"><i class="arrow left icon"></i>${chapterContent.title}</a></h2>

                <div class="ui stackable one column grid">
                    <div class="column">
                        <div class="ui fluid card h-colored h-${chapterContent.color}">
                            <div class="content">
                                <ul class="h-steps">${lis}</ul>
                            </div>
                            <div class="content">
                                ${title}
                                <div class="description">${description}</div>
                                <div class="dom" data-hook="dom"></div>
                                <div data-hook="divulge"></div>
                                <div class="ui piled segment ${chapterContent.color} ${excerptHidden}">
                                    <h4 class="ui header">À propos</h4>
                                    <p>${stepContent.excerpt}</p>
                                </div>
                            </div>
                            <div class="extra content">
                                <div class="ui stackable grid">
                                    <div class="eight wide tablet eleven wide computer column">
                                        <span class="hidden" data-hook="error"><i class="remove circle icon"></i><span data-hook="error-label"></span></span>
                                    </div>
                                    <div class="eight wide tablet five wide computer right aligned column">
                                        <button class="ui ${chapterContent.color} button" data-hook="validate">Vérifier</button>
                                        <button class="ui right labeled icon ${chapterContent.color} disabled button" data-hook="next">
                                            <i class="right arrow icon"></i>
                                            <span>${labelNext}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

            this.methods.renderDom.call(this);

            el.querySelector('[data-hook=leave]').addEventListener('click', function(event) {
                event.preventDefault();
                leave();
            });

            el.querySelector('[data-hook=next]').addEventListener('click', function() {
                if (stepContent.course)
                    completed(chapter, step);

                if (this.methods.isLatest(chapter, step))
                    leave();
                else if (this.methods.isLast(step))
                    nextChapter();
                else
                    nextStep();
            }.bind(this));

            el.querySelector('[data-hook=validate]').addEventListener('click', function() {
                this.methods.validate.call(this);
            }.bind(this));

            lis = el.querySelectorAll('ul.h-steps li');
            for (let _step = 0; _step < lis.length; _step++) {
                lis[_step].addEventListener('click', function() {
                    jump(_step + 1);
                });
            }

            if (stepContent.course) {
                el.querySelector('[data-hook=validate]').classList.add('hidden');
                el.querySelector('[data-hook=next]').classList.toggle('disabled');
                stepContent.description
            }
        },
        methods: {
            isDone: function(_step) {
                return completion[chapter] && completion[chapter][_step];
            },
            isActive: function(_step) {
                return step === _step;
            },
            isLast: function(_step) {
                return chapterContent.steps.length === _step;
            },
            isLatest: function(_chapter, _step) {
                return chapterContent.steps.length === _step && chapters.length === _chapter;
            },
            isCourse: function(_step) {
                return chapterContent.steps[_step - 1].course;
            },
            validate: function() {
                this.methods.renderDom.call(this, true);

                let complete = false;

                new Promise(function(resolve) {
                    try {
                        Promise
                        .resolve(stepContent.answer())
                        .then(function(answer) {
                            complete = answer;
                            resolve(this.methods.warn());
                        }.bind(this));
                    } catch(err) {
                        resolve(`Erreur navigateur : ${err.message}`);
                    }
                }.bind(this))
                .then(function(warn) {
                    el.querySelector('[data-hook=next]').classList.toggle('disabled', !complete);
                    el.querySelector('[data-hook=error]').classList.toggle('hidden', complete);
                    if (!complete)
                        el.querySelector('[data-hook=error-label]').innerHTML = warn;

                    if (complete) {
                        completed(chapter, step);
                        el.querySelector(`.h-steps li:nth-child(${step})`).classList.toggle('complete');
                    }

                    this.methods.renderDom.call(this);
                }.bind(this));
            },
            renderDom: function(noWarning) {
                if (stepContent.init)
                    stepContent.init();
                if (stepContent.dom)
                    document.querySelector('[data-hook=dom]').innerHTML = stepContent.dom()();
                this.methods.reload.call(this, noWarning);
                this.methods.divulge.call(this);
                this.methods.highlight.call(this);
            },
            warn: function() {
                let warning = 'Réponse incorrecte';
                if (typeof stepContent.warn === "function") {
                    try {
                        warning = stepContent.warn();
                    } catch (err) {
                        warning = 'Erreur navigateur : ' + err.message;
                    };
                } else if (stepContent.warn) {
                    warning = stepContent.warn;
                }
                warning = warning.replace(/<code>/g, '<code class="no-highlight">');
                return warning;
            },
            reload: function(noWarning) {
                var code = document.querySelector('#code');
                if (!code)
                    return;

                let script = document.createElement('script');
                script.id = 'code';
                script.type = 'text/javascript';

                let content = code.innerHTML
                if (noWarning)
                    content = `try { ${content} } catch (err) {};`
                else if (content.substring(0, 6) === 'try { ' && content.substring(content.length - 18, content.length) ===  ' } catch (err) {};')
                    content = content.substring(6, content.length - 18);
                script.innerHTML = content;

                code.remove();
                document.body.appendChild(script);
            },
            highlight: function() {
                let blocks = document.querySelectorAll('code');
                for (var i = 0; i < blocks.length; i++) {
                    hljs.highlightBlock(blocks[i]);
                }
            },
            divulge: function() {
                if (stepContent.solved) {
                    el.querySelector('[data-hook=divulge]').innerHTML = `
                        <a class="ui ${chapterContent.color} ribbon label">
                            <i class="bug icon"></i>Solution
                        </a>
                        <p><pre><code class="hidden">${stepContent.solved}</code></pre></p>`;

                    el.querySelector('[data-hook=divulge] .ribbon').addEventListener('click', function() {
                        this.parentNode.querySelector('code').classList.toggle('hidden');
                    });
                }
            }
        }
    }
}

let app = {
    el: '#app',
    data: {
        chapter: null,
        step: null,
        digest: true,
        completion: {}
    },
    render: function() {
        let methods = {};
        for (let key in this.methods)
            methods[key] = this.methods[key].bind(this);

        let view = document.querySelector(this.el).querySelector('[data-hook=view]');
        if (this.data.digest)
            digest(view, this.data, methods).render();
        else
            stepper(view, this.data, methods).render();
    },
    methods: {
        enter: function(chapter) {
            this.data.digest = false;
            this.data.chapter = chapter;
            this.data.step = Math.min(Math.max.apply(null, Object.keys(this.data.completion[chapter] || {0: true})) + 1, chapters[chapter - 1].steps.length);

            this.methods.updateProgress.call(this);
        },
        leave: function() {
            this.data.digest = true;
            this.data.chapter = null;
            this.data.step = null;

            this.methods.updateProgress.call(this);
        },
        nextStep: function() {
            this.data.step++;

            this.methods.updateProgress.call(this);
        },
        nextChapter: function() {
            this.data.step = 1;
            this.data.chapter++;

            this.methods.enter.call(this, this.data.chapter);
        },
        jump: function(step) {
            this.data.step = step;

            this.methods.updateProgress.call(this);
        },
        completed: function(chapter, step) {
            if (!this.data.completion[chapter])
                this.data.completion[chapter] = {};

            this.data.completion[chapter][step] = true;

            localStorage.setItem('completion', JSON.stringify(this.data.completion));
        },
        updateProgress: function() {
            this.data.step ? localStorage.setItem('step', this.data.step) : localStorage.removeItem('step');
            this.data.chapter ?  localStorage.setItem('chapter', this.data.chapter) : localStorage.removeItem('chapter');
            this.render();
        }
    }
}

if (localStorage.getItem('completion')) {
    app.data.completion = JSON.parse(localStorage.getItem('completion'));
}
if (localStorage.getItem('chapter') && localStorage.getItem('step')) {
    app.data.chapter = +localStorage.getItem('chapter');
    app.data.step = +localStorage.getItem('step');
    app.data.digest = false;
}

app.render();

})();
