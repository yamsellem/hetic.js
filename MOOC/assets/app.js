'use strict';

// anonymous function wrapper to avoid let declaration collision in user code
(function() {

/*! highlight.js v9.12.0 */
!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs}))}(function(e){function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0===t.index}function a(e){return k.test(e)}function i(e){var n,t,r,i,o=e.className+" ";if(o+=e.parentNode?e.parentNode.className:"",t=B.exec(o))return w(t[1])?t[1]:"no-highlight";for(o=o.split(/\s+/),n=0,r=o.length;r>n;n++)if(i=o[n],a(i)||w(i))return i}function o(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function u(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3===i.nodeType?a+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function c(e,r,a){function i(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value).replace('"',"&quot;")+'"'}s+="<"+t(e)+E.map.call(e.attributes,r).join("")+">"}function u(e){s+="</"+t(e)+">"}function c(e){("start"===e.event?o:u)(e.node)}for(var l=0,s="",f=[];e.length||r.length;){var g=i();if(s+=n(a.substring(l,g[0].offset)),l=g[0].offset,g===e){f.reverse().forEach(u);do c(g.splice(0,1)[0]),g=i();while(g===e&&g.length&&g[0].offset===l);f.reverse().forEach(o)}else"start"===g[0].event?f.push(g[0].node):f.pop(),c(g.splice(0,1)[0])}return s+n(a.substr(l))}function l(e){return e.v&&!e.cached_variants&&(e.cached_variants=e.v.map(function(n){return o(e,{v:null},n)})),e.cached_variants||e.eW&&[o(e)]||[e]}function s(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var o={},u=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?u("keyword",a.k):x(a.k).forEach(function(e){u(e,a.k[e])}),a.k=o}a.lR=t(a.l||/\w+/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=t(a.i)),null==a.r&&(a.r=1),a.c||(a.c=[]),a.c=Array.prototype.concat.apply([],a.c.map(function(e){return l("self"===e?a:e)})),a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var c=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=c.length?t(c.join("|"),!0):{exec:function(){return null}}}}r(e)}function f(e,t,a,i){function o(e,n){var t,a;for(t=0,a=n.c.length;a>t;t++)if(r(n.c[t].bR,e))return n.c[t]}function u(e,n){if(r(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?u(e.parent,n):void 0}function c(e,n){return!a&&r(n.iR,e)}function l(e,n){var t=N.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,n,t,r){var a=r?"":I.classPrefix,i='<span class="'+a,o=t?"":C;return i+=e+'">',i+n+o}function h(){var e,t,r,a;if(!E.k)return n(k);for(a="",t=0,E.lR.lastIndex=0,r=E.lR.exec(k);r;)a+=n(k.substring(t,r.index)),e=l(E,r),e?(B+=e[1],a+=p(e[0],n(r[0]))):a+=n(r[0]),t=E.lR.lastIndex,r=E.lR.exec(k);return a+n(k.substr(t))}function d(){var e="string"==typeof E.sL;if(e&&!y[E.sL])return n(k);var t=e?f(E.sL,k,!0,x[E.sL]):g(k,E.sL.length?E.sL:void 0);return E.r>0&&(B+=t.r),e&&(x[E.sL]=t.top),p(t.language,t.value,!1,!0)}function b(){L+=null!=E.sL?d():h(),k=""}function v(e){L+=e.cN?p(e.cN,"",!0):"",E=Object.create(e,{parent:{value:E}})}function m(e,n){if(k+=e,null==n)return b(),0;var t=o(n,E);if(t)return t.skip?k+=n:(t.eB&&(k+=n),b(),t.rB||t.eB||(k=n)),v(t,n),t.rB?0:n.length;var r=u(E,n);if(r){var a=E;a.skip?k+=n:(a.rE||a.eE||(k+=n),b(),a.eE&&(k=n));do E.cN&&(L+=C),E.skip||(B+=E.r),E=E.parent;while(E!==r.parent);return r.starts&&v(r.starts,""),a.rE?0:n.length}if(c(n,E))throw new Error('Illegal lexeme "'+n+'" for mode "'+(E.cN||"<unnamed>")+'"');return k+=n,n.length||1}var N=w(e);if(!N)throw new Error('Unknown language: "'+e+'"');s(N);var R,E=i||N,x={},L="";for(R=E;R!==N;R=R.parent)R.cN&&(L=p(R.cN,"",!0)+L);var k="",B=0;try{for(var M,j,O=0;;){if(E.t.lastIndex=O,M=E.t.exec(t),!M)break;j=m(t.substring(O,M.index),M[0]),O=M.index+j}for(m(t.substr(O)),R=E;R.parent;R=R.parent)R.cN&&(L+=C);return{r:B,value:L,language:e,top:E}}catch(T){if(T.message&&-1!==T.message.indexOf("Illegal"))return{r:0,value:n(t)};throw T}}function g(e,t){t=t||I.languages||x(y);var r={r:0,value:n(e)},a=r;return t.filter(w).forEach(function(n){var t=f(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}),a.language&&(r.second_best=a),r}function p(e){return I.tabReplace||I.useBR?e.replace(M,function(e,n){return I.useBR&&"\n"===e?"<br>":I.tabReplace?n.replace(/\t/g,I.tabReplace):""}):e}function h(e,n,t){var r=n?L[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function d(e){var n,t,r,o,l,s=i(e);a(s)||(I.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,l=n.textContent,r=s?f(s,l,!0):g(l),t=u(n),t.length&&(o=document.createElementNS("http://www.w3.org/1999/xhtml","div"),o.innerHTML=r.value,r.value=c(t,u(o),l)),r.value=p(r.value),e.innerHTML=r.value,e.className=h(e.className,s,r.language),e.result={language:r.language,re:r.r},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.r}))}function b(e){I=o(I,e)}function v(){if(!v.called){v.called=!0;var e=document.querySelectorAll("pre code");E.forEach.call(e,d)}}function m(){addEventListener("DOMContentLoaded",v,!1),addEventListener("load",v,!1)}function N(n,t){var r=y[n]=t(e);r.aliases&&r.aliases.forEach(function(e){L[e]=n})}function R(){return x(y)}function w(e){return e=(e||"").toLowerCase(),y[e]||y[L[e]]}var E=[],x=Object.keys,y={},L={},k=/^(no-?highlight|plain|text)$/i,B=/\blang(?:uage)?-([\w-]+)\b/i,M=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,C="</span>",I={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=f,e.highlightAuto=g,e.fixMarkup=p,e.highlightBlock=d,e.configure=b,e.initHighlighting=v,e.initHighlightingOnLoad=m,e.registerLanguage=N,e.listLanguages=R,e.getLanguage=w,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=function(n,t,r){var a=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e});hljs.registerLanguage("css",function(e){var c="[a-zA-Z-][a-zA-Z0-9_-]*",t={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:c,r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,t]}]}});hljs.registerLanguage("http",function(e){var t="HTTP/[0-9\\.]+";return{aliases:["https"],i:"\\S",c:[{b:"^"+t,e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{b:"^[A-Z]+ (.*?) "+t+"$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0},{b:t},{cN:"keyword",b:"[A-Z]+"}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{e:"$",r:0}},{b:"\\n\\n",starts:{sL:[],eW:!0}}]}});hljs.registerLanguage("javascript",function(e){var r="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},n={cN:"subst",b:"\\$\\{",e:"\\}",k:t,c:[]},c={cN:"string",b:"`",e:"`",c:[e.BE,n]};n.c=[e.ASM,e.QSM,c,a,e.RM];var s=n.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:t,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,c,e.CLCM,e.CBCM,a,{b:/[{,]\s*/,r:0,c:[{b:r+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:r,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+r+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:r},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:s}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:r}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:s}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}});hljs.registerLanguage("xml",function(s){var e="[A-Za-z0-9\\._:-]+",t={eW:!0,i:/</,r:0,c:[{cN:"attr",b:e,r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},s.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[t],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},t]}]}});hljs.registerLanguage("json",function(e){var i={literal:"true false null"},n=[e.QSM,e.CNM],r={e:",",eW:!0,eE:!0,c:n,k:i},t={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(r,{b:/:/})],i:"\\S"},c={b:"\\[",e:"\\]",c:[e.inherit(r)],i:"\\S"};return n.splice(n.length,0,t,c),{c:n,k:i,i:"\\S"}});

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

let basicWarn = function(actual, expected) {
    return "La variable <code>answer</code> vaut <code>" + JSON.stringify(actual) + "</code> et non la résultat attendu, <code>" + expected + "</code>";
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

// Tooltip

let tooltip = function() {
    return `
        <div class="tooltips">
            <span class="ui label" data-tooltip="Le soleil se lève à l'est" data-position="right">Est</span>
            <span class="ui label" data-tooltip="Le soleil se couche à l'ouest" data-position="left">Ouest</span>
            <span class="ui label" data-tooltip="La banquise en Arctique" data-position="top">Nord</span>
            <span class="ui label" data-tooltip="Les volcans de l'Antarctique" data-position="bottom">Sud</span>
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
                        <div class="content">Réserver un vol + hôtel</div>
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

let searchbar = function() {
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

// Glossary

let glossary = function(gpage) {
    let operations = `
        ### Valeurs

        Un nombre.

            12

        D'autres nombres (négatif, fraction, exposant).

            -12 1.5 3.4e10

        Une chaîne avec des guillemets est une chaîne de caractères, un morceau de texte. Guillemets doubles ou simples.

            "Il était une fois"

        Un booléen, true pour oui, false pour non.

            true

        ### Opérateurs

        Une addition (égal 13).

            10 + 3

        Une soustraction (égal 7).

            10 - 3

        Une multiplication (égal 30).

            10 * 3

        Une division (égal 3.33).

            10 / 3

        Un modulo (égal 2). Retourne le reste de la division euclidienne, c'est à dire 14 divisé par 4 arrondi à l'entier inférieur — donc 3. Le module est alors 14 moins 4 fois 3, c'est à dire 2.

            14 % 4
    `;

    let variables = `
        ### Variables, types simples

        La définition d'une variable. La variable « banana » est définie avec la valeur 18. La valeur est optionnelle. var banana (sans donner de valeur) la définit avec la valeur undefined.

            var banana = 18

        Une définition multiple. Chaque définition est séparée par une virgule.

            var banana = 18, lemon = 12

        Un mot sans guillemets référence une variable dans le contexte actuel et accède à sa valeur. Le résultat est 18.

            banana

        Opérateur appliqué à deux variables. Le résultat est 30. Plusieurs opérateurs disponibles,      + pour additionner, - pour soustraire, * pour multiplier, / pour diviser.

            banana + lemon

        Les parenthèses utilisées pour expliciter un groupe. Par défaut les multiplications et les divisions sont exécutées avant les additions. Ici, l'addition est prioritaire grâce aux parenthèses. Le résultat est 300. Sans parenthèses le résultat serait 138.

            (banana + lemon) * 10

        Un opérateur de comparaison. Le résultat est false (18 est supérieur à 12). Plusieurs opérateurs disponibles, ==, != (différent), <, >, <= (inférieur ou égal), >=, === (égal si type identique, le chiffre 18 est différent de la chaîne de caractères "18" pour cet opérateur), !==.

            banana < lemon

        Un opérateur logique. Deux opérateurs,  && (et), || (ou). L'opérateur ou retourne true si l'un de ces membres est évalué à true. L'opérateur et retourne true si tous ses membres sont évalués à true. En cas contraire, ces opérateurs retournent false.
        L'opérateur ou évalue ses membres un à un jusqu'à trouver une valeur évaluée à true, il arrête d'évaluer ses membres dès qu'il en a trouvé une. L'opérateur et évalue ses membres un à un tant qu'il trouve une valeur évaluée à true, il arrête d'évaluer ses membres dès qu'il en a trouvé une false.
        Si ils trouvent une valeur évaluée à true, ces opérateurs retourne la valeur évaluée.

            banana && lemon

        ### Variables, types complexes

        Un tableau représente une liste de valeurs ou de variables.

            var fruits = [banana, lemon, "grapes", 15]

        Accès à l'élément stocké dans la troisième case du tableau (zéro est la première case). Le résultat est "grapes". Si l'élément n'existe pas le résultat est undefined.

            fruits[2]

        Modification de l'élément stocké dans la troisième case du tableau.

            fruits[2] = "strawberries"

        Un objet représente une liste de valeurs sous la forme clé: valeur séparées par des virgules. Deux accolades encadre sa déclaration.

            var tree = {color: "yellow", fruit: "lemon"}

        Accès à la propriété stockée pour la clé color de l'objet tree. Le résultat est "yellow". Si la propriété n'existe pas le résultat est undefined.

            tree.color

        Modification de la propriété stockée pour la clé color de l'objet tree.

            tree.color = "green"

        Utilisation d'objet comme éléments d'un tableau.

            var fruits=[{color:"red",fruit:"grapes"},{color:"yellow",fruit:"lemon"}]

        Utilisation de tableaux comme valeur d'objet.

            var fruits={color:["red", "green"],fruit:"grapes"}

        ### Propriétés usuelles des tableaux

        Retourne le nombre d'éléments du tableau.

            fruits.length

        Ajoute un élément au début du tableau.

            fruits.unshift("orange")

        Ajoute un élément à la fin du tableau.

            fruits.push("orange")

        Supprime le premier élément d'un tableau et le retourne.

            fruits.shift()

        Supprime le dernier élément d'un tableau et le retourne.

            fruits.pop()

        Retourne une partie du tableau, similaire à slice pour les chaîne de caractères.

            fruits.slice(1, 3)
    `;

    let conditions = `
        ### Branchements conditionnels

        Une instruction conditionnelle. Si la condition est évaluée à true, les instructions situées entres les premières accolades sont exécutées. Sinon, les instructions du else sont exécutées. Le else est optionnel. Les instructions conditionnelles de ce type peuvent être chaînées : if (condition) {} else if (otherCondition) {} else {}.

            if (tree.color == "yellow") { /* .. */ } else { /* .. */ }

        Une boucle. Les instructions entre accolades sont exécutées tant que la condition est évaluée à true.

            while (size < 12) { size = size - 1; }

        Une boucle pour. Cette boucle est composé de trois blocs séparés par des points virgules. Le premier déclare une variable et l'initialise, le second indique la condition de sortie de boucle et le troisième indique l'opération a effectuer après chaque tour de boucle. Pour chaque tour de boucle les instructions entre accolades sont exécutées.

            for (var i = 0; i < 10; i++) { /* .. */ }

        ### Propriétés mathématiques usuelles

        Retourne un nombre aléatoire entre 0 et 1.

            Math.random()

        Retourne un entier arrondi au plus proche. Le résultat est 2 (ou 3 pour Math.round(2.5)).

            Math.round(2.4)

        Retourne la valeur absolue d'une nombre. Le résultat est 4.

            Math.abs(-4)

        Retourne le nombre le plus grand parmi une liste. Le résultat est 5.

            Math.max(1, 5, 4)
    `;

    let dom = `
        ### DOM — Document Object Model

        Sélectionne le premier élément de la page avec la classe visible. La sélection se fait avec la même syntaxe que celle utilisée par le CSS. Le sélecteur #name, sélectionne l'élément avec l'id name le sélecteur .value sélectionne l'élément avec la classe value.

            var el = document.querySelector('.visible');

        Une fois un élément sélectionné, il est possible de modifier son contenu (le texte situé entre ses balises). Le texte ainsi remplacé peut être un simple mot ou une suite de balises HTML qui seront intégrées à la page, par exemple "&lt;li&gt;item&lt;/li&gt;".

            el.innerHTML = 'text';

        Une fois un élément sélectionné, il est possible de modifier les classes dont il dispose à l'aide de son attribut classList. Celui-ci dispose notamment des méthodes add (ajouter une classe), remove (supprimer une classe) ou toggle (ajouter une classe si elle n'est pas présente, la supprimer si elle l'est).

            el.classList.add('.visible');

        Une fois un élément sélectionné, le supprime de la page.

            el.remove();

        Une fois un élément sélectionné, accède à ses attributs data-*. Ici dataset.value accède à son attribut data-value. Sa valeur peut être lue ou modifiée.

            el.dataset.value;

        Sélectionne tous les éléments de la page avec la classe visible.

            var els = document.querySelectorAll('.visible');

        Sélectionne tous les éléments td de la première table de la page.

            var els = document.querySelector('table').querySelectorAll('td');

        Ajoute un écouteur d'événement sur le premier élément de la page avec la classe visible. La fonction echo sera déclenchée à chaque clic sur cet élément. Les événements disponibles sont nombreux, notamment click, keypress (l'appui sur une touche) et blur (la perte de focus sur un champ de formulaire).

            var echo = function(event) { console.log(event.target); }
            document.querySelector('.visible').addEventListener('click', echo);
    `;

    let functions = `
        ### Fonctions usuelles

        Convertit une chaîne de caractères en nombre. Le résultat est 5.

            Number("5")

        Convertit un nombre en chaîne de caractère. Le résultat est "5".

            String(5)

        Retourne la taille (le nombre de caractères) d'une chaîne de caractères.

            "yellow".length

        Retourne le caractère à la position indiqué (0 est la première position). Le résultat est "o".

            "yellow".charAt(4)

        Retourne une partie de la chaîne  située entre les deux positions (0 est la première position, la position de début est incluse, pas celle de fin). Le résultat est "ll".

            "yellow".slice(2, 4)

        Découpe la chaîne selon un caractère, retourne un tableau. Le résultat est ["hi", "all"]

            "hi all".split(" ")

        ### Déclaration de fonctions

        Déclaration d'une fonction qui prend une variable en paramètre et retourne son attribut color. Une fonction peut prendre plusieurs paramètres en entrée (séparés par des virgules). Le corps de la fonction peut être composé de plusieurs traitements (conditions, boucles, etc).

            var findColor = function(something) { return something.color; }

        Appel de la fonction avec la variable tree. Le résultat est "yellow".

            var found = findColor({color: 'yellow'})
    `;

    let classes = `
        ### Classes, objet et prototype

        Crée une classe Pie.

            var Pie = function(fruits) { this.fruits = fruits; this.pieces = 8; }

        Ajoute une méthodes aux objets de la classe Pie.

            Pie.prototype.eat = function() { this.pieces--; }

        Crée un objet de classe Pie.

            var applePie = new Pie('apple')

        Crée un second objet de classe Pie.

            var cheeseCake = new Pie('cheese')

        Accède à un attribut de l'objet.

            applePie.fruits

        Ajoute dynamiquement un attribut à l'objet.

            applePie.weight = '800g'

        Invoque une méthode de l'objet.

            applePie.eat()

        Ajoute une méthode (dite statique) à la classe.

            Pie.favoriteFavour = function() { return 'lemon'; }

        Invoque une méthode de la classe.

            Pie.favoriteFavour()
    `;

    gpage = gpage || 1;

    let description = `
        <div class="ui stackable one column grid h-glossary animated hidden" data-hook="glossary">
            <div class="column">
                <div class="ui fluid card">
                    <div class="ui top attached tabular stackable menu">
                        <div class="${gpage === 1 ? 'active' : ''} item" data-tab="first">Opérations</div>
                        <div class="${gpage === 2 ? 'active' : ''} item" data-tab="second">Variables</div>
                        <div class="${gpage === 3 ? 'active' : ''} item" data-tab="third">Conditions</div>
                        <div class="${gpage === 4 ? 'active' : ''} item" data-tab="forth">DOM</div>
                        <div class="${gpage === 5 ? 'active' : ''} item" data-tab="fifth">Fonctions</div>
                        <div class="${gpage === 6 ? 'active' : ''} item" data-tab="sixth">Classes</div>
                    </div>
                    <div class="content">
                        <div class="description ${gpage === 1 ? '' : 'hidden'}" data-tab="first">${marked(dedent(operations))}</div>
                        <div class="description ${gpage === 2 ? '' : 'hidden'}" data-tab="second">${marked(dedent(variables))}</div>
                        <div class="description ${gpage === 3 ? '' : 'hidden'}" data-tab="third">${marked(dedent(conditions))}</div>
                        <div class="description ${gpage === 4 ? '' : 'hidden'}" data-tab="forth">${marked(dedent(dom))}</div>
                        <div class="description ${gpage === 5 ? '' : 'hidden'}" data-tab="fifth">${marked(dedent(functions))}</div>
                        <div class="description ${gpage === 6 ? '' : 'hidden'}" data-tab="sixth">${marked(dedent(classes))}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui top right attached medium labels">
            <div class="ui mini basic button" data-hook="toggle-glossary">
                <i class="book icon"></i>
                <span>Lexique</span>
            </div>
        </div>
    `;

    return description;
};

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

let mouseevent = function(el, event) {
    if(el.fireEvent) {
        el.fireEvent('on' + event);
    } else  {
        let oEvent = document.createEvent('MouseEvent');
        oEvent.initEvent(event, true, false);
        el.dispatchEvent(oEvent);
    }
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
                    Connu aussi sous le nom d'ECMAScript (le standard qui le sous-tend), JavaScript est un langage de programmation dynamique, principalement utilisé dans les navigateurs web pour interagir avec l'utilisateur, modifier l'état de la page et communiquer avec un serveur de façon asynchrone. Depuis peu, il est aussi utilisé côté serveur à l'aide d'environnements d'exécution (comme [Node.js](https://nodejs.org)).

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
                    * 2016 — Standardisation de ECMAScript 7, également nommé ES2016

                    À son apparition, JavaScript ajouta une pointe de vie aux sites internet. Il fût possible de naviguer au sein d'un carrousel d'images sans quitter la page ou de valider un formulaire avant de l'envoyer. L'arrivée de moteurs d'exécution performants, V8 en tête, changea la donne. D'un langage d'appoint, JavaScript allait devenir le langage du web.

                    Une grande majorité des sites internet a désormais recours à lui. Il joue de plus en plus un rôle de chef d'orchestre, gérant toutes les problématiques d'un site internet. Il permet également de construire des applications mobiles (Mozilla a même tenté de développer un système d'exploitation aux applications natives réalisées uniquement en JavaScript) des jeux vidéos et des applications de bureau (l'application de streaming musical Spotify et l'éditeur de code Atom, par exemple).
                `
            },
            {
                title: "Principe",
                course: true,
                description: `
                    L'usage classique de JavaScript se fait au sein d'une page HTML. Cette dernière est composé de deux parties, une en-tête — la balise [\`<head>\`](https://developer.mozilla.org/en/docs/Web/HTML/Element/head) — et un contenu — la balise [\`<body>\`](https://developer.mozilla.org/en/docs/Web/HTML/Element/body). Son entête peut contenir des liens vers d'autres ressources nécessaires à la page, comme des fichiers CSS et/ou JS.

                    À la saisie d'une URL dans un navigateur web, celui-ci se connecte à un serveur et télécharge les données transmises par ce serveur — par exemple, un fichier HTML. Si ce fichier référence des ressources dans son entête, elles sont téléchargées automatiquement.

                    Le CSS permet de mettre en forme le contenu d'un fichier HTML (couleurs, organisation, effets au survol, etc). Il est inséré à l'aide de la balise [\`<link>\`](https://developer.mozilla.org/en/docs/Web/HTML/Element/link).

                    Le JS permet de rendre dynamique le contenu d'un fichier HTML (action lors d'un clic, notification utilisateur lors d'une action, etc). Il est inséré à l'aide de la balise [\`<script>\`](https://developer.mozilla.org/en/docs/Web/HTML/Element/script)

                    Les premières applications web étaient statiques, et nombreuses sont celles qui le sont encore. Une application statique a le fonctionnement suivant :
                    * l'utilisateur saisit une adresse dans son navigateur (ou clique sur le résultat d'un moteur de recherche)
                    * le navigateur se connecte à un serveur et récupère la page concernée
                    * le navigateur télécharge les ressources listées dans l'entête de la page
                    * le navigateur efface la page précédente et affiche la nouvelle page, la met en forme avec le CSS et exécute le JS de son entête
                    * si l'utilisateur clique sur un lien [\`<a>\`](https://developer.mozilla.org/en/docs/Web/HTML/Element/a) de la page, ces étapes reprennent à l'étape 2
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
        description: "JavaScript est un langage de script au typage dynamique.<br><br>Ce chapitre présente les bases du langage avec les variables (nombres, chaines de caractères, etc) et les opérations (addition, concaténation).",
        color: "green",
        steps: [
            {
                course: true,
                description: `
                    JavaScript est un langage de script au typage dynamique. C'est un langage orienté objet à prototype qui supporte la programmation impérative et fonctionnelle (ses fonctions sont des citoyens de première classe). Sa syntaxe est héritée du C tandis que sa sémantique est inspirée par Smalltalk et Lisp.

                    ### Les variables

                    Une variable est un symbole qui associe un nom à une valeur stockée en mémoire. Le nom doit être unique. La valeur peut être de plusieurs types.

                    JavaScript est un langage typé dynamiquement, toutes les variables sont définies avec le mot clé \`var\` et le moteur d'exécution se charge de leur affecter le type adéquat (type qui peut évoluer dans le temps). Le langage propose trois types primitifs — [\`Boolean\`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [\`Number\`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number) et [\`String\`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String) — et deux types composites — [\`Object\`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object) et [\`Array\`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array).

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
                description: "Déclarer une variable nommée <code>answer</code> et lui affecter la valeur numérique <code>12</code>",
                excerpt: "Une variable est un symbole qui associe un nom à une valeur stockée en mémoire. Le nom doit être unique. La valeur peut être de plusieurs types.<br><br><strong>Exemple</strong> : l'instruction <code>var value = 5;</code> déclare la variable <code>value</code> et lui affecte la valeur numérique <code>5</code> (le point virgule en fin de chaque ligne est optionnel).",
                solved: "var answer = 12;",
                warn: "La variable <code>answer</code> doit être déclarée et initialisée à <code>12</code>",
                solution: function() {
                    return answer === 12;
                }
            },
            {
                title: "Initialiser une variable (de type chaîne de caractères)",
                description: "Déclarer une variable nommée <code>answer</code> et lui affecter la valeur <code>'lorem ipsum'</code>",
                solved: "var answer = 'lorem ipsum';",
                warn: "La variable <code>answer</code> doit être déclarée et initialisée à <code>'lorem ipsum'</code>",
                solution: function() {
                    return answer === 'lorem ipsum';
                }
            },
            {
                title: "Initialiser une variable (de type booléen)",
                description: "Déclarer une variable nommée <code>answer</code> et lui affecter la valeur <code>true</code>",
                solved: "var answer = true;",
                warn: "La variable <code>answer</code> doit être déclarée et initialisée à <code>true</code>",
                solution: function() {
                    return answer === true;
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
                description: "Créer une variable nommée <code>answer</code> et lui affecter la somme des variables numériques <code>x</code> et <code>y</code> (déclarées par ce tutoriel).",
                excerpt: "Un opérateur est un symbole qui représente une action. Il permet d'opérer sur deux valeurs, les additionner, les soustraire ou autre. Une variable peut être affectée du résultat d'un opérateur.<br><br><strong>Exemple</strong> : l'instruction <code>var value = 5 + 10;</code> déclare la variable <code>value</code> et lui affecte le résultat de l'opération, <code>15</code>.",
                solved: "var answer = x + y;",
                init: function() {
                    window.x = this.x = random();
                    window.y = this.y = random();
                },
                answer: function() {
                    return this.x + this.y;
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Concaténer deux chaines de caractères",
                description: "Créer une variable nommée <code>answer</code> et lui affecter la concaténation des variables <code>x</code> et <code>y</code> séparées d'un espace (déclarées par ce tutoriel).",
                excerpt: "Ajouter une chaine de caractères à une autre avec l'opérateur <code>+</code> permet de les concaténer (les mettre bout à bout).<br><br>Pour ajouter un espace à une chaine existante, il est possible de créer une chaine composée uniquement d'un espace <code>' '</code>. Les chaines de caractères peuvent être déclarées à l'aide de guillemets simples <code>'lorem ipsum'</code> ou double <code>\"lorem ipsum bacon\"</code>.<br><br><strong>Exemple</strong> : <code>'lorem ' + 'ipsum'</code> crée la chaine <code>'lorem ipsum'</code>.",
                solved: "var answer = x + ' ' + y;",
                init: function() {
                    window.x = this.x = randomize('purple', 'sapphire', 'blue', 'red');
                    window.y = this.y = randomize('skate', 'rollers', 'submarine');
                },
                answer: function() {
                    return this.x + ' ' + this.y;
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Diviser deux nombres (division euclidienne)",
                description: "Créer une variable nommée <code>answer</code> et lui affecter le résultat de la division de la variables <code>x</code> par <code>y</code> (déclarées par ce tutoriel) arrondi à l'entier inférieur.",
                excerpt: "Il est possible d'effectuer des arrondis avec la fonction <code>parseInt(value, 10)</code> ou <code>Math.floor(value)</code> (founies par tous les navigateurs).",
                solved: "var answer = parseInt(x / y, 10);",
                init: function() {
                    window.x = this.x = randomize(13, 23, 33, 43, 53);
                    window.y = this.y = randomize(2, 4, 6, 8);
                },
                answer: function() {
                    return parseInt(this.x / this.y, 10);
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
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
                title: "Identifier le nombre le plus grand",
                description: "Créer une variable nommée <code>answer</code> et lui affecter la valeur du plus grand nombre parmi <code>x</code> et <code>y</code> (déclarées par ce tutoriel).",
                excerpt: "Il est égalemen d'écrire une condition qui vérifie lequel de deux nombres est le plus grand avec <code>if</code>. Ou, à la place d'utiliser <a target=\"_blank\" href=\"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math\"><code>Math</code></a>, celui-ci dispose de fonctionnalités pour identifier les maximum, minimum, sinus, etc.",
                solved: "var answer;<br>if (x > y) {<br>  answer = x;<br>} else {<br>  answer = y;<br>}<br><br>/* or, instead */<br><br>var answer = Math.max(x, y);",
                init: function() {
                    window.x = this.x = random();
                    window.y = this.y = random();
                },
                answer: function() {
                    return Math.max(this.x, this.y);
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Identifier le texte le plus long",
                description: "Créer une variable nommée <code>answer</code> et lui affecter la valeur de la chaîne de caractères la plus longue parmi <code>x</code> et <code>y</code> (déclarées par ce tutoriel).",
                excerpt: "Les chaines de caractères sont des tableaux de caractères. Elles disposent donc d'un attribut <code>length</code> indiquant leur nombre d'éléments. Il est également possible d'accéder - comme pour un tableau - à un élément avec son index.<br><br><strong>Exemple</strong> : <code>'lorem ipsum'.length</code> retourne <code>11</code>, car la chaine est composée de 11 caractères. <code>'lorem ipsum'[3]</code> retourne <code>e</code>, car il s'agit du 4iem caractère de la chaine (l'index des tableaux commence à zéro).",
                solved: "var answer;<br>if (x.length > y.length) {<br>  answer = x;<br>} else {<br>  answer = y;<br>}",
                init: function() {
                    window.x = this.x = randomize('purple', 'sapphire', 'blue', 'red');
                    window.y = this.y = randomize('skate', 'rollers', 'submarine');
                },
                answer: function() {
                    return this.x.length > this.y.length ? this.x : this.y;
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Récupérer le résultat d'une comparaison",
                description: "Créer une variable nommée <code>answer</code> et lui affecter <code>true</code> si la somme de <code>x</code> et <code>y</code> (déclarées par ce tutoriel) est supérieure à 100, <code>false</code> sinon.",
                excerpt: "En plus des nombres et des chaines de caractères, le langage dispose de booléens, des variables dont la valeur est <code>true</code> ou <code>false</code>. Les conditions et les boucles sont basées sur des tests booléens (faits par le navigateur).",
                solved: "var answer = x + y > 100;",
                init: function() {
                    window.x = this.x = randomize(30, 40, 50);
                    window.y = this.y = randomize(50, 60, 70);
                },
                answer: function() {
                    return this.x + this.y > 100;
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
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
                description: "Créer une variable nommée <code>answer</code> et lui affecter <code>true</code> si <code>x</code> (déclarées par ce tutoriel) est supérieur à 10 et inférieur à 15, <code>false</code> sinon.",
                excerpt: "Les opérateurs et <code>&&</code> et ou <code>||</code> permettent de combiner des conditions.<br><br><strong>Exemple</strong> : <code>10 < 12 && 12 < 15</code> retourne <code>true</code> car les deux conditions sont vérifiées. <code>10 < 12 || 12 > 15</code> retourne <code>true</code> car une des deux conditions est vérifiée. <code>10 > 12 || 12 > 15</code> retourne <code>false</code> car aucune des deux conditions n'est vérifiée.",
                solved: "var answer = x > 10 && x < 15;",
                init: function() {
                    window.x = this.x = randomize(5, 11, 14, 18);
                },
                answer: function() {
                    return this.x > 10 && this.x < 15;
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Effectuer une condition ou une autre",
                description: "Créer une variable nommée <code>answer</code> et lui affecter <code>true</code> si <code>x</code> (déclarées par ce tutoriel) est supérieur à 10 ou inférieur à -10, <code>false</code> sinon.",
                solved: "var answer = x > 10 || x < -10;<br><br>/* or, instead */<br><br>var answer = Math.abs(x) > 10;",
                init: function() {
                    window.x = this.x = randomize(-18, -14, -11, -5, 5, 11, 14, 18);
                },
                answer: function() {
                    return this.x > 10 || this.x < -10;
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "L'expression de boucle while",
                course: true,
                description: `
                    Les boucles sont des expressions conditionnelles dont l'opération peut-être répétée à plusieurs reprises.

                    L'expression conditionnelle de boucle \`while\` effectue une opération tant que sa condition est vérifiée (égale à \`true\`).

                    **Opération conditionnelle while :**

                        // compute 4! which is equal to 4*3*2*1

                        var fact = 4;
                        var total = 1;

                        while (fact > 0) {
                          total = total * fact;
                          fact = fact - 1;
                        }

                        // total === 24

                    Il est également possible d'utiliser le mot clé \`do\` afin d'effectuer l'opération une première fois avant d'itérer.

                    **Opération conditionnelle while alternative :**

                        var fact = 4;
                        var total = 1;

                        do {
                          total = total * fact;
                          fact = fact - 1;
                        } while (fact > 0);

                        // total === 24
                `
            },
            {
                title: "Calculer une puissance",
                description: "Créer une variable nommée <code>answer</code> et lui affecter la valeur de <code>x</code> puissance <code>y</code> (ex. 2^3 = 2*2*2 — déclarées par ce tutoriel)",
                solved: "var answer = x;<br>while (y > 1) {<br>  answer = answer * x;<br>  y = y - 1;<br>}",
                init: function() {
                    window.x = this.x = randomize(2, 4, 6);
                    window.y = this.y = randomize(3, 5, 7);
                },
                answer: function() {
                    return Math.pow(this.x, this.y);
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Calculer une plage",
                description: "Créer une variable nommée <code>answer</code> et lui affecter la valeur de la plage située entre <code>x</code> et <code>y</code> (ex. 2-5 = 2+3+4+5 — déclarées par ce tutoriel)",
                solved: "var answer = 0;<br>while (x <= y) {<br>  answer = answer + x;<br>  x = x + 1;<br>}",
                init: function() {
                    window.x = this.x = randomize(2, 4, 6);
                    window.y = this.y = randomize(8, 10, 12);
                },
                answer: function() {
                    var x = this.x;
                    var y = this.y;
                    var result = 0;
                    while(x <= y) {
                        result = result + x;
                        x++;
                    }
                    return result;
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
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

                        notes;
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
                title: "Normaliser des numéros de téléphones",
                description: "Créer une variable nommée <code>answer</code> et lui affecter la valeur de <code>x</code> (éclarée par ce tutoriel) dont tous les espaces ont été retirés (ex. '06 05 04 03 02' -> '0605040302').",
                excerpt: "Les condition et les boucles peuvent être imbriquées les unes dans les autres.<br><br>Les chaines de caractères sont des tableaux de caractères. Elles disposent donc d'un attribut <code>length</code> indiquant leur nombre d'éléments. Il est également possible d'accéder - comme pour un tableau - à un élément avec son index.<br><br><strong>Exemple</strong> : <code>'lorem ipsum'.length</code> retourne <code>11</code>, car la chaine est composée de 11 caractères. <code>'lorem ipsum'[3]</code> retourne <code>e</code>, car il s'agit du 4iem caractère de la chaine (l'index des tableaux commence à zéro).",
                solved: "var answer = '';<br>for (var i = 0; i < x.length; i++) {<br>  var char = x[i];<br>  if (char !== ' ') {<br>    answer = answer + char;<br>  }<br>}",
                init: function() {
                    window.x = this.x = randomize('06 03 05 02 04 ', '06 01  04 03 07', ' 06 08 03 09 02');
                },
                answer: function() {
                    return this.x.replace(/[ ]+/g, '');
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Calculer une plage d'impairs",
                description: "Créer une variable nommée <code>answer</code> et lui affecter la valeur de tous les nombres de 1 jusqu'à <code>x</code> (déclarée par ce tutoriel) sans les pairs (ex. 7 -> 7 + 5 + 3 + 1).",
                solved: "var answer = 0;<br>for (var i = 1; i <= x; i++) {<br>  if (i % 2 === 1) {<br>    answer = answer + i;<br>  }<br>}<br><br>/* or, instead */<br><br>var answer = 0;<br>for (var i = 1; i <= x; i = i + 2) {<br>  answer = answer + i;<br>}",
                init: function() {
                    window.x = this.x = random(5, 9);
                },
                answer: function() {
                    let result = 0;
                    for(let i = 1; i <= this.x; i++)
                        if (i % 2 !== 0)
                            result += i;
                    return result;
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Identifier un palindrome",
                description: "Créer une variable nommée <code>answer</code> ayant pour valeur <code>true</code> si <code>x</code> (déclarée par ce tutoriel) est un palindrome, <code>false</code> sinon. Un palindrome est un mot qui se lit de la même manière à l'endroit et à l'envers (ex. kayak).",
                solved: "var answer = true;<br>for (var i = 0; i < x.length / 2; i++) {<br>  if (x[i] !== x[x.length - 1 - i]) {<br>    answer = false;<br>  }<br>}",
                init: function() {
                    window.x = this.x = randomize('anna', 'kayak', 'eva', 'canoe');
                },
                answer: function() {
                    return this.x === this.x.split('').reverse().join('');;
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "L'expression conditionnelle switch",
                course: true,
                description: `
                    L'expression conditionnelle \`switch\` effectue l'opération relative à l'une de ces conditions case si la valeur est strictement égale, ===, ou sa condition default si aucune condition n'est respectée. Le mot clé \`break\` termine les opérations d'une condition.

                    **Expressions conditionnelles switch :**

                        var instrument;

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
        title: "Les tableaux",
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

                    **Modification d'un tableau par index :**

                        var beatles = ['paul', 'john'];
                        beatles[3] = 'ringo';

                        beatles;
                        → ['paul', 'john', undefined, 'ringo']
                `
            },
            {
                title: "Créer un tableau",
                description: "Créer une variable nommée <code>answer</code> de type tableau et lui ajouter les valeurs de <code>x</code> et de <code>y</code> (déclarées par ce tutoriel).",
                excerpt: "Les tableaux représentent une liste ordonnée de variables (qu'importe leur type). La propriété <code>length</code> permet de connaitre le nombre d'éléments d'un tableau. Les crochets <code>[ ]</code> permettent d'accèder à un élément par index (l'index des tableaux commence à zéro).",
                solved: "var answer = [x, y];",
                init: function() {
                    window.x = this.x = random(1, 10);
                    window.y = this.y = random(11, 20);
                },
                answer: function() {
                    return [this.x, this.y];
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return equals(answer, this.answer());
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
                    * \`concat(array1, …, arrayN)\` concatène des tableaux à la suite

                    **Attributs et méthodes des tableaux :**

                        var beatles = ['paul', 'john', 'george', 'ringo'];
                        beatles.length;
                        → 4

                        beatles.push('brian');
                        beatles;
                        → 'paul', 'john', 'george', 'ringo', 'brian'

                        beatles.shift();
                        beatles;
                        → 'john', 'george', 'ringo', 'brian'

                        beatles.indexOf('ringo');
                        → 2

                        beatles.splice(1, 2);
                        beatles;
                        → 'john', 'brian'

                        beatles.sort();
                        → 'brian', 'john'

                    Les méthodes disponibles sur les tableaux sont fournies par le langage. Il est également possible d'écrire ses propres méthodes.
                `
            },
            {
                title: "Concaténer deux tableaux",
                description: "Créer une variable nommée <code>answer</code> de type tableau et lui ajouter les valeurs de <code>x</code> (un tableau également) et de <code>y</code> (déclarées par ce tutoriel).",
                excerpt: "La méthode <code>concat</code> permet de rassembler un tableau à tableaux autres.",
                solved: "var answer = [].concat(x, y);",
                init: function() {
                    this.x = [random(1, 10), random(1, 10)];
                    window.x = this.x.slice(0);
                    window.y = this.y = random(11, 20);
                },
                answer: function() {
                    return [].concat(this.x, this.y);
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return equals(answer, this.answer());
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

                        everyone;
                        → '0 -> paul, 1 -> john, 2 -> george, 3-> ringo, '

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

                        everyone;
                        → '0 -> paul, 1 -> john, 2 -> george, 3-> ringo, '

                    Cette version est une alternative à la boucle classique, il existe de nombreuses manières d'itérer sur des tableaux.
                `
            },
            {
                title: "Modifier un tableau",
                description: "Créer une variable nommée <code>answer</code> de type tableau avec toutes les valeurs du tableau <code>x</code> (déclarée par ce tutoriel) dont chaque valeur a été arrondie à l'entier le plus proche (ex. [1.2, 5.7, 7.5] -> [1, 6, 8]).",
                excerpt: "Les boucles <code>for</code> sont souvent utilisées pour parcourir un tableau et récupérer chacune de ses valeurs une à une.<br><br><strong>Exemple</strong> : <pre><code>for (var i = 0; i < items.length; i++) { <br>  console.log('value', items[i]); <br>}</code></pre> parcourt un tableau et affiche chacune de ses valeurs.",
                solved: "var answer = [];<br>for (var i = 0; i < x.length; i++) {<br>  var value = x[i];<br>  answer[i] = Math.round(value); <br>}",
                init: function() {
                    this.x = [random(1, 10) + 0.1 * random(1, 10), random(1, 10) + 0.1 * random(1, 10), random(1, 10) + 0.1 * random(1, 10), random(1, 10) + 0.1 * random(1, 10)];
                    window.x = this.x.slice(0);
                },
                answer: function() {
                    return this.x.map(function(item) { return Math.round(item); });
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return equals(answer, this.answer());
                }
            },
            {
                title: "Filtrer un tableau",
                description: "Créer une variable nommée <code>answer</code> de type tableau avec toutes les valeurs du tableau <code>x</code> dont les valeurs inférieures à 10 ont été retirées (ex. [7, 12, 3, 17] -> [12, 17] — déclarées par ce tutoriel).",
                solved: "var answer = [];<br>for (var i = 0; i < x.length; i++) {<br>  if (x[i] >= 10) {<br>    answer.push(x[i]);<br>  }<br>}",
                init: function() {
                    this.x = [random(1, 20), random(1, 20), random(1, 20), random(1, 20), random(1, 20), random(1, 20), random(1, 20), random(1, 20)];
                    window.x = this.x.slice(0);
                },
                answer: function() {
                    let y = this.y;
                    return this.x.filter(function(i) { return i >= 10; });
                },
                warn: function() {
                    return "La variable <code>answer</code> vaut <code>" + JSON.stringify(answer) + "</code> et non la résultat attendu, <code>" + this.answer() + "</code> (attention, le tableau contient des entiers et des chaines de caractères).";
                },
                solution: function() {
                    return equals(answer, this.answer());
                }
            },
            {
                title: "Calculer une moyenne",
                description: "Créer une variable nommée <code>answer</code> ayant pour valeur la moyenne (entière, arrondie à l'inférieur) des valeurs du tableau <code>x</code> (ex. [1, 5, 7] -> (1+5+7)/3 -> 4 — déclarée par ce tutoriel).",
                solved: "var answer = 0;<br>for (var i = 0; i < x.length; i++) {<br>  answer = answer + x[i];<br>}<br>answer = Math.ceil(answer / x.length);",
                init: function() {
                    this.x = [random(1, 10), random(1, 10), random(1, 10), random(1, 10)];
                    window.x = this.x.slice(0);
                },
                answer: function() {
                    return Math.ceil(this.x.reduce(function(memo, value) { return memo + value; }, 0) / this.x.length);
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Supprimer des doublons",
                description: "Créer une variable nommée <code>answer</code> de type tableau avec toutes les valeurs du tableau <code>x</code> (déclarée par ce tutoriel) dont tous les doublons ont été supprimés (ex. ['banana', 'apple', 'apple', 'pear'] -> ['banana', 'apple', 'pear']).",
                solved: "var answer = [];<br>for (var i = 0; i < x.length; i++) {<br>  if (answer.indexOf(x[i]) === -1) {<br>    answer.push(x[i]);<br>  }<br>}",
                init: function() {
                    var fruits = ['banana', 'apple', 'pear', 'pineapple', 'coconut'];
                    this.x = [randomize.apply(null, fruits), randomize.apply(null, fruits), randomize.apply(null, fruits), randomize.apply(null, fruits)];
                    window.x = this.x.slice(0);
                },
                answer: function() {
                    return this.x.filter(function(item, pos, x) {
                        return x.indexOf(item) === pos;
                    });
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return equals(answer, this.answer());
                }
            }
        ]
    }, {
        title: "Les dictionnaires",
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

                    Les attributs des objets littéraux peuvent être ajoutés, modifiés et même supprimés. Il en va de même des éléments des tableaux.

                    **Ajout et modification d'attributs d'un dictionnaire :**

                        paul.guitar = false;
                        paul.bass = true;

                        delete paul.age;

                        paul;
                        → {name: 'Paul', guitar: false, bass: true}

                    Itérer sur un objet littéral retourne ses attributs un à un. Il est alors possible de récupérer la valeur de chacun d'entre eux.

                    **Boucle for..in sur un dictionnaire :**

                        var profil = '';
                        for (var attribute in paul) {
                          profil += attribute + ' -> ' + paul[attribute] +  ', ';
                        }

                        profil;
                        → 'name -> paul, age -> 72, guitar -> true, '

                    Contrairement aux tableaux ou l'ordre d'itération est normé, l'ordre d'itération sur les attributs d'un objet littéral n'est pas garanti. La majorité des implémentations (des navigateurs) itèrent sur les attributs selon l'ordre dans lequel ils ont été définis, mais pas toutes.
                `
            },
            {
                title: "Créer un dictionnaire",
                description: "Créer une variable nommée <code>answer</code> de type dictionnaire avec deux clés, <code>min</code> et <code>max</code>, ayant pour valeur le minimum et le maximum des valeurs <code>x</code> et <code>y</code> (ex. 7, 5 -> {min: 5, max: 7} — déclarées par ce tutoriel).",
                excerpt: "Les objets littéraux ( ou dictionnaires), représentent une suite de paires clé - valeur séparées par une virgule. Chacune des valeurs ainsi listées peut être d'une type primitif ou composite.<br><br><strong>Exemple</strong> : <code>var obj = { age: 27, name: 'paul' }</code> déclare un objet littéral avec deux clés, la première ayant pour valeur un nombre, la seconde, une chaine de caractères. Ainsi <code>obj.age</code> retourne <code>27</code> et <code>obj.name</code> retourne <code>'paul'</code>. Ces valeurs peuvent être modifiées comme elles sont accédées, <code>obj.age = 32</code>.",
                solved: "var answer = {};<br>if (x < y) {<br>  answer.min = x;<br>  answer.max = y;<br>} else {<br>  answer.min = y;<br>  answer.max = x;<br>}",
                init: function() {
                    window.x = this.x = random(1, 50);
                    window.y = this.y = random(1, 50);
                },
                answer: function() {
                    return {min: Math.min(this.x, this.y), max: Math.max(this.x, this.y)};
                },
                warn: function() {
                    return "La variable <code>answer</code> vaut <code>" + JSON.stringify(answer) + "</code> et non la résultat attendu, <code>" + JSON.stringify(this.answer()) + "</code>";
                },
                solution: function() {
                    return equals(answer, this.answer());
                }
            },
            {
                title: "Parcourir un dictionnaire",
                description: "Créer une variable nommée <code>answer</code> et lui affecter le maximum de la propriété <code>age</code> des variables <code>x</code> et <code>y</code> (ex. {age: 7}, {age: 5} -> 7 — déclarées par ce tutoriel).",
                solved: "var answer = Math.max(x.age, y.age);",
                init: function() {
                    this.x = {age: random(1, 50)};
                    window.x = Object.assign({}, this.x);
                    this.y = {age: random(1, 50)};
                    window.y = Object.assign({}, this.y);
                },
                answer: function() {
                    return Math.max(this.x.age, this.y.age);
                },
                warn: function() {
                    return "La variable <code>answer</code> vaut <code>" + JSON.stringify(answer) + "</code> et non la résultat attendu, <code>" + JSON.stringify(this.answer()) + "</code>";
                },
                solution: function() {
                    return equals(answer, this.answer());
                }
            },
            {
                title: "Utiliser un dictionnaire pour structurer des données",
                description: "Créer une variable nommée <code>answer</code> de type dictionnaire, avec cinq clés, <code>a</code>, <code>e</code>, <code>i</code>, <code>o</code> et <code>u</code> et y stocker le nombre de chacune de ces voyelles dans la chaîne de caratères déclarée par la variable <code>x</code> (ex. 'hello' -> {a:0, e:1, i:0, o: 1, u:0} — déclarée par ce tutoriel).",
                solved: "var answer = {a:0, e:0, i:0, o:0, u:0};<br>for (var i = 0; i < x.length; i++) {<br>  switch(x[i].toLowerCase()) {<br>    case 'a': answer.a++; break;<br>    case 'e': answer.e++; break;<br>    case 'i': answer.i++; break;<br>    case 'o': answer.o++; break;<br>    case 'u': answer.u++; break;<br>  }<br>}",
                init: function() {
                    window.x = this.x = randomize("I used to get mad at my school (No I can't complain)", "Lucy in the sky with diamonds", "And in the end, the love you take is equal to the love you make", "Sit back and let the evening go");
                },
                answer: function() {
                    var result = {a:0, e:0, i:0, o:0, u:0};
                    for (var i = 0; i < this.x.length; i++) {
                        switch(this.x[i].toLowerCase()) {
                            case 'a': result.a++; break;
                            case 'e': result.e++; break;
                            case 'i': result.i++; break;
                            case 'o': result.o++; break;
                            case 'u': result.u++; break;
                        }
                    }
                    return result;
                },
                warn: function() {
                    return "La variable <code>answer</code> vaut <code>" + JSON.stringify(answer) + "</code> et non la résultat attendu, <code>" + JSON.stringify(this.answer()) + "</code>";
                },
                solution: function() {
                    return equals(answer, this.answer());
                }
            },
            {
                title: "Filtrer un dictionnaire",
                description: "Créer une variable nommée <code>answer</code> de type dictionnaire, avec les attributs du dictionnaire déclarés par la variable <code>x</code> dont les attributs listés dans le tableau déclaré par la variable <code>y</code> ont été supprimés (ex. {paul:true, john:true, george:true}, ['paul', 'ringo'] -> {john:true, george:true} — déclarée par ce tutoriel).",
                solved: "var answer = x;<br>for (var i = 0; i < y.length; i++)<br>  delete answer[y[i]];",
                init: function() {
                    this.x = {yellow: true, green: true, blue: true, violet: true, red: true, orange: true};
                    window.x = Object.assign({}, this.x);

                    let keys = Object.keys(this.x);
                    let first = randomize.apply(null, keys);
                    keys.splice(keys.indexOf(first), 1);
                    let second = randomize.apply(null, keys);
                    this.y = [first, second];
                    window.y = this.y.slice(0);
                },
                answer: function() {
                    let x = Object.assign({}, this.x);
                    for (let i = 0; i < this.y.length; i++)
                        delete x[this.y[i]];

                    return x;
                },
                warn: function() {
                    return "La variable <code>answer</code> vaut <code>" + JSON.stringify(answer) + "</code> et non la résultat attendu, <code>" + JSON.stringify(this.answer()) + "</code>";
                },
                solution: function() {
                    return equals(answer, this.answer());
                }
            }
        ]
    }, {
        title: "La boucle d'événement",
        description: "En JavaScript, une seule opération a lieu à un instant donné. Si plusieurs opérations devaient avoir lieu simultanément, elles sont mises en file d'attente et exécutées les unes après les autres.<br><br>Ce chapitre présente le concept de la boucle d'événement et son fonctionnement.",
        color: "green",
        steps: [
            {
                course: true,
                description: `
                    En JavaScript, les opérations concurrentes sont gérées via une [boucle d'événement, ou event loop](https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop). Il s'agit d'un modèle simple pour le développeur : une seule opération a lieu à un instant donné. Si plusieurs opérations devaient avoir lieu simultanément, elles sont mises dans une file d'attente et exécutées les unes après les autres.

                    **Deux écouteurs attachés au même événement :**

                        var el = document.body;
                        el.addEventListener('click', function(){
                          el.style.backgroundColor = 'Purple';
                        });
                        el.addEventListener('click', function(){
                          el.style.backgroundColor = 'Yellow';
                        });

                    Dans cet exemple, la couleur de fond de la page passera d'abord en violet avant de devenir jaune (trop rapidement pour être perçu à l'oeil nu). Les deux fonctions sont déclenchées simultanément par un clic de l'utilisateur, mais le navigateur exécute d'abord la première qu'il connaît avant d'effectuer la seconde.

                    Lorsqu'une fonction est exécutée, aucun autre code ne peut l'être parallèlement, tant que celle-ci n'a pas terminée son exécution — et rien n'est donc en mesure de modifier les variables que la fonction manipule, elle est le seul maître à bord.

                    Ceci dit, si une fonction demande un long temps de traitement, cela délaie le traitement de tous les autres événements, notamment les actions utilisateur ; les clics ou défilements de la page n'auront donc lieu qu'après que cette longue fonction se soit terminée.

                `
            },
            {
                title: "Les fonctions asynchrones",
                course: true,
                description: `
                    Les fonctions peuvent être utilisées de deux façons : synchrones et asynchrones. Les premières réalisent un traitement et renvoient immédiatement leur résultat. Les secondes sont mémorisées et déclenchées plus tard par un événement (nommées \`callback\` par convention).
                    Une fonction peut être utilisée des deux façons, comme ci-dessous.

                    **Une fonction utilisée de façon synchrone et asynchrone :**

                        var el = document.body;
                        el.addEventListener('click', function(){
                          setBackground('Purple');
                        });

                        var setBackground = function(color) {
                          el.style.backgroundColor = color;
                        };
                        setBackground('Yellow');

                    Dans cet exemple, la couleur de fond de la page passe au jaune. Si l'utilisateur clique sur le \`body\`, elle passera alors au violet. Tout le code synchrone est exécuté immédiatement, le code asynchrone ne se déclenchera qu'à l'événement clic. Les opérations suivant la fonction asynchrone sont exécutées immédiatement.
                `
            },
            {
                course: true,
                description: `
                    Des fonctions asynchrones peuvent être utilisées également pour des temporisations ; effectuer telle action dans une seconde, ou telle autre toutes les cinq secondes.

                    **Temporisations :**

                        var el = document.body;
                        el.style.backgroundColor = 'Yellow';

                        setTimeout(function() {
                          el.style.backgroundColor = 'Purple';
                        }, 1000);

                        setInterval(function() {
                          el.innerHTML += 'again';
                        }, 5000); // milliseconds

                    Dans cet exemple, la couleur de fond de la page passe au jaune. Puis, au bout d'une seconde, elle passe au violet. Enfin, toutes les cinq secondes, le mot « again » est ajouté au contenu du body. [Deux directives](https://developer.mozilla.org/en/Add-ons/SDK/High-Level_APIs/timers) du langage \`setTimeout\` et \`setInterval\` sont utilisées pour ce faire. Ces temporisations sont très utilises pour réaliser des effets, par exemple déplacer progressivement un élément de la page, ou le faire disparaître petit à petit.

                    Qu'il s'agisse d'événements utilisateur ou de temporisation, si une fonction est appelée alors qu'une autre n'a pas fini son exécution, elle est ajouté dans la file d'attente de l'event loop. Il se peut que d'autres fonctions y soient déjà en attente ; la dernière fonction ajoutée ne s'exécutera que quand toutes les autres de la file d'attente auront été traitées.
                `
            }
        ]
    }, {
        title: "Les erreurs",
        description: "Lorsqu'une opération échoue l'exécution du code s'interrompt et la console du navigateur indique l'erreur qui s'est produite et en explique les causes.<br><br>Ce chapitre présente les erreurs et la façon de les interpréter pour débogger et améliorer un programme.",
        color: "green",
        steps: [
            {
                course: true,
                description: `
                    JavaScript est un langage interprété, le navigateur l'exécute, une ligne après l'autre de gauche à droite. Si une opération venait à échouer (si sa syntaxe est incorrecte ou si une opération n'est pas valide, par exemple), l'exécution du code s'interrompt et les lignes suivantes sont ignorées. La console du navigateur, si elle est affichée, indique l'erreur qui s'est produite et en explique les causes.

                    ### Variables indéfinies

                    Une des erreurs les plus courantes est l'accès à une variable non définie.

                    **Erreur d'accès à des variables ou attributs non définis :**

                        submarine;
                        → Uncaught ReferenceError: submarine is not defined

                        var submarine;
                        → undefined

                        submarine.length;
                        → Uncaught TypeError: Cannot read property 'length' of undefined

                        submarine.surface();
                        → Uncaught TypeError: submarine.surface is not a function

                        submarine = {};
                        submarine.deepness;
                        → undefined
                `
            },
            {
                course: true,
                description: `
                    Tant qu'une variable n'a pas été définie avec le mot clé \`var\` il est impossible d'y faire référence (puisqu'elle n'existe pas encore). Une fois qu'une variable a été définie, il est possible d'y faire référence, cependant, tant qu'aucune valeur ne lui a été affectée, il est impossible d'accéder à un de ces attributs. En effet, une variable définie mais non initialisée se voit affectée la valeur \`undefined\`, et cette valeur particulière du langage n'autorise pas l'accès à un attribut.

                    Une fois une variable définie puis initialisée à une valeur, il est alors possible d'accéder à n'importe lequel de ses attributs, même un attribut non défini. Accéder à un attribut existant retournera sa valeur, accéder à un attribut non défini retournera \`undefined\`. Cela fonctionne également s'il s'agit d'un type simple, un nombre par exemple. La seule erreur qui puisse encore se produire lorsqu'une variable est définie et initialisée est l'exécution d'une fonction qui n'en est pas une. Accéder à un attribut à l'aide de deux parenthèses, comme si l'on souhaitait exécuter une fonction, alors que l'attribut est \`undefined\` ou défini à un autre type qu'une fonction retournera une erreur.

                    Pour éviter qu'un programme soit interrompu de cette façon, il suffit de vérifier l'existence d'une variable, d'un attribut ou d'une fonction avant d'y accéder en cas de doute sur la question.

                    **Vérification de définition d'une variable avant accès :**

                        if (!submarine)
                          submarine = {};

                        if (submarine.deepness)
                          submarine.deepness += 2;

                    Utiliser une expression conditionnelle avec seulement un nom de variable est un raccourci usuel permettant de vérifier qu'une variable est définie — c'est à dire, que sa valeur est bien différente de \`null\`, \`undefined\`, \`NaN\`, chaîne vide (\`""\`), \`0\` ou \`false\`. Pour vérifier l'inverse, c'est à dire que sa valeur n'est pas définie, il faut la préfixer d'un point d'exclamation, \`!submarine\`.

                    Attention, toutefois, si la variable testée n'a pas été déclarée (avec le mot clé \`var\`), une erreur aura lieue. Ces vérifications ne fonctionnent que sur des variables déjà déclarées.

                    Dernier point, le nom des variables est sensible à la casse, \`submarine\` et \`Submarine\` sont deux variables différentes.
                `
            },
            {
                course: true,
                description: `
                    ### Signes englobants

                    Une cause d'erreur potentielle est l'utilisation d'un signe ouvrant sans son homologue fermant. Toute parenthèse ouvrante doit être fermée, c'est également le cas pour les accolades, les tableaux et les guillemets délimitant les chaînes de caractères. Dans le cas contraire, l'erreur \`Unexpected token\` sera levée par le navigateur.

                    ### Opérations absurdes

                    Le langage est très permissif. Une chaîne de caractère peut être multiplié avec une entier, une division par zéro peut avoir lieue, les tableaux peuvent se voir ajouter des attributs ou changer de taille sans que le navigateur ne lève d'erreur.

                    Pour ces cas de figure, le langage prévoit plusieurs possibilités. Une opération mathématique au résultat indéterminable, vaudra \`NaN\`, pour « Not a Number ».

                    **Opérations entre types différents :**

                        "yellow" - 2;
                        → NaN

                        "yellow" + 2;
                        → "yellow2"

                        NaN == NaN; // NaN is the only value that is unequal to itself
                        → false

                        Number.isNaN(NaN); // a method exists to test if a value equals NaN
                        → true

                        2 / 0;
                        → Infinity

                        2 / 0 == Infinity;
                        → true

                        var beatles = [];
                        beatles.length = 2;
                        beatles;
                        → [undefined, undefined]

                    Réaliser de telles opérations est souvent du à une erreur de logique, plus qu'à une volonté. Pour éviter d'y être confronté, il est possible de tester le type des variables avant de les manipuler avec l'opérateur \`typeof\`.

                    **L'opérateur typeof :**

                        typeof "12";
                        → 'string'

                        typeof 12;
                        → 'number'

                        typeof []; // similar to typeof {}
                        → 'object'
                `
            }, {
                course: true,
                description: `
                    ### Anticiper les erreurs

                    La meilleure solution pour éviter de tels blocages d'un programme, est de le tester au préalable. Il existe plusieurs solutions pour ce faire, il est envisageable de vérifier manuellement chaque fonctionnalité, pourtant, au fur et à mesure du développement, cela devient fastidieux. Il est possible d'automatiser ces vérifications à l'aide de tests unitaires. Ces tests sont une suite d'opérations qui vérifient individuellement chaque partie d'un programme. Si tous les tests d'un programme sont positifs et que leur couverture fonctionnelles est suffisante, des tests manuels ne sont plus nécessaires. Ce sujet est abordé en détail dans un chapitre suivant.

                    Il y a des situations où il n'est pas possible de prévenir les erreurs, ou d'autres où il est souhaitable qu'une erreur se produise, afin d'agir en conséquence. Pour ces circonstances, les erreurs peuvent être capturées.

                    **Capture d'une erreur si la méthode n'existe pas ou lève une erreur :**

                        try {
                          submarine.immerse();
                        } catch(error) {
                          // handle a ReferenceError
                        }

                    Les mot clé \`try\` permet de créer un bloc capturant les erreurs. Si une erreur se produit dans ce bloc, les opérations suivantes du bloc sont ignorées et le contenu du bloc \`catch\` est exécuté. Puis le programme continue l'exécution des opérations situées à l'extérieur du bloc \`try\` / \`catch\` ; l'erreur n'interrompt donc pas son exécution. Si la variable retournée par le \`catch\` est de type \`Error\`, elle est composé des attributs \`name\`, \`message\` et \`stack\`. Le premier la nomme, le second décrit l'erreur et le dernier donne la stacktrace ou pile d'erreur, c'est à dire la ligne du fichier où elle s'est produit, la ligne qui a déclenché cette ligne, la ligne qui a déclenché celle-ci, ainsi de suite jusqu'au premier appel ayant déclenché ce code. Analyser cette pile permet souvent de mieux comprendre d'où provient l'erreur.

                    Il est possible de créer ses propres erreurs, mais il est souvent plus souhaitable de retourner une valeur d'erreur (\`-1\` par exemple) ou de ne pas effectuer le traitement puisque l'oubli de capturer une erreur interrompt l'exécution du programme si elle se produit. Lever une erreur contraint tous les utilisateurs de cette fonction à capturer les erreurs potentielles et à agir en conséquence. Cela introduit une certaine lourdeur dans le code.

                    **Lever une erreur simple :**

                        if (!submarine) {
                          throw 'submarine is required';
                        }
                `
            },
            {
                course: true,
                description: `
                    ### Lever des erreurs

                    Les erreurs peuvent être de n'importe quel type, chaîne de caractères, objet (y compris entier et booléen, mais cela n'a pas vraiment d'utilité). Par convention, un objet littéral dotés des attributs \`name\` et \`message\` est utilisé.

                    **Lever une erreur composite :**

                        function AuthorizationError(message) {
                           this.message = message;
                           this.name = 'AuthorizationException';
                        }

                        // every code summoning this one, should try/catch ReferenceError
                        if (!submarine.immerse())
                          throw new AuthorizationError('Immersion failed');

                    Par simplicité, de nombreuses fonctions retournent \`-1\` ou \`undefined\` plutôt que de lever des erreurs quand elles n'ont pas trouvé ce qu'elles cherchaient.

                    **Lever une erreur composite :**

                        var notFound = 'yellow'.indexOf('x'); // notFound == -1

                    ### Le mode strict

                    Puisque le langage est interprété, tant qu'une partie du programme n'a jamais été exécutée, il est impossible d'être sûr qu'elle fonctionne. Afin de réduire les risques d'erreur de saisie, il est possible d'indiquer au navigateur de lever une \`SyntaxError\` avant d'exécuter le programme si certaines conditions ne sont pas remplies.

                    **Activer le mode strict :**

                        "use strict";
                        var color = "yellow";

                    Pour activer le mode strict il suffit d'ajouter la chaîne de caractères \`"use strict"\` en début de fichier. Ainsi, le navigateur est informé qu'il peut refuser certains types d'opérations considérées comme non conformes. Par exemple, la déclaration de deux attributs de même nom dans un objet. Ce mode strict est très utilisé et c'est une bonne idée de faire de même.
                `
            }
        ]
    }, {
        title: "Le DOM",
        description: "JavaScript permet d'écouter les actions utilisateur et de modifier dynamiquement la page à l'aide d'une structure arborescente : le DOM.<br><br>Ce chapitre présente les accès au DOM (sélecteurs CSS) et les écouteurs d'événements (clics ou appuis de touches).",
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

                    Une [liste complète des sélecteurs CSS](https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_Started/Selectors) est disponible pour plus de détails.
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
                solution: function() {
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
                solution: function() {
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
                    → 'Hey Jude is a song by the English rock band <a href="http://www.thebeatles.com">the Beatles</a>'

                    document.querySelector('p').innerHTML = 'Live performance footage <a href=".."><img src=".."></a>';
                    \`\`\`

                    Une documentation détaillée est disponible pour [classList](https://developer.mozilla.org/en/docs/Web/API/Element/classList) et [innerHTML](https://developer.mozilla.org/en/docs/Web/API/Element/innerHTML) pour plus de détails.
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

                    Une [liste complète des événements](https://developer.mozilla.org/en/docs/Web/Events) est disponible pour plus de détails.
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
                solution: function() {
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
                solution: function() {
                    let li = document.querySelector('.board li.candyapplered');
                    li.click();
                    return 16 === document.querySelectorAll('.board li.candyapplered').length;
                }
            },
            {
                title: "Écouter plusieurs événements",
                description: "Ajouter un écouteur d'événement sur tous les éléments dotés de la classe <code>champagne</code>, et, au clic, remplacer cette classe par <code>braken</code>.",
                excerpt: "Le code déclaré dans la fonction d'un écouteur d'événement n'est excuté par le navigateur qu'on moment où l'événement se produit. Cela pose problème avec les boucles car elles modifient les variables <code>i</code> & co. et la valeur du code dans l'écouteur d'événement se retrouve être la dernière positionnée par la boucle.<br><br>Pour éviter cela, il est possible d'utiliser <code>this</code> dasn l'écouteur d'événement (qui correspond à l'élément qui a été cliqué) ou de déclarer toutes les variables de la boucles avec <code>let name</code> au lieu de <code>var name</code> (leur portée est ainsi limitée à la boucle) ou encore de créer une fonction qui encapsule le code déclenché par l'événement.<br><br>Ce problème tient à la portée des variables déclarées avec <code>var</code> qui est locale à la fonction qui l'encapsule, et non à la boucle qui l'encapsule.",
                solved: "var lis = document.querySelectorAll('.board li.champagne');<br>for (var i = 0; i < lis.length; i++) {<br>  var li = lis[i];<br>  li.addEventListener('click', function(event) {<br>    event.target.className = 'braken';<br>  });<br>}",
                dom: function() {
                    return board.bind(board, cartman);
                },
                warn: function() {
                    return "Au clic sur les <code>li.champagne</code>, l'un puis l'autre, ils doivent tous deux avoir la classe <code>braken</code>";
                },
                solution: function() {
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
                excerpt: "Lorsque du code se retrouve dupliqué, il est possible de le rassembler au sein d'une fonction et d'appeller celle-ci plusieurs fois. Le mot clé <code>function</code> permet de déclarer un sous programme qui peut être appelé par du code externe (ou s'appeller elle-même, en cas d'appels récursifs). Comme une boucle conditionnelle, une fonction est composée d'une liste d'opérations (délimitées entre accolades), il est possible de lui fournir des arguments et elle peut retourner une valeur avec le mot clé <code>return</code>. Une fonction est variables comme les autres.<br><br><strong>Exemple</strong> : <pre><code>var double = function(value) { <br>  return value * 2; <br>}</code></pre> crée une fonction qui retourne le double d'un nombre. utilisée ainsi <code>double(12)</code> elle retourne <code>24</code>.",
                solved: "var first = document.querySelector('ul.board li.braken');<br>var second = document.querySelector('ul.board li.champagne');<br><br>first.addEventListener('click', function() {<br>  var memo = first.className;<br>  first.className = second.className;<br>  second.className = memo;<br>});<br><br>second.addEventListener('click', function() {<br>  var memo = first.className;<br>  first.className = second.className;<br>  second.className = memo;<br>});",
                dom: function() {
                    return board.bind(board, kenny);
                },
                warn: function() {
                    return "Au clic sur le premier <code>li.braken</code>, il doit avoir la classe <code>champagne</code> et le premier <code>li.champagne</code> doit avoir la classe <code>braken</code>. Au clic suivant, ces deux <code>li</code> retrouvent leurs classes de départ. Et ainsi de suite";
                },
                solution: function() {
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
                solution: function() {
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
                solved: "var lis = document.querySelectorAll('.board li.braken');<br>var count = [];<br>for (let i = 0; i < lis.length; i++) {<br>  count[i] = 0;<br>  let li = lis[i];<br>  li.addEventListener('click', function() {<br>    count[i]++;<br>    if (count[i] > 2) {<br>      li.className = 'champagne';<br>    }<br>  });<br>}",
                dom: function() {
                    return board.bind(board, kenny);
                },
                warn: function() {
                    return "Au clic sur un <code>li.braken</code> rien ne se produit. Mais après trois clics répétés, ce <code>li</code> doit avoir la classe <code>braken</code>. Au quatrième clic, il doit conserver cette nouvelle classe";
                },
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                solved: "var value = 0;<br>var lis = document.querySelectorAll('.board li');<br>for (var i = 0; i < lis.length; i++) {<br>  var li = lis[i];<br>  li.addEventListener('click', function(event) {<br>    if (!event.target.dataset.value) {<br>      event.target.dataset.value = value++;<br>    }<br>  });<br>}",
                dom: function() {
                    return board.bind(board, kyle);
                },
                warn: function() {
                    return "Au clic sur le premier <code>li</code> il doit avoir un attribut <code>data-value</code> égal à zéro. Au clic sur un autre <code>li</code>, il doit avoir un attribut <code>data-value</code> égal à un. Et ainsi de suite. Au clic sur un élément ayant déjà un <code>data-value</code> celui-ci ne change pas";
                },
                solution: function() {
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
        title: "Les dates",
        description: "Les dates sont des types natifs comme les nombres ou les chaines de caractères, elles permettent de manipuler le calendrier grégorien.<br><br>Ce chapitre présente la manipulation de dates avec la librairie moment — qui en facilite grandement l'usage.",
        color: "yellow",
        steps: [
            {
                title: "Les librairies",
                course: true,
                description: `
                    JavaScript est le langage doté du plus grand répertoire de librairies open source. Une librairie est un ensemble de fichiers mis à disposition (souvent gratuitement) répondant à un ou plusieurs problèmes. Les librairies sont couramment accompagnées d'un mode d'emploi et d'une liste de versions (la version 1.0 à telles fonctionnalités, la 1.1 ajoute celle-ci, la 2.0 remplace celle-là par celle-ci, etc).

                    La librairie la plus connue du langage est [jQuery](http://jquery.com/) (abrégée $). Cette librairie a été développée dès 2006 pour faciliter l'usage de JavaScript ; à cette époque les navigateurs fonctionnaient tous très différemment les uns des autres et il était nécessaire de réaliser une version d'un programme distincte pour chacun d'entre eux. En proposant une façon normalisée d'utiliser les navigateurs, et en simplifiant l'usage d'Ajax (détaillé plus loin), jQuery a offert la possibilité de réaliser une unique version d'un programme compatible avec tous les navigateurs ; et à ainsi fait de JavaScript le langage célèbre qu'il est aujourd'hui.

                    Il existe de très nombreuses librairies et une communauté active les améliore quotidiennement. Il est courant de s'appuyer sur ces librairies pour profiter de l'expérience de la communauté et pour gagner du temps à ne pas réinventer la roue. Il est toutefois souvent sage de tester plusieurs librairies répondant au même problème afin de choisir la plus appropriée à un problème donné.

                    Parmi les librairies les plus utilisés, [moment](http://momentjs.com/) simplifie grandement la manipulation de dates et de calendrier
                `
            },
            {
                title: 'La librairie moment',
                course: true,
                description: `
                    Une date représente un instant du calendrier — précis à la miliseconde près en JavaScript — et les langages de programmation ne facilitent pas forcément la comparaison de dates, leur formatage ou la gestion de différents fuseaux horaires. L'objectif de moment est de simplifier ces opérations.

                    Bien qu'elles soient constituées de nombreux fichiers, les librairies sont souvent rendues disponibles sous la forme d'un seul fichier par soucis de simplicité d'usage. Il suffit alors d'importer ce script dans la page avant ses propres scripts et le tour est joué. Les libraires exposent souvent une variable globale donnant accès à leurs différentes fonctionnalités. Pour la librarie moment, un unique fichier [\`moment.js\`](http://momentjs.com/downloads/moment.js) ou [\`moment.min.js\`](http://momentjs.com/downloads/moment.js) (version minifiée).

                    **Manipulation de dates natives au langage :**

                        new Date(1964, 11, 17); // accepts only one format
                        → Thu Dec 17 1964 00:00:00 GMT+0100 (CET)

                        moment('17121964', 'DDMMYYYY').toDate(); // accepts configurable formats
                        → Thu Dec 17 1964 00:00:00 GMT+0100 (CET)

                    En plus de faciliter la création de dates, et d'utiliser une numérotation de mois commençant à 1 (contrairement aux dates natives qui commencent à 0, ou décembre est donc égal à 11), moment, permet de modifier facilement des dates (ajouter un jour, une semaine, le premier lundi du mois) et de les formater.

                    **Manipulation de dates avec moment :**

                        /* import this in the HTML <head> before the code */
                        /* <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"></script> */

                        var release = moment('17121964', 'DDMMYYYY');
                        release.add(2, 'weeks');
                        release.format('dddd, Do of MMM YYYY')
                        → 'Thursday, 31st of Dec 1964'

                    Sa simplicité d'usage est telle, qu'il est rarement nécessaire d'utiliser à nouveau l'objet Date.
                `
            },
            {
                title: "Formatter des dates",
                description: "Mettre en forme les dates saisies dans <code>.from input</code> et <code>.to input</code> de façon a ce qu'elles s'affichent dans <code>.from .formatted</code> et <code>.to .formatted</code> sous le format « JANV. 10 » (premières initiales du mois, suivies du jour, avec la locale française).",
                excerpt: "La librairie <a target=\"_blank\" href=\"http://momentjs.com/\">moment</a> permet de manipuler facilement des dates, et, notamment, de les mettre en forme en fonction de la locale.",
                solved: "/* import this in the HTML <head> before the code<br>&lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js\"&gt;&lt;/script&gt;<br>&lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/locale/fr.js\"&gt;&lt;/script&gt;<br>*/<br>document.querySelector('.booking .from input').addEventListener('change', function() {<br>  var date = moment(this.value);<br>  document.querySelector('.from .formatted').innerHTML = date.format('MMM').toUpperCase() + ' ' + date.format('D');<br>});<br><br>document.querySelector('.booking .to input').addEventListener('change', function() {<br>  var date = moment(this.value);<br>  document.querySelector('.to .formatted').innerHTML = date.format('MMM').toUpperCase() + ' ' + date.format('D');<br>});",
                dom: function() {
                    return booking.bind(booking);
                },
                solution: function() {
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
                description: "Si la date de retour saisie est antérieure ou égale à la date de l'aller, elle est par défaut 1 jour après l'aller (l'aller est le 12 janvier, la date de retour doit être le 13 janvier au plus tôt).",
                solved: "var from = {<br>  value: null,<br>  input: document.querySelector('.from input'),<br>  formatted: document.querySelector('.from .formatted')<br>}<br>var to = {<br>  value: null,<br>  input: document.querySelector('.to input'),<br>  formatted: document.querySelector('.to .formatted')<br>}<br><br>from.input.addEventListener('change', function() {<br>  from.value = moment(from.input.value);<br>  from.formatted.innerHTML = from.value.format('MMM').toUpperCase() + ' ' + from.value.format('D');<br>});<br><br>to.input.addEventListener('change', function() {<br>  to.value = moment(to.input.value);<br>  if (to.value.isSameOrBefore(from.value)) {<br>    to.value = from.value.clone().add(1, 'day');<br>    to.input.value = to.value.format('YYYY-MM-DD');<br>  }<br>  to.formatted.innerHTML = to.value.format('MMM').toUpperCase() + ' ' + to.value.format('D');<br>});",
                dom: function() {
                    return booking.bind(booking);
                },
                solution: function() {
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
                solution: function() {
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
                description: "Pour chaque voyageur, multiplier le prix (un voyage à 80€ coûtera 240€ pour 3 voyageurs).",
                solved: "var from = {<br>  value: null,<br>  input: document.querySelector('.from input'),<br>  formatted: document.querySelector('.from .formatted')<br>}<br>var to = {<br>  value: null,<br>  input: document.querySelector('.to input'),<br>  formatted: document.querySelector('.to .formatted')<br>}<br>var passengers = 1;<br><br>var total = function() {<br>  if (!from.value || !to.value)<br>    return;<br><br>  var days = to.value.diff(from.value, 'days') + 1;<br>  document.querySelector('.price').innerHTML = 40 * days * passengers + '€';<br>}<br><br>from.input.addEventListener('change', function() {<br>  from.value = moment(from.input.value);<br>  from.formatted.innerHTML = from.value.format('MMM').toUpperCase() + ' ' + from.value.format('D');<br>});<br><br>to.input.addEventListener('change', function() {<br>  to.value = moment(to.input.value);<br>  if (to.value.isSameOrBefore(from.value)) {<br>    to.value = from.value.clone().add(1, 'day');<br>    to.input.value = to.value.format('YYYY-MM-DD');<br>  }<br>  to.formatted.innerHTML = to.value.format('MMM').toUpperCase() + ' ' + to.value.format('D');<br>  total();<br>});<br><br>document.querySelector('select').addEventListener('change', function() {<br>  passengers = this.value;<br>  total();<br>});",
                dom: function() {
                    return booking.bind(booking);
                },
                solution: function() {
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
                description: "Les samedis et dimanches ne sont pas facturés (vendredi, samedi, dimanche coûtera 40€ — 1 jour —, vendredi, samedi, dimanche, lundi coûtera 80€ — 2 jours —, du lundi au lundi deux semaines après, coûtera 840€ — 11 jours).",
                solved: "var from = {<br>  value: null,<br>  input: document.querySelector('.from input'),<br>  formatted: document.querySelector('.from .formatted')<br>}<br>var to = {<br>  value: null,<br>  input: document.querySelector('.to input'),<br>  formatted: document.querySelector('.to .formatted')<br>}<br>var passengers = 1;<br><br>var total = function() {<br>  if (!from.value || !to.value)<br>    return;<br><br>  var days = 0;<br>  var clone = from.value.clone();<br>  while (clone.isSameOrBefore(to.value)) {<br>    if (clone.day() !== 6 && clone.day() !== 0)<br>      days++;<br>    clone.add(1, 'days');<br>  }<br><br>  document.querySelector('.price').innerHTML = 40 * days * passengers + '€';<br>}<br><br>from.input.addEventListener('change', function() {<br>  from.value = moment(from.input.value);<br>  from.formatted.innerHTML = from.value.format('MMM').toUpperCase() + ' ' + from.value.format('D');<br>});<br><br>to.input.addEventListener('change', function() {<br>  to.value = moment(to.input.value);<br>  if (to.value.isSameOrBefore(from.value)) {<br>    to.value = from.value.clone().add(1, 'day');<br>    to.input.value = to.value.format('YYYY-MM-DD');<br>  }<br>  to.formatted.innerHTML = to.value.format('MMM').toUpperCase() + ' ' + to.value.format('D');<br>  total();<br>});<br><br>document.querySelector('select').addEventListener('change', function() {<br>  passengers = this.value;<br>  total();<br>});",
                dom: function() {
                    return booking.bind(booking);
                },
                solution: function() {
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
        title: "Les fonctions",
        description: "Une fonction est un sous programme qui peut être appelé par du code externe, l'utilisation de fonctions permet de structurer un programme.<br><br>Ce chapitre présente la déclaration et l'usage des fonctions, de leurs paramètres et valeur de retour.",
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
                excerpt: "Une fonction est comme une usine, elle transforme quelque chose (ses paramètres d'entrée) en autre chose (son paramètre de sortie). L'utilisation de fonctions permet de structurer un programme. Au lieu de lister toutes les opérations d'un programme les unes à la suite des autres, il est préférable de regrouper les opérations en plusieurs fonctions correspondant à des parties clairement identifiées du programme.<br><br><strong>Exemple </strong>: <pre><code>var double = function(value) {<br>  return value * 2; <br>}</code></pre> déclare une variable <code>value</code> qui sera initialisée à une valeur à chaque appel de la fonction. Cette variable est locale à la fonction, elle n'existe pas à l'extérieur du code de celle-ci. Le mot clé <code>return</code> interrompt immédiatement la fonction et retourne le résultat au code appelant. <pre><code>var x = double(12);<br>x; /* 24 */<br>var y = double(7);<br>y; /* 14 */<br>var weird = double('hello');<br>weird; /* NaN */<br>value; /* undefined */<br></code></pre>",
                solved: "var positive = function(value) {<br>  return value >= 0;<br>};",
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                excerpt: "Les fonctions disposent toutes d'un paramètre spécial <code>arguments</code> qui est un tableau listant tous les paramètres reçus par la fonction. Il est ainsi possible de créer des fonctions dotées d'un nombre indéterminé de paramètres (et sans avoir besoin de nommer chacun d'entre eux).<br><br><strong>Exemple </strong>: <pre><code>var sum = function() { <br>  var total = 0;<br>  for (var i = 0; i < arguments.length; i++) {<br>    total += arguments[i];<br>  }<br>  return total;<br>}</code></pre> crée une méthode calculant la somme d'un nombre quelconque de paramètres, par exemple <code>sum(5, 8, 13)</code> retourne <code>26</code>.",
                solved: "var max = function() {<br>  if (arguments.length === 0)<br>    return -1;<br><br>  var result = arguments[0];<br>  for (var i = 1; i < arguments.length; i++) {<br>    if (arguments[i] > result) {<br>      result = arguments[i];<br>    }<br>  }<br>  return result;<br>};",
                solution: function() {
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
                description: "Créer une fonction <code>count</code> qui prend un paramètre et retourne un littéral indiquant le nombre de « a » et de « e » de cette chaine (sous la forme <code>{a: 5, e: 7}</code>).",
                solved: "var text = 'Short ribs fatback pork chop turducken. Hamburger capicola turkey sausage tail leberkas ham andouille pork chop picanha pancetta landjaeger brisket. Ground round pork belly jowl pancetta frankfurter beef ribs ham cupim turkey tenderloin drumstick sausage shoulder. Pig cow short ribs tenderloin tongue pork belly.';<br>var count = function(text) {<br>  text = text.toLowerCase();<br>  var total = {a: 0, e: 0};<br>  for (var i = 0; i < text.length; i++) {<br>    var char = text.charAt(i);<br>    if (char === 'a')<br>      total.a++;<br>    else if (char === 'e')<br>      total.e++;<br>  };<br>  return total;<br>};",
                solution: function() {
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
                excerpt: "<pre><code>var tree = {<br>  value: 8, <br>  left: {value: 3, left: {value: 1}, right: {value: 6}}, <br>  right: {value: 11, right: {value: 14}}<br>};<br><br>//       8<br>//    3 ─┴─ 11<br>// 1 ─┴─ 6   └─ 14</code></pre>Un arbre binaire dispose d'une racine, <code>8</code> (ici), celle-ci est dotée d'une noeud gauche, <code>3</code> et droit, <code>10</code>, qui, eux-mêmes peuvent disposer d'un noeud gauche et droit, et ainsi de suite. Un arbre binaire est trié de telle sorte que la noeud gauche d'une valeur lui est inférieur, <code>3 > 8</code> et que son noeud droit lui est supérieur, <code>8 < 10</code>. Et ceci récursivement, chaque noeud gauche inférieur à sa racine, chaque noeud droit supérieur à sa racine. Cette structure permet d'effectuer des recherches très efficaces (peu de comparaison) au sein d'un ensemble de valeurs.<br><br>La fonction à réaliser est une fonction récursive (elle peut s'appeler elle-même). Elle vérifie si la racine est égale, supérieure ou inférieure à la valeur recherchée. En cas d'égalité, elle retourne <code>true</code>, en cas d'infériorité, elle s'appelle elle-même avec le noeud gauche, en cas de supériorité, avec le noeud droit. Arrivée en fin d'arbre (sur une feuille — un noeud sans noeud enfant), elle retourne <code>false</code> si sa valeur n'est pas celle recherchée.",
                solved: "var search = function(tree, value) {<br>  if (!tree)<br>    return false;<br>  else if (value === tree.value)<br>    return true;<br>  else if (value > tree.value)<br>    return search(tree.right, value);<br>  else<br>    return search(tree.left, value);<br>};",
                solution: function() {
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
        title: "Composant | Off-Canvas",
        description: "Un off canvas est un menu caché à l'extérieur de l'écran qu'un bouton permet de révéler, il contient couramment les rubriques principales du site.<br><br>Ce chapitre présente les concepts d'un off canvas.",
        color: "violet",
        steps: [
            {
                course: true,
                description: `
                    Un off canvas est un menu caché à l'extérieur de l'écran qu'un bouton permet de révéler. Situé à gauche ou à droite d'une page, il contient couramment les rubriques principales du site et permet d'alléger la page en ne les affichant qu'à la demande. Un bouton « hamburger » est souvent utilisé pour indiquer la présence de ce type de menu.

                    Pour arriver à ce résultat, une option consiste à ajouter le menu et le contenu dans un même bloc, le contenu occupe tout l'espace et le menu occupe une taille fixe, décalé sur le côté. Il reste à indiquer au bloc principal de cacher les contenus au delà de sa largeur maximale pour cacher le menu et éviter un ascenseur horizontal. Une translation peut alors être effectuée sur le bloc principal de la taille du menu afin de révéler ce dernier ou de le cacher à nouveau.

                    Un bloc transparent peut être ajouté au dessus du bloc de contenu principal afin que seul le menu soit utilisable une fois ce dernier révélé ; un clic sur ce bloc transparent déclenchant la fermeture du menu. Ce comportement est optionnel.
                `
            },
            {
                course: true,
                description: "L'animation est réalisée en CSS, avec <code>transition</code>. Le code est détaillé à l'étape d'après.",
                dom: function() {
                    return function() {
                        setTimeout(function() {
                            document.querySelector('.offcanvas .button').addEventListener('click', function() {
                                document.querySelector('.offcanvas').classList.toggle('open');
                            });
                        });

                        return `
                            <p><strong>Démonstration (cliquer sur le menu hamburger) :</strong></p>

                            <div class="offcanvas">
                                <div class="ui secondary vertical menu">
                                    <div class="item">
                                        <div class="ui transparent icon input">
                                            <input type="text" placeholder="Rechercher...">
                                            <i class="search icon"></i>
                                        </div>
                                    </div>
                                    <a class="item">À propos</a>
                                    <a class="item">Équipe</a>
                                    <a class="item">Solutions</a>
                                    <a class="item">Support</a>
                                </div>
                                <div class="content">
                                    <button class="ui icon large button">
                                        <i class="sidebar icon"></i>
                                    </button>
                                    <p>canvas</p>
                                </div>
                            </div>
                        `;
                    }
                }
            },
            {
                course: true,
                description: `
                    Le code JS est très simple, il ajoute ou enlève une classe sur le bloc principal au clic sur le « hamburger » afin d'effectuer la translation.

                        document.querySelector('.offcanvas .button').addEventListener('click', function() {
                            document.querySelector('.offcanvas').classList.toggle('open');
                        });

                    Le code CSS décrit la majorité du comportement.

                        .offcanvas {
                            position: relative;
                            overflow: hidden;
                        }
                        .offcanvas .menu {
                            position: absolute;
                            left: -150px;
                            width: 150px;
                            top: 0;
                            bottom: 0;
                        }
                        .offcanvas .content, .offcanvas .menu {
                            transition: transform 0.5s;
                        }
                        .offcanvas.open .content, .offcanvas.open .menu {
                            transform: translate3d(150px, 0, 0);
                        }
                `
            }
        ]
    }, {
        title: "Composant | Carrousel",
        description: "Un carrousel est une liste (d'images en général) dont une seule est visible et qu'il est possible de faire défiler via des flèches « précédente » et « suivante » situées de part et d'autre du contenu.<br><br>Ce chapitre présente la réalisation d'un carrousel pas à pas.",
        color: "violet",
        steps: [
            {
                course: true,
                description: `
                    Les carrousels sont des listes dont un seul item est visible et dont la navigation de l'un à l'autre des items s'effectue à l'aide de flèches « précédente » et « suivante » situées de part et d'autre du contenu.

                    Pour arriver à ce résultat une option consiste à ajouter les blocs de contenu les uns à la suite des autres, et à n'afficher que le premier d'entre eux.

                    Ensuite, pour basculer d'un élément à un autre, au clic sur une des flèches il est possible de masquer le premier contenu et d'afficher le second, puis de masquer le second et d'afficher le troisième, ainsi de suite.

                    Une variable peut stocker la position actuelle, et, à chaque clic sur une flèche, être modifiée en même temps que le contenu affiché est remplacé par le suivant ou précédent.
                `,
                dom: function() {
                    return function() {
                        setTimeout(function() {
                            var index = 0;
                            var lis = document.querySelectorAll('.carousel li');
                            document.querySelector('.prev').addEventListener('click', function() {
                                lis[index].classList.remove('visible');
                                index--;
                                if (index < 0)
                                    index = 4;

                                lis[index].classList.add('visible');
                            });

                            document.querySelector('.next').addEventListener('click', function() {
                                lis[index].classList.remove('visible');
                                index++;
                                if (index > 4)
                                    index = 0;

                                lis[index].classList.add('visible');
                            });
                        });

                        return '<p><strong>Démonstration (cliquer sur les flêches) :</strong></p>' + carousel();
                    }
                }
            },
            {
                title: "Naviguer au suivant",
                description: "Lors du clic sur l'élément doté de la classe <code>next</code>, masquer le premier élément du carrousel et révéler le second.",
                excerpt: "Les items du carrousel se situent dans la liste <code>.carousel > ul > li</code> et un seul d'entre eux à la classe <code>visible</code> (ainsi, les autres sont masqués). Retirer la classe <code>visible</code> d'un élément et l'ajouter à un autre, permet de masquer le premier et de révéler le second.<br><br><strong>Déclarer un écouteur d'événement sur la flêche de droite, et masquer le premier élément du carrousel </strong>: <pre><code>var next = document.querySelector('.next');<br>next.addEventListener('click', function() {<br>  var li = document.querySelector('.carousel > ul > li.visible');<br>  li.classList.remove('visible');<br>});</code></pre>",
                solved: "var lis = document.querySelectorAll('.carousel li');<br>var elNext = document.querySelector('.next');<br><br>elNext.addEventListener('click', function() {<br>  lis[0].classList.remove('visible');<br>  lis[1].classList.add('visible');<br>});",
                dom: function() {
                    return carousel.bind(carousel);
                },
                solution: function() {
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
                solution: function() {
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
                excerpt: "Déclarer une variable <code>index</code> et l'utiliser pour mémoriser la position actuelle peut faciliter les choses. À chaque action utilisateur, le <code>li</code> à cet index peut être masqué et la position du suivant (ou précédent) peut être déduite à partir de cette variable (et non du DOM).",
                solved: "var index = 0;<br>var lis = document.querySelectorAll('.carousel li');<br>var elNext = document.querySelector('.next');<br>var elPrev = document.querySelector('.prev');<br><br>elPrev.addEventListener('click', function() {<br>  lis[index].classList.remove('visible');<br>  index--;<br>  if (index < 0)<br>    index = 0;<br><br>  lis[index].classList.add('visible');<br>});<br><br>elNext.addEventListener('click', function() {<br>  lis[index].classList.remove('visible');<br>  index++;<br>  if (index > 4)<br>    index = 4;<br><br>  lis[index].classList.add('visible');<br>});",
                dom: function() {
                    return carousel.bind(carousel);
                },
                solution: function() {
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
                excerpt: "Il est possible de regrouper le code de passage d'un élément au suivant (ou au précédent) dans une fonction <code>jump</code>. Cette fonction peut être dotée d'un paramètre d'entrée indiquant le prochain index (calculé par l'appelant), la fonction peut ainsi vérifier que l'index ne passe pas en dessous de <code>0</code> ou au dessus de <code>4</code>. Elle peut également se charger d'afficher / masquer les flêches de navigation.<br><br><strong>Exemple </strong>: <pre><code>var index =  0;<br>var jump = function(to) {<br>  /* retrait de la classe .visible du li actuel */<br>  /* modification de l'index */<br>  /* ajout de la classe .visible au li correspondant au nouvel index */<br>  /* affichage / masquage des flêches de navigation en fonction du nouvel index */<br>};<br><br>document.querySelector('.next').addEventListener('click', function() {<br>  jump(index + 1);<br>});</code></pre>",
                solved: "var index = 0;<br>var lis = document.querySelectorAll('.carousel li');<br>var elNext = document.querySelector('.next');<br>var elPrev = document.querySelector('.prev');<br><br>var navigation = function(index) {<br>  elPrev.classList.toggle('hidden', index === 0);<br>  elNext.classList.toggle('hidden', index === 4);<br>}<br><br>var jump = function(to) {<br>  lis[index].classList.remove('visible');<br>  index = to;<br>  if (index > 4)<br>    index = 4;<br>  if (index < 0)<br>    index = 0;<br>  lis[index].classList.add('visible');<br>  navigation(index);<br>}<br><br>elPrev.addEventListener('click', function() {<br>  jump(index - 1);<br>});<br><br>elNext.addEventListener('click', function() {<br>  jump(index + 1);<br>});<br><br>navigation(0);",
                dom: function() {
                    return carousel.bind(carousel);
                },
                solution: function() {
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
                description: "Une liste d'indicateurs <code>.dots li</code> est disponible sous le carrousel. Ajouter la classe <code>active</code> à celui d'entre eux qui correspond à l'élément du carrousel affiché (le premier rond quand le premier élément est affiché, le second pour le second, etc). Mettre à jour cet indicateur lors du changement d'élément dans le carrousel.",
                solved: "var index = 0;<br>var lis = document.querySelectorAll('.carousel li');<br>var elNext = document.querySelector('.next');<br>var elPrev = document.querySelector('.prev');<br><br>var dots = document.querySelectorAll('.carousel .dots li');<br>var navigation = function(index) {<br>  elPrev.classList.toggle('hidden', index === 0);<br>  elNext.classList.toggle('hidden', index === 4);<br><br>  for (var i = 0; i < dots.length; i++) {<br>    dots[i].classList.remove('active');<br>  }<br>  dots[index].classList.add('active');<br>}<br><br>var jump = function(to) {<br>  lis[index].classList.remove('visible');<br>  index = to;<br>  if (index > 4)<br>    index = 4;<br>  if (index < 0)<br>    index = 0;<br>  lis[index].classList.add('visible');<br>  navigation(index);<br>}<br><br>elPrev.addEventListener('click', function() {<br>  jump(index - 1);<br>});<br><br>elNext.addEventListener('click', function() {<br>  jump(index + 1);<br>});<br><br>navigation(0);",
                dom: function() {
                    return carousel.bind(carousel, true);
                },
                solution: function() {
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
                description: "Cliquer sur l'un des ronds doit permettre de naviguer à l'élément du carrousel à la même position. Les flêches de navigation gauche ou droite sont masquées si il s'agit du premier ou dernier élément du carrousel (comme lors de la navigation manuelle de l'utilisateur).",
                solved: "var index = 0;<br>var lis = document.querySelectorAll('.carousel li');<br>var elNext = document.querySelector('.next');<br>var elPrev = document.querySelector('.prev');<br><br>var dots = document.querySelectorAll('.carousel .dots li');<br>var navigation = function(index) {<br>  elPrev.classList.toggle('hidden', index === 0);<br>  elNext.classList.toggle('hidden', index === 4);<br><br>  for (var i = 0; i < dots.length; i++) {<br>    dots[i].classList.remove('active');<br>  }<br>  dots[index].classList.add('active');<br>}<br><br>var jump = function(to) {<br>  lis[index].classList.remove('visible');<br>  index = to;<br>  if (index > 4)<br>    index = 4;<br>  if (index < 0)<br>    index = 0;<br>  lis[index].classList.add('visible');<br>  navigation(index);<br>}<br><br>elPrev.addEventListener('click', function() {<br>  jump(index - 1);<br>});<br><br>elNext.addEventListener('click', function() {<br>  jump(index + 1);<br>});<br><br>for (let i = 0; i < dots.length; i++) {<br>  dots[i].addEventListener('click', function() {<br>    jump(i);<br>  });<br>}<br><br>navigation(0);",
                dom: function() {
                    return carousel.bind(carousel, true);
                },
                solution: function() {
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
        title: "Composant | Tooltip",
        description: "Un tooltip (ou infobulle), est une information contextuelle qui apparait au survol d'un élément, il est souvent utilisé pour donner plus de précisions sans surcharger l'interface.<br><br>Ce chapitre présente la réalisation d'un tooltip pas à pas.",
        color: "violet",
        steps: [
            {
                course: true,
                description: `
                    Au fur et à mesure de sa popularisation, JavaScript s'est illustré par certains usages récurrents (bien qu'il n'y ai pas de règles en la matière et que les seules limites soient la performance de la machine sur laquelle s'exécute le navigateur et l'imagination du développeur).

                    Un des plus anciens usages du langage est d'afficher une information contextuelle au survol de la souris : un tooltip.

                    Pour obtenir cet effet, deux choses sont nécessaires, premièrement, s'abonner au survol d'un élément par la souris (événements \`mouseenter\` et \`mouseleave\`), deuxièmement afficher/masquer le tooltip (changer sa propriété CSS \`display\` pour l'afficher ou le masquer).
                `,
                dom: function() {
                    return function() {
                        setTimeout(function() {
                            var tooltip = document.querySelector('.tooltip');
                            var label = document.querySelector('[data-tooltip-demo]');

                            label.addEventListener('mouseenter', function() {
                                tooltip.style.display = 'inline-block';
                            });

                            label.addEventListener('mouseleave', function() {
                                tooltip.style.display = 'none';
                            });
                        });

                        return `
                            <p><strong>Démonstration (survoler le label) :</strong></p>

                            <div class="tooltips">
                                <span class="ui label" data-tooltip-demo="Tooltip droite">Est</span>
                                <span class="ui inverted black label tooltip">Le soleil se lève à l'est</span>
                            </div>
                        `;
                    }
                }
            },
            {
                title: "Révéler un tooltip",
                description: "Au survol du label doté de la propriété <code>data-tooltip</code> révéler le tooltip <code>.tooltip</code> en lui ajoutant la propriété <code>display: inline-block</code>.<br>À la fin du survol, masquer le tooltip.",
                solved: "var tooltip = document.querySelector('.tooltip');<br>var label = document.querySelector('[data-tooltip]');<br><br>label.addEventListener('mouseenter', function() {<br>  tooltip.style.display = 'inline-block';<br>});<br><br>label.addEventListener('mouseleave', function() {<br>  tooltip.style.display = 'none';<br>});",
                dom: function() {
                    return function() {
                        return `
                            <div class="tooltips">
                                <span class="ui label" data-tooltip="Tooltip droite">Est</span>
                                <span class="ui inverted black label tooltip">Le soleil se lève à l'est</span>
                            </div>
                        `;
                    }
                },
                solution: function() {
                    var rightLabel = document.querySelector('[data-tooltip]');
                    var rightTooltip = document.querySelector('.tooltip');
                    if (rightTooltip.offsetParent)
                        this.warn = this.warn || "Le tooltip doit être masqué tant que le label n'a pas été survolé";

                    mouseevent(rightLabel, 'mouseenter');
                    if (!rightTooltip.offsetParent)
                        this.warn = this.warn || "Le tooltip n'est pas affiché lors du survol du label";

                    mouseevent(rightLabel, 'mouseleave');
                    if (rightTooltip.offsetParent)
                        this.warn = this.warn || "Le tooltip n'est pas masqué après la sortie d'un survol du label";

                    return !this.warn;
                }
            },
            {
                title: "Créer un tooltip à la demande",
                description: "Pour chacun des labels dotés de la propriété <code>data-tooltip</code> créer un <code>&lt;div&gt;</code> à la racine du <code>&lt;body&gt;</code> dont :<ul><li>la position soit <code>absolute</code></li><li>les classes soient <code>ui inverted black label tooltip</code></li><li>le contenu soit égal à la propriété <code>data-tooltip</code> du label ciblé</li></ul>Chacun de ces tooltips doit apparaitre à droite de leur label respectif.",
                excerpt: "L'approche précédente n'est pas très simple à l'usage puisqu'il faut prévoir une balise dans le DOM pour chaque tooltip à afficher. Une solution plus flexible consiste à créer la balise du tooltip à la demande, pour un élément cible et de la positionner par rapport à cette dernière, au dessus, à droite, etc. Pour n'imposer aucune contrainte à l'élément cible, l'ajout du tooltip dans le DOM se fait couramment à la racine du <code>&lt;body&gt;</code> et est masqué par défaut.<br><br>Pour positionner un élément en absolu à côté d'un autre élément de la page, il est possible de récupérer la position exacte de la cible dans le viewport (la partie visible de la page) avec <code>element.getBoundingClientRect().top</code> puis de lui additionner la partie déjà scrollée avec <code>window.pageYOffset</code>.",
                solved: "var tooltip = function(target) {<br>  var el = document.createElement('div');<br>  el.className = 'ui inverted black label tooltip';<br>  el.style.position = 'absolute';<br><br>  document.body.appendChild(el);<br><br>  target.addEventListener('mouseenter', function() {<br>    /* display before getting width, otherwise width is zero */<br>    el.style.display = 'block';<br>    el.innerHTML = target.dataset.tooltip;<br><br>    var rect = target.getBoundingClientRect();<br>    var top = window.pageYOffset + rect.top;<br>    var left = window.pageXOffset + rect.left + target.offsetWidth;<br>    <br>    el.style.left = left + 'px';<br>    el.style.top = top + 'px';<br>  });<br><br>  target.addEventListener('mouseleave', function() {<br>    el.style.display = 'none';<br>  });<br>};<br><br>var labels = document.querySelectorAll('[data-tooltip]');<br>for (var i = 0; i < labels.length; i++) {<br>  tooltip(labels[i]);<br>}",
                dom: function() {
                    return tooltip.bind(tooltip);
                },
                reload: function() {
                    var tooltips = document.querySelectorAll('.tooltip');
                    for (var i = 0; i < tooltips.length; i++)
                        tooltips[i].remove();
                },
                solution: function() {
                    var labels = document.querySelectorAll('[data-tooltip]');
                    var tooltips = document.querySelectorAll('.tooltip');
                    if (labels.length !== tooltips.length || tooltips.length !== 4)
                        this.warn = this.warn || "Un tooltip doit être créé dans le DOM pour chaque label";

                    if (!tooltips[1] || tooltips[1].offsetParent)
                        this.warn = this.warn || "Le tooltip n°2 doit être masqué tant que le label n°2 n'a pas été survolé";

                    mouseevent(labels[1], 'mouseenter');
                    if (!tooltips[1] || !tooltips[1].offsetParent)
                        this.warn = this.warn || "Le tooltip n°2 n'est pas affiché lors du survol du label n°2";

                    mouseevent(labels[1], 'mouseleave');
                    if (!tooltips[1] || tooltips[1].offsetParent)
                        this.warn = this.warn || "Le tooltip n°2 n'est pas masqué après la sortie d'un survol du label n°2";

                    mouseevent(labels[3], 'mouseenter');
                    if (!tooltips[3] || !tooltips[3].offsetParent)
                        this.warn = this.warn || "Le tooltip n°4 n'est pas affiché lors du survol du label n°4";

                    mouseevent(labels[3], 'mouseleave');
                    if (!tooltips[3] || tooltips[3].offsetParent)
                        this.warn = this.warn || "Le tooltip n°4 n'est pas masqué après la sortie d'un survol du label n°4";

                    return !this.warn;
                }
            },
            {
                title: "Créer un tooltip aux quatres positions possibles",
                description: "Pour chacun des labels dotés de la propriété <code>data-tooltip</code> créer un <code>&lt;div&gt;</code> à la racine du <code>&lt;body&gt;</code> dont :<ul><li>le contenu soit égal à la propriété <code>data-tooltip</code> du label ciblé</li><li>la position soit fonction de la propriété <code>data-position</code> du label ciblé (<code>left</code> indiquant que le tooltip doit apparaitre à gauche du label, <code>top</code> au dessus, etc)</li></ul>",
                solved: "var tooltip = function(target) {<br>  var el = document.createElement('div');<br>  el.className = 'ui inverted black label tooltip';<br>  el.style.position = 'absolute';<br><br>  document.body.appendChild(el);<br><br>  target.addEventListener('mouseenter', function() {<br>    /* display before getting width, otherwise width is zero */<br>    el.style.display = 'block';<br>    el.innerHTML = target.dataset.tooltip;<br><br>    var rect = target.getBoundingClientRect();<br>    var top = window.pageYOffset + rect.top;<br>    var left = window.pageXOffset + rect.left;<br><br>    switch (target.dataset.position) {<br>      case 'left':<br>        left -= el.offsetWidth;<br>      break;<br>      case 'top':<br>        top -= el.offsetHeight;<br>        left = left + target.offsetWidth / 2 - el.offsetWidth / 2;<br>      break;<br>      case 'bottom':<br>        top += el.offsetHeight;<br>        left = left + target.offsetWidth / 2 - el.offsetWidth / 2;<br>      break;<br>      default:<br>        left += target.offsetWidth;<br>      break;<br>    }<br>    el.style.left = left + 'px';<br>    el.style.top = top + 'px';<br>  });<br><br>  target.addEventListener('mouseleave', function() {<br>    el.style.display = 'none';<br>  });<br>};<br><br>var labels = document.querySelectorAll('[data-tooltip]');<br>for (var i = 0; i < labels.length; i++) {<br>  tooltip(labels[i]);<br>}",
                dom: function() {
                    return tooltip.bind(tooltip);
                },
                reload: function() {
                    var tooltips = document.querySelectorAll('.tooltip');
                    for (var i = 0; i < tooltips.length; i++)
                        tooltips[i].remove();
                },
                solution: function() {
                    var labels = document.querySelectorAll('[data-tooltip]');
                    var tooltips = document.querySelectorAll('.tooltip');
                    if (labels.length !== tooltips.length || tooltips.length !== 4)
                        this.warn = this.warn || "Un tooltip doit être créé dans le DOM pour chaque label";

                    mouseevent(labels[1], 'mouseenter');
                    if (!tooltips[1] || !tooltips[1].offsetParent)
                        this.warn = this.warn || "Le tooltip n°2 n'est pas affiché lors du survol du label n°2";
                    if (!tooltips[1] || tooltips[1].getBoundingClientRect().left > labels[1].getBoundingClientRect().left)
                        this.warn = this.warn || "Le tooltip n°2 doit être situé sur la gauche du label n°2";

                    mouseevent(labels[1], 'mouseleave');
                    mouseevent(labels[2], 'mouseenter');
                    if (!tooltips[2] || !tooltips[2].offsetParent)
                        this.warn = this.warn || "Le tooltip n°3 n'est pas affiché lors du survol du label n°3";
                    if (!tooltips[2] || tooltips[2].getBoundingClientRect().top > labels[2].getBoundingClientRect().top)
                        this.warn = this.warn || "Le tooltip n°3 doit être situé au dessus du label n°3";

                    return !this.warn;
                }
            }
        ]
    }, {
        title: "Composant | Carte",
        description: "Les cartes affichent les rues, les adresses, les itinéraires et les points d'intérêt, très utiles sur mobile. À l'aide de la géolocalisation (gps et wifi notamment>), elles peuvent également afficher la position de l'utilisateur.<br><br>Ce chapitre présente l'utilisation des cartes google pas à pas.",
        color: "violet",
        steps: [
            {
                title: "Afficher une carte",
                description: "Créer une variable <code>map</code> et l'initialiser avec une carte de <a target=\"_blank\" href=\"https://developers.google.com/maps/\">la librairie google maps</a>. L'afficher dans la balise <code>.map</code>, la centrer sur Paris (lat: 48.86, lng: 2.35) et zoomer x12.",
                excerpt: "<strong>Ne pas utiliser la propriété <code>async</code> du script ni son <code>callback</code></strong>. Bien qu'il s'agisse de la méthode classique pour manipuler une carte google (l'affichage de la carte ne bloque pas le chargement du reste de la page), cette méthode n'est pas compatible avec ce tutoriel. Sans callback, le script de la librairie doit être avant le script qui l'utilise, et ce dernier n'a pas besoin d'une fonction englobante (puisque la page est bloquée tant que google maps n'est pas chargé), et peut être directement déclaré <code>var map = new google.maps.Map(..)</code>.<br><br>Il est possible d'obtenir une clé d'usage via la documentation (les librairies ont courament des clés afin d'effectuer un suivi / limite d'usage).",
                solved: "/* à ajouter avant le script principal<br>&lt;script src=\"https://maps.googleapis.com/maps/api/js?key=\"&gt;&lt;/script&gt;<br>*/<br>var map = new google.maps.Map(document.querySelector('.map'), {<br>  center: {lat: 48.86, lng: 2.35},<br>  scrollwheel: false,<br>  zoom: 12<br>});",
                dom: function() {
                    return maps.bind(maps);
                },
                solution: function() {
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
                description: "Créer une variable <code>marker</code> et l'initialiser avec un marqueur de carte (le célèbre pin rouge) aux coordonnées du pont des arts de Paris.",
                solved: "var map = new google.maps.Map(document.querySelector('.map'), {<br>  center: {lat: 48.86, lng: 2.35},<br>  scrollwheel: false,<br>  zoom: 12<br>});<br><br>var marker = new google.maps.Marker({<br>  position: {lat: 48.8583459,lng: 2.3353197},<br>  map: map<br>});",
                dom: function() {
                    return maps.bind(maps);
                },
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                excerpt: "Le navigateur est en mesure d'acèder à <a target=\"_blank\" href=\"https://developer.mozilla.org/en/docs/Web/API/Geolocation/Using_geolocation\">sa position géographique</a>, cepdendant, il a besoin de l'autorisation de l'utilisateur pour ce faire.",
                solved: "var map = new google.maps.Map(document.querySelector('.map'), {<br>  center: {lat: 48.86, lng: 2.35},<br>  scrollwheel: false,<br>  zoom: 12<br>});<br><br>var marker = new google.maps.Marker({<br>  position: {lat: 48.8583459,lng: 2.3353197},<br>  map: map<br>});<br><br>var infowindow = new google.maps.InfoWindow({<br>  content: 'Le Pont des Arts'<br>});<br><br>marker.addListener('click', function() {<br>  infowindow.open(map, marker);<br>});<br><br>map.addListener('click', function() {<br>  infowindow.close();<br>});<br><br>geocoder = new google.maps.Geocoder();<br>document.querySelector('.places input').addEventListener('keypress', function(event) {<br>  if (event.keyCode !== 13)<br>    return;<br><br>  if (event.target.value === 'ici') {<br>    return navigator.geolocation.getCurrentPosition(function(position) {<br>      map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});<br>      marker.setPosition({lat: position.coords.latitude, lng: position.coords.longitude});<br>    });<br>  }<br><br>  geocoder.geocode({'address': event.target.value}, function(results, status) {<br>    if (status !== google.maps.GeocoderStatus.OK)<br>      return;<br><br>    map.setCenter(results[0].geometry.location);<br>    marker.setPosition(results[0].geometry.location);<br>  });<br>});",
                dom: function() {
                    return maps.bind(maps, true);
                },
                solution: function() {
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
    },  {
        title: "Composant | Todolist",
        description: "Les approches MV* (modèle, vue & co) structurent les applications. Un modèle stocke l'état de l'application (ex. un panier). Les vues affichent les informations d'un modèle et le modifient.<br><br>Ce chapitre présente la réalisation d'une liste de tâches pas à pas avec une approche MV*.",
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
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                course: true,
                description: `
                    Ajouter directment les \`li\` au DOM pose un problème : le DOM constitue alors le modèle de l'application. Pour savoir si un \`li\` est \`done\` il est nécessaire de consulter le DOM, si un filtre doit être appliqué, il est nécessaire de parcourir le DOM à nouveau, etc.

                    Pourtant, le DOM n'est pas la structure la plus simple pour effectuer des recherches, au contraire, effectuer de nombreuses opérations sur celui-ci peut s'avérer coûteux en performance.

                    C'est pourquoi, il est souvent préférable, au lieu d'ajouter directement des \`li\` au DOM, d'ajouter des éléments à un tableau puis d'appeller une méthode <code>render</code> (par convention) dont le rôle est de vider le contenu du <code>ul</code> (ou autre), à chaque fois, et de parcourir le tableau afin de générer autant de \`li\` qu'il a d'éléments.

                    Au lieu de modifier le DOM lors des événements (clic sur la croix ou clic sur le nom du todo), c'est l'élément du tableau qui est modifié et la méthode <code>render</code> qui est appellée de nouveau. Ce découpage sépare le modèle (les données) de la vue (l'affichage) et va simplifier les opérations suivantes.

                    Ce déoupage est souvent nommé MV* pour modèle, vue & co. Car il existe de nombreuses façon d'organiser une application, mais ces deux concepts sont universels.
                `
            },
            {
                title: "Séparer le modèle de la vue",
                description: "Créer une variable <code>todos</code> pour stocker l'état du composant (combien d'éléments, lesquels sont cochés, etc). À chaque appui sur entrée dans le champ de formulaire, ajouter un object <code>{name: event.target.value, done: false}</code> au tableau. À chaque modification de ce tableau, appeller une méthode <code>render</code> chargée de mettre à jour l'affichage.",
                solved: "var todos = [];<br>var render = function() {<br>  var ul = document.querySelector('.todos ul');<br>  ul.innerHTML = '';<br>  for (let i = 0; i < todos.length; i++) {<br>    let todo = todos[i];<br><br>    let li = document.createElement('li');<br>    li.classList.add('item');<br>    li.classList.toggle('done', todo.done);<br>    li.innerHTML = todo.name;<br><br>    li.querySelector('i').addEventListener('click', function() {<br>      todos.splice(i, 1);<br>      render();<br>    });<br>    li.addEventListener('click', function() {<br>      todo.done = !todo.done;<br>      render();<br>    });<br><br>    ul.appendChild(li);<br>  }<br>}<br><br>var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    todos.push({<br>      name: '&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + event.target.value,<br>      done: false<br>    });<br>    event.target.value = '';<br>    render();<br>  }<br>});",
                dom: function() {
                    return todolist.bind(todolist);
                },
                solution: function() {
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
                description: "À chaque création d'un todo, le texte de <code>.filter-todo</code> doit afficher le nombre total de todo non cochés (sans le classe <code>done</code>). Le texte de <code>.filter-done</code> affiche quant à lui, le nombre total de todo cochés (avec la classe <code>done</code>). Penser au pluriel pour « 0 fait », « 1 fait » et « 2 faits ».",
                solved: "var todos = [];<br>var render = function() {<br>  var ul = document.querySelector('.todos ul');<br>  ul.innerHTML = '';<br>  var todoCount = 0, doneCount = 0;<br>  for (let i = 0; i < todos.length; i++) {<br>    let todo = todos[i];<br><br>    if (todo.done)<br>      doneCount++;<br>    else<br>      todoCount++;<br><br>    let li = document.createElement('li');<br>    li.classList.add('item');<br>    li.classList.toggle('done', todo.done);<br>    li.innerHTML = todo.name;<br><br>    li.querySelector('i').addEventListener('click', function() {<br>      todos.splice(i, 1);<br>      render();<br>    });<br>    li.addEventListener('click', function() {<br>      todo.done = !todo.done;<br>      render();<br>    });<br><br>    ul.appendChild(li);<br>  }<br><br>  document.querySelector('.filter-todo').innerHTML = todoCount + ' à faire';<br>  document.querySelector('.filter-done').innerHTML = doneCount + (doneCount > 1 ? ' faits' : ' fait');<br>}<br><br>var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    todos.push({<br>      name: '&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + event.target.value,<br>      done: false<br>    });<br>    event.target.value = '';<br>    render();<br>  }<br>});",
                dom: function() {
                    return todolist.bind(todolist);
                },
                solution: function() {
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
                description: "Au clic sur <code>.filter-done</code> cet élément récupère la classe <code>active</code> et seuls les todos terminés sont affichés. Idem pour <code>.filter-todo</code>. Seul un de ces deux boutons peut être actif à la fois. Cliquer sur un bouton actif le désactive (et affiche ainsi tous les todos). Plutôt que se baser sur le DOM pour savoir quel filtre est activé, utiliser une variable à 3 états, et modifier la méthode <code>render</code> pour la mise à jour de la classe <code>active</code> sur les boutons.",
                solved: "var todos = [];<br>var state = 'all';<br>var render = function() {<br>  var ul = document.querySelector('.todos ul');<br>  ul.innerHTML = '';<br>  var todoCount = 0, doneCount = 0;<br>  for (let i = 0; i < todos.length; i++) {<br>    let todo = todos[i];<br><br>    if (todo.done)<br>      doneCount++;<br>    else<br>      todoCount++;<br><br>    if (state !== 'all') {<br>      if ((state === 'todo' && todo.done) || (state === 'done' && !todo.done)) {<br>        continue;<br>      }<br>    }<br><br>    let li = document.createElement('li');<br>    li.classList.add('item');<br>    li.classList.toggle('done', todo.done);<br>    li.innerHTML = todo.name;<br><br>    li.querySelector('i').addEventListener('click', function() {<br>      todos.splice(i, 1);<br>      render();<br>    });<br>    li.addEventListener('click', function() {<br>      todo.done = !todo.done;<br>      render();<br>    });<br><br>    ul.appendChild(li);<br>  }<br><br>  document.querySelector('.filter-todo').innerHTML = todoCount + ' à faire';<br>  document.querySelector('.filter-done').innerHTML = doneCount + (doneCount > 1 ? ' faits' : ' fait');<br><br>  document.querySelector('.filter-todo').classList.toggle('active', state === 'todo');<br>  document.querySelector('.filter-done').classList.toggle('active', state === 'done');<br>}<br><br>var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    todos.push({<br>      name: '&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + event.target.value,<br>      done: false<br>    });<br>    event.target.value = '';<br>    render();<br>  }<br>});<br><br>document.querySelector('.filter-todo').addEventListener('click', function() {<br>  if (state !== 'todo')<br>    state = 'todo';<br>  else<br>    state = 'all';<br>  render();<br>});<br><br>document.querySelector('.filter-done').addEventListener('click', function() {<br>  if (state !== 'done')<br>    state = 'done';<br>  else<br>    state = 'all';<br>  render();<br>});",
                dom: function() {
                    return todolist.bind(todolist);
                },
                solution: function() {
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
        title: "Ajax",
        description: "Ajax permet à un navigateur d'émettre une requête et d'attendre une réponse d'un serveur distant. Cette requête est asynchrone, elle ne bloque pas le navigateur, qui sera notifié lors du retour du serveur.<br><br>Ce chapitre présente ajax pas à pas.",
        color: "teal",
        steps: [
            {
                course: true,
                description: `
                    En plus de permettre d'écouter les actions utilisateur et de modifier dynamiquement la page, JavaScript a une troisième fonctionnalité principale : la possibilité de requêter un serveur. Ainsi, une application web peut poser des questions à un serveur distant ; demander quels sont les produits dans le panier de l'utilisateur, vérifier si la carte bleue qu'il vient de saisir est valide, et réagir en fonction.

                    Un serveur est une machine qui exécute du code distant, souvent associé à une base de données, et agit comme référentiel. Il gère l'authentification (login / mot de passe) et l'autorisation (données privées, cartes bleues, préférences, etc.). Les applications web reposent courament sur des contacts réguliers à un serveur car elles ne sont pas en position de connaître et mémoriser ces données par elles-mêmes. Une application web agit comme la vitrine d'un serveur web.

                    Ajax (Asynchronous JavaScript and XML) est la technologie utilisée pour ce faire. Elle repose sur l'objet \`XMLHttpRequest\` qui permet de se connecter à un serveur, de lui envoyer des données et d'en recevoir en retour. Elle utilise le protocole [\`HTTP\`](https://developer.mozilla.org/en/docs/Web/HTTP) ; le navigateur émet une requête et attend une réponse du serveur. Cette requête est asynchrone, elle ne bloque pas le navigateur, qui peut continuer à interagir avec l'utilisateur, et sera notifié lors du retour du serveur.

                    À l'origine, cette technologie était utilisée avec XML (Extensible Markup Language), un format de représentation des données proche du HTML, mais ce format a été supplanté par JSON (JavaScript Object Notation), un format basé sur un sous ensemble de JavaScript et donc très facile à manipuler par ce dernier.
                `
            },
            {
                title: "Les requêtes",
                course: true,
                description: `
                    Une requête HTTP est envoyée par le navigateur au serveur (et uniquement dans ce sens, un serveur ne peut pas requêter un client). Elle est composée de plusieurs éléments :

                    * un verbe qui représente l'action demandée au serveur, GET (lecture), POST (création), PUT (modification), DELETE (suppression)
                    * une URI (Uniform Resource Locator) qui représente l'adresse d'une ressource sur le serveur, http://www.thebeatles.com/news. Cela peut être une page, une image, un fichier JS ou CSS, etc.
                    * des headers qui représentent l'en-tête de l'échange HTTP, sous la forme d'une liste de clé: valeur, ils permettent de décrire les attentes du navigateur, le format de la réponse (XML ou JSON) notamment
                    * un body qui représente les données envoyées par le navigateur au serveur (pour les actions de création et de modification)

                    Chaque URI, peut voir son adresse complétée d'un query string. Il s'agit de paramètres optionnels qui agissent comme un filtre. Ils permettent entre autre de paginer (afficher la page 2 des résultats) ou d'effectuer une recherche (n'afficher que les articles dont le nom contient un certain texte).

                    Ils sont construits ainsi \`?terme=valeur&terme2=valeur2\`

                    Ils commencent par un point d'interrogation, \`?\`, chaque terme est séparé par une esperluette, \`&\`, et sa valeur est définie avec égal, \`=\`. Ce qui peut donner l'URI suivante \`http://www.thebeatles.com/news?page=2&year=2014\`.
                `
            },
            {
                title: "Les réponses",
                course: true,
                description: `
                    Une réponse HTTP est envoyée par le serveur au navigateur pour chaque requête. Elle est composé de plusieurs éléments :

                    * un statut qui indique l'état de la réponse, 200 (tout est ok), 300 (la réponse se trouve à une autre adresse), 400 (la requête du navigateur est invalide), 500 (le serveur a échoué à traiter la requête). Ces code peuvent être affinés par famille, 404 signifie par exemple que la requête navigateur est invalide car aucune ressource n'existe à cette adresse
                    * des headers qui représente l'en-tête de la réponse
                    * un body qui représente les données retournées au navigateur

                    **Requêtes HTTP et réponses :**

                    \`\`\`HTTP
                    GET http://www.thebeatles.com
                    → 200
                    → Content-Type: text/html
                    → "<html>..</html>"

                    GET http://www.thebeatles.com/image/revolver.jpg
                    → 200
                    → Content-Type: image/jpeg
                    → binary data..

                    GET http://www.thebeatles.com/script/jquery.js
                    → 200
                    → Content-Type: text/script
                    → "(function(a,b){..});"

                    POST http://www.thebeatles.com/subscribe {"email": "contact@mail.com"}
                    → 201
                    → Content-Type: application/json
                    → {"email": "contact@gmail.com", subscribe: true}
                    \`\`\`
                `
            },
            {
                title: 'Effectuer une requête xhr',
                course: true,
                description: `
                    L'objet \`XMLHttpRequest\` permet d'effectuer des requêtes HTTP dans le navigateur. Il dispose de nombreuses méthodes afin d'indiquer le verbe, la ressource, les headers, le body et de s'abonner à la réponse du serveur.

                    **Requête ajax GET :**

                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', 'http://www.thebeatles.com/news', true);
                        xhr.setRequestHeader('Content-Type', 'application/json');

                        xhr.onload = function() {
                          var status = xhr.status;
                          var body = JSON.parse(xhr.responseText);

                          /* use body as a classic dictionnary */
                        }
                        xhr.send();

                    La méthode \`open\` de cet objet permet de configurer la requête, d'abord le verbe, ensuite l'URI et enfin un booléen indiquant qu'il s'agit d'une requête asynchrone. Les requêtes synchrones sont dépréciées dans les navigateurs modernes. Bloquer le code en attendant la réponse du serveur est considéré comment nuisant grandement à l'expérience utilisateur (puisque cela revient à blqouer complétement le navigateur tant que le serveur n'a pas répondu).

                    La méthode \`onload\` permet de s'abonner à la réponse du serveur. Dès que celle-ci advient, la méthode est exécutée et les attributs \`responseText\` et \`status\` de la requête sont disponibles.  Afin de transformer la réponse obtenue en objet JavaScript, il est possible d'utiliser la méthode \`parse\` de la variable globale JSON.

                    La méthode \`send\` permet d'effectuer l'appel.

                    **Requêtes ajax POST :**

                        var xhr = new XMLHttpRequest();
                        xhr.open("POST", "http://www.thebeatles.com/subscribe", true);
                        xhr.setRequestHeader("Content-Type", "application/json");

                        xhr.onload = function() {
                          var body = JSON.parse(xhr.responseText);
                          var status = xhr.status;
                        }
                        xhr.send(JSON.stringify({name:"contact@mail.com"}));

                    La même logique s'applique lors de l'envoi de données au serveur, seule le verbe utilisé change et la méthode send peut alors recevoir une chaîne de caractère à transmettre au serveur. Ici aussi, le recours à JSON permet de transformer un objet JavaScript pour le transmettre au format texte au serveur.
                `
            },
            {
                title: "Effectuer une requête fetch",
                course: true,
                description: `
                    L'objet [\`fetch\`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) a été ajouté récemment aux navigateurs dans l'optique de simplifier les requêtes Ajax. Comme certains navigateurs ne le supportent pas, il peut être nécessaire [d'ajouter un polyfill](https://github.github.io/fetch/) pour ajouter cette fonctionnalité à ces anciens navigateurs. Fetch présentes deux différences majeures par rapport à \`xhr\` :

                    * il retourne un [stream](https://developer.mozilla.org/en/docs/Web/API/ReadableStream) plutôt qu'une réponse immédiate
                    * il fonctionne avec [des promesses](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise), à la place de callback

                    **Requête fetch GET :**

                        fetch('http://www.thebeatles.com/news')
                        .then(function(response) {
                            return response.json();
                        })
                        .then(function(body) {
                            /* use body as a classic dictionnary */
                        });

                    **Requête fetch POST :**

                        fetch('http://www.thebeatles.com/subscribe', {
                            method: 'POST',
                            json: JSON.stringify({name:"contact@mail.com"})
                        }).then(function(response) {
                            return response.json();
                        })
                        .then(function(body) {
                            /* use body as a classic dictionnary */
                        });

                    L'objet \`response\` est de stype [\`stream\`](https://developer.mozilla.org/en/docs/Web/API/ReadableStream), celui-ci représente un flux de données. Il permet de choisir comment les données d'un serveur doivent être consommées. Avec l'appel \`response.json()\` le flux est lu en entier et retourné au format JSON. Si la requête retourne un fichier volumineux, il est possible de le lire morceau après morceau afin de ne pas télécharger l'intégralité de celui-ci dans la mémoire du navigateur.
                `
            },
            {
                title: "Les promesses",
                course: true,
                description: `
                    L'objet [\`Promise\`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) a été inventé par jQuery avant d'être introduit en natif dans le langage. Il représente la réussite éventuelle, ou l'échec éventuel, d'une opération asynchrone et sa valeur de retour. Comme un callback traditionnel, il permet de s'abonner à cette réussite avec une fonction ou un échec avec une autre fonction dont l'une des deux sera invoquée à la résolution de l'opération asynchrone.

                    Très utilisées pour les appels serveur — l'application récupère la main et peut effectuer d'autres opérations en attendant la réponse — les promesses peuvent également servir à ordonner des opérations asynchrones de tout genre plus facilement.

                    Comme \`fetch\` et les \`stream\`, son support est encore partiel sur les navigateurs et il est parfois nécessaire d'ajouter [un polyfill](https://github.com/taylorhakes/promise-polyfill) pour ce faire.

                    Une promesse propose deux méthodes pour s'abonner à son futur résultat, \`then\` et \`catch\`. La première permet de s'abonner au succès de l'appel, la second à son échec. La spécification A+ détaille ce fonctionnement, notamment :

                    * les promesse sont thenable, il est possible de chaîner plusieurs \`then\` qui attendront que le précédent soit résolu avant de se résoudre elles-mêmes avec son résultat
                    * un \`catch\` en bout de chaîne capture toutes les erreurs pouvant se produire sur la chaîne, et celle-ci est intérompue dès qu'une erreur se produit

                    **Création d'une promesse, résolue si l'utilisateur clique sur le &lt;body&gt; en moins de 5 secondes :**

                        var clicked = new Promise(function(resolve, reject) {
                            setTimeout(reject, 5000);

                            var start = new Date();
                            document.body.addEventListener('click', function(e) {
                                var end = new Date();
                                resolve(end.getTime() - start.getTime());
                            });
                        });

                    Les promesses A+ intégrées au langage (norme respectée par jQuery depuis sa version 3.0) prennent deux fonctions en paramètres, \`resolve\` et \`reject\`. L'une de ces deux fonctions — et une seule des deux — doit être appelée lorsque l'opération asynchrone encapsulée est terminée, \`resolve\` si c'est avec succès, \`reject\` sinon.

                    Une promesse ne peut être résolue qu'une fois. Dans cet exemple, soit l'utilisateur clique sur le \`body\` dans les 5 secondes, et la promesse est un succès, soit, ce n'est pas le cas, et le timeout déclenche un échec. Bien que l'utilisateur puisse cliquer à nouveau sur le body, seul le premier appel de la méthode \`resolve\` ou \`reject\` résoudra la promesse, les suivants sont ignorés. Une fois dans un état, succès ou échec, une promesse ne peut plus en changer.

                    Une fois cette promesse créée, le code qui l'utilise s'abonne à son résultat futur. Avec \`then\` il indique quelles opérations suivront cette opération quand elle sera terminée avec succès. Avec \`catch\`, quelles opérations suivront si elle se termine en erreur.

                    **Abonnement à une promesse :**

                        clicked.then(function(time) {
                            console.log(time);
                        });

                        clicked.then(function(time) {
                            return (time < 1000)
                        }).then(function(quick) {
                            if (quick)
                                console.log('quick click');
                        }).catch(console.error);

                    Une promesse peut avoir plusieurs souscriptions. Il est même possible de s'abonner alors qu'elle est déjà résolue, le \`then\` ou le \`catch\` étant alors immédiatement invoqués.

                    Les \`then\` sont chaînables, un \`then\` peut retourner une valeur ou une promesse. S'il retourne une promesse, le \`then\` suivant attendra le succès de cette promesse avant de s'exécuter à son tour. Le \`catch\` capture les erreurs (\`throw\` ou \`reject\`). Si un \`then\` est placé après lui, il reprendra la main une fois l'erreur gérée par le \`catch\`.

                    Ici, à titre d'exemple, si le temps de clic est inférieur à une seconde, un résultat est retourné, capturé à son tour par une nouvelle promesse qui reçoit le résultat de celle qui l'a précédé. Un exemple plus courant, est celui ou un appel asynchrone est retourné, dont le résultat est passé au \`then\` suivant quand l'appel succède ou échoue.
                `
            },
            {
                title: "Rechercher un repository github",
                description: "Effectuer un appel ajax vers <code>https://api.github.com/search/repositories?access_token={token}&q={query}</code> à l'appui sur entrée dans <code>.search input</code> en indiquant comme {query} la recherche saisie.<br><br>Afficher les trois premiers résultats dans <code>.results</code> chacun sous la forme <code>&lt;span class=\"result\"&gt;{full_name}&lt;/span&gt;</code> (et ajouter la classe <code>visible</code> à <code>.results</code> pour le révéler).",
                excerpt: "Pour accèder à l'api de github, il est préférable de créer une clé (ou token), pour ce faire aller dans <code>Github > Settings > Personnal Access Token</code> puis <code>Generate new token</code>. Ce token est à ajouter à l'url <code>https://api.github.com/..?access_token={token}&q={query}</code>.<br><br>Il est possible d'effectuer une requête ajax à l'aide des objets <a target=\"_blank\" href=\"https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest\">xhr</a>, <a target=\"_blank\" href=\"https://developer.mozilla.org/en/docs/Web/API/Fetch_API/Using_Fetch\">fetch</a> ou <a target=\"_blank\" href=\"http://api.jquery.com/jquery.ajax/\">jQuery.ajax</a>. Ajax est une technologie utilisée pour requêter un serveur de façon asynchrone. Pour effectuer une requête vers un serveur, trois informations sont nécessaires, son adresse <code>http://..</code>, l'action à réaliser, <code>GET</code> (lecture), <code>POST</code> (création), <code>PUT</code> (modification) ou <code>DELETE</code> (suppression) et la fonction à invoquer lorsque le serveur aura répondu.",
                solved: "/* remplacer {token} par le token github généré */<br><br>/* --------------------- xhr --------------------- */<br><br>var search = document.querySelector('.search');<br>var input = search.querySelector('input');<br>var results = search.querySelector('.results');<br><br>var ajax = function(method, url, fn) {<br>  var xhr = new XMLHttpRequest();<br>  xhr.addEventListener('load', function() {<br>    if (xhr.readyState === 4) {<br>      fn(JSON.parse(xhr.response));<br>    }<br>  });<br>  xhr.open(method, url);<br>  xhr.send();<br>}<br><br>input.addEventListener('keypress', function(event) {<br>  if(event.keyCode !== 13 || !input.value) {<br>    return<br>  }<br><br>  ajax('GET', 'https://api.github.com/search/repositories?access_token={token}&q=' + input.value, function(data) {<br>    results.innerHTML = '';<br>    results.classList.toggle('visible', data.items.length > 0);<br><br>    for (var i = 0; i < Math.min(data.items.length, 3); i++) {<br>      results.innerHTML += '&lt;span class=\"result\"&gt;' + data.items[i].full_name + '&lt;/span&gt;';<br>    }<br>  });<br>});<br><br>/* -------------------- fetch -------------------- */<br><br>var search = document.querySelector('.search');<br>var input = search.querySelector('input');<br>var results = search.querySelector('.results');<br><br>input.addEventListener('keypress', function(event) {<br>  if(event.keyCode !== 13 || !input.value) {<br>    return<br>  }<br><br>  fetch('https://api.github.com/search/repositories?access_token={token}&q=' + input.value)<br>  .then(function(response) {<br>    return response.json();<br>  })<br>  .then(function(data) {<br>    results.innerHTML = '';<br>    results.classList.toggle('visible', data.items.length > 0);<br>      for (var i = 0; i < Math.min(data.items.length, 3); i++) {<br>      results.innerHTML += '&lt;span class=\"result\"&gt;' + data.items[i].full_name + '&lt;/span&gt;';<br>    }<br>  });<br>});",
                dom: function() {
                    return searchbar.bind(search);
                },
                solution: function() {
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
                    return searchbar.bind(search);
                },
                solution: function() {
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
                description: "Effectuer un appel ajax vers <code>https://api.github.com/user/starred</code> (avec un access_token) au clic sur <code>.fetch</code> (le bouton Actualiser).<br><br>Afficher les résultats dans <code>.list</code> chacun sous la forme <code>&lt;div class=\"item ui checkbox\"&gt;&lt;input type=\"checkbox\" id=\"{full_name}\"&gt;&lt;label for=\"{full_name}\"&gt;{full_name}&lt;/label&gt;&lt;/div&gt;</code>. Afficher le nombre total de résultats dans <code>.count</code>.",
                solved: "var search = document.querySelector('.favorites .search');<br>var input = search.querySelector('input');<br>var results = search.querySelector('.results');<br><br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode !== 13 || !input.value) {<br>    return<br>  }<br><br>  search.classList.add('loading');<br><br>  fetch('https://api.github.com/search/repositories?access_token={token}&q=' + input.value)<br>  .then(function(response) {<br>    search.classList.remove('loading');<br>    return response.json();<br>  })<br>  .then(function(data) {<br>    results.innerHTML = '';<br>    results.classList.toggle('visible', data.items.length > 0);<br>    for (var i = 0; i < Math.min(data.items.length, 3); i++) {<br>      results.innerHTML += '&lt;span class=\"result\"&gt;' + data.items[i].full_name + '&lt;/span&gt;';<br>    }<br>  });<br>});<br><br>var list = document.querySelector('.list');<br>var refresh = document.querySelector('.fetch');<br>var count = document.querySelector('.count');<br><br>var render = function() {<br>  fetch('https://api.github.com/user/starred?access_token={token}')<br>  .then(function(response) {<br>    return response.json();<br>  })<br>  .then(function(starred) {<br>    count.value = starred.length;<br>    list.innerHTML = '';<br>    for (var i = 0; i < starred.length; i++) {<br>      list.innerHTML += '&lt;div class=\"item ui checkbox\"&gt;&lt;input type=\"checkbox\" id=\"' + starred[i].full_name + '\"&gt;&lt;label for=\"' + starred[i].full_name + '\"&gt;' + starred[i].full_name + '&lt;/label&gt;&lt;/div&gt;';<br>    }<br>  });<br>}<br><br>refresh.addEventListener('click', render);",
                excerpt: "Pour accéder aux repositories favoris, github requiert des autorisations supplémentaires. Dans l'écran <code>Personnal Access Tokens</code> il est nécessaire d'ajouter le scope <code>repo</code> au token précédemment créé.",
                dom: function() {
                    return searchbar.bind(search);
                },
                solution: function() {
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
                excerpt: "Une <a target=\"_blank\" href=\"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise\">promesse</a> est le résultat futur d'une action asynchrone. Les promesses sont souvent utilisées pour chainer plusieurs appels ajax ou s'abonner au résultat qu'elles renveront lorsque le serveur aura répondu. Les objets <a target=\"_blank\" href=\"https://developer.mozilla.org/en/docs/Web/API/Fetch_API/Using_Fetch\">fetch</a> et <a target=\"_blank\" href=\"http://api.jquery.com/jquery.ajax/\">jQuery.ajax</a> proposent de récupérer la réponse du serveur avec une promesse.<pre><code>fetch('https://api.github.com/..')<br>.then(function(response) {<br>  return response.json();<br>})<br>.then(function(data) {<br>  console.log(data);<br>});</code></pre>La méthode <code>then</code> permet de s'abonner au résultat futur, et sera invoquée une seule fois lorsque le serveur aura répondu. Il est possible de retourner une promesse à l'intérieur d'une méthode <code>then</code> et d'ainsi chainer les promesses. La méthode <code>catch</code> permet de capturer les erreurs levées par n'importe laquelle des promesses de la chaine.",
                dom: function() {
                    return searchbar.bind(search);
                },
                solution: function() {
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
                description: "Au clic sur un résultat <code>.result</code> (après une recherche), effectuer un appel ajax <code>https://api.github.com/user/starred/{full_name}</code> avec la méthode <code>PUT</code> pour l'ajouter aux favoris. Mettre à jour la liste de favoris en fonction.",
                excerpt: "Attention, les réponses github ont un cache de plusieurs dizaines de secondes, le navigateur mémorise la dernière réponse et la retourne à chaque appel avant que ce laps ne soit écoulé. <code>https://api.github.com/..?bust=' + Date.now()</code> le force a appeler le serveur, en lui faisant croire qu'il s'agit d'une nouvelle route pour qu'il ignore son cache.<br><br>Lors d'appels <code>POST</code> et <code>PUT</code>, il est également possible d'envoyer un body sous forme de texte ou de <code>JSON</code> au serveur pour enregistrer des informations.",
                solved: "var search = document.querySelector('.favorites .search');<br>var input = search.querySelector('input');<br>var results = search.querySelector('.results');<br><br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode !== 13 || !input.value) {<br>    return<br>  }<br><br>  search.classList.add('loading');<br><br>  fetch('https://api.github.com/search/repositories?access_token={token}&q=' + input.value)<br>  .then(function(response) {<br>    search.classList.remove('loading');<br>    return response.json();<br>  })<br>  .then(function(data) {<br>    results.innerHTML = '';<br>    results.classList.toggle('visible', data.items.length > 0);<br>    for (var i = 0; i < Math.min(data.items.length, 3); i++) {<br>      results.innerHTML += '&lt;span class=\"result\"&gt;' + data.items[i].full_name + '&lt;/span&gt;';<br>    }<br>  });<br>});<br><br>results.addEventListener('click', function(event) {<br>  if (!event.target.matches('.result')) {<br>    return;<br>  }<br>  results.classList.remove('visible');<br>  fetch('https://api.github.com/user/starred/' + event.target.innerHTML + '?access_token={token}', {<br>    method: 'PUT'<br>  }).then(render);<br>});<br><br>var list = document.querySelector('.list');<br>var refresh = document.querySelector('.fetch');<br>var count = document.querySelector('.count');<br><br>var render = function() {<br>  return fetch('https://api.github.com/user/starred?access_token={token}&bust=' + Date.now())<br>  .then(function(response) {<br>    return response.json();<br>  })<br>  .then(function(starred) {<br>    count.value = starred.length;<br>    list.innerHTML = '';<br>    for (var i = 0; i < starred.length; i++) {<br>      list.innerHTML += '&lt;div class=\"item ui checkbox\"&gt;&lt;input type=\"checkbox\" id=\"' + starred[i].full_name + '\"&gt;&lt;label for=\"' + starred[i].full_name + '\"&gt;' + starred[i].full_name + '&lt;/label&gt;&lt;/div&gt;';<br>    }<br>  });<br>}<br><br>refresh.addEventListener('click', function() {<br>  refresh.classList.add('loading');<br><br>  render().then(function() {<br>    refresh.classList.remove('loading');<br>  });<br>});",
                dom: function() {
                    return searchbar.bind(search);
                },
                solution: function() {
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
                description: "Au clic sur <code>.direction</code> modifier l'ordre de tri des favoris en rejouant la requête ajax de listing avec le paramètre d'url <code>direction</code> (asc/desc). Mettre à jour la liste de favoris en fonction.",
                solved: "var search = document.querySelector('.favorites .search');<br>var input = search.querySelector('input');<br>var results = search.querySelector('.results');<br><br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode !== 13 || !input.value) {<br>    return<br>  }<br><br>  search.classList.add('loading');<br><br>  fetch('https://api.github.com/search/repositories?access_token={token}&q=' + input.value)<br>  .then(function(response) {<br>    search.classList.remove('loading');<br>    return response.json();<br>  })<br>  .then(function(data) {<br>    results.innerHTML = '';<br>    results.classList.toggle('visible', data.items.length > 0);<br>    for (var i = 0; i < Math.min(data.items.length, 3); i++) {<br>      results.innerHTML += '&lt;span class=\"result\"&gt;' + data.items[i].full_name + '&lt;/span&gt;';<br>    }<br>  });<br>});<br><br>results.addEventListener('click', function(event) {<br>  if (!event.target.matches('.result')) {<br>    return;<br>  }<br>  results.classList.remove('visible');<br>  fetch('https://api.github.com/user/starred/' + event.target.innerHTML + '?access_token={token}', {<br>    method: 'PUT'<br>  }).then(render);<br>});<br><br>var list = document.querySelector('.list');<br>var refresh = document.querySelector('.fetch');<br>var count = document.querySelector('.count');<br><br>var direction = 'desc';<br>var render = function() {<br>  return fetch('https://api.github.com/user/starred?access_token={token}&bust=' + Date.now() + '&direction=' + direction)<br>  .then(function(response) {<br>    return response.json();<br>  })<br>  .then(function(starred) {<br>    count.value = starred.length;<br>    list.innerHTML = '';<br>    for (var i = 0; i < starred.length; i++) {<br>      list.innerHTML += '&lt;div class=\"item ui checkbox\"&gt;&lt;input type=\"checkbox\" id=\"' + starred[i].full_name + '\"&gt;&lt;label for=\"' + starred[i].full_name + '\"&gt;' + starred[i].full_name + '&lt;/label&gt;&lt;/div&gt;';<br>    }<br>  });<br>}<br><br>refresh.addEventListener('click', function() {<br>  refresh.classList.add('loading');<br><br>  render().then(function() {<br>    refresh.classList.remove('loading');<br>  });<br>});<br><br>document.querySelector('.direction').addEventListener('click', function() {<br>  var i = this.querySelector('i');<br>  i.classList.toggle('ascending');<br>  i.classList.toggle('descending');<br>  direction = (direction === 'desc') ? 'asc' : 'desc';<br><br>  this.classList.add('loading');<br>  render().then(function() {<br>    this.classList.remove('loading');<br>  }.bind(this));<br>});",
                dom: function() {
                    return searchbar.bind(search);
                },
                solution: function() {
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
                    return searchbar.bind(search);
                },
                solution: function() {
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
            },
            {
                title: "L'architecture REST",
                course: true,
                description: `
                    Depuis plusieurs années, un style d'architecture de conception des applications réseau s'est démocratisé, REST (Representational State Transfer). Basé sur HTTP, il reprend ses composants et propose de les utiliser d'une façon normée.

                    Pour les URI, elles y représentent une ressource du système (un utilisateur, un produit), avec une adresse pour les lister (ex. /products) et une autre pour en lire ou modifier une seule (ex. /products/17, ou 17 est l'identifiant du produit).

                    Pour les verbes, GET y est utilisé pour obtenir la représentation d'une ressource ou de plusieurs (en fonction de l'URI utilisée) ; POST pour créer une ressource ; PUT pour la modifier ; et DELETE pour la supprimer. POST peut également être utilisé pour tous accès non idempotents (avec effet de bord, ex. débiter un compte et en créditer un autre via un seul appel d'URI).

                    **Requêtes REST et réponses :**

                    \`\`\`HTTP
                    GET http://www.thebeatles.com/musicians
                    → 200
                    → [{"id":1,"name":'Paul'}, {"id":2,"name":'John'}, {"id":3,"name":'George'}, {"id":4,"name":'Ringo'}]

                    GET http://www.thebeatles.com/musicians/2
                    → 200
                    → {"id":2,"name":'John'}

                    PUT http://www.thebeatles.com/musicians/2 {"id": 2,"name":'John Lennon'}
                    → 200
                    → {"id":2,"name":'John Lennon'}

                    POST http://www.thebeatles.com/musicians {"name":'Brian Epstein'}
                    → 201
                    → {"id":5,"name":'Brian Epstein'}
                    \`\`\`

                    Les statuts HTTP (200, 400, etc) sont également utilisés d'une façon normée.

                    La communication ainsi normée ne fait l'objet d'aucune sauvegarde du contexte des clients sur le serveur (architecture stateless). Chaque requête client contient toutes les informations nécessaires à son traitement par le serveur. Par exemple, si un utilisateur est logué au système, il doit fournir avec chaque requête la preuve de sa connexion (ex. un cookie), et le serveur vérifiera à chaque fois la validité de cette information.

                    Un cookie est un header comme les autres, à un détail près : lorsque le navigateur en reçoit un d'un serveur, il le stocke automatiquement et le retransmet au serveur pour toutes les requêtes suivantes.

                    [L'excellent cookbook de Subbu Allamaraju](https://books.google.fr/books?id=LDuzpQlVuG4C&printsec=frontcover#v=onepage&q&f=false) est disponible pour approfondir le sujet.
                `
            },
            {
                title: "Les méandres du réseau",
                course: true,
                description: `
                    Un navigateur peut effectuer plusieurs requêtes simultanées (puisqu'aucune d'entre elles ne bloque l'exécution du code), certains points sont à considérer :

                    * la bande passante est limitée, le nombre d'informations que peut transmettre et recevoir un navigateur web dépend du réseau sur lequel se trouve l'utilisateur (le wifi d'une bibliothèque) et de son usage de sa propre connexion (écoute de musique en streaming en simultané). Ainsi, il est souvent judicieux de récupérer les données par tranche (20 articles par 20) et d'économiser la bande passante en requêtant seulement le nécessaire, surtout sur mobile
                    * la patience de l'utilisateur à ses limites, une page trop longue à charger incitera l'utilisateur à abandonner et aller ailleurs. Le plus judicieux étant de limiter la durée d'une requête, et en cas de timeout (durée écoulée sans succès), de proposer à l'utilisateur de réessayer

                    **Requêtes ajax avec timeout :**

                        var xhr = new XMLHttpRequest();
                        xhr.open("GET", "http://www.thebeatles.com/news", true);
                        xhr.timeout = 5; // in seconds

                        xhr.ontimeout = function() {
                          document.querySelector('#message').innerHTML = "Can you please retry?";
                        }
                        xhr.send();

                    Pour des raisons de sécurité, JavaScript bloque l'accès à des ressources d'un autre domaine (accéder à http://www.ledzeppelin.com/ à partir de http://www.thebeatles.com n'est pas possible par défaut). Deux solutions existent pour ce faire, soit ajouter des headers particuliers à chaque requêtes et modifier le serveur afin qu'il les accepte (CORS), soit, plus simplement, utiliser un reverse proxy (un serveur HTTP particulier) sur le même domaine que les fichiers JS. Dans cette seconde solution, le navigateur effectue chacune de ses requêtes sur la même base d'URL, et donc le même domaine, et le reverse proxy fait suivre la requête sur un autre domaine, récupère le résultat et le transmet au navigateur. C'est un contournement du problème couramment utilisé. [Apache](https://httpd.apache.org/) et [Nginx](https://nginx.org/en/) sont des outils populaires pour cet usage.
                `
            },
            {
                course: true,
                description: `
                    Avec Ajax les échanges client serveur sont à sens unique : les clients connaissent le serveur et interagissent avec lui. D'autres modèles se sont développés pour des usages particuliers.

                    ### Les web sockets

                    Les web sockets permettent d'établir un canal full duplex avec un serveur et d'obtenir ainsi un échange temps réel avec ce dernier. Ce mode de communication est souvent utilisé pour les jeux multijoueurs ou les conversations : lorsqu'un utilisateur effectue une action (poster un message, déplacer un personnage, etc) le serveur envoie immédiatement l'information à tous les autres clients. Les utilisateurs sont synchronisés les uns aux autres.

                    Une librairie populaire pour mettre en place ce mode de communication est socket.io. Elle gère également des modes dégradés si le client n'est pas en mesure d'ouvrir un socket. Elle effectuera, par exemple, du long polling (plusieurs requêtes http classiques à intervalle régulier) en cas de problème d'établissement du socket. La fonctionnalité — au délai réseau près — restant inchangé.

                    ### Les notifications

                    Apparues sur les smartphones, les notifications sont ces bulles numérotés apparaissant sur les icônes des applications pour indiquer que quelque chose attend l'utilisateur (un message reçu, une mise à jour disponible, etc).

                    Chaque fournisseur de système d'exploitation propose sa propre solution, l'idée générale est la suivante, un socket est ouvert par le téléphone sur un unique serveur. Ce dernier reçoit des informations de serveurs tierces (mail, sncf, airbnb, etc) et notifie les applications du téléphone, les applications n'ont pas besoin d'être ouvertes pour être notifiées, et elles ne vérifient jamais directement l'état de ces notifications (si chaque application maintenait un socket, cela aurait un gros impact sur la batterie).
                `
            },
            {
                title: "Offline",
                course: true,
                description: `
                    Échanger des informations avec un serveur est crucial pour une application, cela permet de vérifier les identifiants des utilisateurs, de leur donner accès à leur messages et historique, de leur permettre d'interagir les uns avec les autres, etc.

                    Seulement, les connections internet ne sont pas toujours stables, et, dans certaines zones géographiques, rares, lentes ou très limitées. Pour tenir compte de cette problématique, apparues entre autre avec les smartphones et leur usage important de données, un mode offline a commencé à voir le jour.

                    Le mode offline existe sous diverses formes, par exemple :

                    * synchroniser une playlist Spotify ou Deezer sur un téléphone pour l'écouter dans le métro, ce qui copie les titres sur le téléphone et les crypte afin que seule l'application en question puisse y accéder (le titre ne pouvant ainsi pas être donné à un ami)
                    * synchroniser un document Google Drive ou Dropbox pour continuer sa rédaction hors ligne et, lorsque le réseau se présente de nouveau, sauvegarder les modifications
                    * synchroniser une carte Google Maps ou Citymapper et utiliser le GPS d'un téléphone à l'étranger (le GPS n'utilise pas le forfait de l'abonné, il reste gratuit à l'étranger)
                    * synchroniser des articles Instapaper ou Pocket pour les lire dans le métro

                    Développer un mode offline nécessite deux choses, la connaissance de l'état actuel du navigateur — [les événements online et offline](https://developer.mozilla.org/en/docs/Online_and_offline_events) permettent de s'y abonner — et la possibilité de sauvegarder des données locale au navigateur — le local storage vu précédemment peut être utilisé à cet effet.
                `
            }
        ]
    }, {
        title: "La programmation objet",
        description: "La programmation orientée objet propose de définir un ensemble de concepts, les classes et les objets, dans le but de structurer un programme.<br><br>Ce chapitre présente la réalisation (corsée) d'un puzzle rpg au tour par tour.",
        color: "teal",
        steps: [
            {
                course: true,
                description: `
                    Il est possible (et souvent souhaitable) de structurer un programme à l'aide de composants au comportement clairement défini. La programmation orientée objet propose ainsi, dans de nombreux langages, de définir un ensemble de concepts, les classes, dont il est possible de manipuler des exemplaires, les objets.

                    **Utilisation de classes et d'objets :**

                        var release = new Date(1964, 11, 17);
                        → Thu Dec 17 1964 00:00:00 GMT+0100 (CET)

                        Math.max(5, 10);
                        → 10

                    Il a été question de plusieurs classes jusqu'ici, \`Math\`, \`Date\`, \`Element\`, \`RegExp\` respectant une convention de nommage : leur initiale est en majuscule. Certaines de ces classes peuvent être instanciées, comme Date dont il est possible d'obtenir des exemplaires avec l'opérateur \`new\`. D'autres offrent surtout des méthodes statiques, comme Math dont il est impossible d'obtenir une instance.

                    Une classe est un modèle (comme un moule à pâtisserie) qui définit un ensemble d'attributs (la taille, les fruits utilisés) et de méthodes (découper, manger). Une instance est un exemplaire d'une classe (un gâteau aux poires, une tarte aux pommes, etc). Il est ainsi possible de créer autant d'objets d'une classe que souhaité avec pour chacun d'entre eux ses attributs propres et ses opérations basés sur le modèle de la classe.

                    **Création et comparaison de deux dates :**

                        var release = new Date(1946, 0, 1);
                        → Tue Jan 01 1946 00:00:00 GMT+0100

                        var peace = new Date(1945, 8, 2);
                        → Sun Sep 02 1945 00:00:00 GMT+0200 (CEST)

                        release.getTime() > peace.getTime();
                        → true
                `
            },
            {
                course: true,
                description: `
                    JavaScript est un langage à prototype (contrairement aux langages objets classiques, des attributs peuvent être ajoutés aux objets, même si la classe ne les déclare pas). Une classe est déclarée comme une fonction classique (par convention, avec son initiale en majuscule), et, à ce moment là, il s'agit d'une fonction comme les autres. Ce qui la distingue, c'est que pour l'invoquer, au lieu d'utiliser \`()\`, le mot clé \`new\` est utilisé. Alors, et contrairement à une fonction classique, son code est invoqué avec en variable le mot clé \`this\` faisant référence à l'objet qui est créé.

                    **Création de classes et d'objets :**

                        var Pie = function(fruits, pieces) {
                          this.fruits = fruits;
                          this.pieces = pieces;
                        }

                        var applePie = new Pie('apple', 8);
                        applePie.fruits;
                        → 'apple'

                        var cheeseCake = new Pie('cheese', 6);
                        cheeseCake.fruits;
                        → 'cheese'

                    Ainsi, à chaque usage du mot clé \`new\` un nouvel object de la classe est créé disposant d'un attribut \`fruits\` qui lui est propre. Il est possible d'ajouter du comportement à ces objets.

                    **Ajout de méthodes à une classe :**

                        Pie.prototype.eat = function() {
                          if (this.pieces >= 1)
                            this.pieces--;
                        }

                        var applePie = new Pie('apple', 8);
                        applePie.eat();
                        applePie.eat();
                        applePie.pieces;
                        → 6

                    Les objets encapsulent leurs données et exposent leurs opérations. [L'encapsulation](https://developer.mozilla.org/en/docs/Glossary/Encapsulation), qui consiste à ne rendre disponible aux utilisateurs d'un objet qu'une partie de celui-ci, permet de garantir la cohérence de cet objet.
                `
            },
            {
                course: true,
                description: `
                    Certains langages disposent de mécanismes pour rendre certains attributs ou méthodes d'un objet inaccessibles de l'extérieur, ce n'est pas le cas de JavaScript. Quels qu'ils soient, tous les attributs et toutes les méthodes sont accessibles à tout le monde. Pour parer cette limitation, une norme de nommage a vu le jour, et propose de préfixer les attributs et méthodes protégés d'un underscore.

                    **Légende ajout d'attribut privé (par convention) :**

                        var Pie = function(fruits, pieces) {
                          this._fruits = fruits;
                          this._pieces = pieces;
                        }

                        Pie.prototype.eat = function() {
                          if (this._pieces >= 1)
                            this._pieces--;
                        }

                        Pie.prototype.getPieces = function() {
                          return this._pieces;
                          // returns a copy (simple type are passed by value)
                          // if it it an array, create a copy: array.slice()
                          // with a dictionnary, create a copy: JSON.parse(JSON.stringify({..}))
                        }

                        var applePie = new Pie('apple', 8);
                        var pieces = applePie.getPieces();
                        pieces;
                        → 8

                        pieces = 7;
                        applePie.getPieces();
                        → 8

                    Dans cet exemple, les attributes \`_fruits\` et \`_pieces\` sont déclarés internes. Une méthodes \`getPieces\` est fournie pour y accéder, et elle renvoie une valeur non modifiable. C'est ici que brille l'intérêt des classes, la logique de calcul est masquée (décrémenter les nombre de parts à chaque fois qu'un gourmand en mange une) et la cohérence des données est assurée (le nombres de parts restantes n'est modifiée qu'ici) et tous les objets instanciés à partir de cette classe disposent du même contrat de fonctionnement.

                    Bien entendu, l'attribut \`_pieces\` reste accessible de l'extérieur, et, si il est modifié par quelqu'un d'autre, les données de l'objet deviennent incohérentes (son nommage averti qu'il ne faut pas le modifier ainsi).

                    Dans un registre similaire, il est possible d'ajouter dynamiquement, et individuellement, des attributs dans un objet non prévu par sa classe.

                    **Ajout dynamique d'attributs à un objet :**

                        var cheeseCake = new Pie('cheese');
                        cheeseCake.flavour = 'lemon';
                        cheeseCake.flavour;
                        → 'lemon'
                `
            },
            {
                title: "Créer une classe",
                description: "Créer une classe <code>Player</code> avec un attribut <code>name</code>, de façon à ce que <code>new Player(1)</code> crée un objet avec l'attrbut <code>name</code> initialisé à <code>1</code>.",
                excerpt: "Dans ce jeu deux adversaires s'affrontent, et jouent deux coups à tour de rôle. Avec un coup, un joueur peut déplacer un pion d'une colonne vers une autre. Si plusieurs pions sont sur la même colonne, seul le plus éloigné du territoire adverse peut être déplacé. Et, quand un pion arrive dans une colonne, il arrive dans la première ligne disponible, la plus éloignée du territoire adverse.<br><br>Dans les étapes suivantes, deux objets de la classe <code>Player</code> vont être utilisés pour gérer les actions des deux joueurs ; la classe va définir un comportement similaire, unique pour les deux joueurs, le premier de ses objets gérera le premier joueur, et le second, le second joueur.<br><br>Il est possible (et souvent souhaitable) de structurer un programme à l'aide de composants au comportement clairement défini. Une classe est un modèle (comme un moule à pâtisserie) qui définit un ensemble d'attributs (la taille, les fruits utilisés) et de méthodes (découper, manger). <pre><code>var Player = function(name) {<br>  this.name = name;<br>}<br>var player = new Player(1);</code></pre>Par convention les classes commencent par une majuscule et les variables / instances par une minuscules.",
                solved: "var Player = function(name) {<br>  this.name = name;<br>};",
                dom: function() {
                    return might.bind(might);
                },
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
        title: "Prototype, héritage, contexte",
        description: "Les classes JavaScript repose sur une chaîne de prototypes. Cela offre plus de richesse que dans d'autres approches plus tradiotnnelles, mais implique également certaines contraintes.<br><br>Ce chapitre approfondit la programmation objet.",
        color: "teal",
        steps: [
            {
                title: "Classes et comparaison d'objets",
                course: true,
                description: `
                    Lorsque deux objets sont comparés, ce n'est pas la valeur de leurs attributs qui est comparée, mais la référence des objets ; à la création d'un objet, une zone mémoire lui est réservée par le navigateur pour le stocker. Deux objets au contenu identique ne sont donc pas égaux car ils sont alloués à différents endroits en mémoire. Pour que deux objet soient égaux, il faut qu'il s'agisse du même objet (la comparaison d'objets littéraux ou de tableau fonctionne de la même façon).

                    **Comparaison d'objets :**

                        var applePie = new Pie('apple', 8);
                        var bigApplePie = new Pie('apple', 12);

                        applePie === bigApplePie;
                        → false

                        applePie === applePie;
                        → true

                        applePie._fruits === bigApplePie._fruits
                        && applePie._pieces === bigApplePie._pieces
                        && ...; // compare every attribute to verify that objets are equal
                        → true

                    ### Méthodes statiques de classes

                    Enfin, il est également possible d'ajouter des méthodes statiques de classe, c'est à dire des méthodes ne s'appliquant pas à un objet particulier, mais à la classe elle-même. Ce qui est le cas pour la classe \`Math\`, par exemple, dont toutes les méthodes sont des méthodes de classe ; calculer le sinus d'un angle ou maximum de deux nombres ne concerne que les paramètres de la fonction.

                    **Méthode statique de classe :**

                        Pie.favoriteFavour = function() {
                          return 'lemon';
                        }

                        Pie.favoriteFavour();
                        → 'lemon'

                    L'usage de telles fonctions est souvent utile, comme dans le cas de \`Math\`, pour regrouper des méthodes relatives aux mêmes types de traitement qui ne nécessitent pas d'objets.
                `
            },
            {
                title: "La chaîne de prototypes",
                course: true,
                description: `
                    Chaque objet encapsule un autre objet qui est son prototype. Ce prototype encapsule un autre objet qui est son prototype, et ainsi de suite jusqu'à ce qu'un objet ainsi encapsulé soit \`null\`. Par définition, \`null\` n'a pas de prototype et agit comme le dernier maillon de la chaîne de prototypes.

                    Lorsqu'un attribut est accédé sur un objet, si cet attribut n'est pas trouvé sur l'objet lui-même, le navigateur le cherche sur son prototype, puis sur le prototype de son prototype, etc. S'il n'est trouvé nulle part, sa valeur est \`undefined\`. Lorsqu'un attribut est modifié sur un objet, c'est directement sur l'objet qu'il l'est, la chaîne de prototype n'est pas parcourue.

                    **Création d'une classe basée sur le prototype d'une autre classe :**

                        var Cake = function(fruits, iceCream) {
                          Pie.call(this, fruits, 20); // Cake is a sub-class of Pie
                          this.iceCream = iceCream;
                        };

                        Cake.prototype = Object.create(Pie.prototype);

                        var chocolateCake = new Cake('nuts', 'vanilla');
                        chocolateCake._fruits;
                        → 'nuts'
                        chocolateCake.iceCream;
                        → 'vanilla'
                        chocolateCake.tea;
                        → undefined
                `
            },
            {
                title: "L'héritage",
                course: true,
                description: `
                    La chaîne de prototypes permet de créer des relations d'héritage entre objets. Ainsi, une classe récupère les attributs et le comportement de la classe dont elle hérite et elle peut y apporter des modifications pour l'usage de ses propres objets. Dans le cas précédent, la classe \`Cake\` hérite de la classe \`Pie\`, lui ajoute l'attribut \`iceCream\` et fixe le nombre de part à 20. Tous les gâteaux de ce type seront des tartes un peu spéciales, forcément composées de 20 parts à partager et accompagnées d'une boule de glace.

                    Lorsqu'une classe hérite d'une autre, elle peut redéfinir certaines de ces méthodes.

                    **Redéfinition d'une méthode dans une classe fille :**

                        Cake.prototype.eat = function() {
                          if (this._pieces > 1)
                            this._pieces -= 2; // pieces are serve two by two
                        }
                `
            },
            {
                title: "Le contexte",
                course: true,
                description: `
                    Chaque object dispose de son propre contexte, accessible et modifiable via son attribut \`this\`. Une des difficultés du langage est que ce contexte change si une autre fonction est invoquée au sein d'une fonction de cet objet.

                    **Problème du contexte relatif à la dernière fonction :**

                        Pie.prototype.display = function() {
                          console.log(this.fruits);
                        });

                        Pie.prototype.displayLater = function() {
                          setTimeout(function() {
                            console.log(this.fruits);
                          }, 10);
                        });

                        var applePie = new Pie('apple', 8);
                        applePie.display();
                        → 8

                        applePie.displayLater();
                        → undefined

                    La fonction anonyme déclarée dans le \`setTimeout\` reçoit comme contexte le \`this\` relatif à l'invocation de ce timeout. Dans le cas d'un event listener, le \`this\` sera relatif à l'élément de la page ayant reçu le clic, par exemple. Dans certaines circonstances, cela peut être utile, dans d'autres, comme dans celles présentées ici, cela complique les choses.

                    Pour parer ce problème, il est possible de forcer le contexte d'une fonction à l'aide de la méthode \`bind\`.

                    **Légende modification du contexte d'une fonction :**

                        Pie.prototype.displayLater = function() {
                          var fn = function() {
                            console.log(this.fruits);
                          }.bind(this);

                          setTimeout(fn, 10);
                        });

                        applePie.displayLater();
                        → 8

                    Ainsi, la fonction déclarée dans le setTimeout ne s'exécute plus avec le contexte du timeout, mais avec celui de l'objet.
                    Il existe deux autres méthodes souvent utilisées pour invoquer une méthode avec un contexte prédéfini : call et apply.

                    **Modification du contexte d'une fonction :**

                        var multiply = function(by) {
                          var result = this.value * by;
                          return result;
                        }

                        var ten = {value: 10};
                        var Money = function(value) {
                          this.value = value;
                        };
                        var twelve = new Money(12);

                        multiply.call(ten, 2); // or multiply.apply(ten, [2]);
                        → 20

                        multiply.call(twelve, 2); // or multiply.apply(twelve, [2]);
                        → 24

                    Ces deux méthodes ont la même logique, elles invoquent une fonction en lui donnant son contexte (premier paramètre d'appel) et ses paramètres d'exécution (second paramètre et suivants). La méthode \`call\` transmet ces paramètres d'exécution les uns après les autres, la méthode \`apply\` les transmet sous la forme d'un tableau (pense-bête apply, array).
                `
            },
            {
                title: "La gestion de la mémoire",
                course: true,
                description: `
                    JavaScript dispose d'une garbage collection, c'est à dire d'un mécanisme libérant automatiquement la mémoire utilisée par des objets, les littéraux et les tableaux qui ne sont plus utilisés. Il passe à fréquence régulière et remet cette mémoire à disposition.

                    Tant qu'un objet est référencé (stocké dans une variable, dans un tableau, etc), il est maintenu en mémoire. Déclarer un tableau à la racine d'un script — pour le rendre accessible à tous les fonctions de ce script, par exemple — l'expose à ne jamais être retiré de la mémoire.

                    La mémoire du navigateur n'est pas infinie, lorsqu'un programme est très gourmand, il risque de ralentir de la navigateur, et, avec le temps, de bloquer la page. Déclarer les variables dans les fonctions ou objets qui les utilisent limitent ce genre de problèmes. I de grandes quantités de données sont à manipuler, intégrer un système de plafond pour supprimer les données les plus anciennes lorsqu'une limite est atteinte, pour empêcher le programme de croître en mémoire indéfiniment.
                `
            }
        ]
    }, {
        title: "Les expressions régulières",
        description: "Les expressions régulières sont des expressions rationnelles permettant de reconnaître un motif (pattern) dans un texte de façon plus fine qu'une recherche classique de caratère.<br><br>Ce chapitre présente les expressions régulières.",
        color: "teal",
        steps: [
            {
                title: "",
                course: true,
                description: `
                    Les expressions régulières sont des expressions rationnelles permettant de reconnaître un motif (pattern) dans un texte. Il existe deux méthodes pour les exprimer, l'une avec l'objet RegExp, l'autre avec deux « / » remplaçant les guillemets d'une chaîne de caractères. En plus du pattern à matcher, des flags (ou indicateurs) peuvent être indiqués pour préciser ce pattern.

                    **Création d'expressions régulières :**

                        /pattern/flags
                        new RegExp(pattern[, flags])

                    L'utilisation la plus simple d'une expression régulière est équivalente à la méthode indexOf des String recherchant la première occurrence d'un pattern dans un texte.

                    **Expressions régulières, usage simple (équivalent à indexOf) :**

                        'we all live in a yellow submarine'.indexOf('in')
                        → 12

                        /in/.test('we all live in a yellow submarine')
                        → true

                        'we all live in a yellow submarine'.match(/in/)
                        → ['in']

                    De nombreux caractères spéciaux permettent de rechercher des patterns plus élaborés :

                    * « ? » indique que le caractère précédent est présent 0 ou 1 fois
                    * « + » indique que le caractère précédent peut être répété 1 fois ou plus
                    * « * » indique que le caractère précédent peut être répété 0 fois ou plus
                    * « . » est un joker remplaçant n'importe quel caractère
                    * « | » sépare deux alternatives possibles d'expressions régulière
                    * « ( » et « ) » forme un groupe sur lequel les autres caractères spéciaux s'appliquent
                    * « { » et « } » indique que le caractère précédent doit être répété un certain nombre de fois
                    * « ^ » indique que le pattern doit commencer par le caractère qui suit
                    * « $ » indique que le pattern doit se conclure par le caractère qui suit
                `
            },
            {
                course: true,
                description: `
                    **Expressions régulières avec caractères spéciaux :**

                        'we all live in a yellow submarine'.match(/sub.*in/)
                        → ['submarin']

                        'we all live in a yellow submarine'.match(/s.b.a.i.e/)
                        → ['submarin']

                        'we all live in a yellow submarine'.match(/l{2}/)
                        → ['ll']

                        'we all live in a yellow submarine'.replace(/l/, '')
                        → 'we al live in a yellow submarine'

                    Par défaut, la recherche du pattern s'effectue uniquement sur la première occurrence de celui-ci et en respectant la casse (majuscule et minuscule sont différentes). Les flags qu'il est possible d'indiquer à l'expression permettent de modifier cela :

                    * « g » indique de chercher pour toutes les occurrences du pattern
                    * « i » indique d'être insensible à la casse (majuscules / miniscules)

                    **Expressions régulières avec flags :**

                        'we all live in a yellow submarine'.match(/in/g)
                        → ['in', 'in']

                        'we all live in a yellow submarine'.match(/l/g)
                        → ['l', 'l', 'l', 'l', 'l']

                        'we all live in a yellow submarine'.match(/SU./i)
                        → ['sub']

                        'we all live in a yellow submarine'.replace(/l/g, '')
                        → 'we a ive in a yeow submarine'

                    Une documentation détaillée est disponible sur les [RegExp](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp) pour plus de détails. Et [un excellent outil](https://regex101.com/) en ligne pour les tester et mieux les appréhender.
                `
            },
            {
                title: "Supprimer toutes les occurences d'une lettre",
                description: "Créer une variable nommée <code>answer</code> et lui affecter la valeur de <code>x</code> (déclarée par ce tutoriel) dont toutes les lettres <code>e</code> ont été retirées.",
                solved: "var answer = x.replace(/e/ig, '');",
                init: function() {
                    window.x = this.x = randomize("I used to get mad at my school (No I can't complain)", "Lucy in the sky with diamonds", "And in the end, the love you take is equal to the love you make", "Sit back and let the evening go");
                },
                answer: function() {
                    return this.x.replace(/e/ig, '');
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Identifier si une chaine de caractères contient un pattern",
                description: "Créer une variable nommée <code>answer</code> et lui affecter <code>true</code> si la valeur de <code>x</code> (déclarée par ce tutoriel) contient la pattern <code>en.</code> ou <code>.</code> correspond à un caractère quelconque. Lui affecter <code>false</code> sinon.",
                solved: "var answer = /en./i.test(x);",
                init: function() {
                    window.x = this.x = randomize("I used to get mad at my school (No I can't complain)", "Lucy in the sky with diamonds", "And in the end, the love you take is equal to the love you make", "Sit back and let the evening go");
                },
                answer: function() {
                    return /en./i.test(this.x);
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Identifier combien de fois une chaine de caractères contient un pattern",
                description: "Créer une variable nommée <code>answer</code> et lui affecter le compte de <code>e</code> contenus dans la chaine de caractères déclarée par <code>x</code> (déclarée par ce tutoriel).",
                solved: "var match = x.match(/e/ig);<br>var answer = !match ? 0 : match.length;",
                init: function() {
                    window.x = this.x = randomize("I used to get mad at my school (No I can't complain)", "Lucy in the sky with diamonds", "And in the end, the love you take is equal to the love you make", "Sit back and let the evening go");
                },
                answer: function() {
                    var match = this.x.match(/e/ig);
                    return !match ? 0 : match.length;
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Déclarer un pattern dynamique",
                description: "Créer une variable nommée <code>answer</code> et lui affecter <code>true</code> si le pattern déclaré par <code>y</code> est contenu dans la valeur de <code>x</code> (déclarées par ce tutoriel).",
                solved: "var answer = new RegExp(y).test(x);",
                init: function() {
                    window.x = this.x = randomize("I used to get mad at my school (No I can't complain)", "Lucy in the sky with diamonds", "And in the end, the love you take is equal to the love you make", "Sit back and let the evening go");
                    window.y = this.y = randomize("en.", "e.*d", "e?t")
                },
                answer: function() {
                    return new RegExp(this.y).test(this.x);
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Déclarer un pattern conditonnel",
                description: "Créer une variable nommée <code>answer</code> et lui affecter la valeur de <code>x</code> (déclarée par ce tutoriel) dont tous les <code>to</code>, <code>at</code>, <code>in</code> et <code>is</code> ont été retirés (de préférence, avec une seule expression régulière).",
                solved: "var answer = x.replace(/(to|at|in|is)/ig, '');",
                init: function() {
                    window.x = this.x = randomize("I used to get mad at my school (No I can't complain)", "Lucy in the sky with diamonds", "And in the end, the love you take is equal to the love you make", "Sit back and let the evening go");
                },
                answer: function() {
                    return this.x.replace(/(to|at|in|is)/g, '');
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Déclarer un pattern avec des groupes",
                description: "Créer une variable nommée <code>answer</code> et lui affecter la valeur de <code>x</code> (déclarée par ce tutoriel) dont chaque <code>e</code> a été remplacé par <code>-e-</code> à condition qu'il soit précédé et suivi d'une lettre (et pas d'une espace — de préférence, avec une seule expression régulière).",
                solved: "var answer = x.replace(/(\w)e(\w)/ig, '$1-e-$2');",
                init: function() {
                    window.x = this.x = randomize("I used to get mad at my school (No I can't complain)", "Lucy in the sky with diamonds", "And in the end, the love you take is equal to the love you make", "Sit back and let the evening go");
                },
                answer: function() {
                    return this.x.replace(/(\w)e(\w)/ig, '$1-e-$2');
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Déclarer un pattern non glouton",
                description: "Créer une variable nommée <code>answer</code> et lui affecter le compte de <code><strong>...</strong></code> contenus dans la chaine de caractères déclarée par <code>x</code> (déclarée par ce tutoriel) ou <code>...</code> correspond à un ou plusieurs caractères quelconques.",
                solved: "var match = x.match(/&lt;strong&gt;.*?&lt;\\/strong&gt;/g);<br>var answer = !match ? 0 : match.length;",
                init: function() {
                    window.x = this.x = randomize("I used to <strong>get</strong> mad at my school (No I <strong>can't</strong> complain)", "Lucy in the <strong>sky</strong> with <strong>diamonds</strong>", "And in the end, the love you <strong>take</strong> is equal to the love you <strong>make</strong>", "Sit <strong>back</strong> and let the evening <strong>go</strong>");
                },
                answer: function() {
                    var match = this.x.match(/<strong>.*?<\/strong>/g);
                    return !match ? 0 : match.length;
                },
                warn: function() {
                    return basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            }
        ]
    }, {
        title: "Puzzle | Taquin",
        description: "Un taquin est ce puzzle en plastique à résoudre du bout des pouces. Une pièce peut être glissée horizontalement ou verticalement pour venir prendre la place de l'espace libre.<br><br>Ce chapitre présente la réalisation (corsée) d'un taquin pas à pas.",
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
                solution: function() {
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
                description: "Au clic sur une case, celle-ci doit être intervertie avec la case vide <code>.square0</code> à condition que l'une et l'autre soit à côté (et pas en diagonale).",
                excerpt: "Stocker l'état du puzzle dans une variable (une matrice de préférence — un tableau de tableaux, 3 lignes, 3 colonnes), et trouver une façon condensée pour lister quelles cases sont accessibles à partir d'une autre case. Se concentrer pour l'instant sur les mouvements horizontaux.",
                solved: "var shuffle = function(o){<br>  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);<br>  return o;<br>}<br><br>var render = function(matrix) {<br>  var ul = document.querySelector('.sliding ul');<br>  ul.innerHTML = '';<br><br>  var squares = [].concat(matrix[0], matrix[1], matrix[2])<br>  for (var square of squares) {<br>    var li = document.createElement('li');<br>    li.className = 'square' + square;<br>    li.setAttribute('data-id', square);<br>    li.addEventListener('click', function() {<br>      move(matrix, parseInt(this.getAttribute('data-id')));<br>    });<br>    ul.appendChild(li);<br>  }<br>}<br>var move = function(matrix, square) {<br>  if (square === 0)<br>    return false;<br>  if (matrix[0][0] === square)<br>    canToggle(matrix, [0, 0], [[0, 1]]);<br>  else if (matrix[0][1] === square)<br>    canToggle(matrix, [0, 1], [[0, 0], [0, 2]]);<br>  else if (matrix[0][2] === square)<br>    canToggle(matrix, [0, 2], [[0, 1]]);<br>  else if (matrix[1][0] === square)<br>    canToggle(matrix, [1, 0], [[1, 1]]);<br>  else if (matrix[1][1] === square)<br>    canToggle(matrix, [1, 1], [[1, 0], [1, 2]]);<br>  else if (matrix[1][2] === square)<br>    canToggle(matrix, [1, 2], [[1, 1]]);<br>  else if (matrix[2][0] === square)<br>    canToggle(matrix, [2, 0], [[2, 1]]);<br>  else if (matrix[2][1] === square)<br>    canToggle(matrix, [2, 1], [[2, 0], [2, 2]]);<br>  else if (matrix[2][2] === square)<br>    canToggle(matrix, [2, 2], [[2, 1]]);<br>}<br>var canToggle = function(matrix, from, combinaisons) {<br>  for (var c of combinaisons) {<br>    if (matrix[c[0]][c[1]] === 0) {<br>      toggle(matrix, [from[0], from[1]], [c[0], c[1]]);<br>      break;<br>    }<br>  }<br>}<br>var toggle = function(matrix, from, to) {<br>  var memo = matrix[from[0]][from[1]];<br>  matrix[from[0]][from[1]] = matrix[to[0]][to[1]];<br>  matrix[to[0]][to[1]] = memo;<br>  render(matrix);<br>}<br><br>document.querySelector('.sliding button').addEventListener('click', function() {<br>  var squares = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);<br>  var matrix = [<br>    [squares[0], squares[1], squares[2]],<br>    [squares[3], squares[4], squares[5]],<br>    [squares[6], squares[7], squares[8]]<br>  ];<br>  render(matrix);<br>});",
                dom: function() {
                    return sliding.bind(sliding);
                },
                solution: function() {
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
                description: "Au clic sur une case, celle-ci doit être intervertie avec la case vide <code>.square0</code> à condition que l'une et l'autre soit à côté (et pas en diagonale).",
                solved: "var shuffle = function(o){<br>  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);<br>  return o;<br>}<br><br>var render = function(matrix) {<br>  var ul = document.querySelector('.sliding ul');<br>  ul.innerHTML = '';<br><br>  var squares = [].concat(matrix[0], matrix[1], matrix[2])<br>  for (var square of squares) {<br>    var li = document.createElement('li');<br>    li.className = 'square' + square;<br>    li.setAttribute('data-id', square);<br>    li.addEventListener('click', function() {<br>      move(matrix, parseInt(this.getAttribute('data-id')));<br>    });<br>    ul.appendChild(li);<br>  }<br>}<br>var move = function(matrix, square) {<br>  if (square === 0)<br>    return false;<br>  if (matrix[0][0] === square)<br>    canToggle(matrix, [0, 0], [[0, 1], [1, 0]]);<br>  else if (matrix[0][1] === square)<br>    canToggle(matrix, [0, 1], [[0, 0], [1, 1], [0, 2]]);<br>  else if (matrix[0][2] === square)<br>    canToggle(matrix, [0, 2], [[0, 1], [1, 2]]);<br>  else if (matrix[1][0] === square)<br>    canToggle(matrix, [1, 0], [[0, 0], [1, 1], [2, 0]]);<br>  else if (matrix[1][1] === square)<br>    canToggle(matrix, [1, 1], [[0, 1], [1, 0], [1, 2], [2, 1]]);<br>  else if (matrix[1][2] === square)<br>    canToggle(matrix, [1, 2], [[0, 2], [1, 1], [2, 2]]);<br>  else if (matrix[2][0] === square)<br>    canToggle(matrix, [2, 0], [[1, 0], [2, 1]]);<br>  else if (matrix[2][1] === square)<br>    canToggle(matrix, [2, 1], [[2, 0], [1, 1], [2, 2]]);<br>  else if (matrix[2][2] === square)<br>    canToggle(matrix, [2, 2], [[2, 1], [1, 2]]);<br>}<br>var canToggle = function(matrix, from, combinaisons) {<br>  for (var c of combinaisons) {<br>    if (matrix[c[0]][c[1]] === 0) {<br>      toggle(matrix, [from[0], from[1]], [c[0], c[1]]);<br>      break;<br>    }<br>  }<br>}<br>var toggle = function(matrix, from, to) {<br>  var memo = matrix[from[0]][from[1]];<br>  matrix[from[0]][from[1]] = matrix[to[0]][to[1]];<br>  matrix[to[0]][to[1]] = memo;<br>  render(matrix);<br>}<br><br>document.querySelector('.sliding button').addEventListener('click', function() {<br>  var squares = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);<br>  var matrix = [<br>    [squares[0], squares[1], squares[2]],<br>    [squares[3], squares[4], squares[5]],<br>    [squares[6], squares[7], squares[8]]<br>  ];<br>  render(matrix);<br>});",
                dom: function() {
                    return sliding.bind(sliding);
                },
                solution: function() {
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
        description: "Un puissance 4 est un puzzle pour 2 joueurs jouant à tour de rôle un jeton dans une colonne. Chaque jeton s'empile aux jetons précédement, le premier joueur à en aligner 4 remporte la partie.<br><br>Ce chapitre présente la réalisation (corsée) d'un puissance 4 pas à pas.",
        color: "pink",
        steps: [
            {
                title: "Générer une table de jeu",
                description: "Dans la <code>table</code> générer 6 lignes <code>tr</code> avec chacune 7 colonnes <code>td</code> afin de créer le plateau de jeu.",
                solved: "var table = document.querySelector('table');<br>var grid = [<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0]<br>];<br><br>var render = function() {<br>  table.innerHTML = '';<br>  for (var row of grid) {<br>    var tr = document.createElement('tr');<br>    for (var column of row) {<br>      var td = document.createElement('td');<br>      tr.append(td);<br>    }<br>    table.append(tr);<br>  }<br>};<br>render();",
                dom: function() {
                    return connectfour.bind(connectfour);
                },
                solution: function() {
                    if (document.querySelectorAll('table tr').length !== 6)
                        this.warn = this.warn || "La table doit contenir 6 <code>tr</code>";
                    if (document.querySelectorAll('table tr td').length !== 42)
                        this.warn = this.warn || "La table doit contenir 42 <code>td</code>";
                    return !this.warn;
                }
            },
            {
                title: "Ajouter un jeton alternativement jaune puis rouge",
                description: "Au clic sur n'importe quel <code>td</code> d'une colonne, ajouter au <code>td</code> en pied de cette colonne la classe <code>yellow</code> ou <code>red</code> alternativement (si il n'a pas de classe). Au fur et à mesure des clics, les jetons s'empilent ainsi les uns sur les autres. Si une colonne est remplie, elle ne reçoit plus de jeton au clic.",
                solved: "var table = document.querySelector('table');<br>var grid = [<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0]<br>];<br><br>var color = 'red';<br>var render = function() {<br>  table.innerHTML = '';<br>  for (var row of grid) {<br>    var tr = document.createElement('tr');<br>    for (var column of row) {<br>      var td = document.createElement('td');<br>      if (column)<br>        td.className = column;<br><br>      td.addEventListener('click', function(e) {<br>        var index = Array.prototype.indexOf.call(this.parentElement.children, this);<br>        for (var i = 5; i >= 0; i--) {<br>          if (!grid[i][index]) {<br>            color = (color === 'yellow' ? 'red' : 'yellow');<br>            grid[i][index] = color;<br>            break;<br>          } else continue;<br>        }<br>        render();<br>      });<br>      tr.append(td);<br>    }<br>    table.append(tr);<br>  }<br>};<br>render();",
                dom: function() {
                    return connectfour.bind(connectfour);
                },
                solution: function() {
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
                solution: function() {
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
                solution: function() {
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
    }, {
        title: "Les applications",
        description: "Angular, Backbone, React, Vue, la liste des librairies JavaScript facilitant la construction d'applications n'en finit pas de s'allonger. <br><br>Ce chapitre approfondit les problématiques sous-jacentes de ces outils.",
        color: "grey",
        steps: [
            {
                course: true,
                description: `
                    JavaScript donne accès à tout ce qui a lieu dans le navigateur, les actions utilisateurs, la barre d'adresse, l'historique, le contenu de la page, il n'en fallait pas moins pour qu'il devienne, au fil des années, le moteur des sites internet, leur chef d'orchestre.

                    Dès les débuts de jQuery, et la possibilité de développer un programme unique compatibles tous navigateurs, il ne manquait qu'une chose à son essor : la rapidité des navigateurs.

                    Google lors du développement de Gmail en 2007 saisit cette limitation technique et se donna pour mission de la lever avec Chrome, un navigateur survitaminé, qui, fin 2008 allait changer la donne. Les voix de nombreux cerveaux de la société s'exprimèrent dans [un long comic book](http://blogoscoped.com/google-chrome/) pour présenter le virage qu'avait pris internet : les pages web étaient devenues des applications. Ils abordèrent alors en détail les questions et les problématiques que ce changement introduisait, et proposèrent un nouveau navigateur pour y répondre.

                    Ce qui a changé, et qui demanda de repenser fondamentalement les navigateurs, c'est l'omniprésence de JavaScript. Dès lors la guerre des navigateurs se déclara et les lança dans une course à la puissance. Rétrospectivement, en à peine une année, de nouvelles frontières avaient été tracées, de nouvelles applications virent le jour, et de nombreux outils commencèrent à apparaître pour en faciliter le développement.

                    [Angular](https://angularjs.org/), [Backbone](http://backbonejs.org/), [Batman](http://batmanjs.org/), [Ember](http://emberjs.com/), [Knockout](http://knockoutjs.com/), [React](https://facebook.github.io/react/), [Riot](http://riotjs.com/), [Vue](http://vuejs.org/), la liste des librairies JavaScript facilitant la construction d'applications n'en finit pas de s'allonger. Cette profusion de librairie montrent deux choses, tout d'abord la vitalité de la communauté JavaScript et son profond besoin d'outils pour accélérer le développement, ensuite la diversité des approches envisageables sur cette nouvelle plateforme qu'est devenue le web.
                `
            },
            {
                course: true,
                description: `
                    Ces outils cherchent à répondre à quatre questions :

                    * comment découper et organiser une application en composants
                    * comment gérer le templating d'une application (la découpe en plusieurs HTML à trous)
                    * comment accéder aux données d'un serveur (Ajax et consort)
                    * comment gérer la navigation de l'utilisateur dans plusieurs pages côté client

                    ### Les limitations de jQuery et la naissance de la première génération de librairies MV*

                    La profusion de ces librairies au détriment de jQuery s'explique facilement. La doyenne des librairie n'a pas été conçue pour construire des applications, elle l'a été pour offrir une façon normalisée d'utiliser les navigateurs.

                    Développer une application avec jQuery pose rapidement des problèmes d'organisation du code, les composants chargés d'écouter les actions utilisateur peuvent émettre des requêtes Ajax et modifier la barre d'adresse. Bien sur, il est possible de définir des conventions pour structurer les choses, pour éviter le code spaghetti. Pourtant il est souvent plus simple de s'appuyer sur une structure plus robuste proposée par une librairie open source.

                    Backbone fut l'une des premières à voir le jour, et, via l'introduction de quatre classes, proposa une structure simple pour développer des applications jQuery. Toute sa logique est basé sur l'usage de jQuery mais en séparant les responsabilités de l'application afin de la rendre plus facile à appréhender et à maintenir.

                    Ces quatre classes sont :

                    * \`View\`, une vue, c'est à dire un bout de HTML (disposé dans la page à l'aide d'une template), sur lequel il est possible de positionner des écouteurs d'événements et dont le contenu est modifiable. Chaque partie du HTML de la page est géré par une vue différente, le header est une vue, les menus sont des vues, le footer également, et, chaque vue n'accède qu'à son HTML. Ainsi, tout ce qui a lieu dans une partie du site, est régenté par ce composant. Ce qui simplifie grandement sa modification
                    * \`Model\` et \`Collection\`, un modèle de donnée et une liste de modèles, c'est à dire l'état de l'application (ex. le nom et le prénom de l'utilisateur, les articles dans un panier). La vue affiche des informations mais elle ne les manipule pas, toutes les données récupérées du serveur et toutes les données saisies par l'utilisateur sont stockées dans des modèles. Ceux-ci connaissent les règles de cohérence, de validation (interdit au moins de 16 ans, etc)
                    * \`Router\`, un aiguilleur modifiant les vues affichées à l'écran en fonction de l'adresse saisie par l'utilisateur. L'adresse de la page peut-être modifiée par le programme en fonction des actions de l'utilisateur. Ainsi, si l'utilisateur filtre les résultats d'une recherche par type, ce type peut être ajouté à la barre d'adresse. Lorsque l'utilisateur rafraîchit la page ou qu'il partage son adresse, le routeur est alors en mesure de choisir les vues à afficher et de leur indiquer dans quel état exact elles doivent se positionner.
                `
            },
            {
                title: "Le templating",
                course: true,
                description: `
                    Le templating est un procédé qui vise à créer des templates (des textes à trous) qu'il est possible de renseigner en leur appliquant des objets dotés des mêmes propriétés ; cela s'avère très pratique pour construire des pages HTML avec des listes d'éléments, par exemple des résultats de recherche avec le même format, mais au données différentes.

                    La librairie [mustache](https://github.com/janl/mustache.js) permet de manipuler des templates qu'il est possible de renseigner avec des objets aux attributs correspondant.

                    **Manipulation de templates :**

                    \`\`\`javascript
                    var template = '<h1>Hello {{name}}</h1>';
                    Mustache.render(template, {name: 'Paul'});
                    → '<h1>Hello Paul</h1>'

                    Mustache.render(template, {name: 'John'});
                    → '<h1>Hello John</h1>'
                    \`\`\`

                    Cette librairie est très utilisée lors de la construction d'une partie de la page HTML en JavaScript. Certains blocs de la page sont enregistrés sous la forme de templates (la page de profil utilisateur) et complétées à l'aide de données dynamiques.

                    La librairie [handlebars](http://handlebarsjs.com/) est une des plus populaires pour le templating, elle est fortement inspirée de mustache.
                `
            },
            {
                course: true,
                description: `
                    ### Deuxième génération de librairies MV*

                    Certaines librairies ont une approche diamétralement opposée, elles font le choix de ne pas avoir recours à jQuery et de ne manipuler ni templates ni DOM. Cette deuxième génération de librairies, initiée par Angular et prolongée par de nombreuses autres, propose de masquer le DOM au maximum au développeur et de gérer automatiquement l'ajout de template HTML dans la page pour lui. Ces librairies de deuxième génération ont recours à divers procédés.

                    Le problème qu'elles cherchent à résoudre est la profusion d'événements et la difficulté de maintenir une application dans un état cohérent.
                    Il n'est pas rare qu'une librairie de première génération — où la gestion complète du DOM est laissée au développeur — réagisse à un événement en modifiant le contenu d'une partie de la page, puis une autre partie, puis à nouveau car ces deux parties dépendent l'une de l'autre. l'ordre d'affichage des éléments, la complexité d'imbrication de plusieurs d'entre eux et la richesse de navigation dans une application peuvent rendre difficile une gestion manuelle du changement d'état de chaque composant les uns par rapport aux autres.


                    Les librairies de deuxième génération ont souvent recours (de façon masquée pour le développeur) à une boucle d'événement qui synchronise l'état des différents composants et orchestre leur affichage en fonction de leur dépendance les uns des autres. Le développeur n'est presque plus confronté au DOM, il manipule alors des templates HTML et des valeurs et indique que pour tel événement, ces valeurs ont changées, à charge de la librairie de mettre à jour la page.

                    ### Troisième génération de librairies MV*

                    Des librairies de troisième génération ont commencées à voir le jour dans ce même esprit, mais, en plus d'abstraire la gestion du DOM pour le développeur, elles ont introduit un DOM virtuel. Cette idée remarquable consiste à maintenir (de façon masquée pour le développeur) une copie du DOM avant d'effectuer des modifications et de repérer, après les avoir effectuées, quelles parties de cette copie ont été modifiées pour, enfin, mettre uniquement à jour le DOM sur ces différences.

                    Cette troisième génération, initiée par React, a introduit également la notion d'état de l'application. Toutes les valeurs qui conditionnent l'affichage d'une page dans son état actuel sont identifiées, et l'application change en fonction de cet état. Si bien qu'à la saisie d'une adresse particulière, il suffit d'initialiser cet état correspondant, pour que toute l'application s'affiche de la même façon.

                    Il existe de nombreux dérivés de ces concepts, et chaque génération à ses avantages, la première étant la seule à être compatible avec les centaines de plugins jQuery, que les seconde et troisième génération ne peuvent utiliser (ou difficilement).
                `
            }
        ]
    }, {
        title: "ES6",
        description: "Chaque année, les navigateurs intègrent les dernières nouveautés de JavaScript. La norme ECMAScript dispose d'ailleurs d'un versionning annuel annoncant ces nouvelles fonctionnalités.<br><br>Ce chapitre présente les nouveatés principales de ES5 et ES6.",
        color: "grey",
        steps: [
            {
                course: true,
                description: `
                    Ces dernières années, de nombreuses améliorations ont été intégrées à JavaScript. En juin 2015, ES6 (ECMAScript 6) a été publié et est progressivement supporté par les navigateurs. Avant lui, ES5 avait déjà initié en 2009 ce mouvement de mise à jour du langage resté stationaire depuis 1999.

                    ### ES5

                    Les modifications les plus importantes [introduites par ES5](http://kangax.github.io/compat-table/es5/) — et supporté par tous les navigateurs modernes — portent sur les tableaux. Notamment, l'ajout des méthodes \`map\`, \`reduce\`, \`filter\`, \`forEach\`, \`every\`, \`some\` et \`indexOf\` (et la méthode \`bind\` ajoutée aux fonctions).

                    La méthode [\`map\`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map) crée, à partir d'un tableau, un nouveau tableau du même nombre d'éléments, en modifiant chacun des éléments de départ via la fonction fournie.

                    **Méthode array.map :**

                        [1, 2, 3].map(function(number) {
                          return number * 2;
                        });
                        → [2, 4, 6]

                    La méthode [\`filter\`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) crée, à partir d'un tableau, un nouveau tableau, en ne conservant que les éléments passant le test de la fonction fournie.

                    **Méthode array.filter :**

                        [1, 2, 3].filter(function(number) {
                          return number > 1;
                        });
                        → [2, 3]

                    La méthode [\`forEach\`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) permet d'itérer sur un tableau, c'est une alternative à la boucle for.

                    **Méthode array.forEach :**

                        var sum = 0;
                        [1, 2, 3].forEach(function(number) {
                          sum += number;
                        });
                        sum;
                        → 6

                    La méthode [\`reduce\`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) retourne, à partir d'un tableau, une valeur qui peut accumuler chacun des éléments de départ via la fonction fournie.

                    **Méthode array.reduce :**

                        [1, 2, 3].reduce(function(memo, number) {
                          return memo + number;
                        }, 0);
                        → 6

                    Les méthodes [\`every\`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every) et [\`some\`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some) retournent, à partir d'un tableau, un booléen indiquant si tous les éléments de départ passent le test de la fonction fournie (\`every\`) ou certains d'entre eux (\`some\`).

                    **Méthodes array.every et array.some :**

                        [1, 2, 3].every(function(number) {
                          return number > 2;
                        });
                        → false

                        [1, 2, 3].some(function(number) {
                          return number > 2;
                        });
                        → true
                `
            },
            {
                title: "ES6",
                course: true,
                description: `
                    Davantage encore de modifications ont été introduites par ES6 — certaines non supportées par certains navigateurs modernes. Pour les utiliser partout, des polyfill comme Babel, permettent de transpiler (transformer) du code moderne en code compatible tous navigateur, offrant ainsi l'usage des dernières avancées du langage, sans nécessiter l'attente de leur intégration dans tous les navigateurs.

                    ### Les classes

                    Le mot clé \`class\` permet de déclarer des classes et de s'abstraire de l'usage du prototype (qui est toujours utilisé en coulisses). La méthode \`constructor\` stocke le code d'initialisation de l'instance de cette classe. Et le mot clé \`static\` permet de créer des méthodes statiques de classe.

                    **Class, constructor et méthodes statiques :**

                        class Pie {
                          constructor(fruits, pieces) {
                            this.fruits = fruits;
                            this.pieces = pieces;
                          }
                          eat() {
                            if (this.pieces >= 1)
                              this.pieces--;
                          }
                          static favoriteFavour() {
                            return 'lemon';
                          }
                        }

                        var pie = new Pie('apple', 8);
                        pie.fruits;
                        → 'apple'

                        Pie.favoriteFavour();
                        → 'lemon'

                    L'héritage est simplifié avec l'apparition du mot clé \`extends\` et de la méthode \`super\`. Cette dernière fait référence à la méthode (ou au constructeur) du même nom de la classe parent.

                    **Héritage avec extends et super :**

                        class Cake extends Pie {
                          constructor(fruits, pieces, iceCream) {
                            super(fruits, 20);
                            this.iceCream = iceCream;
                          }
                        }

                        var chocolateCake = new Cake('nuts', 'vanilla');

                    Attention, les mots clés \`function\` disparaissent de la déclaration des méthodes, ainsi que les virgules séparant deux déclarations.
                `
            },
            {
                title: "Fat arrows",
                course: true,
                description: `
                    L'opérateur \`=>\`, nommé fat arrow, est un raccourci pour déclarer des fonctions. Si une seule opération est effectuée, les accolades peuvent être omises et le mot clé \`return\` est automatique.

                    **Raccourci fat arrow :**

                        var isOdd = (value) => {
                          return value % 2 === 0;
                        }
                        // alternative declaration
                        var isOdd = (value) => value % 2 === 0;

                        isOdd(17);
                        → false

                        isOdd(12);
                        → true

                    L'opérateur \`=>\` dispose également d'un second intérêt, il \`bind\` le \`this\` du contexte actuel à la fonction invoquée. Plus besoin, donc, de le réaliser soi-même.

                    **Raccourci fat arrow et bind automatique de this :**

                        class Pie {
                          displayLater() {
                            var fn = () => {
                              console.log(15);
                            };

                            setTimeout(fn, 10);
                          }
                        };

                        var applePie = new Pie();
                        applePie.displayLater();
                `
            },
            {
                title: "Template strings",
                course: true,
                description: `
                    L'usage du guillemet inversé \` permet de déclarer des templates.

                    **Template strings :**

                        var name = 'Paul', time = 'today';
                        \`Hello \${name}, how are you \${time}?\`
                        → "Hello Paul, how are you today?"

                    Ces templates permettent d'écrire des chaînes sur plusieurs lignes (impossibles avec les guillemets simples et doubles), et d'injecter des valeurs de variables avec la syntaxe \`\${variable}\`.
                `
            },
            {
                title: "Déclaration de variables, let, var et const",
                course: true,
                description: `
                    Deux nouveaux mots clés permettent de déclarer des variables, \`const\` et \`let\`. Le premier permet de déclarer une constante, une variable qui n'acceptera qu'une seule assignation. Les constantes doivent être assignées à leur déclaration et une erreur est levée si une autre valeur leur est assignée par la suite.

                    Le mot clé \`let\` est une réponse aux problèmes posés par la portée de \`var\`. En effet, ce dernier déclare une variable relative à la dernière fonction encapsulante. Cela pose de nombreux problèmes avec les boucles.

                    Le mot clé \`let\` règle ce problème en limitant sa portée à la boucle dans laquelle il se trouve. Ainsi déclarer une variable dans une boucle \`for\` limite sa portée à cette boucle et les fonctions asynchrones invoquées à l'intérieur de cette boucle disposent de la bonne valeur de cette variable, et non de la dernière valeur qu'elle aura reçu.

                    **Scope de var et de let :**

                        for (var i = 0; i < 5; i++)
                            setTimeout(() => { console.log(i); }, 20);
                        → 5, 5, 5, 5, 5

                        for (let i = 0; i < 5; i++)
                            setTimeout(() => { console.log(i); }, 20);
                        → 0, 1, 2, 3, 4

                    Remplacer \`var\` par \`let\` lors de l'écriture d'un programme est une idée généralement encouragée par la communauté.
                `
            },
            {
                title: "Les modules",
                course: true,
                description: `
                    La gestion des modules est également intégrée au langage avec les mots clé \`import\` et \`export\`. Le premier permet d'importer un module, le second permet de déclarer un module avec une variable, un objet, des fonctions qui seront visibles lors de son import par un autre module.

                    Cette syntaxe est très proche de celle proposée par AMD et CommonJS.

                    **Export et import de modules :**

                        // saved in numbers.js
                        export default {
                          isOdd: function(value) {
                            return value % 2 === 0;
                          },
                          isEven: function(value) {
                            return value % 2 === 1;
                          }
                        }

                        // saved in another file, in the same folder
                        import numbers from './numbers.js';

                        number.isOdd(17);
                        → true
                        number.isEven(17);
                        → false

                    L'export et l'import de modules sont très flexibles, et plusieurs autres fonctionnalités sont également proposées par ES6. [Des listes sont disponibles](https://github.com/lukehoban/es6features) pour approfondir le sujet.

                    À nouveau, ces fonctionnalités ne sont pas toutes supportées par tous les navigateurs actuels et l'usage d'un polyfill est nécessaire pour s'assurer qu'une application fonctionnera sur chacun d'entre eux.
                `
            }
        ]
    }, {
        title: "La qualité logicielle",
        description: "Une application peut devenir un musée, où chaque pièce, chaque mécanisme, se retrouve derrière une vitrine, rouillé, isolé, par peur qu'à la moindre manipulation, il tombe en miettes.<br><br>Ce chapitre présente des méthodes pour assurer une bonne qualité logicielle.",
        color: "grey",
        steps: [
            {
                course: true,
                description: `
                    Une application peut facilement devenir un musée, où chaque pièce, chaque mécanisme, se retrouve derrière une vitrine, rouillé, isolé, par peur qu'à la moindre manipulation, il tombe en miettes. Manquer de maîtrise sur le comportement des fonctionnalités d'une application peut impliquer des mois, des années de travail pour une modification bénigne, voire l'impossibilité totale de changer les choses.

                    Réfléchir en amont à la qualité d'une application et adopter une méthode au fil de son développement permet de s'assurer qu'elle restera facile à modifier dans le temps et qu'un oeil extérieur ne tombera pas de sa chaise en jetant à un oeil à son code.

                    Il existe de nombreuses approches à la question, voici des pistes populaires :

                    * tester manuellement devient rapidement humainement impossible et sujet à erreur
                    * pour chaque fonctionnalité, écrire des tests automatisés pour vérifier son fonctionnement
                    * pour chaque bug, écrire un test automatisé reproduisant le problème et le faire passer
                    * vérifier le fonctionnement de tous les tests après chaque modification du code, pour s'assurer qu'aucune régression n'a été introduite par celui-ci
                    * écrire quelques tests d'intégration (boite noire) pour vérifier des parcours utilisateur

                    Et une sélection de valeurs issues du manifeste agile et de l'extrême programming :

                    * découper l'application en sous parties et produire une version fonctionnelle rapidement intégrant le strict nécessaire puis ajouter d'autres fonctionnalités au fur et à mesure
                    * trouver une solution plus simple que le problème, se focaliser sur un problème spécifique
                    * développer les points complexes en binôme et faire des revues de code sinon
                    * échouer rapidement, s'attaquer aux questions difficile la tête la première pour vérifier leur faisabilité, ou la nécessité de s'y prendre autrement
                `
            }, {
                course: true,
                description: `
                    ### Les tests unitaires

                    Développer des tests unitaires requiert l'usage d'une librairie dédiée à ce effet. Il en existe de nombreuses, et il en existe de plusieurs familles. Tout d'abord, il y a les runner, des librairies qui gèrent l'exécution et le résultat d'une série de tests, sans offrir d'outils pour effectuer de vérification. Ensuite, il y a les asserter, des librairies qui vérifie si le résultat d'une opération est bien tel qu'attendu. Enfin, il y les mocker, ceux permettant de simuler du comportement, très utilisé pour isoler un composant en configurant tous ceux avec lesquels il communique pour qu'ils fonctionnent d'une manière bien précise.

                    **Tests unitaires :**

                        // "assert" comes from chai library (asserter)
                        var assert = chai.assert;

                        // "describe" and "it" come from mocha library (runner)
                        describe('Array indexOf', function() {
                          it('should return -1 when the value is not present', function () {
                            assert.equal([1,2,3].indexOf(5), -1);
                          });

                          it('should return index when the value is present', function () {
                            assert.equal([1,2,3].indexOf(1), 0);
                          });
                        });

                    Pour exécuter ces tests, il est nécessaire d'installer [mocha](https://mochajs.org/) et [chai](http://chaijs.com/), puis, via la ligne de commande d'exécuter la commande \`mocha **/*.js\`. Un résultat visuel sera alors affiché au fur et à mesure de l'exécution des tests indiquant leur résultat.

                    **Résultat des tests :**

                        Array indexOf
                          ✓ should return -1 when the value is not present
                          ✗ should return index when the value is present
                              AssertionError: expected 0, actual 1
                              at array.test.js:10:12

                          1 passing (22ms)
                          1 failing

                    Le résultat d'une exécution de tests distingues les tests ayant réussis et ceux ayant échoués. Pour ces derniers, la valeur attendue et celle obtenue sont indiqués, en quoi elle diffèrent et à quelles ligne du test.

                    ### Les tests d'intégration

                    Une autre famille de tests utilisés avec plus de modération est celle des tests boite noire, ou d'intégration. Ils sont constitués d'un navigateur headless (sans affichage utilisateur) dont le but est de simuler les actions d'un internaute (ex. saisir identifiant et mot de passe, valider une commande, etc). [Casper](http://casperjs.org/) et [Nightmare](http://www.nightmarejs.org/) sont deux bonnes réponses à cette problématique.
                `
            },
            {
                title: "Extreme Programming",
                course: true,
                description: `
                    Extreme programming (xp) est une suite de retours d'expérience sur le métier de développeur qui proposent un ensemble de valeurs et de pratiques. En voici quelques-unes.

                    ### Refactoring

                    Plutôt que de considérer qu'un code qui fonctionne ne doit plus être modifié, le refactoring propose de le remanier régulièrement sans modifier son comportement, afin d'en améliorer la facilité d'accès et l'éventuelle modification future.

                    ### Pair programming

                    Travailler en binôme plutôt que seul devant son écran est souvent très instructif. L'un des deux au clavier, pendant que l'autre relit le code et suggère les prochaines étapes ou certaines améliorations. Ne pas avoir le clavier entre les mains permet aussi d'avoir plus de recul. Un autre format souvent pratiqué par les équipes est la revue de code (ou code review) qui consiste à demander une relecture par un autre dévelopeur de chaque nouvelle fonctionnalité.

                    ### Collective ownership

                    L'équipe est collectivement responsable du code, chaque développeur peut modifier toutes ses portions même celles qu'il n'a pas écrite lui-même. En cas de coup dur en production, l'équipe se sert les coudes et ne rejete pas la faute sur une personne en particulier. Si une personne venait à quitter l'équipe, les autres sont en mesure de continuer à travailler sans perdre le contrôle sur une partie du code.

                    ### Feedback

                    Plus rapidement l'équipe est informée qu'une régression a été introduite dans le code, plus rapidement elle sera en mesure de la corriger. Les tests ont donc nature a été joué rapidement, notamment à l'aide d'une intégration continue qui, à chaque modification, les lance et notifie l'équipe en cas de test en erreur.

                    Si une personne est mal à l'aise à cause d'une situation, elle peut en discuter ouvertement avec les personnes concernées, de façon constructive et bienveillante — rien ne dit que la ou les personnes incriminées l'ont vexé volontairement.

                    ### Courage

                    De nombreuses choses demandent beaucoup de temps, d'attention, et de persévérance, et il est souvent tentant de faire au plus vite pour passer à autre chose, ou de ne pas se tourner vers les autres pour décoincer une situation. Faire preuve de courage en s'attaquant patiemment à un gros problème ou en faisant le maximum preuve de diplomatie porte souvent ses fruits.
                `
            }
        ]
    }, {
        title: "Caches et storages",
        description: "Accélérer la vitesse d'affichage d'un site web est toujours une question importante. Les navigateur et le réseau internet prévoient des outils pour ce faire.<br><br>Ce chapitre présente les mécanisme de cache et de storage des navigateurs et du réseau.",
        color: "grey",
        steps: [
            {
                course: true,
                description: `
                    Le temps que l'utilisateur met à récupérer une application est un critère fondamental. Si l'attente dépasse quelques secondes, il aura l'impression qu'elle ne fonctionne pas et quittera la page.

                    Ce temps est déterminé par plusieurs critères :

                    * le temps pour résoudre le nom de domaine (~10ms via DNS, Domain Name System)
                    * le temps de télécharger l'application (plus le poids de celle-ci est élevé, plus ce sera long)
                    * le temps de latence, c'est à dire le temps que la requête arrive au serveur hébergeant le site et le temps que celui-ci réponde (~150ms pour qu'une requête traverse l'atlantique)
                    * le nombre de requêtes nécessaires à la récupération de l'application (chacune d'entre elles à un coût d'établissement et une latence)

                    Pour diminuer ce temps, il est donc nécessaire de :

                    * diminuer la taille d'une application en minifiant ses sources (grâce à un outil)
                    * diminuer la latence en hébergeant l'application proche de la localisation de l'utilisateur
                    * diminuer le nombre de requêtes en regroupant les fichiers
                    * diminuer le nombre de requêtes en utilisant le cache réseau et le cache navigateur
                `
            },
            {
                title: "Les caches",
                course: true,
                description: `
                    Losqu'une ressource est accédé par un navigateur, celui-ci va d'abord vérifier s'il n'en dispose pas déjà d'une copie en cache. En effet, lorsqu'un serveur communique un fichier à un navigateur, il indique sa durée de vie (via le header \`Expires\` et une date d'expiration dans le futur). L'onglet Network du navigateur indique quelles ressources ont été récupérées sur le serveur et quelles autres étaient déjà en cache (statut 304), et jusqu'à quand.

                    Il est courant de mettre en cache tous les scripts, toutes les images et tous les styles. Ainsi, un utilisateur utilisant pour la seconde fois une application n'aura presqu'aucune donnée à télécharger avant que la page ne s'affiche.

                    Les différents équipements sur lesquels véhiculent ces données stockent également une copie en cache si elle est indiquée comme telle — profitant ainsi aux proches sur le réseau.
                    Les caches peuvent poser un problème si l'on souhaite remplacer la version d'une application qui a été sauvegardée sur le navigateur de l'utilisateur. Il n'est décemment pas possible de lui demander de vider son cache manuellement. Pour ce faire, les fichiers sont souvent suffixés par une date (app.20160110.js par exemple), ainsi, si une nouvelle version est livrée, il suffit de lui donner une date différente pour que le navigateur de l'utilisateur détecte qu'il ne l'a pas en cache et récupère une copie fraîche.

                    Les CDN (Content Delivery Network) sont des machines réparties sur le territoire dupliquant les mêmes fichiers pour les servir le plus rapidement possible aux navigateurs. Il est possible d'en louer pour ses propres usages ([Akamai](https://www.akamai.com/) ou [CloudFront](http://aws.amazon.com/cloudfront), par exemple). Les librairies populaires sont quant à elles disponible sur [cdnjs](https://cdnjs.com/).
                `
            },
            {
                title: "Le local storage",
                course: true,
                description: `
                    Depuis peu, les navigateurs embarque une base de données simplifiée pour conserver des données entre deux pages du même site ou entre plusieurs sessions du même utilisateur (une session s'achève quand la page est fermée).

                    **Sauvegarde et accès au local storage :**

                        localStorage.setItem('beatles', ['Paul', 'John', 'George', 'Ringo']);
                        localStorage.getItem('submarine');
                        → 'Paul,John,George,Ringo'

                    Les données y sont stockées sous la forme clé valeur. Clé et valeur sous la forme de chaînes de caractères (un object devra donc être \`stringify\` avant d'y être stocké).

                    Une documentation détaillée est disponible sur le [local storage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage) pour plus de détails.
                `
            }
        ]
    }, {
        title: "Les modules",
        description: "Les applications JavaScript font souvent des dixaines de millier de lignes. Il est donc nécessaire de les découper en flusieurs fichiers ou modules.<br><br>Ce chapitre présente les modules et les différents outils associés.",
        color: "grey",
        steps: [
            {
                title: "La modularité",
                course: true,
                description: `
                    Il est impensable d'écrire une application complexe dans un seul fichier JavaScript. Au delà d'une centaine de ligne, un fichier devient difficile à lire et à maintenir. Il est donc nécessaire de découper une application en plusieurs parties, souvent nommées modules.

                    Une solution naïve consiste à importer chaque fichier ainsi créé dans la page HTML en respectant un ordre précis, puisque certains d'entre eux peuvent dépendre d'autres.

                    Une solution viable consiste à isoler chaque classe ou composant d'une application dans un fichier et de rendre cette classe ou composant accessibles aux autres via un registre. Le chapitre B aborde ce sujet plus en détails.
                `
            },
            {
                course: true,
                description: `
                    Découper une application en plusieurs composants facilite sa compréhension, sa maintenance, et ses tests. L'option standard de découpe est l'ajout de plusieurs balises \`<script>\` dans un fichier HTML, les unes à la suite des autres. Dans l'ordre d'exécution. La première créant des composants utilisable par les suivantes et ainsi de suite.

                    Cela présente trois défauts majeurs :

                    * pour partager une variable entre deux \`<script>\` il est nécessaire de l'ajouter dans le namespace global, c'est à dire d'en faire un attribut de \`window\`. En plus de créer rapidement un sac de noeud (nommer de façon unique chaque variable est sujet à erreur), cela contraint à partager tous les composants les uns avec les autres, alors que certains d'entre eux ne devraient être accessibles qu'à un ou deux autres.
                    * l'ordre d'ajout est important, chaque composant doit être ajouté dans le fichier HTML avant ceux qui l'utilise et en cas de changement, il faut réordonner le tout.
                    * pour livrer ces composants, il sera nécessaire de rassembler tous les composants dans un fichier minifié, une manipulation manuelle.

                    Des gestionnaires de modules sont apparus pour faciliter cette tâche. Ils proposent de répartir un module par fichier puis offrent la possibilité de charger un module dans d'autres. Ils proposent enfin de créer un livrable minifié automatiquement. Le doyen d'entre eux se nomme [require](http://requirejs.org/), et ses camarades sont [browserify](http://browserify.org/), [webpack](https://webpack.js.org/) et [system](https://github.com/systemjs/systemjs). Le plus prometteur d'entre eux, étant [l'intégration au langage des modules](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/import).

                    En effet, le langage intégrera bientôt cette possibilité — une demande forte des développeurs — et remplacera les gestionnaires de modules à terme. En attendant que ce soit le cas, ces outils utilisent la future syntaxe afin de permettre, quand tous les navigateurs l'auront intégré, de ne pas avoir à modifier le code (ou très peu) d'une application ainsi découpée en composants.

                    **Export et import de modules :**

                        // saved in numbers.js
                        module.exports = {
                          isOdd: function(value) {
                            return value % 2 === 0;
                          },
                          isEven: function(value) {
                            return value % 2 === 1;
                          }
                        }

                        // saved in another file, in the same folder
                        var numbers = require('./numbers.js');

                        number.isOdd(17);
                        → true
                        number.isEven(17);
                        → false
                `
            },
            {
                course: true,
                description: `
                    Il existe deux formats principaux de définition de modules, [AMD](https://webpack.github.io/docs/amd.html) et [CommonJS](https://webpack.js.org/api/module-methods/#commonjs). Le second (celui illustré ci-dessus) a été retenu dans Node.js puis par la norme ECMAScript 6, et tous les gestionnaires de modules permettent de l'utiliser.

                    L'usage de ces gestionnaires est relativement simple. Un fichier de configuration indique quel fichier est le point d'entrée de l'application et comment doit s'appeler le bundle, le fichier minifé, regroupant tous les composants.

                    **Configuration de webpack, fichier webpack.config.js :**

                        {
                            entry: "./app.js",
                            output: {
                                path: __dirname + "/dist",
                                filename: "bundle.js"
                            }
                        }

                    Ensuite, chaque composant isolé dans son propre fichier, peut accéder aux autres modules à l'aide de la méthode \`require('path')\` en indiquant le chemin relatif du fichier à accéder à partir de son propre chemin. Enfin, ce composant peut exposer des variables et des fonctions aux autres en utilisant \`module.exports\` (comme une fonction utilise un \`return\`).

                    Ces gestionnaire offre des outils pour faciliter le développement (pour générer le bundle à chaque modification par exemple) puis permet de générer le livrable, un fichier minifié.
                `
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
                let description = chapterContent.description.replace(/(\(.*?\))/g, '<i>$1</i>');

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
                        <div class="description">${description}</div>
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
    let gpage = data.gpage;

    let leave = methods.leave;
    let jump = methods.jump;
    let completed = methods.completed;
    let nextChapter = methods.nextChapter;
    let nextStep = methods.nextStep;
    let resetChapter = methods.resetChapter;

    let chapterContent = chapters[chapter - 1];
    let stepContent = chapters[chapter - 1].steps[step - 1];

    return {
        render: function() {
            let excerptHidden = !stepContent.excerpt ? 'hidden' : '';
            let labelNext = !this.methods.isLast(step) ? 'Étape suivante' : (!this.methods.isLatest(chapter, step) ? `Chapitre ${chapter+1}` : 'Chapitres');
            let description = stepContent.course ? marked(dedent(stepContent.description)) : `<p>${stepContent.description}</p>`;
            let title = !stepContent.title ? '' : `<h3 class="header">${stepContent.title}</h3>`;

            description = description.replace(/(\(.*?\))/g, '<i>$1</i>');

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

                ${glossary(gpage)}

                <div class="ui stackable one column grid">
                    <div class="column">
                        <div class="ui fluid card h-colored h-${chapterContent.color}">
                            <div class="content">
                                <ul class="h-steps">${lis}</ul>
                                <button class="ui inverted basic right floated mini button" data-hook="reset">Réinitialiser</button>
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
                                        <span class="hidden error-content" data-hook="error"><i class="remove circle icon"></i><span data-hook="error-label"></span></span>
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

            this.methods.reset.call(this);
            this.methods.glossary.call(this);
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
                        .resolve(stepContent.solution())
                        .then(function(solution) {
                            complete = solution;
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
                        el.querySelector(`.h-steps li:nth-child(${step})`).classList.add('complete');
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

                stepContent.reload && stepContent.reload();

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
                        <p><pre><code class="hidden javascript">${stepContent.solved}</code></pre></p>`;

                    el.querySelector('[data-hook=divulge] .ribbon').addEventListener('click', function() {
                        this.parentNode.querySelector('code').classList.toggle('hidden');
                    });
                }
            },
            reset: function() {
                el.querySelector('[data-hook=reset]').addEventListener('click', function() {
                    if (this.classList.contains('red')) {
                        resetChapter(chapter);
                        jump(1);
                    } else {
                        this.classList.remove('inverted', 'basic');
                        this.classList.add('red');
                        this.innerHTML = 'Réinitialiser ce chapitre ?';

                        setTimeout(function() {
                            this.classList.add('inverted', 'basic');
                            this.classList.remove('red');
                            this.innerHTML = 'Réinitialiser';
                        }.bind(this), 3000);
                    }
                });
            },
            glossary: function() {
                let glossaryEl = el.querySelector('[data-hook="glossary"]');
                el.querySelector('[data-hook="toggle-glossary"]').addEventListener('click', function() {
                    this.classList.toggle('active');
                    glossaryEl.classList.toggle('hidden');
                });

                let tabs = el.querySelectorAll('[data-tab].item');
                let contents = el.querySelectorAll('[data-tab].description');
                for (let i = 0; i < tabs.length; i++) {
                    tabs[i].addEventListener('click', function() {
                        for (var j = 0; j < tabs.length; j++) {
                            contents[j].classList.add('hidden');
                            tabs[j].classList.remove('active');
                        }

                        contents[i].classList.remove('hidden');
                        tabs[i].classList.add('active');
                        localStorage.setItem('gpage', i + 1);
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
            this.data.step = Math.min(Math.max.apply(null, Object.keys(Object.assign({0: true}, this.data.completion[chapter]))) + 1, chapters[chapter - 1].steps.length);

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
        },
        resetChapter: function(chapter) {
            delete this.data.completion[chapter];
            localStorage.setItem('completion', JSON.stringify(this.data.completion));
        }
    }
}

if (localStorage.getItem('completion')) {
    app.data.completion = JSON.parse(localStorage.getItem('completion'));
}
if (localStorage.getItem('chapter') && localStorage.getItem('step')) {
    app.data.chapter = +localStorage.getItem('chapter');
    app.data.step = +localStorage.getItem('step');
    app.data.gpage = +localStorage.getItem('gpage');
    app.data.digest = false;
}

app.render();

})();
