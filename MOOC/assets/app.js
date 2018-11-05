'use strict';

// anonymous function wrapper to avoid let declaration collision in user code
(function() {

/*! highlight.js v9.12.0 */
!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs}))}(function(e){function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0===t.index}function a(e){return k.test(e)}function i(e){var n,t,r,i,o=e.className+" ";if(o+=e.parentNode?e.parentNode.className:"",t=B.exec(o))return w(t[1])?t[1]:"no-highlight";for(o=o.split(/\s+/),n=0,r=o.length;r>n;n++)if(i=o[n],a(i)||w(i))return i}function o(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function u(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3===i.nodeType?a+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function c(e,r,a){function i(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value).replace('"',"&quot;")+'"'}s+="<"+t(e)+E.map.call(e.attributes,r).join("")+">"}function u(e){s+="</"+t(e)+">"}function c(e){("start"===e.event?o:u)(e.node)}for(var l=0,s="",f=[];e.length||r.length;){var g=i();if(s+=n(a.substring(l,g[0].offset)),l=g[0].offset,g===e){f.reverse().forEach(u);do c(g.splice(0,1)[0]),g=i();while(g===e&&g.length&&g[0].offset===l);f.reverse().forEach(o)}else"start"===g[0].event?f.push(g[0].node):f.pop(),c(g.splice(0,1)[0])}return s+n(a.substr(l))}function l(e){return e.v&&!e.cached_variants&&(e.cached_variants=e.v.map(function(n){return o(e,{v:null},n)})),e.cached_variants||e.eW&&[o(e)]||[e]}function s(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var o={},u=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?u("keyword",a.k):x(a.k).forEach(function(e){u(e,a.k[e])}),a.k=o}a.lR=t(a.l||/\w+/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=t(a.i)),null==a.r&&(a.r=1),a.c||(a.c=[]),a.c=Array.prototype.concat.apply([],a.c.map(function(e){return l("self"===e?a:e)})),a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var c=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=c.length?t(c.join("|"),!0):{exec:function(){return null}}}}r(e)}function f(e,t,a,i){function o(e,n){var t,a;for(t=0,a=n.c.length;a>t;t++)if(r(n.c[t].bR,e))return n.c[t]}function u(e,n){if(r(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?u(e.parent,n):void 0}function c(e,n){return!a&&r(n.iR,e)}function l(e,n){var t=N.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,n,t,r){var a=r?"":I.classPrefix,i='<span class="'+a,o=t?"":C;return i+=e+'">',i+n+o}function h(){var e,t,r,a;if(!E.k)return n(k);for(a="",t=0,E.lR.lastIndex=0,r=E.lR.exec(k);r;)a+=n(k.substring(t,r.index)),e=l(E,r),e?(B+=e[1],a+=p(e[0],n(r[0]))):a+=n(r[0]),t=E.lR.lastIndex,r=E.lR.exec(k);return a+n(k.substr(t))}function d(){var e="string"==typeof E.sL;if(e&&!y[E.sL])return n(k);var t=e?f(E.sL,k,!0,x[E.sL]):g(k,E.sL.length?E.sL:void 0);return E.r>0&&(B+=t.r),e&&(x[E.sL]=t.top),p(t.language,t.value,!1,!0)}function b(){L+=null!=E.sL?d():h(),k=""}function v(e){L+=e.cN?p(e.cN,"",!0):"",E=Object.create(e,{parent:{value:E}})}function m(e,n){if(k+=e,null==n)return b(),0;var t=o(n,E);if(t)return t.skip?k+=n:(t.eB&&(k+=n),b(),t.rB||t.eB||(k=n)),v(t,n),t.rB?0:n.length;var r=u(E,n);if(r){var a=E;a.skip?k+=n:(a.rE||a.eE||(k+=n),b(),a.eE&&(k=n));do E.cN&&(L+=C),E.skip||(B+=E.r),E=E.parent;while(E!==r.parent);return r.starts&&v(r.starts,""),a.rE?0:n.length}if(c(n,E))throw new Error('Illegal lexeme "'+n+'" for mode "'+(E.cN||"<unnamed>")+'"');return k+=n,n.length||1}var N=w(e);if(!N)throw new Error('Unknown language: "'+e+'"');s(N);var R,E=i||N,x={},L="";for(R=E;R!==N;R=R.parent)R.cN&&(L=p(R.cN,"",!0)+L);var k="",B=0;try{for(var M,j,O=0;;){if(E.t.lastIndex=O,M=E.t.exec(t),!M)break;j=m(t.substring(O,M.index),M[0]),O=M.index+j}for(m(t.substr(O)),R=E;R.parent;R=R.parent)R.cN&&(L+=C);return{r:B,value:L,language:e,top:E}}catch(T){if(T.message&&-1!==T.message.indexOf("Illegal"))return{r:0,value:n(t)};throw T}}function g(e,t){t=t||I.languages||x(y);var r={r:0,value:n(e)},a=r;return t.filter(w).forEach(function(n){var t=f(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}),a.language&&(r.second_best=a),r}function p(e){return I.tabReplace||I.useBR?e.replace(M,function(e,n){return I.useBR&&"\n"===e?"<br>":I.tabReplace?n.replace(/\t/g,I.tabReplace):""}):e}function h(e,n,t){var r=n?L[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function d(e){var n,t,r,o,l,s=i(e);a(s)||(I.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,l=n.textContent,r=s?f(s,l,!0):g(l),t=u(n),t.length&&(o=document.createElementNS("http://www.w3.org/1999/xhtml","div"),o.innerHTML=r.value,r.value=c(t,u(o),l)),r.value=p(r.value),e.innerHTML=r.value,e.className=h(e.className,s,r.language),e.result={language:r.language,re:r.r},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.r}))}function b(e){I=o(I,e)}function v(){if(!v.called){v.called=!0;var e=document.querySelectorAll("pre code");E.forEach.call(e,d)}}function m(){addEventListener("DOMContentLoaded",v,!1),addEventListener("load",v,!1)}function N(n,t){var r=y[n]=t(e);r.aliases&&r.aliases.forEach(function(e){L[e]=n})}function R(){return x(y)}function w(e){return e=(e||"").toLowerCase(),y[e]||y[L[e]]}var E=[],x=Object.keys,y={},L={},k=/^(no-?highlight|plain|text)$/i,B=/\blang(?:uage)?-([\w-]+)\b/i,M=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,C="</span>",I={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=f,e.highlightAuto=g,e.fixMarkup=p,e.highlightBlock=d,e.configure=b,e.initHighlighting=v,e.initHighlightingOnLoad=m,e.registerLanguage=N,e.listLanguages=R,e.getLanguage=w,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=function(n,t,r){var a=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e});hljs.registerLanguage("css",function(e){var c="[a-zA-Z-][a-zA-Z0-9_-]*",t={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:c,r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,t]}]}});hljs.registerLanguage("http",function(e){var t="HTTP/[0-9\\.]+";return{aliases:["https"],i:"\\S",c:[{b:"^"+t,e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{b:"^[A-Z]+ (.*?) "+t+"$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0},{b:t},{cN:"keyword",b:"[A-Z]+"}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{e:"$",r:0}},{b:"\\n\\n",starts:{sL:[],eW:!0}}]}});hljs.registerLanguage("javascript",function(e){var r="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},n={cN:"subst",b:"\\$\\{",e:"\\}",k:t,c:[]},c={cN:"string",b:"`",e:"`",c:[e.BE,n]};n.c=[e.ASM,e.QSM,c,a,e.RM];var s=n.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:t,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,c,e.CLCM,e.CBCM,a,{b:/[{,]\s*/,r:0,c:[{b:r+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:r,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+r+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:r},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:s}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:r}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:s}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}});hljs.registerLanguage("xml",function(s){var e="[A-Za-z0-9\\._:-]+",t={eW:!0,i:/</,r:0,c:[{cN:"attr",b:e,r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},s.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[t],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},t]}]}});hljs.registerLanguage("json",function(e){var i={literal:"true false null"},n=[e.QSM,e.CNM],r={e:",",eW:!0,eE:!0,c:n,k:i},t={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(r,{b:/:/})],i:"\\S"},c={b:"\\[",e:"\\]",c:[e.inherit(r)],i:"\\S"};return n.splice(n.length,0,t,c),{c:n,k:i,i:"\\S"}});

/*! marked.js 0.5.0 */
!function(e){"use strict";var k={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:g,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,nptable:g,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:g,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,text:/^[^\n]+/};function a(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||d.defaults,this.rules=k.normal,this.options.pedantic?this.rules=k.pedantic:this.options.gfm&&(this.options.tables?this.rules=k.tables:this.rules=k.gfm)}k._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,k._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,k.def=t(k.def).replace("label",k._label).replace("title",k._title).getRegex(),k.bullet=/(?:[*+-]|\d+\.)/,k.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,k.item=t(k.item,"gm").replace(/bull/g,k.bullet).getRegex(),k.list=t(k.list).replace(/bull/g,k.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+k.def.source+")").getRegex(),k._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",k._comment=/<!--(?!-?>)[\s\S]*?-->/,k.html=t(k.html,"i").replace("comment",k._comment).replace("tag",k._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),k.paragraph=t(k.paragraph).replace("hr",k.hr).replace("heading",k.heading).replace("lheading",k.lheading).replace("tag",k._tag).getRegex(),k.blockquote=t(k.blockquote).replace("paragraph",k.paragraph).getRegex(),k.normal=f({},k),k.gfm=f({},k.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),k.gfm.paragraph=t(k.paragraph).replace("(?!","(?!"+k.gfm.fences.source.replace("\\1","\\2")+"|"+k.list.source.replace("\\1","\\3")+"|").getRegex(),k.tables=f({},k.gfm,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),k.pedantic=f({},k.normal,{html:t("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",k._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/}),a.rules=k,a.lex=function(e,t){return new a(t).lex(e)},a.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},a.prototype.token=function(e,t){var n,r,s,i,l,o,a,h,p,u,c,g,f,d,b,m;for(e=e.replace(/^ +$/gm,"");e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),1<s[0].length&&this.tokens.push({type:"space"})),s=this.rules.code.exec(e))e=e.substring(s[0].length),s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?s:y(s,"\n")});else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"code",lang:s[2],text:s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if(t&&(s=this.rules.nptable.exec(e))&&(o={type:"table",header:x(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===o.align.length){for(e=e.substring(s[0].length),c=0;c<o.align.length;c++)/^ *-+: *$/.test(o.align[c])?o.align[c]="right":/^ *:-+: *$/.test(o.align[c])?o.align[c]="center":/^ *:-+ *$/.test(o.align[c])?o.align[c]="left":o.align[c]=null;for(c=0;c<o.cells.length;c++)o.cells[c]=x(o.cells[c],o.header.length);this.tokens.push(o)}else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),a={type:"list_start",ordered:d=1<(i=s[2]).length,start:d?+i:"",loose:!1},this.tokens.push(a),n=!(h=[]),f=(s=s[0].match(this.rules.item)).length,c=0;c<f;c++)u=(o=s[c]).length,~(o=o.replace(/^ *([*+-]|\d+\.) +/,"")).indexOf("\n ")&&(u-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+u+"}","gm"),"")),this.options.smartLists&&c!==f-1&&(i===(l=k.bullet.exec(s[c+1])[0])||1<i.length&&1<l.length||(e=s.slice(c+1).join("\n")+e,c=f-1)),r=n||/\n\n(?!\s*$)/.test(o),c!==f-1&&(n="\n"===o.charAt(o.length-1),r||(r=n)),r&&(a.loose=!0),m=void 0,(b=/^\[[ xX]\] /.test(o))&&(m=" "!==o[1],o=o.replace(/^\[[ xX]\] +/,"")),p={type:"list_item_start",task:b,checked:m,loose:r},h.push(p),this.tokens.push(p),this.token(o,!1),this.tokens.push({type:"list_item_end"});if(a.loose)for(f=h.length,c=0;c<f;c++)h[c].loose=!0;this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:s[0]});else if(t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),g=s[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[g]||(this.tokens.links[g]={href:s[2],title:s[3]});else if(t&&(s=this.rules.table.exec(e))&&(o={type:"table",header:x(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/(?: *\| *)?\n$/,"").split("\n"):[]}).header.length===o.align.length){for(e=e.substring(s[0].length),c=0;c<o.align.length;c++)/^ *-+: *$/.test(o.align[c])?o.align[c]="right":/^ *:-+: *$/.test(o.align[c])?o.align[c]="center":/^ *:-+ *$/.test(o.align[c])?o.align[c]="left":o.align[c]=null;for(c=0;c<o.cells.length;c++)o.cells[c]=x(o.cells[c].replace(/^ *\| *| *\| *$/g,""),o.header.length);this.tokens.push(o)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2]?1:2,text:s[1]});else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var n={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:g,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:g,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};function h(e,t){if(this.options=t||d.defaults,this.links=e,this.rules=n.normal,this.renderer=this.options.renderer||new r,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=n.pedantic:this.options.gfm&&(this.options.breaks?this.rules=n.breaks:this.rules=n.gfm)}function r(e){this.options=e||d.defaults}function s(){}function p(e){this.tokens=[],this.token=null,this.options=e||d.defaults,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options}function u(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function c(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function t(n,e){return n=n.source||n,e=e||"",{replace:function(e,t){return t=(t=t.source||t).replace(/(^|[^\[])\^/g,"$1"),n=n.replace(e,t),this},getRegex:function(){return new RegExp(n,e)}}}function i(e,t){return l[" "+e]||(/^[^:]+:\/*[^/]*$/.test(e)?l[" "+e]=e+"/":l[" "+e]=y(e,"/",!0)),e=l[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+t:e+t}n._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,n._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,n._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,n.autolink=t(n.autolink).replace("scheme",n._scheme).replace("email",n._email).getRegex(),n._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,n.tag=t(n.tag).replace("comment",k._comment).replace("attribute",n._attribute).getRegex(),n._label=/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/,n._href=/\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f\\]*\)|[^\s\x00-\x1f()\\])*?)/,n._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,n.link=t(n.link).replace("label",n._label).replace("href",n._href).replace("title",n._title).getRegex(),n.reflink=t(n.reflink).replace("label",n._label).getRegex(),n.normal=f({},n),n.pedantic=f({},n.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:t(/^!?\[(label)\]\((.*?)\)/).replace("label",n._label).getRegex(),reflink:t(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",n._label).getRegex()}),n.gfm=f({},n.normal,{escape:t(n.escape).replace("])","~|])").getRegex(),url:t(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email",n._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:t(n.text).replace("]|","~]|").replace("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()}),n.breaks=f({},n.gfm,{br:t(n.br).replace("{2,}","*").getRegex(),text:t(n.gfm.text).replace("{2,}","*").getRegex()}),h.rules=n,h.output=function(e,t,n){return new h(t,n).output(e)},h.prototype.output=function(e){for(var t,n,r,s,i,l,o="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),o+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),r="@"===i[2]?"mailto:"+(n=u(this.mangle(i[1]))):n=u(i[1]),o+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):u(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,r=i[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))?(r=t[1],s=t[3]):s="":s=i[3]?i[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),o+=this.outputLink(i,{href:h.escapes(r),title:h.escapes(s)}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){o+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),o+=this.renderer.strong(this.output(i[4]||i[3]||i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),o+=this.renderer.em(this.output(i[6]||i[5]||i[4]||i[3]||i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),o+=this.renderer.codespan(u(i[2].trim(),!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),o+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),o+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),o+=this.renderer.text(u(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{for(;l=i[0],i[0]=this.rules._backpedal.exec(i[0])[0],l!==i[0];);e=e.substring(i[0].length),"@"===i[2]?r="mailto:"+(n=u(i[0])):(n=u(i[0]),r="www."===i[1]?"http://"+n:n),o+=this.renderer.link(r,null,n)}return o},h.escapes=function(e){return e?e.replace(h.rules._escapes,"$1"):e},h.prototype.outputLink=function(e,t){var n=t.href,r=t.title?u(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,u(e[1]))},h.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},h.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;s<r;s++)t=e.charCodeAt(s),.5<Math.random()&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},r.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+u(t,!0)+'">'+(n?e:u(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:u(e,!0))+"</code></pre>"},r.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},r.prototype.html=function(e){return e},r.prototype.heading=function(e,t,n){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},r.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},r.prototype.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},r.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},r.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},r.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},r.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},r.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},r.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},r.prototype.strong=function(e){return"<strong>"+e+"</strong>"},r.prototype.em=function(e){return"<em>"+e+"</em>"},r.prototype.codespan=function(e){return"<code>"+e+"</code>"},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(e){return"<del>"+e+"</del>"},r.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(c(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}this.options.baseUrl&&!o.test(e)&&(e=i(this.options.baseUrl,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch(e){return n}var s='<a href="'+u(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>"},r.prototype.image=function(e,t,n){this.options.baseUrl&&!o.test(e)&&(e=i(this.options.baseUrl,e));var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},r.prototype.text=function(e){return e},s.prototype.strong=s.prototype.em=s.prototype.codespan=s.prototype.del=s.prototype.text=function(e){return e},s.prototype.link=s.prototype.image=function(e,t,n){return""+n},s.prototype.br=function(){return""},p.parse=function(e,t){return new p(t).parse(e)},p.prototype.parse=function(e){this.inline=new h(e.links,this.options),this.inlineText=new h(e.links,f({},this.options,{renderer:new s})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},p.prototype.next=function(){return this.token=this.tokens.pop()},p.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},p.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},p.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,c(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s="",i="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});i+=this.renderer.tablerow(n)}return this.renderer.table(s,i);case"blockquote_start":for(i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":i="";for(var l=this.token.ordered,o=this.token.start;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,l,o);case"list_item_start":i="";var a=this.token.loose;for(this.token.task&&(i+=this.renderer.checkbox(this.token.checked));"list_item_end"!==this.next().type;)i+=a||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(i);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var l={},o=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function g(){}function f(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function x(e,t){var n=e.replace(/\|/g,function(e,t,n){for(var r=!1,s=t;0<=--s&&"\\"===n[s];)r=!r;return r?"|":" |"}).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function y(e,t,n){if(0===e.length)return"";for(var r=0;r<e.length;){var s=e.charAt(e.length-r-1);if(s!==t||n){if(s===t||!n)break;r++}else r++}return e.substr(0,e.length-r)}function d(e,n,r){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(r||"function"==typeof n){r||(r=n,n=null);var s,i,l=(n=f({},d.defaults,n||{})).highlight,t=0;try{s=a.lex(e,n)}catch(e){return r(e)}i=s.length;var o=function(t){if(t)return n.highlight=l,r(t);var e;try{e=p.parse(s,n)}catch(e){t=e}return n.highlight=l,t?r(t):r(null,e)};if(!l||l.length<3)return o();if(delete n.highlight,!i)return o();for(;t<s.length;t++)!function(n){"code"!==n.type?--i||o():l(n.text,n.lang,function(e,t){return e?o(e):null==t||t===n.text?--i||o():(n.text=t,n.escaped=!0,void(--i||o()))})}(s[t])}else try{return n&&(n=f({},d.defaults,n)),p.parse(a.lex(e,n),n)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(n||d.defaults).silent)return"<p>An error occurred:</p><pre>"+u(e.message+"",!0)+"</pre>";throw e}}g.exec=g,d.options=d.setOptions=function(e){return f(d.defaults,e),d},d.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new r,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tables:!0,xhtml:!1}},d.defaults=d.getDefaults(),d.Parser=p,d.parser=p.parse,d.Renderer=r,d.TextRenderer=s,d.Lexer=a,d.lexer=a.lex,d.InlineLexer=h,d.inlineLexer=h.output,d.parse=d,"undefined"!=typeof module&&"object"==typeof exports?module.exports=d:"function"==typeof define&&define.amd?define(function(){return d}):e.marked=d}(this||("undefined"!=typeof window?window:global));

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

// Global listeners

let listeners = {};
let originalEventListener = window.addEventListener;
window.addEventListener = function(type, fn, options) {
    if (!listeners[type])
        listeners[type] = [];
    listeners[type].push(fn);
    return originalEventListener(type, fn, options);
}
let removeEventListener = function(type) {
    if (!listeners[type] || !listeners[type].length)
        return;

    for (let i = 0; i < listeners[type].length; i++)
        window.removeEventListener(type, listeners[type][i]);
}

// DOM

let dom = {
    cartman: [
        {}, {cadmiumyellow: true}, {bondiblue: true}, {},
        {candyapplered: true}, {champagne: true}, {champagne: true}, {candyapplered: true},
        {candyapplered: true}, {candyapplered: true}, {candyapplered: true}, {candyapplered: true},
        {braken: true}, {candyapplered: true}, {candyapplered: true}, {braken: true}
    ],
    kenny: [
        {safetyorange: true}, {safetyorange: true}, {safetyorange: true}, {safetyorange: true},
        {safetyorange: true}, {braken: true}, {champagne: true}, {safetyorange: true},
        {safetyorange: true}, {safetyorange: true}, {safetyorange: true}, {safetyorange: true},
        {braken: true}, {braken: true}, {braken: true}, {braken: true},
    ],
    kyle: [
        {kellygreen: true}, {islamicgreen: true}, {islamicgreen: true}, {kellygreen: true},
        {kellygreen: true}, {champagne: true}, {champagne: true}, {kellygreen: true},
        {safetyorange: true}, {safetyorange: true}, {safetyorange: true}, {safetyorange: true},
        {}, {darkgreen: true}, {darkgreen: true}, {}
    ],
    
    board: function(squares) {
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
    },
    
    // Tooltip
    
    tooltip: function() {
        return `
            <div class="tooltips">
                <span class="ui label" data-tooltip="Le soleil se lève à l'est" data-position="right">Est</span>
                <span class="ui label" data-tooltip="Le soleil se couche à l'ouest" data-position="left">Ouest</span>
                <span class="ui label" data-tooltip="La banquise en Arctique" data-position="top">Nord</span>
                <span class="ui label" data-tooltip="Les volcans de l'Antarctique" data-position="bottom">Sud</span>
            </div>
        `;
    },
    
    // Carousel
    
    carousel: function(dots) {
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
    },
    
    // Sliding
    
    sliding: function() {
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
                <button class="ui grey button">Mélanger</button>
            </div>
        `;
    },
    
    // Maps
    
    maps: function(searchable) {
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
    },
    
    mapsWait: function() {
        return new Promise(function(resolve) {
            setTimeout(resolve, 3000);
            google.maps.event.addListenerOnce(map, 'idle', resolve);
        });
    },
    
    near: function(positionA, positionB) {
        if (!positionA || !positionB)
            return false;
    
        return 0.01 > +positionA.lat.toFixed(4) - +positionB.lat.toFixed(4)
            && 0.01 > +positionA.lng.toFixed(4) - +positionB.lng.toFixed(4)
            && -0.01 < +positionA.lat.toFixed(4) - +positionB.lat.toFixed(4)
            && -0.01 < +positionA.lng.toFixed(4) - +positionB.lng.toFixed(4);
    },
    
    // Booking
    
    booking: function() {
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
    },
    
    // Connect Four
    
    connectfour: function() {
        return `
            <div class="connectfour">
                <table>
                    ${('<tr>' + '<td></td>'.repeat(7) + '</tr>').repeat(6)}
                </table>
            </div>
        `;
    },

    // Hanoi

    hanoi: function() {
        return `
            <div class="hanoi">
                <ul class="tower-origin">
                    <li class="disk-1" data-weight="1"></li>
                    <li class="disk-2" data-weight="2"></li>
                    <li class="disk-3" data-weight="3"></li>
                    <li class="disk-4" data-weight="4"></li>
                    <li class="disk-5" data-weight="5"></li>
                    <li class="disk-6" data-weight="6"></li>
                </ul>
                <ul></ul>
                <ul class="tower-target"></ul>
            </div>
        `;
    },

    // Minesweeper

    minesweeper: function() {
        return `
            <div class="minesweeper">
                <table>
                    ${('<tr>' + '<td></td>'.repeat(10) + '</tr>').repeat(10)}
                </table>
                <button class="ui grey button">Recommencer</button>
            </div>
        `;
    },

    minesweeperMines: function() {
        let mines = [{x: 1, y: 1}];

        for (let i = 0; i < 10; i++)
            mines.push({x: helpers.random(1, 10), y: helpers.random(1, 10)});
        
        var set = {};
        return mines.filter(function(mine) {
            let key = `${mine.x}.${mine.y}`;
            return key in set ? false : set[key] = true;
        });
    },

    minesweeperGetCellNotBomb: function(mines) {
        let mine;
        do {
            mine = {x: helpers.random(1, 10), y: helpers.random(1, 10)};
        } while (helpers.contains(mines, mine));
        return mine;
    },

    minesweeperGetCellCount: function(mines, x, y) {
        var grid = {};
        for (let i = 0; i < mines.length; i++) {
            if (!grid[mines[i].x])
                grid[mines[i].x] = {};
            grid[mines[i].x][mines[i].y] = true;
        }

        var hasMine = function(mines, x, y) {
            return grid[x] && grid[x][y];
        }

        var count = 0;        
        if (hasMine(grid, x - 1, y - 1)) count++;
        if (hasMine(grid, x, y - 1)) count++;
        if (hasMine(grid, x + 1, y - 1)) count++;
        if (hasMine(grid, x - 1, y)) count++;
        if (hasMine(grid, x + 1, y)) count++;
        if (hasMine(grid, x - 1, y + 1)) count++;
        if (hasMine(grid, x, y + 1)) count++;
        if (hasMine(grid, x + 1, y + 1)) count++;
        return count;
    },

    minesweeperGetEdgedCell: function(mines) {
        let mine;
        do {
            mine = dom.minesweeperGetCellNotBomb(mines);
        } while (!dom.minesweeperGetCellCount(mines, mine.x, mine.y));
        return mine;
    },

    minesweeperGetCellEmpty: function(mines) {
        let mine;
        do {
            mine = dom.minesweeperGetCellNotBomb(mines);
        } while (dom.minesweeperGetCellCount(mines, mine.x, mine.y));
        return mine;
    },
    
    // Forms
    
    todolist: function() {
        return `
            <div class="todos">
                <div class="ui fluid input">
                    <input type="text" placeholder="Ajouter un todo...">
                </div>
                <ul class="ui list"></ul>
                <div class="ui tiny fluid buttons">
                    <button class="ui button filter-todo">0 à faire</button>
                    <button class="ui button filter-done">0 fait</button>
                </div>
            </div>
        `;
    },
    
    // Search
    
    searchbar: function() {
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
    },
    
    // Shop
    
    shop: function() {
        return `
            <div class="shop">
                <div class="ui menu">
                    <a href="#products" class="active item products">Produits</a>
                    <div class="right menu">
                        <a href="#cart" class="item cart">
                            Panier
                            <div class="ui teal label">
                                <span class="cart-quantity">0</span>
                                <div class="detail cart-price">0€</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="app-view"></div>
                
                <script id="product" type="text/template">
                    <div class="card">
                        <div class="image {{image}}"></div>
                        <div class="content">
                            <div class="meta">{{name}}</div>
                        </div>
                        <div class="extra content">
                            <span class="left floated">{{price}}€</span>
                            <span class="right floated">
                                <i class="minus icon"></i>
                                {{quantity}}
                                <i class="plus icon"></i>
                            </span>
                        </div>
                    </div>
                </script>
    
                <script id="cart" type="text/template">
                    <div class="ui middle aligned divided list">
                        {{#each .}}
                        <div class="item">
                            <div class="right floated content">
                                <div class="ui right labeled small input">
                                    <input type="number" placeholder="Quantité..." value="{{quantity}}" min="0" />
                                    <div class="ui basic label">
                                        unités
                                    </div>
                                </div>
                                <div class="ui label">
                                    {{price}}€
                                </div>
                            </div>
                            <div class="content">
                                {{name}}
                            </div>
                        </div>
                        {{/each}}
                        <div class="item">
                            <div class="right floated content">
                                <div class="ui teal label cart-price"></div>
                            </div>
                            <div class="content">
                                Total
                            </div>
                        </div>
                        <div class="item">
                            <div class="content">
                                <a href="#payment" class="ui fluid button">Passer à la caisse</a>
                            </div>
                        </div>    
                    </div>
                </script>
    
                <script id="payment" type="text/template">
                    <form class="checkout">
                        <div class="stripe"></div>
                        <button type="submit" class="ui fluid button">Payer <span class="cart-price"></span></button>
                    </form>
                </script>
            </div>
        `;
    },
    
    shopProducts: [
        {name: 'Manches longues', price: 15, image: 'longsleeve', quantity: 0},
        {name: 'T-shirt', price: 25, image: 'tshirt', quantity: 0},
        {name: 'Chemise', price: 40, image: 'shirt', quantity: 0}
    ]
};

let http = {
    wait: function() {
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
    },
    
    getParameterByName: function(url, name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    },

    hashWait: function() {
        return new Promise(function(resolve) {
            setTimeout(resolve, 0);
        });
    },
};

// Helpers

let helpers = {
    highlight: function() {
        let blocks = document.querySelectorAll('code');
        for (var i = 0; i < blocks.length; i++) {
            hljs.highlightBlock(blocks[i]);
        }
    },

    random: function(min, max) {
        return Math.floor(Math.random() * (max - min || 99)) + (min || 1);
    },
    
    randomize: function() {
        let array = [].slice.call(arguments);
        return array[Math.floor(Math.random() * array.length)];
    },
    
    equals: function(a, b) {
        return a && b && Object.keys(a).length === Object.keys(b).length
            && Object.keys(a).reduce(function(memo, key) { return memo && a[key] === b[key]; }, true)
            && Object.keys(b).reduce(function(memo, key) { return memo && a[key] === b[key]; }, true);
    },
    
    equalsContent: function(a, b) {
        return JSON.stringify(a.slice(0).sort()) === JSON.stringify(b.slice(0).sort());
    },

    contains: function(array, item) {
        return !!array.find(function(element) {
            return helpers.equals(element, item);
        });
    },
    
    basicWarn: function(actual, expected) {
        return "La variable <code>answer</code> vaut <code>" + JSON.stringify(actual) + "</code> et non la résultat attendu, <code>" + expected + "</code>";
    },
    
    deepClone: function(object) {
        return JSON.parse(JSON.stringify(object));
    },
    
    keypress: function(el, key) {
        helpers.keyevent(el, key, 'keypress');
        helpers.keyevent(el, key, 'keyup');
        helpers.keyevent(el, key, 'keydown');
    },
    
    keyevent: function(el, key, event) {
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
    },
    
    mouseevent: function(el, event) {
        if(el.fireEvent) {
            el.fireEvent('on' + event);
        } else  {
            let oEvent = document.createEvent('MouseEvent');
            oEvent.initEvent(event, true, false);
            el.dispatchEvent(oEvent);
        }
    },
    
    change: function(el, type) {
        var event = new Event(type || 'change');
        el.dispatchEvent(event);
    },
    
    elContains: function(el, value) {
        return !!(el && el.innerHTML.indexOf(value) !== -1);
    },

    elHasClass: function(el, clazz) {
        return !!(el && el.classList.contains(clazz));
    },
    
    getClassNames: function(selector) {
        var classNames = [];
        var els = document.querySelectorAll(selector);
        for (var i = 0; i < els.length; i++) {
            classNames.push(els[i].className);
        }
        return classNames;
    },

    chapterLabel: function(index, title, color) {
        return `<span data-hook="enter" data-chapter="${index}" class="ui small ${color} label clickable">${title}</span>`;
    }
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
                    * 2006 — Le préprocesseur SASS augmente les possibilités des CSS
                    * 2008 — Popularisation de l'architecture REST (Representational State Transfer)
                    * 2009 — Sortie du navigateur Google Chrome équipé de V8, axé sur les performances
                    * 2009 — Usage du moteur d'exécution V8 pour créer un serveur d'application, Node.js
                    * 2010 — Démocratisation des RIA (Rich Internet Application) JavaScript succédant à Flash
                    * 2010 — Communication full duplex entre clients et serveur avec Socket.IO
                    * 2012 — Démocratisation des outils de développement web (Require.js, Grunt, Bower)
                    * 2013 — Applications desktop natives en JavaScript avec Electron (Spotify, Slack, WhatsApp, Atom, VSCode)
                    * 2014 — Standardisation de HTML5
                    * 2014 — Fonctionnalités futures du langage disponibles dans les anciens navigateurs avec Babel et Webpack
                    * 2015 — Standardisation de ECMAScript 6, nommé ES6 ou ES2015 (classes, modules, promises, fat arrows, fetch, template string...)
                    * 2015 — Applications mobiles natives (Android, iOS) en JavaScript avec React Native
                    * 2016 — Standardisation de ES7 ou ES2016
                    * 2016 — Applications React rendues côté server puis côté client avec Next, pour améliorer leur référencement notamment (SSR)
                    * 2016 — Améliorations nettes du postionnement et du layout en CSS avec les flexbox
                    * 2017 — Standardisation de ES2017 (async/await)
                    * 2018 — Standardisation de ES2018 (rest/spread, async iteration...)
                    * 2018 — Sortie de Firefox Quantum, axé sur les performances et la confidentialité

                    À son apparition, JavaScript ajouta une pointe de vie aux sites internet. Il fût possible de naviguer au sein d'un carrousel d'images sans quitter la page ou de valider un formulaire avant de l'envoyer. L'arrivée de moteurs d'exécution performants, V8 en tête, changea la donne. D'un langage d'appoint, JavaScript allait devenir le langage du web.

                    Une grande majorité des sites internet a désormais recours à lui. Il joue de plus en plus un rôle de chef d'orchestre, gérant toutes les problématiques d'un site internet. Il permet également de construire des applications mobiles (Mozilla a même tenté de développer un système d'exploitation aux applications natives réalisées uniquement en JavaScript) des jeux vidéos et des applications de bureau (l'application de streaming musical Spotify et l'éditeur de code Atom, par exemple).
                `
            },
            {
                title: "Principe",
                course: true,
                description: `
                    L'usage classique de JavaScript se fait au sein d'une page HTML. Cette dernière est composé de deux parties, une en-tête — la balise [\`<head>\`](https://developer.mozilla.org/en/docs/Web/HTML/Element/head) — et un contenu — la balise [\`<body>\`](https://developer.mozilla.org/en/docs/Web/HTML/Element/body). Son entête peut contenir des liens vers d'autres ressources nécessaires à la page, comme des fichiers CSS et/ou JS. Son contenu correspond aux informations affichées sur la page.

                    À la saisie d'une adresse dans un navigateur web (ou au clic sur un résultat d'un moteur de recherche), celui-ci se connecte à un serveur et télécharge les données transmises par ce serveur — par exemple, un fichier HTML. Si ce fichier référence des ressources dans son entête (CSS, JS ou autres), elles sont téléchargées automatiquement.

                    Le CSS permet de mettre en forme le contenu d'un fichier HTML (couleurs, organisation, effets au survol, etc). Il est inséré à l'aide de la balise [\`<link>\`](https://developer.mozilla.org/en/docs/Web/HTML/Element/link).

                    Le JS permet de rendre dynamique le contenu d'un fichier HTML (action lors d'un clic, notification utilisateur lors d'une action, etc). Il est inséré à l'aide de la balise [\`<script>\`](https://developer.mozilla.org/en/docs/Web/HTML/Element/script)

                    <img class="schema" src="data:image/png;base64,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" />

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
            },
            {
                title: 'L\'inspecteur',
                course: true,
                description: `
                    Les navigateurs modernes sont des outils de développement — ils offrent des options avancées pour inspecter et intéragir avec le code des sites affichés. L'inspecteur se révèle à l'aide d'un clic droit sur la page en cours, puis « inspecter » ou « examiner ».

                    Parmi les onglets ainsi proposés, 4 sont principalement utilisés :
                    
                    * **elements**, affiche le HTML et le CSS de la page et permet de les modifier
                    * **console**, permet d'excuter du JS, afin d'effectuer des tests, entre autre
                    * **sources**, liste les fichiers utilisés par le site, et permet notamment d'ajouter des points d'arrêt au JS, des étapes ou le code s'interrompra et ou il sera possible d'observer l'état de l'application à ce moment précis puis de continuer ligne à ligne
                    * **network**, détaille les échanges effectués avec le(s) serveur(s)

                    <img class="schema" src="data:image/png;base64,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RCAGAVl4MagrThEQgSgEJHhRsCtSERCBGAT6OqTVsCxGEStOERABJyALz0noKAIi0HgCErzGF7EyKAIi4AQkeE5CRxEQgcYTkOA1voiVQREQAScgwXMSOoqACDSegASv8UWsDIqACDiBvr6WopUWjr36Ua/0VGemO0QgTUAWXpqIfouACDSWgASvsUWrjImACKQJ9HVIq2FZGr9+i4AI9JOALLx+0lZcIiACUQlI8KLiV+QiIAL9JCDB6ydtxSUCIhCVgAQvKn5FLgIi0E8CErx+0lZcIiACUQlI8KLiV+QiIAL9JNDX11K00qLzotUrPZ2z050i4ARk4TkJHUVABBpPQILX+CJWBkVABJxAX4e0GpY5dh1FQARiEJCFF4O64hQBEYhCQIIXBbsiFQERiEFAgheDuuIUARGIQkCCFwW7IhUBEYhBQIIXg7riFAERiEJAghcFuyIVARGIQaCvr6VopUXnRaxXejpnpztFwAnIwnMSOoqACDSegASv8UWsDIqACDiBvg5pNSxz7DqKgAjEICALLwZ1xSkCIhCFgAQvCnZFKgIiEIOABC8GdcUpAiIQhYAELwp2RSoCIhCDgAQvBnXFKQIiEIWABC8KdkUqAiIQg0BfX0vRSovOi1iv9HTOTneKgBOQheckdBQBEWg8AQle44tYGRQBEXACfR3Saljm2HUUARGIQUAWXgzqilMERCAKAQleFOyKVAREIAYBCV4M6opTBEQgCgEJXhTsilQERCAGAQleDOqKUwREIAoBCV4U7IpUBEQgBgEJXgzqilMERCAKAQleFOyKVAREIAYBCV4M6opTBEQgCgEJXhTsilQERCAGAQleDOqKUwREIAoBCV4U7IpUBEQgBgEJXgzqilMERCAKAQleFOyKVAREIAYBCV4M6opTBEQgCgEJXhTsilQERCAGAQleDOqKUwREIAoBCV4U7IpUBEQgBgEJXgzqilMERCAKAQleFOyKVAREIAYBCV4M6opTBEQgCgEJXhTsilQERCAGAQleDOqKUwREIAoBCV4U7IpUBEQgBgEJXgzqilMERCAKAQleFOyKVAREIAYBCV4M6opTBEQgCgEJXhTsilQERCAGAQleDOqKUwREIAoBCV4U7IpUBEQgBgEJXgzqilMERCAKAQleFOyKVAREIAYBCV4M6opTBEQgCgEJXhTsilQERCAGAQleDOqKUwREIAoBCV4U7IpUBEQgBgEJXgzqilMERCAKAQleFOyKVAREIAaBMelIJ0+enD6l3yIgAiLQCAKy8BpRjMqECIhAGQISvDKU5EcERKARBOYa0h5//PGNyJgyIQIiIAInnHDCEAiy8Ibg0A8REIEmE5DgNbl0lTcREIEhBCR4Q3DohwiIQJMJSPCaXLrKmwiIwBACErwhOPRDBESgyQQkeE0uXeVNBERgCIGeCd5DDz0U3nrrrSGR6Uc9Cags61luTUr1F198EaiH77///rCy1TPBu+yyy8Jzzz03rMT16+ZPP/00vPrqq/2Krnbx1Kksawe3Jgl+/vnnw6xZs6Kl9uOPPw7Uw+G2054JXjQyHUT82GOPhRtvvLGDO3WLCDSfAAbBGWecET7//PPaZ1aCN7sI33777doXpDIgAr0i0KT2MdfSsrLQnn322XDLLbeE119/PSy88MJh8803DzvssEMYPTpbQxl7T506NWAaf/XVV2GNNdYIe++9d1h00UUtyrPPPjtsttlm4YUXXghYXEsuuWSYOHFi+OCDD8L1118f3nnnnbDCCiuECRMmhOWWW66VzKJ0UFDnn39++M53vmNpZYg9ZsyYsO2224btt9/ewrjiiivCM888E77++utwzjnn2LnDDjssfPTRR+Haa6+19M4zzzyW3r322issssgirbi78cXzR77hsvLKK4c999wzLLPMMpam22+/PTz88MPh3XffDUsttVTYcsstw1ZbbdWKGm6cY76UOY4PP/wwrLnmmmG//fYLCy64oA1Dbr755vDggw8GemrYjRs3LowdO9bCIH7KhfiZJ4Hx7rvvHlZaaaVWHOkv7coy7b/bv4m/qGwoZ+rmG2+8ERZYYAEruz322MN4kJarrrrK8nrwwQe3kvb4449bPZs0aVKYd955A1yp0zC744477HjccccF6kK7Mps+fXp45JFHbL5p2WWXNZ7Ou13aWwnqwpcy9Z9oisrzvvvuC/fff7+l5oILLrD8b7fdduGBBx4I8803n7VRTyr17KmnngpHH310GDVqlJ1+8sknww033BB+8pOfWNtrVzZ53D2O5JF2AetvfetbQzQh6Sf9vSPBI1MICZXokEMOCZ988km45JJLrIHusssu6Tisspx22mnWmBGfJZZYItx0003hvPPOC0cddZSJJJXommuusca+xRZbhFtvvdXG7F9++aWJHPMH1113Xbj44osDlRLXLh2I2JtvvmlpJV077bSTFR4NfMUVVwyrr766iSx+8EtB4hDtyy+/3Ar32GOPtXOIMILUTccQ4R//+IeJGyK70EILhSeeeMIaKoJ39dVXh6efftryj9hRyag8iNpuu+1mSYHblVdeGbbeemsrC+Y44DRt2jQTPSrsvffeGw4//PCw9NJLm4AjbLjPPvvM4l9++eUD8fP7zjvvDP/85z+tXBC/tEMA2pVl+p5u/y4qG3hRrxD1/fff34ScTuPMM88MxxxzjJUtnZkz8LRRFu+9915rngqud911l12mXiB0fNqVGWJKp07bQOTokM8991zjSWdTlHZPS7eOZep/u/JcbbXVbAT00ksvmaGAwUA+VlllFauL++yzj3UQtM8ZM2ZYWyf/tC0cHS31jvvKlE0e9zSTRx991DquQw89tLTYEUa2OZYOPfWbxrTOOuuYRbfYYosFGsyuu+5qDSvl1X7ec8891piogFgwWITjx4+3hv3yyy+3btlggw0CYkd4O++8s01Q8hvoAMSyQZyYwMSVTQeFsvHGGxsYKiI9+MyZMy0MwkZo+GAZ8aF3ondEmLFA+WAVLr744nZPt/4gRIgMnQYCTPjEAwfip2fFCl533XVNFLH8Ntlkk3DbbbfZfZ6O9ddf3xo4FXHTTTcNa6+9dit/WH5YOVgaHAmLssNRLjRgekjEDcYIH/6wkLJc2bLMurdb54rKho50vfXWs86NhoaVxqiAkQhWVxWHMB5xxBFW7wgHV1RmsKZToi1QhljYG220kfF2K6ko7VXSVsVvUf1vV54wpO7gqB+0D0Y55A9jBEHHIXK0G85jHOC4zuiJc7iyZZPF3QL4/z9YjYzMqLdrrbVW8lLb75UtPKwchgok6tRTT21FQI+J5cF1esKk8ycr9LJJR6/AUI3eAudmMN8RGxxC5I5hLg6Lcv7552+bDr8vmR56GkSaMIocvboP9TbccEOzBH34XXRflWuvvPKKVaZkHv1+Z7bqqqv6KTtSwDQ6hJ/OA5eeRoCTPyFnmoBe9qSTTrKKhyA6b+JAJBG4pKNSU4GznKerXVlm3dutc3llg0VD3SSPSUd+6eRee+016zCS14q+M+3CsC3pisqM8HEMs7Aq3WG1eDnmpd399uJYVP87LU9EjzwhPnQwdCYIG8wYmey7774mhpQJnWyVssni7lwQTToWDBfCreoqCx6Ni8+OO+5oc0fJCBGsJFy/hshgwdBbph3XOnGdpKNKPFRMLCUKEsGgEv/gBz9oiUyVsPL8IvhJkU/64xouLWbunwpUxiFov/jFL6zXZRjAcBXredzsIR9heHjJsCjDvPB7UZbJuMt8zysbrNQspuQRjs60TBx5frLCd79el6nn6U7MyzEv7d55eVj9Og6nPBE4pp4wcpgDZXRAO8f4efHFF216hg4a4wQ/Weyqlg2dGcPru+++2zq2NOd23CoPaUkgQ04yBKzkJ0vsSAD+GVJg4ib9871T10k6qsaFOc/whHk8rDsKtZsOMcIiYR4l7WCGo3CTDsuNxuPDjOS1vO9UOIZkNEQeLPFwA0ccxJ+ez2IYkjV/5/d0uywtMRX/ZJUN9Y+5zzQzfjN14MzgwXxd0pUVw6Iy4xqO+NL13AWP61lp53wMN5y2yciHkRJTLOQXS5oywPKic8X68+Fs2bJpxwB2PGxiuuDCCy/M7ZjzwqkseASECJAhzHbm0xjeMhfA09Qsx9wbQC699FIzR5k3Yux/0UUXtebjsu5rd65qOvLCAyKNmEYw8//n9ui5MJ1xPMWiYF2E8sKpep4HDTQEJrKJAy5whCsNl8oCUzoXOHMesdpmm23mGobmxY1IU/FwdDjkyfPh8TMfQt4RP74zNcEDnizXq7LMiivvXFHZeJ1gAp0y4yEQD3EY5jP/iWMoxlwaUwNwhQ9PGMs4Z5ZVZkzD0LEQH50G5cnUA7+9DIrSXib+bvspU548MMPR2TKk9zl0H9byFBvxc8d3RkXkPznsLFM2HkbRES3BmqQu/+c//ynyOte1jkwszFSejvDEkA8OU5ZxdZZjHuTII4+0p7DM+2He8uCChotSd+qqpiMvHua5eOLLPBe9NJYQFsHpp59uQz6EgorOg49uOvLOMJmnrCeeeKL1jvSSvI6DO/DAA40vT/mwAvFPOrKehBeli7lIOhuGqYRPuDiGA5QLcy4nn3yyXUf8eaLrc07pcHtVlul48n5Td4rKhk7ioIMOsgda5IvGwZwQDcRHIIgSc5S82oIYcf2AAw5ovZaUFzfn25UZD+OmzX6ox1sLlBnx0+h5zadd2ovi7dW1MuVJnSEPGChYx1hYTPfg4E2HnGwbzAHDmocc+HdXpmzcb7sj8/BoEK+xMBrxh0rt7hs125S3ySL/b2VVt3in8mGlMClcxtHoqAhVx97twq6ajqzwsAjSAkxvxjmG0L109IY0juTQJxkfzNIPF5LX2333xkccWY5yoUGWLUfC6FVZZqUv61y7soEp+ckrO4byXMtjkhVn8ly7MqM+0eCzyrRd2pPx9Ot7u/KkjSGQeTyrpLNd2VQJq8ivb/E+ZcoU85Zd+4tCSF1LKnjqUuZPCr/bYkdEVdORlbi02OGnF2nNipuKVOSGI3aE2+5+yiWrYRalqVdlWRRn8lq7smnHtIq4J+P17+3Cz6pPfm+7tLu/fh7blWc32pjnpx0799ftY0dzeN1OhMITAREQgX4QkOD1g7LiEAERGAgCEryBKAYlQgREoB8EJHj9oKw4REAEBoKABG8gikGJEAER6AcBCV4/KCsOERCBgSAgwRuIYlAiREAE+kFAgtcPyopDBERgIAhI8AaiGJQIERCBfhConeCdddZZ/eDSuDjErXyRilV5Vlk+B5lf7QQvC7DOiYAIiEAZAhK8MpTkRwREoBEEJHiNKEZlQgREoAwBCV4ZSvIjAiLQCAISvEYUozIhAiJQhoAErwwl+REBEWgEAQleI4pRmRABEShDQIJXhpL8iIAINIKABK8RxahMiIAIlCEgwStDSX5EQAQaQUCC14hiVCZEQATKEJDglaEkPyIgAo0gIMFrRDEqEyIgAmUISPDKUJIfERCBRhCQ4DWiGJUJERCBMgQkeGUoyY8IiEAjCEjwGlGMyoQIiEAZAhK8MpTkRwREoBEEJHiNKEZlQgREoAwBCV4ZSvIjAiLQCAISvEYUozIhAiJQhoAErwwl+REBEWgEAQleI4pRmRABEShDQIJXhpL8iIAINIKABK8RxahMiIAIlCEgwStDSX5EQAQaQUCC14hiVCZEQATKEJDglaEkPyIgAo0gIMFrRDEqEyIgAmUISPDKUJIfERCBRhCQ4DWiGJUJERCBMgQkeGUoyY8IiEAjCEjwGlGMyoQIiEAZAhK8MpTkRwREoBEEJHiNKEZlQgREoAwBCV4ZSvIjAiLQCAK1E7zvf//7jQDf70yIW3niYlWeVZbPQeZXO8HLAqxzIiACIlCGgASvDCX5EQERaAQBCV4jilGZEAERKENAgleGkvyIgAg0goAErxHFqEyIgAiUISDBK0NJfkRABBpBQIIXsRg/+eSTcMEFF4T3338/Yiq+ifrLL79spWGQ0tVKVMaXF198MVx88cUZV+acIi+nnHLKnBM9+vbMM8+Ea665pkehNzfYv/71r+Hzzz/vWwa7IniD1EDq1HBnzZoVvvrqq8AxtjvttNNaSRikdLUSlfHls88+C++++27GlTmnyMubb74550SPvn399ddWlj0KvrHBUjaw65friuANUgOpU8NdaKGFwuGHHx4WX3zxfpV3ZjyUX9LKHJR0ZSZ2QE+us846Yf/99x/Q1ClZTmCMfxnO0RvIcMLoxr15DbcbYfcqjD/84Q/h5z//eZh//vnDueeeG2g4jzzyiFklm2++edhjjz3M5L/00kvDxx9/HEaNGhV22223sNRSS4UrrrgirL766uGpp54KH330Udhnn33CuuuuG7Byr7/++vD8889buOuvv37YfvvtLQsPP/xwuP3228M888wTFl544TBhwoRw5ZVXBqylM888M6yyyiph9913D8l0vfXWW+Haa68NH374ofXGu+yyS9h4441NJC+//HK75+mnnw5Y+gcccEAYO3Zsr3CFe++9N0yfPj0suuiiln6PqCjP+CHPTzzxhOUBphtuuGG44YYbwmKLLRa22WYbCwZmcN1qq63Co48+Gm699VbjNN9881lc3Af/yy67zKw5rPMll1wywBc/sD3kkEMsjXQgcHv11VetQ/v2t78daCd54RLOIDmG6OSferXIIosE0s+ROrrBBhuEBx98MLzzzjtW38aPH291oZP66HlmWJuu472oR10RPBKdbCBquF6M7Y9UKIQah6AxRDvyyCOtop144okB0fvf//5nDeqwww5rNTTEhfOIz84772ziduGFF4Zf/epXVlGpQD/96U8t3H//+98mSvPOO68J4THHHGOCQVxUYiyTP//5z+GHP/yh+eePp4u0nX/++WHcuHFW0d94441wxhlnhGWWWSYsuOCCFi8CzPX77rsvTJ06NRB+L9wrr7wSbrrppvDjH/84LL300iYsDzzwgEVF48zKMwJGHpZffvmwww47hJdffjmcffbZYe211w6ffvqpiZCnFdEnDPxfffXVxg9BZG4OQeJDo6bBb7vttsaf9CD+CBllgiOMZ599NhxxxBFhgQUWCOedd56x2XHHHXPD9TQMynHMmDGB+oZI0yHeeeedYc8997Q6Sh2grpDPv/3tb4HObtlll61cH+lc3dHJ02kk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" />

                    Ces outils changent légèrement d'un navigateur à l'autre, mais leur fonctionnement est similaire. Ils permettent également de simuler une taille d'écran restreinte, pour vérifier l'affichage correct d'un site sur tel modèle de téléphone mobile.
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

                    <img class="schema" src="data:image/png;base64,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" />

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
                    <img class="schema" src="data:image/png;base64,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" />

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
                    window.x = this.x = helpers.random();
                    window.y = this.y = helpers.random();
                },
                answer: function() {
                    return this.x + this.y;
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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
                    window.x = this.x = helpers.randomize('purple', 'sapphire', 'blue', 'red');
                    window.y = this.y = helpers.randomize('skate', 'rollers', 'submarine');
                },
                answer: function() {
                    return this.x + ' ' + this.y;
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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
                    window.x = this.x = helpers.randomize(13, 23, 33, 43, 53);
                    window.y = this.y = helpers.randomize(2, 4, 6, 8);
                },
                answer: function() {
                    return parseInt(this.x / this.y, 10);
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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

                    ### L'expression conditionnelle if

                    L'expression conditionnelle \`if\` effectue une opération si sa condition est vérifiée (égale à\`true\`). L'expression facultative \`else\` effectue une opération dans le cas inverse.

                    <img class="schema" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAACHCAYAAACiXU2qAAAYKWlDQ1BJQ0MgUHJvZmlsZQAAWIWVWQVYFVvX3jNzkjh0d5d0d3d3Kd3NoUMFBCQUBBQREBRURFQQJaXERLgIqKhYhIgoKgaCAvIPoN77fd8fz7+fZ2Ze1l577XfttWtxAOBg9Y6KCoNpAQiPiCXbGevxuri68eKnAQRgQAQ4QOHtGxOla2NjAdDy+/uv5ds4qo2W+5Kbtv6z/n8tdH7+Mb4AQDYo9vGL8Q1H8RUAMOy+UeRYALAjqFwgITZqE39FMSMZJQgAjrCJA7cx5yb22cYyWzoOdvooNgCAQOXtTQ4EgLRpnzfeNxC1Q4pC6+gj/IIjUNVMFGv5Bnn7AcB+A9XZER4euYkXUSzq8w87gf9i0+ePTW/vwD9425etQjAIjokK8076fw7H/13Cw+J+98GPPlRBZBO7TZ/RcTsbGmm+ialQ3BXhY2WNYnoU3wn229LfxBNBcSaOv/QXfGP00TEDzAANtp+3gTmK0bGEmeNCHXV/YTlv8lZbVB+2Co41dfiFfciRdr/sw/ERYVYWv+zkBPmb/sZV/jGG9r91AoKNTFGMzjT4SnKQg/M2T/hGfLCTFYpJKB6JCbU3/9X2RXKQvtVvHXKc3SZnQRR/DSAb2W3rIKzhMb/9QqR8vbf6YkWxTmyQg8l2W8TFP8bF4jcHP38Dw20OiJ9/hOMvbgg6u/TsfrXNjgqz+aWPVPmHGdttjzPSFBNv/7vtWCw6wbbHAZkO8Taz2eaPfIuKtXHY5obBAAugDwwAL4hDHx8QCUJA8PBC2wL613aNEfAGZBAI/IHkL8nvFs5bNRHo2x4kg/co8gcxf9rpbdX6g3hUvv5Huv2WBAFbtfFbLULBaxSHY9gxWhh1jAX61kEfOYwKRvV3O16a373iDHEGOBOcEU7sDw9flHUY+pBB8H8jM0e//qh3m1wifvvwtz3sa+wodhr7EDuJfQKcwKstK7+0PIMzyP/GnBdYgknUmtEv73xQm/O/dTDCKGtFjB5GE+WPcscwY9iBJEYB9UQXo436pohK/8kw7g+3v8fy3/vbZP1Pf37JSeIkxV8sfP5ERv+P1r9b0f/HGPmhX/N/10RykMvIbeQaMoB0IW2AF+lF2pEhpHsT/5kJr7Zmwu/e7La4haJ2gn/ryDTIzMus/Ufv3r8YkLfiDWL9E2M3F4R+ZFQSOTgwKJZXF92R/XlNI3yldvDKyciqALC5v29vH1/stvZtiPne37JIWQBUN/fjfX/LvD4A0BaCbmn0f8uE2wCgkQNg4KhvHDl+W4bZfGEBBaBBVwYb4AYCQBT1SQ4oAXWgAwyBGbAGDsAVeKCjHgTCUdYJIBWkg2yQDw6BI6AcVINacBZcAM2gDXSBa+AWGAQj4CF4is6NWfAOLIJvYBWCIDxEDTFAbBAPJARJQHKQCqQFGUIWkB3kCnlBgVAEFAelQvugfKgYKodOQvXQJagDugYNQKPQE2gKmoc+Qz9gBKaCGWEuWBiWhlVgXdgcdoB3wYFwNJwMZ8IFcBlcA5+HW+Fr8CD8EJ6E38FLCEAoEWaED5FEVBB9xBpxQwIQMrIHyUNKkRrkItKJxvo+MoksIN8xOAwDhhcjic5PE4wjxhcTjdmDOYApx5zFtGJuYO5jpjCLmJ9YaiwnVgKrhjXFumADsQnYbGwp9gy2BXsTXTuz2G84HI4ZJ4JTRtemKy4El4I7gDuOa8T14UZxM7glPB7PhpfAa+Kt8d74WHw2/hj+PL4XP4afxa8QKAk8BDmCEcGNEEHIIJQSzhF6CGOEOcIqkZYoRFQjWhP9iEnEQuIpYifxHnGWuEpBRyFCoUnhQBFCkU5RRnGR4ibFM4ovlJSU/JSqlLaUwZRplGWUTZR3KKcov1PRU4lT6VPtpIqjKqCqo+qjekL1hZqaWphah9qNOpa6gLqe+jr1C+oVEgNJimRK8iPtJVWQWkljpA80RBohGl0aD5pkmlKayzT3aBZoibTCtPq03rR7aCtoO2gf0S7RMdDJ0lnThdMdoDtHN0D3hh5PL0xvSO9Hn0lfS3+dfoYBYRBg0GfwZdjHcIrhJsMsI45RhNGUMYQxn/EC4zDjIhM9kwKTE1MiUwVTN9MkM8IszGzKHMZcyNzMPM78g4WLRZfFnyWX5SLLGMsyKwerDqs/ax5rI+tD1h9svGyGbKFsRWxtbM/ZMezi7LbsCexV7DfZFzgYOdQ5fDnyOJo5JjhhTnFOO84UzlrOIc4lLm4uY64ormNc17kWuJm5dbhDuA9z93DP8zDwaPEE8xzm6eV5y8vEq8sbxlvGe4N3kY+Tz4Qvju8k3zDfKr8IvyN/Bn8j/3MBCgEVgQCBwwL9AouCPIKWgqmCDYITQkQhFaEgoaNCt4WWhUWEnYX3C7cJvxFhFTEVSRZpEHkmSi2qLRotWiP6QAwnpiIWKnZcbEQcFlcUDxKvEL8nAUsoSQRLHJcY3YHdobojYkfNjkeSVJK6kvGSDZJTUsxSFlIZUm1SH6QFpd2ki6RvS/+UUZQJkzkl81SWXtZMNkO2U/aznLicr1yF3AN5ankj+b3y7fKfFCQU/BWqFB4rMihaKu5X7FdcV1JWIitdVJpXFlT2Uq5UfqTCqGKjckDljipWVU91r2qX6nc1JbVYtWa1j+qS6qHq59TfaIho+Guc0pjR5Nf01jypOanFq+WldUJrUptP21u7RntaR0DHT+eMzpyumG6I7nndD3oyemS9Fr1lfTX93fp9BoiBsUGewbAhvaGjYbnhCyN+o0CjBqNFY0XjFOM+E6yJuUmRySNTLlNf03rTRTNls91mN8ypzO3Ny82nLcQtyBadlrClmWWJ5TMrIasIqzZrYG1qXWL93EbEJtrmqi3O1sa2wva1naxdqt1tewZ7T/tz9t8c9BwKHZ46ijrGOfY70TjtdKp3WnY2cC52nnSRdtntMujK7hrs2u6Gd3NyO+O25G7ofsR9dqfizuyd47tEdiXuGvBg9wjz6Pak8fT2vOyF9XL2Oue15m3tXeO95GPqU+mz6Kvve9T3nZ+O32G/eX9N/2L/uQDNgOKAN4GagSWB80HaQaVBC8H6weXBn0JMQqpDlkOtQ+tCN8KcwxrDCeFe4R0R9BGhETciuSMTI0ejJKKyoyaj1aKPRC+SzclnYqCYXTHtsYzoVWcoTjQuK24qXiu+In4lwSnhciJdYkTiUJJ4Um7SXLJR8ukUTIpvSn8qX2p66tRu3d0n90B7fPb07xXYm7l3Ns047Ww6RXpo+l8ZMhnFGV/3Oe/rzOTKTMucyTLOasgmZZOzH+1X31+dg8kJzhnOlc89lvszzy/vbr5Mfmn+2gHfA3cPyh4sO7hREFAwXKhUWHUIdyji0HiRdtHZYrri5OKZEsuS1sO8h/MOfz3ieWSgVKG0+ijF0bijk2UWZe3HBI8dOrZWHlT+sEKvorGSszK3cvm43/GxKp2qi9Vc1fnVP04En3h80vhka41wTWktrja+9vUpp1O3T6ucrj/Dfib/zHpdRN3kWbuzN+qV6+vPcZ4rbIAb4hrmz+88P3LB4EL7RcmLJxuZG/ObQFNc09tLXpfGm82b+y+rXL54RehKZQtDS14r1JrUutgW1DbZ7to+2mHW0d+p3tlyVepqXRdfV0U3U3dhD0VPZs9Gb3LvUl9U38K1wGsz/Z79T6+7XH9ww/bG8E3zm3duGd26flv3du8dzTtdA2oDHXdV7rYNKg22DikOtfyl+FfLsNJw6z3le+0jqiOdoxqjPWPaY9fuG9y/9cD0weBDq4ej447jjx/tfDT52O/xmydhTz5NxE+sPk17hn2W95z2eekLzhc1L8VeNk4qTXZPGUwNTdtPP53xnXn3KubV2mzma+rXpXM8c/Vv5N50zRvNj7x1fzv7Lurd6kL2e7r3lR9EP1z5qPNxaNFlcfYT+dPG5wNf2L7UfVX42r9ks/TiW/i31eW8FbaVs99Vvt/+4fxjbjVhDb9Wti623vnT/OezjfCNjShvsvfWVQBBHzggAIDPdQBQuwLAgOZxFKTt/OtXQaDNtAMAPHpTMENvADOQOHpu98FscCw8gZgi1zHGmAfYcBwdrh+fStAi4onPKTooK6kKqetIz2hp6czpcxkGmOiYd7KcZ8Owe3N0c/FyH+BZ4fPjnxC0EhoQkRYtEHsnYbqjWvKbtL7MQdkReWoFPcUYpUrlPpVJ1XV1Fg0JTVUtQ207HV/dGL1M/aMGDYa9RveN5002zJjMd1joW7pbBVvH22TZFttV2zc4tKGrftB5zOWJ60u3Gfc3O9/veuPxzHPYq9e70afK96Bfsn9AgG2gepBgMCn4W8jL0Fth9eEHI6Ii7aOUo9mj18gvYvpia+Oy4gMSTBMlkiiS3iYPpTSllu3O3JOwNzqNnJ6ckbfvZGZ31sv9xByN3Ki82vzxgxQFGoXhh6qKhovXD+844l6ad7S1bLKcskKx0vN4blVz9dOTmBrJWqdTe0+fPTNat1LPe86iIfV884VPjWpNhZc+Xna/cq/Vuu1Bh0Zn7NX6rmc9lL3yfU7XovuzrhfdKL1Zeqvods6dfQP77x4cPDiU9VfssPM9qXurI32jKWNKY9/uP3rQ8bB8fPcjz8d6T4QmiBPvn44+a3le/mL3S69Jgymxadrp7zOvX43PDry+Nnf1Tcd8x9vT7woW4t97fDD8KLFIu7j0aeJzz5eTX7OWgr6ZL0uvMKwsf3/2o2+1Zi1z3f+nwQb/xgYafxxgR2+HieAmeqOzgA5BL2F59O71BfFExtFb03NsFI6Ea8P7E9gJE8RKikBKPSpNagdSEE0a7Qm6a/TzjExMBsxJLI2sH9mlOMicXdyUPE685/g2BHQF04V6hddElcVCxI9LDO74LMUkLS9jIusuFygfrZCkuFspWTlExV3VQk1TXUaDX5NJi6D1Q/u9zpTuQ727+j0Glw3rjMqMc0wSTIPMXM1NLFQsRayYrDHWX22mbUft+uybHKocc5xinD1cTF3l3bjcce4f0J2+26PWM88r0tvBR8GXynfar8O/MCAgUCOILuh18NWQolD/MLVwmvCZiLbInCjXaAl0XgzHnIglx+nHM8XPJXQkHkjySJZJgVMepTbuzt8TvtcxzSBdLUN1n2amSZZLdsT+/Tmnc6/nTeX/PMhZoFrodCim6FDx+ZKBw69L4aOcZUrHbMvDK/Irzx8fqfp2gv+kTc2+2o5Tn85I1UWfvVK/3KB6PvVCTyNo0r20r/nmFWyLcWtO2+0OfKfh1Yyu7u6vvcJ99tdS+quuX73x8Ob8reU7mAGGu3yD0kOaf1kMu90LGkkYzR47cr/mQePDrvGBR+OPZ598fYo8Y3wu9ELlpcVk4FTt9PwrkVm319lz597cnp96u7JAei/0Qfuj+2Lap5Ev8l9Llr4s261c+cG6mrW28jNhK/4YQAfEgRVIA33ovV4NioXaYBi2hE/Aq4gHchejgWnFqmD7cTa4GXwKgYNwm3iQwpdSg4qD6if1NGmQpoX2NF0ZfQFDDmMWUzZzPksJazVbA3s7RzdnN1cPdy9PD+9Vvhb+BoHjgvlCccI7RXRE+cWA2FPxNon8HU6SvJJvpVqk02TMZZllp+Qa5OMUtBWJiveVjisHqSiorKj2qGWpm2vQa0xo1miFaMtpr+nc0i3S26Uvrr9scN2w0MjdWMT4s0mPaZ6Zkzmf+TuLVss0KwtrZuspmwbbGDt1e9j+rkOxo5sTr9Oc80WXOFd1N9htwL1wp/0u5l1PPCo8d3lxeT33Pu6zy5fTd8KvzN8pgCHgXmB+kGEwQOdLfKhs6EJYXbhPBGfEo8iSKKtoQvQ1cnKMfMxC7Ok4j3iW+HsJ+xO1E1eSmpKDU3hTnqQe3u2wh23P7N72tMPpSRkB+3Zmuma5Z/vvj8vJyi3NO5PfeuDWwYcFs4Vfi5BihhL+wzJH1Er1j5qV2R5zLfepiKzce7yk6nz14ImPNUK1SadGzojU7Tk7fk6yIfP804uyjTlNL5qVLudfedkq37a//Vmn/NW8rukejd6yvm/9DtdbborcOnVHcuDmYOhfgsMLI7fHLj2oH296fG3i+XPwUmaq7lX2XN7btg80n3KWWFda1pw347/9f7jNglMC4PQMAE4nAbB1B6BOAgChCgBIjADYUAPgoApgvUIAPTkGIOOLf84PaiCCZtABYD+aOQ6AdxAJkoUcoWToONQFPYXW0PxOG/aBs+Fz8D34K8KB6CJByCGkA5nGUGIUMV5oRtaOeYWlx2pjI7AnsQ9xFDhdXCKuGbeAF8UH4uvw8wQpQhyhl0hJdCOep4AoXCiaKUmUEZRjVCpUJ6gJ1GTqFyQzUgeNKE05LTVtOu0yXSSar/jSv2TwYZhjDGf8xpTOTGI+ziLNcp3VnXWJrYhdlv0+RwInF+cI135uPR7Ac403i8+Sn43/jcBVwSKhEGEjESFRKtElsWnxMYkbOzolL0s1STfKNMu2y/XJDyq8UPykjFFhUhVQk1SX1ZDRFNfi1abXgXU+6j7V69WvMcgxjDRyMdYzkTblNqMxR8xXLBYt31rNWk/bTNm+sntn/8Vh3YnozOIi4qrqZunuuzNl1xGPJvQce+9D8pX3c/XfG1AbeDNoJng9lD6ML1w8QipSMkosmp/MHEOM+RE7H8+eYJmYmdSb/DPVcHfJnndplulX9ylkdmSb7p/J3Z/Pd+BigU7hZFFRicsRzaOmxxIqblZxnCDVwLXfT3+u+1C/0LBw4WPj0qX1K4RWjnbpToMu157gvvj+PTfSbu2+E383bMhrOH+kfeztQ75Hu55UP339QnYyffrhrMRczvzcgvGHc59ov6QsvV8J+DG3HrW1f9AAKWAL4kA56AWvIEpIDnKHMtGMfxD6iGb3arAXnAM3wU8QBM3ZXZEs5BLyEkON7iqhmArMX2j+LYv1w1aicafBWeBycXfwFHhLfDF+giBEIBP6iczEMOItCgGKDIpZSjPKTioJqmpqJuoDJBwpgwbQpNMitDl0JLqj9Pz0jQw6DA8Zw5lwTDXMuszTLNmskqzjbOnsMuyTHCWcJlwYrn7ufTxGvFS843w1/DECRoLcgitC48JtIidEj4oViRdIFOwoliyXOiPdInNH9oXcsgKTopqSr3KBSrfqR3UhDU/NCq2nOty6fnqN+quGhkb5xoOmWDNlcx+LbMszVtesJ2wW7TD2zA7ijjpOrs4xLoWuF92G3T/tYvbQ9AzwKvLu8fngJ+DvElAYeCtoPUQhNDisKnw0Eo6Si/YiF8RcjX0TT5OgnOiVlJ/cnjK3m2WP6d7dac3pb/cJZO7KKs9+nMOS65pXlf/qoGRBYuGtItbiyJKhIzKlFWWkY7kVVJVHqkSqb58MrqU61XzG7SymvqnB8wLtxetNic3Sl9+01LUFd0h2fu7q7Mnos+hnuT5zs+l26oDZINvQyLDjvZnR5PvcD4bH8x/bTwg/g55Pv7w11TBTOEues5/neFu9IPL+0ketxeHPnl8+LqUt06wc+8G9Wr3O/rNwK/4sQBdEgWpwD2ygsQ+AjkE3oS8wP2wHZ8Jt8ALCh7ig630Ag2C0MMmYNswSVhEbj+3GYXHWuArcW7w6/hD+DcGAcIpIIEYRn1FYUPRRKqOR1qMaonalfkvaQ8NE00RrTfuJrpRei36e4TijPRM1013mXBYLVnrWCbbT7GQOXU4Gzndct7hP8WTzhvI58OsKyAmKCPEIc4iwi/KKSYirSpjv8JZMlSqX7pZ5JUeS11AgK15U+qiiqJquNqYhqpmp9VrHQrdNX8LglBGfca2pmFmLhYHlY+soWyq7Jgd3dL12u8a7K+xc8ejzOujj4acUQBX4JLg81DRsPiIpci06ljwbaxN3OYEukZz0IEUt9eQeyr2JaXMZLvuGsvSyO3MUclvzNQ8MFLgWvivaU0J3uKZU+mjHMa3y3kqN463V2BMWJ4/UvDwlfjrhzM2zTPUB5zrPky74XexqYroU1Tx4RRTNfN6323a0XeXuyu7+0Ovcd61f4vqRGxu3Qm4/GNC52zDE/FfM8N0RjtGgsfP33z4UGHd+lPH47JO7E7NP157TvuB5KTGpOKU2rTWj80pnVuu12pzyG9l58bf870jv5hc63id8UPyw8PH0ousnik9dnwO+0H5p/7pzCSzVfNP7Nr28d4VzpeO74/fFHwdWRVb71zzWVtZLfkr/HNjw24x/TIC83NbxAVHpAYB9sbHxRRhNKooBWC/a2Fit2dhYr0WTjWcA9IVt/7azddbQAlBZ+z/9xvJfDYjPsSqQIjAAAAGdaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjE5OTwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMzU8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4Kxhc+OQAAErBJREFUeAHtnQl4FEXax/+BJIAQQgh3uJEslxECosutwYNdCKcgoFGRQ1AhIodkifhxKWCQuKIIyiZELhVZRD6OFQQCHhzhDEc4AgmEJJCE+ya9VbXMMBOm5+pKMjP91vPAdHe9VfXWr+rfVV2d7vZSWAAFIkAEHiJQ4qEjdIAIEAFBgMRBHYEIqBDwNj1+585dfBC7BIv+/SvOZeeaRtE2EfBIAtWrVMQr3TthSuRA+PiYyQFeptccEz5ZhBnzV3gkBKoUEbBGYPzQ3vhoTISZidm0KmHVZrNI2iECeiFgqe+biSMjK0cvLKieRMCMgKW+byYOM2vaIQI6J0Di0HkHoOqrEyBxqLOhGJ0TIHHovANQ9dUJkDjU2VCMzgmQOHTeAaj66gRIHOpsKEbnBEgcOu8AVH11AiQOdTYUo3MCJA6ddwCqvjoBEoc6G4rROQESh847AFVfnQCJQ50NxeicAIlD5x2Aqq9OgMShzoZidE6AxKHzDkDVVydg/tCsup3VmNB6wQipWR9xietU7Xy9vdGpUXO0qt8IJby8kHh0P7Yc2adqrxbBn/P9W8eWaNGkPj78bKmaGR13cQLvD+uN46cz8fOvO3Hz1m3N3rZ/oik6t3kclQLK45ff9mLlhj805yll5HjhsdZ469meVp35/NVITO87FPlKPkr7+iK4ei2r9pYi27ZsjGP/mYflc8aifq1qlkzomJsQqFmtEhbNisTJTfPxXLsWmrx+tE51bFk8Hc0a1kbqmSxkXbioKT9DYrMXLJQI7m447vBvKW8f3Lp7x2K69o1CsGLkZLSMHor0nGyLNrYOBgb4Yd9PsVi/bQ+iYhKkAbBVLsUXHoGKFfww6e2XMDC8I5qHR+JM5gWnChsZ0Q1jBvdA7Q5vOJXekCg/ZZVhU/xKGTl4TmrC4HGNq9dB1sVcp4XB84ifEYkM9rqgYdFfkDA4EA8IuRevYNTUBdh7OBVLPx2DEiWc647ncy/Bv9wj0olouubgU6luzf8qnDqefRZvx8eaOejDrjNqVAhEzcDKuHD1MupUqiriuZAymVjsDeFhrRHG5pMhXUfi7t179iYzswuqGoiZ415Dpyebgb+riIJ2AvzdZpv/PIhxM+NwVsPLOSLGfYpDa+ciosfTiPtxo8OOJR06AT8mjnq1qiI1Pcvh9GoJNIljY/JuHDuXjm6hbdE4qM5DZTSsGoQ1730MXzblKsnOCpuj5gibA2dSET476iF7tQNPP/UYdh04jmOnMtRMrB7nwti3OhZ8GKcgjwA/yfTv1gHPt2+Bx7uNclogGVlcZAfEicsZceTkXRGVqlLRX6o4nBvH7vM9kpGGDQd3ISUz3SLxQ2dPo97o/piz/gcknT4mtvm+I8LgGbdr2QQ79qdYLMOeg3zEIGHYQ8o5G86WM9YSduw/JtrZ0Tz4iS/6rX5IyziP/UdPOZrcqr0mcVjNWVKkF1v2DflLXRxMSXM6Rz6VolC4BLQyPphyGvVrV4Nf2TJ2Ozpj7KtIT1yI13uHISxiIm7c1L4kbFq4y4uDfyEhhU2n+HIdBc8lwNuXv1jtyrUbdldy2pffo9PAKGzYthfL2PK+t3dJu9PaY+jy4uCV2LbrEFqHNLSnPhZt+EUjBW0EsrOtL8FrZdw6JBjbk4445OTlq9exdWcyRk6dj5bNHhU3hh3KwIaxNHF4lyiJCmXLoXyZsjaKdDx62+5DePLxYFSrHOB4YpaCr6bwZUMKzhOIiYlRTczZcsbOBn+/suJiPHFXslNZ+N5/OzoXi8wgTRxNguoiZdZi7J4yX6Z/Iq/l/78New6ddHotnC8z8tWUpau30qcVJLYOX8rlTLWsVHF34meOYlOqXHzz/X+c8q5Vs4a4fuMWW80851R6tUTS7pCrFSDreJVAf+xaOZvNL/ewv6la5vTdVFn+6C2fsT0bYdZKx6Y9thhVrVQBE4b1wYBuHdGq12ix4mQrjaX4dyK6YtzgXqjVYZClaLuPFdodcrs9cNIwO+cSwodNwxOPNcSpzQvw8/xoJ3OiZK5A4NuY0UjfuhBd2B+R9hgxzWlh8Lqs3rSD3dgNwKaEqeArWFr/VsvAR9NNQEMmRfW79/BJMYR3bN0MoU0bFFWxVE4hEPh9zxHErdiITX8cQH5+vqYSTp3JFn+b9Wzb5uAzDFmrVm4zrdJEjxJrJlAY0yrNTknOwG2nVZI5UHZEwCYBaatVNksiAyLgZgRIHG7WYORu0REgcRQdayrJzQiQONyswcjdoiNA4ig61lSSmxEgcbhZg5G7RUegWG8C0qOr8hta1qOr8j1zvxyLTRz06GrhdBZZj64WjnfulWuxTavo0dXC7SgyHl0tXA9dP/diE4fWxypdH23xe0iMtbVBsYlDm9uUmggUPoFiE4fWxyoLH03RlXDo0KFCKYwYa8NabOKgR1cfNFx8fPyDHUlbWh9dleSGW2dTbOKgR1cLp9/IenS1cLxzr1yLbSmXY+ICGfie+oP77oXSeW/5sxJaXuLtfMmU0hqBYhs5rDlFcUTAFQiQOFyhFcgHlyRA4nDJZiGnXIEAicMVWoF8cEkCmi7Io4a/iKqBFZB5IQ/L1iRKff27S9Iip3RFQNPIcSItExfyLqPns09h06KpugJHlfV8AppGjuVstODhu7XbcHjdF2gWXId9KuC051OjGuqCgKaRw0CoAnsRMA+yvuJpyJd+iUBxEpAijpBGdXE2Mwf8w4UUiICnEJAijsrsW2z82oMCEfAkAlLEsW5rEpqyD6S/wr4GWs6Bz1Z5Ekiqi+cRkCKOpOQTeP39WPadhUhc3L1EfF3U81BRjfRGQNNqlQFWA/ahw88nDcOUucvxw7rtSEl17pPIhvzolwi4AgEp4ujzQltkns/DpNglrlAn8oEISCEgZVrFvwDq4y1FZ1IqRZkQARkEpIhj35FU8Q3pAP9yMnyiPIiASxCQIo6c+19qrVGloktUipwgAjIIaJoLDR/QBY0b1ELnNo+zL3lmIPlYmgyfKA8i4BIENImDX2dcunIN/0z4Gd+v3e4SFSIniIAsAprE8dmi1bL8oHyIgMsRkHLN4XK1IoeIgAQCJA4JECkLzyRA4vDMdqVaSSBA4pAAkbLwTAIkDs9sV6qVBAIkDgkQKQvPJEDi8Mx2pVpJIEDikACRsvBMAiQOz2xXqpUEAiQOCRApC88kQOLwzHalWkkgQOKQAJGy8EwCJA7PbFeqlQQCJA4JECkLzyRA4vDMdqVaSSBA4pAAkbLwTAIkDs9sV6qVBAJm4qhRNVBClpQFEXA/Apb6vpk4Xuneyf1qRR4TAQkELPV9s2fIJ48aAEVRkLBqM/jH3ikQAU8nUJ29TiqCvQCd9/2CwYuJQSl4kPaLlsD48eMxY8aMoi3UwdLcwUcHq2TT3GxaZdOaDIiAjgiQOHTU2FRVxwiQOBzjRdY6IkDi0FFjU1UdI0DicIwXWeuIAIlDR41NVXWMAInDMV5krSMCJA4dNTZV1TECJA7HeJG1jgiQOHTU2FRVxwiQOBzjRdY6IkDi0FFjU1UdI0DicIwXWeuIAIlDR41NVXWMAInDMV5krSMC9DyHCzQ2f6TGy8vLBTxRd+HevXsoWbKkuoEHxpA4PLBRqUpyCNC0Sg5HysUDCZA4PLBRqUpyCOhaHHfu3MWZzAu4dy9fDs37udy8dRs5eVek5ukpmZ1Mz8TO/ceM1Uk/d8G4rbZhj41aWi3HdS2ObsOmYvT0hShRQtvF8E8bd5i1wWvjY9G4ywizY7TzPwJLVm/F2JlxYmfF+t9Qp+Mb+PWPA0Y8BVlasjEaF/KGbsWxdstu8Rqib2NGa1op4itNL440f3PIoD6dMXFE30JuOvfPvm1oY4wZ3BMtmtQXlbHEsqBNUdaaVqs00s7IykXN9q8jP2WVxpz0kXzqF9/hl9/2YfO30x6qsKuxdMuRIzU9Cz2GT0fVpyJQq8MgjJg0D1eu3RCwN2zbg74jZ2LZz4kI6ToS5Vu8hFfGfIrrN26J+NvsOuP9WfGo/8xQNqQPRr9RM3E+95Ixbe+3P8aazbvQ+IW3hA2P4C+4e/m92Qhq9zoCWg7AO5Pni1Hn9z1H0Jel56HjwCh0evkf4PnPXrgKL0XOEsf5f9b85fGNnh+BjazDhEVEi/zb9B2HY6cyeBQu5F0Wda3ZfhCCn30TH8QuEcdl/8d9DGfTTM603tNDMHbGv0RdeH2iYhLQIGwoAp8YiM6vRmPf4VRj8SOnzMeXS9Zi+KQvUaPta4Lp4p+2GOOTj6Whw4AJ8A/tj1Y9R2P3wePGuJTUs6L9Ll6+BjWWpjY8oS1/rLE0FmzvBhvK3CrcuHlLYY2nTPhkkcIufBV2cae07/++0nPEdFGPVb/8qfg26aVM/nyZcunKNeXUmSzl0bBhSvScxSL+rQ/nCXvWGcT+B+x4t6FTjGlZ5xf7v2zfqyQlnxDHv1+7TZm3dK3Cyz5w9JTi17yfsnxNonL79h2FzYkVr4bhSlrGeSX93HlhPyl2iRIWMVFs2/KXG3F/u7zxoXIyLVPJPJ+nsA6odL3v04hJXypMaAq7CacwgStbdxwU+cr8j3PkTEdP/0bU8dr1m8qS1VtEEe9M/kp5ss8YhS1cKFkXLipjPl6ocEbZORdF/MDRMQobORV2UhL+ffzVD0qZZn2U3ItXxD4TjDI46p9KRlaOkpN3WWEnEfGPJ2bCEez4cTWWpjY8jS1/rLHk6R0J/AzoVoF3xoqtBih3794z+r160w4BmZ3hFS4O3nim4aN5PyjNw0cpbHVKdMRPvl6p/Ln3qPi3PjFJ8WncUzQOT1u6aW+FjSSmyR/a/vuQycr4mXHieOLOZFG2qZGpOGz5y9PxBuViNIS4FRsVNkqJ3bf/7ysltPu7RqEabGT+rtzwu1IhtL9gYJovZ1yK8Vi3Ncl4mDPkJ4fP4leLY1wcw6LnGuOvXruhlAjurmzffVjhJxW+bRASN5oyd7lFcfA4SyxNxWGPP9ZY8jIcCWbvyrV3tClOOz7816xWif0pw4MZYeuQYOHSqbPZFl2rFOAHdtZDds4l8OVbvpzIpyuGMJZdFObffytqmdKlUCmgvCFK/N66fQcJ//5VTLf4FCD5eBoa1qlhZqO2Y8vfapUDHkpavtwj4GXyMPXdgWJaw6dcvB5T330Zff/W7qE0Wg5wbjWrBcLHx7w7nM3KATujo17NKsbsvb1LIrRpA6SeyTIeM90o+0hpscBx+84dnDqTjeB6Qahc0d/UxOltZ/wxZeloweY0HE1dDPa1a1TGufO5yM/PZ0uw/xMIm/4IT2pXrywEUNCt7UmHwdNVrxIA3vl7P98Gz/w1pKCZ6j6bsqFGlUDMnfQmalStaHY9oZrofoQtf22l9/cri7kfvonYiUOw4LsNGDA6Bs+1a4EK5cvaSmp3PPfxLFtY4Pd7TE86NdhLlrkY+H0G3sl54Nz5NUePzk/azJ+Lgk1tbdrZa6DVH3vLMdg9OP0ajrj4b5cOofD18cHMBSuFp/zCdfa/VokOwzsuD9du3MTWnclie33iHnHGf61XmDijDen3HKJmJxhFdCItEwuWbxC2av/xvPr9vZ0QBj977TW5IDWcFU+zsy8fnQoGe/wtmMZ0/7ekI+KGIu+kfFnTl53dS5fyMTXRvP1c2+YiTzblEXnxi955S9eJi9+IHs9gClthunz1OtiUCXy16R4TSN8utkevsDYhyLl4BXE/bhT5Hjh6WozAag7bYskZaPFHrVy14243cpQrWwZrv56EodFzMWP+CtGALzDBzJs83FjHUr4++DxhDfjKE5+ejBjQBcNeel7Ef/ReBNhFJRqylR9DR4t680VjWksb44f2Zqtas9CwbnUEsQ/8hIe1ZtOze8L0L/WD0J2dRfnqFj8D7/oxxiwLe/w1S1Bg54+9R9EvciYCK/gh79I1xM0YxTqybwErbbvcx5/mTcSgCZ8hNn41HilTCv27doAP64xz/vEGIqd9I1ah7rK/zK0bVAVr5keLE4WtUvn096spIxA59Wu8y/Jo16oJxg3pJT5xYSmtLZY8jRZ/LJVp7Zhb3+fgf6bh4+1tNhXgd1j5HercXYuFMHgDG6ZfpiDYhRkb8q/bPT3hS8H8jOnHOpKlwFZ4wOfb1oIlf63Zm8blXbqKAP9ypocKZVutHpzXjZu3hXAcLZin5aMRP2nZE9R8ME2rxR/TfKxtu93IYVoZW2dQa43Bn59wZN7Oz6bWgi1h8LS2/LWWf1EIg5evVg/OyxYDNf95WmttUTCdmg+mdlr8Mc3H2rbbXXNYqwyPa964Hht6B9syo3giYJOAW0+rbNaODIiABgIeN3JoYEFJiYAZARKHGQ7aIQIPCJA4HrCgLSJgRoDEYYaDdojAAwIkjgcsaIsImBH4L7xelbUhpLWWAAAAAElFTkSuQmCC" />

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
                excerpt: "Il est également possible d'écrire une condition qui vérifie lequel de deux nombres est le plus grand avec <code>if</code>. Ou, à la place d'utiliser <a target=\"_blank\" href=\"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math\"><code>Math</code></a>, celui-ci dispose de fonctionnalités pour identifier les maximum, minimum, sinus, etc.",
                solved: "var answer;<br>if (x > y) {<br>  answer = x;<br>} else {<br>  answer = y;<br>}<br><br>/* or, instead */<br><br>var answer = Math.max(x, y);",
                init: function() {
                    window.x = this.x = helpers.random();
                    window.y = this.y = helpers.random();
                },
                answer: function() {
                    return Math.max(this.x, this.y);
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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
                    window.x = this.x = helpers.randomize('purple', 'sapphire', 'blue', 'red');
                    window.y = this.y = helpers.randomize('skate', 'rollers', 'submarine');
                },
                answer: function() {
                    return this.x.length > this.y.length ? this.x : this.y;
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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
                    window.x = this.x = helpers.randomize(30, 40, 50);
                    window.y = this.y = helpers.randomize(50, 60, 70);
                },
                answer: function() {
                    return this.x + this.y > 100;
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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
                    window.x = this.x = helpers.randomize(5, 11, 14, 18);
                },
                answer: function() {
                    return this.x > 10 && this.x < 15;
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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
                    window.x = this.x = helpers.randomize(-18, -14, -11, -5, 5, 11, 14, 18);
                },
                answer: function() {
                    return this.x > 10 || this.x < -10;
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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

                    <img class="schema" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAACFCAYAAADfGf2AAAAYKWlDQ1BJQ0MgUHJvZmlsZQAAWIWVWQVYFVvX3jNzkjh0d5d0d3d3Kd3NoUMFBCQUBBQREBRURFQQJaXERLgIqKhYhIgoKgaCAvIPoN77fd8fz7+fZ2Ze1l577XfttWtxAOBg9Y6KCoNpAQiPiCXbGevxuri68eKnAQRgQAQ4QOHtGxOla2NjAdDy+/uv5ds4qo2W+5Kbtv6z/n8tdH7+Mb4AQDYo9vGL8Q1H8RUAMOy+UeRYALAjqFwgITZqE39FMSMZJQgAjrCJA7cx5yb22cYyWzoOdvooNgCAQOXtTQ4EgLRpnzfeNxC1Q4pC6+gj/IIjUNVMFGv5Bnn7AcB+A9XZER4euYkXUSzq8w87gf9i0+ePTW/vwD9425etQjAIjokK8076fw7H/13Cw+J+98GPPlRBZBO7TZ/RcTsbGmm+ialQ3BXhY2WNYnoU3wn229LfxBNBcSaOv/QXfGP00TEDzAANtp+3gTmK0bGEmeNCHXV/YTlv8lZbVB+2Co41dfiFfciRdr/sw/ERYVYWv+zkBPmb/sZV/jGG9r91AoKNTFGMzjT4SnKQg/M2T/hGfLCTFYpJKB6JCbU3/9X2RXKQvtVvHXKc3SZnQRR/DSAb2W3rIKzhMb/9QqR8vbf6YkWxTmyQg8l2W8TFP8bF4jcHP38Dw20OiJ9/hOMvbgg6u/TsfrXNjgqz+aWPVPmHGdttjzPSFBNv/7vtWCw6wbbHAZkO8Taz2eaPfIuKtXHY5obBAAugDwwAL4hDHx8QCUJA8PBC2wL613aNEfAGZBAI/IHkL8nvFs5bNRHo2x4kg/co8gcxf9rpbdX6g3hUvv5Huv2WBAFbtfFbLULBaxSHY9gxWhh1jAX61kEfOYwKRvV3O16a373iDHEGOBOcEU7sDw9flHUY+pBB8H8jM0e//qh3m1wifvvwtz3sa+wodhr7EDuJfQKcwKstK7+0PIMzyP/GnBdYgknUmtEv73xQm/O/dTDCKGtFjB5GE+WPcscwY9iBJEYB9UQXo436pohK/8kw7g+3v8fy3/vbZP1Pf37JSeIkxV8sfP5ERv+P1r9b0f/HGPmhX/N/10RykMvIbeQaMoB0IW2AF+lF2pEhpHsT/5kJr7Zmwu/e7La4haJ2gn/ryDTIzMus/Ufv3r8YkLfiDWL9E2M3F4R+ZFQSOTgwKJZXF92R/XlNI3yldvDKyciqALC5v29vH1/stvZtiPne37JIWQBUN/fjfX/LvD4A0BaCbmn0f8uE2wCgkQNg4KhvHDl+W4bZfGEBBaBBVwYb4AYCQBT1SQ4oAXWgAwyBGbAGDsAVeKCjHgTCUdYJIBWkg2yQDw6BI6AcVINacBZcAM2gDXSBa+AWGAQj4CF4is6NWfAOLIJvYBWCIDxEDTFAbBAPJARJQHKQCqQFGUIWkB3kCnlBgVAEFAelQvugfKgYKodOQvXQJagDugYNQKPQE2gKmoc+Qz9gBKaCGWEuWBiWhlVgXdgcdoB3wYFwNJwMZ8IFcBlcA5+HW+Fr8CD8EJ6E38FLCEAoEWaED5FEVBB9xBpxQwIQMrIHyUNKkRrkItKJxvo+MoksIN8xOAwDhhcjic5PE4wjxhcTjdmDOYApx5zFtGJuYO5jpjCLmJ9YaiwnVgKrhjXFumADsQnYbGwp9gy2BXsTXTuz2G84HI4ZJ4JTRtemKy4El4I7gDuOa8T14UZxM7glPB7PhpfAa+Kt8d74WHw2/hj+PL4XP4afxa8QKAk8BDmCEcGNEEHIIJQSzhF6CGOEOcIqkZYoRFQjWhP9iEnEQuIpYifxHnGWuEpBRyFCoUnhQBFCkU5RRnGR4ibFM4ovlJSU/JSqlLaUwZRplGWUTZR3KKcov1PRU4lT6VPtpIqjKqCqo+qjekL1hZqaWphah9qNOpa6gLqe+jr1C+oVEgNJimRK8iPtJVWQWkljpA80RBohGl0aD5pkmlKayzT3aBZoibTCtPq03rR7aCtoO2gf0S7RMdDJ0lnThdMdoDtHN0D3hh5PL0xvSO9Hn0lfS3+dfoYBYRBg0GfwZdjHcIrhJsMsI45RhNGUMYQxn/EC4zDjIhM9kwKTE1MiUwVTN9MkM8IszGzKHMZcyNzMPM78g4WLRZfFnyWX5SLLGMsyKwerDqs/ax5rI+tD1h9svGyGbKFsRWxtbM/ZMezi7LbsCexV7DfZFzgYOdQ5fDnyOJo5JjhhTnFOO84UzlrOIc4lLm4uY64ormNc17kWuJm5dbhDuA9z93DP8zDwaPEE8xzm6eV5y8vEq8sbxlvGe4N3kY+Tz4Qvju8k3zDfKr8IvyN/Bn8j/3MBCgEVgQCBwwL9AouCPIKWgqmCDYITQkQhFaEgoaNCt4WWhUWEnYX3C7cJvxFhFTEVSRZpEHkmSi2qLRotWiP6QAwnpiIWKnZcbEQcFlcUDxKvEL8nAUsoSQRLHJcY3YHdobojYkfNjkeSVJK6kvGSDZJTUsxSFlIZUm1SH6QFpd2ki6RvS/+UUZQJkzkl81SWXtZMNkO2U/aznLicr1yF3AN5ankj+b3y7fKfFCQU/BWqFB4rMihaKu5X7FdcV1JWIitdVJpXFlT2Uq5UfqTCqGKjckDljipWVU91r2qX6nc1JbVYtWa1j+qS6qHq59TfaIho+Guc0pjR5Nf01jypOanFq+WldUJrUptP21u7RntaR0DHT+eMzpyumG6I7nndD3oyemS9Fr1lfTX93fp9BoiBsUGewbAhvaGjYbnhCyN+o0CjBqNFY0XjFOM+E6yJuUmRySNTLlNf03rTRTNls91mN8ypzO3Ny82nLcQtyBadlrClmWWJ5TMrIasIqzZrYG1qXWL93EbEJtrmqi3O1sa2wva1naxdqt1tewZ7T/tz9t8c9BwKHZ46ijrGOfY70TjtdKp3WnY2cC52nnSRdtntMujK7hrs2u6Gd3NyO+O25G7ofsR9dqfizuyd47tEdiXuGvBg9wjz6Pak8fT2vOyF9XL2Oue15m3tXeO95GPqU+mz6Kvve9T3nZ+O32G/eX9N/2L/uQDNgOKAN4GagSWB80HaQaVBC8H6weXBn0JMQqpDlkOtQ+tCN8KcwxrDCeFe4R0R9BGhETciuSMTI0ejJKKyoyaj1aKPRC+SzclnYqCYXTHtsYzoVWcoTjQuK24qXiu+In4lwSnhciJdYkTiUJJ4Um7SXLJR8ukUTIpvSn8qX2p66tRu3d0n90B7fPb07xXYm7l3Ns047Ww6RXpo+l8ZMhnFGV/3Oe/rzOTKTMucyTLOasgmZZOzH+1X31+dg8kJzhnOlc89lvszzy/vbr5Mfmn+2gHfA3cPyh4sO7hREFAwXKhUWHUIdyji0HiRdtHZYrri5OKZEsuS1sO8h/MOfz3ieWSgVKG0+ijF0bijk2UWZe3HBI8dOrZWHlT+sEKvorGSszK3cvm43/GxKp2qi9Vc1fnVP04En3h80vhka41wTWktrja+9vUpp1O3T6ucrj/Dfib/zHpdRN3kWbuzN+qV6+vPcZ4rbIAb4hrmz+88P3LB4EL7RcmLJxuZG/ObQFNc09tLXpfGm82b+y+rXL54RehKZQtDS14r1JrUutgW1DbZ7to+2mHW0d+p3tlyVepqXRdfV0U3U3dhD0VPZs9Gb3LvUl9U38K1wGsz/Z79T6+7XH9ww/bG8E3zm3duGd26flv3du8dzTtdA2oDHXdV7rYNKg22DikOtfyl+FfLsNJw6z3le+0jqiOdoxqjPWPaY9fuG9y/9cD0weBDq4ej447jjx/tfDT52O/xmydhTz5NxE+sPk17hn2W95z2eekLzhc1L8VeNk4qTXZPGUwNTdtPP53xnXn3KubV2mzma+rXpXM8c/Vv5N50zRvNj7x1fzv7Lurd6kL2e7r3lR9EP1z5qPNxaNFlcfYT+dPG5wNf2L7UfVX42r9ks/TiW/i31eW8FbaVs99Vvt/+4fxjbjVhDb9Wti623vnT/OezjfCNjShvsvfWVQBBHzggAIDPdQBQuwLAgOZxFKTt/OtXQaDNtAMAPHpTMENvADOQOHpu98FscCw8gZgi1zHGmAfYcBwdrh+fStAi4onPKTooK6kKqetIz2hp6czpcxkGmOiYd7KcZ8Owe3N0c/FyH+BZ4fPjnxC0EhoQkRYtEHsnYbqjWvKbtL7MQdkReWoFPcUYpUrlPpVJ1XV1Fg0JTVUtQ207HV/dGL1M/aMGDYa9RveN5002zJjMd1joW7pbBVvH22TZFttV2zc4tKGrftB5zOWJ60u3Gfc3O9/veuPxzHPYq9e70afK96Bfsn9AgG2gepBgMCn4W8jL0Fth9eEHI6Ii7aOUo9mj18gvYvpia+Oy4gMSTBMlkiiS3iYPpTSllu3O3JOwNzqNnJ6ckbfvZGZ31sv9xByN3Ki82vzxgxQFGoXhh6qKhovXD+844l6ad7S1bLKcskKx0vN4blVz9dOTmBrJWqdTe0+fPTNat1LPe86iIfV884VPjWpNhZc+Xna/cq/Vuu1Bh0Zn7NX6rmc9lL3yfU7XovuzrhfdKL1Zeqvods6dfQP77x4cPDiU9VfssPM9qXurI32jKWNKY9/uP3rQ8bB8fPcjz8d6T4QmiBPvn44+a3le/mL3S69Jgymxadrp7zOvX43PDry+Nnf1Tcd8x9vT7woW4t97fDD8KLFIu7j0aeJzz5eTX7OWgr6ZL0uvMKwsf3/2o2+1Zi1z3f+nwQb/xgYafxxgR2+HieAmeqOzgA5BL2F59O71BfFExtFb03NsFI6Ea8P7E9gJE8RKikBKPSpNagdSEE0a7Qm6a/TzjExMBsxJLI2sH9mlOMicXdyUPE685/g2BHQF04V6hddElcVCxI9LDO74LMUkLS9jIusuFygfrZCkuFspWTlExV3VQk1TXUaDX5NJi6D1Q/u9zpTuQ727+j0Glw3rjMqMc0wSTIPMXM1NLFQsRayYrDHWX22mbUft+uybHKocc5xinD1cTF3l3bjcce4f0J2+26PWM88r0tvBR8GXynfar8O/MCAgUCOILuh18NWQolD/MLVwmvCZiLbInCjXaAl0XgzHnIglx+nHM8XPJXQkHkjySJZJgVMepTbuzt8TvtcxzSBdLUN1n2amSZZLdsT+/Tmnc6/nTeX/PMhZoFrodCim6FDx+ZKBw69L4aOcZUrHbMvDK/Irzx8fqfp2gv+kTc2+2o5Tn85I1UWfvVK/3KB6PvVCTyNo0r20r/nmFWyLcWtO2+0OfKfh1Yyu7u6vvcJ99tdS+quuX73x8Ob8reU7mAGGu3yD0kOaf1kMu90LGkkYzR47cr/mQePDrvGBR+OPZ598fYo8Y3wu9ELlpcVk4FTt9PwrkVm319lz597cnp96u7JAei/0Qfuj+2Lap5Ev8l9Llr4s261c+cG6mrW28jNhK/4YQAfEgRVIA33ovV4NioXaYBi2hE/Aq4gHchejgWnFqmD7cTa4GXwKgYNwm3iQwpdSg4qD6if1NGmQpoX2NF0ZfQFDDmMWUzZzPksJazVbA3s7RzdnN1cPdy9PD+9Vvhb+BoHjgvlCccI7RXRE+cWA2FPxNon8HU6SvJJvpVqk02TMZZllp+Qa5OMUtBWJiveVjisHqSiorKj2qGWpm2vQa0xo1miFaMtpr+nc0i3S26Uvrr9scN2w0MjdWMT4s0mPaZ6Zkzmf+TuLVss0KwtrZuspmwbbGDt1e9j+rkOxo5sTr9Oc80WXOFd1N9htwL1wp/0u5l1PPCo8d3lxeT33Pu6zy5fTd8KvzN8pgCHgXmB+kGEwQOdLfKhs6EJYXbhPBGfEo8iSKKtoQvQ1cnKMfMxC7Ok4j3iW+HsJ+xO1E1eSmpKDU3hTnqQe3u2wh23P7N72tMPpSRkB+3Zmuma5Z/vvj8vJyi3NO5PfeuDWwYcFs4Vfi5BihhL+wzJH1Er1j5qV2R5zLfepiKzce7yk6nz14ImPNUK1SadGzojU7Tk7fk6yIfP804uyjTlNL5qVLudfedkq37a//Vmn/NW8rukejd6yvm/9DtdbborcOnVHcuDmYOhfgsMLI7fHLj2oH296fG3i+XPwUmaq7lX2XN7btg80n3KWWFda1pw347/9f7jNglMC4PQMAE4nAbB1B6BOAgChCgBIjADYUAPgoApgvUIAPTkGIOOLf84PaiCCZtABYD+aOQ6AdxAJkoUcoWToONQFPYXW0PxOG/aBs+Fz8D34K8KB6CJByCGkA5nGUGIUMV5oRtaOeYWlx2pjI7AnsQ9xFDhdXCKuGbeAF8UH4uvw8wQpQhyhl0hJdCOep4AoXCiaKUmUEZRjVCpUJ6gJ1GTqFyQzUgeNKE05LTVtOu0yXSSar/jSv2TwYZhjDGf8xpTOTGI+ziLNcp3VnXWJrYhdlv0+RwInF+cI135uPR7Ac403i8+Sn43/jcBVwSKhEGEjESFRKtElsWnxMYkbOzolL0s1STfKNMu2y/XJDyq8UPykjFFhUhVQk1SX1ZDRFNfi1abXgXU+6j7V69WvMcgxjDRyMdYzkTblNqMxR8xXLBYt31rNWk/bTNm+sntn/8Vh3YnozOIi4qrqZunuuzNl1xGPJvQce+9D8pX3c/XfG1AbeDNoJng9lD6ML1w8QipSMkosmp/MHEOM+RE7H8+eYJmYmdSb/DPVcHfJnndplulX9ylkdmSb7p/J3Z/Pd+BigU7hZFFRicsRzaOmxxIqblZxnCDVwLXfT3+u+1C/0LBw4WPj0qX1K4RWjnbpToMu157gvvj+PTfSbu2+E383bMhrOH+kfeztQ75Hu55UP339QnYyffrhrMRczvzcgvGHc59ov6QsvV8J+DG3HrW1f9AAKWAL4kA56AWvIEpIDnKHMtGMfxD6iGb3arAXnAM3wU8QBM3ZXZEs5BLyEkON7iqhmArMX2j+LYv1w1aicafBWeBycXfwFHhLfDF+giBEIBP6iczEMOItCgGKDIpZSjPKTioJqmpqJuoDJBwpgwbQpNMitDl0JLqj9Pz0jQw6DA8Zw5lwTDXMuszTLNmskqzjbOnsMuyTHCWcJlwYrn7ufTxGvFS843w1/DECRoLcgitC48JtIidEj4oViRdIFOwoliyXOiPdInNH9oXcsgKTopqSr3KBSrfqR3UhDU/NCq2nOty6fnqN+quGhkb5xoOmWDNlcx+LbMszVtesJ2wW7TD2zA7ijjpOrs4xLoWuF92G3T/tYvbQ9AzwKvLu8fngJ+DvElAYeCtoPUQhNDisKnw0Eo6Si/YiF8RcjX0TT5OgnOiVlJ/cnjK3m2WP6d7dac3pb/cJZO7KKs9+nMOS65pXlf/qoGRBYuGtItbiyJKhIzKlFWWkY7kVVJVHqkSqb58MrqU61XzG7SymvqnB8wLtxetNic3Sl9+01LUFd0h2fu7q7Mnos+hnuT5zs+l26oDZINvQyLDjvZnR5PvcD4bH8x/bTwg/g55Pv7w11TBTOEues5/neFu9IPL+0ketxeHPnl8+LqUt06wc+8G9Wr3O/rNwK/4sQBdEgWpwD2ygsQ+AjkE3oS8wP2wHZ8Jt8ALCh7ig630Ag2C0MMmYNswSVhEbj+3GYXHWuArcW7w6/hD+DcGAcIpIIEYRn1FYUPRRKqOR1qMaonalfkvaQ8NE00RrTfuJrpRei36e4TijPRM1013mXBYLVnrWCbbT7GQOXU4Gzndct7hP8WTzhvI58OsKyAmKCPEIc4iwi/KKSYirSpjv8JZMlSqX7pZ5JUeS11AgK15U+qiiqJquNqYhqpmp9VrHQrdNX8LglBGfca2pmFmLhYHlY+soWyq7Jgd3dL12u8a7K+xc8ejzOujj4acUQBX4JLg81DRsPiIpci06ljwbaxN3OYEukZz0IEUt9eQeyr2JaXMZLvuGsvSyO3MUclvzNQ8MFLgWvivaU0J3uKZU+mjHMa3y3kqN463V2BMWJ4/UvDwlfjrhzM2zTPUB5zrPky74XexqYroU1Tx4RRTNfN6323a0XeXuyu7+0Ovcd61f4vqRGxu3Qm4/GNC52zDE/FfM8N0RjtGgsfP33z4UGHd+lPH47JO7E7NP157TvuB5KTGpOKU2rTWj80pnVuu12pzyG9l58bf870jv5hc63id8UPyw8PH0ousnik9dnwO+0H5p/7pzCSzVfNP7Nr28d4VzpeO74/fFHwdWRVb71zzWVtZLfkr/HNjw24x/TIC83NbxAVHpAYB9sbHxRRhNKooBWC/a2Fit2dhYr0WTjWcA9IVt/7azddbQAlBZ+z/9xvJfDYjPsSqQIjAAAAGdaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjIyMTwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMzM8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KiayC0gAAGJZJREFUeAHtnQd8FMUXx39A6CAlEHonSA09ICR0kF4FFBClI4ggXf40pUgRFUUEFKRIUxSVKipdREBAOkRCCyEJhN4D7H/e4C2XZC97t7uXnJc3n09ye1PevPnOvJk3s3d7KRQRwIEJMIFEI5Ay0WriipgAE5AEfGwcYmIeYezMZVj8wxZcirpqi+ZXJsAEDBLI45cdr7aqgwmDOiN1atXUkMLmXo6asQRT5q4yKJ6LMQEm4IjAiN7t8P7Qrmqy6l7SCseBCTAB6wks+XFrLKGq0YVHRsdK4DdMgAlYQyCubalGZ414lsIEmIAeATY6PUKczgQsJsBGZzFQFscE9Aiw0ekR4nQmYDEBNjqLgbI4JqBHgI1OjxCnMwGLCbDRWQyUxTEBPQJsdHqEOJ0JWEyAjc5ioCyOCegRYKPTI8TpTMBiAmx0FgNlcUxAjwAbnR4hTmcCFhNgo7MYKItjAnoE2Oj0CHE6E7CYABudxUBZHBPQI8BGp0eI05mAxQSePbjBYsG5s2ZHw7JVsGTnJl3JrwU3xtGwM9h35mSsvAEFi6G8+LOFZbt+xeMnT2xv3fJKz7JoWrsyKpYuivGfLHdLHSzU/QTaNKqOHNmew887DuB8+GXTFQZXLYMGNcpLmb/uOojVm3Yblum2la5knoKY0am/U4r1a9AaTcpXi5e3kG8uBJUoh1aVakpZ6VKniZfHyoialUsh5Jc5WPnxMBQtkNtK0SwrkQmkTJESo/t1kP05ZdhrpmovXigPti2djLL+BXEmLBKRV66bkue2lc4VrWpNGIAHj2LiFVlzYBfor0qR51GrZIV46VZG+GbLLI3t550HQA9pMgvWSt1YlusEvvt5F1b/shvtXnwBC6cOxPHTF7Do+82uCxIlmtaugrCIK2j35hRD5eMW8gij0zK4uIq6+/2iqYMQLh492GfMbDx69Njd1bH8RCDwRGxFvt3wO3yzZsassX2w++BJnAy96HLNl6/eQJZMGVwu56iAIaNrX60OyhUoirGrFiCX2Lst6jUSby/9DMfDz6Ft1WBkSZ8JZy5fknWmSJECI5q/gvaBdXDr/j0MX/E59pw+IdNWvjlO5M0orxds34Bv/jT2RLKg58uhb/1WqF5MuIcRFzF8+RwcDgt11OZ48S3rB6K+8NcDmr9l2ODy5fLFtOGvo061sqDnHXIwT4Cev7r1zyMYPm0hLpp4cNac5RvRol4gPnynB5r1es9lxfYfO43MwuiKFMiFMxciXS4ft4ChPd29Bw/kIQkJCxZ7rkpFSqBx+UApu1qx0nho5yrO6NQP1YuXwdjvF+DclQjM6z5U1eHz337Ehxu+QfbMzyF3FmMDNUAY/9d9R+PQ+dNo89EYhEaFY8WAcXBl/1e3ejnsO/wPQs6Gq7q5ckEG9/eamXilRS02OFfA6eSlyYuYEltibCYsW7MNwVVKI2VK14d89LVbsmq/7FnMqKCWdV0DUfRURBgK58gNn1SpQKvMlmMH0KBMZSnUP1d+mW6rgfK1nTkG6w7sxtzNa5A3W0489+/qtvX4QWw6sg837t6xZXf5dXzbbth75gSmrV0uV7fRq+bDN2NmdVJwRmBQ5dLYc+iUM1k189AKl124MBzcQ4DYEmMzYc+hEGTKmB7lSxZ2SQwZ+5j+HeUJ6KGTZ10q6yizIfcy9PLTFaGQMKgg/wAMWDITqwdOQDYx2IvnyieM7gIqFvKXdfaaPx3kW1O4ef+pcaXxMVStlGH/j2atSoVLyPo+7/a2mnQ/JgYFcvip7xO6IPc34PnCmL10Q0LZEkwjl5KDewmYZUxezMOHMfJW0IFjzm09popTz2G92uL2nXuo2GoQ7t1/aEkjDY3+R48f46zYs9UvXQkPYh7ij5CjOBcdheYVX0AqsfrZr1zRt2+qitqML4UaY+4iTSofpE2dWta/N/TpPpEk0qoaEhnmlHD60aJTokPoWJiD9xIokCcH0qRJjROhzo0LIjHp82+xbus+vNW1BVaI20gvdBhueM9vT9aQ0ZEAcjE7vlAXO0MOS3m/HNmLrkEvioMM5xtlr4iR6/vC4A9fCEXM40dYe/APIyJkmZ37jiEw4OnKbEQIbfZp78HBOQJRUVHw83POE7FJJMZmQmBACTwQKx3t3Z0NN2/fxfa9R/HP+UsI2/GVXCX3CjfVbDC0p6NKyejK5S+G3089hfHrkb/Ep0eKC6O7YEin9GnTImvGTEifxvEN8CwZMsk89u7pvC1r0LteC9QuWV7WSy5ng7KVUcO/jNN67PzrGKqVL4HcObM5XcY+I52uXb3+dLNtH8/X2gRmzJihneAgltgSYzOhdcNq2PP3KTwUv07lakjz7y/ukBFaEUwYHRmXIozu6Uq3K+QI7j64L43RiGJDmnTEqelLMaFdD4fFD06aL/O8HtxEzbNqzzZMFYco83oMxcnpS3Bi6mL0rttCnKA6D3fl+p0gP3/5R0MNnW7RcXb5FgOxfM12/pkxtWfMX9AtA2JKbM3cMujcsjZealwTQ6d+ZUipKmX9cffeA3G6/fQ2mCEhdoXUn8pKWaKVXfR/75IORIrmzCP2lpGgPaerwc83C/at/hCbxCdSxn+yQn4CwVUZnN85AsPalMT01c/24M6Vcj0XfY62baMX8OWkNzHgvXlY+P1vrgsRJQZ0bY7hPduiQK3uhspToSenflTLGl7pVAkeckEHIqfFPTojBkdNiIq+gZZ9JqFqOX+c3foF1s4b4yEtYzWMEHitbT1cFPswMrgJn600bHBU95rNe8T912zYvGQi6ESzUVBFIyqpZQwfpKgSvOji4PFQ6crUDiyLSmWefbvBi5qYbJpCn53t/+4cbN59CLab20YbfzYsChVaDkLDmhVAHpGPTyqjomQ5r3EvTVHgwolKILHcy0RtlE5lXule6rSZk5mAxxDwmj2dxxBlRZiADgE2Oh1AnMwErCbARmc1UZbHBHQIsNHpAOJkJmA1ATY6q4myPCagQ4CNTgcQJzMBqwkk2c1xfryB1V0J+blPKx5vYL1mLNGeQJIYne3xBvxta/uuMH9te7zBi8EVTX9I2Lw2LMERgSRxL/nxBo66w5p4Kx5vYI0mLEWLQJIYndmv3ms1hONiE2DGsXl40rskMTpPAsC6MIHEJpAkRmf2q/eJDcmd9R07dswt4pmxW7BaIjRJjI4fb/Cs7xYtWvTsjUVXVjzewCJVWIwGgSQxOn68gUZPWBBl1eMNLFCFRSRAIEluGZA+ZHidh7j2gJoE2vGfTaLvlv3XH5Xxn4WfRIonyUqXRG3lapmARxBgo/OIbmAlkhMBNrrk1NvcVo8gwEbnEd3ASiQnAoYPUka90R65fLMi4so1rFi3w5Lf7UpO4LmtyZeA4ZXu9PkIXLl2E20aVsfmxROTL0FuORNwkYDhlW6lWN0ofLNhJ45vnI2yJQrhyKlzLlbP2ZlA8iNgeKWzocqa+enPF9PDPTkwASagT8C00QWIX7a8GBEN+jF0DkyACegTMG10OcXvMNPejgMTYALOETBtdBu370cZ/4J4tXVd+ZvOzlXLuZhA8iVg2uj2Hz2NbiNnYtG0Qbj+1zLQowI4MAEm4JiA4dNLm8hiBXNj1rg+8ueIVm38HafOhNuS+JUJMAENAqaNjn7hMuLyNYybuUxDPEcxASYQl4Bp9/LWnXtI7WPaduPqxe+ZgNcSMG10f584g6LCxcyWJZPXQuKGMQErCZg2uujrt6Q+ef2yW6kXy2ICXkvAsF/4RqcmKFWsABrUKI+Qs+E4GnLeayFxw5iAlQQMGx3t427cuoNPl6zFtxt+t1InlsUEvJqAYaP7ZPEarwbDjWMC7iJgek/nLsVYLhPwVgJsdN7as9wujyXARuexXcOKeSsBNjpv7Vlul8cSYKPz2K5hxbyVABudt/Yst8tjCbDReWzXsGLeSoCNzlt7ltvlsQTY6Dy2a1gxbyXARuetPcvt8lgCbHQe2zWsmLcSYKPz1p7ldnksATY6j+0aVsxbCbDReWvPcrs8lgAbncd2DSvmrQTY6Ly1Z7ldHkuAjc5ju4YV81YCqtHlzeXrrW3kdjGBJCUQ17ZUo+vSsnaSKsaVMwFvJdBV/M6HfVCfkTJhUGcZv+THrbgUddU+D18zASZggEAe8VhKMrh333olVukUigixYvhNohIYMWIEpk6dmqh1JnVlybHN9sxV99I+kq+ZABNwHwE2OvexZclMQJMAG50mFo5kAu4jwEbnPrYsmQloEmCj08TCkUzAfQTY6NzHliUzAU0CbHSaWDiSCbiPABud+9iyZCagSYCNThMLRzIB9xFgo3MfW5bMBDQJsNFpYuFIJuA+Amx07mPLkpmAJgE2Ok0sHMkE3EeAjc59bFkyE9AkwEaniYUjmYD7CPD36dzH1inJ9HXGFClSOJXXWzI9fvwYqVKl8pbmuNwONjqXkXEBJmCOALuX5vhxaSbgMgE2OpeRcQEmYI5AohrdjVt3EHnlujmNNUpHRd9ATMwjjZSki4q4fA237twzpICrZantYRFX8PjxE0P1/VcLhV6IwN5DIar6Fy5dUa8dXTiTx1FZq+ITzejCI6+iUO2e2LL7sCndr9+8gx17j6oy7j94iKL1emHgxC/VuKS+mP/tL6jabghoknE1aJWN2+a4Mlv0mYjBkxcgZcrkdSCzbM12DJu2UOL47uddYnz1iDW+fvptTyxUWnliZUikN4lmdO/OWoFxA17Gy82DTTVt65+H8cnitaqMdGnT4H9vdEBnD3lu522xus36eh3WfzEO+XPnUPV05sJR2bhttpe1YdtfoBPQr2cMTnanoPYcalYqhaE926Bi6aIympi0fyv2U9bi5rEvn5jX6nMv3V3p3An9LKniXPjleHLe6ftSvLikisiUMT0O/PixoeodldVqs62CJrUrg/6Se8idMxumDX9dxXAp6lq8LUfcPGrmRL5waqX78dc/Ubn1YGSt9ArKNh0AcoFs4a0J8/DlN5uEe/cF8tZ8HfmDu2PO8o22ZJDf3VK4P/mCusG/QV9MmfudmkZlF6z6FcOFi+BbtbN8pX3J1HnfoeSL/ZCpfAfU6fI/nLsYJct88OVqfLzwJ2zbe0TGv/PBYhlf79XR+Fo8JNcWEtJ3084D6PDWNHz13a8o12wAslXuhJ6jZqn7IXJ/K7QciIK1esg2//L7QZtY9ZXa8ffxM2jUbRwylGuPPw6ckGmrN+1GpdZvy7YGthuK7XZuMLVn575jskwWwbFKm8E4dOKsKtNRWUdtfij2cSOnLxKudW/ptnccOA2Xr97QlUcZJny2EoXr9JR/rd+YDNpDWhnOXIiUfZ6relcUqdsLw6Z+BdKX/kbNWIJi9XvL/m7w2hjJ0VY3jYfPl23AG+M+l2OJtiNLf9pmS8bRkPOo1ekd2Pj9deQfNe3UmYsoUKs7yBWn/uggeFCo3XmUHCtUt30eStPTh/rst11/o37XMXKc1OgwHCFnw6mouSCW4QTDtj1HFDH4FVG58uBhjLJszTYle5VO8pUKdh48Q8lT4zXl5x37FbGhV1Zv+kNJWaKVIgalcvfeA0V0rjLm46WKcJ0UscdRqrcfpixevZmKyrJicCsjpi1U/jx4UhHGpZwPv6wMnbJAEQcDSvS1m0rj7uOVl96cIvNfv3lb6T7yE6Vpz3eVC5cuK1eu3pTxpZv0V+Ys3yCv9fQVBqn4lGyjvD9nldRn3+EQ2b5F3z/Vya/aq8o363dKWWfDIpWToWHy2v5fmtJtlYqtBilLftii7BZ6i32lIlxARRigsmX3IZlVbPAVMegUcXAk31OZhq+PVULPR8j83UbOVEjvJ0+eJFjWUZv7j5+jBL8yUhEDXMofKxi36D1BXiekC6XlrNZFiYp+qpfYH8t+kgUt+EcshKEpgyfPV+7df6DcuXtfHSsD3purVHtpqOxb4kL9LCY9VRcaS/mDuyliYpQ6TZm7Sklf9iXl6vVb8r2Y1JWeoz5VwiOj5dgQBqXQHwVhkEoK/5Yy/qEYp2L/Jt/TeKKxEjcPvdfTh/qsSY/xss/ExKSISUJp/i9jKdDgP92VbvbS9ejYNBj1XghAmtQ+eKV5LTSvWxUUbwst6weiUVBF+PikQuuG1VGhVFGs3bIX67ftw5VrN9GwRnk5S504HYZaVcvAfoNbungBTBn2GgLLl0DBvDlRIE8OTB/RDfnED5pkz5oZLzcLxl9HT8uqsmTOiEwZ0yFDurRyv+SbLbNNBfXVGX0zCxdwZJ92eC5TBlQuWxy1A8viwLFQKYMOI2iFohPRQvn8UKJIPlW2/cWbXZqhS6s6qCb0TpsmtZyhaweWkbrt+fsUhDHJttB+zBZG9GqLIgVyyfyj+3XA8X8u4J9zlxIsq9XmR48e4wvhXbSqX03oeR1UX83KpbBxx37pUtFq4UgX+vTL7Tv3sfmPQzJvUJXSSJ8ujU1F06+0x7x24zamDO0K2m9nSJ9WjhnyYOat3CQeMd5J9q2fbxa8P6QrHolPp6xYu0Ott1mdKmhYs4LUiRiLiR7HxbhZt3WvXJEnD3kV9LhyGhsNxLjSCqnFOPXLnkUm0XjS2ls7q8+Q7q1ln+XKkRVdWtZRx4lWvc7G6e7pzgrXjozMPgQGlMDm3Yfso2Jd5xDGECkGQ8YM6eTAXi86whZSik5vVreK7a0Y2DnVa9sFuXjkVpwJi0TElWvSDbCl6b0a0ZeM72FMjBS9dt4YvCNcoILiJKy2mCBmjesD/8J541VbSEwQ9iEsIloa0+pfdqvRNCiKF8qjvre/8BWDhgIZt6tlbbdIyHWnSc0WhomDhCfiACEheZXKFMNH/+uB8Z+uQJ8xs9GtXQMxyb0uJ0ybHDOvxD9/bl/QwLcPFyOjIVYgFMnvp0bTJE36UD9rBRo/NElQ35wNi5ITYM5/jUkrvytxRvShcUKTgNkQm4yGtIJ5csp7QPZJ+8XKQ/FagWaQP8XM+2JwJRQrmBs0K08a3EUcZ+suqlIc7bU+mP8DFk4ZiKoB/qBjXlduB7iqb9w20Mq36at35WDuPfozDHhvHjYuGB83W7z31Faa1d8XM7wzYdf+p/tAWt1dLZvHL5tYCdKi3Ys1pAcStz49eX1ebgz6o36k2w3lni+E7i81iCvG0Htqz0Vxe4jGQapUz/o8r1idyMjoPpnNeyBvgPbGrRtU062LjM3ILRhHgs3q40iuM/HPqDjI3bNDQywXy79t07p+6z7pOtp30h5xgzL62i2IPRwmz/lWrkwdmwVJN4HcwdEfLZXuFlVB5e0PGOJWS2k1KpaUBkcGu2ln7IMMgh8mZk3qMJrx4wZn9I1bxv496SdcdeTI9hzK+BeUK7V9uqPrXh0aQezx1LaJvYx0wcV+RC1C7h/JphXqI3EgVLd6gHRB9crGbTPN/r06NsKoD5eoDE6fj8AXwn2jkJA8ul9q68uA5wsje5ZMoo3pVR3NXjQSrmG6tKnlYQ3JosMKOlij166t62HC7G9w8/Zd4eLew0Rx/Vj0Y4cmQbrV1q8RgGjBcuH3v8m8h0+ek7wdFbStiHQIp/WBDJoAzOjjqF5n4nVXOtqrfTSqB1r2nQQaSOQ2kJ/bo31DVX5GMcPX6TIKdLRNnbh69ijpt1OGdfPGotfoWcgqTgnJtaQ9HLlsjgLNwC37ThSzcKhw13yk+7Nx+341e8emQRJ85govi7T68WQ5o68qLM4FfYLkS3Ey22/8HOkaZ0yfDis/HhYnl/Zb2hvNndAfnYfMkJMPzfRtGlWXP5VkK0GzPJ3u0uAJEnuwrz94WybpldVqM+2HxEEE/Bv2lXttGuij+rbXlRci9pDiMEK6obdu35O3G2jFtCrQbY+f5oxG93c+wcxFa9Q9XWoxyD8Wbu2gSfPlaSvt5QqLPfM64c7nzZVdt3ral9Ftp0HiQxBvCxnEbLjYI9NPu2mF54vmQyuxgpZq3F+eFez7fka8bGb0iSfMhQiXvmVAsxNBtQ9dhnwoDzfmvNdPDjZysbQCfXJETPJObdppwNLRr9ZBiU02TQDk8ycUtPRNKL8tjVZY0jduW23peq80k5PB2rtXacu0EzfMx0p3kPYFdMigFbTK2vJptZlWzhu37iLrcxlt2WK9OpJHbEgHmvHdFbT0pbpI53v3H0qDdLVuKkurJh1eORMc6WBf1ow+9nKcvdZd6ewF6Q1CRwZHMhwNMnv5tmsarAkZHOXTMzjKo6cv5dEKNBAz+cSeXLTyOYqjDbejQK5hQiwSKqvVZpLnyOBIB0fyjLJx1C6teC19KR/pnNBY0ZJli6OyzhoclXGkg00evZrRx16Os9cuGZ2WUHIzyXXgkDCB2eP7olSxAgln4tRkQcAl9zJZEOFGMgE3E9A9vXRz/SyeCSQ7Amx0ya7LucFJTYCNLql7gOtPdgTY6JJdl3ODk5rA/wHzF+FNTu0VJQAAAABJRU5ErkJggg==" />

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
                solved: "var answer = 1;<br>var power = 0;<br>while (power &lt; y) {<br>  answer = answer * x;<br>  power = power + 1;<br>}<br><br>/* or, instead */<br><br>var answer = x;<br>while (y > 1) {<br>  answer = answer * x;<br>  y = y - 1;<br>}",
                init: function() {
                    window.x = this.x = helpers.randomize(2, 4, 6);
                    window.y = this.y = helpers.randomize(3, 5, 7);
                },
                answer: function() {
                    return Math.pow(this.x, this.y);
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Calculer une plage",
                description: "Créer une variable nommée <code>answer</code> et lui affecter la valeur de la plage située entre <code>x</code> et <code>y</code> (ex. 2-5 = 2+3+4+5 — déclarées par ce tutoriel)",
                solved: "var answer = 0;<br>var max = y, pos = x;<br>while (pos &lt;= max) {<br>  answer = answer + pos;<br>  pos = pos + 1;<br>}<br><br>/* or, instead */<br><br>var answer = 0;<br>while (x <= y) {<br>  answer = answer + x;<br>  x = x + 1;<br>}",
                init: function() {
                    window.x = this.x = helpers.randomize(2, 4, 6);
                    window.y = this.y = helpers.randomize(8, 10, 12);
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
                    return helpers.basicWarn(answer, this.answer());
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

                        /* which is perfectly equivalent to */

                        var notes = '';
                        var instruments = 0;
                        while (instruments < 4) {
                            notes = notes + '♬';
                            instruments++;
                        }

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
                    window.x = this.x = helpers.randomize('06 03 05 02 04 ', '06 01  04 03 07', ' 06 08 03 09 02');
                },
                answer: function() {
                    return this.x.replace(/[ ]+/g, '');
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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
                    window.x = this.x = helpers.random(5, 9);
                },
                answer: function() {
                    let result = 0;
                    for(let i = 1; i <= this.x; i++)
                        if (i % 2 !== 0)
                            result += i;
                    return result;
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Identifier un palindrome",
                description: "Créer une variable nommée <code>answer</code> ayant pour valeur <code>true</code> si <code>x</code> (déclarée par ce tutoriel) est un palindrome, <code>false</code> sinon. Un palindrome est un mot qui se lit de la même manière à l'endroit et à l'envers (ex. kayak).",
                solved: "var reverse = '';<br>for (var i = 0; i < x.length; i++) {<br>  reverse = x[i] + reverse;<br>}<br>var answer = (reverse === x);<br><br>/* or, instead */<br><br>var answer = true;<br>for (var i = 0; i < x.length / 2; i++) {<br>  if (x[i] !== x[x.length - 1 - i]) {<br>    answer = false;<br>  }<br>}",
                init: function() {
                    window.x = this.x = helpers.randomize('anna', 'kayak', 'eva', 'canoe');
                },
                answer: function() {
                    return this.x === this.x.split('').reverse().join('');;
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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

                    <img class="schema" src="data:image/png;base64,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" />

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
                    window.x = this.x = helpers.random(1, 10);
                    window.y = this.y = helpers.random(11, 20);
                },
                answer: function() {
                    return [this.x, this.y];
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
                },
                solution: function() {
                    return helpers.equals(answer, this.answer());
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
                    this.x = [helpers.random(1, 10), helpers.random(1, 10)];
                    window.x = this.x.slice(0);
                    window.y = this.y = helpers.random(11, 20);
                },
                answer: function() {
                    return [].concat(this.x, this.y);
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
                },
                solution: function() {
                    return helpers.equals(answer, this.answer());
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
                    this.x = [helpers.random(1, 10) + 0.1 * helpers.random(1, 10), helpers.random(1, 10) + 0.1 * helpers.random(1, 10), helpers.random(1, 10) + 0.1 * helpers.random(1, 10), helpers.random(1, 10) + 0.1 * helpers.random(1, 10)];
                    window.x = this.x.slice(0);
                },
                answer: function() {
                    return this.x.map(function(item) { return Math.round(item); });
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
                },
                solution: function() {
                    return helpers.equals(answer, this.answer());
                }
            },
            {
                title: "Filtrer un tableau",
                description: "Créer une variable nommée <code>answer</code> de type tableau avec toutes les valeurs du tableau <code>x</code> dont les valeurs inférieures à 10 ont été retirées (ex. [7, 12, 3, 17] -> [12, 17] — déclarées par ce tutoriel).",
                solved: "var answer = [];<br>for (var i = 0; i < x.length; i++) {<br>  if (x[i] >= 10) {<br>    answer.push(x[i]);<br>  }<br>}",
                init: function() {
                    this.x = [helpers.random(1, 20), helpers.random(1, 20), helpers.random(1, 20), helpers.random(1, 20), helpers.random(1, 20), helpers.random(1, 20), helpers.random(1, 20), helpers.random(1, 20)];
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
                    return helpers.equals(answer, this.answer());
                }
            },
            {
                title: "Calculer une moyenne",
                description: "Créer une variable nommée <code>answer</code> ayant pour valeur la moyenne (entière, arrondie au supérieur) des valeurs du tableau <code>x</code> (ex. [1, 5, 7] -> (1+5+7)/3 -> 4 — déclarée par ce tutoriel).",
                solved: "var answer = 0;<br>for (var i = 0; i < x.length; i++) {<br>  answer = answer + x[i];<br>}<br>answer = Math.ceil(answer / x.length);",
                init: function() {
                    this.x = [helpers.random(1, 10), helpers.random(1, 10), helpers.random(1, 10), helpers.random(1, 10)];
                    window.x = this.x.slice(0);
                },
                answer: function() {
                    return Math.ceil(this.x.reduce(function(memo, value) { return memo + value; }, 0) / this.x.length);
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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
                    this.x = [].concat(helpers.randomize(fruits), helpers.randomize(fruits));
                    window.x = this.x.slice(0);
                },
                answer: function() {
                    return this.x.filter(function(item, pos, x) {
                        return x.indexOf(item) === pos;
                    });
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
                },
                solution: function() {
                    return helpers.equals(answer, this.answer());
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

                    <img class="schema" src="data:image/png;base64,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" />

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

                    **Notation pointée et entre crochets**
                        
                        var key = 'guitar';

                        /* those three lines are perfectly equivalent */
                        paul[key] = false;
                        paul.guitar = false;
                        paul['guitar'] = false;

                        paul;
                        → {name: 'Paul', guitar: false, bass: true}
                        
                        /* those two lines are **not** equivalent */
                        paul.key = false;
                        paul[key] = false;

                        paul;
                        → {name: 'Paul', guitar: false, key: false, bass: true}
                        
                    Il existe deux notations pour accéder aux clés d'une dictionnaire. La notation pointée \`paul.guitar\` et la notation entre crochets \`paul['guitar']\`. La notation entre crochets nécessite l'usage d'une chaîne de caractères. 
                    
                    Une variable peut être utilisée (mais uniquement avec la notation entre crochets), ex. \`paul[key]\`, cette variable est d'abord résolue et sa valeur, ex. \`key = 'guitar'\`, est utilisée comme clé pour accèder à la valeur stockée dans le dictionnaire.

                    **Boucle for..in sur un dictionnaire :**

                        var profil = '';
                        for (var key in paul) {
                          profil += key + ' -> ' + paul[key] +  ', ';
                        }

                        profil;
                        → 'name -> paul, age -> 72, guitar -> true, '

                        /* which is perfectly equivalent to */

                        var profil = '';
                        var keys = Object.keys(paul);
                        for (var i = 0; i < keys.length; i++) {
                          var key = keys[i];
                          profil += key + ' -> ' + paul[key] +  ', ';
                        }

                    Contrairement aux tableaux ou l'ordre d'itération est normé, l'ordre d'itération sur les attributs d'un objet littéral n'est pas garanti. La majorité des implémentations (des navigateurs) itèrent sur les attributs selon l'ordre dans lequel ils ont été définis, mais pas toutes.
                `
            },
            {
                title: "Créer un dictionnaire",
                description: "Créer une variable nommée <code>answer</code> de type dictionnaire avec deux clés, <code>min</code> et <code>max</code>, ayant pour valeur le minimum et le maximum des valeurs <code>x</code> et <code>y</code> (ex. 7, 5 -> {min: 5, max: 7} — déclarées par ce tutoriel).",
                excerpt: "Les objets littéraux ( ou dictionnaires), représentent une suite de paires clé - valeur séparées par une virgule. Chacune des valeurs ainsi listées peut être d'une type primitif ou composite.<br><br><strong>Exemple</strong> : <code>var obj = { age: 27, name: 'paul' }</code> déclare un objet littéral avec deux clés, la première ayant pour valeur un nombre, la seconde, une chaine de caractères. Ainsi <code>obj.age</code> retourne <code>27</code> et <code>obj.name</code> retourne <code>'paul'</code>. Ces valeurs peuvent être modifiées comme elles sont accédées, <code>obj.age = 32</code>.",
                solved: "var answer = {};<br>if (x < y) {<br>  answer.min = x;<br>  answer.max = y;<br>} else {<br>  answer.min = y;<br>  answer.max = x;<br>}",
                init: function() {
                    window.x = this.x = helpers.random(1, 50);
                    window.y = this.y = helpers.random(1, 50);
                },
                answer: function() {
                    return {min: Math.min(this.x, this.y), max: Math.max(this.x, this.y)};
                },
                warn: function() {
                    return "La variable <code>answer</code> vaut <code>" + JSON.stringify(answer) + "</code> et non la résultat attendu, <code>" + JSON.stringify(this.answer()) + "</code>";
                },
                solution: function() {
                    return helpers.equals(answer, this.answer());
                }
            },
            {
                title: "Parcourir un dictionnaire",
                description: "Créer une variable nommée <code>answer</code> et lui affecter le maximum de la propriété <code>age</code> des variables <code>x</code> et <code>y</code> (ex. {age: 7}, {age: 5} -> 7 — déclarées par ce tutoriel).",
                solved: "var answer = Math.max(x.age, y.age);",
                init: function() {
                    this.x = {age: helpers.random(1, 50)};
                    window.x = Object.assign({}, this.x);
                    this.y = {age: helpers.random(1, 50)};
                    window.y = Object.assign({}, this.y);
                },
                answer: function() {
                    return Math.max(this.x.age, this.y.age);
                },
                warn: function() {
                    return "La variable <code>answer</code> vaut <code>" + JSON.stringify(answer) + "</code> et non la résultat attendu, <code>" + JSON.stringify(this.answer()) + "</code>";
                },
                solution: function() {
                    return helpers.equals(answer, this.answer());
                }
            },
            {
                title: "Utiliser un dictionnaire pour structurer des données",
                description: "Créer une variable nommée <code>answer</code> de type dictionnaire, avec cinq clés, <code>a</code>, <code>e</code>, <code>i</code>, <code>o</code> et <code>u</code> et y stocker le nombre de chacune de ces voyelles dans la chaîne de caratères déclarée par la variable <code>x</code> (ex. 'hello' -> {a:0, e:1, i:0, o: 1, u:0} — déclarée par ce tutoriel).",
                solved: "var answer = {a:0, e:0, i:0, o:0, u:0};<br>for (var i = 0; i < x.length; i++) {<br>  switch(x[i].toLowerCase()) {<br>    case 'a': answer.a++; break;<br>    case 'e': answer.e++; break;<br>    case 'i': answer.i++; break;<br>    case 'o': answer.o++; break;<br>    case 'u': answer.u++; break;<br>  }<br>}<br><br>/* or, instead */<br><br>var answer = {a:0, e:0, i:0, o:0, u:0};<br>for (var i = 0; i < x.length; i++) {<br>  var char = x[i].toLowerCase();<br>  if (char === 'a') {<br>    answer.a++;<br>  } else if(char === 'e') {<br>    answer.e++;<br>  } else if(char === 'i') {<br>    answer.i++;<br>  } else if(char === 'o') {<br>    answer.o++;<br>  } else if(char === 'u') {<br>    answer.u++;<br>  }<br>}",
                init: function() {
                    window.x = this.x = helpers.randomize("I used to get mad at my school (No I can't complain)", "Lucy in the sky with diamonds", "And in the end, the love you take is equal to the love you make", "Sit back and let the evening go");
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
                    return helpers.equals(answer, this.answer());
                }
            },
            {
                title: "Filtrer un dictionnaire",
                description: "Créer une variable nommée <code>answer</code> de type dictionnaire, avec les attributs du dictionnaire déclarés par la variable <code>x</code> dont l'attribut déclaré par la variable <code>y</code> a été supprimé (ex. {paul:true, john:true, george:true}, 'paul' -> {john:true, george:true} — déclarée par ce tutoriel).",
                solved: "var answer = x;<br>delete answer[y];",
                init: function() {
                    this.x = {yellow: true, green: true, blue: true, violet: true, red: true, orange: true};
                    window.x = Object.assign({}, this.x);

                    let keys = Object.keys(this.x);
                    window.y = this.y = helpers.randomize(keys)[0];
                },
                answer: function() {
                    let x = Object.assign({}, this.x);
                    delete x[this.y];

                    return x;
                },
                warn: function() {
                    return "La variable <code>answer</code> vaut <code>" + JSON.stringify(answer) + "</code> et non la résultat attendu, <code>" + JSON.stringify(this.answer()) + "</code>";
                },
                solution: function() {
                    return helpers.equals(answer, this.answer());
                }
            },
            {
                title: "Filtrer un dictionnaire avec un tableau",
                description: "Créer une variable nommée <code>answer</code> de type dictionnaire, avec les attributs du dictionnaire déclarés par la variable <code>x</code> dont les attributs listés dans le tableau déclaré par la variable <code>y</code> ont été supprimés (ex. {paul:true, john:true, george:true}, ['paul', 'ringo'] -> {john:true, george:true} — déclarée par ce tutoriel).",
                solved: "var answer = x;<br>for (var i = 0; i < y.length; i++) {<br>  delete answer[y[i]];<br>}",
                init: function() {
                    this.x = {yellow: true, green: true, blue: true, violet: true, red: true, orange: true};
                    window.x = Object.assign({}, this.x);

                    let keys = Object.keys(this.x);
                    let first = helpers.randomize(keys)[0];
                    keys.splice(keys.indexOf(first), 1);
                    let second = helpers.randomize(keys)[0];
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
                    return helpers.equals(answer, this.answer());
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
                    return dom.board(dom.cartman);
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
                    return dom.board(dom.cartman);
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
                    * clavier : \`keydown\`, \`keyup\`, \`keypress\`, notifient, entre autres, quelle touche a été appuyée ou relâchée (avec un code pour identifier la touche, voir la liste des codes pour plus de détails)
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
                    return dom.board(dom.cartman);
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
                    return dom.board(dom.cartman);
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
                solved: "var lis = document.querySelectorAll('.board li.champagne');<br>for (var i = 0; i < lis.length; i++) {<br>  let li = lis[i]; /* using let here make li local to the for loop... */<br>  li.addEventListener('click', function() {<br>    li.className = 'braken'; /* ...so li here is the correct one */<br>  });<br>}<br><br>/* or, instead */<br><br>var lis = document.querySelectorAll('.board li.champagne');<br>for (var i = 0; i < lis.length; i++) {<br>  var li = lis[i];<br>  li.addEventListener('click', function() {<br>    this.className = 'braken'; /* this returns the actual element (which was clicked) */<br>  });<br>}<br><br>/* or, instead */<br><br>var lis = document.querySelectorAll('.board li.champagne');<br>for (var i = 0; i < lis.length; i++) {<br>  var li = lis[i];<br>  li.addEventListener('click', function(event) {<br>    event.target.className = 'braken'; /* event represents what just happened, event.target returns the clicked element */<br>  });<br>}",
                dom: function() {
                    return dom.board(dom.cartman);
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
                excerpt: "Lorsque du code se retrouve dupliqué, il est possible de le rassembler au sein d'une fonction et d'appeller celle-ci plusieurs fois. Le mot clé <code>function</code> permet de déclarer un sous programme qui peut être appelé par du code externe (ou s'appeller elle-même, en cas d'appels récursifs). Comme une boucle conditionnelle, une fonction est composée d'une liste d'opérations (délimitées entre accolades), il est possible de lui fournir des arguments et elle peut retourner une valeur avec le mot clé <code>return</code>. Une fonction est une variable comme les autres.<br><br><strong>Exemple</strong> : <pre><code>var double = function(value) { <br>  return value * 2; <br>}</code></pre> crée une fonction qui retourne le double d'un nombre. utilisée ainsi <code>double(12)</code> elle retourne <code>24</code>.",
                solved: "var first = document.querySelector('ul.board li.braken');<br>var second = document.querySelector('ul.board li.champagne');<br><br>var toggle = function() {<br>  var memo = first.className;<br>  first.className = second.className;<br>  second.className = memo;<br>};<br><br>first.addEventListener('click', toggle);<br>second.addEventListener('click', toggle);<br><br>/* or, instead */<br><br>var first = document.querySelector('ul.board li.braken');<br>var second = document.querySelector('ul.board li.champagne');<br><br>first.addEventListener('click', function() {<br>  var memo = first.className;<br>  first.className = second.className;<br>  second.className = memo;<br>});<br><br>second.addEventListener('click', function() {<br>  var memo = first.className;<br>  first.className = second.className;<br>  second.className = memo;<br>});",
                dom: function() {
                    return dom.board(dom.kenny);
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
                    return dom.board(dom.kenny);
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
                    return dom.board(dom.kenny);
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
                    return dom.board(dom.kyle.slice(0, 12));
                },
                warn: function() {
                    return "Quatre <code>li</code> doivent être ajoutés à la suite de ceux déjà présents dans <code>ul.board</code>";
                },
                solution: function() {
                    let basic = true;
                    let lis = document.querySelectorAll('.board li');
                    basic = basic && 16 === lis.length;
                    dom.kyle.forEach(function(value, i) {
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
                    return dom.board(dom.kyle.slice(0, 8).concat(dom.kyle.slice(12, 16)));
                },
                warn: function() {
                    return "Quatre <code>li</code> doivent être ajoutés après le huitième <code>li</code> de <code>ul.board</code>";
                },
                solution: function() {
                    let basic = true;
                    let lis = document.querySelectorAll('.board li');
                    basic = basic && 16 === lis.length;
                    dom.kyle.forEach(function(value, i) {
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
                    return dom.board(dom.kyle);
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
                    dom.kyle.forEach(function(value, i) {
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
                    return dom.board(dom.kyle);
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
        title: "Puzzle | Tours d'Hanoï",
        description: "Les tours d'Hanoï est un jeu de réflexion solitaire. Plusieurs disques de diamètre différents, sont à déplacer un à un de gauche à droite, dans trois tours sans placer un grand disque sur un plus petit.<br><br>Ce chapitre présente la réalisation des tours d'Hanoï dont la solution est à déverrouiller.",
        color: "grey",
        steps: [
            {
                course: true,
                description: `
                    Les tours d'Hanoï est un jeu de réflexion qui consiste à déplacer des disques de diamètres différents d'une tour de départ à une tour d'arrivée en passant par une tour intermédiaire, et ceci en un minimum de coups, tout en respectant les règles suivantes :

                    * on ne peut déplacer plus d'un disque à la fois
                    * on ne peut placer un disque que sur un autre disque plus grand que lui ou sur un emplacement vide

                    On suppose que cette dernière règle est également respectée dans la configuration de départ.

                    <br>

                    ---

                    <br>

                    **Prérequis** ${helpers.chapterLabel(2, 'Variables et opérations', 'green')} ${helpers.chapterLabel(3, 'Conditions et boucles', 'green')} ${helpers.chapterLabel(8, 'Le DOM', 'yellow')}

                    **Solution** débloquée lors de la réussite de chaque étape

                    **Code final** ~20 lignes
                `
            },
            {
                title: "Déplacer les disques",
                description: "Au clic sur une des trois tours, <code>.hanoi ul</code>, le disque, <code>li</code>, le plus haut de celle-ci est mémorisé. Au clic suivant sur une des trois tours, ce disque est déplacé dans cette nouvelle tour à condition que son plus haut disque soit plus grand que celui à déplacer. Et ainsi de suite (cliquer sur une troisième tour mémorise son plus haut disque, cliquer sur une autre tour déplace le disque à cet endroit).",
                solved: "var memo;<br>var uls = document.querySelectorAll('.hanoi ul');<br>for (var i = 0; i < uls.length; i++) {<br>  uls[i].addEventListener('click', function(event) {<br>    var ul = event.currentTarget;<br>    var firstChild = ul.querySelector('li');<br>    if (memo) {<br>      ul.prepend(memo);<br>      memo = undefined;<br>    } else if (firstChild) {<br>      memo = firstChild;<br>    }<br>  });<br>}",
                solvedOnSuccess: true,
                dom: function() {
                    return dom.hanoi();
                },
                solution: function() {
                    let uls = document.querySelectorAll('.hanoi ul');
                    uls[0].click();
                    uls[1].click();

                    if (uls[0].querySelectorAll('li').length !== 5)
                        this.warn = this.warn || "Cliquer sur la première tour puis sur la deuxième doit supprimer le premier li de la première tour";
                    if (uls[1].querySelectorAll('li').length !== 1)
                        this.warn = this.warn || "Cliquer sur la première tour puis sur la deuxième doit déplacer le premier li de la première tour vers la seconde";

                    return !this.warn;
                }
            },
            {
                title: "Respecter l'ordre des disques",
                description: "Après avoir mémorisé un disque, le clic sur une seconde tour ne doit pas ajouter le disque mémorisé si ce dernier est plus large que le plus haut de la nouvelle tour (avec un attribut data <code>weight</code> plus élevé). <i>Optionnel</i> : si ce cas se produit, le disque mémorisé est oublié, et c'est le disque le plus haut de la nouvelle tour qui est mémorisé à sa place (et sera donc déplacé au prochain clic, si les conditions précédentes sont remplies).",
                solved: "var memo;<br>var uls = document.querySelectorAll('.hanoi ul');<br>for (var i = 0; i < uls.length; i++) {<br>  uls[i].addEventListener('click', function(event) {<br>    var ul = event.currentTarget;<br>    var firstChild = ul.querySelector('li');<br>    if (memo && (!firstChild || firstChild.dataset.weight > memo.dataset.weight)) {<br>      ul.prepend(memo);<br>      memo = undefined;<br>    } else if (firstChild) {<br>      memo = firstChild;<br>    }<br>  });<br>}",
                solvedOnSuccess: true,
                dom: function() {
                    return dom.hanoi();
                },
                solution: function() {
                    let uls = document.querySelectorAll('.hanoi ul');
                    uls[0].click();
                    uls[1].click();

                    uls[0].click();
                    uls[1].click();

                    if (uls[0].querySelectorAll('li').length !== 5 || uls[1].querySelectorAll('li').length !== 1)
                        this.warn = this.warn || "Après avoir déplacé le petit disque de la première à la seconde tour, essayer de déplacer le second disque de la première tour vers le seconde ne doit pas être autorisé";
                    
                    uls[2].click();

                    if (uls[0].querySelectorAll('li').length !== 5 || uls[1].querySelectorAll('li').length !== 0 || uls[2].querySelectorAll('li').length !== 1)
                        this.warn = this.warn || "Après avoir déplacé le petit disque de la première à la seconde tour, cliquer sur la première tour, puis la second, puis la troisième, doit résulter dans le déplacement du petit disque de la tour du milieu à celle de droite.";

                    return !this.warn;
                }
            },
            {
                title: "Indiquer la victoire",
                description: "Après avoir déplacé tous les disque de la tour de gauche à celle de droite, ajouter la classe <code>success</code> au <code>ul</code> de la tour de droite pour indiquer la victoire.",
                solved: "var memo;<br>var uls = document.querySelectorAll('.hanoi ul');<br>for (var i = 0; i < uls.length; i++) {<br>  uls[i].addEventListener('click', function(event) {<br>    var ul = event.currentTarget;<br>    var firstChild = ul.querySelector('li');<br>    if (memo && (!firstChild || firstChild.dataset.weight > memo.dataset.weight)) {<br>      ul.prepend(memo);<br>      memo = undefined;<br>    } else if (firstChild) {<br>      memo = firstChild;<br>    }<br><br>    if (ul.classList.contains('tower-target') && ul.querySelectorAll('li').length === 6) {<br>      ul.classList.add('success');<br>    }<br>  });<br>}",
                solvedOnSuccess: true,
                dom: function() {
                    return dom.hanoi();
                },
                solution: function() {
                    let uls = document.querySelectorAll('.hanoi ul');
                    let move = function() {
                        let tower = [].slice.call(arguments);
                        for (let i = 0; i < tower.length; i = i + 2) {
                            uls[tower[i] - 1].click();
                            uls[tower[i+1] - 1].click();
                        }
                    };

                    let moveA = move.bind(null, 1, 2, 1, 3, 2, 3);
                    let moveB = move.bind(null, 1, 2, 3, 1, 3, 2);
                    let moveC = move.bind(null, 2, 1, 3, 1, 2, 3);
                    let moveD = move.bind(null, 1, 2, 3, 1, 2, 3);
                    let moveE = move.bind(null, 2, 1, 3, 1, 3, 2);
                    let moveF = function() {
                        moveA(); moveB(); moveA(); moveC(); moveA();
                    };

                    moveF(); moveB(); moveD(); moveE(); moveF(); moveE(); moveD(); moveC();

                    if (uls[2].classList.contains('success'))
                        this.warn = this.warn || "Tant que tous les disques ne sont pas sur la troisième tour, celle-ci ne doit pas posséder la classe success.";

                    moveF();

                    if (!uls[2].classList.contains('success'))
                        this.warn = this.warn || "Si tous les disques sont pas sur la troisième tour, celle-ci doit pas posséder la classe success.";

                    return !this.warn;
                }
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
                solved: "/* import this in the HTML <head> before the code<br>&lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js\"&gt;&lt;/script&gt;<br>&lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/locale/fr.js\"&gt;&lt;/script&gt;<br>*/<br>document.querySelector('.booking .from input').addEventListener('change', function(event) {<br>  var date = moment(event.target.value);<br>  document.querySelector('.from .formatted').innerHTML = date.format('MMM').toUpperCase() + ' ' + date.format('D');<br>});<br><br>document.querySelector('.booking .to input').addEventListener('change', function(event) {<br>  var date = moment(event.target.value);<br>  document.querySelector('.to .formatted').innerHTML = date.format('MMM').toUpperCase() + ' ' + date.format('D');<br>});",
                dom: function() {
                    return dom.booking();
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
                    helpers.change(from.input);

                    to.input.value = '2017-01-26';
                    helpers.change(to.input);

                    if (helpers.elContains(from.formatted, 'JANV. 24') !== true)
                        this.warn = this.warn || "La date affichée dans <code>.from .formatted</code> doit être égale à JANV. 24, lorsque la date saisie est le 24 janvier";
                    if (helpers.elContains(to.formatted, 'JANV. 26') !== true)
                        this.warn = this.warn || "La date affichée dans <code>.to .formatted</code> doit être égale à JANV. 26, lorsque la date saisie est le 26 janvier";
                    return !this.warn;
                }
            },
            {
                title: "Limiter les dates",
                description: "Si la date de retour saisie est antérieure ou égale à la date de l'aller, elle est par défaut 1 jour après l'aller (l'aller est le 12 janvier, la date de retour doit être le 13 janvier au plus tôt).",
                solved: "var from = {<br>  value: null,<br>  input: document.querySelector('.from input'),<br>  formatted: document.querySelector('.from .formatted')<br>}<br>var to = {<br>  value: null,<br>  input: document.querySelector('.to input'),<br>  formatted: document.querySelector('.to .formatted')<br>}<br><br>from.input.addEventListener('change', function() {<br>  from.value = moment(from.input.value);<br>  from.formatted.innerHTML = from.value.format('MMM').toUpperCase() + ' ' + from.value.format('D');<br>});<br><br>to.input.addEventListener('change', function() {<br>  to.value = moment(to.input.value);<br>  if (to.value.isSameOrBefore(from.value)) {<br>    to.value = from.value.clone().add(1, 'day');<br>    to.input.value = to.value.format('YYYY-MM-DD');<br>  }<br>  to.formatted.innerHTML = to.value.format('MMM').toUpperCase() + ' ' + to.value.format('D');<br>});",
                dom: function() {
                    return dom.booking();
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
                    helpers.change(from.input);

                    to.input.value = '2017-01-24';
                    helpers.change(to.input);

                    if (helpers.elContains(from.formatted, 'JANV. 24') !== true)
                        this.warn = this.warn || "La date affichée dans <code>.from .formatted</code> doit être égale à JANV. 24, lorsque la date saisie est le 24 janvier";
                    if (helpers.elContains(to.formatted, 'JANV. 25') !== true)
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
                    return dom.booking();
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
                    helpers.change(from.input);

                    to.input.value = '2017-01-27';
                    helpers.change(to.input);

                    if (helpers.elContains(document.querySelector('.price'), '160€') !== true)
                        this.warn = "Le prix doit être de 160€ pour un voyage du 24 au 27 janvier";
                    return !this.warn;
                }
            },
            {
                title: "Multiplier par le nombre de voyageurs",
                description: "Pour chaque voyageur, multiplier le prix (un voyage à 80€ coûtera 240€ pour 3 voyageurs).",
                solved: "var from = {<br>  value: null,<br>  input: document.querySelector('.from input'),<br>  formatted: document.querySelector('.from .formatted')<br>}<br>var to = {<br>  value: null,<br>  input: document.querySelector('.to input'),<br>  formatted: document.querySelector('.to .formatted')<br>}<br>var passengers = 1;<br><br>var total = function() {<br>  if (!from.value || !to.value)<br>    return;<br><br>  var days = to.value.diff(from.value, 'days') + 1;<br>  document.querySelector('.price').innerHTML = 40 * days * passengers + '€';<br>}<br><br>from.input.addEventListener('change', function() {<br>  from.value = moment(from.input.value);<br>  from.formatted.innerHTML = from.value.format('MMM').toUpperCase() + ' ' + from.value.format('D');<br>});<br><br>to.input.addEventListener('change', function() {<br>  to.value = moment(to.input.value);<br>  if (to.value.isSameOrBefore(from.value)) {<br>    to.value = from.value.clone().add(1, 'day');<br>    to.input.value = to.value.format('YYYY-MM-DD');<br>  }<br>  to.formatted.innerHTML = to.value.format('MMM').toUpperCase() + ' ' + to.value.format('D');<br>  total();<br>});<br><br>document.querySelector('select').addEventListener('change', function(event) {<br>  passengers = event.target.value;<br>  total();<br>});",
                dom: function() {
                    return dom.booking();
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
                    helpers.change(from.input);

                    to.input.value = '2017-01-27';
                    helpers.change(to.input);

                    var select = document.querySelector('select');
                    select.value = 3;
                    helpers.change(select);

                    if (helpers.elContains(document.querySelector('.price'), '480€') !== true)
                        this.warn = "Le prix doit être de 160€ pour un voyage du 24 au 27 janvier pour 3 voyageurs";
                    return !this.warn;
                }
            },
            {
                title: "Décompter les weekends",
                description: "Les samedis et dimanches ne sont pas facturés (vendredi, samedi, dimanche coûtera 40€ — 1 jour —, vendredi, samedi, dimanche, lundi coûtera 80€ — 2 jours —, du lundi au lundi deux semaines après, coûtera 840€ — 11 jours).",
                solved: "var from = {<br>  value: null,<br>  input: document.querySelector('.from input'),<br>  formatted: document.querySelector('.from .formatted')<br>}<br>var to = {<br>  value: null,<br>  input: document.querySelector('.to input'),<br>  formatted: document.querySelector('.to .formatted')<br>}<br>var passengers = 1;<br><br>var total = function() {<br>  if (!from.value || !to.value)<br>    return;<br><br>  var days = 0;<br>  var clone = from.value.clone();<br>  while (clone.isSameOrBefore(to.value)) {<br>    if (clone.day() !== 6 && clone.day() !== 0)<br>      days++;<br>    clone.add(1, 'days');<br>  }<br><br>  document.querySelector('.price').innerHTML = 40 * days * passengers + '€';<br>}<br><br>from.input.addEventListener('change', function() {<br>  from.value = moment(from.input.value);<br>  from.formatted.innerHTML = from.value.format('MMM').toUpperCase() + ' ' + from.value.format('D');<br>});<br><br>to.input.addEventListener('change', function() {<br>  to.value = moment(to.input.value);<br>  if (to.value.isSameOrBefore(from.value)) {<br>    to.value = from.value.clone().add(1, 'day');<br>    to.input.value = to.value.format('YYYY-MM-DD');<br>  }<br>  to.formatted.innerHTML = to.value.format('MMM').toUpperCase() + ' ' + to.value.format('D');<br>  total();<br>});<br><br>document.querySelector('select').addEventListener('change', function(event) {<br>  passengers = event.target.value;<br>  total();<br>});",
                dom: function() {
                    return dom.booking();
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
                    helpers.change(from.input);

                    to.input.value = '2017-01-30';
                    helpers.change(to.input);

                    var select = document.querySelector('select');
                    select.value = 2;
                    helpers.change(select);

                    var basic = true;
                    basic = basic && helpers.elContains(document.querySelector('.price'), '160€');
                    if (helpers.elContains(document.querySelector('.price'), '160€') !== true)
                        this.warn = this.warn || "Le prix doit être de 160€ pour un voyage de 4 jours incluant samedi et dimanche pour 2 voyageurs";

                    from.input.value = '2017-01-13';
                    helpers.change(from.input);

                    to.input.value = '2017-01-30';
                    helpers.change(to.input);

                    if (helpers.elContains(document.querySelector('.price'), '960€') !== true)
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
                            return number * power(number, exponent - 1);
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
                    let x = helpers.random();
                    let y = helpers.random();
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
                    let x = helpers.random();
                    let y = helpers.random();
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
                    if (helpers.equals({a: 0, e: 0}, count('')) !== true)
                        this.warn = this.warn || "La fonction <code>count('')</code> doit retourner <code>{a: 0, e: 0}</code>";

                    if (helpers.equals({a: 2, e: 1}, count('Short ribs fatback pork chop turducken.')) !== true)
                        this.warn = this.warn || "La fonction <code>count('Short ribs fatback pork chop turducken.')</code> doit retourner <code>{a: 2, e: 1}</code>";

                    if (helpers.equals({a: 7, e: 5}, count('Andouille pork chop picanha pancetta landjaeger brisket.')) !== true)
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

                        return '<p><strong>Démonstration (cliquer sur les flêches) :</strong></p>' + dom.carousel();
                    }
                }
            },
            {
                title: "Naviguer au suivant",
                description: "Lors du clic sur l'élément doté de la classe <code>next</code>, masquer le premier élément du carrousel et révéler le second.",
                excerpt: "Les items du carrousel se situent dans la liste <code>.carousel > ul > li</code> et un seul d'entre eux à la classe <code>visible</code> (ainsi, les autres sont masqués). Retirer la classe <code>visible</code> d'un élément et l'ajouter à un autre, permet de masquer le premier et de révéler le second.<br><br><strong>Déclarer un écouteur d'événement sur la flêche de droite, et masquer le premier élément du carrousel </strong>: <pre><code>var next = document.querySelector('.next');<br>next.addEventListener('click', function() {<br>  var li = document.querySelector('.carousel > ul > li.visible');<br>  li.classList.remove('visible');<br>});</code></pre>",
                solved: "var lis = document.querySelectorAll('.carousel li');<br>var elNext = document.querySelector('.next');<br><br>elNext.addEventListener('click', function() {<br>  lis[0].classList.remove('visible');<br>  lis[1].classList.add('visible');<br>});",
                dom: function() {
                    return dom.carousel();
                },
                solution: function() {
                    var elPrev = document.querySelector('.prev');
                    var elNext = document.querySelector('.next');

                    var lis = document.querySelectorAll('.carousel > ul > li');

                    if (lis.length !== 5)
                        this.warn = this.warn || "Le <code>.carousel > ul</code> doit contenir 5 <code>li</code>";
                    if (helpers.elHasClass(lis[0], 'visible') !== true)
                        this.warn = this.warn || "Le premier <code>li</code> doit avoir la classe <code>visible</code>";
                    if (helpers.elHasClass(lis[1], 'visible') !== false)
                        this.warn = this.warn || "Le second <code>li</code> ne doit avoir la classe <code>visible</code>";

                    elNext.click();
                    if (helpers.elHasClass(lis[0], 'visible') !== false)
                        this.warn = this.warn || "Après un clic sur suivant, le premier <code>li</code> ne doit plus avoir la classe <code>visible</code>";
                    if (helpers.elHasClass(lis[1], 'visible') !== true)
                        this.warn = this.warn || "Après un clic sur suivant, le second <code>li</code> doit avoir la classe <code>visible</code>";

                    return !this.warn;
                }
            },
            {
                title: "Naviguer au suivant, sans dépasser le dernier",
                description: "S'assurer que cliquer sur la flêche de droite permet de passer d'un élément au suivant, mais qu'une fois arrivé au dernier, n'a plus d'effet.",
                solved: "var index = 0;<br>var lis = document.querySelectorAll('.carousel li');<br>var elNext = document.querySelector('.next');<br><br>elNext.addEventListener('click', function() {<br>  lis[index].classList.remove('visible');<br>  index++;<br>  if (index > 4)<br>    index = 4;<br><br>  lis[index].classList.add('visible');<br>});",
                dom: function() {
                    return dom.carousel();
                },
                solution: function() {
                    var elPrev = document.querySelector('.prev');
                    var elNext = document.querySelector('.next');

                    var lis = document.querySelectorAll('.carousel > ul > li');

                    if (lis.length !== 5)
                        this.warn = this.warn || "Le <code>.carousel > ul</code> doit contenir 5 <code>li</code>";
                    if (helpers.elHasClass(lis[0], 'visible') !== true)
                        this.warn = this.warn || "Le premier <code>li</code> doit avoir la classe <code>visible</code>";
                    if (helpers.elHasClass(lis[1], 'visible') !== false)
                        this.warn = this.warn || "Le second <code>li</code> ne doit avoir la classe <code>visible</code>";

                    elNext.click(); elNext.click(); elNext.click(); elNext.click(); elNext.click();
                    if (helpers.elHasClass(lis[1], 'visible') !== false)
                        this.warn = this.warn || "Après quatre clic sur suivant, le premier <code>li</code> ne doit plus avoir la classe <code>visible</code>";
                    if (helpers.elHasClass(lis[4], 'visible') !== true)
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
                    return dom.carousel();
                },
                solution: function() {
                    var elPrev = document.querySelector('.prev');
                    var elNext = document.querySelector('.next');

                    var lis = document.querySelectorAll('.carousel > ul > li');

                    if (lis.length !== 5)
                        this.warn = this.warn || "Le <code>.carousel > ul</code> doit contenir 5 <code>li</code>";
                    if (helpers.elHasClass(lis[0], 'visible') !== true)
                        this.warn = this.warn || "Le premier <code>li</code> doit avoir la classe <code>visible</code>";
                    if (helpers.elHasClass(lis[1], 'visible') !== false)
                        this.warn = this.warn || "Le second <code>li</code> ne doit avoir la classe <code>visible</code>";

                    elPrev.click();
                    if (helpers.elHasClass(lis[0], 'visible') !== true)
                        this.warn = this.warn || "Après un clic sur précédent, le premier <code>li</code> doit avoir la classe <code>visible</code>";
                    if (helpers.elHasClass(lis[1], 'visible') !== false)
                        this.warn = this.warn || "Après un clic sur précédent, le second <code>li</code> ne doit avoir la classe <code>visible</code>";

                    elNext.click(); elNext.click(); elPrev.click();
                    if (helpers.elHasClass(lis[0], 'visible') !== false)
                        this.warn = this.warn || "Après un clic sur suivant, précédent, suivant, le premier <code>li</code> ne doit plus avoir la classe <code>visible</code>";
                    if (helpers.elHasClass(lis[1], 'visible') !== true)
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
                    return dom.carousel();
                },
                solution: function() {
                    var elPrev = document.querySelector('.prev');
                    var elNext = document.querySelector('.next');

                    var lis = document.querySelectorAll('.carousel > ul > li');

                    if (lis.length !== 5)
                        this.warn = this.warn || "Le <code>.carousel > ul</code> doit contenir 5 <code>li</code>";
                    if (helpers.elHasClass(elPrev, 'hidden') !== true)
                        this.warn = this.warn || "La flêche de gauche doit être masquée quand le premier élément est affiché";
                    if (helpers.elHasClass(elNext, 'hidden') !== false)
                        this.warn = this.warn || "La flêche de gauche doit être affichée quand le premier élément est affiché";

                    elNext.click();
                    if (helpers.elHasClass(elPrev, 'hidden') !== false)
                        this.warn = this.warn || "La flêche de gauche doit être affichée quand le second élément est affiché";
                    if (helpers.elHasClass(elNext, 'hidden') !== false)
                        this.warn = this.warn || "La flêche de gauche doit être affichée quand le second élément est affiché";

                    elNext.click(); elNext.click(); elNext.click();
                    if (helpers.elHasClass(lis[4], 'visible') !== true)
                        this.warn = this.warn || "Après quatre clic sur suivant, le cinquième <code>li</code> doit avoir la classe <code>visible</code>";
                    if (helpers.elHasClass(elPrev, 'hidden') !== false)
                        this.warn = this.warn || "La flêche de gauche doit être affichée quand le cinquième élément est affiché";
                    if (helpers.elHasClass(elNext, 'hidden') !== true)
                        this.warn = this.warn || "La flêche de gauche doit être masquée quand le cinquième élément est affiché";

                    return !this.warn;
                }
            },
            {
                title: "Afficher la position",
                description: "Une liste d'indicateurs <code>.dots li</code> est disponible sous le carrousel. Ajouter la classe <code>active</code> à celui d'entre eux qui correspond à l'élément du carrousel affiché (le premier rond quand le premier élément est affiché, le second pour le second, etc). Mettre à jour cet indicateur lors du changement d'élément dans le carrousel.",
                solved: "var index = 0;<br>var lis = document.querySelectorAll('.carousel li');<br>var elNext = document.querySelector('.next');<br>var elPrev = document.querySelector('.prev');<br><br>var dots = document.querySelectorAll('.carousel .dots li');<br>var navigation = function(index) {<br>  elPrev.classList.toggle('hidden', index === 0);<br>  elNext.classList.toggle('hidden', index === 4);<br><br>  for (var i = 0; i < dots.length; i++) {<br>    dots[i].classList.remove('active');<br>  }<br>  dots[index].classList.add('active');<br>}<br><br>var jump = function(to) {<br>  lis[index].classList.remove('visible');<br>  index = to;<br>  if (index > 4)<br>    index = 4;<br>  if (index < 0)<br>    index = 0;<br>  lis[index].classList.add('visible');<br>  navigation(index);<br>}<br><br>elPrev.addEventListener('click', function() {<br>  jump(index - 1);<br>});<br><br>elNext.addEventListener('click', function() {<br>  jump(index + 1);<br>});<br><br>navigation(0);",
                dom: function() {
                    return dom.carousel(true);
                },
                solution: function() {
                    var elPrev = document.querySelector('.prev');
                    var elNext = document.querySelector('.next');

                    var lis = document.querySelectorAll('.carousel > ul > li');
                    var dots = document.querySelectorAll('.carousel .dots li');

                    if (lis.length !== 5)
                        this.warn = this.warn || "Le <code>.carousel > ul</code> doit contenir 5 <code>li</code>";
                    if (helpers.elHasClass(dots[0], 'active') !== true)
                        this.warn = this.warn || "Le premier indicateur doit avoir la classe <code>active</code> lorsque le premier élément est affiché";

                    elNext.click();
                    if (helpers.elHasClass(dots[0], 'active') !== false)
                        this.warn = this.warn || "Après un clic sur suivant, le premier indicateur ne doit pas avoir la classe <code>active</code>";
                    if (helpers.elHasClass(dots[1], 'active') !== true)
                        this.warn = this.warn || "Après un clic sur suivant, le second indicateur doit avoir la classe <code>active</code>";

                    elNext.click(); elNext.click(); elNext.click();
                    if (helpers.elHasClass(lis[4], 'visible') !== true)
                        this.warn = this.warn || "Après quatre clic sur suivant, le cinquième <code>li</code> doit avoir la classe <code>visible</code>";
                    if (helpers.elHasClass(elPrev, 'hidden') !== false)
                        this.warn = this.warn || "La flêche de gauche doit être affichée quand le cinquième élément est affiché";
                    if (helpers.elHasClass(elNext, 'hidden') !== true)
                        this.warn = this.warn || "La flêche de gauche doit être masquée quand le cinquième élément est affiché";

                    return !this.warn;
                }
            },
            {
                title: "Modifier la position",
                description: "Cliquer sur l'un des ronds doit permettre de naviguer à l'élément du carrousel à la même position. Les flêches de navigation gauche ou droite sont masquées si il s'agit du premier ou dernier élément du carrousel (comme lors de la navigation manuelle de l'utilisateur).",
                solved: "var index = 0;<br>var lis = document.querySelectorAll('.carousel li');<br>var elNext = document.querySelector('.next');<br>var elPrev = document.querySelector('.prev');<br><br>var dots = document.querySelectorAll('.carousel .dots li');<br>var navigation = function(index) {<br>  elPrev.classList.toggle('hidden', index === 0);<br>  elNext.classList.toggle('hidden', index === 4);<br><br>  for (var i = 0; i < dots.length; i++) {<br>    dots[i].classList.remove('active');<br>  }<br>  dots[index].classList.add('active');<br>}<br><br>var jump = function(to) {<br>  lis[index].classList.remove('visible');<br>  index = to;<br>  if (index > 4)<br>    index = 4;<br>  if (index < 0)<br>    index = 0;<br>  lis[index].classList.add('visible');<br>  navigation(index);<br>}<br><br>elPrev.addEventListener('click', function() {<br>  jump(index - 1);<br>});<br><br>elNext.addEventListener('click', function() {<br>  jump(index + 1);<br>});<br><br>for (let i = 0; i < dots.length; i++) {<br>  dots[i].addEventListener('click', function() {<br>    jump(i);<br>  });<br>}<br><br>navigation(0);",
                dom: function() {
                    return dom.carousel(true);
                },
                solution: function() {
                    var elPrev = document.querySelector('.prev');
                    var elNext = document.querySelector('.next');

                    var lis = document.querySelectorAll('.carousel > ul > li');
                    var dots = document.querySelectorAll('.carousel .dots li');

                    if (lis.length !== 5)
                        this.warn = this.warn || "Le <code>.carousel > ul</code> doit contenir 5 <code>li</code>";
                    if (helpers.elHasClass(dots[0], 'active') !== true)
                        this.warn = this.warn || "Le premier indicateur doit avoir la classe <code>active</code> lorsque le premier élément est affiché";

                    dots[2].click();
                    if (helpers.elHasClass(dots[0], 'active') !== false)
                        this.warn = this.warn || "Après un clic le troisième indicateur, le premier indicateur ne doit pas avoir la classe <code>active</code>";
                    if (helpers.elHasClass(dots[2], 'active') !== true)
                        this.warn = this.warn || "Après un clic le troisième indicateur, le troisième indicateur doit avoir la classe <code>active</code>";

                    elNext.click();
                    if (helpers.elHasClass(dots[2], 'active') !== false)
                        this.warn = this.warn || "Après un clic le troisième indicateur puis sur suivant, le troisième indicateur ne doit pas avoir la classe <code>active</code>";
                    if (helpers.elHasClass(dots[3], 'active') !== true)
                        this.warn = this.warn || "Après un clic le troisième indicateur puis sur suivant, le quatrième indicateur doit avoir la classe <code>active</code>";

                    dots[0].click();
                    if (helpers.elHasClass(dots[3], 'active') !== false)
                        this.warn = this.warn || "Après un clic le premier indicateur, le troisième indicateur ne doit pas avoir la classe <code>active</code>";
                    if (helpers.elHasClass(dots[0], 'active') !== true)
                        this.warn = this.warn || "Après un clic le premier indicateur, le premier indicateur doit avoir la classe <code>active</code>";

                    if (helpers.elHasClass(elPrev, 'hidden') !== true)
                        this.warn = this.warn || "La flêche de gauche doit être masquée quand le premier élément est affiché";
                    if (helpers.elHasClass(elNext, 'hidden') !== false)
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

                    helpers.mouseevent(rightLabel, 'mouseenter');
                    if (!rightTooltip.offsetParent)
                        this.warn = this.warn || "Le tooltip n'est pas affiché lors du survol du label";

                    helpers.mouseevent(rightLabel, 'mouseleave');
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
                    return dom.tooltip();
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

                    helpers.mouseevent(labels[1], 'mouseenter');
                    if (!tooltips[1] || !tooltips[1].offsetParent)
                        this.warn = this.warn || "Le tooltip n°2 n'est pas affiché lors du survol du label n°2";

                    helpers.mouseevent(labels[1], 'mouseleave');
                    if (!tooltips[1] || tooltips[1].offsetParent)
                        this.warn = this.warn || "Le tooltip n°2 n'est pas masqué après la sortie d'un survol du label n°2";

                    helpers.mouseevent(labels[3], 'mouseenter');
                    if (!tooltips[3] || !tooltips[3].offsetParent)
                        this.warn = this.warn || "Le tooltip n°4 n'est pas affiché lors du survol du label n°4";

                    helpers.mouseevent(labels[3], 'mouseleave');
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
                    return dom.tooltip();
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

                    helpers.mouseevent(labels[1], 'mouseenter');
                    if (!tooltips[1] || !tooltips[1].offsetParent)
                        this.warn = this.warn || "Le tooltip n°2 n'est pas affiché lors du survol du label n°2";
                    if (!tooltips[1] || tooltips[1].getBoundingClientRect().left > labels[1].getBoundingClientRect().left)
                        this.warn = this.warn || "Le tooltip n°2 doit être situé sur la gauche du label n°2";

                    helpers.mouseevent(labels[1], 'mouseleave');
                    helpers.mouseevent(labels[2], 'mouseenter');
                    if (!tooltips[2] || !tooltips[2].offsetParent)
                        this.warn = this.warn || "Le tooltip n°3 n'est pas affiché lors du survol du label n°3";
                    if (!tooltips[2] || tooltips[2].getBoundingClientRect().top > labels[2].getBoundingClientRect().top)
                        this.warn = this.warn || "Le tooltip n°3 doit être situé au dessus du label n°3";

                    return !this.warn;
                }
            }
        ]
    }, 
    {
        title: "Puzzle | Démineur",
        description: "Le démineur est un jeu de réflexion solitaire. L'objectif est de localiser des mines cachées dans un champ virtuel avec comme seule indication le nombre de mines dans les cases adjacentes.<br><br>Ce chapitre présente la réalisation d'un puissance 4 dont la solution est à déverouiller.",
        color: "grey",
        steps: [
            {
                course: true,
                description: `
                    Le champ de mines est représenté par une grille composée de cases.

                    Chaque case de la grille peut soit cacher une mine (10 au total), soit être vide. Le but du jeu est de découvrir toutes les cases libres sans faire exploser les mines, c'est-à-dire sans cliquer sur les cases qui les dissimulent.
                    
                    Lorsque le joueur clique sur une case libre comportant au moins une mine dans l'une de ses cases avoisinantes, un chiffre apparaît, indiquant ce nombre de mines. Si en revanche toutes les cases adjacentes sont vides, une case vide est affichée et la même opération est répétée sur ces cases, et ce jusqu'à ce que la zone vide soit entièrement délimitée par des chiffres.

                    <br>

                    ---

                    <br>

                    **Prérequis** ${helpers.chapterLabel(4, 'Les tableaux', 'green')} ${helpers.chapterLabel(5, 'Les dictionnaires', 'green')} ${helpers.chapterLabel(8, 'Le DOM', 'yellow')} ${helpers.chapterLabel(10, 'Les fonctions', 'yellow')}

                    **Solution** débloquée lors de la réussite de chaque étape

                    **Code final** ~80 lignes
                `
            },
            {
                title: "Détecter l'absence de mine",
                description: "La position des mines est définie par la variable <code>mines</code> déclarée par ce tutoriel ; ainsi, une mine <code>{x: 1, y: 1}</code> se situe en haut à gauche de la table de jeu, une mine <code>{x: 1, y: 10}</code> se situe en bas à gauche de la table de jeu.<br><br>Au clic sur n'importe quelle case, <code>.minesweeper td</code>, lui ajouter la classe <code>empty</code> si elle ne contient pas de mines.",
                solved: "var grid = {};<br><br>for (let i = 0; i < mines.length; i++) {<br>  var x = grid[mines[i].x];<br>  if (!x)<br>    grid[mines[i].x] = {};<br>  grid[mines[i].x][mines[i].y] = true;<br>}<br><br>var hasMine = function(grid, x, y) {<br>  return grid[x] && grid[x][y];<br>}<br><br>var check = function(grid, x, y) {<br>  var tr = document.querySelectorAll('tr')[y - 1];<br>  var td = tr && tr.querySelectorAll('td')[x - 1];<br>  if (!td || td.className !== '')<br>    return;<br><br>  if (!hasMine(grid, x, y)) {<br>    td.classList.add('empty');<br>  }<br>}<br><br>var trs = document.querySelectorAll('.minesweeper tr');<br>for (let y = 1; y <= trs.length; y++) {<br>  var tds = trs[y - 1].querySelectorAll('.minesweeper td');<br>  for (let x = 1; x <= tds.length; x++) {<br>    let td = tds[x - 1];<br>    td.addEventListener('click', function() {<br>      check(grid, x, y);<br>    });<br>  }<br>}",
                solvedOnSuccess: true,
                init: function() {
                    window.mines = this.mines = helpers.deepClone(dom.minesweeperMines());
                },
                dom: function() {
                    return dom.minesweeper();
                },
                solution: function() {
                    let tds = document.querySelectorAll('.minesweeper td');

                    let mine = dom.minesweeperGetCellNotBomb(this.mines);
                    let index = (mine.x - 1) + ((mine.y - 1) * 10);
                    tds[index].click();
                    if (!tds[index].classList.contains('empty'))
                        this.warn = this.warn || "Cliquer sur une case ne contenant pas de mine doit lui ajouter la classe <code>empty</code>";

                    tds[0].click();
                    if (tds[0].classList.contains('empty'))
                        this.warn = this.warn || "Cliquer sur une case contenant une mine ne doit pas lui ajouter la classe <code>empty</code>";
                    
                    return !this.warn;
                }
            },
            {
                title: "Détecter une mine",
                description: "Au clic sur n'importe quelle case, <code>.minesweeper td</code>, lui ajouter la classe <code>mine</code> si elle contient une mine.",
                solved: "var grid = {};<br><br>for (let i = 0; i < mines.length; i++) {<br>  var x = grid[mines[i].x];<br>  if (!x)<br>    grid[mines[i].x] = {};<br>  grid[mines[i].x][mines[i].y] = true;<br>}<br><br>var hasMine = function(grid, x, y) {<br>  return grid[x] && grid[x][y];<br>}<br><br>var check = function(grid, x, y) {<br>  var tr = document.querySelectorAll('tr')[y - 1];<br>  var td = tr && tr.querySelectorAll('td')[x - 1];<br>  if (!td || td.className !== '')<br>    return;<br><br>  if (hasMine(grid, x, y)) {<br>    td.classList.add('mine');<br>  } else {<br>    td.classList.add('empty');<br>  }<br>}<br><br>var trs = document.querySelectorAll('.minesweeper tr');<br>for (let y = 1; y <= trs.length; y++) {<br>  var tds = trs[y - 1].querySelectorAll('.minesweeper td');<br>  for (let x = 1; x <= tds.length; x++) {<br>    let td = tds[x - 1];<br>    td.addEventListener('click', function() {<br>      check(grid, x, y);<br>    });<br>  }<br>}",
                solvedOnSuccess: true,
                init: function() {
                    window.mines = this.mines = helpers.deepClone(dom.minesweeperMines());
                },
                dom: function() {
                    return dom.minesweeper();
                },
                solution: function() {
                    let tds = document.querySelectorAll('.minesweeper td');

                    let mine = this.mines[1];
                    let index = (mine.x - 1) + ((mine.y - 1) * 10);
                    tds[index].click();
                    if (!tds[index].classList.contains('mine'))
                        this.warn = this.warn || "Cliquer sur une case contenant une mine doit lui ajouter la classe <code>mine</code>";

                    tds[0].click();
                    if (tds[0].classList.contains('empty'))
                        this.warn = this.warn || "Cliquer sur une case contenant une mine ne doit pas lui ajouter la classe <code>empty</code>";
                    
                    return !this.warn;
                }
            },
            {
                title: "Réinitialiser la partie",
                description: "Enlever toutes les classes des cases, <code>.minesweeper td</code>, et vider leur <code>innerHTML</code> au clic sur le bouton « recommencer ».",
                solved: "var grid = {};<br><br>for (let i = 0; i < mines.length; i++) {<br>  var x = grid[mines[i].x];<br>  if (!x)<br>    grid[mines[i].x] = {};<br>  grid[mines[i].x][mines[i].y] = true;<br>}<br><br>var hasMine = function(grid, x, y) {<br>  return grid[x] && grid[x][y];<br>}<br><br>var check = function(grid, x, y) {<br>  var tr = document.querySelectorAll('tr')[y - 1];<br>  var td = tr && tr.querySelectorAll('td')[x - 1];<br>  if (!td || td.className !== '')<br>    return;<br><br>  if (hasMine(grid, x, y)) {<br>    td.classList.add('mine');<br>  } else {<br>    td.classList.add('empty');<br>  }<br>}<br><br>var trs = document.querySelectorAll('.minesweeper tr');<br>for (let y = 1; y <= trs.length; y++) {<br>  var tds = trs[y - 1].querySelectorAll('.minesweeper td');<br>  for (let x = 1; x <= tds.length; x++) {<br>    let td = tds[x - 1];<br>    td.addEventListener('click', function() {<br>      check(grid, x, y);<br>    });<br>  }<br>}<br><br>var button = document.querySelector('.minesweeper button');<br>button.addEventListener('click', function() {<br>  var tds = document.querySelectorAll('.minesweeper td');<br>  for (let i = 0; i < tds.length; i++) {<br>    tds[i].className = '';<br>    tds[i].innerHTML = '';<br>  }<br>});",
                solvedOnSuccess: true,
                init: function() {
                    window.mines = this.mines = helpers.deepClone(dom.minesweeperMines());
                },
                dom: function() {
                    return dom.minesweeper();
                },
                solution: function() {
                    let tds = document.querySelectorAll('.minesweeper td');

                    let mine = dom.minesweeperGetCellNotBomb(this.mines);
                    let index = (mine.x - 1) + ((mine.y - 1) * 10);
                    tds[index].click();
                    
                    let button = document.querySelector('.minesweeper .button');
                    button.click();

                    if (tds[index].className)
                        this.warn = this.warn || "Cliquer sur le bouton « recommencer » doit retirer les classes des toutes les cases";

                    return !this.warn;
                }
            },
            {
                title: "Compter les mines environnantes",
                description: "Au clic sur n'importe quelle case, <code>.minesweeper td</code>, si elle ne contient pas de mine mais que ses voisines directes (orthogonals et diagonals) en contiennent, ajouter le compte de mines voisines dans son <code>innerHTML</code>.",
                solved: "var grid = {};<br><br>for (let i = 0; i < mines.length; i++) {<br>  var x = grid[mines[i].x];<br>  if (!x)<br>    grid[mines[i].x] = {};<br>  grid[mines[i].x][mines[i].y] = true;<br>}<br><br>var hasMine = function(grid, x, y) {<br>  return grid[x] && grid[x][y];<br>}<br><br>var check = function(grid, x, y) {<br>  var tr = document.querySelectorAll('tr')[y - 1];<br>  var td = tr && tr.querySelectorAll('td')[x - 1];<br>  if (!td || td.className !== '')<br>    return;<br><br>  if (hasMine(grid, x, y)) {<br>    td.classList.add('mine');<br>  } else {<br>    var count = 0;<br>    if (hasMine(grid, x - 1, y - 1)) count++;<br>    if (hasMine(grid, x, y - 1)) count++;<br>    if (hasMine(grid, x + 1, y - 1)) count++;<br>    if (hasMine(grid, x - 1, y)) count++;<br>    if (hasMine(grid, x + 1, y)) count++;<br>    if (hasMine(grid, x - 1, y + 1)) count++;<br>    if (hasMine(grid, x, y + 1)) count++;<br>    if (hasMine(grid, x + 1, y + 1)) count++;<br><br>    td.classList.add('empty');<br>    if (count) {<br>      td.innerHTML = count;<br>    }<br>  }<br>}<br><br>var trs = document.querySelectorAll('.minesweeper tr');<br>for (let y = 1; y <= trs.length; y++) {<br>  var tds = trs[y - 1].querySelectorAll('.minesweeper td');<br>  for (let x = 1; x <= tds.length; x++) {<br>    let td = tds[x - 1];<br>    td.addEventListener('click', function() {<br>      check(grid, x, y);<br>    });<br>  }<br>}<br><br>var button = document.querySelector('.minesweeper button');<br>button.addEventListener('click', function() {<br>  var tds = document.querySelectorAll('.minesweeper td');<br>  for (let i = 0; i < tds.length; i++) {<br>    tds[i].className = '';<br>    tds[i].innerHTML = '';<br>  }<br>});",
                solvedOnSuccess: true,
                init: function() {
                    window.mines = this.mines = helpers.deepClone(dom.minesweeperMines());
                },
                dom: function() {
                    return dom.minesweeper();
                },
                solution: function() {
                    let tds = document.querySelectorAll('.minesweeper td');

                    let mine = dom.minesweeperGetEdgedCell(this.mines);
                    let count = dom.minesweeperGetCellCount(this.mines, mine.x, mine.y);

                    let index = (mine.x - 1) + ((mine.y - 1) * 10);
                    if (tds[index].innerHTML)
                        this.warn = this.warn || "Tant qu'elles n'ont pas été cliquées, les cases doivent rester vides";

                    tds[index].click();
                    if (tds[index].innerHTML !== String(count))
                        this.warn = this.warn || "Cliquer sur une case adjacente à des mines doit afficher le nombre de ses mines adjacentes dans son <code>innerHTML</code>";
                    
                    return !this.warn;
                }
            },
            {
                title: "Propager la découverte de cases vides",
                description: "Au clic sur n'importe quelle case vide, sans mine voisine, effectuer à nouveau le test sur toutes ses voisines directes (orthogonales et diagonales) et révéler ces cases. Si une cases à des mines adjacentes, elle affiche leur compte, mais ne découvre pas ses cases voisines.",
                solved: "var grid = {};<br><br>for (let i = 0; i < mines.length; i++) {<br>  var x = grid[mines[i].x];<br>  if (!x)<br>    grid[mines[i].x] = {};<br>  grid[mines[i].x][mines[i].y] = true;<br>}<br><br>var hasMine = function(grid, x, y) {<br>  return grid[x] && grid[x][y];<br>}<br><br>var check = function(grid, x, y) {<br>  var tr = document.querySelectorAll('tr')[y - 1];<br>  var td = tr && tr.querySelectorAll('td')[x - 1];<br>  if (!td || td.className !== '')<br>    return;<br><br>  if (hasMine(grid, x, y)) {<br>    td.classList.add('mine');<br>  } else {<br>    var count = 0;<br>    if (hasMine(grid, x - 1, y - 1)) count++;<br>    if (hasMine(grid, x, y - 1)) count++;<br>    if (hasMine(grid, x + 1, y - 1)) count++;<br>    if (hasMine(grid, x - 1, y)) count++;<br>    if (hasMine(grid, x + 1, y)) count++;<br>    if (hasMine(grid, x - 1, y + 1)) count++;<br>    if (hasMine(grid, x, y + 1)) count++;<br>    if (hasMine(grid, x + 1, y + 1)) count++;<br><br>    td.classList.add('empty');<br>    if (count) {<br>      td.innerHTML = count;<br>    } else {<br>      check(grid, x - 1, y - 1);<br>      check(grid, x, y - 1);<br>      check(grid, x + 1, y - 1);<br>      check(grid, x - 1, y);<br>      check(grid, x + 1, y);<br>      check(grid, x - 1, y + 1);<br>      check(grid, x, y + 1);<br>      check(grid, x + 1, y + 1);<br>    }<br>  }<br>}<br><br>var trs = document.querySelectorAll('.minesweeper tr');<br>for (let y = 1; y <= trs.length; y++) {<br>  var tds = trs[y - 1].querySelectorAll('.minesweeper td');<br>  for (let x = 1; x <= tds.length; x++) {<br>    let td = tds[x - 1];<br>    td.addEventListener('click', function() {<br>      check(grid, x, y);<br>    });<br>  }<br>}<br><br>var button = document.querySelector('.minesweeper button');<br>button.addEventListener('click', function() {<br>  var tds = document.querySelectorAll('.minesweeper td');<br>  for (let i = 0; i < tds.length; i++) {<br>    tds[i].className = '';<br>    tds[i].innerHTML = '';<br>  }<br>});",
                solvedOnSuccess: true,
                init: function() {
                    window.mines = this.mines = helpers.deepClone(dom.minesweeperMines());
                },
                dom: function() {
                    return dom.minesweeper();
                },
                solution: function() {
                    let tds = document.querySelectorAll('.minesweeper td');

                    let mine = dom.minesweeperGetCellEmpty(this.mines);
                    let index = (mine.x - 1) + ((mine.y - 1) * 10);
                    tds[index].click();
                    
                    let assertCount = function(x, y) {
                        if (x < 1 || x > 10 || y < 1 || y > 10)
                            return;

                        index = (x - 1) + ((y - 1) * 10);

                        let count = dom.minesweeperGetCellCount(this.mines, x, y);
                        if (count && tds[index].innerHTML !== String(count))
                            this.warn = this.warn || "Une mine adjacente à la mine cliquée si elle dispose elle-même de mines adjacentes, doit afficher ce nombre après propagation";
                        
                        if (tds[index].className !== 'empty')
                            this.warn = this.warn || "Les mines adjacentes à la mine cliquée doivent toutes posséder la classe <code>empty</code> après propagation";
                    }.bind(this);

                    assertCount(mine.x - 1, mine.y - 1);
                    assertCount(mine.x - 1, mine.y);
                    assertCount(mine.x - 1, mine.y + 1);
                    assertCount(mine.x, mine.y - 1);
                    assertCount(mine.x, mine.y + 1);
                    assertCount(mine.x + 1, mine.y - 1);
                    assertCount(mine.x + 1, mine.y);
                    assertCount(mine.x + 1, mine.y + 1);

                    return !this.warn;
                }
            },
            {
                title: "Arrêter la partie dès qu'une mine est révélée",
                description: "Au clic sur une case contenant une mine, il ne doit plus être possible de cliquer à nouveau sur une autre cas. Cliquer sur le bouton « Recommencer » permet alors de recommencer une partie, et rend les cases à nouveau cliquables.",
                solved: "var grid = {};<br>var losed = false;<br><br>for (let i = 0; i < mines.length; i++) {<br>  var x = grid[mines[i].x];<br>  if (!x)<br>    grid[mines[i].x] = {};<br>  grid[mines[i].x][mines[i].y] = true;<br>}<br><br>var hasMine = function(grid, x, y) {<br>  return grid[x] && grid[x][y];<br>}<br><br>var check = function(grid, x, y) {<br>  var tr = document.querySelectorAll('tr')[y - 1];<br>  var td = tr && tr.querySelectorAll('td')[x - 1];<br>  if (!td || td.className !== '')<br>    return;<br><br>  if (hasMine(grid, x, y)) {<br>    td.classList.add('mine');<br>    losed = true;<br>  } else {<br>    var count = 0;<br>    if (hasMine(grid, x - 1, y - 1)) count++;<br>    if (hasMine(grid, x, y - 1)) count++;<br>    if (hasMine(grid, x + 1, y - 1)) count++;<br>    if (hasMine(grid, x - 1, y)) count++;<br>    if (hasMine(grid, x + 1, y)) count++;<br>    if (hasMine(grid, x - 1, y + 1)) count++;<br>    if (hasMine(grid, x, y + 1)) count++;<br>    if (hasMine(grid, x + 1, y + 1)) count++;<br><br>    td.classList.add('empty');<br>    if (count) {<br>      td.innerHTML = count;<br>    } else {<br>      check(grid, x - 1, y - 1);<br>      check(grid, x, y - 1);<br>      check(grid, x + 1, y - 1);<br>      check(grid, x - 1, y);<br>      check(grid, x + 1, y);<br>      check(grid, x - 1, y + 1);<br>      check(grid, x, y + 1);<br>      check(grid, x + 1, y + 1);<br>    }<br>  }<br>}<br><br>var trs = document.querySelectorAll('.minesweeper tr');<br>for (let y = 1; y <= trs.length; y++) {<br>  var tds = trs[y - 1].querySelectorAll('.minesweeper td');<br>  for (let x = 1; x <= tds.length; x++) {<br>    let td = tds[x - 1];<br>    td.addEventListener('click', function() {<br>      if (losed)<br>        return;<br><br>      check(grid, x, y);<br>    });<br>  }<br>}<br><br>var button = document.querySelector('.minesweeper button');<br>button.addEventListener('click', function() {<br>  losed = false;<br><br>  var tds = document.querySelectorAll('.minesweeper td');<br>  for (let i = 0; i < tds.length; i++) {<br>    tds[i].className = '';<br>    tds[i].innerHTML = '';<br>  }<br>});",
                solvedOnSuccess: true,
                init: function() {
                    window.mines = this.mines = helpers.deepClone(dom.minesweeperMines());
                },
                dom: function() {
                    return dom.minesweeper();
                },
                solution: function() {
                    let tds = document.querySelectorAll('.minesweeper td');

                    tds[0].click();

                    let mine = dom.minesweeperGetCellNotBomb(this.mines);
                    let index = (mine.x - 1) + ((mine.y - 1) * 10);
                    tds[index].click();
                    if (tds[index].classList.contains('empty'))
                        this.warn = this.warn || "Cliquer sur une mine doit empêcher tout nouveau clic sur une autre case";

                    let button = document.querySelector('.minesweeper .button');
                    button.click();

                    tds[index].click();
                    if (!tds[index].classList.contains('empty'))
                        this.warn = this.warn || "Cliquer sur le bouton « recommencer » doit permettre de cliquer à nouveau sur les différentes cases";
                    
                    return !this.warn;
                }
            }
        ]
    }, {
        title: "Puzzle | Puissance 4",
        description: "Le puissance 4 est un jeu de réflexion pour 2 joueurs jouant à tour de rôle un jeton dans une colonne. Chaque jeton s'empile aux jetons précédement, le premier joueur à en aligner 4 remporte la partie.<br><br>Ce chapitre présente la réalisation d'un puissance 4 dont la solution est à déverouiller.",
        color: "grey",
        steps: [
            {
                course: true,
                description: `
                    Le puissance 4 est un jeu dont le but est d'aligner 4 pions de même couleur sur une grille.<br><br>Tour à tour les deux joueurs placent un pion de leur couleur dans la colonne de leur choix, le pion coulisse alors jusqu'à la position la plus basse possible ce ette colonne.<br><br>Le vainqueur est le joueur qui réalise le premier un alignement (horizontal, vertical ou diagonal) consécutif d'au moins quatre pions de sa couleur.
                    
                    <br>

                    ---

                    <br>

                    **Prérequis** ${helpers.chapterLabel(4, 'Les tableaux', 'green')} ${helpers.chapterLabel(8, 'Le DOM', 'yellow')} ${helpers.chapterLabel(10, 'Les fonctions', 'yellow')}

                    **Solution** débloquée lors de la réussite de chaque étape

                    **Code final** ~100 lignes (sans les diagonales), ~150 lignes (avec)
                `
            },
            {
                title: "Ajouter un jeton alternativement jaune puis rouge",
                description: "Au clic sur n'importe quel <code>td</code> d'une colonne, ajouter au <code>td</code> en pied de cette colonne la classe <code>yellow</code> ou <code>red</code> alternativement (si il n'a pas de classe). Au fur et à mesure des clics, les jetons s'empilent ainsi les uns sur les autres. Si une colonne est remplie, elle ne reçoit plus de jeton au clic.",
                solved: "var grid = [<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0]<br>];<br><br>var color = 'red';<br><br>var forEachCell = function (fn) {<br>  var trs = document.querySelectorAll('table tr');<br>  for (var row = 0; row < trs.length; row++) {<br>    var tr = trs[row];<br>    var tds = tr.querySelectorAll('td');<br>    for (var column = 0; column < tds.length; column++) {<br>      var td = tds[column];<br>      fn(td, row, column);<br>    }<br>  }<br>}<br><br>forEachCell(function (td, row, column) {<br>  td.addEventListener('click', function () {<br>    for (var i = 5; i >= 0; i--) {<br>      if (grid[i][column]) continue;<br><br>      color = (color === 'yellow' ? 'red' : 'yellow');<br>      grid[i][column] = color;<br><br>      forEachCell(function (td, row, column) {<br>        if (grid[row][column])<br>          td.className = grid[row][column];<br>      });<br><br>      break;<br>    }<br>  });<br>});",
                solvedOnSuccess: true,
                dom: function() {
                    return dom.connectfour();
                },
                solution: function() {
                    var cell = function(tr, td) {
                        return document.querySelector('table tr:nth-child(' + tr + ') td:nth-child(' + td + ')');
                    }

                    cell(1, 1).click();
                    cell(1, 1).click();
                    cell(1, 1).click();
                    cell(1, 2).click();

                    if (helpers.elHasClass(cell(6, 1), 'yellow') !== true)
                        this.warn = this.warn || "Après un clic sur la première colonne, le pion de la première case de cette colonne doit être jaune";
                    if (helpers.elHasClass(cell(5, 1), 'red') !== true)
                        this.warn = this.warn || "Après un clic sur la première colonne, le pion de la deuxième case de cette colonne doit être rouge";
                    if (helpers.elHasClass(cell(4, 1), 'yellow') !== true)
                        this.warn = this.warn || "Après un clic sur la première colonne, le pion de la troisième case de cette colonne doit être jaune";
                    if (helpers.elHasClass(cell(6, 2), 'red') !== true)
                        this.warn = this.warn || "Après un clic sur la première colonne, le pion de la quatrième case de cette colonne doit être rouge";
                    return !this.warn;
                }
            },
            {
                title: "Combinaison horizontale gagnante",
                description: "Lorsque 4 jetons consécutifs de la même couleur sont alignés horizontalement, leur ajouter la classe <code>victory</code>. Les clics suivants sur la table n'ajoutent plus de jetons.",
                solved: "var grid = [<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0]<br>];<br><br>var color = 'red';<br>var winner = false;<br><br>var forEachCell = function (fn) {<br>  var trs = document.querySelectorAll('table tr');<br>  for (var row = 0; row < trs.length; row++) {<br>    var tr = trs[row];<br>    var tds = tr.querySelectorAll('td');<br>    for (var column = 0; column < tds.length; column++) {<br>      var td = tds[column];<br>      fn(td, row, column);<br>    }<br>  }<br>}<br><br>var checkVictory = function () {<br>  winner = isHorizontalWinner();<br>  if (winner) {<br>    for (var i = 0; i < winner.length; i++) {<br>      var position = winner[i].split('-');<br>      grid[position[0]][position[1]] += ' victory';<br>    }<br>  }<br>};<br><br>var isHorizontalWinner = function () {<br>  var player, positions;<br>  for (var row = 5; row >= 0; row--) {<br>    positions = []<br>    for (var column = 0; column < 7; column++) {<br>      var color = grid[row][column];<br>      if (!color || player !== color) positions = [];<br>      if (!color) continue;<br><br>      positions.push(row + '-' + column);<br><br>      if (positions.length >= 4) return positions;<br>      player = color;<br>    }<br>  }<br>  return;<br>};<br><br>forEachCell(function (td, row, column) {<br>  td.addEventListener('click', function () {<br>    if (winner)<br>      return;<br><br>    for (var i = 5; i >= 0; i--) {<br>      if (grid[i][column]) continue;<br><br>      color = (color === 'yellow' ? 'red' : 'yellow');<br>      grid[i][column] = color;<br><br>      checkVictory();<br><br>      forEachCell(function (td, row, column) {<br>        if (grid[row][column])<br>          td.className = grid[row][column];<br>      });<br><br>      break;<br>    }<br>  });<br>});",
                solvedOnSuccess: true,
                dom: function() {
                    return dom.connectfour();
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
                    basic = basic && helpers.elHasClass(cell(5, 1), 'victory');
                    basic = basic && helpers.elHasClass(cell(5, 2), 'victory');
                    basic = basic && helpers.elHasClass(cell(5, 3), 'victory');
                    basic = basic && helpers.elHasClass(cell(5, 4), 'victory');
                    basic = basic && !helpers.elHasClass(cell(4, 4), 'red');

                    if (!basic)
                        this.warn = "Les combinaisons horizontales gagnantes doivent fonctionner";
                    return basic;
                }
            },
            {
                title: "Combinaison verticale gagnante",
                description: "Faire de même lorsque 4 jetons sont alignés verticalement.",
                solved: "var grid = [<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0]<br>];<br><br>var color = 'red';<br>var winner = false;<br><br>var forEachCell = function (fn) {<br>  var trs = document.querySelectorAll('table tr');<br>  for (var row = 0; row < trs.length; row++) {<br>    var tr = trs[row];<br>    var tds = tr.querySelectorAll('td');<br>    for (var column = 0; column < tds.length; column++) {<br>      var td = tds[column];<br>      fn(td, row, column);<br>    }<br>  }<br>}<br><br>var checkVictory = function () {<br>  winner = isHorizontalWinner() || isVerticalWinner();<br>  if (winner) {<br>    for (var i = 0; i < winner.length; i++) {<br>      var position = winner[i].split('-');<br>      grid[position[0]][position[1]] += ' victory';<br>    }<br>  }<br>};<br><br>var isHorizontalWinner = function () {<br>  var player, positions;<br>  for (var row = 5; row >= 0; row--) {<br>    positions = []<br>    for (var column = 0; column < 7; column++) {<br>      var color = grid[row][column];<br>      if (!color || player !== color) positions = [];<br>      if (!color) continue;<br><br>      positions.push(row + '-' + column);<br><br>      if (positions.length >= 4) return positions;<br>      player = color;<br>    }<br>  }<br>  return;<br>};<br><br>var isVerticalWinner = function () {<br>  var player, positions;<br>  for (var column = 0; column < 7; column++) {<br>    positions = [];<br>    for (var row = 5; row >= 0; row--) {<br>      var color = grid[row][column];<br>      if (!color || player !== color) positions = [];<br>      if (!color) continue;<br><br>      positions.push(row + '-' + column);<br><br>      if (positions.length >= 4) return positions;<br>      player = color;<br>    }<br>  }<br>  return;<br>};<br><br>forEachCell(function (td, row, column) {<br>  td.addEventListener('click', function () {<br>    if (winner)<br>      return;<br><br>    for (var i = 5; i >= 0; i--) {<br>      if (grid[i][column]) continue;<br><br>      color = (color === 'yellow' ? 'red' : 'yellow');<br>      grid[i][column] = color;<br><br>      checkVictory();<br><br>      forEachCell(function (td, row, column) {<br>        if (grid[row][column])<br>          td.className = grid[row][column];<br>      });<br><br>      break;<br>    }<br>  });<br>});",
                solvedOnSuccess: true,
                dom: function() {
                    return dom.connectfour();
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
                    basic = basic && helpers.elHasClass(cell(6, 1), 'victory');
                    basic = basic && helpers.elHasClass(cell(5, 1), 'victory');
                    basic = basic && helpers.elHasClass(cell(4, 1), 'victory');
                    basic = basic && helpers.elHasClass(cell(3, 1), 'victory');
                    basic = basic && !helpers.elHasClass(cell(6, 2), 'victory');
                    basic = basic && !helpers.elHasClass(cell(5, 2), 'victory');
                    basic = basic && helpers.elHasClass(cell(4, 2), 'red');
                    basic = basic && !helpers.elHasClass(cell(3, 2), 'red');

                    if (!basic)
                        this.warn = "Les combinaisons verticales gagnantes doivent fonctionner";
                    return basic;
                }
            },
            {
                title: "Combinaison diagonale gagnante",
                description: "Faire de même lorsque 4 jetons sont alignés diagonalement (d'en bas à gauche à en haut à droite).",
                solved: "var grid = [<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0]<br>];<br><br>var color = 'red';<br>var winner = false;<br><br>var forEachCell = function (fn) {<br>  var trs = document.querySelectorAll('table tr');<br>  for (var row = 0; row < trs.length; row++) {<br>    var tr = trs[row];<br>    var tds = tr.querySelectorAll('td');<br>    for (var column = 0; column < tds.length; column++) {<br>      var td = tds[column];<br>      fn(td, row, column);<br>    }<br>  }<br>}<br><br>var checkVictory = function () {<br>  winner = isHorizontalWinner() || isVerticalWinner() || isDiagonalWinner();<br>  if (winner) {<br>    for (var i = 0; i < winner.length; i++) {<br>      var position = winner[i].split('-');<br>      grid[position[0]][position[1]] += ' victory';<br>    }<br>  }<br>};<br><br>var isHorizontalWinner = function (customGrid) {<br>  var player, positions;<br>  for (var row = 5; row >= 0; row--) {<br>    positions = []<br>    for (var column = 0; column < 7; column++) {<br>      var color = grid[row][column];<br>      if (!color || player !== color) positions = [];<br>      if (!color) continue;<br><br>      positions.push(row + '-' + column);<br><br>      if (positions.length >= 4) return positions;<br>      player = color;<br>    }<br>  }<br>  return;<br>};<br><br>var isVerticalWinner = function (customGrid) {<br>  customGrid = customGrid || grid;<br><br>  var player, positions;<br>  for (var column = 0; column < 7; column++) {<br>    positions = [];<br>    for (var row = 5; row >= 0; row--) {<br>      var color = customGrid[row][column];<br>      if (!color || player !== color) positions = [];<br>      if (!color) continue;<br><br>      positions.push(row + '-' + column);<br><br>      if (positions.length >= 4) return positions;<br>      player = color;<br>    }<br>  }<br>  return;<br>};<br><br>var isDiagonalWinner = function () {<br>  var grid45Left = [];<br>  for (var row = 5; row >= 0; row--) {<br>    for (var column = 0; column < 7; column++) {<br>      var shift = 5 - row;<br>      if (!grid45Left[row])<br>        grid45Left[row] = [];<br>      grid45Left[row][column - shift] = grid[row][column];<br>    }<br>  }<br>  var positions = isVerticalWinner(grid45Left);<br>  if (positions) {<br>    for (let i = 0; i < positions.length; i++) {<br>      var cell = positions[i].split('-');<br>      var row = Math.floor(cell[0]);<br>      var column = Math.floor(cell[1]);<br>      switch(row) {<br>        case 4: column += 1; break;<br>        case 3: column += 2; break;<br>        case 2: column += 3; break;<br>        case 1: column += 4; break;<br>        case 0: column += 5; break;<br>      }<br>      positions[i] = row + '-' + column;<br>    }<br>  }<br>  return positions;<br>}<br><br>forEachCell(function (td, row, column) {<br>  td.addEventListener('click', function () {<br>    if (winner)<br>      return;<br><br>    for (var i = 5; i >= 0; i--) {<br>      if (grid[i][column]) continue;<br><br>      color = (color === 'yellow' ? 'red' : 'yellow');<br>      grid[i][column] = color;<br><br>      checkVictory();<br><br>      forEachCell(function (td, row, column) {<br>        if (grid[row][column])<br>          td.className = grid[row][column];<br>      });<br><br>      break;<br>    }<br>  });<br>});",
                solvedOnSuccess: true,
                dom: function() {
                    return dom.connectfour();
                },
                solution: function() {
                    var cell = function(tr, td) {
                        return document.querySelector('table tr:nth-child(' + tr + ') td:nth-child(' + td + ')');
                    }

                    cell(1, 1).click(); cell(1, 2).click();
                    cell(1, 2).click(); cell(1, 3).click();
                    cell(1, 4).click(); cell(1, 3).click();
                    cell(1, 3).click(); cell(1, 4).click();
                    cell(1, 4).click(); cell(1, 5).click();
                    cell(1, 4).click(); cell(1, 4).click();

                    var basic = true;
                    basic = basic && helpers.elHasClass(cell(6, 1), 'victory');
                    basic = basic && helpers.elHasClass(cell(5, 2), 'victory');
                    basic = basic && helpers.elHasClass(cell(4, 3), 'victory');
                    basic = basic && helpers.elHasClass(cell(3, 4), 'victory');
                    basic = basic && !helpers.elHasClass(cell(6, 2), 'victory');
                    basic = basic && !helpers.elHasClass(cell(5, 3), 'victory');
                    basic = basic && helpers.elHasClass(cell(6, 1), 'yellow');
                    basic = basic && !helpers.elHasClass(cell(6, 2), 'yellow');

                    if (!basic)
                        this.warn = "Les combinaisons diagonales bas gauche haut droite gagnantes doivent fonctionner";

                    return basic;
                }
            },
            {
                title: "Combinaison diagonale gagnante (suite)",
                description: "Faire de même lorsque 4 jetons sont alignés diagonalement (d'en bas à droite à en haut à gauche).",
                solved: "var grid = [<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0],<br>  [0, 0, 0, 0, 0, 0, 0]<br>];<br><br>var color = 'red';<br>var winner = false;<br><br>var forEachCell = function (fn) {<br>  var trs = document.querySelectorAll('table tr');<br>  for (var row = 0; row < trs.length; row++) {<br>    var tr = trs[row];<br>    var tds = tr.querySelectorAll('td');<br>    for (var column = 0; column < tds.length; column++) {<br>      var td = tds[column];<br>      fn(td, row, column);<br>    }<br>  }<br>}<br><br>var checkVictory = function () {<br>  winner = isHorizontalWinner() || isVerticalWinner() || isDiagonalWinner();<br>  if (winner) {<br>    for (var i = 0; i < winner.length; i++) {<br>      var position = winner[i].split('-');<br>      grid[position[0]][position[1]] += ' victory';<br>    }<br>  }<br>};<br><br>var isHorizontalWinner = function (customGrid) {<br>  var player, positions;<br>  for (var row = 5; row >= 0; row--) {<br>    positions = []<br>    for (var column = 0; column < 7; column++) {<br>      var color = grid[row][column];<br>      if (!color || player !== color) positions = [];<br>      if (!color) continue;<br><br>      positions.push(row + '-' + column);<br><br>      if (positions.length >= 4) return positions;<br>      player = color;<br>    }<br>  }<br>  return;<br>};<br><br>var isVerticalWinner = function (customGrid) {<br>  customGrid = customGrid || grid;<br><br>  var player, positions;<br>  for (var column = 0; column < 7; column++) {<br>    positions = [];<br>    for (var row = 5; row >= 0; row--) {<br>      var color = customGrid[row][column];<br>      if (!color || player !== color) positions = [];<br>      if (!color) continue;<br><br>      positions.push(row + '-' + column);<br><br>      if (positions.length >= 4) return positions;<br>      player = color;<br>    }<br>  }<br>  return;<br>};<br><br>var isDiagonalWinner = function () {<br>  var grid45Left = [];<br>  for (var row = 5; row >= 0; row--) {<br>    for (var column = 0; column < 7; column++) {<br>      var shift = 5 - row;<br>      if (!grid45Left[row])<br>        grid45Left[row] = [];<br>      grid45Left[row][column - shift] = grid[row][column];<br>    }<br>  }<br>  var positions = isVerticalWinner(grid45Left);<br>  if (positions) {<br>    for (let i = 0; i < positions.length; i++) {<br>      var cell = positions[i].split('-');<br>      var row = Math.floor(cell[0]);<br>      var column = Math.floor(cell[1]);<br>      switch(row) {<br>        case 4: column += 1; break;<br>        case 3: column += 2; break;<br>        case 2: column += 3; break;<br>        case 1: column += 4; break;<br>        case 0: column += 5; break;<br>      }<br>      positions[i] = row + '-' + column;<br>    }<br>    return positions;<br>  }<br><br>  var grid45Right = [];<br>  for (var row = 5; row >= 0; row--) {<br>    for (var column = 0; column < 7; column++) {<br>      var shift = 5 - row;<br>      if (!grid45Left[row])<br>        grid45Left[row] = [];<br>      grid45Left[row][column + shift] = grid[row][column];<br>    }<br>  }<br>  var positions = isVerticalWinner(grid45Left);<br>  if (positions) {<br>    for (let i = 0; i < positions.length; i++) {<br>      var cell = positions[i].split('-');<br>      var row = Math.floor(cell[0]);<br>      var column = Math.floor(cell[1]);<br>      switch(row) {<br>        case 4: column -= 1; break;<br>        case 3: column -= 2; break;<br>        case 2: column -= 3; break;<br>        case 1: column -= 4; break;<br>        case 0: column -= 5; break;<br>      }<br>      positions[i] = row + '-' + column;<br>    }<br>  }<br>  <br>  return positions;<br>}<br><br>forEachCell(function (td, row, column) {<br>  td.addEventListener('click', function () {<br>    if (winner)<br>      return;<br><br>    for (var i = 5; i >= 0; i--) {<br>      if (grid[i][column]) continue;<br><br>      color = (color === 'yellow' ? 'red' : 'yellow');<br>      grid[i][column] = color;<br><br>      checkVictory();<br><br>      forEachCell(function (td, row, column) {<br>        if (grid[row][column])<br>          td.className = grid[row][column];<br>      });<br><br>      break;<br>    }<br>  });<br>});",
                solvedOnSuccess: true,
                dom: function() {
                    return dom.connectfour();
                },
                solution: function() {
                    var cell = function(tr, td) {
                        return document.querySelector('table tr:nth-child(' + tr + ') td:nth-child(' + td + ')');
                    }

                    cell(1, 7).click(); cell(1, 6).click();
                    cell(1, 6).click(); cell(1, 5).click();
                    cell(1, 4).click(); cell(1, 5).click();
                    cell(1, 5).click(); cell(1, 4).click();
                    cell(1, 4).click(); cell(1, 3).click();
                    cell(1, 4).click(); cell(1, 4).click();

                    var basic = true;
                    basic = basic && helpers.elHasClass(cell(6, 7), 'victory');
                    basic = basic && helpers.elHasClass(cell(5, 6), 'victory');
                    basic = basic && helpers.elHasClass(cell(4, 5), 'victory');
                    basic = basic && helpers.elHasClass(cell(3, 4), 'victory');
                    basic = basic && !helpers.elHasClass(cell(6, 6), 'victory');
                    basic = basic && !helpers.elHasClass(cell(5, 5), 'victory');
                    basic = basic && helpers.elHasClass(cell(6, 7), 'yellow');
                    basic = basic && !helpers.elHasClass(cell(6, 6), 'yellow');

                    if (!basic)
                        this.warn = this.warn || "Les combinaisons diagonales bas droite haut gauche gagnantes doivent fonctionner";

                    return basic;
                }
            }
        ]
    }, {
        title: "Puzzle | Taquin",
        description: "Le taquin est ce puzzle en plastique à résoudre du bout des pouces. Une pièce peut être glissée horizontalement ou verticalement pour venir prendre la place de l'espace libre.<br><br>Ce chapitre présente la réalisation d'un taquin dont la solution est à déverrouiller.",
        color: "grey",
        steps: [
            {
                course: true,
                description: `
                    Le taquin est un jeu solitaire en forme de damier qui consiste à remettre dans l'ordre des carreaux à partir d'une configuration initiale quelconque. Un des carreaux est manquant, permettant ainsi de glisser un carreau horizontalement ou verticalement à sa place.

                    <br>

                    ---

                    <br>

                    **Prérequis** ${helpers.chapterLabel(4, 'Les tableaux', 'green')} ${helpers.chapterLabel(8, 'Le DOM', 'yellow')} ${helpers.chapterLabel(10, 'Les fonctions', 'yellow')}

                    **Solution** débloquée lors de la réussite de chaque étape

                    **Code final** ~80 lignes
                `
            },
            {
                title: "Mélanger les cases",
                description: "Mélanger les 9 <code>li</code> du puzzle listés dans <code>.sliding ul</code> au clic sur le bouton « mélanger ».",
                excerpt: "La méthode <code>Math.floor(Math.random() * 9)</code> retourne un nombre aléatoire entre 0 et 8.",
                solved: "var shuffle = function(o){<br>  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);<br>  return o;<br>}<br><br>var render = function(matrix) {<br>  var ul = document.querySelector('.sliding ul');<br>  ul.innerHTML = '';<br><br>  var squares = [].concat(matrix[0], matrix[1], matrix[2])<br>  for (var square of squares) {<br>    var li = document.createElement('li');<br>    li.className = 'square' + square;<br>    ul.appendChild(li);<br>  }<br>}<br><br>document.querySelector('.sliding button').addEventListener('click', function() {<br>  var squares = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);<br>  var matrix = [<br>    [squares[0], squares[1], squares[2]],<br>    [squares[3], squares[4], squares[5]],<br>    [squares[6], squares[7], squares[8]]<br>  ];<br>  render(matrix);<br>});",
                solvedOnSuccess: true,
                dom: function() {
                    return dom.sliding();
                },
                solution: function() {
                    let classNames = helpers.getClassNames('.sliding li');

                    if (classNames.length !== 9)
                        this.warn = this.warn || "Le puzzle doit contenir 9 <code>li</code>";
                    if (helpers.equals(classNames, ['square1', 'square2', 'square0', 'square3', 'square4', 'square5', 'square6', 'square7', 'square8']) !== true)
                        this.warn = this.warn || "Les cases doivent être dans l'ordre avant le mélange";

                    let button = document.querySelector('.sliding button');
                    button.click();

                    classNames = helpers.getClassNames('.sliding li');
                    if (classNames.length !== 9)
                        this.warn = this.warn || "Le puzzle doit contenir 9 <code>li</code>";
                    if (helpers.equals(classNames, ['square1', 'square2', 'square0', 'square3', 'square4', 'square5', 'square6', 'square7', 'square8']) !== false)
                        this.warn = this.warn || "Les cases doivent être dans le désordre après le mélange";
                    if (helpers.equalsContent(classNames, ['square1', 'square2', 'square0', 'square3', 'square4', 'square5', 'square6', 'square7', 'square8']) !== true)
                        this.warn = this.warn || "Les cases doivent toutes être présentes, sans doublon";

                    return !this.warn;
                }
            },
            {
                title: "Gérer le déplacement horizontal d'une case",
                description: "Au clic sur une case, celle-ci doit être intervertie avec la case vide <code>.square0</code> à condition que l'une et l'autre soit à côté horizontalement (et pas en diagonale).",
                excerpt: "Stocker l'état du puzzle dans une variable (une matrice de préférence — un tableau de tableaux, 3 lignes, 3 colonnes), et trouver une façon condensée pour lister quelles cases sont accessibles à partir d'une autre case. Se concentrer pour l'instant sur les mouvements horizontaux.",
                solved: "var shuffle = function(o){<br>  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);<br>  return o;<br>}<br><br>var render = function(matrix) {<br>  var ul = document.querySelector('.sliding ul');<br>  ul.innerHTML = '';<br><br>  var squares = [].concat(matrix[0], matrix[1], matrix[2])<br>  for (var square of squares) {<br>    var li = document.createElement('li');<br>    li.className = 'square' + square;<br>    li.setAttribute('data-id', square);<br>    li.addEventListener('click', function() {<br>      move(matrix, parseInt(this.getAttribute('data-id')));<br>    });<br>    ul.appendChild(li);<br>  }<br>}<br>var move = function(matrix, square) {<br>  if (square === 0)<br>    return false;<br>  if (matrix[0][0] === square)<br>    canToggle(matrix, [0, 0], [[0, 1]]);<br>  else if (matrix[0][1] === square)<br>    canToggle(matrix, [0, 1], [[0, 0], [0, 2]]);<br>  else if (matrix[0][2] === square)<br>    canToggle(matrix, [0, 2], [[0, 1]]);<br>  else if (matrix[1][0] === square)<br>    canToggle(matrix, [1, 0], [[1, 1]]);<br>  else if (matrix[1][1] === square)<br>    canToggle(matrix, [1, 1], [[1, 0], [1, 2]]);<br>  else if (matrix[1][2] === square)<br>    canToggle(matrix, [1, 2], [[1, 1]]);<br>  else if (matrix[2][0] === square)<br>    canToggle(matrix, [2, 0], [[2, 1]]);<br>  else if (matrix[2][1] === square)<br>    canToggle(matrix, [2, 1], [[2, 0], [2, 2]]);<br>  else if (matrix[2][2] === square)<br>    canToggle(matrix, [2, 2], [[2, 1]]);<br>}<br>var canToggle = function(matrix, from, combinaisons) {<br>  for (var c of combinaisons) {<br>    if (matrix[c[0]][c[1]] === 0) {<br>      toggle(matrix, [from[0], from[1]], [c[0], c[1]]);<br>      break;<br>    }<br>  }<br>}<br>var toggle = function(matrix, from, to) {<br>  var memo = matrix[from[0]][from[1]];<br>  matrix[from[0]][from[1]] = matrix[to[0]][to[1]];<br>  matrix[to[0]][to[1]] = memo;<br>  render(matrix);<br>}<br><br>document.querySelector('.sliding button').addEventListener('click', function() {<br>  var squares = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);<br>  var matrix = [<br>    [squares[0], squares[1], squares[2]],<br>    [squares[3], squares[4], squares[5]],<br>    [squares[6], squares[7], squares[8]]<br>  ];<br>  render(matrix);<br>});",
                solvedOnSuccess: true,
                dom: function() {
                    return dom.sliding();
                },
                solution: function() {
                    let button = document.querySelector('.sliding button');
                    button.click();

                    // click on possible
                    let classNames = helpers.getClassNames('.sliding li');
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

                    classNames = helpers.getClassNames('.sliding li');

                    let basic = true;
                    basic = basic && helpers.equals(expected, classNames);

                    // click on empty
                    expected = classNames.slice(0);
                    position = classNames.indexOf('square0') + 1;
                    document.querySelector(`.sliding li:nth-child(${position})`).click();
                    classNames = helpers.getClassNames('.sliding li');
                    basic = basic && helpers.equals(expected, classNames);

                    // click on impossible
                    expected = classNames.slice(0);
                    position = classNames.indexOf('square0');
                    position = ((position + 4) % 9) + 1;
                    document.querySelector(`.sliding li:nth-child(${position})`).click();
                    classNames = helpers.getClassNames('.sliding li');
                    basic = basic && helpers.equals(expected, classNames);

                    if (!basic)
                        this.warn = "Le déplacement horizontal d'une case doit fonctionner";
                    return basic;
                }
            },
            {
                title: "Gérer le déplacement vertical d'une case",
                description: "Au clic sur une case, celle-ci doit être intervertie avec la case vide <code>.square0</code> à condition que l'une et l'autre soit à côté verticalement (et pas en diagonale).",
                solved: "var shuffle = function(o){<br>  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);<br>  return o;<br>}<br><br>var render = function(matrix) {<br>  var ul = document.querySelector('.sliding ul');<br>  ul.innerHTML = '';<br><br>  var squares = [].concat(matrix[0], matrix[1], matrix[2])<br>  for (var square of squares) {<br>    var li = document.createElement('li');<br>    li.className = 'square' + square;<br>    li.setAttribute('data-id', square);<br>    li.addEventListener('click', function() {<br>      move(matrix, parseInt(this.getAttribute('data-id')));<br>    });<br>    ul.appendChild(li);<br>  }<br>}<br>var move = function(matrix, square) {<br>  if (square === 0)<br>    return false;<br>  if (matrix[0][0] === square)<br>    canToggle(matrix, [0, 0], [[0, 1], [1, 0]]);<br>  else if (matrix[0][1] === square)<br>    canToggle(matrix, [0, 1], [[0, 0], [1, 1], [0, 2]]);<br>  else if (matrix[0][2] === square)<br>    canToggle(matrix, [0, 2], [[0, 1], [1, 2]]);<br>  else if (matrix[1][0] === square)<br>    canToggle(matrix, [1, 0], [[0, 0], [1, 1], [2, 0]]);<br>  else if (matrix[1][1] === square)<br>    canToggle(matrix, [1, 1], [[0, 1], [1, 0], [1, 2], [2, 1]]);<br>  else if (matrix[1][2] === square)<br>    canToggle(matrix, [1, 2], [[0, 2], [1, 1], [2, 2]]);<br>  else if (matrix[2][0] === square)<br>    canToggle(matrix, [2, 0], [[1, 0], [2, 1]]);<br>  else if (matrix[2][1] === square)<br>    canToggle(matrix, [2, 1], [[2, 0], [1, 1], [2, 2]]);<br>  else if (matrix[2][2] === square)<br>    canToggle(matrix, [2, 2], [[2, 1], [1, 2]]);<br>}<br>var canToggle = function(matrix, from, combinaisons) {<br>  for (var c of combinaisons) {<br>    if (matrix[c[0]][c[1]] === 0) {<br>      toggle(matrix, [from[0], from[1]], [c[0], c[1]]);<br>      break;<br>    }<br>  }<br>}<br>var toggle = function(matrix, from, to) {<br>  var memo = matrix[from[0]][from[1]];<br>  matrix[from[0]][from[1]] = matrix[to[0]][to[1]];<br>  matrix[to[0]][to[1]] = memo;<br>  render(matrix);<br>}<br><br>document.querySelector('.sliding button').addEventListener('click', function() {<br>  var squares = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);<br>  var matrix = [<br>    [squares[0], squares[1], squares[2]],<br>    [squares[3], squares[4], squares[5]],<br>    [squares[6], squares[7], squares[8]]<br>  ];<br>  render(matrix);<br>});",
                solvedOnSuccess: true,
                dom: function() {
                    return dom.sliding();
                },
                solution: function() {
                    let button = document.querySelector('.sliding button');
                    button.click();

                    // click on possible
                    let classNames = helpers.getClassNames('.sliding li');
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

                    classNames = helpers.getClassNames('.sliding li');

                    let basic = true;
                    basic = basic && helpers.equals(expected, classNames);

                    if (!basic)
                        this.warn = "Le déplacement vertical d'une case doit fonctionner";
                    return basic;
                }
            }
        ]
    }, {
        title: "Applications | Carte",
        description: "Les cartes affichent les rues, les adresses, les itinéraires et les points d'intérêt, très utiles sur mobile. À l'aide de la géolocalisation (gps et wifi notamment>), elles peuvent également afficher la position de l'utilisateur.<br><br>Ce chapitre présente l'utilisation des cartes google pas à pas.",
        color: "teal",
        steps: [
            {
                title: "Afficher une carte",
                description: "Créer une variable <code>map</code> et l'initialiser avec une carte de <a target=\"_blank\" href=\"https://developers.google.com/maps/\">la librairie google maps</a>. L'afficher dans la balise <code>.map</code>, la centrer sur Paris (lat: 48.86, lng: 2.35) et zoomer x12.",
                excerpt: "<strong>Ne pas utiliser la propriété <code>async</code> du script ni son <code>callback</code></strong>. Bien qu'il s'agisse de la méthode classique pour manipuler une carte google (l'affichage de la carte ne bloque pas le chargement du reste de la page), cette méthode n'est pas compatible avec ce tutoriel. Sans callback, le script de la librairie doit être avant le script qui l'utilise, et ce dernier n'a pas besoin d'une fonction englobante (puisque la page est bloquée tant que google maps n'est pas chargé), et peut être directement déclaré <code>var map = new google.maps.Map(..)</code>.<br><br>Il est possible d'obtenir une clé d'usage via la documentation (les librairies ont courament des clés afin d'effectuer un suivi / limite d'usage).",
                solved: "/* à ajouter avant le script principal<br>&lt;script src=\"https://maps.googleapis.com/maps/api/js?key=\"&gt;&lt;/script&gt;<br>*/<br>var map = new google.maps.Map(document.querySelector('.map'), {<br>  center: {lat: 48.86, lng: 2.35},<br>  scrollwheel: false,<br>  zoom: 12<br>});",
                dom: function() {
                    return dom.maps();
                },
                solution: function() {
                    if (!map)
                        return;

                    return dom.mapsWait().then(function() {
                        if (dom.near({lat: map.center.lat(), lng: map.center.lng()}, {lat: 48.86, lng: 2.35}) !== true)
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
                    return dom.maps();
                },
                solution: function() {
                    if (!map || !marker)
                        return;

                    return dom.mapsWait().then(function() {
                        if (dom.near({lat: marker.position.lat(), lng: marker.position.lng()}, {lat: 48.8583, lng: 2.3353}) !== true)
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
                    return dom.maps(true);
                },
                solution: function() {
                    if (!map || !marker)
                        return;

                    return dom.mapsWait().then(function() {
                        google.maps.event.trigger(marker, 'click');

                        let basic = true;
                        if (helpers.elContains(document.querySelector('.gm-style-iw div div'), 'Le Pont des Arts') !== true)
                            this.warn = this.warn || "Le popin doit afficher « Le Pont des Arts »";

                        google.maps.event.trigger(map, 'click');
                        if (helpers.elContains(document.querySelector('.gm-style-iw div div'), 'Le Pont des Arts') !== false)
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
                    return dom.maps(true);
                },
                solution: function() {
                    if (!map || !marker)
                        return;

                    return dom.mapsWait().then(function() {
                        let input = document.querySelector('.places input');

                        if (dom.near({lat: marker.position.lat(), lng: marker.position.lng()}, {lat: 48.8583, lng: 2.3353}) !== true)
                            this.warn = this.warn || "Le marqueur doit être positionné proche de <code>{lat: 48.8583, lng: 2.3353}</code>";

                        input.value = '29 Rue des Trois Frères';
                        helpers.keypress(input, 13);

                        return Promise
                        .resolve()
                        .then(function() {
                            // wait for the geocoder
                            return new Promise(function(res, rej) { setTimeout(res, 100); });
                        })
                        .then(function() {
                            if (dom.near( {lat: marker.position.lat(), lng: marker.position.lng()}, {lat: 48.8848, lng: 2.3407}) !== true)
                                this.warn = this.warn || "Après une recherche sur « 29 Rue des Trois Frères », la marqueur doit être positionné proche de <code>{lat: 48.8848, lng: 2.3407}</code>";
                            if (dom.near({lat: map.center.lat(), lng: map.center.lng()}, {lat: 48.8848, lng: 2.3407}) !== true)
                                this.warn = this.warn || "Après une recherche sur « 29 Rue des Trois Frères », la carte doit être centrée proche de <code>{lat: 48.8848, lng: 2.3407}</code>";

                            input.value = '13 Boulevard Garibaldi';
                            helpers.keypress(input, 13);
                        }.bind(this))
                        .then(function() {
                            // wait for the geocoder
                            return new Promise(function(res, rej) { setTimeout(res, 100); });
                        })
                        .then(function() {
                            if (dom.near({lat: marker.position.lat(), lng: marker.position.lng()}, {lat: 48.8476, lng: 2.3036}) !== true)
                                this.warn = this.warn || "Après une recherche sur « 13 Boulevard Garibaldi », le marqueur doit être positionné proche de <code>{lat: 48.8476, lng: 2.3036}</code>";

                            if (dom.near({lat: map.center.lat(), lng: map.center.lng()}, {lat: 48.8476, lng: 2.3036}) !== true)
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
                    return dom.maps(true);
                },
                solution: function() {
                    if (!map || !marker)
                        return;

                    return dom.mapsWait().then(function() {
                        let input = document.querySelector('.places input');

                        if (dom.near({lat: marker.position.lat(), lng: marker.position.lng()}, {lat: 48.8583, lng: 2.3353}) !== true)
                            this.warn = this.warn || "Le marqueur doit être positionné proche de <code>{lat: 48.8583, lng: 2.3353}</code>";

                        input.value = 'ici';
                        helpers.keypress(input, 13);

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
                            if (dom.near({lat: marker.position.lat(), lng: marker.position.lng()}, {lat: geoloc.coords.latitude, lng: geoloc.coords.longitude}) !== true)
                                this.warn = this.warn || "Après une recherche sur « ici », le marqueur doit être positionné proche de la position de l'utilisateur";

                            return !this.warn;
                        }.bind(this));
                    }.bind(this));
                }
            }
        ]
    },  {
        title: "Applications | Modèles & vues",
        description: "Les approches MV* (modèle, vue & co) structurent les applications. Un modèle stocke l'état de l'application (ex. un panier). Les vues affichent les informations d'un modèle et le modifient.<br><br>Ce chapitre présente la réalisation d'une liste de tâches pas à pas en approche MV*.",
        color: "teal",
        steps: [
            {
                title: "Ajouter un todo",
                description: "Ajouter un <code>li</code> au <code>.todos ul</code> existant à chaque appui sur entrée dans le champ de formulaire. Ce nouveau <code>li</code> à pour texte la valeur saisie dans le champ de formulaire.",
                excerpt: "Un écouteur d'événement reçoit en premier paramètre l'événement qui l'a déclenché. s'il s'agit d'un événement clavier <code>keypress</code> celui indique via <code>event.keyCode</code> quelle touche a été saisie, et via <code>event.target.value</code> quelle est la valeur actuelle du champ de formulaire.<br><br><strong>Exemple</strong> : <pre><code>var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) { <br>  console.log(event.keyCode, event.target.value); <br>});</code></pre> affiche ces deux informations à chaque saisie dans le premier <code>input</code> de la page.",
                solved: "var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    var ul = document.querySelector('.todos ul');<br>    ul.innerHTML = '&lt;li class=\"item\"&gt;&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + event.target.value + '&lt;/li&gt;';<br>  }<br>});",
                dom: function() {
                    return dom.todolist();
                },
                solution: function() {
                    let input = document.querySelector('input');

                    input.value = 'apple';
                    helpers.keypress(input, 13);

                    let lis = document.querySelectorAll('.todos ul li');

                    if (lis.length !== 1)
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, un <code>li</code> doit être créé dans le <code>.todos ul</code>";
                    if (helpers.elContains(lis[0], 'apple') !== true)
                        this.warn = this.warn || "Le <code>li</code> doit contenir le mot saisi dans l'input";

                    return !this.warn;
                }
            },
            {
                title: "Ajouter plusieurs todos",
                description: "Si le champ de formulaire est vide, aucun <code>li</code> ne doit être créé. Et, losqu'un <code>li</code> est créé, le champ de formulaire doit être vidé.",
                solved: "var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    var ul = document.querySelector('.todos ul');<br>    ul.innerHTML += '&lt;li class=\"item\"&gt;&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + event.target.value + '&lt;/li&gt;';<br>    event.target.value ='';<br>  }<br>});",
                dom: function() {
                    return dom.todolist();
                },
                solution: function() {
                    let input = document.querySelector('input');
                    input.value = '';
                    helpers.keypress(input, 13);

                    input.value = 'apple';
                    helpers.keypress(input, 13);

                    input.value = 'pear';
                    helpers.keypress(input, 13);

                    let lis = document.querySelectorAll('.todos ul li');

                    if (input.value !== '')
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, l'input doit être vidé";
                    if (lis.length !== 2)
                        this.warn = this.warn || "À la saisie d'un mot vide, puis d'entrée, aucun <code>li</code> ne doit être créé";
                    if (helpers.elContains(lis[0], 'apple') !== true)
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, un <code>li</code> doit être créé";
                    if (helpers.elContains(lis[1], 'pear') !== true)
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
                    return dom.todolist();
                },
                solution: function() {
                    let input = document.querySelector('input');
                    input.value = 'apple';
                    helpers.keypress(input, 13);

                    input.value = 'pear';
                    helpers.keypress(input, 13);

                    let remove = document.querySelector('.todos ul .remove.icon');
                    remove.click();

                    let lis = document.querySelectorAll('.todos ul li');

                    if (lis.length !== 1)
                        this.warn = this.warn || "Après l'ajout d'un <code>li</code> un clic sur la croix du premier doit le supprimer";
                    if (helpers.elContains(lis[0], 'pear') !== true)
                        this.warn = this.warn || "Après l'ajout de deux <code>li</code> un clic sur la croix du premier ne doit laisser que le second dans la liste";

                    return !this.warn;
                }
            },
            {
                title: "Cocher les todos",
                description: "Lorsqu'un <code>li</code> est cliqué, la classe <code>done</code> doit lui être ajoutée. S'il est cliqué de nouveau, cette classe est supprimée.",
                solved: "var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    var ul = document.querySelector('.todos ul');<br>    var li = document.createElement('li');<br>    li.className = 'item';<br>    li.innerHTML = '&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + event.target.value;<br>    li.querySelector('i').addEventListener('click', function() {<br>      li.remove();<br>    });<br>    li.addEventListener('click', function() {<br>        li.classList.toggle('done');<br>    });<br>    ul.appendChild(li);<br>    event.target.value = '';<br>  }<br>});",
                dom: function() {
                    return dom.todolist();
                },
                solution: function() {
                    let input = document.querySelector('input');
                    input.value = 'apple';
                    helpers.keypress(input, 13);

                    input.value = 'pear';
                    helpers.keypress(input, 13);

                    let lis = document.querySelectorAll('.todos ul li');

                    if (lis.length !== 2)
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, à deux reprises, deux <code>li</code> doivent être créés dans le <code>.todos ul</code>";

                    lis[0].click(); lis[0].click(); lis[0].click();
                    lis[1].click(); lis[1].click();

                    lis = document.querySelectorAll('.todos ul li');

                    if (helpers.elContains(lis[0], 'apple') !== true)
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, un <code>li</code> doit être créé";
                    if (helpers.elContains(lis[1], 'pear') !== true )
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
                solved: "var todos = [];<br>var render = function() {<br>  var ul = document.querySelector('.todos ul');<br>  ul.innerHTML = '';<br>  for (let i = 0; i < todos.length; i++) {<br>    let todo = todos[i];<br>    let li = document.createElement('li');<br>    li.classList.add('item');<br>    li.classList.toggle('done', todo.done);<br>    li.innerHTML = '&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + todo.name;<br>    li.querySelector('i').addEventListener('click', function() {<br>      todos.splice(i, 1);<br>      render();<br>    });<br>    li.addEventListener('click', function() {<br>      todo.done = !todo.done;<br>      render();<br>    });<br>    ul.appendChild(li);<br>  }<br>}<br><br>var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    todos.push({<br>      name: event.target.value,<br>      done: false<br>    });<br>    event.target.value = '';<br>    render();<br>  }<br>});",
                dom: function() {
                    return dom.todolist();
                },
                solution: function() {
                    let input = document.querySelector('input');
                    input.value = 'apple';
                    helpers.keypress(input, 13);

                    input.value = 'pear';
                    helpers.keypress(input, 13);

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
                solved: "var todos = [];<br>var render = function() {<br>  var ul = document.querySelector('.todos ul');<br>  ul.innerHTML = '';<br>  var todoCount = 0, doneCount = 0;<br>  for (let i = 0; i < todos.length; i++) {<br>    let todo = todos[i];<br><br>    if (todo.done)<br>      doneCount++;<br>    else<br>      todoCount++;<br><br>    let li = document.createElement('li');<br>    li.classList.add('item');<br>    li.classList.toggle('done', todo.done);<br>    li.innerHTML = '&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + todo.name;<br><br>    li.querySelector('i').addEventListener('click', function() {<br>      todos.splice(i, 1);<br>      render();<br>    });<br>    li.addEventListener('click', function() {<br>      todo.done = !todo.done;<br>      render();<br>    });<br><br>    ul.appendChild(li);<br>  }<br><br>  document.querySelector('.filter-todo').innerHTML = todoCount + ' à faire';<br>  document.querySelector('.filter-done').innerHTML = doneCount + (doneCount > 1 ? ' faits' : ' fait');<br>}<br><br>var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    todos.push({<br>      name: event.target.value,<br>      done: false<br>    });<br>    event.target.value = '';<br>    render();<br>  }<br>});",
                dom: function() {
                    return dom.todolist();
                },
                solution: function() {
                    let input = document.querySelector('input');
                    input.value = 'apple';
                    helpers.keypress(input, 13);

                    input.value = 'pear';
                    helpers.keypress(input, 13);

                    let lis = document.querySelectorAll('.todos ul li');
                    let todoCount = document.querySelector('.filter-todo');
                    let doneCount = document.querySelector('.filter-done');

                    if (helpers.elContains(todoCount, '2 à faire') !== true)
                        this.warn = this.warn || "Après la création de 2 todos, le compte todo doit indiquer « 2 à faire »"
                    if (helpers.elContains(doneCount, '0 fait') !== true)
                        this.warn = this.warn || "Après la création de 2 todos, le compte done doit indiquer « 0 fait »"

                    lis[0].click();
                    lis = document.querySelectorAll('.todos ul li');
                    if (helpers.elContains(todoCount, '1 à faire') !== true)
                        this.warn = this.warn || "Après la création de 2 todos et le clic sur l'un des deux, le compte todo doit indiquer « 1 à faire »"
                    if (helpers.elContains(doneCount, '1 fait') !== true)
                        this.warn = this.warn || "Après la création de 2 todos et le clic sur l'un des deux, le compte done doit indiquer « 1 fait »"

                    lis[1].click();
                    lis = document.querySelectorAll('.todos ul li');
                    if (helpers.elContains(todoCount, '0 à faire') !== true)
                        this.warn = this.warn || "Après la création de 2 todos et le clic sur les deux, le compte todo doit indiquer « 0 à faire »"
                    if (helpers.elContains(doneCount, '2 faits') !== true)
                        this.warn = this.warn || "Après la création de 2 todos et le clic sur les deux, le compte done doit indiquer « 2 faits »"

                    return !this.warn;
                }
            },
            {
                title: "Filtrer les todos",
                description: "Au clic sur <code>.filter-done</code> cet élément récupère la classe <code>active</code> et seuls les todos terminés sont affichés. Idem pour <code>.filter-todo</code>. Seul un de ces deux boutons peut être actif à la fois. Cliquer sur un bouton actif le désactive (et affiche ainsi tous les todos). Plutôt que se baser sur le DOM pour savoir quel filtre est activé, utiliser une variable à 3 états, et modifier la méthode <code>render</code> pour la mise à jour de la classe <code>active</code> sur les boutons.",
                solved: "var todos = [];<br>var filter = 'all';<br>var render = function() {<br>  var ul = document.querySelector('.todos ul');<br>  ul.innerHTML = '';<br>  var todoCount = 0, doneCount = 0;<br>  for (let i = 0; i < todos.length; i++) {<br>    let todo = todos[i];<br><br>    if (todo.done)<br>      doneCount++;<br>    else<br>      todoCount++;<br><br>    if ((filter === 'todo' && todo.done) || (filter === 'done' && !todo.done)) {<br>      continue;<br>    }<br><br>    let li = document.createElement('li');<br>    li.classList.add('item');<br>    li.classList.toggle('done', todo.done);<br>    li.innerHTML = '&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + todo.name;<br><br>    li.querySelector('i').addEventListener('click', function() {<br>      todos.splice(i, 1);<br>      render();<br>    });<br>    li.addEventListener('click', function() {<br>      todo.done = !todo.done;<br>      render();<br>    });<br><br>    ul.appendChild(li);<br>  }<br><br>  document.querySelector('.filter-todo').innerHTML = todoCount + ' à faire';<br>  document.querySelector('.filter-done').innerHTML = doneCount + (doneCount > 1 ? ' faits' : ' fait');<br><br>  document.querySelector('.filter-todo').classList.toggle('active', filter === 'todo');<br>  document.querySelector('.filter-done').classList.toggle('active', filter === 'done');<br>}<br><br>var input = document.querySelector('input');<br>input.addEventListener('keypress', function(event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    todos.push({<br>      name: event.target.value,<br>      done: false<br>    });<br>    event.target.value = '';<br>    render();<br>  }<br>});<br><br>document.querySelector('.filter-todo').addEventListener('click', function() {<br>  if (filter !== 'todo')<br>    filter = 'todo';<br>  else<br>    filter = 'all';<br>  render();<br>});<br><br>document.querySelector('.filter-done').addEventListener('click', function() {<br>  if (filter !== 'done')<br>    filter = 'done';<br>  else<br>    filter = 'all';<br>  render();<br>});",
                dom: function() {
                    return dom.todolist();
                },
                solution: function() {
                    let input = document.querySelector('input');
                    input.value = 'apple';
                    helpers.keypress(input, 13);

                    input.value = 'pear';
                    helpers.keypress(input, 13);

                    input.value = 'banana';
                    helpers.keypress(input, 13);

                    let lis = document.querySelectorAll('.todos ul li');
                    let todoCount = document.querySelector('.filter-todo');
                    let doneCount = document.querySelector('.filter-done');

                    lis[1].click();

                    if (lis.length !== 3)
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, à trois reprises, trois <code>li</code> doivent être créés dans le <code>.todos ul</code>";
                    if (helpers.elContains(todoCount, '2 à faire') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, le compte todo doit indiquer « 2 à faire »";
                    if (helpers.elContains(doneCount, '1 fait') !== true)
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
                    if (helpers.elContains(lis[0], 'pear') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » ce todo contient toujours la valeur d'origine";
                    if (helpers.elContains(todoCount, '2 à faire') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » le compte todo doit indiquer « 2 à faire »";
                    if (helpers.elContains(doneCount, '1 fait') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » le compte done doit indiquer « 1 fait »"

                    return !this.warn;
                }
            },
            {
                title: "Découper en sous vues, vue item",
                description: "Créer une fonction nommée <code>TodoView</code> dotée de deux arguments : un todo (un dictionnaire aux attributes <code>name</code> et <code>done</code>) et un dictionnaire <code>options</code> (aux attributs <code>onUpdate</code> et <code>onRemove</code>). Déplacer dans cette vue tout le code ayant rapport au <code>li</code>.<br><br>Appeler cette fonction pour chaque todo du tableau <code>todos</code>. Elle se charge d'ajouter un <code>li</code> au <code>ul</code> et de gérer toutes les intéractions DOM ayant lieu sur cet élément. Sa vue parente lui transmet deux fonctions à invoquer, <code>onUpdate</code>, lorsque son todo change, afin que le compte des filtres puisse être mis à jour, <code>onRemove</code>, lorsque son todo est supprimé. Cette vue fille utilise une méthode <code>render</code> pour se mettre à jour.",
                excerpt: "Structurer un programme facilite sa compréhension et sa modification future. Il est ainsi possible de découper une application en plusieurs vues. Pour cet exemple, une vue avec une logique identique pour chaque todo, une vue pour le filtre et une vue générale. Puis les responsabilités peuvent être réparties entre ces vues. La vue d'un item est la seule responsable de cocher un todo, la vue filtre, la seule responsable de compter combien de todo sont cochés, et la vue générale de coordonner le tout.",
                solved: "var TodoView = function(todo, options) {<br>  var view = {<br>    el: document.createElement('li'),<br>    render: function() {<br>      view.el.classList.toggle('done', todo.done);<br>      view.el.innerHTML = '&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + todo.name;<br>    }<br>  }<br><br>  view.el.classList.add('item');<br>  view.render();<br>  <br>  view.el.querySelector('i').addEventListener('click', function() {<br>    options.onRemove();<br>  });<br>  <br>  view.el.addEventListener('click', function () {<br>    todo.done = !todo.done;<br>    view.render();<br><br>    options.onUpdate();<br>  });<br>  <br>  return view;<br>}<br><br>var todos = [];<br>var filter = 'all';<br>var render = function () {<br>  var ul = document.querySelector('.todos ul');<br>  ul.innerHTML = '';<br>  var todoCount = 0, doneCount = 0;<br>  for (let i = 0; i < todos.length; i++) {<br>    let todo = todos[i];<br><br>    if (todo.done)<br>      doneCount++;<br>    else<br>      todoCount++;<br><br>    if ((filter === 'todo' && todo.done) || (filter === 'done' && !todo.done)) {<br>      continue;<br>    }<br><br>    var view = TodoView(todo, {<br>      onUpdate: render,<br>      onRemove: function() {<br>        todos.splice(i, 1);<br>        render();<br>      }<br>    });<br><br>    ul.appendChild(view.el);<br>  }<br><br>  document.querySelector('.filter-todo').innerHTML = todoCount + ' à faire';<br>  document.querySelector('.filter-done').innerHTML = doneCount + (doneCount > 1 ? ' faits' : ' fait');<br><br>  document.querySelector('.filter-todo').classList.toggle('active', filter === 'todo');<br>  document.querySelector('.filter-done').classList.toggle('active', filter === 'done');<br>}<br><br>var input = document.querySelector('input');<br>input.addEventListener('keypress', function (event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    todos.push({<br>      name: event.target.value,<br>      done: false<br>    });<br>    event.target.value = '';<br>    render();<br>  }<br>});<br><br>document.querySelector('.filter-todo').addEventListener('click', function () {<br>  if (filter !== 'todo')<br>    filter = 'todo';<br>  else<br>    filter = 'all';<br>  render();<br>});<br><br>document.querySelector('.filter-done').addEventListener('click', function () {<br>  if (filter !== 'done')<br>    filter = 'done';<br>  else<br>    filter = 'all';<br>  render();<br>});",
                dom: function() {
                    return dom.todolist();
                },
                solution: function() {
                    let input = document.querySelector('input');
                    input.value = 'apple';
                    helpers.keypress(input, 13);

                    input.value = 'pear';
                    helpers.keypress(input, 13);

                    input.value = 'banana';
                    helpers.keypress(input, 13);

                    let lis = document.querySelectorAll('.todos ul li');
                    let todoCount = document.querySelector('.filter-todo');
                    let doneCount = document.querySelector('.filter-done');

                    lis[1].click();

                    if (lis.length !== 3)
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, à trois reprises, trois <code>li</code> doivent être créés dans le <code>.todos ul</code>";
                    if (helpers.elContains(todoCount, '2 à faire') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, le compte todo doit indiquer « 2 à faire »";
                    if (helpers.elContains(doneCount, '1 fait') !== true)
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
                    if (helpers.elContains(lis[0], 'pear') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » ce todo contient toujours la valeur d'origine";
                    if (helpers.elContains(todoCount, '2 à faire') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » le compte todo doit indiquer « 2 à faire »";
                    if (helpers.elContains(doneCount, '1 fait') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » le compte done doit indiquer « 1 fait »"

                    return !this.warn;
                }
            },
            {
                title: "Découper en sous vues, vue filtre",
                description: "Créer une fonction nommée <code>FilterView</code> dotée de deux arguments : le tableau todos et un dictionnaire <code>options</code> (avec l'attribut <code>onUpdate</code>). Déplacer dans cette vue tout le code ayant rapport aux filtres.<br><br>Cette fonction se charge de gérer les filtres todo / done et toutes les intéractions DOM ayant lieu sur ces éléments. Sa vue parente lui transmet une fonction à invoquer, <code>onUpdate</code>, lorsque son filtre change, afin que la vue parente se <code>render</code> à nouveau. Cette vue fille peut exposer une méthode <code>isVisible</code> prenant un todo en paramètre et indiquant s'il doit être affiché par la vue parente ou non.",
                solved: "var TodoView = function (todo, options) {<br>  var view = {<br>    el: document.createElement('li'),<br>    render: function () {<br>      view.el.classList.toggle('done', todo.done);<br>      view.el.innerHTML = '&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + todo.name;<br>    }<br>  }<br><br>  view.el.classList.add('item');<br>  view.render();<br><br>  view.el.querySelector('i').addEventListener('click', function () {<br>    options.onRemove();<br>  });<br><br>  view.el.addEventListener('click', function () {<br>    todo.done = !todo.done;<br>    view.render();<br><br>    options.onUpdate();<br>  });<br><br>  return view;<br>}<br><br>var FilterView = function (todos, options) {<br>  var view = {<br>    state: {<br>      filter: 'all'<br>    },<br>    filterTodo: document.querySelector('.filter-todo'),<br>    filterDone: document.querySelector('.filter-done'),<br>    isVisible: function (todo) {<br>      var filter = view.state.filter;<br>      return filter === 'all' || (filter === 'todo' && !todo.done) || (filter === 'done' && todo.done);<br>    },<br>    render: function () {<br>      var todoCount = 0, doneCount = 0;<br>      for (let i = 0; i < todos.length; i++) {<br>        var todo = todos[i];<br>        if (todo.done)<br>          doneCount++;<br>        else<br>          todoCount++;<br>      }<br><br>      view.filterTodo.innerHTML = todoCount + ' à faire';<br>      view.filterDone.innerHTML = doneCount + (doneCount > 1 ? ' faits' : ' fait');<br><br>      view.filterTodo.classList.toggle('active', view.state.filter === 'todo');<br>      view.filterDone.classList.toggle('active', view.state.filter === 'done');<br>    }<br>  };<br><br>  view.filterTodo.addEventListener('click', function () {<br>    view.state.filter = (view.state.filter !== 'todo') ? 'todo' : 'all';<br>    view.render();<br><br>    options.onUpdate();<br>  });<br><br>  view.filterDone.addEventListener('click', function () {<br>    view.state.filter = (view.state.filter !== 'done') ? 'done' : 'all';<br>    view.render();<br><br>    options.onUpdate();<br>  });<br><br>  return view;<br>}<br><br>var todos = [];<br>var render = function () {<br>  var ul = document.querySelector('.todos ul');<br><br>  ul.innerHTML = '';<br>  for (let i = 0; i < todos.length; i++) {<br>    let todo = todos[i];<br><br>    if (!filterView.isVisible(todo)) {<br>      continue;<br>    }<br><br>    var todoView = TodoView(todo, {<br>      onUpdate: render,<br>      onRemove: function () {<br>        todos.splice(i, 1);<br>        view.render();<br>      }<br>    });<br><br>    ul.appendChild(todoView.el);<br>  }<br>  filterView.render();<br>};<br><br>var filterView = FilterView(todos, {<br>  onUpdate: render<br>});<br><br>var input = document.querySelector('input');<br>input.addEventListener('keypress', function (event) {<br>  if (event.keyCode === 13 && event.target.value) {<br>    todos.push({<br>      name: event.target.value,<br>      done: false<br>    });<br>    event.target.value = '';<br>    render();<br>  }<br>});",
                dom: function() {
                    return dom.todolist();
                },
                solution: function() {
                    let input = document.querySelector('input');
                    input.value = 'apple';
                    helpers.keypress(input, 13);

                    input.value = 'pear';
                    helpers.keypress(input, 13);

                    input.value = 'banana';
                    helpers.keypress(input, 13);

                    let lis = document.querySelectorAll('.todos ul li');
                    let todoCount = document.querySelector('.filter-todo');
                    let doneCount = document.querySelector('.filter-done');

                    lis[1].click();

                    if (lis.length !== 3)
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, à trois reprises, trois <code>li</code> doivent être créés dans le <code>.todos ul</code>";
                    if (helpers.elContains(todoCount, '2 à faire') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, le compte todo doit indiquer « 2 à faire »";
                    if (helpers.elContains(doneCount, '1 fait') !== true)
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
                    if (helpers.elContains(lis[0], 'pear') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » ce todo contient toujours la valeur d'origine";
                    if (helpers.elContains(todoCount, '2 à faire') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » le compte todo doit indiquer « 2 à faire »";
                    if (helpers.elContains(doneCount, '1 fait') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » le compte done doit indiquer « 1 fait »"

                    return !this.warn;
                }
            },
            {
                title: "Découper en sous vues, vue parente",
                description: "Créer une fonction nommée <code>TodosView</code> dont le rôle est de créer le tableau <code>todos</code> et de coordonner les autres vues.",
                solved: "var TodoView = function (todo, options) {<br>  var view = {<br>    el: document.createElement('li'),<br>    render: function () {<br>      view.el.classList.toggle('done', todo.done);<br>      view.el.innerHTML = '&lt;i class=\"remove icon\"&gt;&lt;/i&gt;' + todo.name;<br>    }<br>  }<br><br>  view.el.classList.add('item');<br>  view.render();<br><br>  view.el.querySelector('i').addEventListener('click', function () {<br>    options.onRemove();<br>  });<br><br>  view.el.addEventListener('click', function () {<br>    todo.done = !todo.done;<br>    view.render();<br><br>    options.onUpdate();<br>  });<br><br>  return view;<br>}<br><br>var FilterView = function (todos, options) {<br>  var view = {<br>    state: {<br>      filter: 'all'<br>    },<br>    filterTodo: document.querySelector('.filter-todo'),<br>    filterDone: document.querySelector('.filter-done'),<br>    isVisible: function (todo) {<br>      var filter = view.state.filter;<br>      return filter === 'all' || (filter === 'todo' && !todo.done) || (filter === 'done' && todo.done);<br>    },<br>    render: function () {<br>      var todoCount = 0, doneCount = 0;<br>      for (let i = 0; i < todos.length; i++) {<br>        var todo = todos[i];<br>        if (todo.done)<br>          doneCount++;<br>        else<br>          todoCount++;<br>      }<br><br>      view.filterTodo.innerHTML = todoCount + ' à faire';<br>      view.filterDone.innerHTML = doneCount + (doneCount > 1 ? ' faits' : ' fait');<br><br>      view.filterTodo.classList.toggle('active', view.state.filter === 'todo');<br>      view.filterDone.classList.toggle('active', view.state.filter === 'done');<br>    }<br>  };<br><br>  view.filterTodo.addEventListener('click', function () {<br>    view.state.filter = (view.state.filter !== 'todo') ? 'todo' : 'all';<br>    view.render();<br><br>    options.onUpdate();<br>  });<br><br>  view.filterDone.addEventListener('click', function () {<br>    view.state.filter = (view.state.filter !== 'done') ? 'done' : 'all';<br>    view.render();<br><br>    options.onUpdate();<br>  });<br><br>  return view;<br>}<br><br>var TodosView = function (ul) {<br>  var view = {<br>    state: {<br>      todos: []<br>    },<br>    render: function () {<br>      var todos = view.state.todos;<br>      var filterView = view.filterView;<br><br>      ul.innerHTML = '';<br>      for (let i = 0; i < todos.length; i++) {<br>        let todo = todos[i];<br><br>        if (!filterView.isVisible(todo)) {<br>          continue;<br>        }<br><br>        var todoView = TodoView(todo, {<br>          onUpdate: view.render,<br>          onRemove: function () {<br>            todos.splice(i, 1);<br>            view.render();<br>          }<br>        });<br><br>        ul.appendChild(todoView.el);<br>      }<br>      filterView.render();<br>    }<br>  }<br><br>  view.filterView = FilterView(view.state.todos, {<br>    onUpdate: view.render<br>  });<br><br>  var input = document.querySelector('input');<br>  input.addEventListener('keypress', function (event) {<br>    if (event.keyCode === 13 && event.target.value) {<br>      view.state.todos.push({<br>        name: event.target.value,<br>        done: false<br>      });<br>      event.target.value = '';<br>      view.render();<br>    }<br>  });<br>  return view;<br>}<br><br>TodosView(document.querySelector('.todos ul'));",
                dom: function() {
                    return dom.todolist();
                },
                solution: function() {
                    let input = document.querySelector('input');
                    input.value = 'apple';
                    helpers.keypress(input, 13);

                    input.value = 'pear';
                    helpers.keypress(input, 13);

                    input.value = 'banana';
                    helpers.keypress(input, 13);

                    let lis = document.querySelectorAll('.todos ul li');
                    let todoCount = document.querySelector('.filter-todo');
                    let doneCount = document.querySelector('.filter-done');

                    lis[1].click();

                    if (lis.length !== 3)
                        this.warn = this.warn || "À la saisie d'un mot, puis d'entrée, à trois reprises, trois <code>li</code> doivent être créés dans le <code>.todos ul</code>";
                    if (helpers.elContains(todoCount, '2 à faire') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, le compte todo doit indiquer « 2 à faire »";
                    if (helpers.elContains(doneCount, '1 fait') !== true)
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
                    if (helpers.elContains(lis[0], 'pear') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » ce todo contient toujours la valeur d'origine";
                    if (helpers.elContains(todoCount, '2 à faire') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » le compte todo doit indiquer « 2 à faire »";
                    if (helpers.elContains(doneCount, '1 fait') !== true)
                        this.warn = this.warn || "Après la création de 3 todos et le clic sur l'un deux, au clic sur « 1 fait » le compte done doit indiquer « 1 fait »"

                    return !this.warn;
                }
            },
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
        title: "Applications | Ajax",
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
                solved: "/* remplacer {token} par le token github généré */<br><br>/* --------------------- xhr --------------------- */<br><br>var search = document.querySelector('.search');<br>var input = search.querySelector('input');<br>var results = search.querySelector('.results');<br><br>var ajax = function(method, url, fn) {<br>  var xhr = new XMLHttpRequest();<br>  xhr.addEventListener('load', function() {<br>    if (xhr.readyState === 4) {<br>      fn(JSON.parse(xhr.response));<br>    }<br>  });<br>  xhr.open(method, url);<br>  xhr.send();<br>}<br><br>input.addEventListener('keypress', function(event) {<br>  if(event.keyCode !== 13 || !input.value) {<br>    return<br>  }<br><br>  ajax('GET', 'https://api.github.com/search/repositories?access_token={token}&q=' + input.value, function(data) {<br>    results.innerHTML = '';<br>    results.classList.toggle('visible', data.items.length > 0);<br><br>    for (var i = 0; i < Math.min(data.items.length, 3); i++) {<br>      results.innerHTML += '&lt;span class=\"result\"&gt;' + data.items[i].full_name + '&lt;/span&gt;';<br>    }<br>  });<br>});<br><br>/* -------------------- fetch -------------------- */<br><br>var search = document.querySelector('.search');<br>var input = search.querySelector('input');<br>var results = search.querySelector('.results');<br><br>input.addEventListener('keypress', function(event) {<br>  if(event.keyCode !== 13 || !input.value) {<br>    return<br>  }<br><br>  fetch('https://api.github.com/search/repositories?access_token={token}&q=' + input.value)<br>  .then(function(response) {<br>    return response.json();<br>  })<br>  .then(function(data) {<br>    results.innerHTML = '';<br>    results.classList.toggle('visible', data.items.length > 0);<br>    for (var i = 0; i < Math.min(data.items.length, 3); i++) {<br>      results.innerHTML += '&lt;span class=\"result\"&gt;' + data.items[i].full_name + '&lt;/span&gt;';<br>    }<br>  });<br>});",
                dom: function() {
                    return dom.searchbar();
                },
                solution: function() {
                    var input = document.querySelector('.search input');
                    var promise = http.wait();

                    input.value = 'hetic';
                    helpers.keypress(input, 13);

                    return promise.then(function(value) {
                        var results = document.querySelectorAll('.search .result');
                        if (results.length !== 3)
                            this.warn = this.warn || "Des résultats doivent apparaitre dans <code>.results</code> et être limités à 3";
                        if (helpers.elContains(results[0], 'hetic') !== true)
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
                    return dom.searchbar();
                },
                solution: function() {
                    var search = document.querySelector('.search');
                    var input = search.querySelector('input');
                    var promise = http.wait();

                    input.value = 'hetic';
                    helpers.keypress(input, 13);

                    if (helpers.elHasClass(search, 'loading') !== true)
                        this.warn = this.warn || "La classe <code>loading</code> n'est pas ajoutée lors de l'appel au serveur";

                    return promise.then(function() {
                        if (helpers.elHasClass(search, 'loading') !== false)
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
                    return dom.searchbar();
                },
                solution: function() {
                    var refresh = document.querySelector('.fetch');
                    var promise = http.wait();

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
                    return dom.searchbar();
                },
                solution: function() {
                    var refresh = document.querySelector('.fetch');
                    var promise = http.wait();

                    refresh.click();

                    if (helpers.elHasClass(refresh, 'loading') !== true)
                        this.warn = this.warn || "La classe <code>loading</code> n'est pas ajoutée lors de l'appel au serveur";

                    return promise.then(function() {
                        var count = document.querySelector('.count');
                        var items = document.querySelectorAll('.list .item');

                        if (+count.value !== items.length)
                            this.warn = this.warn || "Le compte de <code>.count</code> et le nombre d'items dans <code>.list</code> doit être le même.";

                        if (helpers.elHasClass(refresh, 'loading') !== false)
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
                    return dom.searchbar();
                },
                solution: function() {
                    var refresh = document.querySelector('.fetch');
                    var initialCount = 0;
                    var promise = http.wait();
                    var token, added;

                    refresh.click();

                    return promise.then(function(url) {
                        token = http.getParameterByName(url, 'access_token');

                        promise = http.wait();

                        var search = document.querySelector('.search');
                        var input = search.querySelector('input');

                        input.value = 'beatles';
                        helpers.keypress(input, 13);

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
                        promise = http.wait();
                        refresh.click();
                        return promise;
                    }.bind(this))
                    .then(function() {
                        var items = document.querySelectorAll('.list .item');
                        initialCount = +(document.querySelector('.count').value);

                        if (initialCount !== items.length)
                            this.warn = this.warn || "Le compte de <code>.count</code> et le nombre d'items dans <code>.list</code> doit être le même.";

                        promise = http.wait();

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
                    return dom.searchbar();
                },
                solution: function() {
                    var refresh = document.querySelector('.fetch');
                    var direction = document.querySelector('.direction');
                    var promise = http.wait();

                    refresh.click();

                    return promise.then(function() {
                        var count = document.querySelector('.count');
                        var items = document.querySelectorAll('.list .item');

                        if (+count.value !== items.length)
                            this.warn = this.warn || "Le compte de <code>.count</code> et le nombre d'items dans <code>.list</code> doit être le même.";

                        promise = http.wait();

                        direction.click();

                        return promise;
                    }.bind(this))
                    .then(function(url) {
                        var dir = http.getParameterByName(url, 'direction');

                        if (dir !== 'asc')
                            this.warn = this.warn || "Au premier clic sur <code>.direction</code> le sens doit être <code>asc</code>.";

                        var items = document.querySelectorAll('.list .item');

                        promise = http.wait();

                        direction.click();

                        return promise;
                    }.bind(this))
                    .then(function(url) {
                        var dir = http.getParameterByName(url, 'direction');

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
                    return dom.searchbar();
                },
                solution: function() {
                    var refresh = document.querySelector('.fetch');
                    var initialCount = 0;
                    var promise = http.wait();
                    var token, added;

                    refresh.click();

                    return promise.then(function(url) {
                        token = http.getParameterByName(url, 'access_token');

                        promise = http.wait();

                        var search = document.querySelector('.search');
                        var input = search.querySelector('input');

                        input.value = 'beatles';
                        helpers.keypress(input, 13);

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
                        promise = http.wait();
                        refresh.click();
                        return promise;
                    }.bind(this))
                    .then(function() {
                        var items = document.querySelectorAll('.list .item');
                        initialCount = +(document.querySelector('.count').value);

                        if (initialCount !== items.length)
                            this.warn = this.warn || "Le compte de <code>.count</code> et le nombre d'items dans <code>.list</code> doit être le même.";

                        promise = http.wait();

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

                        promise = http.wait();

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
        title: "Applications | Routeur",
        description: "Un routeur est un aiguilleur qui modifie les vues affichées à l'écran en fonction de l'URL de la page. Lorsque l'utilisateur rafraîchit la page ou qu'il partage son adresse, le routeur sélectionne les bonnes vues à afficher.<br><br>Ce chapitre présente la réalisation d'une boutique pas à pas avec un routeur.",
        color: "teal",
        steps: [{
            title: "Le templating",
            course: true,
            description: `
                Le templating est un procédé qui vise à créer des templates (des textes à trous) qu'il est possible de renseigner en leur appliquant des objets dotés des mêmes propriétés ; cela s'avère très pratique pour construire des pages HTML avec des listes d'éléments, par exemple des résultats de recherche avec le même format, mais aux données différentes.

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
            title: "Lister des produits",
            description: "Récupérer le contenu du template <code>#product</code> puis lui injecter un à un les trois produits contenus dans la variable <code>products</code> à l'aide de la librairie handlebars. Ajouter ensuite le résultat dans un <code>div</code> aux classes <code>.ui.cards</code>, inséré au DOM dans l'élément <code>#app-view</code>.",
            excerpt: "La librairie <a target=\"_blank\" href=\"https://handlebarsjs.com\">handlebars</a> permet de manipuler facilement des templates, et, notamment, de les transformer ne HTML en leur donnant un objet aux clés correspondantes.<br><br>L'ajout de HTML dans une balise <code>script</code> de type <code>text/template</code> est une technique qui permet d'ajouter des templates invisbles à une page afin de les ajouter ensuite dynamiquement en javascript.",
            solved: "/* import this in the HTML <head> before the code<br>&lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js\"&gt;&lt;/script&gt;<br>*/<br>var el =  document.createElement('div');<br>el.className = 'ui cards';<br><br>var source = document.querySelector('#product').innerHTML;<br>var template = Handlebars.compile(source);<br><br>el.innerHTML = ''; <br>for (let i = 0; i < products.length; i++) {<br>  el.innerHTML += template(products[i]);<br>}<br><br>document.querySelector('#app-view').appendChild(el);",
            init: function() {
                window.products = dom.shopProducts;
            },
            dom: function() {
                return dom.shop();
            },
            solution: function() {
                var cards = document.querySelectorAll('.shop .card');
                if (cards.length !== 3)
                    this.warn = this.warn || 'Les 3 produits doivent être affichés dans le sélecteur <code>#app-view</code>';
                    
                if (!helpers.elContains(cards[0] && cards[0].querySelector('.meta'), 'Manches longues'))
                    this.warn = this.warn || 'Le premier produit doit être nommé « Manches longues »';
                if (!helpers.elContains(cards[0] && cards[0].querySelector('.left'), '15€'))
                    this.warn = this.warn || 'Le premier produit doit être indiqué à 15€';

                if (!helpers.elContains(cards[1] && cards[1].querySelector('.meta'), 'T-shirt'))
                    this.warn = this.warn || 'Le second produit doit être nommé « T-shirt »';
                if (!helpers.elContains(cards[1] && cards[1].querySelector('.left'), '25€'))
                    this.warn = this.warn || 'Le second produit doit être indiqué à 25€';

                if (!helpers.elContains(cards[2] && cards[2].querySelector('.meta'), 'Chemise'))
                    this.warn = this.warn || 'Le troisième produit doit être nommé « Chemise »';
                if (!helpers.elContains(cards[2] && cards[2].querySelector('.left'), '40€'))
                    this.warn = this.warn || 'Le troisième produit doit être indiqué à 40€';

                return !this.warn;
            }
        }, 
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
            title: "Créer un composant",
            description: "Créer une classe <code>ProductsView</code> responsable de la création du <code>div.ui.cards</code> généré précédemment. Ce composant dispose d'une méthode <code>render</code> pour afficher tous les produits. Il dispose également d'un attribut <code>el</code> contenant le DOM généré à partir de la template <code>#product</code>. Son contenu est injecté dans <code>#app-view</code> comme précédemment.",
            excerpt: "Il est possible (et souvent souhaitable) de structurer un programme à l'aide de composants au comportement clairement défini. Une classe est un modèle (comme un moule à pâtisserie) qui définit un ensemble d'attributs (la taille, les fruits utilisés) et de méthodes (découper, manger). <pre><code>var ProductsView = function(products) {<br>  this.products = products;<br>}<br>ProductsView.prototype = {<br>  render: function() { .. }<br>}<br><br>var view = new ProductsView(products);<br>view.render();</code></pre>Par convention les classes commencent par une majuscule et les variables / instances par une minuscules.",
            solved: "var ProductsView = function(products) {<br>  this.products = products;<br><br>  this.el =  document.createElement('div');<br>  this.el.className = 'ui cards';<br>}<br><br>ProductsView.prototype = {<br>  render: function() {<br>    var source = document.querySelector('#product').innerHTML;<br>    var template = Handlebars.compile(source);<br>    <br>    this.el.innerHTML = ''; <br>    for (let i = 0; i < this.products.length; i++) {<br>      this.el.innerHTML += template(this.products[i]);<br>    }<br>  }<br>}<br><br>var appView = document.querySelector('#app-view');<br><br>var productsView = new ProductsView(products);<br>productsView.render();<br>appView.appendChild(productsView.el);",
            init: function() {
                window.products = dom.shopProducts;
            },
            dom: function() {
                return dom.shop();
            },
            solution: function() {
                var cards = document.querySelectorAll('.shop .card');
                if (cards.length !== 3)
                    this.warn = this.warn || 'Les 3 produits doivent être affichés dans le sélecteur <code>#app-view</code>';
                    
                var view = new ProductsView(dom.shopProducts);

                if (!view || !view.render || typeof view.render !== 'function')
                    this.warn = this.warn || 'L\'attribut <code>render</code> de la classe <code>ProductsView</code> doit être une fonction';
                
                if (!view.el)
                    this.warn = this.warn || 'La classe <code>ProductsView</code> doit disposer d\'un attribut el contenant son morceau de DOM';

                view.render && view.render();
                document.querySelector('#app-view').appendChild(view.el);

                cards = document.querySelectorAll('.shop .card');

                if (cards.length !== 6)
                    this.warn = this.warn || 'L\'appel de la fonction <code>render</code> de <codeProductsView</code> doit ajouter les 3 produits au DOM';

                if (!helpers.elContains(cards[4] && cards[4].querySelector('.meta'), 'T-shirt'))
                    this.warn = this.warn || 'Le second produit doit être nommé « T-shirt »';
                if (!helpers.elContains(cards[4] && cards[4].querySelector('.left'), '25€'))
                    this.warn = this.warn || 'Le second produit doit être indiqué à 25€';

                return !this.warn;
            }
        },
        {
            title: "Créer un sous composant",
            description: "Créer une classe <code>ProductView</code> responsable de l'affichage d'un unique produit. Modifier la classe <code>ProductsView</code> qui, plutôt que de faire appel au template, va créer 3 instances de <code>ProductView</code>, une par produit. Ajouter un écouteur dans la classe <code>ProductView</code> afin de modifier la quantité du produit affiché au clic sur <code>.plus</code> ou <code>.minus</code>. Puis appeler <code>render</code> pour mettre à jour son affichage.",
            excerpt: "Découper une application en vues et sous vues est très courant. L'objectif est manipuler un morceau de DOM relatif à un object simple, ici, un produit, plutôt qu'à un tableau. Sans ce découpage, la gestion d'un tableau requiert de laisser des indications dans le DOM afin de savoir quel élément du tableau a été cliqué, par exemple.",
            solved: "var ProductView = function(product) {<br>  this.product = product;<br><br>  this.el = document.createElement('div');<br>}<br><br>ProductView.prototype = {<br>  render: function() {<br>    var source = document.querySelector('#product').innerHTML;<br>    var template = Handlebars.compile(source);<br>    this.el.innerHTML = template(this.product);<br><br>    this.el.querySelector('.plus').addEventListener('click', function() {<br>      this.product.quantity++;<br>      this.render();<br>    }.bind(this));<br><br>    this.el.querySelector('.minus').addEventListener('click', function() {<br>      if (this.product.quantity <= 0)<br>        return;<br><br>      this.product.quantity--;<br>      this.render();<br>    }.bind(this));<br>  }<br>}<br><br>var ProductsView = function(products) {<br>  this.products = products;<br><br>  this.el =  document.createElement('div');<br>  this.el.className = 'ui cards';<br>}<br><br>ProductsView.prototype = {<br>  render: function() {<br>    for (let i = 0; i < this.products.length; i++) {<br>      var children = new ProductView(this.products[i]);<br>      this.el.appendChild(children.el);<br>      children.render();<br>    }<br>  }<br>}<br><br>var appView = document.querySelector('#app-view');<br><br>var productsView = new ProductsView(products);<br>productsView.render();<br>appView.appendChild(productsView.el);",
            init: function() {
                window.products = helpers.deepClone(dom.shopProducts);
            },
            dom: function() {
                return dom.shop();
            },
            solution: function() {
                var cards = document.querySelectorAll('.shop .card');
                if (cards.length !== 3)
                    this.warn = this.warn || 'Les 3 produits doivent être affichés dans le sélecteur <code>#app-view</code>';
                    
                cards[1].querySelector('.plus').click();
                cards[1].querySelector('.plus').click();

                cards = document.querySelectorAll('.shop .card'); // rerender
                if (cards[1].querySelector('.right').textContent.trim() !== '2')
                    this.warn = this.warn || 'Cliquer à deux reprises sur le <code>.plus</code> du second produit doit incrémenter sa quantité';

                return !this.warn;
            }
        }, 
        {
            title: "Créer un routeur",
            description: "Créer une classe <code>Router</code> responsable de l'affichage des produits ou du panier en fonction de l'adresse de la page (selon si <code>location.hash</code> est égal à <code>#products</code> ou à <code>#cart</code>). Créer une classe <code>CartView</code> qui affiche les produits du panier à l'aide de la template <code>#cart</code>.",
            excerpt: "Un routeur est un aiguilleur modifiant les vues affichées à l'écran en fonction de l'adresse saisie par l'utilisateur. Lorsque l'utilisateur rafraîchit la page ou qu'il partage son adresse, le routeur est alors en mesure de choisir les vues à afficher et de leur indiquer dans quel état exact elles doivent se positionner.<br><br>Le router peut s'abonner à l'événement hashchange de window, <code>window.addEventListener('hashchange', function() { .. });</code>.",
            solved: "var ProductView = function(product) {<br>  this.product = product;<br><br>  this.el = document.createElement('div');<br>}<br><br>ProductView.prototype = {<br>  render: function() {<br>    var source = document.querySelector('#product').innerHTML;<br>    var template = Handlebars.compile(source);<br>    this.el.innerHTML = template(this.product);<br><br>    this.el.querySelector('.plus').addEventListener('click', function() {<br>      this.product.quantity++;<br>      this.render();<br>    }.bind(this));<br><br>    this.el.querySelector('.minus').addEventListener('click', function() {<br>      if (this.product.quantity <= 0)<br>        return;<br><br>      this.product.quantity--;<br>      this.render();<br>    }.bind(this));<br>  }<br>}<br><br>var ProductsView = function(products) {<br>  this.products = products;<br><br>  this.el =  document.createElement('div');<br>  this.el.className = 'ui cards';<br>}<br><br>ProductsView.prototype = {<br>  render: function() {<br>    for (let i = 0; i < this.products.length; i++) {<br>      var children = new ProductView(this.products[i]);<br>      this.el.appendChild(children.el);<br>      children.render();<br>    }<br>  }<br>}<br><br>var CartView = function(products) {<br>  this.products = products;<br><br>  this.el = document.createElement('div');<br>}<br><br>CartView.prototype = {<br>  render: function() {<br>    var source = document.querySelector('#cart').innerHTML;<br>    var template = Handlebars.compile(source);<br>    this.el.innerHTML = template(this.products);<br>  }<br>}<br><br>var Router = function() {<br>  this.appView = document.querySelector('#app-view');<br>  this.render();<br><br>  window.addEventListener('hashchange', this.render.bind(this));<br>};<br><br>Router.prototype = {<br>  render: function() {<br>    var view;<br>    <br>    switch(location.hash) {<br>      case '#cart': <br>        view = new CartView(products);<br>        break;<br>      default:<br>        view = new ProductsView(products);<br>        break;<br>    }<br>    <br>    this.appView.innerHTML = '';<br>    this.appView.appendChild(view.el);<br>    view.render();<br>  }<br>}<br><br>new Router();",
            init: function() {
                window.products = helpers.deepClone(dom.shopProducts);
            },
            dom: function() {
                return dom.shop();
            },
            reload: function() {
                removeEventListener('hashchange');
            },
            solution: function() {
                document.querySelector('.item.cart').click();  
                
                return http.hashWait()
                .then(function() {
                    var items = document.querySelectorAll('.ui.list .item');
                    if (items.length !== 5)
                        this.warn = this.warn || 'Cliquer sur le lien du panier doit afficher la vue panier';

                    document.querySelector('.item.products').click();
                    return http.hashWait();
                }.bind(this))
                .then(function() {
                    var cards = document.querySelectorAll('.shop .card');
                    if (cards.length !== 3)
                        this.warn = this.warn || 'Cliquer sur le lien des produits doit afficher la vue produits';

                    return !this.warn;
                }.bind(this));
            }
        }, 
        {
            title: "Modifier la quantité du panier",
            description: "Modifier la classe <code>CartView</code> afin que les inputs mettent à jour la quantité des produits (avec l'événement <code>input</code>).",
            solved: "var ProductView = function(product) {<br>  this.product = product;<br><br>  this.el = document.createElement('div');<br>}<br><br>ProductView.prototype = {<br>  render: function() {<br>    var source = document.querySelector('#product').innerHTML;<br>    var template = Handlebars.compile(source);<br>    this.el.innerHTML = template(this.product);<br><br>    this.el.querySelector('.plus').addEventListener('click', function() {<br>      this.product.quantity++;<br>      this.render();<br>    }.bind(this));<br><br>    this.el.querySelector('.minus').addEventListener('click', function() {<br>      if (this.product.quantity <= 0)<br>        return;<br><br>      this.product.quantity--;<br>      this.render();<br>    }.bind(this));<br>  }<br>}<br><br>var ProductsView = function(products) {<br>  this.products = products;<br><br>  this.el =  document.createElement('div');<br>  this.el.className = 'ui cards';<br>}<br><br>ProductsView.prototype = {<br>  render: function() {<br>    for (let i = 0; i < this.products.length; i++) {<br>      var children = new ProductView(this.products[i]);<br>      this.el.appendChild(children.el);<br>      children.render();<br>    }<br>  }<br>}<br><br>var CartView = function(products) {<br>  this.products = products;<br><br>  this.el = document.createElement('div');<br>}<br><br>CartView.prototype = {<br>  render: function() {<br>    var source = document.querySelector('#cart').innerHTML;<br>    var template = Handlebars.compile(source);<br>    this.el.innerHTML = template(this.products);<br><br>    var inputs = this.el.querySelectorAll('input');<br>    for (let i = 0; i < inputs.length; i++) {<br>      inputs[i].addEventListener('input', function() {<br>        this.products[i].quantity = Math.floor(inputs[i].value);<br>      }.bind(this));<br>    }<br>  }<br>}<br><br>var Router = function() {<br>  this.appView = document.querySelector('#app-view');<br>  this.render();<br><br>  window.addEventListener('hashchange', this.render.bind(this));<br>};<br><br>Router.prototype = {<br>  render: function() {<br>    var view;<br>    <br>    switch(location.hash) {<br>      case '#cart': <br>        view = new CartView(products);<br>        break;<br>      default:<br>        view = new ProductsView(products);<br>        break;<br>    }<br>    <br>    this.appView.innerHTML = '';<br>    this.appView.appendChild(view.el);<br>    view.render();<br>  }<br>}<br><br>new Router();",
            init: function() {
                window.products = helpers.deepClone(dom.shopProducts);
            },
            dom: function() {
                return dom.shop();
            },
            reload: function() {
                removeEventListener('hashchange');
            },
            solution: function() {
                document.querySelector('.item.cart').click();  
                
                return http.hashWait()
                .then(function() {
                    var items = document.querySelectorAll('.ui.list .item');
                    var input = items[1].querySelector('input');
                    input.value = 5;
                    helpers.change(input, 'input');

                    document.querySelector('.item.products').click();
                    return http.hashWait();
                }.bind(this))
                .then(function() {
                    var cards = document.querySelectorAll('.shop .card');
                    if (cards[1].querySelector('.right').textContent.trim() !== '5')
                        this.warn = this.warn || 'Modifier la quantité d\'un article dans le panier doit également modifier sa quantité dans le listing de produit (puisqu\'ils partagent le même modèle)';

                    return !this.warn;
                }.bind(this));
            }
        }, 
        {
            title: "Créer une vue partagée",
            description: "Créer une classe <code>Total</code> responsable de l'affichage du nombre d'articles et du prix total du panier (en haut à droite). Cette vue n'a pas de template, et est affichée pour toutes les routes. Elle doit mettre à jour <code>.cart-quantity</code> et <code>.cart-price</code> à chaque modification d'une quantité d'un produit (dans les vues produits et panier).",
            excerpt: "Les vues communiquement souvent entre elles en partageant un modèle (ici, la liste des produits). Elles peuvent également communiquer en se partageant une fonction que l'une appelle (ici, lorsque la quantité est modifiée) et l'autre écoute (ici, l'affichage du total).",
            solved: "var ProductView = function(product, options) {<br>  this.product = product;<br>  this.options = options;<br><br>  this.el = document.createElement('div');<br>}<br><br>ProductView.prototype = {<br>  render: function() {<br>    var source = document.querySelector('#product').innerHTML;<br>    var template = Handlebars.compile(source);<br>    this.el.innerHTML = template(this.product);<br><br>    this.el.querySelector('.plus').addEventListener('click', function() {<br>      this.product.quantity++;<br>      this.render();<br>      this.options.onUpdate();<br>    }.bind(this));<br><br>    this.el.querySelector('.minus').addEventListener('click', function() {<br>      if (this.product.quantity <= 0)<br>        return;<br><br>      this.product.quantity--;<br>      this.render();<br>      this.options.onUpdate();<br>    }.bind(this));<br>  }<br>}<br><br>var ProductsView = function(products, options) {<br>  this.products = products;<br>  this.options = options;<br><br>  this.el =  document.createElement('div');<br>  this.el.className = 'ui cards';<br>}<br><br>ProductsView.prototype = {<br>  render: function() {<br>    for (let i = 0; i < this.products.length; i++) {<br>      var children = new ProductView(this.products[i], this.options);<br>      this.el.appendChild(children.el);<br>      children.render();<br>    }<br>  }<br>}<br><br>var CartView = function(products, options) {<br>  this.products = products;<br>  this.options = options;<br><br>  this.el = document.createElement('div');<br>}<br><br>CartView.prototype = {<br>  render: function() {<br>    var source = document.querySelector('#cart').innerHTML;<br>    var template = Handlebars.compile(source);<br>    this.el.innerHTML = template(this.products);<br><br>    var inputs = this.el.querySelectorAll('input');<br>    for (let i = 0; i < inputs.length; i++) {<br>      inputs[i].addEventListener('input', function() {<br>        this.products[i].quantity = Math.floor(inputs[i].value);<br>        this.options.onUpdate();<br>      }.bind(this));<br>    }<br>  }<br>}<br><br>var Total = function(products) {<br>  this.products = products;<br>}<br><br>Total.prototype = {<br>  render() {<br>    var computed = {quantity: 0, price: 0};<br>  <br>    for (var i = 0; i < products.length; i++) {<br>      var product = products[i];<br>      computed.quantity += product.quantity;<br>      computed.price += (product.price * product.quantity);<br>    }<br><br>    document.querySelector('.cart-quantity').innerHTML = computed.quantity;;<br>    document.querySelector('.cart-price').innerHTML = computed.price + '€';<br>  }<br>}<br><br>var Router = function() {<br>  this.total = new Total(products);<br>  this.appView = document.querySelector('#app-view');<br>  this.render();<br><br>  window.addEventListener('hashchange', this.render.bind(this));<br>};<br><br>Router.prototype = {<br>  onUpdate: function() {<br>    this.total.render();<br>  },<br>  render: function() {<br>    var view;<br>    var options = {onUpdate: this.onUpdate.bind(this)};<br>    <br>    switch(location.hash) {<br>      case '#cart': <br>        view = new CartView(products, options);<br>        break;<br>      default:<br>        view = new ProductsView(products, options);<br>        break;<br>    }<br>    <br>    this.appView.innerHTML = '';<br>    this.appView.appendChild(view.el);<br>    view.render();<br><br>    this.total.render();<br>  }<br>}<br><br>new Router();",
            init: function() {
                window.products = helpers.deepClone(dom.shopProducts);
            },
            dom: function() {
                return dom.shop();
            },
            reload: function() {
                removeEventListener('hashchange');
            },
            solution: function() {
                var cards = document.querySelectorAll('.shop .card');
                if (cards.length !== 3)
                    this.warn = this.warn || 'Les 3 produits doivent être affichés dans le sélecteur <code>#app-view</code>';
                    
                cards[1].querySelector('.plus').click();
                cards[1].querySelector('.plus').click();
                cards[2].querySelector('.plus').click();

                var quantity = document.querySelector('.cart-quantity').innerHTML;
                var price = document.querySelector('.cart-price').innerHTML;
                if (quantity !== '3')
                    this.warn = this.warn || 'Sélectionner deux fois le second produit et une le troisième doit afficher une quantité de 3 dans <code>.cart-quantity</code>';
                if (price !== '90€')
                    this.warn = this.warn || 'Cliquer à trois reprises sur le <code>.plus</code> de produits doit afficher un prix de 90€ dans <code>.cart-price</code>';

                return !this.warn;
            }
        },
        {
            title: "Créer une méthode statique",
            description: "Ajouter une méthode statique <code>compute</code> à la classe <code>Total</code>. Cette méthode, ajoutée sans passer par le prototype, permet d'être invoquée sans créer d'instance de cette classe. Utiliser cette méthode statique pour mettre à jour le prix <code>.cart-price</code> dans le composant <code>CartView</code>.",
            excerpt: "Les méthodes statiques permettent de regrouper des fonctions utilitaires au sein de classes, la classe Math en propose de très nombreuses, comme <code>Math.sin</code>, <code>Math.max</code>, etc.",
            solved: "var ProductView = function(product, options) {<br>  this.product = product;<br>  this.options = options;<br><br>  this.el = document.createElement('div');<br>}<br><br>ProductView.prototype = {<br>  render: function() {<br>    var source = document.querySelector('#product').innerHTML;<br>    var template = Handlebars.compile(source);<br>    this.el.innerHTML = template(this.product);<br><br>    this.el.querySelector('.plus').addEventListener('click', function() {<br>      this.product.quantity++;<br>      this.render();<br>      this.options.onUpdate();<br>    }.bind(this));<br><br>    this.el.querySelector('.minus').addEventListener('click', function() {<br>      if (this.product.quantity <= 0)<br>        return;<br><br>      this.product.quantity--;<br>      this.render();<br>      this.options.onUpdate();<br>    }.bind(this));<br>  }<br>}<br><br>var ProductsView = function(products, options) {<br>  this.products = products;<br>  this.options = options;<br><br>  this.el =  document.createElement('div');<br>  this.el.className = 'ui cards';<br>}<br><br>ProductsView.prototype = {<br>  render: function() {<br>    for (let i = 0; i < this.products.length; i++) {<br>      var children = new ProductView(this.products[i], this.options);<br>      this.el.appendChild(children.el);<br>      children.render();<br>    }<br>  }<br>}<br><br>var CartView = function(products, options) {<br>  this.products = products;<br>  this.options = options;<br><br>  this.el = document.createElement('div');<br>}<br><br>CartView.prototype = {<br>  renderTotal() {<br>    this.el.querySelector('.cart-price').innerHTML = Total.compute(this.products).price + '€';<br>  },<br>  render: function() {<br>    var source = document.querySelector('#cart').innerHTML;<br>    var template = Handlebars.compile(source);<br>    this.el.innerHTML = template(this.products);<br><br>    var inputs = this.el.querySelectorAll('input');<br>    for (let i = 0; i < inputs.length; i++) {<br>      inputs[i].addEventListener('input', function() {<br>        this.products[i].quantity = Math.floor(inputs[i].value);<br>        this.renderTotal();<br>        this.options.onUpdate();<br>      }.bind(this));<br>    }<br>    this.renderTotal();<br>  }<br>}<br><br>var Total = function(products) {<br>  this.products = products;<br>}<br><br>Total.compute = function(products) {<br>  var computed = {quantity: 0, price: 0};<br>  <br>  for (var i = 0; i < products.length; i++) {<br>    var product = products[i];<br>    computed.quantity += product.quantity;<br>    computed.price += (product.price * product.quantity);<br>  }<br><br>  return computed;<br>}<br><br>Total.prototype = {<br>  render() {<br>    var computed = Total.compute(this.products);<br><br>    document.querySelector('.cart-quantity').innerHTML = computed.quantity;;<br>    document.querySelector('.cart-price').innerHTML = computed.price + '€';<br>  }<br>}<br><br>var Router = function() {<br>  this.total = new Total(products);<br>  this.appView = document.querySelector('#app-view');<br>  this.render();<br><br>  window.addEventListener('hashchange', this.render.bind(this));<br>};<br><br>Router.prototype = {<br>  onUpdate: function() {<br>    this.total.render();<br>  },<br>  render: function() {<br>    var view;<br>    var options = {onUpdate: this.onUpdate.bind(this)};<br>    <br>    switch(location.hash) {<br>      case '#cart': <br>        view = new CartView(products, options);<br>        break;<br>      default:<br>        view = new ProductsView(products, options);<br>        break;<br>    }<br>    <br>    this.appView.innerHTML = '';<br>    this.appView.appendChild(view.el);<br>    view.render();<br><br>    this.total.render();<br>  }<br>}<br><br>new Router();",
            init: function() {
                window.products = helpers.deepClone(dom.shopProducts);
            },
            dom: function() {
                return dom.shop();
            },
            reload: function() {
                removeEventListener('hashchange');
            },
            solution: function() {
                document.querySelector('.item.cart').click();  
                
                return http.hashWait()
                .then(function() {
                    var items = document.querySelectorAll('.ui.list .item');
                    var input = items[1].querySelector('input');
                    input.value = 5;
                    helpers.change(input, 'input');

                    var price = document.querySelector('#app-view .cart-price').innerHTML;
                    if (price !== '125€')
                        this.warn = this.warn || 'Ajouter 5 exemplaires du second produit doit afficher un prix de 125€ dans le <code>.cart-price</code> du panier';

                    return !this.warn;
                }.bind(this));
            }
        },
        {
            title: "Ajouter un paiement sécurisé",
            description: "Importer la librairie stripe, et utiliser stripe elements pour afficher un formulaire de paiement (à l'aidé d'une clé publique obtenue en créant un compte). Ajouter une vue <code>PaymentView</code>, affichée par le routeur au hash <code>#payment</code>, affichant ce formulaire à l'aide de la template <code>#payment</code>. Ce formulaire génère un token à l'aide de la carte bleue saisie (en mode test, 4242 4242 4242 4242). Pour l'instant, après l'appel à <code>createToken</code> afficher ce token à la place du libellé du bouton payer.",
            exerpt: "Stripe est une solution de paiement en ligne qui offre deux outils : des interface de saisie de carte bleue côté client et une api de paiement côté serveurs. La qualité de sa documentation et de son back office est souvent louée par la communauté.",
            solved: "/* import this in the HTML <head> before the code<br>&lt;script src=\"https://js.stripe.com/v3/\"&gt;&lt;/script&gt;<br>*/<br>var ProductView = function(product, options) {<br>  this.product = product;<br>  this.options = options;<br><br>  this.el = document.createElement('div');<br>}<br><br>ProductView.prototype = {<br>  render: function() {<br>    var source = document.querySelector('#product').innerHTML;<br>    var template = Handlebars.compile(source);<br>    this.el.innerHTML = template(this.product);<br><br>    this.el.querySelector('.plus').addEventListener('click', function() {<br>      this.product.quantity++;<br>      this.render();<br>      this.options.onUpdate();<br>    }.bind(this));<br><br>    this.el.querySelector('.minus').addEventListener('click', function() {<br>      if (this.product.quantity <= 0)<br>        return;<br><br>      this.product.quantity--;<br>      this.render();<br>      this.options.onUpdate();<br>    }.bind(this));<br>  }<br>}<br><br>var ProductsView = function(products, options) {<br>  this.products = products;<br>  this.options = options;<br><br>  this.el =  document.createElement('div');<br>  this.el.className = 'ui cards';<br>}<br><br>ProductsView.prototype = {<br>  render: function() {<br>    for (let i = 0; i < this.products.length; i++) {<br>      var children = new ProductView(this.products[i], this.options);<br>      this.el.appendChild(children.el);<br>      children.render();<br>    }<br>  }<br>}<br><br>var CartView = function(products, options) {<br>  this.products = products;<br>  this.options = options;<br><br>  this.el = document.createElement('div');<br>}<br><br>CartView.prototype = {<br>  renderTotal() {<br>    this.el.querySelector('.cart-price').innerHTML = Total.compute(this.products).price + '€';<br>  },<br>  render: function() {<br>    var source = document.querySelector('#cart').innerHTML;<br>    var template = Handlebars.compile(source);<br>    this.el.innerHTML = template(this.products);<br><br>    var inputs = this.el.querySelectorAll('input');<br>    for (let i = 0; i < inputs.length; i++) {<br>      inputs[i].addEventListener('input', function() {<br>        this.products[i].quantity = Math.floor(inputs[i].value);<br>        this.renderTotal();<br>        this.options.onUpdate();<br>      }.bind(this));<br>    }<br>    this.renderTotal();<br>  }<br>}<br><br>var Total = function(products) {<br>  this.products = products;<br>}<br><br>Total.compute = function(products) {<br>  var computed = {quantity: 0, price: 0};<br>  <br>  for (var i = 0; i < products.length; i++) {<br>    var product = products[i];<br>    computed.quantity += product.quantity;<br>    computed.price += (product.price * product.quantity);<br>  }<br><br>  return computed;<br>}<br><br>Total.prototype = {<br>  render() {<br>    var computed = Total.compute(this.products);<br><br>    document.querySelector('.cart-quantity').innerHTML = computed.quantity;;<br>    document.querySelector('.cart-price').innerHTML = computed.price + '€';<br>  }<br>}<br><br>var Router = function() {<br>  this.total = new Total(products);<br>  this.appView = document.querySelector('#app-view');<br>  this.render();<br><br>  window.addEventListener('hashchange', this.render.bind(this));<br>};<br><br>var PaymentView = function(products, options) {<br>  this.products = products;<br>  this.options = options;<br><br>  this.el = document.createElement('div');<br>  this.render();<br>}<br><br>PaymentView.prototype = {<br>  publishableKey: 'pk_test_{token}',<br>  render: function() {<br>    this.el.innerHTML = document.querySelector('#payment').innerHTML;<br><br>    var stripe = Stripe(this.publishableKey);<br>    var elements = stripe.elements();<br>    var card = elements.create('card', {hidePostalCode: true});<br>    card.mount(this.el.querySelector('.stripe'));<br><br>    var button = this.el.querySelector('.button');<br>    button.querySelector('.cart-price').innerHTML = Total.compute(this.products).price + '€';<br><br>    this.el.querySelector('.checkout').addEventListener('submit', function(event) {<br>      event.preventDefault();<br><br>      button.classList.add('loading');<br>      <br>      stripe.createToken(card).then(function(data) {<br>        button.classList.remove('loading');<br><br>        var token = data.token.id;<br>        button.innerHTML = token<br>      }.bind(this));<br>    }.bind(this));<br>  }<br>}<br><br>Router.prototype = {<br>  onUpdate: function() {<br>    this.total.render();<br>  },<br>  render: function() {<br>    var view;<br>    var options = {onUpdate: this.onUpdate.bind(this)};<br>    <br>    switch(location.hash) {<br>      case '#cart': <br>        view = new CartView(products, options);<br>        break;<br>      case '#payment': <br>        view = new PaymentView(products, options);<br>        break;<br>      default:<br>        view = new ProductsView(products, options);<br>        break;<br>    }<br>    <br>    this.appView.innerHTML = '';<br>    this.appView.appendChild(view.el);<br>    view.render();<br><br>    this.total.render();<br>  }<br>}<br><br>new Router();",
            init: function() {
                window.products = helpers.deepClone(dom.shopProducts);
            },
            dom: function() {
                return dom.shop();
            },
            reload: function() {
                removeEventListener('hashchange');
            },
            solution: function() {
                document.querySelector('.item.cart').click();  
                
                return http.hashWait()
                .then(function() {
                    var items = document.querySelectorAll('.ui.list .item');
                    var input = items[1].querySelector('input');
                    input.value = 5;
                    helpers.change(input, 'input');

                    document.querySelector('#app-view .button').click();  
                    return http.hashWait();
                })
                .then(function() {
                    var checkout = document.querySelector('.checkout');
                    if (!checkout || checkout.querySelectorAll('.button').length !== 1)
                        this.warn = this.warn || 'Cliquer sur le lien du panier, puis sur « passer à la caisse » doit afficher le formulaire de paiement';
                    
                    return !this.warn;
                }.bind(this))
            }
        },
        {
            title: "Effectuer le paiement",
            description: "Effectuer un appel à l'api privée de stripe.",
            excerpt: "L'api <code>charge</code> de stripe est destinée a être requétée avec un serveur par mesure de sécurité (les données bancaires et leur accès sont très sensibles). Une clé privée est prévue pour cela. Il est possible de simuler cet appel côté client, mais cela requiert d'utiliser un serveur de fichiers pour afficher l'application actuelle (browsersync, par exemple). Ainsi, au lieu de <code>file://</code>, elle est accédée par le navigateur en <code>localhost://</code>. Une fois le paiement réussi, vérifier dans l'interface de stripe qu'il y figure bien",
            solved: "var ProductView = function(product, options) {<br>  this.product = product;<br>  this.options = options;<br><br>  this.el = document.createElement('div');<br>}<br><br>ProductView.prototype = {<br>  render: function() {<br>    var source = document.querySelector('#product').innerHTML;<br>    var template = Handlebars.compile(source);<br>    this.el.innerHTML = template(this.product);<br><br>    this.el.querySelector('.plus').addEventListener('click', function() {<br>      this.product.quantity++;<br>      this.render();<br>      this.options.onUpdate();<br>    }.bind(this));<br><br>    this.el.querySelector('.minus').addEventListener('click', function() {<br>      if (this.product.quantity <= 0)<br>        return;<br><br>      this.product.quantity--;<br>      this.render();<br>      this.options.onUpdate();<br>    }.bind(this));<br>  }<br>}<br><br>var ProductsView = function(products, options) {<br>  this.products = products;<br>  this.options = options;<br><br>  this.el =  document.createElement('div');<br>  this.el.className = 'ui cards';<br>}<br><br>ProductsView.prototype = {<br>  render: function() {<br>    for (let i = 0; i < this.products.length; i++) {<br>      var children = new ProductView(this.products[i], this.options);<br>      this.el.appendChild(children.el);<br>      children.render();<br>    }<br>  }<br>}<br><br>var CartView = function(products, options) {<br>  this.products = products;<br>  this.options = options;<br><br>  this.el = document.createElement('div');<br>}<br><br>CartView.prototype = {<br>  renderTotal() {<br>    this.el.querySelector('.cart-price').innerHTML = Total.compute(this.products).price + '€';<br>  },<br>  render: function() {<br>    var source = document.querySelector('#cart').innerHTML;<br>    var template = Handlebars.compile(source);<br>    this.el.innerHTML = template(this.products);<br><br>    var inputs = this.el.querySelectorAll('input');<br>    for (let i = 0; i < inputs.length; i++) {<br>      inputs[i].addEventListener('input', function() {<br>        this.products[i].quantity = Math.floor(inputs[i].value);<br>        this.renderTotal();<br>        this.options.onUpdate();<br>      }.bind(this));<br>    }<br>    this.renderTotal();<br>  }<br>}<br><br>var Total = function(products) {<br>  this.products = products;<br>}<br><br>Total.compute = function(products) {<br>  var computed = {quantity: 0, price: 0};<br>  <br>  for (var i = 0; i < products.length; i++) {<br>    var product = products[i];<br>    computed.quantity += product.quantity;<br>    computed.price += (product.price * product.quantity);<br>  }<br><br>  return computed;<br>}<br><br>Total.prototype = {<br>  render() {<br>    var computed = Total.compute(this.products);<br><br>    document.querySelector('.cart-quantity').innerHTML = computed.quantity;;<br>    document.querySelector('.cart-price').innerHTML = computed.price + '€';<br>  }<br>}<br><br>var Router = function() {<br>  this.total = new Total(products);<br>  this.appView = document.querySelector('#app-view');<br>  this.render();<br><br>  window.addEventListener('hashchange', this.render.bind(this));<br>};<br><br>var PaymentView = function(products, options) {<br>  this.products = products;<br>  this.options = options;<br><br>  this.el = document.createElement('div');<br>  this.render();<br>}<br><br>PaymentView.prototype = {<br>  publishableKey: 'pk_test_{token}',<br>  secretKey: 'sk_test_{token}',<br>  encodeBodyAsQueryParams: function(body) {<br>    return Object.keys(body).map(function(key) {<br>      return encodeURIComponent(key) + '=' + encodeURIComponent(body[key]);<br>    }).join('&');<br>  },<br>  render: function() {<br>    this.el.innerHTML = document.querySelector('#payment').innerHTML;<br><br>    var stripe = Stripe(this.publishableKey);<br>    var elements = stripe.elements();<br>    var card = elements.create('card', {hidePostalCode: true});<br>    card.mount(this.el.querySelector('.stripe'));<br><br>    var button = this.el.querySelector('.button');<br>    button.querySelector('.cart-price').innerHTML = Total.compute(this.products).price + '€';<br><br>    this.el.querySelector('.checkout').addEventListener('submit', function(event) {<br>      event.preventDefault();<br><br>      button.classList.add('loading');<br><br>      stripe.createToken(card).then(function(data) {<br>        var token = data.token.id;<br><br>        fetch('https://api.stripe.com/v1/charges', {<br>          method: 'POST',<br>          headers: {<br>            'Authorization': 'Bearer ' + this.secretKey,<br>            'Content-Type': 'application/x-www-form-urlencoded'<br>          },<br>          mode: 'cors',<br>          body: this.encodeBodyAsQueryParams({<br>            amount: 100 * Total.compute(this.products).price,<br>            currency: 'eur',<br>            description: 'shop',<br>            source: token<br>          })<br>        })<br>        .then(function(response) {<br>          return response.json();<br>        })<br>        .then(function(data) {<br>          button.classList.remove('loading');<br>          <br>          for (var i = 0; i < this.products.length; i++) {<br>            this.products[i].quantity = 0;<br>          }<br>          this.options.onUpdate();<br>        }.bind(this))<br>        .catch(function(err) {<br>          console.log(err);<br>        });<br>      }.bind(this));<br>    }.bind(this));<br>  }<br>}<br><br>Router.prototype = {<br>  onUpdate: function() {<br>    this.total.render();<br>  },<br>  render: function() {<br>    var view;<br>    var options = {onUpdate: this.onUpdate.bind(this)};<br>    <br>    switch(location.hash) {<br>      case '#cart': <br>        view = new CartView(products, options);<br>        break;<br>      case '#payment': <br>        view = new PaymentView(products, options);<br>        break;<br>      default:<br>        view = new ProductsView(products, options);<br>        break;<br>    }<br>    <br>    this.appView.innerHTML = '';<br>    this.appView.appendChild(view.el);<br>    view.render();<br><br>    this.total.render();<br>  }<br>}<br><br>new Router();",
            init: function() {
                window.products = helpers.deepClone(dom.shopProducts);
            },
            dom: function() {
                return dom.shop();
            },
            reload: function() {
                removeEventListener('hashchange');
            },
            solution: function() {
                document.querySelector('.item.cart').click();  
                
                return http.hashWait()
                .then(function() {
                    var items = document.querySelectorAll('.ui.list .item');
                    var input = items[1].querySelector('input');
                    input.value = 5;
                    helpers.change(input, 'input');

                    document.querySelector('#app-view .button').click();  
                    return http.hashWait();
                })
                .then(function() {
                    var checkout = document.querySelector('.checkout');
                    if (!checkout || checkout.querySelectorAll('.button').length !== 1)
                        this.warn = this.warn || 'Cliquer sur le lien du panier, puis sur « passer à la caisse » doit afficher le formulaire de paiement';
                    
                    return !this.warn;
                }.bind(this))
            }
        }]
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
                    window.x = this.x = helpers.randomize("I used to get mad at my school (No I can't complain)", "Lucy in the sky with diamonds", "And in the end, the love you take is equal to the love you make", "Sit back and let the evening go");
                },
                answer: function() {
                    return this.x.replace(/e/ig, '');
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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
                    window.x = this.x = helpers.randomize("I used to get mad at my school (No I can't complain)", "Lucy in the sky with diamonds", "And in the end, the love you take is equal to the love you make", "Sit back and let the evening go");
                },
                answer: function() {
                    return /en./i.test(this.x);
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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
                    window.x = this.x = helpers.randomize("I used to get mad at my school (No I can't complain)", "Lucy in the sky with diamonds", "And in the end, the love you take is equal to the love you make", "Sit back and let the evening go");
                },
                answer: function() {
                    var match = this.x.match(/e/ig);
                    return !match ? 0 : match.length;
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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
                    window.x = this.x = helpers.randomize("I used to get mad at my school (No I can't complain)", "Lucy in the sky with diamonds", "And in the end, the love you take is equal to the love you make", "Sit back and let the evening go");
                    window.y = this.y = helpers.randomize("en.", "e.*d", "e?t")
                },
                answer: function() {
                    return new RegExp(this.y).test(this.x);
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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
                    window.x = this.x = helpers.randomize("I used to get mad at my school (No I can't complain)", "Lucy in the sky with diamonds", "And in the end, the love you take is equal to the love you make", "Sit back and let the evening go");
                },
                answer: function() {
                    return this.x.replace(/(to|at|in|is)/g, '');
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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
                    window.x = this.x = helpers.randomize("I used to get mad at my school (No I can't complain)", "Lucy in the sky with diamonds", "And in the end, the love you take is equal to the love you make", "Sit back and let the evening go");
                },
                answer: function() {
                    return this.x.replace(/(\w)e(\w)/ig, '$1-e-$2');
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
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
                    window.x = this.x = helpers.randomize("I used to <strong>get</strong> mad at my school (No I <strong>can't</strong> complain)", "Lucy in the <strong>sky</strong> with <strong>diamonds</strong>", "And in the end, the love you <strong>take</strong> is equal to the love you <strong>make</strong>", "Sit <strong>back</strong> and let the evening <strong>go</strong>");
                },
                answer: function() {
                    var match = this.x.match(/<strong>.*?<\/strong>/g);
                    return !match ? 0 : match.length;
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
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

                    ### Fat arrows

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

                        var beatles = {
                          song: 'Lonely hearts club band',
                          play: function() {
                            var fn = () => {
                              console.log(this.song);
                            };

                            setTimeout(fn, 10);
                          }
                        };

                        beatles.play(); // displays 'Lonely hearts club band', without => it displays undefined
                `
            },
            {
                title: "Modifier un tableau",
                description: "Créer une variable nommée <code>answer</code> de type tableau avec toutes les valeurs du tableau <code>x</code> (déclarée par ce tutoriel) dont chaque valeur a été arrondie à l'entier le plus proche (ex. [1.2, 5.7, 7.5] -> [1, 6, 8]).",
                excerpt: "Les méthodes <code>map</code> et <code>forEach</code> parcourent toutes deux le tableau sur lequel elles s'appliquent. <code>map</code> retourne un nouveau tableau ou chaque valeur du tableau original peut avoir été modifiée, <code>forEach</code> peut modifier le tableau actuel ou seulement lire les valeurs pour les afficher, par exemple.",
                solved: "var answer = x.map(value => Math.round(value));<br><br>/* -------------------- or -------------------- */<br><br>var answer = [];<br>x.forEach(value => answer.push(Math.round(value)));<br><br>/* ------------------- es5 -------------------- */<br><br>var answer = x.map(function(value) {<br>  return Math.round(value);<br>});<br><br>/* ------------------- es3 -------------------- */<br><br>var answer = [];<br>for (var i = 0; i < x.length; i++) {<br>  var value = x[i];<br>  answer[i] = Math.round(value); <br>}",
                init: function() {
                    this.x = [helpers.random(1, 10) + 0.1 * helpers.random(1, 10), helpers.random(1, 10) + 0.1 * helpers.random(1, 10), helpers.random(1, 10) + 0.1 * helpers.random(1, 10), helpers.random(1, 10) + 0.1 * helpers.random(1, 10)];
                    window.x = this.x.slice(0);
                },
                answer: function() {
                    return this.x.map(function(item) { return Math.round(item); });
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
                },
                solution: function() {
                    return helpers.equals(answer, this.answer());
                }
            },
            {
                title: "Filtrer un tableau",
                description: "Créer une variable nommée <code>answer</code> de type tableau avec toutes les valeurs du tableau <code>x</code> dont les valeurs inférieures à 10 ont été retirées (ex. [7, 12, 3, 17] -> [12, 17] — déclarées par ce tutoriel). La méthode <code>filter</code> est la plus approriée pour se faire.",
                solved: "var answer = x.filter(value => value >= 10);<br><br>/* ------------------- es5 -------------------- */<br><br>var answer = x.filter(function(value) {<br>  return value >= 10;<br>});<br><br>/* ------------------- es3 -------------------- */<br><br>var answer = [];<br>for (var i = 0; i < x.length; i++) {<br>  if (x[i] >= 10) {<br>    answer.push(x[i]);<br>  }<br>}",
                init: function() {
                    this.x = [helpers.random(1, 20), helpers.random(1, 20), helpers.random(1, 20), helpers.random(1, 20), helpers.random(1, 20), helpers.random(1, 20), helpers.random(1, 20), helpers.random(1, 20)];
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
                    return helpers.equals(answer, this.answer());
                }
            },
            {
                title: "Calculer une moyenne",
                description: "Créer une variable nommée <code>answer</code> ayant pour valeur la moyenne (entière, arrondie au supérieur) des valeurs du tableau <code>x</code> (ex. [1, 5, 7] -> (1+5+7)/3 -> 4 — déclarée par ce tutoriel). La méthode <code>reduce</code> est la plus approriée pour se faire.",
                solved: "var answer = Math.ceil(x.reduce((memo, value) => memo + value, 0) / x.length);<br><br>/* -------------------- es5 -------------------- */<br><br>var answer = x.reduce(function(memo, value) {<br>  return memo + value;<br>}, 0);<br>answer = Math.ceil(answer / x.length);<br><br>/* -------------------- es3 -------------------- */<br><br>var answer = 0;<br>for (var i = 0; i < x.length; i++) {<br>  answer = answer + x[i];<br>}<br>answer = Math.ceil(answer / x.length);",
                init: function() {
                    this.x = [helpers.random(1, 10), helpers.random(1, 10), helpers.random(1, 10), helpers.random(1, 10)];
                    window.x = this.x.slice(0);
                },
                answer: function() {
                    return Math.ceil(this.x.reduce(function(memo, value) { return memo + value; }, 0) / this.x.length);
                },
                warn: function() {
                    return helpers.basicWarn(answer, this.answer());
                },
                solution: function() {
                    return answer === this.answer();
                }
            },
            {
                title: "Les classes ES6",
                course: true,
                description: `
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
                title: "Créer une classe",
                description: "Créer une classe nommée <code>Movie</code> dont le constructeur reçoit son titre, <code>title</code>, et son année de sortie, <code>release</code> en paramètre. Cette classe possède une méthode <code>isOlderThan</code> qui reçoit un <code>Movie</code> en paramètre et retourne <code>true</code> si le film en paramètre est sorti après l'instance testée (<code>alien.isOlderThan(terminator)</code> retourne <code>true</code>).",
                solved: "class Movie {<br>  constructor(title, release) {<br>    this.title = title;<br>    this.release = release;<br>  }<br>  isOlderThan(movie) {<br>    return this.release < movie.release;<br>  }<br>}<br><br>/* -------------------- es5 -------------------- */<br><br>var Movie = function(title, release) {<br>  this.title = title;<br>  this.release = release;<br>}<br><br>Movie.prototype.isOlderThan = function(movie) {<br>  return this.release < movie.release;<br>}",
                init: function() {
                    this.x = [helpers.random(1, 10), helpers.random(1, 10), helpers.random(1, 10), helpers.random(1, 10)];
                    window.x = this.x.slice(0);
                },
                solution: function() {
                    var alien = new Movie('alien', 1979);
                    var terminator = new Movie('terminator', 1984);
                    if (!alien.isOlderThan(terminator))
                        this.warn = this.warn || "La méthode <code>isOlderThan</code> doit retourner <code>true</code> si la film passé en paramètre est sorti après l'instance testée";

                    return !this.warn;
                }
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
        title: "Prototype, héritage, contexte",
        description: "Les classes JavaScript repose sur une chaîne de prototypes. Cela offre plus de richesse que dans d'autres approches plus tradiotnnelles, mais implique également certaines contraintes.<br><br>Ce chapitre approfondit la programmation objet.",
        color: "grey",
        steps: [{
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
        }]
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

let glossary = {
    render: function(gpage) {
        let operations = `
            ### Valeurs

            Un nombre.

                12

            ---

            D'autres nombres (négatif, fraction, exposant).

                -12 1.5 3.4e10
            
            ---

            Une chaîne avec des guillemets est une chaîne de caractères, un morceau de texte. Guillemets doubles ou simples.

                "Il était une fois"

            ---

            Un booléen, true pour oui, false pour non.

                true

            ### Opérateurs

            Une addition (égal 13).

                10 + 3
            
            ---

            Une soustraction (égal 7).

                10 - 3
            
            ---

            Une multiplication (égal 30).

                10 * 3
            
            ---

            Une division (égal 3.33).

                10 / 3

            ---

            Un modulo (égal 2). Retourne le reste de la division euclidienne, c'est à dire 14 divisé par 4 arrondi à l'entier inférieur — donc 3. Le module est alors 14 moins 4 fois 3, c'est à dire 2.

                14 % 4
        `;

        let variables = `
            ### Variables, types simples

            La définition d'une variable. La variable « banana » est définie avec la valeur 18. La valeur est optionnelle. var banana (sans donner de valeur) la définit avec la valeur undefined.

                var banana = 18

            ---

            Une définition multiple. Chaque définition est séparée par une virgule.

                var banana = 18, lemon = 12

            ---

            Un mot sans guillemets référence une variable dans le contexte actuel et accède à sa valeur. Le résultat est 18.

                banana

            ---

            Opérateur appliqué à deux variables. Le résultat est 30. Plusieurs opérateurs disponibles,      + pour additionner, - pour soustraire, * pour multiplier, / pour diviser.

                banana + lemon

            ---

            Les parenthèses utilisées pour expliciter un groupe. Par défaut les multiplications et les divisions sont exécutées avant les additions. Ici, l'addition est prioritaire grâce aux parenthèses. Le résultat est 300. Sans parenthèses le résultat serait 138.

                (banana + lemon) * 10

            ---

            Un opérateur de comparaison. Le résultat est false (18 est supérieur à 12). Plusieurs opérateurs disponibles, ==, != (différent), <, >, <= (inférieur ou égal), >=, === (égal si type identique, le chiffre 18 est différent de la chaîne de caractères "18" pour cet opérateur), !==.

                banana < lemon

            ---

            Un opérateur logique. Deux opérateurs,  && (et), || (ou). L'opérateur ou retourne true si l'un de ces membres est évalué à true. L'opérateur et retourne true si tous ses membres sont évalués à true. En cas contraire, ces opérateurs retournent false.
            L'opérateur ou évalue ses membres un à un jusqu'à trouver une valeur évaluée à true, il arrête d'évaluer ses membres dès qu'il en a trouvé une. L'opérateur et évalue ses membres un à un tant qu'il trouve une valeur évaluée à true, il arrête d'évaluer ses membres dès qu'il en a trouvé une false.
            Si ils trouvent une valeur évaluée à true, ces opérateurs retourne la valeur évaluée.

                banana && lemon

            ### Variables, types complexes

            Un tableau représente une liste de valeurs ou de variables.

                var fruits = [banana, lemon, "grapes", 15]

            ---

            Accès à l'élément stocké dans la troisième case du tableau (zéro est la première case). Le résultat est "grapes". Si l'élément n'existe pas le résultat est undefined.

                fruits[2]

            ---

            Modification de l'élément stocké dans la troisième case du tableau.

                fruits[2] = "strawberries"

            ---

            Un objet représente une liste de valeurs sous la forme clé: valeur séparées par des virgules. Deux accolades encadre sa déclaration.

                var tree = {color: "yellow", fruit: "lemon"}

            ---

            Accès à la propriété stockée pour la clé color de l'objet tree. Le résultat est "yellow". Si la propriété n'existe pas le résultat est undefined.

                tree.color

            ---

            Modification de la propriété stockée pour la clé color de l'objet tree.

                tree.color = "green"

            ---

            Utilisation d'objet comme éléments d'un tableau.

                var fruits=[{color:"red",fruit:"grapes"},{color:"yellow",fruit:"lemon"}]

            ---

            Utilisation de tableaux comme valeur d'objet.

                var fruits={color:["red", "green"],fruit:"grapes"}

            ### Propriétés usuelles des tableaux

            Retourne le nombre d'éléments du tableau.

                fruits.length

            ---

            Ajoute un élément au début du tableau.

                fruits.unshift("orange")

            ---

            Ajoute un élément à la fin du tableau.

                fruits.push("orange")

            ---

            Supprime le premier élément d'un tableau et le retourne.

                fruits.shift()

            ---

            Supprime le dernier élément d'un tableau et le retourne.

                fruits.pop()

            ---

            Retourne une partie du tableau, similaire à slice pour les chaîne de caractères.

                fruits.slice(1, 3)
        `;

        let conditions = `
            ### Branchements conditionnels

            Une instruction conditionnelle. Si la condition est évaluée à true, les instructions situées entres les premières accolades sont exécutées. Sinon, les instructions du else sont exécutées. Le else est optionnel. Les instructions conditionnelles de ce type peuvent être chaînées : if (condition) {} else if (otherCondition) {} else {}.

                if (tree.color == "yellow") { /* .. */ } else { /* .. */ }

            ---

            Une boucle. Les instructions entre accolades sont exécutées tant que la condition est évaluée à true.

                while (size < 12) { size = size - 1; }

            ---

            Une boucle pour. Cette boucle est composé de trois blocs séparés par des points virgules. Le premier déclare une variable et l'initialise, le second indique la condition de sortie de boucle et le troisième indique l'opération a effectuer après chaque tour de boucle. Pour chaque tour de boucle les instructions entre accolades sont exécutées.

                for (var i = 0; i < 10; i++) { /* .. */ }

            ### Propriétés mathématiques usuelles

            Retourne un nombre aléatoire entre 0 et 1.

                Math.random()

            ---

            Retourne un entier arrondi au plus proche. Le résultat est 2 (ou 3 pour Math.round(2.5)).

                Math.round(2.4)

            ---

            Retourne la valeur absolue d'une nombre. Le résultat est 4.

                Math.abs(-4)

            ---

            Retourne le nombre le plus grand parmi une liste. Le résultat est 5.

                Math.max(1, 5, 4)
        `;

        let dom = `
            ### DOM — Document Object Model

            Sélectionne le premier élément de la page avec la classe visible. La sélection se fait avec la même syntaxe que celle utilisée par le CSS. Le sélecteur #name, sélectionne l'élément avec l'id name le sélecteur .value sélectionne l'élément avec la classe value.

                var el = document.querySelector('.visible');

            ---

            Une fois un élément sélectionné, il est possible de modifier son contenu (le texte situé entre ses balises). Le texte ainsi remplacé peut être un simple mot ou une suite de balises HTML qui seront intégrées à la page, par exemple "&lt;li&gt;item&lt;/li&gt;".

                el.innerHTML = 'text';

            ---

            Une fois un élément sélectionné, il est possible de modifier les classes dont il dispose à l'aide de son attribut classList. Celui-ci dispose notamment des méthodes add (ajouter une classe), remove (supprimer une classe) ou toggle (ajouter une classe si elle n'est pas présente, la supprimer si elle l'est).

                el.classList.add('.visible');

            ---

            Une fois un élément sélectionné, le supprime de la page.

                el.remove();

            ---

            Une fois un élément sélectionné, accède à ses attributs data-*. Ici dataset.value accède à son attribut data-value. Sa valeur peut être lue ou modifiée.

                el.dataset.value;

            ---

            Sélectionne tous les éléments de la page avec la classe visible.

                var els = document.querySelectorAll('.visible');

            ---

            Sélectionne tous les éléments td de la première table de la page.

                var els = document.querySelector('table').querySelectorAll('td');

            ---

            Ajoute un écouteur d'événement sur le premier élément de la page avec la classe visible. La fonction echo sera déclenchée à chaque clic sur cet élément. Les événements disponibles sont nombreux, notamment click, keypress (l'appui sur une touche) et blur (la perte de focus sur un champ de formulaire).

                var echo = function(event) { console.log(event.target); }
                document.querySelector('.visible').addEventListener('click', echo);
        `;

        let events = `
            ### Événements usuels souris

            Événements déclenchés par un clic de souris.

                'click', 'dblclick'
            
            ---

            Événements déclenchés par un survol de souris.
            
                'mouseover', 'mouseleave'

            ---
            
            Événements déclenchés par un glisser déposer de souris.
            
                'drag', 'dragend'


            ### Événements usuels clavier

            Événements déclenchés par une saisie de touches de clavier. Le premier paramètre de la fonction déclenchée dispose d'un attribut keyCode ou which correspondant au code de la touche appuyée. Le code 13 correspond à la touche entrée.
                
                'keydown', 'keyup', 'keypress'

            ### Événements usuels élément

            Événements déclenchés par la prise ou la perte de focus d'un élément.
            
                'focus', 'blur'
                
            ---

            Événement déclenché par le changement de valeur d'un champ de saisie. Le premier paramètre de la fonction déclenchée dispose d'un attribut currentTarget.value correspondant à la nouvelle valeur saisie.

                'change'
            
            ---

            Événement déclenché par la soumission d'un formulaire. Le premier paramètre de la fonction déclenchée dispose d'une fonction preventDefault() permettant d'interrompre le comportement normal du navigateur, d'éviter que le formulaire soit soumit à un serveur, et d'économiser ainsi un rechargement de page.
            
                'submit'

            ### Événements usuels document

            Événements déclenchés par le redimensionnement de la fenêtre ou le défilement de la page vers le haut ou le bas.

                'resize', 'scroll'
        `;

        let functions = `
            ### Fonctions usuelles

            Convertit une chaîne de caractères en nombre. Le résultat est 5.

                Number("5")

            ---

            Convertit un nombre en chaîne de caractère. Le résultat est "5".

                String(5)

            ---

            Retourne la taille (le nombre de caractères) d'une chaîne de caractères.

                "yellow".length

            ---

            Retourne le caractère à la position indiqué (0 est la première position). Le résultat est "o".

                "yellow".charAt(4)

            ---

            Retourne une partie de la chaîne  située entre les deux positions (0 est la première position, la position de début est incluse, pas celle de fin). Le résultat est "ll".

                "yellow".slice(2, 4)

            ---

            Découpe la chaîne selon un caractère, retourne un tableau. Le résultat est ["hi", "all"]

                "hi all".split(" ")

            ### Déclaration de fonctions

            Déclaration d'une fonction qui prend une variable en paramètre et retourne son attribut color. Une fonction peut prendre plusieurs paramètres en entrée (séparés par des virgules). Le corps de la fonction peut être composé de plusieurs traitements (conditions, boucles, etc).

                var findColor = function(something) { return something.color; }

            ---

            Appel de la fonction avec la variable tree. Le résultat est "yellow".

                var found = findColor({color: 'yellow'})
        `;

        let classes = `
            ### Classes, objet et prototype

            Crée une classe Pie.

                var Pie = function(fruits) { this.fruits = fruits; this.pieces = 8; }

            ---

            Ajoute une méthodes aux objets de la classe Pie.

                Pie.prototype.eat = function() { this.pieces--; }

            ---

            Crée un objet de classe Pie.

                var applePie = new Pie('apple')

            ---

            Crée un second objet de classe Pie.

                var cheeseCake = new Pie('cheese')

            ---

            Accède à un attribut de l'objet.

                applePie.fruits

            ---

            Ajoute dynamiquement un attribut à l'objet.

                applePie.weight = '800g'

            ---

            Invoque une méthode de l'objet.

                applePie.eat()

            ---

            Ajoute une méthode (dite statique) à la classe.

                Pie.favoriteFavour = function() { return 'lemon'; }

            ---

            Invoque une méthode de la classe.

                Pie.favoriteFavour()
        `;

        let index = (gpage && gpage.index) || 1;
        let visible = (gpage && gpage.visible) || false;

        let description = `
            <div class="ui one column grid h-glossary animated ${!visible ? 'hidden' : 'active visible'}" data-hook="glossary">
                <div class="column">
                    <div class="ui fluid card">
                        <div class="content">
                            <div class="ui floating labeled icon dropdown button">
                                <i class="sort icon"></i>
                                <span class="text">
                                    ${index === 1 ? 'Opérations' : ''}
                                    ${index === 2 ? 'Variables' : ''}
                                    ${index === 3 ? 'Conditions' : ''}
                                    ${index === 4 ? 'DOM' : ''}
                                    ${index === 5 ? 'Événements' : ''}
                                    ${index === 6 ? 'Fonctions' : ''}
                                    ${index === 7 ? 'Classes' : ''}
                                </span>
                                <div class="menu transition">
                                    <div class="item">Opérations</div>
                                    <div class="item">Variables</div>
                                    <div class="item">Conditions</div>
                                    <div class="item">DOM</div>
                                    <div class="item">Événements</div>
                                    <div class="item">Fonctions</div>
                                    <div class="item">Classes</div>
                                </div>
                            </div>

                            <br><br>

                            <div class="description ${index === 1 ? '' : 'hidden'}" data-tab="first">${marked(dedent(operations))}</div>
                            <div class="description ${index === 2 ? '' : 'hidden'}" data-tab="second">${marked(dedent(variables))}</div>
                            <div class="description ${index === 3 ? '' : 'hidden'}" data-tab="third">${marked(dedent(conditions))}</div>
                            <div class="description ${index === 4 ? '' : 'hidden'}" data-tab="forth">${marked(dedent(dom))}</div>
                            <div class="description ${index === 5 ? '' : 'hidden'}" data-tab="fifth">${marked(dedent(events))}</div>
                            <div class="description ${index === 6 ? '' : 'hidden'}" data-tab="fifth">${marked(dedent(functions))}</div>
                            <div class="description ${index === 7 ? '' : 'hidden'}" data-tab="sixth">${marked(dedent(classes))}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui top right attached medium labels">
                <div class="ui basic button ${!visible ? '' : 'active'}" data-hook="toggle-glossary">
                    <i class="book icon"></i>
                    <span>Lexique</span>
                </div>
            </div>
        `;

        return description;
    }, listen: function(el, fnToggle, fnUpdate) {
        let glossaryEl = el.querySelector('[data-hook="glossary"]');
        let dropdownEl = glossaryEl.querySelector('.dropdown span')
        let menuEl = glossaryEl.querySelector('.menu')
        el.querySelector('[data-hook="toggle-glossary"]').addEventListener('click', function() {
            this.classList.toggle('active');
            let hidden = glossaryEl.classList.toggle('hidden');
            fnToggle && fnToggle(!hidden);
        });

        glossaryEl.querySelector('.dropdown').addEventListener('click', function() {
            this.classList.toggle('active');
            this.classList.toggle('visible');
            menuEl.classList.toggle('visible');
        });

        let items = menuEl.querySelectorAll('.item');
        let contents = el.querySelectorAll('[data-tab].description');
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', function() {
                for (var j = 0; j < items.length; j++)
                    contents[j].classList.add('hidden');

                contents[i].classList.remove('hidden');
                dropdownEl.innerHTML = items[i].innerHTML;
                fnUpdate && fnUpdate(i + 1);
            });
        }
    }
};

let digest = function(el, data, methods) {
    let completion = data.completion;
    let gpage = data.gpage;

    let enter = methods.enter;
    let gpageToggle = methods.gpageToggle;
    let gpageUpdate = methods.gpageUpdate;

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

                ${glossary.render(gpage)}

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
            helpers.highlight();
            glossary.listen(el, gpageToggle, gpageUpdate);
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

    let enter = methods.enter;
    let leave = methods.leave;
    let jump = methods.jump;
    let completed = methods.completed;
    let nextChapter = methods.nextChapter;
    let nextStep = methods.nextStep;
    let resetChapter = methods.resetChapter;
    let gpageToggle = methods.gpageToggle;
    let gpageUpdate = methods.gpageUpdate;

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

                ${glossary.render(gpage)}

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
                                <div class="ui piled segment ${chapterContent.color} ${excerptHidden}">
                                    <h4 class="ui header">À propos</h4>
                                    <p>${stepContent.excerpt}</p>
                                </div>
                                <div class="divulge" data-hook="divulge" class="${this.methods.isSolvedHidden.call(this) ? 'hidden' : ''}"></div>
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


            let links = el.querySelectorAll('[data-hook=enter]')
            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener('click', function() {
                    enter(this.dataset.chapter);
                });
            }

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
            glossary.listen(el, gpageToggle, gpageUpdate);
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
            isSolvedHidden: function() {
                return stepContent.solvedOnSuccess && !this.methods.isDone(step);
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

                if (stepContent.dom) {
                    let dom = stepContent.dom();
                    if (typeof dom === 'function')
                        dom = dom();

                    document.querySelector('[data-hook=dom]').innerHTML = dom;
                }

                this.methods.reload.call(this, noWarning);
                this.methods.divulge.call(this);
                helpers.highlight();
            },
            warn: function() {
                let warning = 'Réponse incorrecte';
                if (typeof stepContent.warn === 'function') {
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
            divulge: function() {
                if (stepContent.solved && !this.methods.isSolvedHidden.call(this)) {
                    let elDivulge = el.querySelector('[data-hook=divulge]');
                    elDivulge.innerHTML = `
                        <a class="ui bottom attached label">
                            <i class="unlock icon"></i>Solution
                        </a>
                        <div class="hidden">
                            <pre><code class="javascript">${stepContent.solved}</code></pre>
                            <button class="ui inverted basic right floated mini button">Copier</button>
                        </div>
                    `;

                    elDivulge.classList.remove('hidden');

                    elDivulge.querySelector('.label').addEventListener('click', function() {
                        this.parentNode.querySelector('div').classList.toggle('hidden');
                    });

                    elDivulge.querySelector('button').addEventListener('click', function() {
                        var range = document.createRange();
                        range.selectNodeContents(elDivulge.querySelector('pre'));
                        var selection = window.getSelection();
                        selection.removeAllRanges();
                        selection.addRange(range);
                        document.execCommand('copy');
                        selection.removeAllRanges();

                        this.innerHTML = 'Copié !';
                        setTimeout(function() {
                            this.innerHTML = 'Copier';
                        }.bind(this), 3000);
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
        },
        gpageUpdate: function(i) {
            app.data.gpage = {index: i, visible: app.data.gpage.visible};
            localStorage.setItem('gpage', JSON.stringify(app.data.gpage));
        },
        gpageToggle: function(visible) {
            app.data.gpage = {index: !app.data.gpage ? 1 : app.data.gpage.index, visible: visible};
            localStorage.setItem('gpage', JSON.stringify(app.data.gpage));
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
if (localStorage.getItem('gpage')) {
    app.data.gpage = JSON.parse(localStorage.getItem('gpage'));
}

app.render();

})();
