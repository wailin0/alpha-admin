(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8076,7760,8274,3410],{24134:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var r=n(2265),o=n(7740),i=n(45590),a=n(70021),u=n(57437);function c(e){return e.substring(2).toLowerCase()}function s(e){let{children:t,disableReactTree:n=!1,mouseEvent:s="onClick",onClickAway:f,touchEvent:l="onTouchEnd"}=e,p=r.useRef(!1),d=r.useRef(null),y=r.useRef(!1),h=r.useRef(!1);r.useEffect(()=>(setTimeout(()=>{y.current=!0},0),()=>{y.current=!1}),[]);let v=(0,o.Z)(t.ref,d),b=(0,i.Z)(e=>{let t=h.current;h.current=!1;let r=(0,a.Z)(d.current);if(y.current&&d.current&&(!("clientX"in e)||!(r.documentElement.clientWidth<e.clientX)&&!(r.documentElement.clientHeight<e.clientY))){if(p.current){p.current=!1;return}(e.composedPath?e.composedPath().indexOf(d.current)>-1:!r.documentElement.contains(e.target)||d.current.contains(e.target))||!n&&t||f(e)}}),m=e=>n=>{h.current=!0;let r=t.props[e];r&&r(n)},g={ref:v};return!1!==l&&(g[l]=m(l)),r.useEffect(()=>{if(!1!==l){let e=c(l),t=(0,a.Z)(d.current),n=()=>{p.current=!0};return t.addEventListener(e,b),t.addEventListener("touchmove",n),()=>{t.removeEventListener(e,b),t.removeEventListener("touchmove",n)}}},[b,l]),!1!==s&&(g[s]=m(s)),r.useEffect(()=>{if(!1!==s){let e=c(s),t=(0,a.Z)(d.current);return t.addEventListener(e,b),()=>{t.removeEventListener(e,b)}}},[b,s]),(0,u.jsx)(r.Fragment,{children:r.cloneElement(t,g)})}},99949:function(e,t,n){"use strict";var r=n(88877);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var u=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},41448:function(e,t,n){e.exports=n(99949)()},88877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},95412:function(e,t,n){e.exports=n(64283)},20276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=(r=n(2265))&&r.__esModule?r:{default:r},a=n(63884),u=n(49611),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"buildURI",value:function(){return a.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,o=e.enclosingCharacter,i=e.uFEFF,a=e.target,u=e.specs,c=e.replace;this.state.page=window.open(this.buildURI(t,i,n,r,o),a,u,c)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(i.default.Component);c.defaultProps=Object.assign(u.defaultProps,{target:"_blank"}),c.propTypes=u.propTypes,t.default=c},69566:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=(r=n(2265))&&r.__esModule?r:{default:r},u=n(63884),c=n(49611),s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"buildURI",value:function(){return u.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var n=this.props,r=n.data,o=n.headers,i=n.separator,a=n.filename,c=n.enclosingCharacter,s=n.uFEFF,f=t&&"function"==typeof r?r():r,l=new Blob([s?"\uFEFF":"",(0,u.toCSV)(f,o,i,c)]);return window.navigator.msSaveBlob(l,a),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,function(n){if(!1===n){e.preventDefault();return}t.handleLegacy(e,!0)})}},{key:"handleSyncClick",value:function(e){if(!1===this.props.onClick(e)){e.preventDefault();return}this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"==typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.headers,i=t.separator,u=t.filename,c=t.uFEFF,s=t.children,f=(t.onClick,t.asyncOnClick,t.enclosingCharacter),l=function(e,t){var n={};for(var r in e)!(t.indexOf(r)>=0)&&Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),p="undefined"==typeof window?"":this.buildURI(n,c,r,i,f);return a.default.createElement("a",o({download:u},l,{ref:function(t){return e.link=t},target:"_self",href:p,onClick:this.handleClick()}),s)}}]),t}(a.default.Component);s.defaultProps=c.defaultProps,s.propTypes=c.propTypes,t.default=s},63884:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(e){if(!Array.isArray(e))return Array.from(e);for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}var o=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},i=t.isJsons=function(e){return Array.isArray(e)&&e.every(function(e){return(void 0===e?"undefined":n(e))==="object"&&!(e instanceof Array)})},a=t.isArrays=function(e){return Array.isArray(e)&&e.every(function(e){return Array.isArray(e)})},u=t.jsonsHeaders=function(e){return Array.from(e.map(function(e){return Object.keys(e)}).reduce(function(e,t){return new Set([].concat(r(e),r(t)))},[]))},c=t.jsons2arrays=function(e,t){var n=t=t||u(e),o=t;return i(t)&&(n=t.map(function(e){return e.label}),o=t.map(function(e){return e.key})),[n].concat(r(e.map(function(e){return o.map(function(t){return s(t,e)})})))},s=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce(function(e,t,n,r){var o=e[t];if(null!=o)return o;r.splice(1)},t);return void 0===n?e in t?t[e]:"":n},f=t.elementOrEmpty=function(e){return null==e?"":e},l=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter(function(e){return e}).map(function(e){return e.map(function(e){return f(e)}).map(function(e){return""+n+e+n}).join(t)}).join("\n")},p=t.arrays2csv=function(e,t,n,o){return l(t?[t].concat(r(e)):e,n,o)},d=t.jsons2csv=function(e,t,n,r){return l(c(e,t),n,r)},y=t.string2csv=function(e,t,n,r){return t?t.join(n)+"\n"+e:e.replace(/"/g,'""')},h=t.toCSV=function(e,t,n,r){if(i(e))return d(e,t,n,r);if(a(e))return p(e,t,n,r);if("string"==typeof e)return y(e,t,n);throw TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,r,i){var a=h(e,n,r,i),u=o()?"application/csv":"text/csv",c=new Blob([t?"\uFEFF":"",a],{type:u}),s="data:"+u+";charset=utf-8,"+(t?"\uFEFF":"")+a,f=window.URL||window.webkitURL;return void 0===f.createObjectURL?s:f.createObjectURL(c)}},64283:function(e,t,n){"use strict";t.CSVLink=void 0;var r=i(n(20276)),o=i(n(69566));function i(e){return e&&e.__esModule?e:{default:e}}r.default,t.CSVLink=o.default},49611:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0,(r=n(2265))&&r.__esModule;var r,o=n(41448);t.propTypes={data:(0,o.oneOfType)([o.string,o.array,o.func]).isRequired,headers:o.array,target:o.string,separator:o.string,filename:o.string,uFEFF:o.bool,onClick:o.func,asyncOnClick:o.bool,enclosingCharacter:o.string},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},t.PropsNotForwarded=["data","headers"]}}]);