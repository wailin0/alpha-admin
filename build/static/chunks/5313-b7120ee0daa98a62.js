"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5313],{43152:function(t,e,r){var i,n;function s(t){return!!t&&t<7}r.d(e,{Ie:function(){return i},Oj:function(){return s}}),(n=i||(i={}))[n.loading=1]="loading",n[n.setVariables=2]="setVariables",n[n.fetchMore=3]="fetchMore",n[n.refetch=4]="refetch",n[n.poll=6]="poll",n[n.ready=7]="ready",n[n.error=8]="error"},50072:function(t,e,r){r.d(e,{JO:function(){return c},fA:function(){return h},jo:function(){return l},qZ:function(){return p}});var i=r(11735),n=r(34511),s=r(76045),o=r(68876),u=Symbol(),a=Symbol();function c(t){var e,r=((e={toPromise:function(){var t;return("fulfilled"===(t=r[u]).promise.status?t.promise:r[a]).then(function(){return r})}})[u]=t,e[a]=t.promise,e);return r}function l(t){(0,o.kG)(!t||u in t,61)}function h(t){return t[u]}var f=["canonizeResults","context","errorPolicy","fetchPolicy","refetchWritePolicy","returnPartialData"],p=function(){function t(t,e){var r=this;this.key={},this.listeners=new Set,this.references=0,this.softReferences=0,this.handleNext=this.handleNext.bind(this),this.handleError=this.handleError.bind(this),this.dispose=this.dispose.bind(this),this.observable=t,e.onDispose&&(this.onDispose=e.onDispose),this.setResult(),this.subscribeToQuery();var i=function(){var t;r.references||(r.autoDisposeTimeoutId=setTimeout(r.dispose,null!==(t=e.autoDisposeTimeoutMs)&&void 0!==t?t:3e4))};this.promise.then(i,i)}return Object.defineProperty(t.prototype,"disposed",{get:function(){return this.subscription.closed},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"watchQueryOptions",{get:function(){return this.observable.options},enumerable:!1,configurable:!0}),t.prototype.reinitialize=function(){var t=this.observable,e=this.watchQueryOptions.fetchPolicy,r="no-cache"===e||"standby"===e;try{if(r?t.silentSetOptions({fetchPolicy:"standby"}):(t.resetLastResults(),t.silentSetOptions({fetchPolicy:"cache-first"})),this.subscribeToQuery(),r)return;t.resetDiff(),this.setResult()}finally{t.silentSetOptions({fetchPolicy:e})}},t.prototype.retain=function(){var t=this;this.references++,clearTimeout(this.autoDisposeTimeoutId);var e=!1;return function(){e||(e=!0,t.references--,setTimeout(function(){t.references||t.dispose()}))}},t.prototype.softRetain=function(){var t=this;this.softReferences++;var e=!1;return function(){e||(e=!0,t.softReferences--,setTimeout(function(){t.softReferences||t.references||t.dispose()}))}},t.prototype.didChangeOptions=function(t){var e=this;return f.some(function(r){return r in t&&!(0,n.D)(e.watchQueryOptions[r],t[r])})},t.prototype.applyOptions=function(t){var e=this.watchQueryOptions,r=e.fetchPolicy,n=e.canonizeResults;return"standby"===r&&r!==t.fetchPolicy?this.initiateFetch(this.observable.reobserve(t)):(this.observable.silentSetOptions(t),n!==t.canonizeResults&&(this.result=(0,i.pi)((0,i.pi)({},this.result),this.observable.getCurrentResult()),this.promise=(0,s.OP)(this.result))),this.promise},t.prototype.listen=function(t){var e=this;return this.listeners.add(t),function(){e.listeners.delete(t)}},t.prototype.refetch=function(t){return this.initiateFetch(this.observable.refetch(t))},t.prototype.fetchMore=function(t){return this.initiateFetch(this.observable.fetchMore(t))},t.prototype.dispose=function(){this.subscription.unsubscribe(),this.onDispose()},t.prototype.onDispose=function(){},t.prototype.handleNext=function(t){var e;if("pending"===this.promise.status)void 0===t.data&&(t.data=this.result.data),this.result=t,null===(e=this.resolve)||void 0===e||e.call(this,t);else{if(t.data===this.result.data&&t.networkStatus===this.result.networkStatus)return;void 0===t.data&&(t.data=this.result.data),this.result=t,this.promise=(0,s.OP)(t),this.deliver(this.promise)}},t.prototype.handleError=function(t){var e;(this.subscription.unsubscribe(),this.subscription=this.observable.resubscribeAfterError(this.handleNext,this.handleError),"pending"===this.promise.status)?null===(e=this.reject)||void 0===e||e.call(this,t):(this.promise=(0,s.Ld)(t),this.deliver(this.promise))},t.prototype.deliver=function(t){this.listeners.forEach(function(e){return e(t)})},t.prototype.initiateFetch=function(t){var e=this;return this.promise=this.createPendingPromise(),this.promise.catch(function(){}),t.then(function(){setTimeout(function(){var t;"pending"===e.promise.status&&(e.result=e.observable.getCurrentResult(),null===(t=e.resolve)||void 0===t||t.call(e,e.result))})}).catch(function(){}),t},t.prototype.subscribeToQuery=function(){var t=this;this.subscription=this.observable.filter(function(e){return!(0,n.D)(e.data,{})&&!(0,n.D)(e,t.result)}).subscribe(this.handleNext,this.handleError)},t.prototype.setResult=function(){var t=this.observable.getCurrentResult(!1);(0,n.D)(t,this.result)||(this.result=t,this.promise=t.data&&(!t.partial||this.watchQueryOptions.returnPartialData)?(0,s.OP)(t):this.createPendingPromise())},t.prototype.createPendingPromise=function(){var t=this;return(0,s.Bd)(new Promise(function(e,r){t.resolve=e,t.reject=r}))},t}()},40094:function(t,e,r){r.d(e,{Y:function(){return a}});var i=r(47637),n=r(92511),s=r(50072),o=function(){function t(t){void 0===t&&(t=Object.create(null)),this.queryRefs=new i.B(n.mr),this.options=t}return t.prototype.getQueryRef=function(t,e){var r=this.queryRefs.lookupArray(t);return r.current||(r.current=new s.qZ(e(),{autoDisposeTimeoutMs:this.options.autoDisposeTimeoutMs,onDispose:function(){delete r.current}})),r.current},t.prototype.add=function(t,e){this.queryRefs.lookupArray(t).current=e},t}(),u=Symbol.for("apollo.suspenseCache");function a(t){var e;return t[u]||(t[u]=new o(null===(e=t.defaultOptions.react)||void 0===e?void 0:e.suspense)),t[u]}},91567:function(t,e,r){r.d(e,{O:function(){return n},k:function(){return i}});var i=Array.isArray;function n(t){return Array.isArray(t)&&t.length>0}},79045:function(t,e,r){r.d(e,{B:function(){return u}});var i,n=r(88288),s=r(71531),o=r(91568),u=Object.assign(function(t){return JSON.stringify(t,a)},{reset:function(){i=new n.L(s.Q.canonicalStringify||1e3)}});function a(t,e){if(e&&"object"==typeof e){var r=Object.getPrototypeOf(e);if(r===Object.prototype||null===r){var n=Object.keys(e);if(n.every(c))return e;var s=JSON.stringify(n),o=i.get(s);if(!o){n.sort();var u=JSON.stringify(n);o=i.get(u)||n,i.set(s,o),i.set(u,o)}var a=Object.create(r);return o.forEach(function(t){a[t]=e[t]}),a}}return e}function c(t,e,r){return 0===e||r[e-1]<=t}!1!==globalThis.__DEV__&&(0,o.zP)("canonicalStringify",function(){return i.size}),u.reset()},76045:function(t,e,r){function i(t){var e=Promise.resolve(t);return e.status="fulfilled",e.value=t,e}function n(t){var e=Promise.reject(t);return e.catch(function(){}),e.status="rejected",e.reason=t,e}function s(t){return"status"in t||(t.status="pending",t.then(function(e){"pending"===t.status&&(t.status="fulfilled",t.value=e)},function(e){"pending"===t.status&&(t.status="rejected",t.reason=e)})),t}r.d(e,{Bd:function(){return s},Ld:function(){return n},OP:function(){return i}})},47637:function(t,e,r){r.d(e,{B:function(){return u}});let i=()=>Object.create(null),{forEach:n,slice:s}=Array.prototype,{hasOwnProperty:o}=Object.prototype;class u{constructor(t=!0,e=i){this.weakness=t,this.makeData=e}lookup(){return this.lookupArray(arguments)}lookupArray(t){let e=this;return n.call(t,t=>e=e.getChildTrie(t)),o.call(e,"data")?e.data:e.data=this.makeData(s.call(t))}peek(){return this.peekArray(arguments)}peekArray(t){let e=this;for(let r=0,i=t.length;e&&r<i;++r){let i=e.mapFor(t[r],!1);e=i&&i.get(t[r])}return e&&e.data}remove(){return this.removeArray(arguments)}removeArray(t){let e;if(t.length){let r=t[0],i=this.mapFor(r,!1),n=i&&i.get(r);!n||(e=n.removeArray(s.call(t,1)),n.data||n.weak||n.strong&&n.strong.size||i.delete(r))}else e=this.data,delete this.data;return e}getChildTrie(t){let e=this.mapFor(t,!0),r=e.get(t);return r||e.set(t,r=new u(this.weakness,this.makeData)),r}mapFor(t,e){return this.weakness&&function(t){switch(typeof t){case"object":if(null===t)break;case"function":return!0}return!1}(t)?this.weak||(e?this.weak=new WeakMap:void 0):this.strong||(e?this.strong=new Map:void 0)}}}}]);