(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function KM(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ix={exports:{}},ld={},Ux={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc=Symbol.for("react.element"),ZM=Symbol.for("react.portal"),QM=Symbol.for("react.fragment"),JM=Symbol.for("react.strict_mode"),eE=Symbol.for("react.profiler"),tE=Symbol.for("react.provider"),nE=Symbol.for("react.context"),iE=Symbol.for("react.forward_ref"),rE=Symbol.for("react.suspense"),sE=Symbol.for("react.memo"),oE=Symbol.for("react.lazy"),ag=Symbol.iterator;function aE(n){return n===null||typeof n!="object"?null:(n=ag&&n[ag]||n["@@iterator"],typeof n=="function"?n:null)}var Ox={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fx=Object.assign,kx={};function al(n,e,t){this.props=n,this.context=e,this.refs=kx,this.updater=t||Ox}al.prototype.isReactComponent={};al.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};al.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function zx(){}zx.prototype=al.prototype;function Om(n,e,t){this.props=n,this.context=e,this.refs=kx,this.updater=t||Ox}var Fm=Om.prototype=new zx;Fm.constructor=Om;Fx(Fm,al.prototype);Fm.isPureReactComponent=!0;var lg=Array.isArray,Bx=Object.prototype.hasOwnProperty,km={current:null},Hx={key:!0,ref:!0,__self:!0,__source:!0};function Vx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Bx.call(e,i)&&!Hx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Oc,type:n,key:s,ref:o,props:r,_owner:km.current}}function lE(n,e){return{$$typeof:Oc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function zm(n){return typeof n=="object"&&n!==null&&n.$$typeof===Oc}function cE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var cg=/\/+/g;function Od(n,e){return typeof n=="object"&&n!==null&&n.key!=null?cE(""+n.key):e.toString(36)}function Ku(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Oc:case ZM:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Od(o,0):i,lg(r)?(t="",n!=null&&(t=n.replace(cg,"$&/")+"/"),Ku(r,e,t,"",function(c){return c})):r!=null&&(zm(r)&&(r=lE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(cg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",lg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Od(s,a);o+=Ku(s,e,t,l,r)}else if(l=aE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Od(s,a++),o+=Ku(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $c(n,e,t){if(n==null)return n;var i=[],r=0;return Ku(n,i,"","",function(s){return e.call(t,s,r++)}),i}function uE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Xn={current:null},Zu={transition:null},fE={ReactCurrentDispatcher:Xn,ReactCurrentBatchConfig:Zu,ReactCurrentOwner:km};function Gx(){throw Error("act(...) is not supported in production builds of React.")}rt.Children={map:$c,forEach:function(n,e,t){$c(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return $c(n,function(){e++}),e},toArray:function(n){return $c(n,function(e){return e})||[]},only:function(n){if(!zm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};rt.Component=al;rt.Fragment=QM;rt.Profiler=eE;rt.PureComponent=Om;rt.StrictMode=JM;rt.Suspense=rE;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fE;rt.act=Gx;rt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Fx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=km.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Bx.call(e,l)&&!Hx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Oc,type:n.type,key:r,ref:s,props:i,_owner:o}};rt.createContext=function(n){return n={$$typeof:nE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:tE,_context:n},n.Consumer=n};rt.createElement=Vx;rt.createFactory=function(n){var e=Vx.bind(null,n);return e.type=n,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(n){return{$$typeof:iE,render:n}};rt.isValidElement=zm;rt.lazy=function(n){return{$$typeof:oE,_payload:{_status:-1,_result:n},_init:uE}};rt.memo=function(n,e){return{$$typeof:sE,type:n,compare:e===void 0?null:e}};rt.startTransition=function(n){var e=Zu.transition;Zu.transition={};try{n()}finally{Zu.transition=e}};rt.unstable_act=Gx;rt.useCallback=function(n,e){return Xn.current.useCallback(n,e)};rt.useContext=function(n){return Xn.current.useContext(n)};rt.useDebugValue=function(){};rt.useDeferredValue=function(n){return Xn.current.useDeferredValue(n)};rt.useEffect=function(n,e){return Xn.current.useEffect(n,e)};rt.useId=function(){return Xn.current.useId()};rt.useImperativeHandle=function(n,e,t){return Xn.current.useImperativeHandle(n,e,t)};rt.useInsertionEffect=function(n,e){return Xn.current.useInsertionEffect(n,e)};rt.useLayoutEffect=function(n,e){return Xn.current.useLayoutEffect(n,e)};rt.useMemo=function(n,e){return Xn.current.useMemo(n,e)};rt.useReducer=function(n,e,t){return Xn.current.useReducer(n,e,t)};rt.useRef=function(n){return Xn.current.useRef(n)};rt.useState=function(n){return Xn.current.useState(n)};rt.useSyncExternalStore=function(n,e,t){return Xn.current.useSyncExternalStore(n,e,t)};rt.useTransition=function(){return Xn.current.useTransition()};rt.version="18.3.1";Ux.exports=rt;var st=Ux.exports;const dE=KM(st);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hE=st,pE=Symbol.for("react.element"),mE=Symbol.for("react.fragment"),_E=Object.prototype.hasOwnProperty,gE=hE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vE={key:!0,ref:!0,__self:!0,__source:!0};function Wx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)_E.call(e,i)&&!vE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:pE,type:n,key:s,ref:o,props:r,_owner:gE.current}}ld.Fragment=mE;ld.jsx=Wx;ld.jsxs=Wx;Ix.exports=ld;var P=Ix.exports,up={},jx={exports:{}},Ci={},Xx={exports:{}},Yx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,H){var L=N.length;N.push(H);e:for(;0<L;){var te=L-1>>>1,me=N[te];if(0<r(me,H))N[te]=H,N[L]=me,L=te;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var H=N[0],L=N.pop();if(L!==H){N[0]=L;e:for(var te=0,me=N.length,Ve=me>>>1;te<Ve;){var W=2*(te+1)-1,ee=N[W],le=W+1,ie=N[le];if(0>r(ee,L))le<me&&0>r(ie,ee)?(N[te]=ie,N[le]=L,te=le):(N[te]=ee,N[W]=L,te=W);else if(le<me&&0>r(ie,L))N[te]=ie,N[le]=L,te=le;else break e}}return H}function r(N,H){var L=N.sortIndex-H.sortIndex;return L!==0?L:N.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var H=t(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=N)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=t(c)}}function S(N){if(_=!1,v(N),!g)if(t(l)!==null)g=!0,q(C);else{var H=t(c);H!==null&&$(S,H.startTime-N)}}function C(N,H){g=!1,_&&(_=!1,h(b),b=-1),p=!0;var L=f;try{for(v(H),d=t(l);d!==null&&(!(d.expirationTime>H)||N&&!U());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var me=te(d.expirationTime<=H);H=n.unstable_now(),typeof me=="function"?d.callback=me:d===t(l)&&i(l),v(H)}else i(l);d=t(l)}if(d!==null)var Ve=!0;else{var W=t(c);W!==null&&$(S,W.startTime-H),Ve=!1}return Ve}finally{d=null,f=L,p=!1}}var A=!1,M=null,b=-1,E=5,y=-1;function U(){return!(n.unstable_now()-y<E)}function O(){if(M!==null){var N=n.unstable_now();y=N;var H=!0;try{H=M(!0,N)}finally{H?I():(A=!1,M=null)}}else A=!1}var I;if(typeof x=="function")I=function(){x(O)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,j=G.port2;G.port1.onmessage=O,I=function(){j.postMessage(null)}}else I=function(){m(O,0)};function q(N){M=N,A||(A=!0,I())}function $(N,H){b=m(function(){N(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,q(C))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var L=f;f=H;try{return N()}finally{f=L}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=f;f=N;try{return H()}finally{f=L}},n.unstable_scheduleCallback=function(N,H,L){var te=n.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?te+L:te):L=te,N){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=L+me,N={id:u++,callback:H,priorityLevel:N,startTime:L,expirationTime:me,sortIndex:-1},L>te?(N.sortIndex=L,e(c,N),t(l)===null&&N===t(c)&&(_?(h(b),b=-1):_=!0,$(S,L-te))):(N.sortIndex=me,e(l,N),g||p||(g=!0,q(C))),N},n.unstable_shouldYield=U,n.unstable_wrapCallback=function(N){var H=f;return function(){var L=f;f=H;try{return N.apply(this,arguments)}finally{f=L}}}})(Yx);Xx.exports=Yx;var xE=Xx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yE=st,Ti=xE;function se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $x=new Set,cc={};function Bo(n,e){Ga(n,e),Ga(n+"Capture",e)}function Ga(n,e){for(cc[n]=e,n=0;n<e.length;n++)$x.add(e[n])}var Wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fp=Object.prototype.hasOwnProperty,SE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ug={},fg={};function ME(n){return fp.call(fg,n)?!0:fp.call(ug,n)?!1:SE.test(n)?fg[n]=!0:(ug[n]=!0,!1)}function EE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function TE(n,e,t,i){if(e===null||typeof e>"u"||EE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){yn[n]=new Yn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];yn[e]=new Yn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){yn[n]=new Yn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){yn[n]=new Yn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){yn[n]=new Yn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){yn[n]=new Yn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){yn[n]=new Yn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){yn[n]=new Yn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){yn[n]=new Yn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Bm=/[\-:]([a-z])/g;function Hm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Bm,Hm);yn[e]=new Yn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Bm,Hm);yn[e]=new Yn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Bm,Hm);yn[e]=new Yn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){yn[n]=new Yn(n,1,!1,n.toLowerCase(),null,!1,!1)});yn.xlinkHref=new Yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){yn[n]=new Yn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Vm(n,e,t,i){var r=yn.hasOwnProperty(e)?yn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TE(e,t,r,i)&&(t=null),i||r===null?ME(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Zr=yE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qc=Symbol.for("react.element"),da=Symbol.for("react.portal"),ha=Symbol.for("react.fragment"),Gm=Symbol.for("react.strict_mode"),dp=Symbol.for("react.profiler"),qx=Symbol.for("react.provider"),Kx=Symbol.for("react.context"),Wm=Symbol.for("react.forward_ref"),hp=Symbol.for("react.suspense"),pp=Symbol.for("react.suspense_list"),jm=Symbol.for("react.memo"),cs=Symbol.for("react.lazy"),Zx=Symbol.for("react.offscreen"),dg=Symbol.iterator;function hl(n){return n===null||typeof n!="object"?null:(n=dg&&n[dg]||n["@@iterator"],typeof n=="function"?n:null)}var Vt=Object.assign,Fd;function bl(n){if(Fd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Fd=e&&e[1]||""}return`
`+Fd+n}var kd=!1;function zd(n,e){if(!n||kd)return"";kd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{kd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?bl(n):""}function wE(n){switch(n.tag){case 5:return bl(n.type);case 16:return bl("Lazy");case 13:return bl("Suspense");case 19:return bl("SuspenseList");case 0:case 2:case 15:return n=zd(n.type,!1),n;case 11:return n=zd(n.type.render,!1),n;case 1:return n=zd(n.type,!0),n;default:return""}}function mp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ha:return"Fragment";case da:return"Portal";case dp:return"Profiler";case Gm:return"StrictMode";case hp:return"Suspense";case pp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Kx:return(n.displayName||"Context")+".Consumer";case qx:return(n._context.displayName||"Context")+".Provider";case Wm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case jm:return e=n.displayName||null,e!==null?e:mp(n.type)||"Memo";case cs:e=n._payload,n=n._init;try{return mp(n(e))}catch{}}return null}function AE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mp(e);case 8:return e===Gm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Os(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Qx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function CE(n){var e=Qx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Kc(n){n._valueTracker||(n._valueTracker=CE(n))}function Jx(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Qx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function xf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function _p(n,e){var t=e.checked;return Vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function hg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Os(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ey(n,e){e=e.checked,e!=null&&Vm(n,"checked",e,!1)}function gp(n,e){ey(n,e);var t=Os(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?vp(n,e.type,t):e.hasOwnProperty("defaultValue")&&vp(n,e.type,Os(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function pg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function vp(n,e,t){(e!=="number"||xf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ll=Array.isArray;function Ra(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Os(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function xp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Vt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function mg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(se(92));if(Ll(t)){if(1<t.length)throw Error(se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Os(t)}}function ty(n,e){var t=Os(e.value),i=Os(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function _g(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ny(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ny(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Zc,iy=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Zc=Zc||document.createElement("div"),Zc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function uc(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Vl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RE=["Webkit","ms","Moz","O"];Object.keys(Vl).forEach(function(n){RE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Vl[e]=Vl[n]})});function ry(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Vl.hasOwnProperty(n)&&Vl[n]?(""+e).trim():e+"px"}function sy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=ry(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var PE=Vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sp(n,e){if(e){if(PE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Mp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ep=null;function Xm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Tp=null,Pa=null,ba=null;function gg(n){if(n=zc(n)){if(typeof Tp!="function")throw Error(se(280));var e=n.stateNode;e&&(e=hd(e),Tp(n.stateNode,n.type,e))}}function oy(n){Pa?ba?ba.push(n):ba=[n]:Pa=n}function ay(){if(Pa){var n=Pa,e=ba;if(ba=Pa=null,gg(n),e)for(n=0;n<e.length;n++)gg(e[n])}}function ly(n,e){return n(e)}function cy(){}var Bd=!1;function uy(n,e,t){if(Bd)return n(e,t);Bd=!0;try{return ly(n,e,t)}finally{Bd=!1,(Pa!==null||ba!==null)&&(cy(),ay())}}function fc(n,e){var t=n.stateNode;if(t===null)return null;var i=hd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(se(231,e,typeof t));return t}var wp=!1;if(Wr)try{var pl={};Object.defineProperty(pl,"passive",{get:function(){wp=!0}}),window.addEventListener("test",pl,pl),window.removeEventListener("test",pl,pl)}catch{wp=!1}function bE(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Gl=!1,yf=null,Sf=!1,Ap=null,LE={onError:function(n){Gl=!0,yf=n}};function DE(n,e,t,i,r,s,o,a,l){Gl=!1,yf=null,bE.apply(LE,arguments)}function NE(n,e,t,i,r,s,o,a,l){if(DE.apply(this,arguments),Gl){if(Gl){var c=yf;Gl=!1,yf=null}else throw Error(se(198));Sf||(Sf=!0,Ap=c)}}function Ho(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function fy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function vg(n){if(Ho(n)!==n)throw Error(se(188))}function IE(n){var e=n.alternate;if(!e){if(e=Ho(n),e===null)throw Error(se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return vg(r),n;if(s===i)return vg(r),e;s=s.sibling}throw Error(se(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(t.alternate!==i)throw Error(se(190))}if(t.tag!==3)throw Error(se(188));return t.stateNode.current===t?n:e}function dy(n){return n=IE(n),n!==null?hy(n):null}function hy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=hy(n);if(e!==null)return e;n=n.sibling}return null}var py=Ti.unstable_scheduleCallback,xg=Ti.unstable_cancelCallback,UE=Ti.unstable_shouldYield,OE=Ti.unstable_requestPaint,$t=Ti.unstable_now,FE=Ti.unstable_getCurrentPriorityLevel,Ym=Ti.unstable_ImmediatePriority,my=Ti.unstable_UserBlockingPriority,Mf=Ti.unstable_NormalPriority,kE=Ti.unstable_LowPriority,_y=Ti.unstable_IdlePriority,cd=null,_r=null;function zE(n){if(_r&&typeof _r.onCommitFiberRoot=="function")try{_r.onCommitFiberRoot(cd,n,void 0,(n.current.flags&128)===128)}catch{}}var er=Math.clz32?Math.clz32:VE,BE=Math.log,HE=Math.LN2;function VE(n){return n>>>=0,n===0?32:31-(BE(n)/HE|0)|0}var Qc=64,Jc=4194304;function Dl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ef(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Dl(a):(s&=o,s!==0&&(i=Dl(s)))}else o=t&~r,o!==0?i=Dl(o):s!==0&&(i=Dl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-er(e),r=1<<t,i|=n[t],e&=~r;return i}function GE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WE(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-er(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=GE(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Cp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function gy(){var n=Qc;return Qc<<=1,!(Qc&4194240)&&(Qc=64),n}function Hd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Fc(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-er(e),n[e]=t}function jE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-er(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function $m(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-er(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var xt=0;function vy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var xy,qm,yy,Sy,My,Rp=!1,eu=[],Ms=null,Es=null,Ts=null,dc=new Map,hc=new Map,fs=[],XE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yg(n,e){switch(n){case"focusin":case"focusout":Ms=null;break;case"dragenter":case"dragleave":Es=null;break;case"mouseover":case"mouseout":Ts=null;break;case"pointerover":case"pointerout":dc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":hc.delete(e.pointerId)}}function ml(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=zc(e),e!==null&&qm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function YE(n,e,t,i,r){switch(e){case"focusin":return Ms=ml(Ms,n,e,t,i,r),!0;case"dragenter":return Es=ml(Es,n,e,t,i,r),!0;case"mouseover":return Ts=ml(Ts,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return dc.set(s,ml(dc.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,hc.set(s,ml(hc.get(s)||null,n,e,t,i,r)),!0}return!1}function Ey(n){var e=po(n.target);if(e!==null){var t=Ho(e);if(t!==null){if(e=t.tag,e===13){if(e=fy(t),e!==null){n.blockedOn=e,My(n.priority,function(){yy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Pp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ep=i,t.target.dispatchEvent(i),Ep=null}else return e=zc(t),e!==null&&qm(e),n.blockedOn=t,!1;e.shift()}return!0}function Sg(n,e,t){Qu(n)&&t.delete(e)}function $E(){Rp=!1,Ms!==null&&Qu(Ms)&&(Ms=null),Es!==null&&Qu(Es)&&(Es=null),Ts!==null&&Qu(Ts)&&(Ts=null),dc.forEach(Sg),hc.forEach(Sg)}function _l(n,e){n.blockedOn===e&&(n.blockedOn=null,Rp||(Rp=!0,Ti.unstable_scheduleCallback(Ti.unstable_NormalPriority,$E)))}function pc(n){function e(r){return _l(r,n)}if(0<eu.length){_l(eu[0],n);for(var t=1;t<eu.length;t++){var i=eu[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ms!==null&&_l(Ms,n),Es!==null&&_l(Es,n),Ts!==null&&_l(Ts,n),dc.forEach(e),hc.forEach(e),t=0;t<fs.length;t++)i=fs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<fs.length&&(t=fs[0],t.blockedOn===null);)Ey(t),t.blockedOn===null&&fs.shift()}var La=Zr.ReactCurrentBatchConfig,Tf=!0;function qE(n,e,t,i){var r=xt,s=La.transition;La.transition=null;try{xt=1,Km(n,e,t,i)}finally{xt=r,La.transition=s}}function KE(n,e,t,i){var r=xt,s=La.transition;La.transition=null;try{xt=4,Km(n,e,t,i)}finally{xt=r,La.transition=s}}function Km(n,e,t,i){if(Tf){var r=Pp(n,e,t,i);if(r===null)Zd(n,e,i,wf,t),yg(n,i);else if(YE(r,n,e,t,i))i.stopPropagation();else if(yg(n,i),e&4&&-1<XE.indexOf(n)){for(;r!==null;){var s=zc(r);if(s!==null&&xy(s),s=Pp(n,e,t,i),s===null&&Zd(n,e,i,wf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zd(n,e,i,null,t)}}var wf=null;function Pp(n,e,t,i){if(wf=null,n=Xm(i),n=po(n),n!==null)if(e=Ho(n),e===null)n=null;else if(t=e.tag,t===13){if(n=fy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return wf=n,null}function Ty(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FE()){case Ym:return 1;case my:return 4;case Mf:case kE:return 16;case _y:return 536870912;default:return 16}default:return 16}}var ps=null,Zm=null,Ju=null;function wy(){if(Ju)return Ju;var n,e=Zm,t=e.length,i,r="value"in ps?ps.value:ps.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Ju=r.slice(n,1<i?1-i:void 0)}function ef(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function tu(){return!0}function Mg(){return!1}function Ri(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tu:Mg,this.isPropagationStopped=Mg,this}return Vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=tu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=tu)},persist:function(){},isPersistent:tu}),e}var ll={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qm=Ri(ll),kc=Vt({},ll,{view:0,detail:0}),ZE=Ri(kc),Vd,Gd,gl,ud=Vt({},kc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==gl&&(gl&&n.type==="mousemove"?(Vd=n.screenX-gl.screenX,Gd=n.screenY-gl.screenY):Gd=Vd=0,gl=n),Vd)},movementY:function(n){return"movementY"in n?n.movementY:Gd}}),Eg=Ri(ud),QE=Vt({},ud,{dataTransfer:0}),JE=Ri(QE),eT=Vt({},kc,{relatedTarget:0}),Wd=Ri(eT),tT=Vt({},ll,{animationName:0,elapsedTime:0,pseudoElement:0}),nT=Ri(tT),iT=Vt({},ll,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),rT=Ri(iT),sT=Vt({},ll,{data:0}),Tg=Ri(sT),oT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=lT[n])?!!e[n]:!1}function Jm(){return cT}var uT=Vt({},kc,{key:function(n){if(n.key){var e=oT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ef(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?aT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jm,charCode:function(n){return n.type==="keypress"?ef(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ef(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fT=Ri(uT),dT=Vt({},ud,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wg=Ri(dT),hT=Vt({},kc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jm}),pT=Ri(hT),mT=Vt({},ll,{propertyName:0,elapsedTime:0,pseudoElement:0}),_T=Ri(mT),gT=Vt({},ud,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),vT=Ri(gT),xT=[9,13,27,32],e_=Wr&&"CompositionEvent"in window,Wl=null;Wr&&"documentMode"in document&&(Wl=document.documentMode);var yT=Wr&&"TextEvent"in window&&!Wl,Ay=Wr&&(!e_||Wl&&8<Wl&&11>=Wl),Ag=" ",Cg=!1;function Cy(n,e){switch(n){case"keyup":return xT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ry(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var pa=!1;function ST(n,e){switch(n){case"compositionend":return Ry(e);case"keypress":return e.which!==32?null:(Cg=!0,Ag);case"textInput":return n=e.data,n===Ag&&Cg?null:n;default:return null}}function MT(n,e){if(pa)return n==="compositionend"||!e_&&Cy(n,e)?(n=wy(),Ju=Zm=ps=null,pa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ay&&e.locale!=="ko"?null:e.data;default:return null}}var ET={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!ET[n.type]:e==="textarea"}function Py(n,e,t,i){oy(i),e=Af(e,"onChange"),0<e.length&&(t=new Qm("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var jl=null,mc=null;function TT(n){By(n,0)}function fd(n){var e=ga(n);if(Jx(e))return n}function wT(n,e){if(n==="change")return e}var by=!1;if(Wr){var jd;if(Wr){var Xd="oninput"in document;if(!Xd){var Pg=document.createElement("div");Pg.setAttribute("oninput","return;"),Xd=typeof Pg.oninput=="function"}jd=Xd}else jd=!1;by=jd&&(!document.documentMode||9<document.documentMode)}function bg(){jl&&(jl.detachEvent("onpropertychange",Ly),mc=jl=null)}function Ly(n){if(n.propertyName==="value"&&fd(mc)){var e=[];Py(e,mc,n,Xm(n)),uy(TT,e)}}function AT(n,e,t){n==="focusin"?(bg(),jl=e,mc=t,jl.attachEvent("onpropertychange",Ly)):n==="focusout"&&bg()}function CT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fd(mc)}function RT(n,e){if(n==="click")return fd(e)}function PT(n,e){if(n==="input"||n==="change")return fd(e)}function bT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ir=typeof Object.is=="function"?Object.is:bT;function _c(n,e){if(ir(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!fp.call(e,r)||!ir(n[r],e[r]))return!1}return!0}function Lg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Dg(n,e){var t=Lg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Lg(t)}}function Dy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Dy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ny(){for(var n=window,e=xf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=xf(n.document)}return e}function t_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function LT(n){var e=Ny(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Dy(t.ownerDocument.documentElement,t)){if(i!==null&&t_(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Dg(t,s);var o=Dg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var DT=Wr&&"documentMode"in document&&11>=document.documentMode,ma=null,bp=null,Xl=null,Lp=!1;function Ng(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Lp||ma==null||ma!==xf(i)||(i=ma,"selectionStart"in i&&t_(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xl&&_c(Xl,i)||(Xl=i,i=Af(bp,"onSelect"),0<i.length&&(e=new Qm("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ma)))}function nu(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var _a={animationend:nu("Animation","AnimationEnd"),animationiteration:nu("Animation","AnimationIteration"),animationstart:nu("Animation","AnimationStart"),transitionend:nu("Transition","TransitionEnd")},Yd={},Iy={};Wr&&(Iy=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function dd(n){if(Yd[n])return Yd[n];if(!_a[n])return n;var e=_a[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Iy)return Yd[n]=e[t];return n}var Uy=dd("animationend"),Oy=dd("animationiteration"),Fy=dd("animationstart"),ky=dd("transitionend"),zy=new Map,Ig="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gs(n,e){zy.set(n,e),Bo(e,[n])}for(var $d=0;$d<Ig.length;$d++){var qd=Ig[$d],NT=qd.toLowerCase(),IT=qd[0].toUpperCase()+qd.slice(1);Gs(NT,"on"+IT)}Gs(Uy,"onAnimationEnd");Gs(Oy,"onAnimationIteration");Gs(Fy,"onAnimationStart");Gs("dblclick","onDoubleClick");Gs("focusin","onFocus");Gs("focusout","onBlur");Gs(ky,"onTransitionEnd");Ga("onMouseEnter",["mouseout","mouseover"]);Ga("onMouseLeave",["mouseout","mouseover"]);Ga("onPointerEnter",["pointerout","pointerover"]);Ga("onPointerLeave",["pointerout","pointerover"]);Bo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nl));function Ug(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,NE(i,e,void 0,n),n.currentTarget=null}function By(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ug(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ug(r,a,c),s=l}}}if(Sf)throw n=Ap,Sf=!1,Ap=null,n}function Ct(n,e){var t=e[Op];t===void 0&&(t=e[Op]=new Set);var i=n+"__bubble";t.has(i)||(Hy(e,n,2,!1),t.add(i))}function Kd(n,e,t){var i=0;e&&(i|=4),Hy(t,n,i,e)}var iu="_reactListening"+Math.random().toString(36).slice(2);function gc(n){if(!n[iu]){n[iu]=!0,$x.forEach(function(t){t!=="selectionchange"&&(UT.has(t)||Kd(t,!1,n),Kd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[iu]||(e[iu]=!0,Kd("selectionchange",!1,e))}}function Hy(n,e,t,i){switch(Ty(e)){case 1:var r=qE;break;case 4:r=KE;break;default:r=Km}t=r.bind(null,e,t,n),r=void 0,!wp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Zd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=po(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}uy(function(){var c=s,u=Xm(t),d=[];e:{var f=zy.get(n);if(f!==void 0){var p=Qm,g=n;switch(n){case"keypress":if(ef(t)===0)break e;case"keydown":case"keyup":p=fT;break;case"focusin":g="focus",p=Wd;break;case"focusout":g="blur",p=Wd;break;case"beforeblur":case"afterblur":p=Wd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Eg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=JE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=pT;break;case Uy:case Oy:case Fy:p=nT;break;case ky:p=_T;break;case"scroll":p=ZE;break;case"wheel":p=vT;break;case"copy":case"cut":case"paste":p=rT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=wg}var _=(e&4)!==0,m=!_&&n==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var x=c,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=fc(x,h),S!=null&&_.push(vc(x,S,v)))),m)break;x=x.return}0<_.length&&(f=new p(f,g,null,t,u),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Ep&&(g=t.relatedTarget||t.fromElement)&&(po(g)||g[jr]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?po(g):null,g!==null&&(m=Ho(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=Eg,S="onMouseLeave",h="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(_=wg,S="onPointerLeave",h="onPointerEnter",x="pointer"),m=p==null?f:ga(p),v=g==null?f:ga(g),f=new _(S,x+"leave",p,t,u),f.target=m,f.relatedTarget=v,S=null,po(u)===c&&(_=new _(h,x+"enter",g,t,u),_.target=v,_.relatedTarget=m,S=_),m=S,p&&g)t:{for(_=p,h=g,x=0,v=_;v;v=Go(v))x++;for(v=0,S=h;S;S=Go(S))v++;for(;0<x-v;)_=Go(_),x--;for(;0<v-x;)h=Go(h),v--;for(;x--;){if(_===h||h!==null&&_===h.alternate)break t;_=Go(_),h=Go(h)}_=null}else _=null;p!==null&&Og(d,f,p,_,!1),g!==null&&m!==null&&Og(d,m,g,_,!0)}}e:{if(f=c?ga(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=wT;else if(Rg(f))if(by)C=PT;else{C=CT;var A=AT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=RT);if(C&&(C=C(n,c))){Py(d,C,t,u);break e}A&&A(n,f,c),n==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&vp(f,"number",f.value)}switch(A=c?ga(c):window,n){case"focusin":(Rg(A)||A.contentEditable==="true")&&(ma=A,bp=c,Xl=null);break;case"focusout":Xl=bp=ma=null;break;case"mousedown":Lp=!0;break;case"contextmenu":case"mouseup":case"dragend":Lp=!1,Ng(d,t,u);break;case"selectionchange":if(DT)break;case"keydown":case"keyup":Ng(d,t,u)}var M;if(e_)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else pa?Cy(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(Ay&&t.locale!=="ko"&&(pa||b!=="onCompositionStart"?b==="onCompositionEnd"&&pa&&(M=wy()):(ps=u,Zm="value"in ps?ps.value:ps.textContent,pa=!0)),A=Af(c,b),0<A.length&&(b=new Tg(b,n,null,t,u),d.push({event:b,listeners:A}),M?b.data=M:(M=Ry(t),M!==null&&(b.data=M)))),(M=yT?ST(n,t):MT(n,t))&&(c=Af(c,"onBeforeInput"),0<c.length&&(u=new Tg("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=M))}By(d,e)})}function vc(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Af(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fc(n,t),s!=null&&i.unshift(vc(n,s,r)),s=fc(n,e),s!=null&&i.push(vc(n,s,r))),n=n.return}return i}function Go(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Og(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=fc(t,s),l!=null&&o.unshift(vc(t,l,a))):r||(l=fc(t,s),l!=null&&o.push(vc(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var OT=/\r\n?/g,FT=/\u0000|\uFFFD/g;function Fg(n){return(typeof n=="string"?n:""+n).replace(OT,`
`).replace(FT,"")}function ru(n,e,t){if(e=Fg(e),Fg(n)!==e&&t)throw Error(se(425))}function Cf(){}var Dp=null,Np=null;function Ip(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Up=typeof setTimeout=="function"?setTimeout:void 0,kT=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,zT=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(n){return kg.resolve(null).then(n).catch(BT)}:Up;function BT(n){setTimeout(function(){throw n})}function Qd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),pc(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);pc(e)}function ws(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function zg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var cl=Math.random().toString(36).slice(2),ur="__reactFiber$"+cl,xc="__reactProps$"+cl,jr="__reactContainer$"+cl,Op="__reactEvents$"+cl,HT="__reactListeners$"+cl,VT="__reactHandles$"+cl;function po(n){var e=n[ur];if(e)return e;for(var t=n.parentNode;t;){if(e=t[jr]||t[ur]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=zg(n);n!==null;){if(t=n[ur])return t;n=zg(n)}return e}n=t,t=n.parentNode}return null}function zc(n){return n=n[ur]||n[jr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ga(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(se(33))}function hd(n){return n[xc]||null}var Fp=[],va=-1;function Ws(n){return{current:n}}function bt(n){0>va||(n.current=Fp[va],Fp[va]=null,va--)}function wt(n,e){va++,Fp[va]=n.current,n.current=e}var Fs={},In=Ws(Fs),ei=Ws(!1),bo=Fs;function Wa(n,e){var t=n.type.contextTypes;if(!t)return Fs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ti(n){return n=n.childContextTypes,n!=null}function Rf(){bt(ei),bt(In)}function Bg(n,e,t){if(In.current!==Fs)throw Error(se(168));wt(In,e),wt(ei,t)}function Vy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,AE(n)||"Unknown",r));return Vt({},t,i)}function Pf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fs,bo=In.current,wt(In,n),wt(ei,ei.current),!0}function Hg(n,e,t){var i=n.stateNode;if(!i)throw Error(se(169));t?(n=Vy(n,e,bo),i.__reactInternalMemoizedMergedChildContext=n,bt(ei),bt(In),wt(In,n)):bt(ei),wt(ei,t)}var Dr=null,pd=!1,Jd=!1;function Gy(n){Dr===null?Dr=[n]:Dr.push(n)}function GT(n){pd=!0,Gy(n)}function js(){if(!Jd&&Dr!==null){Jd=!0;var n=0,e=xt;try{var t=Dr;for(xt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Dr=null,pd=!1}catch(r){throw Dr!==null&&(Dr=Dr.slice(n+1)),py(Ym,js),r}finally{xt=e,Jd=!1}}return null}var xa=[],ya=0,bf=null,Lf=0,Ni=[],Ii=0,Lo=null,Or=1,Fr="";function ro(n,e){xa[ya++]=Lf,xa[ya++]=bf,bf=n,Lf=e}function Wy(n,e,t){Ni[Ii++]=Or,Ni[Ii++]=Fr,Ni[Ii++]=Lo,Lo=n;var i=Or;n=Fr;var r=32-er(i)-1;i&=~(1<<r),t+=1;var s=32-er(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Or=1<<32-er(e)+r|t<<r|i,Fr=s+n}else Or=1<<s|t<<r|i,Fr=n}function n_(n){n.return!==null&&(ro(n,1),Wy(n,1,0))}function i_(n){for(;n===bf;)bf=xa[--ya],xa[ya]=null,Lf=xa[--ya],xa[ya]=null;for(;n===Lo;)Lo=Ni[--Ii],Ni[Ii]=null,Fr=Ni[--Ii],Ni[Ii]=null,Or=Ni[--Ii],Ni[Ii]=null}var Mi=null,yi=null,Ot=!1,Qi=null;function jy(n,e){var t=Fi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Vg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Mi=n,yi=ws(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Mi=n,yi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Lo!==null?{id:Or,overflow:Fr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Fi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Mi=n,yi=null,!0):!1;default:return!1}}function kp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zp(n){if(Ot){var e=yi;if(e){var t=e;if(!Vg(n,e)){if(kp(n))throw Error(se(418));e=ws(t.nextSibling);var i=Mi;e&&Vg(n,e)?jy(i,t):(n.flags=n.flags&-4097|2,Ot=!1,Mi=n)}}else{if(kp(n))throw Error(se(418));n.flags=n.flags&-4097|2,Ot=!1,Mi=n}}}function Gg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Mi=n}function su(n){if(n!==Mi)return!1;if(!Ot)return Gg(n),Ot=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ip(n.type,n.memoizedProps)),e&&(e=yi)){if(kp(n))throw Xy(),Error(se(418));for(;e;)jy(n,e),e=ws(e.nextSibling)}if(Gg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){yi=ws(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}yi=null}}else yi=Mi?ws(n.stateNode.nextSibling):null;return!0}function Xy(){for(var n=yi;n;)n=ws(n.nextSibling)}function ja(){yi=Mi=null,Ot=!1}function r_(n){Qi===null?Qi=[n]:Qi.push(n)}var WT=Zr.ReactCurrentBatchConfig;function vl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(se(309));var i=t.stateNode}if(!i)throw Error(se(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(se(284));if(!t._owner)throw Error(se(290,n))}return n}function ou(n,e){throw n=Object.prototype.toString.call(e),Error(se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Wg(n){var e=n._init;return e(n._payload)}function Yy(n){function e(h,x){if(n){var v=h.deletions;v===null?(h.deletions=[x],h.flags|=16):v.push(x)}}function t(h,x){if(!n)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function i(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function r(h,x){return h=Ps(h,x),h.index=0,h.sibling=null,h}function s(h,x,v){return h.index=v,n?(v=h.alternate,v!==null?(v=v.index,v<x?(h.flags|=2,x):v):(h.flags|=2,x)):(h.flags|=1048576,x)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,x,v,S){return x===null||x.tag!==6?(x=oh(v,h.mode,S),x.return=h,x):(x=r(x,v),x.return=h,x)}function l(h,x,v,S){var C=v.type;return C===ha?u(h,x,v.props.children,S,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===cs&&Wg(C)===x.type)?(S=r(x,v.props),S.ref=vl(h,x,v),S.return=h,S):(S=lf(v.type,v.key,v.props,null,h.mode,S),S.ref=vl(h,x,v),S.return=h,S)}function c(h,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=ah(v,h.mode,S),x.return=h,x):(x=r(x,v.children||[]),x.return=h,x)}function u(h,x,v,S,C){return x===null||x.tag!==7?(x=Mo(v,h.mode,S,C),x.return=h,x):(x=r(x,v),x.return=h,x)}function d(h,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=oh(""+x,h.mode,v),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qc:return v=lf(x.type,x.key,x.props,null,h.mode,v),v.ref=vl(h,null,x),v.return=h,v;case da:return x=ah(x,h.mode,v),x.return=h,x;case cs:var S=x._init;return d(h,S(x._payload),v)}if(Ll(x)||hl(x))return x=Mo(x,h.mode,v,null),x.return=h,x;ou(h,x)}return null}function f(h,x,v,S){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(h,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qc:return v.key===C?l(h,x,v,S):null;case da:return v.key===C?c(h,x,v,S):null;case cs:return C=v._init,f(h,x,C(v._payload),S)}if(Ll(v)||hl(v))return C!==null?null:u(h,x,v,S,null);ou(h,v)}return null}function p(h,x,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,a(x,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case qc:return h=h.get(S.key===null?v:S.key)||null,l(x,h,S,C);case da:return h=h.get(S.key===null?v:S.key)||null,c(x,h,S,C);case cs:var A=S._init;return p(h,x,v,A(S._payload),C)}if(Ll(S)||hl(S))return h=h.get(v)||null,u(x,h,S,C,null);ou(x,S)}return null}function g(h,x,v,S){for(var C=null,A=null,M=x,b=x=0,E=null;M!==null&&b<v.length;b++){M.index>b?(E=M,M=null):E=M.sibling;var y=f(h,M,v[b],S);if(y===null){M===null&&(M=E);break}n&&M&&y.alternate===null&&e(h,M),x=s(y,x,b),A===null?C=y:A.sibling=y,A=y,M=E}if(b===v.length)return t(h,M),Ot&&ro(h,b),C;if(M===null){for(;b<v.length;b++)M=d(h,v[b],S),M!==null&&(x=s(M,x,b),A===null?C=M:A.sibling=M,A=M);return Ot&&ro(h,b),C}for(M=i(h,M);b<v.length;b++)E=p(M,h,b,v[b],S),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?b:E.key),x=s(E,x,b),A===null?C=E:A.sibling=E,A=E);return n&&M.forEach(function(U){return e(h,U)}),Ot&&ro(h,b),C}function _(h,x,v,S){var C=hl(v);if(typeof C!="function")throw Error(se(150));if(v=C.call(v),v==null)throw Error(se(151));for(var A=C=null,M=x,b=x=0,E=null,y=v.next();M!==null&&!y.done;b++,y=v.next()){M.index>b?(E=M,M=null):E=M.sibling;var U=f(h,M,y.value,S);if(U===null){M===null&&(M=E);break}n&&M&&U.alternate===null&&e(h,M),x=s(U,x,b),A===null?C=U:A.sibling=U,A=U,M=E}if(y.done)return t(h,M),Ot&&ro(h,b),C;if(M===null){for(;!y.done;b++,y=v.next())y=d(h,y.value,S),y!==null&&(x=s(y,x,b),A===null?C=y:A.sibling=y,A=y);return Ot&&ro(h,b),C}for(M=i(h,M);!y.done;b++,y=v.next())y=p(M,h,b,y.value,S),y!==null&&(n&&y.alternate!==null&&M.delete(y.key===null?b:y.key),x=s(y,x,b),A===null?C=y:A.sibling=y,A=y);return n&&M.forEach(function(O){return e(h,O)}),Ot&&ro(h,b),C}function m(h,x,v,S){if(typeof v=="object"&&v!==null&&v.type===ha&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case qc:e:{for(var C=v.key,A=x;A!==null;){if(A.key===C){if(C=v.type,C===ha){if(A.tag===7){t(h,A.sibling),x=r(A,v.props.children),x.return=h,h=x;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===cs&&Wg(C)===A.type){t(h,A.sibling),x=r(A,v.props),x.ref=vl(h,A,v),x.return=h,h=x;break e}t(h,A);break}else e(h,A);A=A.sibling}v.type===ha?(x=Mo(v.props.children,h.mode,S,v.key),x.return=h,h=x):(S=lf(v.type,v.key,v.props,null,h.mode,S),S.ref=vl(h,x,v),S.return=h,h=S)}return o(h);case da:e:{for(A=v.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){t(h,x.sibling),x=r(x,v.children||[]),x.return=h,h=x;break e}else{t(h,x);break}else e(h,x);x=x.sibling}x=ah(v,h.mode,S),x.return=h,h=x}return o(h);case cs:return A=v._init,m(h,x,A(v._payload),S)}if(Ll(v))return g(h,x,v,S);if(hl(v))return _(h,x,v,S);ou(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(t(h,x.sibling),x=r(x,v),x.return=h,h=x):(t(h,x),x=oh(v,h.mode,S),x.return=h,h=x),o(h)):t(h,x)}return m}var Xa=Yy(!0),$y=Yy(!1),Df=Ws(null),Nf=null,Sa=null,s_=null;function o_(){s_=Sa=Nf=null}function a_(n){var e=Df.current;bt(Df),n._currentValue=e}function Bp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Da(n,e){Nf=n,s_=Sa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Jn=!0),n.firstContext=null)}function Vi(n){var e=n._currentValue;if(s_!==n)if(n={context:n,memoizedValue:e,next:null},Sa===null){if(Nf===null)throw Error(se(308));Sa=n,Nf.dependencies={lanes:0,firstContext:n}}else Sa=Sa.next=n;return e}var mo=null;function l_(n){mo===null?mo=[n]:mo.push(n)}function qy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,l_(e)):(t.next=r.next,r.next=t),e.interleaved=t,Xr(n,i)}function Xr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var us=!1;function c_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ky(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function As(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xr(n,t)}return r=i.interleaved,r===null?(e.next=e,l_(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xr(n,t)}function tf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,$m(n,t)}}function jg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function If(n,e,t,i){var r=n.updateQueue;us=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(f=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=Vt({},d,f);break e;case 2:us=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);No|=o,n.lanes=o,n.memoizedState=d}}function Xg(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Bc={},gr=Ws(Bc),yc=Ws(Bc),Sc=Ws(Bc);function _o(n){if(n===Bc)throw Error(se(174));return n}function u_(n,e){switch(wt(Sc,e),wt(yc,n),wt(gr,Bc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=yp(e,n)}bt(gr),wt(gr,e)}function Ya(){bt(gr),bt(yc),bt(Sc)}function Zy(n){_o(Sc.current);var e=_o(gr.current),t=yp(e,n.type);e!==t&&(wt(yc,n),wt(gr,t))}function f_(n){yc.current===n&&(bt(gr),bt(yc))}var kt=Ws(0);function Uf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eh=[];function d_(){for(var n=0;n<eh.length;n++)eh[n]._workInProgressVersionPrimary=null;eh.length=0}var nf=Zr.ReactCurrentDispatcher,th=Zr.ReactCurrentBatchConfig,Do=0,Ht=null,sn=null,hn=null,Of=!1,Yl=!1,Mc=0,jT=0;function En(){throw Error(se(321))}function h_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ir(n[t],e[t]))return!1;return!0}function p_(n,e,t,i,r,s){if(Do=s,Ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nf.current=n===null||n.memoizedState===null?qT:KT,n=t(i,r),Yl){s=0;do{if(Yl=!1,Mc=0,25<=s)throw Error(se(301));s+=1,hn=sn=null,e.updateQueue=null,nf.current=ZT,n=t(i,r)}while(Yl)}if(nf.current=Ff,e=sn!==null&&sn.next!==null,Do=0,hn=sn=Ht=null,Of=!1,e)throw Error(se(300));return n}function m_(){var n=Mc!==0;return Mc=0,n}function sr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Ht.memoizedState=hn=n:hn=hn.next=n,hn}function Gi(){if(sn===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var e=hn===null?Ht.memoizedState:hn.next;if(e!==null)hn=e,sn=n;else{if(n===null)throw Error(se(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},hn===null?Ht.memoizedState=hn=n:hn=hn.next=n}return hn}function Ec(n,e){return typeof e=="function"?e(n):e}function nh(n){var e=Gi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=sn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Do&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ht.lanes|=u,No|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ir(i,e.memoizedState)||(Jn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ht.lanes|=s,No|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ih(n){var e=Gi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ir(s,e.memoizedState)||(Jn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Qy(){}function Jy(n,e){var t=Ht,i=Gi(),r=e(),s=!ir(i.memoizedState,r);if(s&&(i.memoizedState=r,Jn=!0),i=i.queue,__(nS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||hn!==null&&hn.memoizedState.tag&1){if(t.flags|=2048,Tc(9,tS.bind(null,t,i,r,e),void 0,null),pn===null)throw Error(se(349));Do&30||eS(t,e,r)}return r}function eS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function tS(n,e,t,i){e.value=t,e.getSnapshot=i,iS(e)&&rS(n)}function nS(n,e,t){return t(function(){iS(e)&&rS(n)})}function iS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ir(n,t)}catch{return!0}}function rS(n){var e=Xr(n,1);e!==null&&tr(e,n,1,-1)}function Yg(n){var e=sr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ec,lastRenderedState:n},e.queue=n,n=n.dispatch=$T.bind(null,Ht,n),[e.memoizedState,n]}function Tc(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function sS(){return Gi().memoizedState}function rf(n,e,t,i){var r=sr();Ht.flags|=n,r.memoizedState=Tc(1|e,t,void 0,i===void 0?null:i)}function md(n,e,t,i){var r=Gi();i=i===void 0?null:i;var s=void 0;if(sn!==null){var o=sn.memoizedState;if(s=o.destroy,i!==null&&h_(i,o.deps)){r.memoizedState=Tc(e,t,s,i);return}}Ht.flags|=n,r.memoizedState=Tc(1|e,t,s,i)}function $g(n,e){return rf(8390656,8,n,e)}function __(n,e){return md(2048,8,n,e)}function oS(n,e){return md(4,2,n,e)}function aS(n,e){return md(4,4,n,e)}function lS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function cS(n,e,t){return t=t!=null?t.concat([n]):null,md(4,4,lS.bind(null,e,n),t)}function g_(){}function uS(n,e){var t=Gi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&h_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function fS(n,e){var t=Gi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&h_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function dS(n,e,t){return Do&21?(ir(t,e)||(t=gy(),Ht.lanes|=t,No|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Jn=!0),n.memoizedState=t)}function XT(n,e){var t=xt;xt=t!==0&&4>t?t:4,n(!0);var i=th.transition;th.transition={};try{n(!1),e()}finally{xt=t,th.transition=i}}function hS(){return Gi().memoizedState}function YT(n,e,t){var i=Rs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},pS(n))mS(e,t);else if(t=qy(n,e,t,i),t!==null){var r=Wn();tr(t,n,i,r),_S(t,e,i)}}function $T(n,e,t){var i=Rs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(pS(n))mS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ir(a,o)){var l=e.interleaved;l===null?(r.next=r,l_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=qy(n,e,r,i),t!==null&&(r=Wn(),tr(t,n,i,r),_S(t,e,i))}}function pS(n){var e=n.alternate;return n===Ht||e!==null&&e===Ht}function mS(n,e){Yl=Of=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function _S(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,$m(n,t)}}var Ff={readContext:Vi,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},qT={readContext:Vi,useCallback:function(n,e){return sr().memoizedState=[n,e===void 0?null:e],n},useContext:Vi,useEffect:$g,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,rf(4194308,4,lS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return rf(4194308,4,n,e)},useInsertionEffect:function(n,e){return rf(4,2,n,e)},useMemo:function(n,e){var t=sr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=sr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=YT.bind(null,Ht,n),[i.memoizedState,n]},useRef:function(n){var e=sr();return n={current:n},e.memoizedState=n},useState:Yg,useDebugValue:g_,useDeferredValue:function(n){return sr().memoizedState=n},useTransition:function(){var n=Yg(!1),e=n[0];return n=XT.bind(null,n[1]),sr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ht,r=sr();if(Ot){if(t===void 0)throw Error(se(407));t=t()}else{if(t=e(),pn===null)throw Error(se(349));Do&30||eS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,$g(nS.bind(null,i,s,n),[n]),i.flags|=2048,Tc(9,tS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=sr(),e=pn.identifierPrefix;if(Ot){var t=Fr,i=Or;t=(i&~(1<<32-er(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Mc++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=jT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},KT={readContext:Vi,useCallback:uS,useContext:Vi,useEffect:__,useImperativeHandle:cS,useInsertionEffect:oS,useLayoutEffect:aS,useMemo:fS,useReducer:nh,useRef:sS,useState:function(){return nh(Ec)},useDebugValue:g_,useDeferredValue:function(n){var e=Gi();return dS(e,sn.memoizedState,n)},useTransition:function(){var n=nh(Ec)[0],e=Gi().memoizedState;return[n,e]},useMutableSource:Qy,useSyncExternalStore:Jy,useId:hS,unstable_isNewReconciler:!1},ZT={readContext:Vi,useCallback:uS,useContext:Vi,useEffect:__,useImperativeHandle:cS,useInsertionEffect:oS,useLayoutEffect:aS,useMemo:fS,useReducer:ih,useRef:sS,useState:function(){return ih(Ec)},useDebugValue:g_,useDeferredValue:function(n){var e=Gi();return sn===null?e.memoizedState=n:dS(e,sn.memoizedState,n)},useTransition:function(){var n=ih(Ec)[0],e=Gi().memoizedState;return[n,e]},useMutableSource:Qy,useSyncExternalStore:Jy,useId:hS,unstable_isNewReconciler:!1};function Ki(n,e){if(n&&n.defaultProps){e=Vt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Hp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Vt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var _d={isMounted:function(n){return(n=n._reactInternals)?Ho(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Rs(n),s=Hr(i,r);s.payload=e,t!=null&&(s.callback=t),e=As(n,s,r),e!==null&&(tr(e,n,r,i),tf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Rs(n),s=Hr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=As(n,s,r),e!==null&&(tr(e,n,r,i),tf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Wn(),i=Rs(n),r=Hr(t,i);r.tag=2,e!=null&&(r.callback=e),e=As(n,r,i),e!==null&&(tr(e,n,i,t),tf(e,n,i))}};function qg(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!_c(t,i)||!_c(r,s):!0}function gS(n,e,t){var i=!1,r=Fs,s=e.contextType;return typeof s=="object"&&s!==null?s=Vi(s):(r=ti(e)?bo:In.current,i=e.contextTypes,s=(i=i!=null)?Wa(n,r):Fs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_d,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Kg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&_d.enqueueReplaceState(e,e.state,null)}function Vp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},c_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vi(s):(s=ti(e)?bo:In.current,r.context=Wa(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_d.enqueueReplaceState(r,r.state,null),If(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function $a(n,e){try{var t="",i=e;do t+=wE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function rh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Gp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var QT=typeof WeakMap=="function"?WeakMap:Map;function vS(n,e,t){t=Hr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){zf||(zf=!0,Jp=i),Gp(n,e)},t}function xS(n,e,t){t=Hr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Gp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Gp(n,e),typeof i!="function"&&(Cs===null?Cs=new Set([this]):Cs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Zg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new QT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=dw.bind(null,n,e,t),e.then(n,n))}function Qg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Jg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Hr(-1,1),e.tag=2,As(t,e,1))),t.lanes|=1),n)}var JT=Zr.ReactCurrentOwner,Jn=!1;function zn(n,e,t,i){e.child=n===null?$y(e,null,t,i):Xa(e,n.child,t,i)}function e0(n,e,t,i,r){t=t.render;var s=e.ref;return Da(e,r),i=p_(n,e,t,i,s,r),t=m_(),n!==null&&!Jn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yr(n,e,r)):(Ot&&t&&n_(e),e.flags|=1,zn(n,e,i,r),e.child)}function t0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!w_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,yS(n,e,s,i,r)):(n=lf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:_c,t(o,i)&&n.ref===e.ref)return Yr(n,e,r)}return e.flags|=1,n=Ps(s,i),n.ref=e.ref,n.return=e,e.child=n}function yS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(_c(s,i)&&n.ref===e.ref)if(Jn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Jn=!0);else return e.lanes=n.lanes,Yr(n,e,r)}return Wp(n,e,t,i,r)}function SS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(Ea,hi),hi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,wt(Ea,hi),hi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,wt(Ea,hi),hi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,wt(Ea,hi),hi|=i;return zn(n,e,r,t),e.child}function MS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Wp(n,e,t,i,r){var s=ti(t)?bo:In.current;return s=Wa(e,s),Da(e,r),t=p_(n,e,t,i,s,r),i=m_(),n!==null&&!Jn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yr(n,e,r)):(Ot&&i&&n_(e),e.flags|=1,zn(n,e,t,r),e.child)}function n0(n,e,t,i,r){if(ti(t)){var s=!0;Pf(e)}else s=!1;if(Da(e,r),e.stateNode===null)sf(n,e),gS(e,t,i),Vp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Vi(c):(c=ti(t)?bo:In.current,c=Wa(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Kg(e,o,i,c),us=!1;var f=e.memoizedState;o.state=f,If(e,i,o,r),l=e.memoizedState,a!==i||f!==l||ei.current||us?(typeof u=="function"&&(Hp(e,t,u,i),l=e.memoizedState),(a=us||qg(e,t,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ky(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ki(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Vi(l):(l=ti(t)?bo:In.current,l=Wa(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Kg(e,o,i,l),us=!1,f=e.memoizedState,o.state=f,If(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||ei.current||us?(typeof p=="function"&&(Hp(e,t,p,i),g=e.memoizedState),(c=us||qg(e,t,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return jp(n,e,t,i,s,r)}function jp(n,e,t,i,r,s){MS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Hg(e,t,!1),Yr(n,e,s);i=e.stateNode,JT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Xa(e,n.child,null,s),e.child=Xa(e,null,a,s)):zn(n,e,a,s),e.memoizedState=i.state,r&&Hg(e,t,!0),e.child}function ES(n){var e=n.stateNode;e.pendingContext?Bg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Bg(n,e.context,!1),u_(n,e.containerInfo)}function i0(n,e,t,i,r){return ja(),r_(r),e.flags|=256,zn(n,e,t,i),e.child}var Xp={dehydrated:null,treeContext:null,retryLane:0};function Yp(n){return{baseLanes:n,cachePool:null,transitions:null}}function TS(n,e,t){var i=e.pendingProps,r=kt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),wt(kt,r&1),n===null)return zp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xd(o,i,0,null),n=Mo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Yp(t),e.memoizedState=Xp,n):v_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ew(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ps(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ps(a,s):(s=Mo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Yp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Xp,i}return s=n.child,n=s.sibling,i=Ps(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function v_(n,e){return e=xd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function au(n,e,t,i){return i!==null&&r_(i),Xa(e,n.child,null,t),n=v_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ew(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=rh(Error(se(422))),au(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xd({mode:"visible",children:i.children},r,0,null),s=Mo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xa(e,n.child,null,o),e.child.memoizedState=Yp(o),e.memoizedState=Xp,s);if(!(e.mode&1))return au(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=rh(s,i,void 0),au(n,e,o,i)}if(a=(o&n.childLanes)!==0,Jn||a){if(i=pn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xr(n,r),tr(i,n,r,-1))}return T_(),i=rh(Error(se(421))),au(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=hw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,yi=ws(r.nextSibling),Mi=e,Ot=!0,Qi=null,n!==null&&(Ni[Ii++]=Or,Ni[Ii++]=Fr,Ni[Ii++]=Lo,Or=n.id,Fr=n.overflow,Lo=e),e=v_(e,i.children),e.flags|=4096,e)}function r0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Bp(n.return,e,t)}function sh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function wS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(zn(n,e,i.children,t),i=kt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&r0(n,t,e);else if(n.tag===19)r0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(wt(kt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Uf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),sh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Uf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}sh(e,!0,t,null,s);break;case"together":sh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Yr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),No|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(se(153));if(e.child!==null){for(n=e.child,t=Ps(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ps(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function tw(n,e,t){switch(e.tag){case 3:ES(e),ja();break;case 5:Zy(e);break;case 1:ti(e.type)&&Pf(e);break;case 4:u_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;wt(Df,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(wt(kt,kt.current&1),e.flags|=128,null):t&e.child.childLanes?TS(n,e,t):(wt(kt,kt.current&1),n=Yr(n,e,t),n!==null?n.sibling:null);wt(kt,kt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return wS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),wt(kt,kt.current),i)break;return null;case 22:case 23:return e.lanes=0,SS(n,e,t)}return Yr(n,e,t)}var AS,$p,CS,RS;AS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};$p=function(){};CS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,_o(gr.current);var s=null;switch(t){case"input":r=_p(n,r),i=_p(n,i),s=[];break;case"select":r=Vt({},r,{value:void 0}),i=Vt({},i,{value:void 0}),s=[];break;case"textarea":r=xp(n,r),i=xp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Cf)}Sp(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(cc.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(cc.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ct("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};RS=function(n,e,t,i){t!==i&&(e.flags|=4)};function xl(n,e){if(!Ot)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Tn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function nw(n,e,t){var i=e.pendingProps;switch(i_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(e),null;case 1:return ti(e.type)&&Rf(),Tn(e),null;case 3:return i=e.stateNode,Ya(),bt(ei),bt(In),d_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(su(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qi!==null&&(nm(Qi),Qi=null))),$p(n,e),Tn(e),null;case 5:f_(e);var r=_o(Sc.current);if(t=e.type,n!==null&&e.stateNode!=null)CS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Tn(e),null}if(n=_o(gr.current),su(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ur]=e,i[xc]=s,n=(e.mode&1)!==0,t){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(r=0;r<Nl.length;r++)Ct(Nl[r],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":hg(i,s),Ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ct("invalid",i);break;case"textarea":mg(i,s),Ct("invalid",i)}Sp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ru(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ru(i.textContent,a,n),r=["children",""+a]):cc.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ct("scroll",i)}switch(t){case"input":Kc(i),pg(i,s,!0);break;case"textarea":Kc(i),_g(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ny(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ur]=e,n[xc]=i,AS(n,e,!1,!1),e.stateNode=n;e:{switch(o=Mp(t,i),t){case"dialog":Ct("cancel",n),Ct("close",n),r=i;break;case"iframe":case"object":case"embed":Ct("load",n),r=i;break;case"video":case"audio":for(r=0;r<Nl.length;r++)Ct(Nl[r],n);r=i;break;case"source":Ct("error",n),r=i;break;case"img":case"image":case"link":Ct("error",n),Ct("load",n),r=i;break;case"details":Ct("toggle",n),r=i;break;case"input":hg(n,i),r=_p(n,i),Ct("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Vt({},i,{value:void 0}),Ct("invalid",n);break;case"textarea":mg(n,i),r=xp(n,i),Ct("invalid",n);break;default:r=i}Sp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?sy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&iy(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&uc(n,l):typeof l=="number"&&uc(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cc.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ct("scroll",n):l!=null&&Vm(n,s,l,o))}switch(t){case"input":Kc(n),pg(n,i,!1);break;case"textarea":Kc(n),_g(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Os(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ra(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ra(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Cf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tn(e),null;case 6:if(n&&e.stateNode!=null)RS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(t=_o(Sc.current),_o(gr.current),su(e)){if(i=e.stateNode,t=e.memoizedProps,i[ur]=e,(s=i.nodeValue!==t)&&(n=Mi,n!==null))switch(n.tag){case 3:ru(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ru(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ur]=e,e.stateNode=i}return Tn(e),null;case 13:if(bt(kt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ot&&yi!==null&&e.mode&1&&!(e.flags&128))Xy(),ja(),e.flags|=98560,s=!1;else if(s=su(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[ur]=e}else ja(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Tn(e),s=!1}else Qi!==null&&(nm(Qi),Qi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||kt.current&1?an===0&&(an=3):T_())),e.updateQueue!==null&&(e.flags|=4),Tn(e),null);case 4:return Ya(),$p(n,e),n===null&&gc(e.stateNode.containerInfo),Tn(e),null;case 10:return a_(e.type._context),Tn(e),null;case 17:return ti(e.type)&&Rf(),Tn(e),null;case 19:if(bt(kt),s=e.memoizedState,s===null)return Tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)xl(s,!1);else{if(an!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Uf(n),o!==null){for(e.flags|=128,xl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return wt(kt,kt.current&1|2),e.child}n=n.sibling}s.tail!==null&&$t()>qa&&(e.flags|=128,i=!0,xl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Uf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),xl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ot)return Tn(e),null}else 2*$t()-s.renderingStartTime>qa&&t!==1073741824&&(e.flags|=128,i=!0,xl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$t(),e.sibling=null,t=kt.current,wt(kt,i?t&1|2:t&1),e):(Tn(e),null);case 22:case 23:return E_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hi&1073741824&&(Tn(e),e.subtreeFlags&6&&(e.flags|=8192)):Tn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function iw(n,e){switch(i_(e),e.tag){case 1:return ti(e.type)&&Rf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ya(),bt(ei),bt(In),d_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return f_(e),null;case 13:if(bt(kt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(se(340));ja()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return bt(kt),null;case 4:return Ya(),null;case 10:return a_(e.type._context),null;case 22:case 23:return E_(),null;case 24:return null;default:return null}}var lu=!1,Pn=!1,rw=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Ma(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Wt(n,e,i)}else t.current=null}function qp(n,e,t){try{t()}catch(i){Wt(n,e,i)}}var s0=!1;function sw(n,e){if(Dp=Tf,n=Ny(),t_(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Np={focusedElem:n,selectionRange:t},Tf=!1,ge=e;ge!==null;)if(e=ge,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ge=n;else for(;ge!==null;){e=ge;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ki(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){Wt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}return g=s0,s0=!1,g}function $l(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&qp(e,t,s)}r=r.next}while(r!==i)}}function gd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Kp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function PS(n){var e=n.alternate;e!==null&&(n.alternate=null,PS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ur],delete e[xc],delete e[Op],delete e[HT],delete e[VT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bS(n){return n.tag===5||n.tag===3||n.tag===4}function o0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Zp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Cf));else if(i!==4&&(n=n.child,n!==null))for(Zp(n,e,t),n=n.sibling;n!==null;)Zp(n,e,t),n=n.sibling}function Qp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Qp(n,e,t),n=n.sibling;n!==null;)Qp(n,e,t),n=n.sibling}var _n=null,Zi=!1;function es(n,e,t){for(t=t.child;t!==null;)LS(n,e,t),t=t.sibling}function LS(n,e,t){if(_r&&typeof _r.onCommitFiberUnmount=="function")try{_r.onCommitFiberUnmount(cd,t)}catch{}switch(t.tag){case 5:Pn||Ma(t,e);case 6:var i=_n,r=Zi;_n=null,es(n,e,t),_n=i,Zi=r,_n!==null&&(Zi?(n=_n,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):_n.removeChild(t.stateNode));break;case 18:_n!==null&&(Zi?(n=_n,t=t.stateNode,n.nodeType===8?Qd(n.parentNode,t):n.nodeType===1&&Qd(n,t),pc(n)):Qd(_n,t.stateNode));break;case 4:i=_n,r=Zi,_n=t.stateNode.containerInfo,Zi=!0,es(n,e,t),_n=i,Zi=r;break;case 0:case 11:case 14:case 15:if(!Pn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qp(t,e,o),r=r.next}while(r!==i)}es(n,e,t);break;case 1:if(!Pn&&(Ma(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Wt(t,e,a)}es(n,e,t);break;case 21:es(n,e,t);break;case 22:t.mode&1?(Pn=(i=Pn)||t.memoizedState!==null,es(n,e,t),Pn=i):es(n,e,t);break;default:es(n,e,t)}}function a0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new rw),e.forEach(function(i){var r=pw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Wi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_n=a.stateNode,Zi=!1;break e;case 3:_n=a.stateNode.containerInfo,Zi=!0;break e;case 4:_n=a.stateNode.containerInfo,Zi=!0;break e}a=a.return}if(_n===null)throw Error(se(160));LS(s,o,r),_n=null,Zi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)DS(e,n),e=e.sibling}function DS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Wi(e,n),rr(n),i&4){try{$l(3,n,n.return),gd(3,n)}catch(_){Wt(n,n.return,_)}try{$l(5,n,n.return)}catch(_){Wt(n,n.return,_)}}break;case 1:Wi(e,n),rr(n),i&512&&t!==null&&Ma(t,t.return);break;case 5:if(Wi(e,n),rr(n),i&512&&t!==null&&Ma(t,t.return),n.flags&32){var r=n.stateNode;try{uc(r,"")}catch(_){Wt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ey(r,s),Mp(a,o);var c=Mp(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?sy(r,d):u==="dangerouslySetInnerHTML"?iy(r,d):u==="children"?uc(r,d):Vm(r,u,d,c)}switch(a){case"input":gp(r,s);break;case"textarea":ty(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ra(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ra(r,!!s.multiple,s.defaultValue,!0):Ra(r,!!s.multiple,s.multiple?[]:"",!1))}r[xc]=s}catch(_){Wt(n,n.return,_)}}break;case 6:if(Wi(e,n),rr(n),i&4){if(n.stateNode===null)throw Error(se(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Wt(n,n.return,_)}}break;case 3:if(Wi(e,n),rr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{pc(e.containerInfo)}catch(_){Wt(n,n.return,_)}break;case 4:Wi(e,n),rr(n);break;case 13:Wi(e,n),rr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(S_=$t())),i&4&&a0(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Pn=(c=Pn)||u,Wi(e,n),Pn=c):Wi(e,n),rr(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(ge=n,u=n.child;u!==null;){for(d=ge=u;ge!==null;){switch(f=ge,p=f.child,f.tag){case 0:case 11:case 14:case 15:$l(4,f,f.return);break;case 1:Ma(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Wt(i,t,_)}}break;case 5:Ma(f,f.return);break;case 22:if(f.memoizedState!==null){c0(d);continue}}p!==null?(p.return=f,ge=p):c0(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ry("display",o))}catch(_){Wt(n,n.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){Wt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Wi(e,n),rr(n),i&4&&a0(n);break;case 21:break;default:Wi(e,n),rr(n)}}function rr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(bS(t)){var i=t;break e}t=t.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(uc(r,""),i.flags&=-33);var s=o0(n);Qp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=o0(n);Zp(n,a,o);break;default:throw Error(se(161))}}catch(l){Wt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function ow(n,e,t){ge=n,NS(n)}function NS(n,e,t){for(var i=(n.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||lu;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Pn;a=lu;var c=Pn;if(lu=o,(Pn=l)&&!c)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?u0(r):l!==null?(l.return=o,ge=l):u0(r);for(;s!==null;)ge=s,NS(s),s=s.sibling;ge=r,lu=a,Pn=c}l0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):l0(n)}}function l0(n){for(;ge!==null;){var e=ge;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pn||gd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Pn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Ki(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Xg(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&pc(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Pn||e.flags&512&&Kp(e)}catch(f){Wt(e,e.return,f)}}if(e===n){ge=null;break}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}}function c0(n){for(;ge!==null;){var e=ge;if(e===n){ge=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ge=t;break}ge=e.return}}function u0(n){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{gd(4,e)}catch(l){Wt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Wt(e,r,l)}}var s=e.return;try{Kp(e)}catch(l){Wt(e,s,l)}break;case 5:var o=e.return;try{Kp(e)}catch(l){Wt(e,o,l)}}}catch(l){Wt(e,e.return,l)}if(e===n){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var aw=Math.ceil,kf=Zr.ReactCurrentDispatcher,x_=Zr.ReactCurrentOwner,Bi=Zr.ReactCurrentBatchConfig,lt=0,pn=null,tn=null,vn=0,hi=0,Ea=Ws(0),an=0,wc=null,No=0,vd=0,y_=0,ql=null,Zn=null,S_=0,qa=1/0,br=null,zf=!1,Jp=null,Cs=null,cu=!1,ms=null,Bf=0,Kl=0,em=null,of=-1,af=0;function Wn(){return lt&6?$t():of!==-1?of:of=$t()}function Rs(n){return n.mode&1?lt&2&&vn!==0?vn&-vn:WT.transition!==null?(af===0&&(af=gy()),af):(n=xt,n!==0||(n=window.event,n=n===void 0?16:Ty(n.type)),n):1}function tr(n,e,t,i){if(50<Kl)throw Kl=0,em=null,Error(se(185));Fc(n,t,i),(!(lt&2)||n!==pn)&&(n===pn&&(!(lt&2)&&(vd|=t),an===4&&ds(n,vn)),ni(n,i),t===1&&lt===0&&!(e.mode&1)&&(qa=$t()+500,pd&&js()))}function ni(n,e){var t=n.callbackNode;WE(n,e);var i=Ef(n,n===pn?vn:0);if(i===0)t!==null&&xg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&xg(t),e===1)n.tag===0?GT(f0.bind(null,n)):Gy(f0.bind(null,n)),zT(function(){!(lt&6)&&js()}),t=null;else{switch(vy(i)){case 1:t=Ym;break;case 4:t=my;break;case 16:t=Mf;break;case 536870912:t=_y;break;default:t=Mf}t=HS(t,IS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function IS(n,e){if(of=-1,af=0,lt&6)throw Error(se(327));var t=n.callbackNode;if(Na()&&n.callbackNode!==t)return null;var i=Ef(n,n===pn?vn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Hf(n,i);else{e=i;var r=lt;lt|=2;var s=OS();(pn!==n||vn!==e)&&(br=null,qa=$t()+500,So(n,e));do try{uw();break}catch(a){US(n,a)}while(!0);o_(),kf.current=s,lt=r,tn!==null?e=0:(pn=null,vn=0,e=an)}if(e!==0){if(e===2&&(r=Cp(n),r!==0&&(i=r,e=tm(n,r))),e===1)throw t=wc,So(n,0),ds(n,i),ni(n,$t()),t;if(e===6)ds(n,i);else{if(r=n.current.alternate,!(i&30)&&!lw(r)&&(e=Hf(n,i),e===2&&(s=Cp(n),s!==0&&(i=s,e=tm(n,s))),e===1))throw t=wc,So(n,0),ds(n,i),ni(n,$t()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:so(n,Zn,br);break;case 3:if(ds(n,i),(i&130023424)===i&&(e=S_+500-$t(),10<e)){if(Ef(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Wn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Up(so.bind(null,n,Zn,br),e);break}so(n,Zn,br);break;case 4:if(ds(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-er(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=$t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aw(i/1960))-i,10<i){n.timeoutHandle=Up(so.bind(null,n,Zn,br),i);break}so(n,Zn,br);break;case 5:so(n,Zn,br);break;default:throw Error(se(329))}}}return ni(n,$t()),n.callbackNode===t?IS.bind(null,n):null}function tm(n,e){var t=ql;return n.current.memoizedState.isDehydrated&&(So(n,e).flags|=256),n=Hf(n,e),n!==2&&(e=Zn,Zn=t,e!==null&&nm(e)),n}function nm(n){Zn===null?Zn=n:Zn.push.apply(Zn,n)}function lw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ir(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ds(n,e){for(e&=~y_,e&=~vd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-er(e),i=1<<t;n[t]=-1,e&=~i}}function f0(n){if(lt&6)throw Error(se(327));Na();var e=Ef(n,0);if(!(e&1))return ni(n,$t()),null;var t=Hf(n,e);if(n.tag!==0&&t===2){var i=Cp(n);i!==0&&(e=i,t=tm(n,i))}if(t===1)throw t=wc,So(n,0),ds(n,e),ni(n,$t()),t;if(t===6)throw Error(se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,so(n,Zn,br),ni(n,$t()),null}function M_(n,e){var t=lt;lt|=1;try{return n(e)}finally{lt=t,lt===0&&(qa=$t()+500,pd&&js())}}function Io(n){ms!==null&&ms.tag===0&&!(lt&6)&&Na();var e=lt;lt|=1;var t=Bi.transition,i=xt;try{if(Bi.transition=null,xt=1,n)return n()}finally{xt=i,Bi.transition=t,lt=e,!(lt&6)&&js()}}function E_(){hi=Ea.current,bt(Ea)}function So(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,kT(t)),tn!==null)for(t=tn.return;t!==null;){var i=t;switch(i_(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rf();break;case 3:Ya(),bt(ei),bt(In),d_();break;case 5:f_(i);break;case 4:Ya();break;case 13:bt(kt);break;case 19:bt(kt);break;case 10:a_(i.type._context);break;case 22:case 23:E_()}t=t.return}if(pn=n,tn=n=Ps(n.current,null),vn=hi=e,an=0,wc=null,y_=vd=No=0,Zn=ql=null,mo!==null){for(e=0;e<mo.length;e++)if(t=mo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}mo=null}return n}function US(n,e){do{var t=tn;try{if(o_(),nf.current=Ff,Of){for(var i=Ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Of=!1}if(Do=0,hn=sn=Ht=null,Yl=!1,Mc=0,x_.current=null,t===null||t.return===null){an=1,wc=e,tn=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=vn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Qg(o);if(p!==null){p.flags&=-257,Jg(p,o,a,s,e),p.mode&1&&Zg(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Zg(s,c,e),T_();break e}l=Error(se(426))}}else if(Ot&&a.mode&1){var m=Qg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Jg(m,o,a,s,e),r_($a(l,a));break e}}s=l=$a(l,a),an!==4&&(an=2),ql===null?ql=[s]:ql.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=vS(s,l,e);jg(s,h);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Cs===null||!Cs.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=xS(s,a,e);jg(s,S);break e}}s=s.return}while(s!==null)}kS(t)}catch(C){e=C,tn===t&&t!==null&&(tn=t=t.return);continue}break}while(!0)}function OS(){var n=kf.current;return kf.current=Ff,n===null?Ff:n}function T_(){(an===0||an===3||an===2)&&(an=4),pn===null||!(No&268435455)&&!(vd&268435455)||ds(pn,vn)}function Hf(n,e){var t=lt;lt|=2;var i=OS();(pn!==n||vn!==e)&&(br=null,So(n,e));do try{cw();break}catch(r){US(n,r)}while(!0);if(o_(),lt=t,kf.current=i,tn!==null)throw Error(se(261));return pn=null,vn=0,an}function cw(){for(;tn!==null;)FS(tn)}function uw(){for(;tn!==null&&!UE();)FS(tn)}function FS(n){var e=BS(n.alternate,n,hi);n.memoizedProps=n.pendingProps,e===null?kS(n):tn=e,x_.current=null}function kS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=iw(t,e),t!==null){t.flags&=32767,tn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,tn=null;return}}else if(t=nw(t,e,hi),t!==null){tn=t;return}if(e=e.sibling,e!==null){tn=e;return}tn=e=n}while(e!==null);an===0&&(an=5)}function so(n,e,t){var i=xt,r=Bi.transition;try{Bi.transition=null,xt=1,fw(n,e,t,i)}finally{Bi.transition=r,xt=i}return null}function fw(n,e,t,i){do Na();while(ms!==null);if(lt&6)throw Error(se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(se(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(jE(n,s),n===pn&&(tn=pn=null,vn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||cu||(cu=!0,HS(Mf,function(){return Na(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Bi.transition,Bi.transition=null;var o=xt;xt=1;var a=lt;lt|=4,x_.current=null,sw(n,t),DS(t,n),LT(Np),Tf=!!Dp,Np=Dp=null,n.current=t,ow(t),OE(),lt=a,xt=o,Bi.transition=s}else n.current=t;if(cu&&(cu=!1,ms=n,Bf=r),s=n.pendingLanes,s===0&&(Cs=null),zE(t.stateNode),ni(n,$t()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(zf)throw zf=!1,n=Jp,Jp=null,n;return Bf&1&&n.tag!==0&&Na(),s=n.pendingLanes,s&1?n===em?Kl++:(Kl=0,em=n):Kl=0,js(),null}function Na(){if(ms!==null){var n=vy(Bf),e=Bi.transition,t=xt;try{if(Bi.transition=null,xt=16>n?16:n,ms===null)var i=!1;else{if(n=ms,ms=null,Bf=0,lt&6)throw Error(se(331));var r=lt;for(lt|=4,ge=n.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var u=ge;switch(u.tag){case 0:case 11:case 15:$l(8,u,s)}var d=u.child;if(d!==null)d.return=u,ge=d;else for(;ge!==null;){u=ge;var f=u.sibling,p=u.return;if(PS(u),u===c){ge=null;break}if(f!==null){f.return=p,ge=f;break}ge=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$l(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ge=h;break e}ge=s.return}}var x=n.current;for(ge=x;ge!==null;){o=ge;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ge=v;else e:for(o=x;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gd(9,a)}}catch(C){Wt(a,a.return,C)}if(a===o){ge=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ge=S;break e}ge=a.return}}if(lt=r,js(),_r&&typeof _r.onPostCommitFiberRoot=="function")try{_r.onPostCommitFiberRoot(cd,n)}catch{}i=!0}return i}finally{xt=t,Bi.transition=e}}return!1}function d0(n,e,t){e=$a(t,e),e=vS(n,e,1),n=As(n,e,1),e=Wn(),n!==null&&(Fc(n,1,e),ni(n,e))}function Wt(n,e,t){if(n.tag===3)d0(n,n,t);else for(;e!==null;){if(e.tag===3){d0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cs===null||!Cs.has(i))){n=$a(t,n),n=xS(e,n,1),e=As(e,n,1),n=Wn(),e!==null&&(Fc(e,1,n),ni(e,n));break}}e=e.return}}function dw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Wn(),n.pingedLanes|=n.suspendedLanes&t,pn===n&&(vn&t)===t&&(an===4||an===3&&(vn&130023424)===vn&&500>$t()-S_?So(n,0):y_|=t),ni(n,e)}function zS(n,e){e===0&&(n.mode&1?(e=Jc,Jc<<=1,!(Jc&130023424)&&(Jc=4194304)):e=1);var t=Wn();n=Xr(n,e),n!==null&&(Fc(n,e,t),ni(n,t))}function hw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),zS(n,t)}function pw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),zS(n,t)}var BS;BS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ei.current)Jn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Jn=!1,tw(n,e,t);Jn=!!(n.flags&131072)}else Jn=!1,Ot&&e.flags&1048576&&Wy(e,Lf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sf(n,e),n=e.pendingProps;var r=Wa(e,In.current);Da(e,t),r=p_(null,e,i,n,r,t);var s=m_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ti(i)?(s=!0,Pf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,c_(e),r.updater=_d,e.stateNode=r,r._reactInternals=e,Vp(e,i,n,t),e=jp(null,e,i,!0,s,t)):(e.tag=0,Ot&&s&&n_(e),zn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(sf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_w(i),n=Ki(i,n),r){case 0:e=Wp(null,e,i,n,t);break e;case 1:e=n0(null,e,i,n,t);break e;case 11:e=e0(null,e,i,n,t);break e;case 14:e=t0(null,e,i,Ki(i.type,n),t);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),Wp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),n0(n,e,i,r,t);case 3:e:{if(ES(e),n===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ky(n,e),If(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=$a(Error(se(423)),e),e=i0(n,e,i,t,r);break e}else if(i!==r){r=$a(Error(se(424)),e),e=i0(n,e,i,t,r);break e}else for(yi=ws(e.stateNode.containerInfo.firstChild),Mi=e,Ot=!0,Qi=null,t=$y(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ja(),i===r){e=Yr(n,e,t);break e}zn(n,e,i,t)}e=e.child}return e;case 5:return Zy(e),n===null&&zp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Ip(i,r)?o=null:s!==null&&Ip(i,s)&&(e.flags|=32),MS(n,e),zn(n,e,o,t),e.child;case 6:return n===null&&zp(e),null;case 13:return TS(n,e,t);case 4:return u_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Xa(e,null,i,t):zn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),e0(n,e,i,r,t);case 7:return zn(n,e,e.pendingProps,t),e.child;case 8:return zn(n,e,e.pendingProps.children,t),e.child;case 12:return zn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,wt(Df,i._currentValue),i._currentValue=o,s!==null)if(ir(s.value,o)){if(s.children===r.children&&!ei.current){e=Yr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hr(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Bp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Bp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Da(e,t),r=Vi(r),i=i(r),e.flags|=1,zn(n,e,i,t),e.child;case 14:return i=e.type,r=Ki(i,e.pendingProps),r=Ki(i.type,r),t0(n,e,i,r,t);case 15:return yS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),sf(n,e),e.tag=1,ti(i)?(n=!0,Pf(e)):n=!1,Da(e,t),gS(e,i,r),Vp(e,i,r,t),jp(null,e,i,!0,n,t);case 19:return wS(n,e,t);case 22:return SS(n,e,t)}throw Error(se(156,e.tag))};function HS(n,e){return py(n,e)}function mw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fi(n,e,t,i){return new mw(n,e,t,i)}function w_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _w(n){if(typeof n=="function")return w_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Wm)return 11;if(n===jm)return 14}return 2}function Ps(n,e){var t=n.alternate;return t===null?(t=Fi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function lf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")w_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ha:return Mo(t.children,r,s,e);case Gm:o=8,r|=8;break;case dp:return n=Fi(12,t,e,r|2),n.elementType=dp,n.lanes=s,n;case hp:return n=Fi(13,t,e,r),n.elementType=hp,n.lanes=s,n;case pp:return n=Fi(19,t,e,r),n.elementType=pp,n.lanes=s,n;case Zx:return xd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case qx:o=10;break e;case Kx:o=9;break e;case Wm:o=11;break e;case jm:o=14;break e;case cs:o=16,i=null;break e}throw Error(se(130,n==null?n:typeof n,""))}return e=Fi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Mo(n,e,t,i){return n=Fi(7,n,i,e),n.lanes=t,n}function xd(n,e,t,i){return n=Fi(22,n,i,e),n.elementType=Zx,n.lanes=t,n.stateNode={isHidden:!1},n}function oh(n,e,t){return n=Fi(6,n,null,e),n.lanes=t,n}function ah(n,e,t){return e=Fi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function gw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hd(0),this.expirationTimes=Hd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function A_(n,e,t,i,r,s,o,a,l){return n=new gw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},c_(s),n}function vw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:da,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function VS(n){if(!n)return Fs;n=n._reactInternals;e:{if(Ho(n)!==n||n.tag!==1)throw Error(se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ti(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(n.tag===1){var t=n.type;if(ti(t))return Vy(n,t,e)}return e}function GS(n,e,t,i,r,s,o,a,l){return n=A_(t,i,!0,n,r,s,o,a,l),n.context=VS(null),t=n.current,i=Wn(),r=Rs(t),s=Hr(i,r),s.callback=e??null,As(t,s,r),n.current.lanes=r,Fc(n,r,i),ni(n,i),n}function yd(n,e,t,i){var r=e.current,s=Wn(),o=Rs(r);return t=VS(t),e.context===null?e.context=t:e.pendingContext=t,e=Hr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=As(r,e,o),n!==null&&(tr(n,r,o,s),tf(n,r,o)),o}function Vf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function h0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function C_(n,e){h0(n,e),(n=n.alternate)&&h0(n,e)}function xw(){return null}var WS=typeof reportError=="function"?reportError:function(n){console.error(n)};function R_(n){this._internalRoot=n}Sd.prototype.render=R_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(se(409));yd(n,e,null,null)};Sd.prototype.unmount=R_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Io(function(){yd(null,n,null,null)}),e[jr]=null}};function Sd(n){this._internalRoot=n}Sd.prototype.unstable_scheduleHydration=function(n){if(n){var e=Sy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<fs.length&&e!==0&&e<fs[t].priority;t++);fs.splice(t,0,n),t===0&&Ey(n)}};function P_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Md(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function p0(){}function yw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Vf(o);s.call(c)}}var o=GS(e,i,n,0,null,!1,!1,"",p0);return n._reactRootContainer=o,n[jr]=o.current,gc(n.nodeType===8?n.parentNode:n),Io(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Vf(l);a.call(c)}}var l=A_(n,0,!1,null,null,!1,!1,"",p0);return n._reactRootContainer=l,n[jr]=l.current,gc(n.nodeType===8?n.parentNode:n),Io(function(){yd(e,l,t,i)}),l}function Ed(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Vf(o);a.call(l)}}yd(e,o,n,r)}else o=yw(t,e,n,r,i);return Vf(o)}xy=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Dl(e.pendingLanes);t!==0&&($m(e,t|1),ni(e,$t()),!(lt&6)&&(qa=$t()+500,js()))}break;case 13:Io(function(){var i=Xr(n,1);if(i!==null){var r=Wn();tr(i,n,1,r)}}),C_(n,1)}};qm=function(n){if(n.tag===13){var e=Xr(n,134217728);if(e!==null){var t=Wn();tr(e,n,134217728,t)}C_(n,134217728)}};yy=function(n){if(n.tag===13){var e=Rs(n),t=Xr(n,e);if(t!==null){var i=Wn();tr(t,n,e,i)}C_(n,e)}};Sy=function(){return xt};My=function(n,e){var t=xt;try{return xt=n,e()}finally{xt=t}};Tp=function(n,e,t){switch(e){case"input":if(gp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=hd(i);if(!r)throw Error(se(90));Jx(i),gp(i,r)}}}break;case"textarea":ty(n,t);break;case"select":e=t.value,e!=null&&Ra(n,!!t.multiple,e,!1)}};ly=M_;cy=Io;var Sw={usingClientEntryPoint:!1,Events:[zc,ga,hd,oy,ay,M_]},yl={findFiberByHostInstance:po,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mw={bundleType:yl.bundleType,version:yl.version,rendererPackageName:yl.rendererPackageName,rendererConfig:yl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=dy(n),n===null?null:n.stateNode},findFiberByHostInstance:yl.findFiberByHostInstance||xw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{cd=uu.inject(Mw),_r=uu}catch{}}Ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sw;Ci.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!P_(e))throw Error(se(200));return vw(n,e,null,t)};Ci.createRoot=function(n,e){if(!P_(n))throw Error(se(299));var t=!1,i="",r=WS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=A_(n,1,!1,null,null,t,!1,i,r),n[jr]=e.current,gc(n.nodeType===8?n.parentNode:n),new R_(e)};Ci.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(se(188)):(n=Object.keys(n).join(","),Error(se(268,n)));return n=dy(e),n=n===null?null:n.stateNode,n};Ci.flushSync=function(n){return Io(n)};Ci.hydrate=function(n,e,t){if(!Md(e))throw Error(se(200));return Ed(null,n,e,!0,t)};Ci.hydrateRoot=function(n,e,t){if(!P_(n))throw Error(se(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=WS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=GS(e,null,n,1,t??null,r,!1,s,o),n[jr]=e.current,gc(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Sd(e)};Ci.render=function(n,e,t){if(!Md(e))throw Error(se(200));return Ed(null,n,e,!1,t)};Ci.unmountComponentAtNode=function(n){if(!Md(n))throw Error(se(40));return n._reactRootContainer?(Io(function(){Ed(null,null,n,!1,function(){n._reactRootContainer=null,n[jr]=null})}),!0):!1};Ci.unstable_batchedUpdates=M_;Ci.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Md(t))throw Error(se(200));if(n==null||n._reactInternals===void 0)throw Error(se(38));return Ed(n,e,t,!1,i)};Ci.version="18.3.1-next-f1338f8080-20240426";function jS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jS)}catch(n){console.error(n)}}jS(),jx.exports=Ci;var Ew=jx.exports,m0=Ew;up.createRoot=m0.createRoot,up.hydrateRoot=m0.hydrateRoot;const Tw="_header_15czs_3",ww="_scrolled_15czs_19",Aw="_hiddenNav_15czs_21",Cw="_navOpen_15czs_23",Rw="_container_15czs_37",Pw="_logo_15czs_51",bw="_tickerContainer_15czs_67",Lw="_tickerText_15czs_91",Dw="_tickerTextSpan_15czs_119",Nw="_menuToggle_15czs_143",Iw="_active_15czs_161",Uw="_mainNav_15czs_173",Ow="_mainNavLink_15czs_197",Gt={header:Tw,scrolled:ww,hiddenNav:Aw,navOpen:Cw,container:Rw,logo:Pw,tickerContainer:bw,tickerText:Lw,tickerTextSpan:Dw,menuToggle:Nw,active:Iw,mainNav:Uw,mainNavLink:Ow},Fw="/assets/images/logo.png",lh=["SYSTEM STATUS: ALL SYSTEMS NOMINAL","AI CORE MONITOR: ONLINE | THREAT LEVEL: LOW","LAST NETWORK SCAN: 3ms AGO | ANOMALIES DETECTED: 0","WEB3 DEFENSE SHIELD: ACTIVE","THREAT INTELLIGENCE FEED: SYNCED","AUTONOMOUS RESPONSE PROTOCOL: STANDBY"];function kw(){const[n,e]=st.useState(!1),[t,i]=st.useState(!1),r=st.useRef(0),[s,o]=st.useState(!1),[a,l]=st.useState(lh[0]),[c,u]=st.useState(0),d=()=>o(g=>!g),f=()=>o(!1);st.useEffect(()=>{const g=()=>{const _=window.scrollY;_>r.current&&_>150&&!s?i(!0):i(!1),r.current=_,_>50?e(!0):e(!1)};return window.addEventListener("scroll",g,{passive:!0}),()=>window.removeEventListener("scroll",g)},[s]),st.useEffect(()=>{let g=0;const _=setInterval(()=>{g=(g+1)%lh.length,l(lh[g]),u(m=>m+1)},5e3);return()=>clearInterval(_)},[]);const p=[Gt.header,n?Gt.scrolled:"",t?Gt.hiddenNav:"",s?Gt.navOpen:""].filter(Boolean).join(" ");return P.jsx("header",{className:p,children:P.jsxs("div",{className:`${Gt.container} container`,children:[P.jsx("div",{className:Gt.logo,children:P.jsx("a",{href:"/",onClick:f,children:P.jsx("img",{src:Fw,alt:"TALOS A.I. Logo"})})}),P.jsx("div",{className:Gt.tickerContainer,children:P.jsx("p",{className:Gt.tickerText,children:P.jsx("span",{className:Gt.tickerTextSpan,children:a},c)})}),P.jsxs("button",{className:`${Gt.menuToggle} ${s?Gt.active:""}`,onClick:d,"aria-label":s?"Κλείσιμο μενού":"Άνοιγμα μενού","aria-expanded":s,children:[P.jsx("span",{}),P.jsx("span",{}),P.jsx("span",{})]}),P.jsx("nav",{className:`${Gt.mainNav} ${s?Gt.active:""}`,children:P.jsxs("ul",{children:[P.jsx("li",{children:P.jsx("a",{href:"#home",className:Gt.mainNavLink,onClick:f,children:"Αρχική"})}),P.jsx("li",{children:P.jsx("a",{href:"#features",className:Gt.mainNavLink,onClick:f,children:"Χαρακτηριστικά"})}),P.jsx("li",{children:P.jsx("a",{href:"#about",className:Gt.mainNavLink,onClick:f,children:"About"})}),P.jsx("li",{children:P.jsx("a",{href:"#how-it-works",className:Gt.mainNavLink,onClick:f,children:"Πως Λειτουργεί"})}),P.jsx("li",{children:P.jsx("a",{href:"#use-cases",className:Gt.mainNavLink,onClick:f,children:"Use Cases"})}),P.jsx("li",{children:P.jsx("a",{href:"#testimonials",className:Gt.mainNavLink,onClick:f,children:"Testimonials"})}),P.jsx("li",{children:P.jsx("a",{href:"#talos-viz",className:Gt.mainNavLink,onClick:f,children:"Οπτικοποίηση"})}),P.jsx("li",{children:P.jsx("a",{href:"#demo",className:Gt.mainNavLink,onClick:f,children:"Λειτουργία"})}),P.jsx("li",{children:P.jsx("a",{href:"#contact",className:Gt.mainNavLink,onClick:f,children:"Επικοινωνία"})})]})})]})})}const zw="_hero_vvzvx_3",Bw="_heroLayoutContainer_vvzvx_31",Hw="_heroText_vvzvx_69",Vw="_glitchText_vvzvx_87",Gw="_highlight_vvzvx_149",Ww="_ctaButtons_vvzvx_161",jw="_heroBtn_vvzvx_177",Xw="_heroImage_vvzvx_181",Yw="_guardianImg_vvzvx_207",$w="_scrollIndicator_vvzvx_221",qw="_mouse_vvzvx_237",bi={hero:zw,heroLayoutContainer:Bw,heroText:Hw,glitchText:Vw,highlight:Gw,ctaButtons:Ww,heroBtn:jw,heroImage:Xw,guardianImg:Yw,scrollIndicator:$w,mouse:qw},Kw="/assets/images/talos-guardian.png";function Zw(){return P.jsxs("section",{className:bi.hero,id:"home",children:[P.jsxs("div",{className:`${bi.heroLayoutContainer} container`,children:[P.jsxs("div",{className:bi.heroText,children:[P.jsx("h1",{className:bi.glitchText,"data-text":"TALOS A.I.",children:" TALOS A.I. "}),P.jsxs("h2",{children:[" ΠΡΟΗΓΜΕΝΟΣ ΔΙΑΔΡΑΣΤΙΚΟΣ ",P.jsx("span",{className:bi.highlight,children:"CYBER ΦΥΛΑΚΑΣ"})," "]}),P.jsx("p",{children:" Η ασπίδα επόμενης γενιάς για το αποκεντρωμένο διαδίκτυο. Το TALOS A.I. συνδυάζει προγνωστική ανάλυση και αυτόνομη απόκριση για να θωρακίσει τα Web3 περιουσιακά σας στοιχεία από τις πιο εξελιγμένες επιθέσεις. "}),P.jsxs("div",{className:bi.ctaButtons,children:[P.jsx("a",{href:"#demo",className:`btn primary-btn ${bi.heroBtn}`,children:"ΔΕΙΤΕ ΣΕ ΔΡΑΣΗ"}),P.jsx("a",{href:"#features",className:`btn secondary-btn ${bi.heroBtn}`,children:"ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ"})]})]}),P.jsx("div",{className:bi.heroImage,children:P.jsx("img",{src:Kw,alt:"Cybernetic guardian figure representing TALOS A.I. security",className:bi.guardianImg})})]}),P.jsx("div",{className:bi.scrollIndicator,children:P.jsx("div",{className:bi.mouse})})]})}const Qw="_featuresSection_b433l_3",Jw="_container_b433l_33",eA="_grid_b433l_41",ch={featuresSection:Qw,container:Jw,grid:eA},tA="_card_131b6_5",nA="_iconWrapper_131b6_43",iA="_title_131b6_81",rA="_description_131b6_97",fu={card:tA,iconWrapper:nA,title:iA,description:rA};function sA({iconComponent:n,title:e,description:t}){const i=typeof n=="function"?n:null;return P.jsxs("div",{className:fu.card,children:[i&&P.jsx("div",{className:fu.iconWrapper,children:P.jsx(i,{})}),P.jsx("h3",{className:fu.title,children:e}),P.jsx("p",{className:fu.description,children:t})]})}const oA=n=>P.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",...n,children:P.jsx("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"})}),aA=n=>P.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",...n,children:P.jsx("path",{d:"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"})}),lA=n=>P.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",...n,children:P.jsx("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"})}),cA=n=>P.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",...n,children:P.jsx("path",{d:"M7 14c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 10.75 14l8.96-8.96c.39-.39.39-1.02 0-1.41zm-4.24 4.24l-1.41 1.41 4.24 4.24 1.41-1.41-4.24-4.24z"})}),uA=[{Icon:oA,title:"Ευφυής Ανίχνευση Απειλών",description:"Αναγνωρίζει και εξουδετερώνει γνωστές και άγνωστες απειλές σε πραγματικό χρόνο, αναλύοντας δισεκατομμύρια σημάτων δικτύου και συμπεριφοράς με τη δύναμη της AI."},{Icon:aA,title:"Προσαρμοστική Μάθηση",description:"Εξελίσσεται διαρκώς μέσω deep learning, προσαρμόζοντας τις άμυνές του αυτόματα στις νέες τακτικές των επιτιθέμενων και στο μοναδικό περιβάλλον σας."},{Icon:lA,title:"Προσωποποιημένη Άμυνα",description:"Δημιουργεί δυναμικά προφίλ κινδύνου και εφαρμόζει εξατομικευμένες πολιτικές ασφαλείας για κάθε κρίσιμο πόρο, από το endpoint έως το cloud."},{Icon:cA,title:"Αυτοματοποιημένη Απόκριση",description:"Εκτελεί αυτόνομες ενέργειες περιορισμού και εξουδετέρωσης, μειώνοντας τον χρόνο αντίδρασης (MTTR) σε χιλιοστά του δευτερολέπτου και ελαχιστοποιώντας τον αντίκτυπο."}];function fA(){return P.jsx("section",{className:ch.featuresSection,id:"features",children:P.jsxs("div",{className:`${ch.container} container`,children:[P.jsxs("div",{className:"section-header",children:[P.jsxs("h2",{className:"section-title",children:[" Βασικά ",P.jsx("span",{className:"highlight",children:"Χαρακτηριστικά"})," "]}),P.jsx("p",{className:"section-subtitle",children:" Πώς ο TALOS A.I. ενισχύει την ψηφιακή σας ασφάλεια. "})]}),P.jsx("div",{className:ch.grid,children:uA.map(n=>P.jsx(sA,{iconComponent:n.Icon,title:n.title,description:n.description},n.title))})]})})}const dA="_aboutSection_1d76g_5",hA="_container_1d76g_39",pA="_content_1d76g_55",uh={aboutSection:dA,container:hA,content:pA};function mA(){return P.jsx("section",{className:uh.aboutSection,id:"about",children:P.jsxs("div",{className:`${uh.container} container`,children:[P.jsxs("div",{className:"section-header",children:[P.jsxs("h2",{className:"section-title",children:[P.jsx("span",{className:"highlight",children:"TALOS A.I."})," - Η Εξέλιξη της Άμυνας"]}),P.jsx("p",{className:"section-subtitle",children:"Κατανοώντας την τεχνολογία πίσω από την ασφάλειά σας."})]}),P.jsxs("div",{className:uh.content,children:[P.jsx("h3",{children:"Η Αποστολή Μας"}),P.jsx("p",{children:"Σε έναν κόσμο όπου οι ψηφιακές απειλές γίνονται όλο και πιο σύνθετες και επίμονες, η αποστολή του TALOS A.I. είναι ξεκάθαρη: να παρέχουμε την πιο προηγμένη, ευφυή και προσαρμοστική κυβερνοασφάλεια. Δεσμευόμαστε να προστατεύουμε τα κρίσιμα δεδομένα, τις εφαρμογές και τις υποδομές των πελατών μας, δίνοντάς τους τη δυνατότητα να καινοτομούν και να αναπτύσσονται με σιγουριά. Αξιοποιούμε τη δύναμη της τεχνητής νοημοσύνης για να δημιουργήσουμε ένα ανθεκτικό και ασφαλές ψηφιακό περιβάλλον."}),P.jsx("h3",{children:"Το Όραμά Μας"}),P.jsx("p",{children:"Οραματιζόμαστε έναν ψηφιακό κόσμο όπου η ασφάλεια δεν είναι εμπόδιο, αλλά καταλύτης για την πρόοδο. Στοχεύουμε σε ένα μέλλον όπου η άμυνα εξελίσσεται προληπτικά, ταχύτερα από την επίθεση, χάρη σε αυτόνομα, ευφυή συστήματα όπως το TALOS A.I. που προβλέπουν, αναλύουν και εξουδετερώνουν τις απειλές σε πραγματικό χρόνο, συχνά πριν καν εκδηλωθούν πλήρως. Επιδιώκουμε να είμαστε ο σιωπηλός, πάντα σε εγρήγορση, ψηφιακός φύλακας που επιτρέπει στις επιχειρήσεις να επικεντρωθούν στους στόχους τους."}),P.jsx("h3",{children:"Τεχνολογική Προσέγγιση"}),P.jsx("p",{children:"Η ισχύς του TALOS A.I. πηγάζει από τη συνέργεια πολλαπλών τεχνολογιών αιχμής που λειτουργούν αρμονικά για να παρέχουν πολυεπίπεδη προστασία."}),P.jsx("h4",{children:"Προηγμένοι Αλγόριθμοι AI/ML"}),P.jsx("p",{children:"Χρησιμοποιούμε ένα εξελιγμένο σύνολο αλγορίθμων μηχανικής μάθησης (Machine Learning) και βαθιάς μάθησης (Deep Learning). Αυτοί οι αλγόριθμοι εκπαιδεύονται συνεχώς σε τεράστιους όγκους ανωνυμοποιημένων δεδομένων κυκλοφορίας και απειλών, επιτρέποντας στο σύστημα να αναγνωρίζει εξαιρετικά πολύπλοκα και συχνά αφανή μοτίβα που σχετίζονται με κακόβουλες δραστηριότητες. Η ικανότητα για μη επιβλεπόμενη μάθηση (unsupervised learning) μας επιτρέπει να εντοπίζουμε νέες και άγνωστες παραλλαγές απειλών (zero-day exploits) χωρίς να βασιζόμαστε αποκλειστικά σε γνωστές υπογραφές."}),P.jsx("h4",{children:"Ανάλυση Συμπεριφοράς & Ανίχνευση Ανωμαλιών"}),P.jsx("p",{children:'Αντί να ψάχνουμε μόνο για γνωστές απειλές, το TALOS A.I. επικεντρώνεται στην κατανόηση της "κανονικής" συμπεριφοράς κάθε συστήματος, δικτύου ή χρήστη. Δημιουργούμε δυναμικά προφίλ αναφοράς (baselines) και παρακολουθούμε συνεχώς για αποκλίσεις από αυτά. Οποιαδήποτε σημαντική ανωμαλία – είτε πρόκειται για ασυνήθιστη κίνηση δεδομένων, μη εξουσιοδοτημένη πρόσβαση, ή περίεργη δραστηριότητα διεργασιών – ενεργοποιεί συναγερμούς και μηχανισμούς απόκρισης. Αυτή η προσέγγιση είναι ιδιαίτερα αποτελεσματική έναντι εσωτερικών απειλών και στοχευμένων επιθέσεων.'}),P.jsx("h4",{children:"Ενοποίηση Δεδομένων Απειλών (Threat Intelligence Integration)"}),P.jsx("p",{children:"Το TALOS A.I. δεν λειτουργεί μεμονωμένα. Ενσωματώνει και συσχετίζει συνεχώς δεδομένα από πολλαπλές πηγές πληροφοριών για απειλές (Threat Intelligence Feeds) παγκοσμίου κύρους. Αυτό μας επιτρέπει να εμπλουτίζουμε την τοπική ανάλυση με το παγκόσμιο πλαίσιο, αναγνωρίζοντας δείκτες συμβιβασμού (Indicators of Compromise - IoCs) και τακτικές, τεχνικές και διαδικασίες (TTPs) γνωστών παραγόντων απειλής, ενισχύοντας την ακρίβεια και την ταχύτητα της ανίχνευσης."}),P.jsx("h3",{children:"Βασικά Πλεονεκτήματα"}),P.jsx("h4",{children:"Προληπτική Άμυνα"}),P.jsx("p",{children:"Με την ικανότητα πρόβλεψης και ανίχνευσης ανωμαλιών, το TALOS A.I. συχνά αναχαιτίζει τις επιθέσεις στα αρχικά τους στάδια, πριν προλάβουν να κλιμακωθούν και να προκαλέσουν σημαντική ζημιά, μειώνοντας δραστικά την επιφάνεια επίθεσης."}),P.jsx("h4",{children:"Προσαρμοστικότητα"}),P.jsx("p",{children:"Το σύστημα δεν είναι στατικό. Μαθαίνει και προσαρμόζεται διαρκώς στο μεταβαλλόμενο τοπίο των απειλών και στο συγκεκριμένο περιβάλλον του κάθε πελάτη, διασφαλίζοντας ότι η άμυνα παραμένει αποτελεσματική μακροπρόθεσμα."}),P.jsx("h4",{children:"Αυτοματοποίηση & Ταχύτητα"}),P.jsx("p",{children:"Η αυτοματοποιημένη ανάλυση και απόκριση μειώνουν δραστικά τον χρόνο που μεσολαβεί από την ανίχνευση έως την εξουδετέρωση (Mean Time to Detect - MTTD & Mean Time to Respond - MTTR), ελαχιστοποιώντας το παράθυρο ευκαιρίας για τους επιτιθέμενους και απελευθερώνοντας το πολύτιμο ανθρώπινο δυναμικό ασφαλείας."}),P.jsx("h4",{children:"Ολιστική Ορατότητα"}),P.jsx("p",{children:"Παρέχουμε μια ενοποιημένη εικόνα της κατάστασης ασφαλείας σε ολόκληρη την ψηφιακή υποδομή, από τα τελικά σημεία (endpoints) έως το cloud, διευκολύνοντας την κατανόηση των κινδύνων και τη λήψη τεκμηριωμένων αποφάσεων."}),P.jsx("h3",{children:"Ανάπτυξη & Ασφάλεια"}),P.jsx("h4",{children:"Ευέλικτες Επιλογές Ανάπτυξης"}),P.jsx("p",{children:"Κατανοούμε ότι κάθε οργανισμός έχει διαφορετικές ανάγκες. Το TALOS A.I. προσφέρεται με ευέλικτα μοντέλα ανάπτυξης, συμπεριλαμβανομένων λύσεων cloud (SaaS), on-premise, ή υβριδικών μοντέλων, για να ταιριάζει απόλυτα στην υπάρχουσα υποδομή και τις απαιτήσεις σας."}),P.jsx("h4",{children:"Ασφάλεια Δεδομένων & Συμμόρφωση"}),P.jsx("p",{children:'Η ασφάλεια και η ιδιωτικότητα των δεδομένων σας είναι η ύψιστη προτεραιότητά μας. Η πλατφόρμα έχει σχεδιαστεί με αρχές "security-by-design" και "privacy-by-design", τηρώντας αυστηρά πρότυπα ασφαλείας και βοηθώντας τους οργανισμούς να ανταποκριθούν στις απαιτήσεις κανονιστικής συμμόρφωσης (όπως GDPR, κ.λπ.).'})]})]})})}const _A="_useCasesSection_x50ur_5",gA="_container_x50ur_17",vA="_grid_x50ur_31",xA="_useCaseCard_x50ur_65",yA="_iconWrapper_x50ur_105",SA="_caseTitle_x50ur_139",MA="_caseDescription_x50ur_157",qs={useCasesSection:_A,container:gA,grid:vA,useCaseCard:xA,iconWrapper:yA,caseTitle:SA,caseDescription:MA},EA=()=>P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"100%",height:"100%",children:P.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"})}),TA=()=>P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"100%",height:"100%",children:P.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"})}),wA=()=>P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"100%",height:"100%",children:P.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12v1.5m15-1.5v1.5m-15 3.75H3m18 0h-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),AA=()=>P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"100%",height:"100%",children:P.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),CA=[{Icon:EA,title:"Ασφάλεια Cloud Υποδομών",description:"Προστασία cloud-native εφαρμογών και υποδομών σε AWS, Azure & GCP. Συνεχής παρακολούθηση διαμορφώσεων (CSPM), ανίχνευση απειλών σε containers και serverless, διασφάλιση συμμόρφωσης."},{Icon:TA,title:"Προηγμένη Προστασία Endpoint",description:"Προηγμένη άμυνα EDR/XDR με AI ανάλυση συμπεριφοράς για εντοπισμό ransomware, fileless malware, zero-days και τεχνικών απόκρυψης (evasion techniques) που παρακάμπτουν τα συμβατικά εργαλεία."},{Icon:wA,title:"Ανάλυση & Ορατότητα Δικτύου",description:"Βαθιά ορατότητα δικτύου (NDR) με μηχανική μάθηση για ανίχνευση lateral movement, C&C επικοινωνίας, data exfiltration και ανωμαλιών που υποδηλώνουν παραβίαση."},{Icon:AA,title:"Ασφάλεια για Χρηματοοικονομικά",description:"Εξειδικευμένη προστασία για τον χρηματοπιστωτικό τομέα. Ανίχνευση απάτης σε πραγματικό χρόνο, ασφάλεια συναλλαγών, κάλυψη απαιτήσεων PSD2/PCI-DSS και προστασία από στοχευμένες επιθέσεις."}];function RA(){return P.jsx("section",{className:qs.useCasesSection,id:"use-cases",children:P.jsxs("div",{className:`${qs.container} container`,children:[P.jsxs("div",{className:"section-header",children:[P.jsxs("h2",{className:"section-title",children:[" Περιπτώσεις ",P.jsx("span",{className:"highlight",children:"Χρήσης"})," "]}),P.jsx("p",{className:"section-subtitle",children:" Πώς ο TALOS A.I. προσαρμόζεται και προστατεύει σε διάφορα σενάρια. "})]}),P.jsx("div",{className:qs.grid,children:CA.map((n,e)=>P.jsxs("div",{className:qs.useCaseCard,children:[n.Icon&&P.jsxs("div",{className:qs.iconWrapper,children:[" ",P.jsx(n.Icon,{})," "]}),P.jsx("h3",{className:qs.caseTitle,children:n.title}),P.jsx("p",{className:qs.caseDescription,children:n.description})]},e))})]})})}const PA="_howItWorksSection_12iaw_5",bA="_container_12iaw_23",LA="_stepsContainer_12iaw_37",DA="_stepItem_12iaw_57",NA="_stepHeader_12iaw_147",IA="_stepNumber_12iaw_161",UA="_iconWrapper_12iaw_181",OA="_stepTitle_12iaw_215",FA="_stepDescription_12iaw_231",Er={howItWorksSection:PA,container:bA,stepsContainer:LA,stepItem:DA,stepHeader:NA,stepNumber:IA,iconWrapper:UA,stepTitle:OA,stepDescription:FA},kA=()=>P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"100%",height:"100%",children:P.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"})}),zA=()=>P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"100%",height:"100%",children:P.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12v1.5m15-1.5v1.5m-15 3.75H3m18 0h-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-5.25 4.125a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-2.625.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm-2.625-.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"})}),BA=()=>P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"100%",height:"100%",children:P.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),HA=()=>P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"100%",height:"100%",children:P.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),VA=[{stepNumber:1,Icon:kA,title:"Συλλογή Δεδομένων",description:"Ανάλυση ροών δεδομένων από όλο το εύρος της υποδομής σας: δίκτυο (NetFlow, PCAP), endpoints (EDR logs), cloud APIs, logs εφαρμογών και threat intelligence feeds."},{stepNumber:2,Icon:zA,title:"Ευφυής Ανάλυση AI",description:"Ο πυρήνας AI επεξεργάζεται, συσχετίζει και αναλύει τα δεδομένα, χρησιμοποιώντας αλγόριθμους ανίχνευσης ανωμαλιών, ML & ανάλυσης συμπεριφοράς για εντοπισμό ύποπτων μοτίβων."},{stepNumber:3,Icon:BA,title:"Άμεση Ανίχνευση Απειλών",description:"Αναγνώριση και ταξινόμηση απειλών real-time, από κοινό malware έως APTs και zero-day exploits, με ελάχιστα false positives και μέγιστη ακρίβεια."},{stepNumber:4,Icon:HA,title:"Αυτοματοποιημένη Απόκριση",description:"Ενεργοποίηση προκαθορισμένων playbooks ή δυναμικών ενεργειών απόκρισης (π.χ., απομόνωση endpoint, μπλοκάρισμα IP) για άμεσο περιορισμό της απειλής βάσει πολιτικής."}];function GA(){return P.jsx("section",{className:Er.howItWorksSection,id:"how-it-works",children:P.jsxs("div",{className:`${Er.container} container`,children:[P.jsxs("div",{className:"section-header",children:[P.jsxs("h2",{className:"section-title",children:[" Πώς ",P.jsx("span",{className:"highlight",children:"Λειτουργεί"}),"; "]}),P.jsx("p",{className:"section-subtitle",children:" Η διαδικασία προστασίας του TALOS A.I. σε 4 απλά βήματα. "})]}),P.jsx("div",{className:Er.stepsContainer,children:VA.map(n=>{const e=n.Icon&&typeof n.Icon=="function"?n.Icon:null;return P.jsxs("div",{className:Er.stepItem,children:[P.jsxs("div",{className:Er.stepHeader,children:[P.jsx("span",{className:Er.stepNumber,children:String(n.stepNumber).padStart(2,"0")}),e&&P.jsx("div",{className:Er.iconWrapper,children:P.jsx(e,{})})]}),P.jsx("h3",{className:Er.stepTitle,children:n.title}),P.jsx("p",{className:Er.stepDescription,children:n.description})]},n.stepNumber)})})]})})}const WA="_testimonialsSection_1hdpg_5",jA="_container_1hdpg_31",XA="_testimonialsGrid_1hdpg_39",YA="_testimonialCard_1hdpg_51",$A="_quote_1hdpg_63",qA="_authorInfo_1hdpg_81",KA="_authorName_1hdpg_87",ZA="_authorRole_1hdpg_93",QA="_logosHeader_1hdpg_103",JA="_logosContainer_1hdpg_115",eC="_logoItem_1hdpg_127",ji={testimonialsSection:WA,container:jA,testimonialsGrid:XA,testimonialCard:YA,quote:$A,authorInfo:qA,authorName:KA,authorRole:ZA,logosHeader:QA,logosContainer:JA,logoItem:eC},tC=[{quote:"Με το TALOS A.I., ο χρόνος απόκρισης σε κρίσιμα περιστατικά μειώθηκε κατά 90%. Η προληπτική ανίχνευση άλλαξε τους κανόνες του παιχνιδιού για την ομάδα μας.",author:"Άννα Παπαδάκη",role:"CISO @ Global Innovations"},{quote:"Η ορατότητα που αποκτήσαμε σε όλο το υβριδικό μας περιβάλλον είναι πρωτοφανής. Το TALOS εντοπίζει απειλές που τα προηγούμενα 5 εργαλεία μας έχαναν.",author:"Γιώργος Δημητρίου",role:"IT Director @ SecureNet Solutions"},{quote:"Η ενσωμάτωση με την υπάρχουσα SIEM πλατφόρμα μας ήταν απρόσκοπτη. Η AI μηχανή του TALOS παρέχει actionable intelligence, όχι απλώς ατελείωτα alerts.",author:"Μαρία Κωστοπούλου",role:"Head of Infrastructure @ Digital Ventures"}],nC=[{name:"TECHSOLUTIONS",styleVar:"--accent-blue"},{name:"FINSECURE",styleVar:"--accent-cyan"},{name:"DATA PROTECT",styleVar:"--accent-purple"},{name:"CLOUD PARTNER",styleVar:"--accent-orange"},{name:"GLOBAL INNOV.",styleVar:"--accent-green"}];function iC(){return P.jsx("section",{className:ji.testimonialsSection,id:"testimonials",children:P.jsxs("div",{className:`${ji.container} container`,children:[P.jsxs("div",{className:"section-header",children:[P.jsxs("h2",{className:"section-title",children:[" Τι Λένε οι ",P.jsx("span",{className:"highlight",children:"Πελάτες"})," Μας "]}),P.jsx("p",{className:"section-subtitle",children:" Η εμπιστοσύνη και η επιτυχία των συνεργατών μας είναι η καλύτερη απόδειξη. "})]}),P.jsx("div",{className:ji.testimonialsGrid,children:tC.map((n,e)=>P.jsxs("div",{className:ji.testimonialCard,children:[P.jsxs("p",{className:ji.quote,children:['"',n.quote,'"']}),P.jsxs("div",{className:ji.authorInfo,children:[P.jsx("span",{className:ji.authorName,children:n.author}),P.jsx("span",{className:ji.authorRole,children:n.role})]})]},e))}),P.jsx("h3",{className:ji.logosHeader,children:"Μας εμπιστεύονται:"}),P.jsx("div",{className:ji.logosContainer,children:nC.map((n,e)=>P.jsx("div",{className:ji.logoItem,style:{"--logo-color":`var(${n.styleVar})`},children:P.jsx("span",{children:n.name})},e))})]})})}const rC="_section_19sft_5",sC="_container_19sft_29",oC="_visualizationArea_19sft_35",aC="_visualizationContainer_19sft_47",du={section:rC,container:sC,visualizationArea:oC,visualizationContainer:aC};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const b_="163",lC=0,_0=1,cC=2,XS=1,uC=2,Pr=3,ks=0,ii=1,Ir=2,bs=0,Ia=1,g0=2,v0=3,x0=4,fC=5,fo=100,dC=101,hC=102,pC=103,mC=104,_C=200,gC=201,vC=202,xC=203,im=204,rm=205,yC=206,SC=207,MC=208,EC=209,TC=210,wC=211,AC=212,CC=213,RC=214,PC=0,bC=1,LC=2,Gf=3,DC=4,NC=5,IC=6,UC=7,YS=0,OC=1,FC=2,Ls=0,kC=1,zC=2,BC=3,HC=4,VC=5,GC=6,WC=7,$S=300,Ka=301,Za=302,sm=303,om=304,Td=306,am=1e3,go=1001,lm=1002,ki=1003,jC=1004,hu=1005,Ji=1006,fh=1007,vo=1008,Ds=1009,XC=1010,YC=1011,qS=1012,KS=1013,Qa=1014,_s=1015,Wf=1016,ZS=1017,QS=1018,Hc=1020,$C=35902,qC=1021,KC=1022,hr=1023,ZC=1024,QC=1025,Ua=1026,Ac=1027,JC=1028,JS=1029,e2=1030,e1=1031,t1=1033,dh=33776,hh=33777,ph=33778,mh=33779,y0=35840,S0=35841,M0=35842,E0=35843,n1=36196,T0=37492,w0=37496,A0=37808,C0=37809,R0=37810,P0=37811,b0=37812,L0=37813,D0=37814,N0=37815,I0=37816,U0=37817,O0=37818,F0=37819,k0=37820,z0=37821,_h=36492,B0=36494,H0=36495,t2=36283,V0=36284,G0=36285,W0=36286,n2=3200,i2=3201,r2=0,s2=1,hs="",or="srgb",Xs="srgb-linear",L_="display-p3",wd="display-p3-linear",jf="linear",Rt="srgb",Xf="rec709",Yf="p3",Wo=7680,j0=519,o2=512,a2=513,l2=514,i1=515,c2=516,u2=517,f2=518,d2=519,X0=35044,Y0="300 es",kr=2e3,$f=2001;class ul{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gh=Math.PI/180,cm=180/Math.PI;function Vc(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function Qn(n,e,t){return Math.max(e,Math.min(t,n))}function h2(n,e){return(n%e+e)%e}function vh(n,e,t){return(1-t)*n+t*e}function Sl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $n(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],x=r[1],v=r[4],S=r[7],C=r[2],A=r[5],M=r[8];return s[0]=o*_+a*x+l*C,s[3]=o*m+a*v+l*A,s[6]=o*h+a*S+l*M,s[1]=c*_+u*x+d*C,s[4]=c*m+u*v+d*A,s[7]=c*h+u*S+d*M,s[2]=f*_+p*x+g*C,s[5]=f*m+p*v+g*A,s[8]=f*h+p*S+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xh.makeScale(e,t)),this}rotate(e){return this.premultiply(xh.makeRotation(-e)),this}translate(e,t){return this.premultiply(xh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xh=new $e;function r1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function p2(){const n=qf("canvas");return n.style.display="block",n}const $0={};function m2(n){n in $0||($0[n]=!0,console.warn(n))}const q0=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),K0=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pu={[Xs]:{transfer:jf,primaries:Xf,toReference:n=>n,fromReference:n=>n},[or]:{transfer:Rt,primaries:Xf,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[wd]:{transfer:jf,primaries:Yf,toReference:n=>n.applyMatrix3(K0),fromReference:n=>n.applyMatrix3(q0)},[L_]:{transfer:Rt,primaries:Yf,toReference:n=>n.convertSRGBToLinear().applyMatrix3(K0),fromReference:n=>n.applyMatrix3(q0).convertLinearToSRGB()}},_2=new Set([Xs,wd]),yt={enabled:!0,_workingColorSpace:Xs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!_2.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=pu[e].toReference,r=pu[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return pu[n].primaries},getTransfer:function(n){return n===hs?jf:pu[n].transfer}};function Oa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let jo;class g2{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jo===void 0&&(jo=qf("canvas")),jo.width=e.width,jo.height=e.height;const i=jo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=jo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oa(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oa(t[i]/255)*255):t[i]=Oa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v2=0;class s1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v2++}),this.uuid=Vc(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sh(r[o].image)):s.push(Sh(r[o]))}else s=Sh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Sh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?g2.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x2=0;class ri extends ul{constructor(e=ri.DEFAULT_IMAGE,t=ri.DEFAULT_MAPPING,i=go,r=go,s=Ji,o=vo,a=hr,l=Ds,c=ri.DEFAULT_ANISOTROPY,u=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x2++}),this.uuid=Vc(),this.name="",this.source=new s1(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$S)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case am:e.x=e.x-Math.floor(e.x);break;case go:e.x=e.x<0?0:1;break;case lm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case am:e.y=e.y-Math.floor(e.y);break;case go:e.y=e.y<0?0:1;break;case lm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=$S;ri.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(p+1)/2,C=(h+1)/2,A=(u+f)/4,M=(d+_)/4,b=(g+m)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=M/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=M/s,r=b/s),this.set(i,r,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class y2 extends ul{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ji,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new ri(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new s1(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Uo extends y2{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class o1 extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ki,this.minFilter=ki,this.wrapR=go,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class S2 extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ki,this.minFilter=ki,this.wrapR=go,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gc{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==p||u!==g){let m=1-a;const h=l*f+c*p+u*g+d*_,x=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,h*x);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const S=a*x;if(l=l*m+f*S,c=c*m+p*S,u=u*m+g*S,d=d*m+_*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*p-c*f,e[t+1]=l*g+u*f+c*d-a*p,e[t+2]=c*g+u*p+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Z0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Z0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mh=new z,Z0=new Gc;class Wc{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xi):Xi.fromBufferAttribute(s,o),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mu.copy(i.boundingBox)),mu.applyMatrix4(e.matrixWorld),this.union(mu)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ml),_u.subVectors(this.max,Ml),Xo.subVectors(e.a,Ml),Yo.subVectors(e.b,Ml),$o.subVectors(e.c,Ml),ts.subVectors(Yo,Xo),ns.subVectors($o,Yo),Ks.subVectors(Xo,$o);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Ks.z,Ks.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Ks.z,0,-Ks.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Ks.y,Ks.x,0];return!Eh(t,Xo,Yo,$o,_u)||(t=[1,0,0,0,1,0,0,0,1],!Eh(t,Xo,Yo,$o,_u))?!1:(gu.crossVectors(ts,ns),t=[gu.x,gu.y,gu.z],Eh(t,Xo,Yo,$o,_u))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tr=[new z,new z,new z,new z,new z,new z,new z,new z],Xi=new z,mu=new Wc,Xo=new z,Yo=new z,$o=new z,ts=new z,ns=new z,Ks=new z,Ml=new z,_u=new z,gu=new z,Zs=new z;function Eh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Zs.fromArray(n,s);const a=r.x*Math.abs(Zs.x)+r.y*Math.abs(Zs.y)+r.z*Math.abs(Zs.z),l=e.dot(Zs),c=t.dot(Zs),u=i.dot(Zs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const M2=new Wc,El=new z,Th=new z;class Ad{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):M2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;El.subVectors(e,this.center);const t=El.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(El,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(El.copy(e.center).add(Th)),this.expandByPoint(El.copy(e.center).sub(Th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wr=new z,wh=new z,vu=new z,is=new z,Ah=new z,xu=new z,Ch=new z;class a1{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){wh.copy(e).add(t).multiplyScalar(.5),vu.copy(t).sub(e).normalize(),is.copy(this.origin).sub(wh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(vu),a=is.dot(this.direction),l=-is.dot(vu),c=is.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(wh).addScaledVector(vu,f),p}intersectSphere(e,t){wr.subVectors(e.center,this.origin);const i=wr.dot(this.direction),r=wr.dot(wr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,i,r,s){Ah.subVectors(t,e),xu.subVectors(i,e),Ch.crossVectors(Ah,xu);let o=this.direction.dot(Ch),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,e);const l=a*this.direction.dot(xu.crossVectors(is,xu));if(l<0)return null;const c=a*this.direction.dot(Ah.cross(is));if(c<0||l+c>o)return null;const u=-a*is.dot(Ch);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,i,r,s,o,a,l,c,u,d,f,p,g,_,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,p,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,d,f,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qo.setFromMatrixColumn(e,0).length(),s=1/qo.setFromMatrixColumn(e,1).length(),o=1/qo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,_=c*d;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E2,e,T2)}lookAt(e,t,i){const r=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),rs.crossVectors(i,ui),rs.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),rs.crossVectors(i,ui)),rs.normalize(),yu.crossVectors(ui,rs),r[0]=rs.x,r[4]=yu.x,r[8]=ui.x,r[1]=rs.y,r[5]=yu.y,r[9]=ui.y,r[2]=rs.z,r[6]=yu.z,r[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],x=i[3],v=i[7],S=i[11],C=i[15],A=r[0],M=r[4],b=r[8],E=r[12],y=r[1],U=r[5],O=r[9],I=r[13],G=r[2],j=r[6],q=r[10],$=r[14],N=r[3],H=r[7],L=r[11],te=r[15];return s[0]=o*A+a*y+l*G+c*N,s[4]=o*M+a*U+l*j+c*H,s[8]=o*b+a*O+l*q+c*L,s[12]=o*E+a*I+l*$+c*te,s[1]=u*A+d*y+f*G+p*N,s[5]=u*M+d*U+f*j+p*H,s[9]=u*b+d*O+f*q+p*L,s[13]=u*E+d*I+f*$+p*te,s[2]=g*A+_*y+m*G+h*N,s[6]=g*M+_*U+m*j+h*H,s[10]=g*b+_*O+m*q+h*L,s[14]=g*E+_*I+m*$+h*te,s[3]=x*A+v*y+S*G+C*N,s[7]=x*M+v*U+S*j+C*H,s[11]=x*b+v*O+S*q+C*L,s[15]=x*E+v*I+S*$+C*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],x=d*m*c-_*f*c+_*l*p-a*m*p-d*l*h+a*f*h,v=g*f*c-u*m*c-g*l*p+o*m*p+u*l*h-o*f*h,S=u*_*c-g*d*c+g*a*p-o*_*p-u*a*h+o*d*h,C=g*d*l-u*_*l-g*a*f+o*_*f+u*a*m-o*d*m,A=t*x+i*v+r*S+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/A;return e[0]=x*M,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*M,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*h+i*l*h)*M,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*M,e[4]=v*M,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*h+t*f*h)*M,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*h-t*l*h)*M,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*M,e[8]=S*M,e[9]=(g*d*s-u*_*s-g*i*p+t*_*p+u*i*h-t*d*h)*M,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*h+t*a*h)*M,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*p-t*a*p)*M,e[12]=C*M,e[13]=(u*_*r-g*d*r+g*i*f-t*_*f-u*i*m+t*d*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,_=o*u,m=o*d,h=a*d,x=l*c,v=l*u,S=l*d,C=i.x,A=i.y,M=i.z;return r[0]=(1-(_+h))*C,r[1]=(p+S)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+h))*A,r[6]=(m+x)*A,r[7]=0,r[8]=(g+v)*M,r[9]=(m-x)*M,r[10]=(1-(f+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qo.set(r[0],r[1],r[2]).length();const o=qo.set(r[4],r[5],r[6]).length(),a=qo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yi.copy(this);const c=1/s,u=1/o,d=1/a;return Yi.elements[0]*=c,Yi.elements[1]*=c,Yi.elements[2]*=c,Yi.elements[4]*=u,Yi.elements[5]*=u,Yi.elements[6]*=u,Yi.elements[8]*=d,Yi.elements[9]*=d,Yi.elements[10]*=d,t.setFromRotationMatrix(Yi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=kr){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===kr)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===$f)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=kr){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*c,p=(i+r)*u;let g,_;if(a===kr)g=(o+s)*d,_=-2*d;else if(a===$f)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qo=new z,Yi=new Lt,E2=new z(0,0,0),T2=new z(1,1,1),rs=new z,yu=new z,ui=new z,Q0=new Lt,J0=new Gc;class $r{constructor(e=0,t=0,i=0,r=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Qn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Q0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Q0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return J0.setFromEuler(this),this.setFromQuaternion(J0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class l1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let w2=0;const ev=new z,Ko=new Gc,Ar=new Lt,Su=new z,Tl=new z,A2=new z,C2=new Gc,tv=new z(1,0,0),nv=new z(0,1,0),iv=new z(0,0,1),rv={type:"added"},R2={type:"removed"},Zo={type:"childadded",child:null},Rh={type:"childremoved",child:null};class jn extends ul{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w2++}),this.uuid=Vc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new z,t=new $r,i=new Gc,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new $e}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new l1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ko.setFromAxisAngle(e,t),this.quaternion.multiply(Ko),this}rotateOnWorldAxis(e,t){return Ko.setFromAxisAngle(e,t),this.quaternion.premultiply(Ko),this}rotateX(e){return this.rotateOnAxis(tv,e)}rotateY(e){return this.rotateOnAxis(nv,e)}rotateZ(e){return this.rotateOnAxis(iv,e)}translateOnAxis(e,t){return ev.copy(e).applyQuaternion(this.quaternion),this.position.add(ev.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tv,e)}translateY(e){return this.translateOnAxis(nv,e)}translateZ(e){return this.translateOnAxis(iv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Su.copy(e):Su.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(Tl,Su,this.up):Ar.lookAt(Su,Tl,this.up),this.quaternion.setFromRotationMatrix(Ar),r&&(Ar.extractRotation(r.matrixWorld),Ko.setFromRotationMatrix(Ar),this.quaternion.premultiply(Ko.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rv),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R2),Rh.child=e,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rv),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,e,A2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,C2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jn.DEFAULT_UP=new z(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $i=new z,Cr=new z,Ph=new z,Rr=new z,Qo=new z,Jo=new z,sv=new z,bh=new z,Lh=new z,Dh=new z;class fr{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$i.subVectors(e,t),r.cross($i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$i.subVectors(r,t),Cr.subVectors(i,t),Ph.subVectors(e,t);const o=$i.dot($i),a=$i.dot(Cr),l=$i.dot(Ph),c=Cr.dot(Cr),u=Cr.dot(Ph),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rr)===null?!1:Rr.x>=0&&Rr.y>=0&&Rr.x+Rr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rr.x),l.addScaledVector(o,Rr.y),l.addScaledVector(a,Rr.z),l)}static isFrontFacing(e,t,i,r){return $i.subVectors(i,t),Cr.subVectors(e,t),$i.cross(Cr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),$i.cross(Cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return fr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return fr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Qo.subVectors(r,i),Jo.subVectors(s,i),bh.subVectors(e,i);const l=Qo.dot(bh),c=Jo.dot(bh);if(l<=0&&c<=0)return t.copy(i);Lh.subVectors(e,r);const u=Qo.dot(Lh),d=Jo.dot(Lh);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Qo,o);Dh.subVectors(e,s);const p=Qo.dot(Dh),g=Jo.dot(Dh);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Jo,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return sv.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(sv,a);const h=1/(m+_+f);return o=_*h,a=f*h,t.copy(i).addScaledVector(Qo,o).addScaledVector(Jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const c1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function Nh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=or){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=h2(e,1),t=Qn(t,0,1),i=Qn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Nh(o,s,e+1/3),this.g=Nh(o,s,e),this.b=Nh(o,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=or){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=or){const i=c1[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=yh(e.r),this.g=yh(e.g),this.b=yh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=or){return yt.fromWorkingColorSpace(An.copy(this),e),Math.round(Qn(An.r*255,0,255))*65536+Math.round(Qn(An.g*255,0,255))*256+Math.round(Qn(An.b*255,0,255))}getHexString(e=or){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(An.copy(this),t);const i=An.r,r=An.g,s=An.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=or){yt.fromWorkingColorSpace(An.copy(this),e);const t=An.r,i=An.g,r=An.b;return e!==or?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Mu);const i=vh(ss.h,Mu.h,t),r=vh(ss.s,Mu.s,t),s=vh(ss.l,Mu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new mt;mt.NAMES=c1;let P2=0;class jc extends ul{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P2++}),this.uuid=Vc(),this.name="",this.type="Material",this.blending=Ia,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=im,this.blendDst=rm,this.blendEquation=fo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Gf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ia&&(i.blending=this.blending),this.side!==ks&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==im&&(i.blendSrc=this.blendSrc),this.blendDst!==rm&&(i.blendDst=this.blendDst),this.blendEquation!==fo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class u1 extends jc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=YS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new z,Eu=new at;class nr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=X0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_s,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return m2("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Eu.fromBufferAttribute(this,t),Eu.applyMatrix3(e),this.setXY(t,Eu.x,Eu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sl(t,this.array)),t}setX(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sl(t,this.array)),t}setY(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sl(t,this.array)),t}setW(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array),r=$n(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array),r=$n(r,this.array),s=$n(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==X0&&(e.usage=this.usage),e}}class f1 extends nr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class d1 extends nr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vr extends nr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let b2=0;const Li=new Lt,Ih=new jn,ea=new z,fi=new Wc,wl=new Wc,un=new z;class Qr extends ul{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b2++}),this.uuid=Vc(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r1(e)?d1:f1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,i){return Li.makeTranslation(e,t,i),this.applyMatrix4(Li),this}scale(e,t,i){return Li.makeScale(e,t,i),this.applyMatrix4(Li),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Vr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];fi.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ad);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];wl.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(fi.min,wl.min),fi.expandByPoint(un),un.addVectors(fi.max,wl.max),fi.expandByPoint(un)):(fi.expandByPoint(wl.min),fi.expandByPoint(wl.max))}fi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(un));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)un.fromBufferAttribute(a,c),l&&(ea.fromBufferAttribute(e,c),un.add(ea)),r=Math.max(r,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new z,l[b]=new z;const c=new z,u=new z,d=new z,f=new at,p=new at,g=new at,_=new z,m=new z;function h(b,E,y){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,y),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(U),a[b].add(_),a[E].add(_),a[y].add(_),l[b].add(m),l[E].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let b=0,E=x.length;b<E;++b){const y=x[b],U=y.start,O=y.count;for(let I=U,G=U+O;I<G;I+=3)h(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const v=new z,S=new z,C=new z,A=new z;function M(b){C.fromBufferAttribute(r,b),A.copy(C);const E=a[b];v.copy(E),v.sub(C.multiplyScalar(C.dot(E))).normalize(),S.crossVectors(A,E);const U=S.dot(l[b])<0?-1:1;o.setXYZW(b,v.x,v.y,v.z,U)}for(let b=0,E=x.length;b<E;++b){const y=x[b],U=y.start,O=y.count;for(let I=U,G=U+O;I<G;I+=3)M(e.getX(I+0)),M(e.getX(I+1)),M(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new nr(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ov=new Lt,Qs=new a1,Tu=new Ad,av=new z,ta=new z,na=new z,ia=new z,Uh=new z,wu=new z,Au=new at,Cu=new at,Ru=new at,lv=new z,cv=new z,uv=new z,Pu=new z,bu=new z;class zr extends jn{constructor(e=new Qr,t=new u1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){wu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Uh.fromBufferAttribute(d,e),o?wu.addScaledVector(Uh,u):wu.addScaledVector(Uh.sub(t),u))}t.add(wu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tu.copy(i.boundingSphere),Tu.applyMatrix4(s),Qs.copy(e.ray).recast(e.near),!(Tu.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(Tu,av)===null||Qs.origin.distanceToSquared(av)>(e.far-e.near)**2))&&(ov.copy(s).invert(),Qs.copy(e.ray).applyMatrix4(ov),!(i.boundingBox!==null&&Qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,C=v;S<C;S+=3){const A=a.getX(S),M=a.getX(S+1),b=a.getX(S+2);r=Lu(this,h,e,i,c,u,d,A,M,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Lu(this,o,e,i,c,u,d,x,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,C=v;S<C;S+=3){const A=S,M=S+1,b=S+2;r=Lu(this,h,e,i,c,u,d,A,M,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const x=m,v=m+1,S=m+2;r=Lu(this,o,e,i,c,u,d,x,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function L2(n,e,t,i,r,s,o,a){let l;if(e.side===ii?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ks,a),l===null)return null;bu.copy(a),bu.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(bu);return c<t.near||c>t.far?null:{distance:c,point:bu.clone(),object:n}}function Lu(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ta),n.getVertexPosition(l,na),n.getVertexPosition(c,ia);const u=L2(n,e,t,i,ta,na,ia,Pu);if(u){r&&(Au.fromBufferAttribute(r,a),Cu.fromBufferAttribute(r,l),Ru.fromBufferAttribute(r,c),u.uv=fr.getInterpolation(Pu,ta,na,ia,Au,Cu,Ru,new at)),s&&(Au.fromBufferAttribute(s,a),Cu.fromBufferAttribute(s,l),Ru.fromBufferAttribute(s,c),u.uv1=fr.getInterpolation(Pu,ta,na,ia,Au,Cu,Ru,new at)),o&&(lv.fromBufferAttribute(o,a),cv.fromBufferAttribute(o,l),uv.fromBufferAttribute(o,c),u.normal=fr.getInterpolation(Pu,ta,na,ia,lv,cv,uv,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};fr.getNormal(ta,na,ia,d.normal),u.face=d}return u}class Xc extends Qr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vr(c,3)),this.setAttribute("normal",new Vr(u,3)),this.setAttribute("uv",new Vr(d,2));function g(_,m,h,x,v,S,C,A,M,b,E){const y=S/M,U=C/b,O=S/2,I=C/2,G=A/2,j=M+1,q=b+1;let $=0,N=0;const H=new z;for(let L=0;L<q;L++){const te=L*U-I;for(let me=0;me<j;me++){const Ve=me*y-O;H[_]=Ve*x,H[m]=te*v,H[h]=G,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[h]=A>0?1:-1,u.push(H.x,H.y,H.z),d.push(me/M),d.push(1-L/b),$+=1}}for(let L=0;L<b;L++)for(let te=0;te<M;te++){const me=f+te+j*L,Ve=f+te+j*(L+1),W=f+(te+1)+j*(L+1),ee=f+(te+1)+j*L;l.push(me,Ve,ee),l.push(Ve,W,ee),N+=6}a.addGroup(p,N,E),p+=N,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ja(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Fn(n){const e={};for(let t=0;t<n.length;t++){const i=Ja(n[t]);for(const r in i)e[r]=i[r]}return e}function D2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function h1(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const N2={clone:Ja,merge:Fn};var I2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zs extends jc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I2,this.fragmentShader=U2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ja(e.uniforms),this.uniformsGroups=D2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class p1 extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=kr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const os=new z,fv=new at,dv=new at;class _i extends p1{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cm*2*Math.atan(Math.tan(gh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,fv,dv),t.subVectors(dv,fv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ra=-90,sa=1;class O2 extends jn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _i(ra,sa,e,t);r.layers=this.layers,this.add(r);const s=new _i(ra,sa,e,t);s.layers=this.layers,this.add(s);const o=new _i(ra,sa,e,t);o.layers=this.layers,this.add(o);const a=new _i(ra,sa,e,t);a.layers=this.layers,this.add(a);const l=new _i(ra,sa,e,t);l.layers=this.layers,this.add(l);const c=new _i(ra,sa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===kr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$f)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class m1 extends ri{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ka,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class F2 extends Uo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new m1(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ji}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xc(5,5,5),s=new zs({name:"CubemapFromEquirect",uniforms:Ja(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:bs});s.uniforms.tEquirect.value=t;const o=new zr(r,s),a=t.minFilter;return t.minFilter===vo&&(t.minFilter=Ji),new O2(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Oh=new z,k2=new z,z2=new $e;class oo{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Oh.subVectors(i,t).cross(k2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Oh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||z2.getNormalMatrix(e),r=this.coplanarPoint(Oh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Js=new Ad,Du=new z;class D_{constructor(e=new oo,t=new oo,i=new oo,r=new oo,s=new oo,o=new oo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-h).normalize(),i[1].setComponents(l+s,f+c,m+p,S+h).normalize(),i[2].setComponents(l+o,f+u,m+g,S+x).normalize(),i[3].setComponents(l-o,f-u,m-g,S-x).normalize(),i[4].setComponents(l-a,f-d,m-_,S-v).normalize(),t===kr)i[5].setComponents(l+a,f+d,m+_,S+v).normalize();else if(t===$f)i[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Du.x=r.normal.x>0?e.max.x:e.min.x,Du.y=r.normal.y>0?e.max.y:e.min.y,Du.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Du)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _1(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function B2(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),d.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Cd extends Qr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const x=h*f-o;for(let v=0;v<c;v++){const S=v*d-s;g.push(S,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const v=x+c*h,S=x+c*(h+1),C=x+1+c*(h+1),A=x+1+c*h;p.push(v,S,A),p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new Vr(g,3)),this.setAttribute("normal",new Vr(_,3)),this.setAttribute("uv",new Vr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cd(e.width,e.height,e.widthSegments,e.heightSegments)}}var H2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,G2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q2=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Z2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_R=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gR="gl_FragColor = linearToOutputTexel( gl_FragColor );",vR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ER=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PR=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,UR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$R=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,iP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_P=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,TP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,LP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$P=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ob=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ub=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,db=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:H2,alphahash_pars_fragment:V2,alphamap_fragment:G2,alphamap_pars_fragment:W2,alphatest_fragment:j2,alphatest_pars_fragment:X2,aomap_fragment:Y2,aomap_pars_fragment:$2,batching_pars_vertex:q2,batching_vertex:K2,begin_vertex:Z2,beginnormal_vertex:Q2,bsdfs:J2,iridescence_fragment:eR,bumpmap_pars_fragment:tR,clipping_planes_fragment:nR,clipping_planes_pars_fragment:iR,clipping_planes_pars_vertex:rR,clipping_planes_vertex:sR,color_fragment:oR,color_pars_fragment:aR,color_pars_vertex:lR,color_vertex:cR,common:uR,cube_uv_reflection_fragment:fR,defaultnormal_vertex:dR,displacementmap_pars_vertex:hR,displacementmap_vertex:pR,emissivemap_fragment:mR,emissivemap_pars_fragment:_R,colorspace_fragment:gR,colorspace_pars_fragment:vR,envmap_fragment:xR,envmap_common_pars_fragment:yR,envmap_pars_fragment:SR,envmap_pars_vertex:MR,envmap_physical_pars_fragment:IR,envmap_vertex:ER,fog_vertex:TR,fog_pars_vertex:wR,fog_fragment:AR,fog_pars_fragment:CR,gradientmap_pars_fragment:RR,lightmap_fragment:PR,lightmap_pars_fragment:bR,lights_lambert_fragment:LR,lights_lambert_pars_fragment:DR,lights_pars_begin:NR,lights_toon_fragment:UR,lights_toon_pars_fragment:OR,lights_phong_fragment:FR,lights_phong_pars_fragment:kR,lights_physical_fragment:zR,lights_physical_pars_fragment:BR,lights_fragment_begin:HR,lights_fragment_maps:VR,lights_fragment_end:GR,logdepthbuf_fragment:WR,logdepthbuf_pars_fragment:jR,logdepthbuf_pars_vertex:XR,logdepthbuf_vertex:YR,map_fragment:$R,map_pars_fragment:qR,map_particle_fragment:KR,map_particle_pars_fragment:ZR,metalnessmap_fragment:QR,metalnessmap_pars_fragment:JR,morphinstance_vertex:eP,morphcolor_vertex:tP,morphnormal_vertex:nP,morphtarget_pars_vertex:iP,morphtarget_vertex:rP,normal_fragment_begin:sP,normal_fragment_maps:oP,normal_pars_fragment:aP,normal_pars_vertex:lP,normal_vertex:cP,normalmap_pars_fragment:uP,clearcoat_normal_fragment_begin:fP,clearcoat_normal_fragment_maps:dP,clearcoat_pars_fragment:hP,iridescence_pars_fragment:pP,opaque_fragment:mP,packing:_P,premultiplied_alpha_fragment:gP,project_vertex:vP,dithering_fragment:xP,dithering_pars_fragment:yP,roughnessmap_fragment:SP,roughnessmap_pars_fragment:MP,shadowmap_pars_fragment:EP,shadowmap_pars_vertex:TP,shadowmap_vertex:wP,shadowmask_pars_fragment:AP,skinbase_vertex:CP,skinning_pars_vertex:RP,skinning_vertex:PP,skinnormal_vertex:bP,specularmap_fragment:LP,specularmap_pars_fragment:DP,tonemapping_fragment:NP,tonemapping_pars_fragment:IP,transmission_fragment:UP,transmission_pars_fragment:OP,uv_pars_fragment:FP,uv_pars_vertex:kP,uv_vertex:zP,worldpos_vertex:BP,background_vert:HP,background_frag:VP,backgroundCube_vert:GP,backgroundCube_frag:WP,cube_vert:jP,cube_frag:XP,depth_vert:YP,depth_frag:$P,distanceRGBA_vert:qP,distanceRGBA_frag:KP,equirect_vert:ZP,equirect_frag:QP,linedashed_vert:JP,linedashed_frag:eb,meshbasic_vert:tb,meshbasic_frag:nb,meshlambert_vert:ib,meshlambert_frag:rb,meshmatcap_vert:sb,meshmatcap_frag:ob,meshnormal_vert:ab,meshnormal_frag:lb,meshphong_vert:cb,meshphong_frag:ub,meshphysical_vert:fb,meshphysical_frag:db,meshtoon_vert:hb,meshtoon_frag:pb,points_vert:mb,points_frag:_b,shadow_vert:gb,shadow_frag:vb,sprite_vert:xb,sprite_frag:yb},fe={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},cr={basic:{uniforms:Fn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Fn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Fn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Fn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Fn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Fn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Fn([fe.points,fe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Fn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Fn([fe.common,fe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Fn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Fn([fe.sprite,fe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Fn([fe.common,fe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Fn([fe.lights,fe.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};cr.physical={uniforms:Fn([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Nu={r:0,b:0,g:0},eo=new $r,Sb=new Lt;function Mb(n,e,t,i,r,s,o){const a=new mt(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(m,h){let x=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=(h.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Td)?(u===void 0&&(u=new zr(new Xc(1,1,1),new zs({name:"BackgroundCubeMaterial",uniforms:Ja(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),eo.copy(h.backgroundRotation),eo.x*=-1,eo.y*=-1,eo.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(eo)),u.material.toneMapped=yt.getTransfer(v.colorSpace)!==Rt,(d!==v||f!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new zr(new Cd(2,2),new zs({name:"BackgroundMaterial",uniforms:Ja(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=yt.getTransfer(v.colorSpace)!==Rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,h){m.getRGB(Nu,h1(n)),i.buffers.color.setClear(Nu.r,Nu.g,Nu.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Eb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,U,O,I,G){let j=!1;const q=d(I,O,U);s!==q&&(s=q,c(s.object)),j=p(y,I,O,G),j&&g(y,I,O,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,S(y,U,O,I),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function d(y,U,O){const I=O.wireframe===!0;let G=i[y.id];G===void 0&&(G={},i[y.id]=G);let j=G[U.id];j===void 0&&(j={},G[U.id]=j);let q=j[I];return q===void 0&&(q=f(l()),j[I]=q),q}function f(y){const U=[],O=[],I=[];for(let G=0;G<t;G++)U[G]=0,O[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:I,object:y,attributes:{},index:null}}function p(y,U,O,I){const G=s.attributes,j=U.attributes;let q=0;const $=O.getAttributes();for(const N in $)if($[N].location>=0){const L=G[N];let te=j[N];if(te===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),L===void 0||L.attribute!==te||te&&L.data!==te.data)return!0;q++}return s.attributesNum!==q||s.index!==I}function g(y,U,O,I){const G={},j=U.attributes;let q=0;const $=O.getAttributes();for(const N in $)if($[N].location>=0){let L=j[N];L===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(L=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(L=y.instanceColor));const te={};te.attribute=L,L&&L.data&&(te.data=L.data),G[N]=te,q++}s.attributes=G,s.attributesNum=q,s.index=I}function _(){const y=s.newAttributes;for(let U=0,O=y.length;U<O;U++)y[U]=0}function m(y){h(y,0)}function h(y,U){const O=s.newAttributes,I=s.enabledAttributes,G=s.attributeDivisors;O[y]=1,I[y]===0&&(n.enableVertexAttribArray(y),I[y]=1),G[y]!==U&&(n.vertexAttribDivisor(y,U),G[y]=U)}function x(){const y=s.newAttributes,U=s.enabledAttributes;for(let O=0,I=U.length;O<I;O++)U[O]!==y[O]&&(n.disableVertexAttribArray(O),U[O]=0)}function v(y,U,O,I,G,j,q){q===!0?n.vertexAttribIPointer(y,U,O,G,j):n.vertexAttribPointer(y,U,O,I,G,j)}function S(y,U,O,I){_();const G=I.attributes,j=O.getAttributes(),q=U.defaultAttributeValues;for(const $ in j){const N=j[$];if(N.location>=0){let H=G[$];if(H===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(H=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(H=y.instanceColor)),H!==void 0){const L=H.normalized,te=H.itemSize,me=e.get(H);if(me===void 0)continue;const Ve=me.buffer,W=me.type,ee=me.bytesPerElement,le=W===n.INT||W===n.UNSIGNED_INT||H.gpuType===KS;if(H.isInterleavedBufferAttribute){const ie=H.data,Ce=ie.stride,be=H.offset;if(ie.isInstancedInterleavedBuffer){for(let Ge=0;Ge<N.locationSize;Ge++)h(N.location+Ge,ie.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ge=0;Ge<N.locationSize;Ge++)m(N.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let Ge=0;Ge<N.locationSize;Ge++)v(N.location+Ge,te/N.locationSize,W,L,Ce*ee,(be+te/N.locationSize*Ge)*ee,le)}else{if(H.isInstancedBufferAttribute){for(let ie=0;ie<N.locationSize;ie++)h(N.location+ie,H.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ie=0;ie<N.locationSize;ie++)m(N.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let ie=0;ie<N.locationSize;ie++)v(N.location+ie,te/N.locationSize,W,L,te*ee,te/N.locationSize*ie*ee,le)}}else if(q!==void 0){const L=q[$];if(L!==void 0)switch(L.length){case 2:n.vertexAttrib2fv(N.location,L);break;case 3:n.vertexAttrib3fv(N.location,L);break;case 4:n.vertexAttrib4fv(N.location,L);break;default:n.vertexAttrib1fv(N.location,L)}}}}x()}function C(){b();for(const y in i){const U=i[y];for(const O in U){const I=U[O];for(const G in I)u(I[G].object),delete I[G];delete U[O]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const U=i[y.id];for(const O in U){const I=U[O];for(const G in I)u(I[G].object),delete I[G];delete U[O]}delete i[y.id]}function M(y){for(const U in i){const O=i[U];if(O[y.id]===void 0)continue;const I=O[y.id];for(const G in I)u(I[G].object),delete I[G];delete O[y.id]}}function b(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Tb(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{d.multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];t.update(f,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function wb(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),m=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),h=u>0,x=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:m,vertexTextures:h,maxSamples:x}}function Ab(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new oo,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,v=x*4;let S=h.clippingState||null;l.value=S,S=u(g,f,v,p);for(let C=0;C!==v;++C)S[C]=t[C];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(d[v]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Cb(n){let e=new WeakMap;function t(o,a){return a===sm?o.mapping=Ka:a===om&&(o.mapping=Za),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===sm||a===om)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new F2(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Rb extends p1{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ta=4,hv=[.125,.215,.35,.446,.526,.582],ho=20,Fh=new Rb,pv=new mt;let kh=null,zh=0,Bh=0,Hh=!1;const ao=(1+Math.sqrt(5))/2,oa=1/ao,mv=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ao,oa),new z(0,ao,-oa),new z(oa,0,ao),new z(-oa,0,ao),new z(ao,oa,0),new z(-ao,oa,0)];class _v{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){kh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kh,zh,Bh),this._renderer.xr.enabled=Hh,e.scissorTest=!1,Iu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ka||e.mapping===Za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ji,minFilter:Ji,generateMipmaps:!1,type:Wf,format:hr,colorSpace:Xs,depthBuffer:!1},r=gv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pb(s)),this._blurMaterial=bb(s,e,t)}return r}_compileMaterial(e){const t=new zr(this._lodPlanes[0],e);this._renderer.compile(t,Fh)}_sceneToCubeUV(e,t,i,r){const a=new _i(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(pv),u.toneMapping=Ls,u.autoClear=!1;const p=new u1({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),g=new zr(new Xc,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(pv),_=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;Iu(r,x*v,h>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ka||e.mapping===Za;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Iu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Fh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mv[(r-1)%mv.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new zr(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ho-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ho;m>ho&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ho}`);const h=[];let x=0;for(let M=0;M<ho;++M){const b=M/_,E=Math.exp(-b*b/2);h.push(E),M===0?x+=E:M<m&&(x+=2*E)}for(let M=0;M<h.length;M++)h[M]=h[M]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const S=this._sizeLods[r],C=3*S*(r>v-Ta?r-v+Ta:0),A=4*(this._cubeSize-S);Iu(t,C,A,3*S,2*S),l.setRenderTarget(t),l.render(d,Fh)}}function Pb(n){const e=[],t=[],i=[];let r=n;const s=n-Ta+1+hv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ta?l=hv[o-n+Ta-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,h=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let A=0;A<p;A++){const M=A%3*2/3-1,b=A>2?0:-1,E=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];x.set(E,_*g*A),v.set(f,m*g*A);const y=[A,A,A,A,A,A];S.set(y,h*g*A)}const C=new Qr;C.setAttribute("position",new nr(x,_)),C.setAttribute("uv",new nr(v,m)),C.setAttribute("faceIndex",new nr(S,h)),e.push(C),r>Ta&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gv(n,e,t){const i=new Uo(n,e,t);return i.texture.mapping=Td,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Iu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function bb(n,e,t){const i=new Float32Array(ho),r=new z(0,1,0);return new zs({name:"SphericalGaussianBlur",defines:{n:ho,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:N_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function vv(){return new zs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:N_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function xv(){return new zs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:N_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function N_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===sm||l===om,u=l===Ka||l===Za;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new _v(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new _v(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Db(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Nb(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,S=x.length;v<S;v+=3){const C=x[v+0],A=x[v+1],M=x[v+2];f.push(C,A,A,M,M,C)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const C=v+0,A=v+1,M=v+2;f.push(C,A,A,M,M,C)}}else return;const m=new(r1(f)?d1:f1)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Ib(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,s,d*o,p),t.update(f,i,p))}function u(d,f,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<p;_++)this.render(d[_]/o,f[_]);else{g.multiDrawElementsWEBGL(i,f,0,s,d,0,p);let _=0;for(let m=0;m<p;m++)_+=f[m];t.update(_,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ub(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ob(n,e,t){const i=new WeakMap,r=new Pt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const M=new Float32Array(C*A*4*d),b=new o1(M,C,A,d);b.type=_s,b.needsUpdate=!0;const E=S*4;for(let U=0;U<d;U++){const O=h[U],I=x[U],G=v[U],j=C*A*4*U;for(let q=0;q<O.count;q++){const $=q*E;g===!0&&(r.fromBufferAttribute(O,q),M[j+$+0]=r.x,M[j+$+1]=r.y,M[j+$+2]=r.z,M[j+$+3]=0),_===!0&&(r.fromBufferAttribute(I,q),M[j+$+4]=r.x,M[j+$+5]=r.y,M[j+$+6]=r.z,M[j+$+7]=0),m===!0&&(r.fromBufferAttribute(G,q),M[j+$+8]=r.x,M[j+$+9]=r.y,M[j+$+10]=r.z,M[j+$+11]=G.itemSize===4?r.w:1)}}f={count:d,texture:b,size:new at(C,A)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Fb(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class g1 extends ri{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ua,u!==Ua&&u!==Ac)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ua&&(i=Qa),i===void 0&&u===Ac&&(i=Hc),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ki,this.minFilter=l!==void 0?l:ki,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const v1=new ri,x1=new g1(1,1);x1.compareFunction=i1;const y1=new o1,S1=new S2,M1=new m1,yv=[],Sv=[],Mv=new Float32Array(16),Ev=new Float32Array(9),Tv=new Float32Array(4);function fl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=yv[r];if(s===void 0&&(s=new Float32Array(r),yv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rd(n,e){let t=Sv[e];t===void 0&&(t=new Int32Array(e),Sv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function Bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function Hb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function Vb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Tv.set(i),n.uniformMatrix2fv(this.addr,!1,Tv),cn(t,i)}}function Gb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Ev.set(i),n.uniformMatrix3fv(this.addr,!1,Ev),cn(t,i)}}function Wb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Mv.set(i),n.uniformMatrix4fv(this.addr,!1,Mv),cn(t,i)}}function jb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function Yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function $b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function qb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function Zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function Qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function Jb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?x1:v1;t.setTexture2D(e||s,r)}function e3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||S1,r)}function t3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||M1,r)}function n3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||y1,r)}function i3(n){switch(n){case 5126:return kb;case 35664:return zb;case 35665:return Bb;case 35666:return Hb;case 35674:return Vb;case 35675:return Gb;case 35676:return Wb;case 5124:case 35670:return jb;case 35667:case 35671:return Xb;case 35668:case 35672:return Yb;case 35669:case 35673:return $b;case 5125:return qb;case 36294:return Kb;case 36295:return Zb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return e3;case 35680:case 36300:case 36308:case 36293:return t3;case 36289:case 36303:case 36311:case 36292:return n3}}function r3(n,e){n.uniform1fv(this.addr,e)}function s3(n,e){const t=fl(e,this.size,2);n.uniform2fv(this.addr,t)}function o3(n,e){const t=fl(e,this.size,3);n.uniform3fv(this.addr,t)}function a3(n,e){const t=fl(e,this.size,4);n.uniform4fv(this.addr,t)}function l3(n,e){const t=fl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function c3(n,e){const t=fl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function u3(n,e){const t=fl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function f3(n,e){n.uniform1iv(this.addr,e)}function d3(n,e){n.uniform2iv(this.addr,e)}function h3(n,e){n.uniform3iv(this.addr,e)}function p3(n,e){n.uniform4iv(this.addr,e)}function m3(n,e){n.uniform1uiv(this.addr,e)}function _3(n,e){n.uniform2uiv(this.addr,e)}function g3(n,e){n.uniform3uiv(this.addr,e)}function v3(n,e){n.uniform4uiv(this.addr,e)}function x3(n,e,t){const i=this.cache,r=e.length,s=Rd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||v1,s[o])}function y3(n,e,t){const i=this.cache,r=e.length,s=Rd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||S1,s[o])}function S3(n,e,t){const i=this.cache,r=e.length,s=Rd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||M1,s[o])}function M3(n,e,t){const i=this.cache,r=e.length,s=Rd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||y1,s[o])}function E3(n){switch(n){case 5126:return r3;case 35664:return s3;case 35665:return o3;case 35666:return a3;case 35674:return l3;case 35675:return c3;case 35676:return u3;case 5124:case 35670:return f3;case 35667:case 35671:return d3;case 35668:case 35672:return h3;case 35669:case 35673:return p3;case 5125:return m3;case 36294:return _3;case 36295:return g3;case 36296:return v3;case 35678:case 36198:case 36298:case 36306:case 35682:return x3;case 35679:case 36299:case 36307:return y3;case 35680:case 36300:case 36308:case 36293:return S3;case 36289:case 36303:case 36311:case 36292:return M3}}class T3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=i3(t.type)}}class w3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E3(t.type)}}class A3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function wv(n,e){n.seq.push(e),n.map[e.id]=e}function C3(n,e,t){const i=n.name,r=i.length;for(Vh.lastIndex=0;;){const s=Vh.exec(i),o=Vh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){wv(t,c===void 0?new T3(a,n,e):new w3(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new A3(a),wv(t,d)),t=d}}}class cf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);C3(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Av(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const R3=37297;let P3=0;function b3(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function L3(n){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(n);let i;switch(e===t?i="":e===Yf&&t===Xf?i="LinearDisplayP3ToLinearSRGB":e===Xf&&t===Yf&&(i="LinearSRGBToLinearDisplayP3"),n){case Xs:case wd:return[i,"LinearTransferOETF"];case or:case L_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Cv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+b3(n.getShaderSource(e),o)}else return r}function D3(n,e){const t=L3(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function N3(n,e){let t;switch(e){case kC:t="Linear";break;case zC:t="Reinhard";break;case BC:t="OptimizedCineon";break;case HC:t="ACESFilmic";break;case GC:t="AgX";break;case WC:t="Neutral";break;case VC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function I3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Il).join(`
`)}function U3(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function O3(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Il(n){return n!==""}function Rv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F3=/^[ \t]*#include +<([\w\d./]+)>/gm;function um(n){return n.replace(F3,z3)}const k3=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function z3(n,e){let t=Ye[e];if(t===void 0){const i=k3.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return um(t)}const B3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bv(n){return n.replace(B3,H3)}function H3(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lv(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V3(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===XS?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pr&&(e="SHADOWMAP_TYPE_VSM"),e}function G3(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ka:case Za:e="ENVMAP_TYPE_CUBE";break;case Td:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W3(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Za:e="ENVMAP_MODE_REFRACTION";break}return e}function j3(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case YS:e="ENVMAP_BLENDING_MULTIPLY";break;case OC:e="ENVMAP_BLENDING_MIX";break;case FC:e="ENVMAP_BLENDING_ADD";break}return e}function X3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Y3(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=V3(t),c=G3(t),u=W3(t),d=j3(t),f=X3(t),p=I3(t),g=U3(s),_=r.createProgram();let m,h,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Il).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Il).join(`
`),h.length>0&&(h+=`
`)):(m=[Lv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),h=[Lv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ls?"#define TONE_MAPPING":"",t.toneMapping!==Ls?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ls?N3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,D3("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Il).join(`
`)),o=um(o),o=Rv(o,t),o=Pv(o,t),a=um(a),a=Rv(a,t),a=Pv(a,t),o=bv(o),a=bv(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Y0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Y0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=x+m+o,S=x+h+a,C=Av(r,r.VERTEX_SHADER,v),A=Av(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(U){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(_).trim(),I=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(A).trim();let j=!0,q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,A);else{const $=Cv(r,C,"vertex"),N=Cv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+O+`
`+$+`
`+N)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(I===""||G==="")&&(q=!1);q&&(U.diagnostics={runnable:j,programLog:O,vertexShader:{log:I,prefix:m},fragmentShader:{log:G,prefix:h}})}r.deleteShader(C),r.deleteShader(A),b=new cf(r,_),E=O3(r,_)}let b;this.getUniforms=function(){return b===void 0&&M(this),b};let E;this.getAttributes=function(){return E===void 0&&M(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,R3)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P3++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let $3=0;class q3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new K3(e),t.set(e,i)),i}}class K3{constructor(e){this.id=$3++,this.code=e,this.usedTimes=0}}function Z3(n,e,t,i,r,s,o){const a=new l1,l=new q3,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,U,O,I){const G=O.fog,j=I.geometry,q=E.isMeshStandardMaterial?O.environment:null,$=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),N=$&&$.mapping===Td?$.image.height:null,H=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const L=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,te=L!==void 0?L.length:0;let me=0;j.morphAttributes.position!==void 0&&(me=1),j.morphAttributes.normal!==void 0&&(me=2),j.morphAttributes.color!==void 0&&(me=3);let Ve,W,ee,le;if(H){const Mt=cr[H];Ve=Mt.vertexShader,W=Mt.fragmentShader}else Ve=E.vertexShader,W=E.fragmentShader,l.update(E),ee=l.getVertexShaderID(E),le=l.getFragmentShaderID(E);const ie=n.getRenderTarget(),Ce=I.isInstancedMesh===!0,be=I.isBatchedMesh===!0,Ge=!!E.map,k=!!E.matcap,Fe=!!$,ce=!!E.aoMap,We=!!E.lightMap,we=!!E.bumpMap,je=!!E.normalMap,T=!!E.displacementMap,w=!!E.emissiveMap,Y=!!E.metalnessMap,Z=!!E.roughnessMap,K=E.anisotropy>0,J=E.clearcoat>0,Re=E.iridescence>0,re=E.sheen>0,pe=E.transmission>0,Le=K&&!!E.anisotropyMap,ne=J&&!!E.clearcoatMap,de=J&&!!E.clearcoatNormalMap,De=J&&!!E.clearcoatRoughnessMap,_e=Re&&!!E.iridescenceMap,Se=Re&&!!E.iridescenceThicknessMap,Ne=re&&!!E.sheenColorMap,Qe=re&&!!E.sheenRoughnessMap,qe=!!E.specularMap,nt=!!E.specularColorMap,ut=!!E.specularIntensityMap,ye=pe&&!!E.transmissionMap,D=pe&&!!E.thicknessMap,Q=!!E.gradientMap,ae=!!E.alphaMap,ve=E.alphaTest>0,Me=!!E.alphaHash,Je=!!E.extensions;let ct=Ls;E.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ct=n.toneMapping);const ht={shaderID:H,shaderType:E.type,shaderName:E.name,vertexShader:Ve,fragmentShader:W,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:be,instancing:Ce,instancingColor:Ce&&I.instanceColor!==null,instancingMorph:Ce&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Xs,alphaToCoverage:!!E.alphaToCoverage,map:Ge,matcap:k,envMap:Fe,envMapMode:Fe&&$.mapping,envMapCubeUVHeight:N,aoMap:ce,lightMap:We,bumpMap:we,normalMap:je,displacementMap:f&&T,emissiveMap:w,normalMapObjectSpace:je&&E.normalMapType===s2,normalMapTangentSpace:je&&E.normalMapType===r2,metalnessMap:Y,roughnessMap:Z,anisotropy:K,anisotropyMap:Le,clearcoat:J,clearcoatMap:ne,clearcoatNormalMap:de,clearcoatRoughnessMap:De,iridescence:Re,iridescenceMap:_e,iridescenceThicknessMap:Se,sheen:re,sheenColorMap:Ne,sheenRoughnessMap:Qe,specularMap:qe,specularColorMap:nt,specularIntensityMap:ut,transmission:pe,transmissionMap:ye,thicknessMap:D,gradientMap:Q,opaque:E.transparent===!1&&E.blending===Ia&&E.alphaToCoverage===!1,alphaMap:ae,alphaTest:ve,alphaHash:Me,combine:E.combine,mapUv:Ge&&_(E.map.channel),aoMapUv:ce&&_(E.aoMap.channel),lightMapUv:We&&_(E.lightMap.channel),bumpMapUv:we&&_(E.bumpMap.channel),normalMapUv:je&&_(E.normalMap.channel),displacementMapUv:T&&_(E.displacementMap.channel),emissiveMapUv:w&&_(E.emissiveMap.channel),metalnessMapUv:Y&&_(E.metalnessMap.channel),roughnessMapUv:Z&&_(E.roughnessMap.channel),anisotropyMapUv:Le&&_(E.anisotropyMap.channel),clearcoatMapUv:ne&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&_(E.sheenRoughnessMap.channel),specularMapUv:qe&&_(E.specularMap.channel),specularColorMapUv:nt&&_(E.specularColorMap.channel),specularIntensityMapUv:ut&&_(E.specularIntensityMap.channel),transmissionMapUv:ye&&_(E.transmissionMap.channel),thicknessMapUv:D&&_(E.thicknessMap.channel),alphaMapUv:ae&&_(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(je||K),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!j.attributes.uv&&(Ge||ae),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:me,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ge&&E.map.isVideoTexture===!0&&yt.getTransfer(E.map.colorSpace)===Rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ir,flipSided:E.side===ii,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Je&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function h(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)y.push(U),y.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(x(y,E),v(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function x(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function v(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),E.push(a.mask)}function S(E){const y=g[E.type];let U;if(y){const O=cr[y];U=N2.clone(O.uniforms)}else U=E.uniforms;return U}function C(E,y){let U;for(let O=0,I=u.length;O<I;O++){const G=u[O];if(G.cacheKey===y){U=G,++U.usedTimes;break}}return U===void 0&&(U=new Y3(n,y,E,s),u.push(U)),U}function A(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function M(E){l.remove(E)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:M,programs:u,dispose:b}}function Q3(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function J3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||J3),i.length>1&&i.sort(f||Dv),r.length>1&&r.sort(f||Dv)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function eL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Nv,n.set(i,[o])):r>=s.length?(o=new Nv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function tL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new mt};break;case"SpotLight":t={position:new z,direction:new z,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function nL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let iL=0;function rL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sL(n){const e=new tL,t=nL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Lt,o=new Lt;function a(c,u){let d=0,f=0,p=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let g=0,_=0,m=0,h=0,x=0,v=0,S=0,C=0,A=0,M=0,b=0;c.sort(rL);const E=u===!0?Math.PI:1;for(let U=0,O=c.length;U<O;U++){const I=c[U],G=I.color,j=I.intensity,q=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=G.r*j*E,f+=G.g*j*E,p+=G.b*j*E;else if(I.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(I.sh.coefficients[N],j);b++}else if(I.isDirectionalLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const H=I.shadow,L=t.get(I);L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,i.directionalShadow[g]=L,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=I.shadow.matrix,v++}i.directional[g]=N,g++}else if(I.isSpotLight){const N=e.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(G).multiplyScalar(j*E),N.distance=q,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,i.spot[m]=N;const H=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,H.updateMatrices(I),I.castShadow&&M++),i.spotLightMatrix[m]=H.matrix,I.castShadow){const L=t.get(I);L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,i.spotShadow[m]=L,i.spotShadowMap[m]=$,C++}m++}else if(I.isRectAreaLight){const N=e.get(I);N.color.copy(G).multiplyScalar(j),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),i.rectArea[h]=N,h++}else if(I.isPointLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity*E),N.distance=I.distance,N.decay=I.decay,I.castShadow){const H=I.shadow,L=t.get(I);L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,L.shadowCameraNear=H.camera.near,L.shadowCameraFar=H.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=I.shadow.matrix,S++}i.point[_]=N,_++}else if(I.isHemisphereLight){const N=e.get(I);N.skyColor.copy(I.color).multiplyScalar(j*E),N.groundColor.copy(I.groundColor).multiplyScalar(j*E),i.hemi[x]=N,x++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const y=i.hash;(y.directionalLength!==g||y.pointLength!==_||y.spotLength!==m||y.rectAreaLength!==h||y.hemiLength!==x||y.numDirectionalShadows!==v||y.numPointShadows!==S||y.numSpotShadows!==C||y.numSpotMaps!==A||y.numLightProbes!==b)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=h,i.point.length=_,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+A-M,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=b,y.directionalLength=g,y.pointLength=_,y.spotLength=m,y.rectAreaLength=h,y.hemiLength=x,y.numDirectionalShadows=v,y.numPointShadows=S,y.numSpotShadows=C,y.numSpotMaps=A,y.numLightProbes=b,i.version=iL++)}function l(c,u){let d=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const v=c[h];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Iv(n){const e=new sL(n),t=[],i=[];function r(){t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:r,state:{lightsArray:t,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function oL(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Iv(n),e.set(r,[a])):s>=o.length?(a=new Iv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class aL extends jc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lL extends jc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fL(n,e,t){let i=new D_;const r=new at,s=new at,o=new Pt,a=new aL({depthPacking:i2}),l=new lL,c={},u=t.maxTextureSize,d={[ks]:ii,[ii]:ks,[Ir]:Ir},f=new zs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:cL,fragmentShader:uL}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Qr;g.setAttribute("position",new nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zr(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=XS;let h=this.type;this.render=function(A,M,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),y=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),O=n.state;O.setBlending(bs),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const I=h!==Pr&&this.type===Pr,G=h===Pr&&this.type!==Pr;for(let j=0,q=A.length;j<q;j++){const $=A[j],N=$.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const H=N.getFrameExtents();if(r.multiply(H),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,N.mapSize.y=s.y)),N.map===null||I===!0||G===!0){const te=this.type!==Pr?{minFilter:ki,magFilter:ki}:{};N.map!==null&&N.map.dispose(),N.map=new Uo(r.x,r.y,te),N.map.texture.name=$.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const L=N.getViewportCount();for(let te=0;te<L;te++){const me=N.getViewport(te);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),O.viewport(o),N.updateMatrices($,te),i=N.getFrustum(),S(M,b,N.camera,$,this.type)}N.isPointLightShadow!==!0&&this.type===Pr&&x(N,b),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,y,U)};function x(A,M){const b=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Uo(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(M,null,b,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(M,null,b,p,_,null)}function v(A,M,b,E){let y=null;const U=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)y=U;else if(y=b.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const O=y.uuid,I=M.uuid;let G=c[O];G===void 0&&(G={},c[O]=G);let j=G[I];j===void 0&&(j=y.clone(),G[I]=j,M.addEventListener("dispose",C)),y=j}if(y.visible=M.visible,y.wireframe=M.wireframe,E===Pr?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:d[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=n.properties.get(y);O.light=b}return y}function S(A,M,b,E,y){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Pr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const I=e.update(A),G=A.material;if(Array.isArray(G)){const j=I.groups;for(let q=0,$=j.length;q<$;q++){const N=j[q],H=G[N.materialIndex];if(H&&H.visible){const L=v(A,H,E,y);A.onBeforeShadow(n,A,M,b,I,L,N),n.renderBufferDirect(b,null,I,L,A,N),A.onAfterShadow(n,A,M,b,I,L,N)}}}else if(G.visible){const j=v(A,G,E,y);A.onBeforeShadow(n,A,M,b,I,j,null),n.renderBufferDirect(b,null,I,j,A,null),A.onAfterShadow(n,A,M,b,I,j,null)}}const O=A.children;for(let I=0,G=O.length;I<G;I++)S(O[I],M,b,E,y)}function C(A){A.target.removeEventListener("dispose",C);for(const b in c){const E=c[b],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function dL(n){function e(){let D=!1;const Q=new Pt;let ae=null;const ve=new Pt(0,0,0,0);return{setMask:function(Me){ae!==Me&&!D&&(n.colorMask(Me,Me,Me,Me),ae=Me)},setLocked:function(Me){D=Me},setClear:function(Me,Je,ct,ht,Mt){Mt===!0&&(Me*=ht,Je*=ht,ct*=ht),Q.set(Me,Je,ct,ht),ve.equals(Q)===!1&&(n.clearColor(Me,Je,ct,ht),ve.copy(Q))},reset:function(){D=!1,ae=null,ve.set(-1,0,0,0)}}}function t(){let D=!1,Q=null,ae=null,ve=null;return{setTest:function(Me){Me?le(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(Me){Q!==Me&&!D&&(n.depthMask(Me),Q=Me)},setFunc:function(Me){if(ae!==Me){switch(Me){case PC:n.depthFunc(n.NEVER);break;case bC:n.depthFunc(n.ALWAYS);break;case LC:n.depthFunc(n.LESS);break;case Gf:n.depthFunc(n.LEQUAL);break;case DC:n.depthFunc(n.EQUAL);break;case NC:n.depthFunc(n.GEQUAL);break;case IC:n.depthFunc(n.GREATER);break;case UC:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Me}},setLocked:function(Me){D=Me},setClear:function(Me){ve!==Me&&(n.clearDepth(Me),ve=Me)},reset:function(){D=!1,Q=null,ae=null,ve=null}}}function i(){let D=!1,Q=null,ae=null,ve=null,Me=null,Je=null,ct=null,ht=null,Mt=null;return{setTest:function(ft){D||(ft?le(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(ft){Q!==ft&&!D&&(n.stencilMask(ft),Q=ft)},setFunc:function(ft,Ue,Te){(ae!==ft||ve!==Ue||Me!==Te)&&(n.stencilFunc(ft,Ue,Te),ae=ft,ve=Ue,Me=Te)},setOp:function(ft,Ue,Te){(Je!==ft||ct!==Ue||ht!==Te)&&(n.stencilOp(ft,Ue,Te),Je=ft,ct=Ue,ht=Te)},setLocked:function(ft){D=ft},setClear:function(ft){Mt!==ft&&(n.clearStencil(ft),Mt=ft)},reset:function(){D=!1,Q=null,ae=null,ve=null,Me=null,Je=null,ct=null,ht=null,Mt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,g=!1,_=null,m=null,h=null,x=null,v=null,S=null,C=null,A=new mt(0,0,0),M=0,b=!1,E=null,y=null,U=null,O=null,I=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,q=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec($)[1]),j=q>=1):$.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=q>=2);let N=null,H={};const L=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),me=new Pt().fromArray(L),Ve=new Pt().fromArray(te);function W(D,Q,ae,ve){const Me=new Uint8Array(4),Je=n.createTexture();n.bindTexture(D,Je),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ct=0;ct<ae;ct++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(Q+ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return Je}const ee={};ee[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(n.DEPTH_TEST),s.setFunc(Gf),we(!1),je(_0),le(n.CULL_FACE),ce(bs);function le(D){c[D]!==!0&&(n.enable(D),c[D]=!0)}function ie(D){c[D]!==!1&&(n.disable(D),c[D]=!1)}function Ce(D,Q){return u[D]!==Q?(n.bindFramebuffer(D,Q),u[D]=Q,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Q),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function be(D,Q){let ae=f,ve=!1;if(D){ae=d.get(Q),ae===void 0&&(ae=[],d.set(Q,ae));const Me=D.textures;if(ae.length!==Me.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Je=0,ct=Me.length;Je<ct;Je++)ae[Je]=n.COLOR_ATTACHMENT0+Je;ae.length=Me.length,ve=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,ve=!0);ve&&n.drawBuffers(ae)}function Ge(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const k={[fo]:n.FUNC_ADD,[dC]:n.FUNC_SUBTRACT,[hC]:n.FUNC_REVERSE_SUBTRACT};k[pC]=n.MIN,k[mC]=n.MAX;const Fe={[_C]:n.ZERO,[gC]:n.ONE,[vC]:n.SRC_COLOR,[im]:n.SRC_ALPHA,[TC]:n.SRC_ALPHA_SATURATE,[MC]:n.DST_COLOR,[yC]:n.DST_ALPHA,[xC]:n.ONE_MINUS_SRC_COLOR,[rm]:n.ONE_MINUS_SRC_ALPHA,[EC]:n.ONE_MINUS_DST_COLOR,[SC]:n.ONE_MINUS_DST_ALPHA,[wC]:n.CONSTANT_COLOR,[AC]:n.ONE_MINUS_CONSTANT_COLOR,[CC]:n.CONSTANT_ALPHA,[RC]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(D,Q,ae,ve,Me,Je,ct,ht,Mt,ft){if(D===bs){g===!0&&(ie(n.BLEND),g=!1);return}if(g===!1&&(le(n.BLEND),g=!0),D!==fC){if(D!==_||ft!==b){if((m!==fo||v!==fo)&&(n.blendEquation(n.FUNC_ADD),m=fo,v=fo),ft)switch(D){case Ia:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case g0:n.blendFunc(n.ONE,n.ONE);break;case v0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case x0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ia:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case g0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case v0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case x0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}h=null,x=null,S=null,C=null,A.set(0,0,0),M=0,_=D,b=ft}return}Me=Me||Q,Je=Je||ae,ct=ct||ve,(Q!==m||Me!==v)&&(n.blendEquationSeparate(k[Q],k[Me]),m=Q,v=Me),(ae!==h||ve!==x||Je!==S||ct!==C)&&(n.blendFuncSeparate(Fe[ae],Fe[ve],Fe[Je],Fe[ct]),h=ae,x=ve,S=Je,C=ct),(ht.equals(A)===!1||Mt!==M)&&(n.blendColor(ht.r,ht.g,ht.b,Mt),A.copy(ht),M=Mt),_=D,b=!1}function We(D,Q){D.side===Ir?ie(n.CULL_FACE):le(n.CULL_FACE);let ae=D.side===ii;Q&&(ae=!ae),we(ae),D.blending===Ia&&D.transparent===!1?ce(bs):ce(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const ve=D.stencilWrite;o.setTest(ve),ve&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),w(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(D){E!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),E=D)}function je(D){D!==lC?(le(n.CULL_FACE),D!==y&&(D===_0?n.cullFace(n.BACK):D===cC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),y=D}function T(D){D!==U&&(j&&n.lineWidth(D),U=D)}function w(D,Q,ae){D?(le(n.POLYGON_OFFSET_FILL),(O!==Q||I!==ae)&&(n.polygonOffset(Q,ae),O=Q,I=ae)):ie(n.POLYGON_OFFSET_FILL)}function Y(D){D?le(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function Z(D){D===void 0&&(D=n.TEXTURE0+G-1),N!==D&&(n.activeTexture(D),N=D)}function K(D,Q,ae){ae===void 0&&(N===null?ae=n.TEXTURE0+G-1:ae=N);let ve=H[ae];ve===void 0&&(ve={type:void 0,texture:void 0},H[ae]=ve),(ve.type!==D||ve.texture!==Q)&&(N!==ae&&(n.activeTexture(ae),N=ae),n.bindTexture(D,Q||ee[D]),ve.type=D,ve.texture=Q)}function J(){const D=H[N];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(D){me.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),me.copy(D))}function qe(D){Ve.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Ve.copy(D))}function nt(D,Q){let ae=l.get(Q);ae===void 0&&(ae=new WeakMap,l.set(Q,ae));let ve=ae.get(D);ve===void 0&&(ve=n.getUniformBlockIndex(Q,D.name),ae.set(D,ve))}function ut(D,Q){const ve=l.get(Q).get(D);a.get(Q)!==ve&&(n.uniformBlockBinding(Q,ve,D.__bindingPointIndex),a.set(Q,ve))}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},N=null,H={},u={},d=new WeakMap,f=[],p=null,g=!1,_=null,m=null,h=null,x=null,v=null,S=null,C=null,A=new mt(0,0,0),M=0,b=!1,E=null,y=null,U=null,O=null,I=null,me.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:ie,bindFramebuffer:Ce,drawBuffers:be,useProgram:Ge,setBlending:ce,setMaterial:We,setFlipSided:we,setCullFace:je,setLineWidth:T,setPolygonOffset:w,setScissorTest:Y,activeTexture:Z,bindTexture:K,unbindTexture:J,compressedTexImage2D:Re,compressedTexImage3D:re,texImage2D:Se,texImage3D:Ne,updateUBOMapping:nt,uniformBlockBinding:ut,texStorage2D:De,texStorage3D:_e,texSubImage2D:pe,texSubImage3D:Le,compressedTexSubImage2D:ne,compressedTexSubImage3D:de,scissor:Qe,viewport:qe,reset:ye}}function hL(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,w){return p?new OffscreenCanvas(T,w):qf("canvas")}function _(T,w,Y){let Z=1;const K=je(T);if((K.width>Y||K.height>Y)&&(Z=Y/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(Z*K.width),Re=Math.floor(Z*K.height);d===void 0&&(d=g(J,Re));const re=w?g(J,Re):d;return re.width=J,re.height=Re,re.getContext("2d").drawImage(T,0,0,J,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+J+"x"+Re+")."),re}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==ki&&T.minFilter!==Ji}function h(T){n.generateMipmap(T)}function x(T,w,Y,Z,K=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=w;if(w===n.RED&&(Y===n.FLOAT&&(J=n.R32F),Y===n.HALF_FLOAT&&(J=n.R16F),Y===n.UNSIGNED_BYTE&&(J=n.R8)),w===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(J=n.R8UI),Y===n.UNSIGNED_SHORT&&(J=n.R16UI),Y===n.UNSIGNED_INT&&(J=n.R32UI),Y===n.BYTE&&(J=n.R8I),Y===n.SHORT&&(J=n.R16I),Y===n.INT&&(J=n.R32I)),w===n.RG&&(Y===n.FLOAT&&(J=n.RG32F),Y===n.HALF_FLOAT&&(J=n.RG16F),Y===n.UNSIGNED_BYTE&&(J=n.RG8)),w===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(J=n.RG8UI),Y===n.UNSIGNED_SHORT&&(J=n.RG16UI),Y===n.UNSIGNED_INT&&(J=n.RG32UI),Y===n.BYTE&&(J=n.RG8I),Y===n.SHORT&&(J=n.RG16I),Y===n.INT&&(J=n.RG32I)),w===n.RGB&&Y===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),w===n.RGBA){const Re=K?jf:yt.getTransfer(Z);Y===n.FLOAT&&(J=n.RGBA32F),Y===n.HALF_FLOAT&&(J=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(J=Re===Rt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(T,w){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ki&&T.minFilter!==Ji?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function S(T){const w=T.target;w.removeEventListener("dispose",S),A(w),w.isVideoTexture&&u.delete(w)}function C(T){const w=T.target;w.removeEventListener("dispose",C),b(w)}function A(T){const w=i.get(T);if(w.__webglInit===void 0)return;const Y=T.source,Z=f.get(Y);if(Z){const K=Z[w.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(T),Object.keys(Z).length===0&&f.delete(Y)}i.remove(T)}function M(T){const w=i.get(T);n.deleteTexture(w.__webglTexture);const Y=T.source,Z=f.get(Y);delete Z[w.__cacheKey],o.memory.textures--}function b(T){const w=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let K=0;K<w.__webglFramebuffer[Z].length;K++)n.deleteFramebuffer(w.__webglFramebuffer[Z][K]);else n.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)n.deleteFramebuffer(w.__webglFramebuffer[Z]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=T.textures;for(let Z=0,K=Y.length;Z<K;Z++){const J=i.get(Y[Z]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(Y[Z])}i.remove(T)}let E=0;function y(){E=0}function U(){const T=E;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),E+=1,T}function O(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.colorSpace),w.join()}function I(T,w){const Y=i.get(T);if(T.isVideoTexture&&We(T),T.isRenderTargetTexture===!1&&T.version>0&&Y.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(Y,T,w);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+w)}function G(T,w){const Y=i.get(T);if(T.version>0&&Y.__version!==T.version){me(Y,T,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+w)}function j(T,w){const Y=i.get(T);if(T.version>0&&Y.__version!==T.version){me(Y,T,w);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+w)}function q(T,w){const Y=i.get(T);if(T.version>0&&Y.__version!==T.version){Ve(Y,T,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+w)}const $={[am]:n.REPEAT,[go]:n.CLAMP_TO_EDGE,[lm]:n.MIRRORED_REPEAT},N={[ki]:n.NEAREST,[jC]:n.NEAREST_MIPMAP_NEAREST,[hu]:n.NEAREST_MIPMAP_LINEAR,[Ji]:n.LINEAR,[fh]:n.LINEAR_MIPMAP_NEAREST,[vo]:n.LINEAR_MIPMAP_LINEAR},H={[o2]:n.NEVER,[d2]:n.ALWAYS,[a2]:n.LESS,[i1]:n.LEQUAL,[l2]:n.EQUAL,[f2]:n.GEQUAL,[c2]:n.GREATER,[u2]:n.NOTEQUAL};function L(T,w){if(w.type===_s&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ji||w.magFilter===fh||w.magFilter===hu||w.magFilter===vo||w.minFilter===Ji||w.minFilter===fh||w.minFilter===hu||w.minFilter===vo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,$[w.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,$[w.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,$[w.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,N[w.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,N[w.minFilter]),w.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,H[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ki||w.minFilter!==hu&&w.minFilter!==vo||w.type===_s&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function te(T,w){let Y=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",S));const Z=w.source;let K=f.get(Z);K===void 0&&(K={},f.set(Z,K));const J=O(w);if(J!==T.__cacheKey){K[J]===void 0&&(K[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),K[J].usedTimes++;const Re=K[T.__cacheKey];Re!==void 0&&(K[T.__cacheKey].usedTimes--,Re.usedTimes===0&&M(w)),T.__cacheKey=J,T.__webglTexture=K[J].texture}return Y}function me(T,w,Y){let Z=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=n.TEXTURE_3D);const K=te(T,w),J=w.source;t.bindTexture(Z,T.__webglTexture,n.TEXTURE0+Y);const Re=i.get(J);if(J.version!==Re.__version||K===!0){t.activeTexture(n.TEXTURE0+Y);const re=yt.getPrimaries(yt.workingColorSpace),pe=w.colorSpace===hs?null:yt.getPrimaries(w.colorSpace),Le=w.colorSpace===hs||re===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ne=_(w.image,!1,r.maxTextureSize);ne=we(w,ne);const de=s.convert(w.format,w.colorSpace),De=s.convert(w.type);let _e=x(w.internalFormat,de,De,w.colorSpace,w.isVideoTexture);L(Z,w);let Se;const Ne=w.mipmaps,Qe=w.isVideoTexture!==!0&&_e!==n1,qe=Re.__version===void 0||K===!0,nt=J.dataReady,ut=v(w,ne);if(w.isDepthTexture)_e=n.DEPTH_COMPONENT16,w.type===_s?_e=n.DEPTH_COMPONENT32F:w.type===Qa?_e=n.DEPTH_COMPONENT24:w.type===Hc&&(_e=n.DEPTH24_STENCIL8),qe&&(Qe?t.texStorage2D(n.TEXTURE_2D,1,_e,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,_e,ne.width,ne.height,0,de,De,null));else if(w.isDataTexture)if(Ne.length>0){Qe&&qe&&t.texStorage2D(n.TEXTURE_2D,ut,_e,Ne[0].width,Ne[0].height);for(let ye=0,D=Ne.length;ye<D;ye++)Se=Ne[ye],Qe?nt&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Se.width,Se.height,de,De,Se.data):t.texImage2D(n.TEXTURE_2D,ye,_e,Se.width,Se.height,0,de,De,Se.data);w.generateMipmaps=!1}else Qe?(qe&&t.texStorage2D(n.TEXTURE_2D,ut,_e,ne.width,ne.height),nt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,de,De,ne.data)):t.texImage2D(n.TEXTURE_2D,0,_e,ne.width,ne.height,0,de,De,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Qe&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ut,_e,Ne[0].width,Ne[0].height,ne.depth);for(let ye=0,D=Ne.length;ye<D;ye++)Se=Ne[ye],w.format!==hr?de!==null?Qe?nt&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Se.width,Se.height,ne.depth,de,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,_e,Se.width,Se.height,ne.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?nt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Se.width,Se.height,ne.depth,de,De,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,_e,Se.width,Se.height,ne.depth,0,de,De,Se.data)}else{Qe&&qe&&t.texStorage2D(n.TEXTURE_2D,ut,_e,Ne[0].width,Ne[0].height);for(let ye=0,D=Ne.length;ye<D;ye++)Se=Ne[ye],w.format!==hr?de!==null?Qe?nt&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,Se.width,Se.height,de,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,_e,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?nt&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Se.width,Se.height,de,De,Se.data):t.texImage2D(n.TEXTURE_2D,ye,_e,Se.width,Se.height,0,de,De,Se.data)}else if(w.isDataArrayTexture)Qe?(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ut,_e,ne.width,ne.height,ne.depth),nt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,de,De,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,ne.width,ne.height,ne.depth,0,de,De,ne.data);else if(w.isData3DTexture)Qe?(qe&&t.texStorage3D(n.TEXTURE_3D,ut,_e,ne.width,ne.height,ne.depth),nt&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,de,De,ne.data)):t.texImage3D(n.TEXTURE_3D,0,_e,ne.width,ne.height,ne.depth,0,de,De,ne.data);else if(w.isFramebufferTexture){if(qe)if(Qe)t.texStorage2D(n.TEXTURE_2D,ut,_e,ne.width,ne.height);else{let ye=ne.width,D=ne.height;for(let Q=0;Q<ut;Q++)t.texImage2D(n.TEXTURE_2D,Q,_e,ye,D,0,de,De,null),ye>>=1,D>>=1}}else if(Ne.length>0){if(Qe&&qe){const ye=je(Ne[0]);t.texStorage2D(n.TEXTURE_2D,ut,_e,ye.width,ye.height)}for(let ye=0,D=Ne.length;ye<D;ye++)Se=Ne[ye],Qe?nt&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,de,De,Se):t.texImage2D(n.TEXTURE_2D,ye,_e,de,De,Se);w.generateMipmaps=!1}else if(Qe){if(qe){const ye=je(ne);t.texStorage2D(n.TEXTURE_2D,ut,_e,ye.width,ye.height)}nt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,De,ne)}else t.texImage2D(n.TEXTURE_2D,0,_e,de,De,ne);m(w)&&h(Z),Re.__version=J.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function Ve(T,w,Y){if(w.image.length!==6)return;const Z=te(T,w),K=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+Y);const J=i.get(K);if(K.version!==J.__version||Z===!0){t.activeTexture(n.TEXTURE0+Y);const Re=yt.getPrimaries(yt.workingColorSpace),re=w.colorSpace===hs?null:yt.getPrimaries(w.colorSpace),pe=w.colorSpace===hs||Re===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Le=w.isCompressedTexture||w.image[0].isCompressedTexture,ne=w.image[0]&&w.image[0].isDataTexture,de=[];for(let D=0;D<6;D++)!Le&&!ne?de[D]=_(w.image[D],!0,r.maxCubemapSize):de[D]=ne?w.image[D].image:w.image[D],de[D]=we(w,de[D]);const De=de[0],_e=s.convert(w.format,w.colorSpace),Se=s.convert(w.type),Ne=x(w.internalFormat,_e,Se,w.colorSpace),Qe=w.isVideoTexture!==!0,qe=J.__version===void 0||Z===!0,nt=K.dataReady;let ut=v(w,De);L(n.TEXTURE_CUBE_MAP,w);let ye;if(Le){Qe&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Ne,De.width,De.height);for(let D=0;D<6;D++){ye=de[D].mipmaps;for(let Q=0;Q<ye.length;Q++){const ae=ye[Q];w.format!==hr?_e!==null?Qe?nt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Q,0,0,ae.width,ae.height,_e,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Q,Ne,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Q,0,0,ae.width,ae.height,_e,Se,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Q,Ne,ae.width,ae.height,0,_e,Se,ae.data)}}}else{if(ye=w.mipmaps,Qe&&qe){ye.length>0&&ut++;const D=je(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Ne,D.width,D.height)}for(let D=0;D<6;D++)if(ne){Qe?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,de[D].width,de[D].height,_e,Se,de[D].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Ne,de[D].width,de[D].height,0,_e,Se,de[D].data);for(let Q=0;Q<ye.length;Q++){const ve=ye[Q].image[D].image;Qe?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Q+1,0,0,ve.width,ve.height,_e,Se,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Q+1,Ne,ve.width,ve.height,0,_e,Se,ve.data)}}else{Qe?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,_e,Se,de[D]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Ne,_e,Se,de[D]);for(let Q=0;Q<ye.length;Q++){const ae=ye[Q];Qe?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Q+1,0,0,_e,Se,ae.image[D]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Q+1,Ne,_e,Se,ae.image[D])}}}m(w)&&h(n.TEXTURE_CUBE_MAP),J.__version=K.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function W(T,w,Y,Z,K,J){const Re=s.convert(Y.format,Y.colorSpace),re=s.convert(Y.type),pe=x(Y.internalFormat,Re,re,Y.colorSpace);if(!i.get(w).__hasExternalTextures){const ne=Math.max(1,w.width>>J),de=Math.max(1,w.height>>J);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,J,pe,ne,de,w.depth,0,Re,re,null):t.texImage2D(K,J,pe,ne,de,0,Re,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ce(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,K,i.get(Y).__webglTexture,0,Fe(w)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,K,i.get(Y).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(T,w,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,T),w.depthBuffer&&!w.stencilBuffer){let Z=n.DEPTH_COMPONENT24;if(Y||ce(w)){const K=w.depthTexture;K&&K.isDepthTexture&&(K.type===_s?Z=n.DEPTH_COMPONENT32F:K.type===Qa&&(Z=n.DEPTH_COMPONENT24));const J=Fe(w);ce(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,Z,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,J,Z,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,Z,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(w.depthBuffer&&w.stencilBuffer){const Z=Fe(w);Y&&ce(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,w.width,w.height):ce(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const Z=w.textures;for(let K=0;K<Z.length;K++){const J=Z[K],Re=s.convert(J.format,J.colorSpace),re=s.convert(J.type),pe=x(J.internalFormat,Re,re,J.colorSpace),Le=Fe(w);Y&&ce(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,pe,w.width,w.height):ce(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,pe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,pe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),I(w.depthTexture,0);const Z=i.get(w.depthTexture).__webglTexture,K=Fe(w);if(w.depthTexture.format===Ua)ce(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(w.depthTexture.format===Ac)ce(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ie(T){const w=i.get(T),Y=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");le(w.__webglFramebuffer,T)}else if(Y){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]=n.createRenderbuffer(),ee(w.__webglDepthbuffer[Z],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),ee(w.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(T,w,Y){const Z=i.get(T);w!==void 0&&W(Z.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&ie(T)}function be(T){const w=T.texture,Y=i.get(T),Z=i.get(w);T.addEventListener("dispose",C);const K=T.textures,J=T.isWebGLCubeRenderTarget===!0,Re=K.length>1;if(Re||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=w.version,o.memory.textures++),J){Y.__webglFramebuffer=[];for(let re=0;re<6;re++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[re]=[];for(let pe=0;pe<w.mipmaps.length;pe++)Y.__webglFramebuffer[re][pe]=n.createFramebuffer()}else Y.__webglFramebuffer[re]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let re=0;re<w.mipmaps.length;re++)Y.__webglFramebuffer[re]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Re)for(let re=0,pe=K.length;re<pe;re++){const Le=i.get(K[re]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&ce(T)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const pe=K[re];Y.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[re]);const Le=s.convert(pe.format,pe.colorSpace),ne=s.convert(pe.type),de=x(pe.internalFormat,Le,ne,pe.colorSpace,T.isXRRenderTarget===!0),De=Fe(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,de,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,Y.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(Y.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),L(n.TEXTURE_CUBE_MAP,w);for(let re=0;re<6;re++)if(w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)W(Y.__webglFramebuffer[re][pe],T,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe);else W(Y.__webglFramebuffer[re],T,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(w)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let re=0,pe=K.length;re<pe;re++){const Le=K[re],ne=i.get(Le);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),L(n.TEXTURE_2D,Le),W(Y.__webglFramebuffer,T,Le,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),m(Le)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,Z.__webglTexture),L(re,w),w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)W(Y.__webglFramebuffer[pe],T,w,n.COLOR_ATTACHMENT0,re,pe);else W(Y.__webglFramebuffer,T,w,n.COLOR_ATTACHMENT0,re,0);m(w)&&h(re),t.unbindTexture()}T.depthBuffer&&ie(T)}function Ge(T){const w=T.textures;for(let Y=0,Z=w.length;Y<Z;Y++){const K=w[Y];if(m(K)){const J=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Re=i.get(K).__webglTexture;t.bindTexture(J,Re),h(J),t.unbindTexture()}}}function k(T){if(T.samples>0&&ce(T)===!1){const w=T.textures,Y=T.width,Z=T.height;let K=n.COLOR_BUFFER_BIT;const J=[],Re=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(T),pe=w.length>1;if(pe)for(let Le=0;Le<w.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Le=0;Le<w.length;Le++){J.push(n.COLOR_ATTACHMENT0+Le),T.depthBuffer&&J.push(Re);const ne=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(ne===!1&&(T.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&re.__isTransmissionRenderTarget!==!0&&(K|=n.STENCIL_BUFFER_BIT)),pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[Le]),ne===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Re]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Re])),pe){const de=i.get(w[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,Y,Z,0,0,Y,Z,K,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Le=0;Le<w.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,re.__webglColorRenderbuffer[Le]);const ne=i.get(w[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function Fe(T){return Math.min(r.maxSamples,T.samples)}function ce(T){const w=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function We(T){const w=o.render.frame;u.get(T)!==w&&(u.set(T,w),T.update())}function we(T,w){const Y=T.colorSpace,Z=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||Y!==Xs&&Y!==hs&&(yt.getTransfer(Y)===Rt?(Z!==hr||K!==Ds)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}function je(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=y,this.setTexture2D=I,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Ce,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=W,this.useMultisampledRTT=ce}function pL(n,e){function t(i,r=hs){let s;const o=yt.getTransfer(r);if(i===Ds)return n.UNSIGNED_BYTE;if(i===ZS)return n.UNSIGNED_SHORT_4_4_4_4;if(i===QS)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$C)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===XC)return n.BYTE;if(i===YC)return n.SHORT;if(i===qS)return n.UNSIGNED_SHORT;if(i===KS)return n.INT;if(i===Qa)return n.UNSIGNED_INT;if(i===_s)return n.FLOAT;if(i===Wf)return n.HALF_FLOAT;if(i===qC)return n.ALPHA;if(i===KC)return n.RGB;if(i===hr)return n.RGBA;if(i===ZC)return n.LUMINANCE;if(i===QC)return n.LUMINANCE_ALPHA;if(i===Ua)return n.DEPTH_COMPONENT;if(i===Ac)return n.DEPTH_STENCIL;if(i===JC)return n.RED;if(i===JS)return n.RED_INTEGER;if(i===e2)return n.RG;if(i===e1)return n.RG_INTEGER;if(i===t1)return n.RGBA_INTEGER;if(i===dh||i===hh||i===ph||i===mh)if(o===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===dh)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ph)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===dh)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hh)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ph)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mh)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===y0||i===S0||i===M0||i===E0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===y0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===S0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===M0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===E0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===n1)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===T0||i===w0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===T0)return o===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===w0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===A0||i===C0||i===R0||i===P0||i===b0||i===L0||i===D0||i===N0||i===I0||i===U0||i===O0||i===F0||i===k0||i===z0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===A0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===C0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===R0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===P0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===b0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===L0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===D0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===N0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===I0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===U0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===O0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===F0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===k0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===z0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_h||i===B0||i===H0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_h)return o===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===B0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===H0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===t2||i===V0||i===G0||i===W0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_h)return s.COMPRESSED_RED_RGTC1_EXT;if(i===V0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===G0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===W0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hc?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class mL extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Uu extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _L={type:"move"};class Gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_L)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Uu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const gL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ri,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new zs({vertexShader:gL,fragmentShader:vL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new zr(new Cd(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class yL extends ul{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const _=new xL,m=t.getContextAttributes();let h=null,x=null;const v=[],S=[],C=new at;let A=null;const M=new _i;M.layers.enable(1),M.viewport=new Pt;const b=new _i;b.layers.enable(2),b.viewport=new Pt;const E=[M,b],y=new mL;y.layers.enable(1),y.layers.enable(2);let U=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=v[W];return ee===void 0&&(ee=new Gh,v[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=v[W];return ee===void 0&&(ee=new Gh,v[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=v[W];return ee===void 0&&(ee=new Gh,v[W]=ee),ee.getHandSpace()};function I(W){const ee=S.indexOf(W.inputSource);if(ee===-1)return;const le=v[ee];le!==void 0&&(le.update(W.inputSource,W.frame,c||o),le.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",j);for(let W=0;W<v.length;W++){const ee=S[W];ee!==null&&(S[W]=null,v[W].disconnect(ee))}U=null,O=null,_.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,x=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",G),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Uo(p.framebufferWidth,p.framebufferHeight,{format:hr,type:Ds,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,le=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Ac:Ua,le=m.stencil?Hc:Qa);const Ce={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Uo(f.textureWidth,f.textureHeight,{format:hr,type:Ds,depthTexture:new g1(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const be=e.properties.get(x);be.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(W){for(let ee=0;ee<W.removed.length;ee++){const le=W.removed[ee],ie=S.indexOf(le);ie>=0&&(S[ie]=null,v[ie].disconnect(le))}for(let ee=0;ee<W.added.length;ee++){const le=W.added[ee];let ie=S.indexOf(le);if(ie===-1){for(let be=0;be<v.length;be++)if(be>=S.length){S.push(le),ie=be;break}else if(S[be]===null){S[be]=le,ie=be;break}if(ie===-1)break}const Ce=v[ie];Ce&&Ce.connect(le)}}const q=new z,$=new z;function N(W,ee,le){q.setFromMatrixPosition(ee.matrixWorld),$.setFromMatrixPosition(le.matrixWorld);const ie=q.distanceTo($),Ce=ee.projectionMatrix.elements,be=le.projectionMatrix.elements,Ge=Ce[14]/(Ce[10]-1),k=Ce[14]/(Ce[10]+1),Fe=(Ce[9]+1)/Ce[5],ce=(Ce[9]-1)/Ce[5],We=(Ce[8]-1)/Ce[0],we=(be[8]+1)/be[0],je=Ge*We,T=Ge*we,w=ie/(-We+we),Y=w*-We;ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Y),W.translateZ(w),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Z=Ge+w,K=k+w,J=je-Y,Re=T+(ie-Y),re=Fe*k/K*Z,pe=ce*k/K*Z;W.projectionMatrix.makePerspective(J,Re,re,pe,Z,K),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function H(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),y.near=b.near=M.near=W.near,y.far=b.far=M.far=W.far,(U!==y.near||O!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),U=y.near,O=y.far,M.near=U,M.far=O,b.near=U,b.far=O,M.updateProjectionMatrix(),b.updateProjectionMatrix(),W.updateProjectionMatrix());const ee=W.parent,le=y.cameras;H(y,ee);for(let ie=0;ie<le.length;ie++)H(le[ie],ee);le.length===2?N(y,M,b):y.projectionMatrix.copy(M.projectionMatrix),L(W,y,ee)};function L(W,ee,le){le===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(le.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=cm*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null};let te=null;function me(W,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let ie=!1;le.length!==y.cameras.length&&(y.cameras.length=0,ie=!0);for(let be=0;be<le.length;be++){const Ge=le[be];let k=null;if(p!==null)k=p.getViewport(Ge);else{const ce=d.getViewSubImage(f,Ge);k=ce.viewport,be===0&&(e.setRenderTargetTextures(x,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(x))}let Fe=E[be];Fe===void 0&&(Fe=new _i,Fe.layers.enable(be),Fe.viewport=new Pt,E[be]=Fe),Fe.matrix.fromArray(Ge.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ge.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(k.x,k.y,k.width,k.height),be===0&&(y.matrix.copy(Fe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ie===!0&&y.cameras.push(Fe)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const be=d.getDepthInformation(le[0]);be&&be.isValid&&be.texture&&_.init(e,be,r.renderState)}}for(let le=0;le<v.length;le++){const ie=S[le],Ce=v[le];ie!==null&&Ce!==void 0&&Ce.update(ie,ee,c||o)}_.render(e,y),te&&te(W,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ve=new _1;Ve.setAnimationLoop(me),this.setAnimationLoop=function(W){te=W},this.dispose=function(){}}}const to=new $r,SL=new Lt;function ML(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,h1(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,v,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,x,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ii&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ii&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h),v=x.envMap,S=x.envMapRotation;if(v&&(m.envMap.value=v,to.copy(S),to.x*=-1,to.y*=-1,to.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(to.y*=-1,to.z*=-1),m.envMapRotation.value.setFromMatrix4(SL.makeRotationFromEuler(to)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const C=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*C,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=v*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ii&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function EL(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function c(x,v){let S=r[x.id];S===void 0&&(g(x),S=u(x),r[x.id]=S,x.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(x,C);const A=e.render.frame;s[x.id]!==A&&(f(x),s[x.id]=A)}function u(x){const v=d();x.__bindingPointIndex=v;const S=n.createBuffer(),C=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],S=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,M=S.length;A<M;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,y=b.length;E<y;E++){const U=b[E];if(p(U,A,E,C)===!0){const O=U.__offset,I=Array.isArray(U.value)?U.value:[U.value];let G=0;for(let j=0;j<I.length;j++){const q=I[j],$=_(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,O+G,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,v,S,C){const A=x.value,M=v+"_"+S;if(C[M]===void 0)return typeof A=="number"||typeof A=="boolean"?C[M]=A:C[M]=A.clone(),!0;{const b=C[M];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return C[M]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function g(x){const v=x.uniforms;let S=0;const C=16;for(let M=0,b=v.length;M<b;M++){const E=Array.isArray(v[M])?v[M]:[v[M]];for(let y=0,U=E.length;y<U;y++){const O=E[y],I=Array.isArray(O.value)?O.value:[O.value];for(let G=0,j=I.length;G<j;G++){const q=I[G],$=_(q),N=S%C;N!==0&&C-N<$.boundary&&(S+=C-N),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=$.storage}}}const A=S%C;return A>0&&(S+=C-A),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class TL{constructor(e={}){const{canvas:t=p2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=or,this._useLegacyLights=!1,this.toneMapping=Ls,this.toneMappingExposure=1;const v=this;let S=!1,C=0,A=0,M=null,b=-1,E=null;const y=new Pt,U=new Pt;let O=null;const I=new mt(0);let G=0,j=t.width,q=t.height,$=1,N=null,H=null;const L=new Pt(0,0,j,q),te=new Pt(0,0,j,q);let me=!1;const Ve=new D_;let W=!1,ee=!1;const le=new Lt,ie=new at,Ce=new z,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return M===null?$:1}let k=i;function Fe(R,F){const V=t.getContext(R,F);return V!==null?V:null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${b_}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",ve,!1),k===null){const F="webgl2";if(k=Fe(F,R),k===null)throw Fe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ce,We,we,je,T,w,Y,Z,K,J,Re,re,pe,Le,ne,de,De,_e,Se,Ne,Qe,qe,nt,ut;function ye(){ce=new Db(k),ce.init(),We=new wb(k,ce,e),qe=new pL(k,ce),we=new dL(k),je=new Ub(k),T=new Q3,w=new hL(k,ce,we,T,We,qe,je),Y=new Cb(v),Z=new Lb(v),K=new B2(k),nt=new Eb(k,K),J=new Nb(k,K,je,nt),Re=new Fb(k,J,K,je),Se=new Ob(k,We,w),de=new Ab(T),re=new Z3(v,Y,Z,ce,We,nt,de),pe=new ML(v,T),Le=new eL,ne=new oL(ce),_e=new Mb(v,Y,Z,we,Re,f,l),De=new fL(v,Re,We),ut=new EL(k,je,We,we),Ne=new Tb(k,ce,je),Qe=new Ib(k,ce,je),je.programs=re.programs,v.capabilities=We,v.extensions=ce,v.properties=T,v.renderLists=Le,v.shadowMap=De,v.state=we,v.info=je}ye();const D=new yL(v,k);this.xr=D,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(j,q,!1))},this.getSize=function(R){return R.set(j,q)},this.setSize=function(R,F,V=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=R,q=F,t.width=Math.floor(R*$),t.height=Math.floor(F*$),V===!0&&(t.style.width=R+"px",t.style.height=F+"px"),this.setViewport(0,0,R,F)},this.getDrawingBufferSize=function(R){return R.set(j*$,q*$).floor()},this.setDrawingBufferSize=function(R,F,V){j=R,q=F,$=V,t.width=Math.floor(R*V),t.height=Math.floor(F*V),this.setViewport(0,0,R,F)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(L)},this.setViewport=function(R,F,V,X){R.isVector4?L.set(R.x,R.y,R.z,R.w):L.set(R,F,V,X),we.viewport(y.copy(L).multiplyScalar($).round())},this.getScissor=function(R){return R.copy(te)},this.setScissor=function(R,F,V,X){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,F,V,X),we.scissor(U.copy(te).multiplyScalar($).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(R){we.setScissorTest(me=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){H=R},this.getClearColor=function(R){return R.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(R=!0,F=!0,V=!0){let X=0;if(R){let B=!1;if(M!==null){const oe=M.texture.format;B=oe===t1||oe===e1||oe===JS}if(B){const oe=M.texture.type,he=oe===Ds||oe===Qa||oe===qS||oe===Hc||oe===ZS||oe===QS,Pe=_e.getClearColor(),ke=_e.getClearAlpha(),Ae=Pe.r,Ee=Pe.g,Oe=Pe.b;he?(p[0]=Ae,p[1]=Ee,p[2]=Oe,p[3]=ke,k.clearBufferuiv(k.COLOR,0,p)):(g[0]=Ae,g[1]=Ee,g[2]=Oe,g[3]=ke,k.clearBufferiv(k.COLOR,0,g))}else X|=k.COLOR_BUFFER_BIT}F&&(X|=k.DEPTH_BUFFER_BIT),V&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Le.dispose(),ne.dispose(),T.dispose(),Y.dispose(),Z.dispose(),Re.dispose(),nt.dispose(),ut.dispose(),re.dispose(),D.dispose(),D.removeEventListener("sessionstart",Ue),D.removeEventListener("sessionend",Te),Ke.stop()};function Q(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=je.autoReset,F=De.enabled,V=De.autoUpdate,X=De.needsUpdate,B=De.type;ye(),je.autoReset=R,De.enabled=F,De.autoUpdate=V,De.needsUpdate=X,De.type=B}function ve(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Me(R){const F=R.target;F.removeEventListener("dispose",Me),Je(F)}function Je(R){ct(R),T.remove(R)}function ct(R){const F=T.get(R).programs;F!==void 0&&(F.forEach(function(V){re.releaseProgram(V)}),R.isShaderMaterial&&re.releaseShaderCache(R))}this.renderBufferDirect=function(R,F,V,X,B,oe){F===null&&(F=be);const he=B.isMesh&&B.matrixWorld.determinant()<0,Pe=Nt(R,F,V,X,B);we.setMaterial(X,he);let ke=V.index,Ae=1;if(X.wireframe===!0){if(ke=J.getWireframeAttribute(V),ke===void 0)return;Ae=2}const Ee=V.drawRange,Oe=V.attributes.position;let At=Ee.start*Ae,Sn=(Ee.start+Ee.count)*Ae;oe!==null&&(At=Math.max(At,oe.start*Ae),Sn=Math.min(Sn,(oe.start+oe.count)*Ae)),ke!==null?(At=Math.max(At,0),Sn=Math.min(Sn,ke.count)):Oe!=null&&(At=Math.max(At,0),Sn=Math.min(Sn,Oe.count));const It=Sn-At;if(It<0||It===1/0)return;nt.setup(B,X,Pe,V,ke);let Kt,gt=Ne;if(ke!==null&&(Kt=K.get(ke),gt=Qe,gt.setIndex(Kt)),B.isMesh)X.wireframe===!0?(we.setLineWidth(X.wireframeLinewidth*Ge()),gt.setMode(k.LINES)):gt.setMode(k.TRIANGLES);else if(B.isLine){let He=X.linewidth;He===void 0&&(He=1),we.setLineWidth(He*Ge()),B.isLineSegments?gt.setMode(k.LINES):B.isLineLoop?gt.setMode(k.LINE_LOOP):gt.setMode(k.LINE_STRIP)}else B.isPoints?gt.setMode(k.POINTS):B.isSprite&&gt.setMode(k.TRIANGLES);if(B.isBatchedMesh)gt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)gt.renderInstances(At,It,B.count);else if(V.isInstancedBufferGeometry){const He=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Mr=Math.min(V.instanceCount,He);gt.renderInstances(At,It,Mr)}else gt.render(At,It)};function ht(R,F,V){R.transparent===!0&&R.side===Ir&&R.forceSinglePass===!1?(R.side=ii,R.needsUpdate=!0,Xe(R,F,V),R.side=ks,R.needsUpdate=!0,Xe(R,F,V),R.side=Ir):Xe(R,F,V)}this.compile=function(R,F,V=null){V===null&&(V=R),m=ne.get(V),m.init(),x.push(m),V.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),R!==V&&R.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(v._useLegacyLights);const X=new Set;return R.traverse(function(B){const oe=B.material;if(oe)if(Array.isArray(oe))for(let he=0;he<oe.length;he++){const Pe=oe[he];ht(Pe,V,B),X.add(Pe)}else ht(oe,V,B),X.add(oe)}),x.pop(),m=null,X},this.compileAsync=function(R,F,V=null){const X=this.compile(R,F,V);return new Promise(B=>{function oe(){if(X.forEach(function(he){T.get(he).currentProgram.isReady()&&X.delete(he)}),X.size===0){B(R);return}setTimeout(oe,10)}ce.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Mt=null;function ft(R){Mt&&Mt(R)}function Ue(){Ke.stop()}function Te(){Ke.start()}const Ke=new _1;Ke.setAnimationLoop(ft),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(R){Mt=R,D.setAnimationLoop(R),R===null?Ke.stop():Ke.start()},D.addEventListener("sessionstart",Ue),D.addEventListener("sessionend",Te),this.render=function(R,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(F),F=D.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,F,M),m=ne.get(R,x.length),m.init(),x.push(m),le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ve.setFromProjectionMatrix(le),ee=this.localClippingEnabled,W=de.init(this.clippingPlanes,ee),_=Le.get(R,h.length),_.init(),h.push(_),ue(R,F,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(N,H),this.info.render.frame++,W===!0&&de.beginShadows();const V=m.state.shadowsArray;if(De.render(V,R,F),W===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1)&&_e.render(_,R),m.setupLights(v._useLegacyLights),F.isArrayCamera){const X=F.cameras;for(let B=0,oe=X.length;B<oe;B++){const he=X[B];Be(_,R,he,he.viewport)}}else Be(_,R,F);M!==null&&(w.updateMultisampleRenderTarget(M),w.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(v,R,F),nt.resetDefaultState(),b=-1,E=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function ue(R,F,V,X){if(R.visible===!1)return;if(R.layers.test(F.layers)){if(R.isGroup)V=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(F);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ve.intersectsSprite(R)){X&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(le);const he=Re.update(R),Pe=R.material;Pe.visible&&_.push(R,he,Pe,V,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ve.intersectsObject(R))){const he=Re.update(R),Pe=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ce.copy(he.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(le)),Array.isArray(Pe)){const ke=he.groups;for(let Ae=0,Ee=ke.length;Ae<Ee;Ae++){const Oe=ke[Ae],At=Pe[Oe.materialIndex];At&&At.visible&&_.push(R,he,At,V,Ce.z,Oe)}}else Pe.visible&&_.push(R,he,Pe,V,Ce.z,null)}}const oe=R.children;for(let he=0,Pe=oe.length;he<Pe;he++)ue(oe[he],F,V,X)}function Be(R,F,V,X){const B=R.opaque,oe=R.transmissive,he=R.transparent;m.setupLightsView(V),W===!0&&de.setGlobalState(v.clippingPlanes,V),oe.length>0&&Ie(B,oe,F,V),X&&we.viewport(y.copy(X)),B.length>0&&ze(B,F,V),oe.length>0&&ze(oe,F,V),he.length>0&&ze(he,F,V),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Ie(R,F,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new Uo(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Wf:Ds,minFilter:vo,samples:4,stencilBuffer:s});const Ae=T.get(m.state.transmissionRenderTarget);Ae.__isTransmissionRenderTarget=!0}const oe=m.state.transmissionRenderTarget;v.getDrawingBufferSize(ie),oe.setSize(ie.x,ie.y);const he=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(I),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear();const Pe=v.toneMapping;v.toneMapping=Ls,ze(R,V,X),w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe);let ke=!1;for(let Ae=0,Ee=F.length;Ae<Ee;Ae++){const Oe=F[Ae],At=Oe.object,Sn=Oe.geometry,It=Oe.material,Kt=Oe.group;if(It.side===Ir&&At.layers.test(X.layers)){const gt=It.side;It.side=ii,It.needsUpdate=!0,Xt(At,V,X,Sn,It,Kt),It.side=gt,It.needsUpdate=!0,ke=!0}}ke===!0&&(w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe)),v.setRenderTarget(he),v.setClearColor(I,G),v.toneMapping=Pe}function ze(R,F,V){const X=F.isScene===!0?F.overrideMaterial:null;for(let B=0,oe=R.length;B<oe;B++){const he=R[B],Pe=he.object,ke=he.geometry,Ae=X===null?he.material:X,Ee=he.group;Pe.layers.test(V.layers)&&Xt(Pe,F,V,ke,Ae,Ee)}}function Xt(R,F,V,X,B,oe){R.onBeforeRender(v,F,V,X,B,oe),R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(v,F,V,X,R,oe),B.transparent===!0&&B.side===Ir&&B.forceSinglePass===!1?(B.side=ii,B.needsUpdate=!0,v.renderBufferDirect(V,F,X,B,R,oe),B.side=ks,B.needsUpdate=!0,v.renderBufferDirect(V,F,X,B,R,oe),B.side=Ir):v.renderBufferDirect(V,F,X,B,R,oe),R.onAfterRender(v,F,V,X,B,oe)}function Xe(R,F,V){F.isScene!==!0&&(F=be);const X=T.get(R),B=m.state.lights,oe=m.state.shadowsArray,he=B.state.version,Pe=re.getParameters(R,B.state,oe,F,V),ke=re.getProgramCacheKey(Pe);let Ae=X.programs;X.environment=R.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(R.isMeshStandardMaterial?Z:Y).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?F.environmentRotation:R.envMapRotation,Ae===void 0&&(R.addEventListener("dispose",Me),Ae=new Map,X.programs=Ae);let Ee=Ae.get(ke);if(Ee!==void 0){if(X.currentProgram===Ee&&X.lightsStateVersion===he)return nn(R,Pe),Ee}else Pe.uniforms=re.getUniforms(R),R.onBuild(V,Pe,v),R.onBeforeCompile(Pe,v),Ee=re.acquireProgram(Pe,ke),Ae.set(ke,Ee),X.uniforms=Pe.uniforms;const Oe=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Oe.clippingPlanes=de.uniform),nn(R,Pe),X.needsLights=_t(R),X.lightsStateVersion=he,X.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMap.value=B.state.directionalShadowMap,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotShadowMap.value=B.state.spotShadowMap,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMap.value=B.state.pointShadowMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ee,X.uniformsList=null,Ee}function Dt(R){if(R.uniformsList===null){const F=R.currentProgram.getUniforms();R.uniformsList=cf.seqWithValue(F.seq,R.uniforms)}return R.uniformsList}function nn(R,F){const V=T.get(R);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Nt(R,F,V,X,B){F.isScene!==!0&&(F=be),w.resetTextureUnits();const oe=F.fog,he=X.isMeshStandardMaterial?F.environment:null,Pe=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Xs,ke=(X.isMeshStandardMaterial?Z:Y).get(X.envMap||he),Ae=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ee=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Oe=!!V.morphAttributes.position,At=!!V.morphAttributes.normal,Sn=!!V.morphAttributes.color;let It=Ls;X.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(It=v.toneMapping);const Kt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,gt=Kt!==void 0?Kt.length:0,He=T.get(X),Mr=m.state.lights;if(W===!0&&(ee===!0||R!==E)){const Pi=R===E&&X.id===b;de.setState(X,R,Pi)}let Ut=!1;X.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Mr.state.version||He.outputColorSpace!==Pe||B.isBatchedMesh&&He.batching===!1||!B.isBatchedMesh&&He.batching===!0||B.isInstancedMesh&&He.instancing===!1||!B.isInstancedMesh&&He.instancing===!0||B.isSkinnedMesh&&He.skinning===!1||!B.isSkinnedMesh&&He.skinning===!0||B.isInstancedMesh&&He.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&He.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&He.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&He.instancingMorph===!1&&B.morphTexture!==null||He.envMap!==ke||X.fog===!0&&He.fog!==oe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==de.numPlanes||He.numIntersection!==de.numIntersection)||He.vertexAlphas!==Ae||He.vertexTangents!==Ee||He.morphTargets!==Oe||He.morphNormals!==At||He.morphColors!==Sn||He.toneMapping!==It||He.morphTargetsCount!==gt)&&(Ut=!0):(Ut=!0,He.__version=X.version);let $s=He.currentProgram;Ut===!0&&($s=Xe(X,F,B));let sg=!1,dl=!1,Nd=!1;const Mn=$s.getUniforms(),Jr=He.uniforms;if(we.useProgram($s.program)&&(sg=!0,dl=!0,Nd=!0),X.id!==b&&(b=X.id,dl=!0),sg||E!==R){Mn.setValue(k,"projectionMatrix",R.projectionMatrix),Mn.setValue(k,"viewMatrix",R.matrixWorldInverse);const Pi=Mn.map.cameraPosition;Pi!==void 0&&Pi.setValue(k,Ce.setFromMatrixPosition(R.matrixWorld)),We.logarithmicDepthBuffer&&Mn.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Mn.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,dl=!0,Nd=!0)}if(B.isSkinnedMesh){Mn.setOptional(k,B,"bindMatrix"),Mn.setOptional(k,B,"bindMatrixInverse");const Pi=B.skeleton;Pi&&(Pi.boneTexture===null&&Pi.computeBoneTexture(),Mn.setValue(k,"boneTexture",Pi.boneTexture,w))}B.isBatchedMesh&&(Mn.setOptional(k,B,"batchingTexture"),Mn.setValue(k,"batchingTexture",B._matricesTexture,w));const Id=V.morphAttributes;if((Id.position!==void 0||Id.normal!==void 0||Id.color!==void 0)&&Se.update(B,V,$s),(dl||He.receiveShadow!==B.receiveShadow)&&(He.receiveShadow=B.receiveShadow,Mn.setValue(k,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Jr.envMap.value=ke,Jr.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(Jr.envMapIntensity.value=F.environmentIntensity),dl&&(Mn.setValue(k,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&Et(Jr,Nd),oe&&X.fog===!0&&pe.refreshFogUniforms(Jr,oe),pe.refreshMaterialUniforms(Jr,X,$,q,m.state.transmissionRenderTarget),cf.upload(k,Dt(He),Jr,w)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(cf.upload(k,Dt(He),Jr,w),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Mn.setValue(k,"center",B.center),Mn.setValue(k,"modelViewMatrix",B.modelViewMatrix),Mn.setValue(k,"normalMatrix",B.normalMatrix),Mn.setValue(k,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Pi=X.uniformsGroups;for(let Ud=0,qM=Pi.length;Ud<qM;Ud++){const og=Pi[Ud];ut.update(og,$s),ut.bind(og,$s)}}return $s}function Et(R,F){R.ambientLightColor.needsUpdate=F,R.lightProbe.needsUpdate=F,R.directionalLights.needsUpdate=F,R.directionalLightShadows.needsUpdate=F,R.pointLights.needsUpdate=F,R.pointLightShadows.needsUpdate=F,R.spotLights.needsUpdate=F,R.spotLightShadows.needsUpdate=F,R.rectAreaLights.needsUpdate=F,R.hemisphereLights.needsUpdate=F}function _t(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,F,V){T.get(R.texture).__webglTexture=F,T.get(R.depthTexture).__webglTexture=V;const X=T.get(R);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,F){const V=T.get(R);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(R,F=0,V=0){M=R,C=F,A=V;let X=!0,B=null,oe=!1,he=!1;if(R){const ke=T.get(R);ke.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(k.FRAMEBUFFER,null),X=!1):ke.__webglFramebuffer===void 0?w.setupRenderTarget(R):ke.__hasExternalTextures&&w.rebindTextures(R,T.get(R.texture).__webglTexture,T.get(R.depthTexture).__webglTexture);const Ae=R.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(he=!0);const Ee=T.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ee[F])?B=Ee[F][V]:B=Ee[F],oe=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?B=T.get(R).__webglMultisampledFramebuffer:Array.isArray(Ee)?B=Ee[V]:B=Ee,y.copy(R.viewport),U.copy(R.scissor),O=R.scissorTest}else y.copy(L).multiplyScalar($).floor(),U.copy(te).multiplyScalar($).floor(),O=me;if(we.bindFramebuffer(k.FRAMEBUFFER,B)&&X&&we.drawBuffers(R,B),we.viewport(y),we.scissor(U),we.setScissorTest(O),oe){const ke=T.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,ke.__webglTexture,V)}else if(he){const ke=T.get(R.texture),Ae=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.__webglTexture,V||0,Ae)}b=-1},this.readRenderTargetPixels=function(R,F,V,X,B,oe,he){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&he!==void 0&&(Pe=Pe[he]),Pe){we.bindFramebuffer(k.FRAMEBUFFER,Pe);try{const ke=R.texture,Ae=ke.format,Ee=ke.type;if(Ae!==hr&&qe.convert(Ae)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ee===Wf&&(ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float"));if(Ee!==Ds&&qe.convert(Ee)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&Ee!==_s&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=R.width-X&&V>=0&&V<=R.height-B&&k.readPixels(F,V,X,B,qe.convert(Ae),qe.convert(Ee),oe)}finally{const ke=M!==null?T.get(M).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(R,F,V=0){const X=Math.pow(2,-V),B=Math.floor(F.image.width*X),oe=Math.floor(F.image.height*X);w.setTexture2D(F,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,R.x,R.y,B,oe),we.unbindTexture()},this.copyTextureToTexture=function(R,F,V,X=0){const B=F.image.width,oe=F.image.height,he=qe.convert(V.format),Pe=qe.convert(V.type);w.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,R.x,R.y,B,oe,he,Pe,F.image.data):F.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,R.x,R.y,F.mipmaps[0].width,F.mipmaps[0].height,he,F.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,X,R.x,R.y,he,Pe,F.image),X===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(R,F,V,X,B=0){const oe=Math.round(R.max.x-R.min.x),he=Math.round(R.max.y-R.min.y),Pe=R.max.z-R.min.z+1,ke=qe.convert(X.format),Ae=qe.convert(X.type);let Ee;if(X.isData3DTexture)w.setTexture3D(X,0),Ee=k.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)w.setTexture2DArray(X,0),Ee=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const Oe=k.getParameter(k.UNPACK_ROW_LENGTH),At=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Sn=k.getParameter(k.UNPACK_SKIP_PIXELS),It=k.getParameter(k.UNPACK_SKIP_ROWS),Kt=k.getParameter(k.UNPACK_SKIP_IMAGES),gt=V.isCompressedTexture?V.mipmaps[B]:V.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,gt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,R.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,R.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,R.min.z),V.isDataTexture||V.isData3DTexture?k.texSubImage3D(Ee,B,F.x,F.y,F.z,oe,he,Pe,ke,Ae,gt.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(Ee,B,F.x,F.y,F.z,oe,he,Pe,ke,gt.data):k.texSubImage3D(Ee,B,F.x,F.y,F.z,oe,he,Pe,ke,Ae,gt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Oe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,At),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Sn),k.pixelStorei(k.UNPACK_SKIP_ROWS,It),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Kt),B===0&&X.generateMipmaps&&k.generateMipmap(Ee),we.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),we.unbindTexture()},this.resetState=function(){C=0,A=0,M=null,we.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===L_?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===wd?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class wL extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class E1 extends jc{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uv=new z,Ov=new z,Fv=new Lt,Wh=new a1,Ou=new Ad;class AL extends jn{constructor(e=new Qr,t=new E1){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Uv.fromBufferAttribute(t,r-1),Ov.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Uv.distanceTo(Ov);e.setAttribute("lineDistance",new Vr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ou.copy(i.boundingSphere),Ou.applyMatrix4(r),Ou.radius+=s,e.ray.intersectsSphere(Ou)===!1)return;Fv.copy(r).invert(),Wh.copy(e.ray).applyMatrix4(Fv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,u=new z,d=new z,f=new z,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const h=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=h,S=x-1;v<S;v+=p){const C=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(m,C),u.fromBufferAttribute(m,A),Wh.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=h,S=x-1;v<S;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Wh.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const kv=new z,zv=new z;class CL extends AL{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)kv.fromBufferAttribute(t,r),zv.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+kv.distanceTo(zv);e.setAttribute("lineDistance",new Vr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class T1 extends jn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const jh=new Lt,Bv=new z,Hv=new z;class RL{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new D_,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bv.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bv),Hv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hv),t.updateMatrixWorld(),jh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vv=new Lt,Al=new z,Xh=new z;class PL extends RL{constructor(){super(new _i(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Al.setFromMatrixPosition(e.matrixWorld),i.position.copy(Al),Xh.copy(i.position),Xh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Xh),i.updateMatrixWorld(),r.makeTranslation(-Al.x,-Al.y,-Al.z),Vv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vv)}}class bL extends T1{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new PL}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class LL extends T1{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class DL{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Gv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Gv(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:b_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=b_);function NL(){const n=st.useRef(null),e=st.useRef(null);return st.useEffect(()=>{let t,i,r,s,o,a,l,c,u=!0;const d=[];for(let M=0;M<16;M++)d.push(new Pt(M&1?1:-1,M&2?1:-1,M&4?1:-1,M&8?1:-1));const f=[];for(let M=0;M<d.length;M++)for(let b=M+1;b<d.length;b++){let E=0;d[M].x!==d[b].x&&E++,d[M].y!==d[b].y&&E++,d[M].z!==d[b].z&&E++,d[M].w!==d[b].w&&E++,E===1&&f.push(M,b)}function p(M,b,E){const y=new Lt,U=Math.cos(M),O=Math.sin(M);return y.elements[b*4+b]=U,y.elements[E*4+b]=-O,y.elements[b*4+E]=O,y.elements[E*4+E]=U,y}const g=2.5;function _(M){const b=1/(g-M.w);return new z(M.x*b,M.y*b,M.z*b)}if(!n.current)return;const m=n.current,h=()=>{if(!m||m.clientWidth===0||m.clientHeight===0)return u&&setTimeout(h,100),!1;for(;m.firstChild;)m.removeChild(m.firstChild);t=new wL,s=new DL,i=new _i(75,m.clientWidth/m.clientHeight,.1,100),i.position.set(0,0,4),i.lookAt(t.position);try{r=new TL({antialias:!0,alpha:!0}),r.setSize(m.clientWidth,m.clientHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.appendChild(r.domElement)}catch(E){return console.error("WebGL Error:",E),!1}o=new LL(14540287,1.5),t.add(o),a=new bL(16777215,100,100),a.position.set(5,5,5),t.add(a);const M=new Float32Array(f.length*3);c=new Qr,c.setAttribute("position",new nr(M,3));const b=new E1({color:65535,linewidth:1.5});return l=new CL(c,b),t.add(l),console.log("Tesseract Scene Initialized"),!0};let x=0,v=!1;const S=()=>{if(u&&(e.current=requestAnimationFrame(S),!(!r||!t||!i||!s||!c)))try{const M=s.getDelta();x+=M*.5;const b=p(x*1.1,0,1),E=p(x*.8,2,3),y=p(x*.5,0,3),U=new Lt().multiplyMatrices(y,E).multiply(b),O=c.attributes.position.array;let I=0;for(let G=0;G<f.length;G+=2){const j=d[f[G]],q=d[f[G+1]],$=j.clone().applyMatrix4(U),N=q.clone().applyMatrix4(U),H=_($),L=_(N);O[I++]=H.x,O[I++]=H.y,O[I++]=H.z,O[I++]=L.x,O[I++]=L.y,O[I++]=L.z}c.attributes.position.needsUpdate=!0,r.render(t,i),v=!1}catch(M){v||(console.error("Error during tesseract animation loop:",M),v=!0),e.current&&cancelAnimationFrame(e.current)}},C=()=>{};let A=null;return h()&&(A=r,S(),window.addEventListener("resize",C)),()=>{if(u=!1,console.log("Cleaning up Tesseract Visualization..."),e.current&&cancelAnimationFrame(e.current),window.removeEventListener("resize",C),t==null||t.traverse(M=>{var b;!M.isLineSegments&&!M.isMesh&&!M.isPoints||((b=M.geometry)==null||b.dispose(),M.material)}),t)for(;t.children.length>0;)t.remove(t.children[0]);if(A!=null&&A.domElement&&(m!=null&&m.contains(A.domElement)))try{m.removeChild(A.domElement)}catch{}A==null||A.dispose(),console.log("Tesseract cleanup complete.")}},[]),P.jsx("section",{className:du.section,id:"talos-viz",children:P.jsxs("div",{className:`${du.container} container`,children:[P.jsxs("div",{className:"section-header",children:[P.jsxs("h2",{className:"section-title",children:["Οπτικοποίηση ",P.jsx("span",{className:"highlight",children:"Talos Core"})]}),P.jsx("p",{className:"section-subtitle",children:"Tesseract Rotation Simulation."})]}),P.jsx("div",{className:du.visualizationArea,children:P.jsx("div",{ref:n,className:du.visualizationContainer})})]})})}const IL="_demoSection_1cj6s_5",UL="_container_1cj6s_35",OL="_statsContainer_1cj6s_47",FL="_statItem_1cj6s_57",kL="_statValue_1cj6s_57",zL="_statLabel_1cj6s_57",BL="_loadingText_1cj6s_59",HL="_errorBox_1cj6s_59",VL="_threatLogContainer_1cj6s_67",GL="_logHeader_1cj6s_95",WL="_logEntriesWrapper_1cj6s_119",jL="_logEntry_1cj6s_137",XL="_logTimestamp_1cj6s_183",YL="_logType_1cj6s_197",$L="_logMessage_1cj6s_209",qL="_logDetails_1cj6s_221",KL="_alert_1cj6s_241",ZL="_warn_1cj6s_243",QL="_ok_1cj6s_245",JL="_info_1cj6s_247",eD="_noLogs_1cj6s_251",dt={demoSection:IL,container:UL,statsContainer:OL,statItem:FL,statValue:kL,statLabel:zL,loadingText:BL,errorBox:HL,threatLogContainer:VL,logHeader:GL,logEntriesWrapper:WL,logEntry:jL,logTimestamp:XL,logType:YL,logMessage:$L,logDetails:qL,alert:KL,warn:ZL,ok:QL,info:JL,noLogs:eD},tD="http://localhost:8080/api/stats",Wv=["ALERT","INFO","OK","WARN"],jv=["Blocked","Analyzed","Allowed","Neutralized","Investigating","Logged","Isolated"],Xv=["1.2.3.4 (CN)","5.6.7.8 (RU)","9.10.11.12 (US)","13.14.15.16 (KP)","17.18.19.20 (IR)","21.22.23.24 (UA)","25.26.27.28 (DE)"],Yv=["Potential DDoS Flood Detected","Anomalous Login Pattern Observed","Malware Signature Matched","Outbound C&C Communication Attempt","System Scan Completed","Policy Update Applied","SQL Injection Attempt Prevented","Zero-Day Exploit Mitigated","Suspicious File Transfer","Firewall Rule Triggered","User Authentication Failure"];function nD(){var f,p;const[n,e]=st.useState(null),[t,i]=st.useState(null),[r,s]=st.useState(!0),[o,a]=st.useState([]),l=st.useRef(null),c=st.useCallback(g=>{switch(g){case"ALERT":return dt.alert;case"WARN":return dt.warn;case"OK":return dt.ok;case"INFO":default:return dt.info}},[]),u=st.useCallback(async()=>{s(!0),i(null),console.log("Fetching stats...");try{const g=await fetch(tD);if(!g.ok)throw new Error(`HTTP error! status: ${g.status}`);const _=await g.json();console.log("Stats received:",_),e(_)}catch(g){console.error("Failed to fetch stats:",g),i("Δεν ήταν δυνατή η φόρτωση των στατιστικών."),e(null)}finally{s(!1)}},[]);st.useEffect(()=>{u()},[u]),st.useEffect(()=>{const g=()=>{const m=Wv[Math.floor(Math.random()*Wv.length)],h={id:Date.now()+Math.random(),timestamp:new Date,type:m,message:Yv[Math.floor(Math.random()*Yv.length)],source:Xv[Math.floor(Math.random()*Xv.length)],action:jv[Math.floor(Math.random()*jv.length)]};a(x=>[h,...x.slice(0,19)])};for(let m=0;m<5;m++)setTimeout(g,m*100);const _=setInterval(g,2500);return()=>clearInterval(_)},[]);const d=g=>typeof g!="number"||isNaN(g)||g<=0?"---":`${(g*1e3).toFixed(0)} ms`;return P.jsxs("section",{className:dt.demoSection,id:"demo",children:[P.jsxs("div",{className:"section-header",children:[P.jsxs("h2",{className:"section-title",children:["Λειτουργία σε ",P.jsx("span",{className:"highlight",children:"Δράση"})]}),P.jsx("p",{className:"section-subtitle",children:" Παρακολουθήστε τα στατιστικά απόδοσης και μια προσομοίωση της ροής συμβάντων ασφαλείας. "})]}),P.jsxs("div",{className:`${dt.container} container`,children:[P.jsxs("div",{className:dt.statsContainer,children:[r&&P.jsx("div",{className:dt.loadingText,children:"Φόρτωση στατιστικών..."}),t&&!r&&P.jsx("div",{className:dt.errorBox,children:t}),n&&!r&&!t&&P.jsxs(P.Fragment,{children:[P.jsxs("div",{className:dt.statItem,children:[" ",P.jsx("span",{className:dt.statValue,children:((f=n.threatsToday)==null?void 0:f.toLocaleString())??"---"})," ",P.jsx("span",{className:dt.statLabel,children:"Απειλές Σήμερα"})," "]}),P.jsxs("div",{className:dt.statItem,children:[" ",P.jsx("span",{className:dt.statValue,children:((p=n.threatsNeutralized)==null?void 0:p.toLocaleString())??"---"})," ",P.jsx("span",{className:dt.statLabel,children:"Εξουδετερώθηκαν"})," "]}),P.jsxs("div",{className:dt.statItem,children:[" ",P.jsx("span",{className:dt.statValue,children:d(n.reactionTime)})," ",P.jsx("span",{className:dt.statLabel,children:"Χρόνος Απόκρισης"})," "]}),P.jsxs("div",{className:dt.statItem,children:[" ",P.jsx("span",{className:dt.statValue,style:{color:"var(--accent-green)"},children:n.securityLevel??"---"})," ",P.jsx("span",{className:dt.statLabel,children:"Επίπεδο Ασφαλείας"})," "]})]}),!n&&!r&&!t&&P.jsx("div",{className:dt.loadingText,children:"Δεν υπάρχουν δεδομένα στατιστικών."})]}),P.jsxs("div",{className:dt.threatLogContainer,ref:l,children:[P.jsx("div",{className:dt.logHeader,children:"Live Activity Log"}),P.jsxs("div",{className:dt.logEntriesWrapper,children:[o.length===0&&!r&&P.jsx("p",{className:dt.noLogs,children:"Αναμονή για συμβάντα..."}),o.map(g=>P.jsxs("div",{className:`${dt.logEntry} ${c(g.type)}`,children:[P.jsx("span",{className:dt.logTimestamp,children:g.timestamp.toLocaleTimeString()}),P.jsxs("span",{className:dt.logType,children:["[",g.type,"]"]}),P.jsx("span",{className:dt.logMessage,children:g.message}),P.jsxs("span",{className:dt.logDetails,children:["(Src: ",g.source," | Act: ",g.action,")"]})]},g.id))]})]})]})]})}const iD="_contactSection_14dcf_5",rD="_container_14dcf_41",sD="_contentWrapper_14dcf_55",oD="_contactInfo_14dcf_81",aD="_iconWrapper_14dcf_163",lD="_formContainer_14dcf_223",as={contactSection:iD,container:rD,contentWrapper:sD,contactInfo:oD,iconWrapper:aD,formContainer:lD},cD="_form_dvmxh_5",uD="_formGroup_dvmxh_25",fD="_label_dvmxh_33",dD="_input_dvmxh_51",hD="_textarea_dvmxh_53",pD="_formStatus_dvmxh_103",mD="_success_dvmxh_123",_D="_error_dvmxh_129",gD="_submitButton_dvmxh_139",qn={form:cD,formGroup:uD,label:fD,input:dD,textarea:hD,formStatus:pD,success:mD,error:_D,submitButton:gD},vD="http://localhost:8080/api/contact";function xD(){const[n,e]=st.useState({name:"",email:"",message:""}),[t,i]=st.useState(!1),[r,s]=st.useState(""),[o,a]=st.useState(!1),l=u=>{const{name:d,value:f}=u.target;e(p=>({...p,[d]:f})),r&&s("")},c=async u=>{u.preventDefault(),i(!0),s("Αποστολή..."),a(!1),console.log("Attempting to send:",n);try{const d=await fetch(vD,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(d.ok)s("Το μήνυμά σας εστάλη με επιτυχία!"),a(!0),e({name:"",email:"",message:""}),setTimeout(()=>s(""),5e3);else{let f=`Σφάλμα αποστολής: ${d.status} ${d.statusText}`;try{const p=await d.json();f=p.message||p.errors||f,console.error("Backend Error Response:",p)}catch(p){console.error("Could not parse error response:",p)}s(f),a(!1)}}catch(d){console.error("Network or Fetch Error:",d),s("Σφάλμα δικτύου. Δεν ήταν δυνατή η αποστολή."),a(!1)}finally{i(!1)}};return P.jsxs("form",{className:qn.form,onSubmit:c,noValidate:!0,children:[P.jsxs("div",{className:qn.formGroup,children:[P.jsx("label",{htmlFor:"name",className:qn.label,children:"Όνομα:"}),P.jsx("input",{type:"text",id:"name",name:"name",className:qn.input,value:n.name,onChange:l,required:!0,"aria-required":"true",disabled:t,autoComplete:"name"})]}),P.jsxs("div",{className:qn.formGroup,children:[P.jsx("label",{htmlFor:"email",className:qn.label,children:"Email:"}),P.jsx("input",{type:"email",id:"email",name:"email",className:qn.input,value:n.email,onChange:l,required:!0,"aria-required":"true",disabled:t,autoComplete:"email"})]}),P.jsxs("div",{className:qn.formGroup,children:[P.jsx("label",{htmlFor:"message",className:qn.label,children:"Μήνυμα:"}),P.jsx("textarea",{id:"message",name:"message",rows:"5",className:qn.textarea,value:n.message,onChange:l,required:!0,"aria-required":"true",disabled:t,autoComplete:"off"})]}),P.jsx("div",{className:qn.formStatus,children:r&&P.jsx("p",{className:o?qn.success:qn.error,children:r})}),P.jsx("button",{type:"submit",className:`btn primary-btn ${qn.submitButton}`,disabled:t,children:t?"ΑΠΟΣΤΟΛΗ...":"ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ"})]})}const $v=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"100%",height:"100%",children:[P.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),P.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"})]}),qv=()=>P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"100%",height:"100%",children:P.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"})}),Kv=()=>P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"100%",height:"100%",children:P.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z"})});function yD(){return P.jsx("section",{className:as.contactSection,id:"contact",children:P.jsxs("div",{className:`${as.container} container`,children:[P.jsxs("div",{className:"section-header",children:[P.jsxs("h2",{className:"section-title",children:[" Ελάτε σε ",P.jsx("span",{className:"highlight",children:"Επαφή"})," "]}),P.jsx("p",{className:"section-subtitle",children:" Έχετε ερωτήσεις ή θέλετε να μάθετε περισσότερα; Συμπληρώστε τη φόρμα ή χρησιμοποιήστε τα παρακάτω στοιχεία. "})]}),P.jsxs("div",{className:as.contentWrapper,children:[P.jsxs("div",{className:as.contactInfo,children:[P.jsx("h3",{children:"Στοιχεία Επικοινωνίας"}),P.jsx("p",{children:" Η ομάδα μας είναι διαθέσιμη να απαντήσει στις ερωτήσεις σας και να συζητήσει πώς το TALOS A.I. μπορεί να θωρακίσει την επιχείρησή σας. "}),P.jsxs("ul",{children:[P.jsxs("li",{children:[typeof $v=="function"&&P.jsx("span",{className:as.iconWrapper,children:P.jsx($v,{})}),P.jsx("span",{children:"TALOS A.I. HQ, Science & Tech Park of Crete, Rethymno"})]}),P.jsxs("li",{children:[typeof qv=="function"&&P.jsx("span",{className:as.iconWrapper,children:P.jsx(qv,{})}),P.jsx("a",{href:"mailto:contact@talos-aiprotect.gr",children:"contact@talos-aiprotect.gr"})]}),P.jsxs("li",{children:[typeof Kv=="function"&&P.jsx("span",{className:as.iconWrapper,children:P.jsx(Kv,{})}),P.jsx("a",{href:"tel:+302831012345",children:"+30 28310 12345"})]})]})]}),P.jsxs("div",{className:as.formContainer,children:[P.jsx("h3",{children:"Φόρμα Επικοινωνίας"}),P.jsx(xD,{})]})]})]})})}const SD="_footer_4qsig_3",MD="_container_4qsig_17",ED="_copyright_4qsig_39",Yh={footer:SD,container:MD,copyright:ED};function TD(){const n=new Date().getFullYear();return P.jsx("footer",{className:Yh.footer,children:P.jsx("div",{className:`${Yh.container} container`,children:P.jsxs("p",{className:Yh.copyright,children:["© ",n," TALOS A.I. Protection Systems. All Rights Reserved. (Placeholder)"]})})})}const wD="_particleContainer_15h1h_3",AD={particleContainer:wD};function Zv(n,e){var t;if(typeof window>"u")return e;try{return((t=getComputedStyle(document.documentElement).getPropertyValue(n))==null?void 0:t.trim())||e}catch{return e}}function Qv(n,e){n||(n="#6fa8ff"),n=n.replace("#","");try{const t=parseInt(n.length===3?n.slice(0,1).repeat(2):n.slice(0,2),16),i=parseInt(n.length===3?n.slice(1,2).repeat(2):n.slice(2,4),16),r=parseInt(n.length===3?n.slice(2,3).repeat(2):n.slice(4,6),16);if(isNaN(t)||isNaN(i)||isNaN(r))throw new Error("Invalid HEX");return`rgba(${t}, ${i}, ${r}, ${e})`}catch{return`rgba(111, 168, 255, ${e})`}}function CD(n){if(!n)return console.error("Particles container element not provided."),{cleanup:()=>{}};const e=document.createElement("canvas"),t=e.getContext("2d");if(!t)return console.error("Could not get 2D context for particles canvas."),{cleanup:()=>{}};n.querySelector("canvas")&&(n.innerHTML=""),n.appendChild(e);let i=[];const r=35;let s=null,o={x:null,y:null,radius:120},a;const l=h=>{if(!e)return;const x=e.getBoundingClientRect();o.x=h.clientX-x.left,o.y=h.clientY-x.top},c=()=>{o.x=null,o.y=null},u=()=>{clearTimeout(a),a=setTimeout(()=>{!e||!n||(e.width=n.offsetWidth,e.height=n.offsetHeight,o.radius=Math.min(e.width,e.height)/7,p())},150)},d=()=>{document.hidden?(s&&cancelAnimationFrame(s),s=null):!s&&t&&e&&_()};class f{constructor(x,v){this.x=x||Math.random()*e.width,this.y=v||Math.random()*e.height,this.size=Math.random()*1.8+.8,this.baseX=this.x,this.baseY=this.y,this.density=Math.random()*25+5,this.speedX=Math.random()*.5-.25,this.speedY=Math.random()*.5-.25;const S=Zv("--accent-cyan","#22d3ee");this.color=Qv(S,Math.random()*.4+.15)}update(){if(!e)return;let x=o.x-this.x,v=o.y-this.y,S=Math.sqrt(x*x+v*v),C=0;S<o.radius&&o.x!==null&&(C=(o.radius-S)/o.radius);let A=S>0?x/S:0,M=S>0?v/S:0,b=C*C*this.density;C>0?(this.x-=A*b*.6,this.y-=M*b*.6):(Math.abs(this.x-this.baseX)>.1?this.x-=(this.x-this.baseX)/20:this.x=this.baseX,Math.abs(this.y-this.baseY)>.1?this.y-=(this.y-this.baseY)/20:this.y=this.baseY,Math.abs(this.x-this.baseX)<5&&Math.abs(this.y-this.baseY)<5&&(this.x+=this.speedX,this.y+=this.speedY)),this.x<-this.size?this.x=e.width+this.size:this.x>e.width+this.size&&(this.x=-this.size),this.y<-this.size?this.y=e.height+this.size:this.y>e.height+this.size&&(this.y=-this.size)}draw(){t&&(t.fillStyle=this.color,t.beginPath(),t.arc(this.x,this.y,this.size,0,Math.PI*2),t.fill())}}function p(){if(!e)return;i=[];const h=Math.min(1.2,Math.max(.4,e.width*e.height/(1920*1080))),x=Math.floor(r*h);for(let v=0;v<x;v++)i.push(new f)}function g(){if(!t||i.length===0)return;const h=110,x=.06,v=Zv("--accent-glow","#6fa8ff");t.lineWidth=.4;for(let S=0;S<i.length;S++)for(let C=S+1;C<i.length;C++){const A=i[S].x-i[C].x,M=i[S].y-i[C].y,b=Math.sqrt(A*A+M*M);if(b<h){const E=x*(1-b/h);t.strokeStyle=Qv(v,E),t.beginPath(),t.moveTo(i[S].x,i[S].y),t.lineTo(i[C].x,i[C].y),t.stroke()}}}function _(){if(!t||!e){s&&cancelAnimationFrame(s),s=null;return}t.clearRect(0,0,e.width,e.height),i.forEach(h=>{h.update(),h.draw()}),g(),s=requestAnimationFrame(_)}function m(){if(console.log("Cleaning up particles effect..."),s&&cancelAnimationFrame(s),s=null,window.removeEventListener("mousemove",l),window.removeEventListener("mouseout",c),window.removeEventListener("resize",u),document.removeEventListener("visibilitychange",d),clearTimeout(a),n&&e&&n.contains(e))try{n.removeChild(e)}catch{}i=[],console.log("Particles cleanup complete.")}return n.offsetWidth===0||n.offsetHeight===0?(console.warn("Particles container has zero dimensions on init. Delaying setup."),setTimeout(()=>{n.offsetWidth>0&&n.offsetHeight>0?(e.width=n.offsetWidth,e.height=n.offsetHeight,o.radius=Math.min(e.width,e.height)/7,p(),_(),window.addEventListener("mousemove",l),window.addEventListener("mouseout",c),window.addEventListener("resize",u),document.addEventListener("visibilitychange",d)):console.error("Particles container still has zero dimensions after delay.")},100)):(e.width=n.offsetWidth,e.height=n.offsetHeight,o.radius=Math.min(e.width,e.height)/7,p(),_(),window.addEventListener("mousemove",l),window.addEventListener("mouseout",c),window.addEventListener("resize",u),document.addEventListener("visibilitychange",d)),{cleanup:m}}function RD(){const n=st.useRef(null);return st.useEffect(()=>{let e=null;return n.current&&(e=CD(n.current)),()=>{e==null||e.cleanup()}},[]),P.jsx("div",{ref:n,className:AD.particleContainer})}const PD="_preloaderContainer_1vybm_7",bD="_hidden_1vybm_27",LD="_welcomeArea_1vybm_35",DD="_welcomeMessage_1vybm_45",ND="_welcomeSeparator_1vybm_61",ID="_taglineShieldContainer_1vybm_71",UD="_visible_1vybm_83",OD="_tagline_1vybm_71",FD="_shieldIcon_1vybm_97",kD="_preloaderContent_1vybm_115",zD="_cityscape_1vybm_133",BD="_fortress_1vybm_137",HD="_buildings_1vybm_139",VD="_building_1vybm_139",GD="_circuitContainer_1vybm_149",WD="_circuit_1vybm_149",jD="_loadingRing_1vybm_155",XD="_ring_1vybm_157",YD="_outer_1vybm_159",$D="_inner_1vybm_161",qD="_textRing_1vybm_165",KD="_pulsingSphere_1vybm_171",ZD="_sphereCore_1vybm_173",QD="_sphereRipple_1vybm_175",JD="_loadingProgress_1vybm_183",eN="_progressBar_1vybm_185",vt={preloaderContainer:PD,hidden:bD,welcomeArea:LD,welcomeMessage:DD,welcomeSeparator:ND,taglineShieldContainer:ID,visible:UD,tagline:OD,shieldIcon:FD,preloaderContent:kD,cityscape:zD,fortress:BD,buildings:HD,building:VD,circuitContainer:GD,circuit:WD,loadingRing:jD,ring:XD,outer:YD,inner:$D,textRing:qD,pulsingSphere:KD,sphereCore:ZD,sphereRipple:QD,loadingProgress:JD,progressBar:eN},tN=()=>P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"100%",height:"100%",children:P.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"})}),$h=[{text:"INITIALIZING TALOS A.I. CORE...",delay:100},{text:"ACCESSING WEB3 SECURITY GRID...",delay:1500},{text:"ΣΥΣΤΗΜΑ ΕΤΟΙΜΟ.",delay:2900},{text:"ΚΑΛΩΣ ΟΡΙΣΑΤΕ ΣΤΗΝ ΕΠΟΧΗ ΤΗΣ ΕΥΦΥΟΥΣ ΑΜΥΝΑΣ",delay:3700}],nN="TALOS A.I. - Η ΑΣΠΙΔΑ ΣΑΣ ΣΤΟ WEB3";function iN({isLoading:n}){const[e,t]=st.useState(""),[i,r]=st.useState(!1),[s,o]=st.useState(!1),a=st.useRef([]);return st.useEffect(()=>{if(a.current.forEach(clearTimeout),a.current=[],n){t(""),r(!1),o(!1),$h.forEach(u=>{const d=setTimeout(()=>{t(u.text)},u.delay);a.current.push(d)});const l=setTimeout(()=>{r(!0)},4e3);a.current.push(l);const c=setTimeout(()=>{o(!0)},4200);a.current.push(c)}else t($h[$h.length-1].text),r(!0),o(!0);return()=>{a.current.forEach(clearTimeout)}},[n]),P.jsxs("div",{className:`${vt.preloaderContainer} ${n?"":vt.hidden}`,children:[P.jsxs("div",{className:vt.welcomeArea,children:[P.jsx("p",{className:vt.welcomeMessage,children:e}),P.jsx("div",{className:vt.welcomeSeparator}),P.jsxs("div",{className:vt.taglineShieldContainer,children:[P.jsx("p",{className:`${vt.tagline} ${i?vt.visible:""}`,children:nN}),P.jsx("div",{className:`${vt.shieldIcon} ${s?vt.visible:""}`,children:P.jsx(tN,{})})]})]}),P.jsxs("div",{className:vt.preloaderContent,children:[P.jsxs("div",{className:vt.cityscape,children:[P.jsx("div",{className:vt.fortress}),P.jsx("div",{className:vt.buildings,children:[...Array(12)].map((l,c)=>P.jsx("div",{className:vt.building,style:{height:`${40+Math.random()*60}px`,animationDelay:`${c*.15}s`}},c))})]}),P.jsx("div",{className:vt.circuitContainer,children:P.jsx("div",{className:vt.circuit})}),P.jsxs("div",{className:vt.loadingRing,children:[P.jsx("div",{className:`${vt.ring} ${vt.outer}`}),P.jsx("div",{className:`${vt.ring} ${vt.inner}`}),P.jsx("div",{className:vt.textRing,children:Array.from("LOADING·WEB3·EXPERIENCE·").map((l,c)=>P.jsx("span",{style:{transform:`rotate(${c*(360/25)}deg) translateY(-110px)`},children:l===" "?" ":l},c))})]}),P.jsxs("div",{className:vt.pulsingSphere,children:[P.jsx("div",{className:vt.sphereCore}),P.jsx("div",{className:vt.sphereRipple}),P.jsx("div",{className:vt.sphereRipple,style:{animationDelay:"0.5s"}})]}),P.jsx("div",{className:vt.loadingProgress,children:P.jsx("div",{className:vt.progressBar})})]})]})}function rN(){const[n,e]=st.useState(!0);return st.useEffect(()=>{const i=setTimeout(()=>{e(!1)},4500);return()=>clearTimeout(i)},[]),P.jsxs(P.Fragment,{children:[P.jsx(iN,{isLoading:n}),P.jsx("div",{className:`main-content ${n?"hidden":"visible"}`,children:!n&&P.jsxs(P.Fragment,{children:[P.jsx(RD,{})," ",P.jsx(kw,{}),P.jsxs("main",{children:[P.jsx(Zw,{}),P.jsx(fA,{}),P.jsx(mA,{}),P.jsx(RA,{}),P.jsx(GA,{}),P.jsx(iC,{}),P.jsx(NL,{}),P.jsx(nD,{}),P.jsx(yD,{})]}),P.jsx(TD,{})]})}),P.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},children:P.jsx("defs",{children:P.jsxs("linearGradient",{id:"gradient-border-svg",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[P.jsx("stop",{offset:"0%",style:{stopColor:"var(--accent-orange)",stopOpacity:1}}),P.jsx("stop",{offset:"100%",style:{stopColor:"var(--accent-purple)",stopOpacity:1}})]})})})]})}function Lr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function w1(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},el={duration:.5,overwrite:!1,delay:0},I_,xn,Ft,vr=1e8,Dn=1/vr,fm=Math.PI*2,sN=fm/4,oN=0,A1=Math.sqrt,aN=Math.cos,lN=Math.sin,mn=function(e){return typeof e=="string"},jt=function(e){return typeof e=="function"},qr=function(e){return typeof e=="number"},U_=function(e){return typeof e>"u"},Sr=function(e){return typeof e=="object"},si=function(e){return e!==!1},O_=function(){return typeof window<"u"},Fu=function(e){return jt(e)||mn(e)},C1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nn=Array.isArray,dm=/(?:-?\.?\d|\.)+/gi,R1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,P1=/[+-]=-?[.\d]+/,b1=/[^,'"\[\]\s]+/gi,cN=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,ar,hm,F_,wi={},Kf={},L1,D1=function(e){return(Kf=tl(e,wi))&&ci},k_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Cc=function(e,t){return!t&&console.warn(e)},N1=function(e,t){return e&&(wi[e]=t)&&Kf&&(Kf[e]=t)||wi},Rc=function(){return 0},uN={suppressEvents:!0,isStart:!0,kill:!1},uf={suppressEvents:!0,kill:!1},fN={suppressEvents:!0},z_={},Ns=[],pm={},I1,mi={},Kh={},Jv=30,ff=[],B_="",H_=function(e){var t=e[0],i,r;if(Sr(t)||jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=ff.length;r--&&!ff[r].targetTest(t););i=ff[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new rM(e[r],i)))||e.splice(r,1);return e},Eo=function(e){return e._gsap||H_(zi(e))[0]._gsap},U1=function(e,t,i){return(i=e[t])&&jt(i)?e[t]():U_(i)&&e.getAttribute&&e.getAttribute(t)||i},oi=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},en=function(e){return Math.round(e*1e7)/1e7||0},Fa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},dN=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Zf=function(){var e=Ns.length,t=Ns.slice(0),i,r;for(pm={},Ns.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},O1=function(e,t,i,r){Ns.length&&!xn&&Zf(),e.render(t,i,xn&&t<0&&(e._initted||e._startAt)),Ns.length&&!xn&&Zf()},F1=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(b1).length<2?t:mn(e)?e.trim():e},k1=function(e){return e},Ai=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},hN=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},tl=function(e,t){for(var i in t)e[i]=t[i];return e},ex=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Sr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Qf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Zl=function(e){var t=e.parent||zt,i=e.keyframes?hN(Nn(e.keyframes)):Ai;if(si(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},pN=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},z1=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Pd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Bs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},To=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},mN=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},mm=function(e,t,i,r){return e._startAt&&(xn?e._startAt.revert(uf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},_N=function n(e){return!e||e._ts&&n(e.parent)},tx=function(e){return e._repeat?nl(e._tTime,e=e.duration()+e._rDelay)*e:0},nl=function(e,t){var i=Math.floor(e=en(e/t));return e&&i===e?i-1:i},Jf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},bd=function(e){return e._end=en(e._start+(e._tDur/Math.abs(e._ts||e._rts||Dn)||0))},Ld=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=en(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),bd(e),i._dirty||To(i,e)),e},B1=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Jf(e.rawTime(),t),(!t._dur||Yc(0,t.totalDuration(),i)-t._tTime>Dn)&&t.render(i,!0)),To(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-1e-8}},dr=function(e,t,i,r){return t.parent&&Bs(t),t._start=en((qr(i)?i:i||e!==zt?Di(e,i,t):e._time)+t._delay),t._end=en(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),z1(e,t,"_first","_last",e._sort?"_start":0),_m(t)||(e._recent=t),r||B1(e,t),e._ts<0&&Ld(e,e._tTime),e},H1=function(e,t){return(wi.ScrollTrigger||k_("scrollTrigger",t))&&wi.ScrollTrigger.create(t,e)},V1=function(e,t,i,r,s){if(G_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!xn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&I1!==vi.frame)return Ns.push(e),e._lazy=[s,r],1},gN=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},_m=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},vN=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&gN(e)&&!(!e._initted&&_m(e))||(e._ts<0||e._dp._ts<0)&&!_m(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=Yc(0,e._tDur,t),u=nl(l,a),e._yoyo&&u&1&&(o=1-o),u!==nl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||xn||r||e._zTime===Dn||!t&&e._zTime){if(!e._initted&&V1(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Dn:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&mm(e,t,i,!0),e._onUpdate&&!i&&Si(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Bs(e,1),!i&&!xn&&(Si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},xN=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},il=function(e,t,i,r){var s=e._repeat,o=en(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:en(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ld(e,e._tTime=e._tDur*a),e.parent&&bd(e),i||To(e.parent,e),e},nx=function(e){return e instanceof Vn?To(e):il(e,e._dur)},yN={_start:0,endTime:Rc,totalDuration:Rc},Di=function n(e,t,i){var r=e.labels,s=e._recent||yN,o=e.duration()>=vr?s.endTime(!1):e._dur,a,l,c;return mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Nn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ql=function(e,t,i){var r=qr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=si(l.vars.inherit)&&l.parent;o.immediateRender=si(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Jt(t[0],o,t[s+1])},Ys=function(e,t){return e||e===0?t(e):t},Yc=function(e,t,i){return i<e?e:i>t?t:i},bn=function(e,t){return!mn(e)||!(t=cN.exec(e))?"":t[1]},SN=function(e,t,i){return Ys(i,function(r){return Yc(e,t,r)})},gm=[].slice,G1=function(e,t){return e&&Sr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Sr(e[0]))&&!e.nodeType&&e!==ar},MN=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return mn(r)&&!t||G1(r,1)?(s=i).push.apply(s,zi(r)):i.push(r)})||i},zi=function(e,t,i){return Ft&&!t&&Ft.selector?Ft.selector(e):mn(e)&&!i&&(hm||!rl())?gm.call((t||F_).querySelectorAll(e),0):Nn(e)?MN(e,i):G1(e)?gm.call(e,0):e?[e]:[]},vm=function(e){return e=zi(e)[0]||Cc("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return zi(t,i.querySelectorAll?i:i===e?Cc("Invalid scope")||F_.createElement("div"):e)}},W1=function(e){return e.sort(function(){return .5-Math.random()})},j1=function(e){if(jt(e))return e;var t=Sr(e)?e:{each:e},i=wo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return mn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,p,g){var _=(g||t).length,m=o[_],h,x,v,S,C,A,M,b,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,vr])[1],!E){for(M=-1e8;M<(M=g[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(m=o[_]=[],h=l?Math.min(E,_)*u-.5:r%E,x=E===vr?0:l?_*d/E-.5:r/E|0,M=0,b=vr,A=0;A<_;A++)v=A%E-h,S=x-(A/E|0),m[A]=C=c?Math.abs(c==="y"?S:v):A1(v*v+S*S),C>M&&(M=C),C<b&&(b=C);r==="random"&&W1(m),m.max=M-b,m.min=b,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=bn(t.amount||t.each)||0,i=i&&_<0?tM(i):i}return _=(m[f]-m.min)/m.max||0,en(m.b+(i?i(_):_)*m.v)+m.u}},xm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=en(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(qr(i)?0:bn(i))}},X1=function(e,t){var i=Nn(e),r,s;return!i&&Sr(e)&&(r=i=e.radius||vr,e.values?(e=zi(e.values),(s=!qr(e[0]))&&(r*=r)):e=xm(e.increment)),Ys(t,i?jt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=vr,u=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:o,s||u===o||qr(o)?u:u+bn(o)}:xm(e))},Y1=function(e,t,i,r){return Ys(Nn(e)?!t:i===!0?!!(i=0):!r,function(){return Nn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},EN=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},TN=function(e,t){return function(i){return e(parseFloat(i))+(t||bn(i))}},wN=function(e,t,i){return q1(e,t,0,1,i)},$1=function(e,t,i){return Ys(i,function(r){return e[~~t(r)]})},AN=function n(e,t,i){var r=t-e;return Nn(e)?$1(e,n(0,e.length),t):Ys(i,function(s){return(r+(s-e)%r)%r+e})},CN=function n(e,t,i){var r=t-e,s=r*2;return Nn(e)?$1(e,n(0,e.length-1),t):Ys(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Pc=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?b1:dm),i+=e.substr(t,r-t)+Y1(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},q1=function(e,t,i,r,s){var o=t-e,a=r-i;return Ys(s,function(l){return i+((l-e)/o*a||0)})},RN=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=mn(e),a={},l,c,u,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Nn(e)&&!Nn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(n(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(f,~~g);return u[_](g-_)},i=t}else r||(e=tl(Nn(e)?[]:{},e));if(!u){for(l in t)V_.call(a,e,l,"get",t[l]);s=function(g){return X_(g,a)||(o?e.p:e)}}}return Ys(i,s)},ix=function(e,t,i){var r=e.labels,s=vr,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Si=function(e,t,i){var r=e.vars,s=r[t],o=Ft,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Ns.length&&Zf(),a&&(Ft=a),u=l?s.apply(c,l):s.call(c),Ft=o,u},Ul=function(e){return Bs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xn),e.progress()<1&&Si(e,"onInterrupt"),e},Aa,K1=[],Z1=function(e){if(e)if(e=!e.name&&e.default||e,O_()||e.headless){var t=e.name,i=jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Rc,render:X_,add:V_,kill:WN,modifier:GN,rawVars:0},o={targetTest:0,get:0,getSetter:j_,aliases:{},register:0};if(rl(),e!==r){if(mi[t])return;Ai(r,Ai(Qf(e,s),o)),tl(r.prototype,tl(s,Qf(e,o))),mi[r.prop=t]=r,e.targetTest&&(ff.push(r),z_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}N1(t,r),e.register&&e.register(ci,r,ai)}else K1.push(e)},St=255,Ol={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Zh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*St+.5|0},Q1=function(e,t,i){var r=e?qr(e)?[e>>16,e>>8&St,e&St]:0:Ol.black,s,o,a,l,c,u,d,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ol[e])r=Ol[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&St,r&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(dm),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Zh(l+1/3,s,o),r[1]=Zh(l,s,o),r[2]=Zh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(R1),i&&r.length<4&&(r[3]=1),r}else r=e.match(dm)||Ol.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/St,o=r[1]/St,a=r[2]/St,d=Math.max(s,o,a),f=Math.min(s,o,a),u=(d+f)/2,d===f?l=c=0:(p=d-f,c=u>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},J1=function(e){var t=[],i=[],r=-1;return e.split(Is).forEach(function(s){var o=s.match(wa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},rx=function(e,t,i){var r="",s=(e+r).match(Is),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=Q1(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=J1(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Is,"1").split(wa),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Is),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},Is=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ol)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),PN=/hsl[a]?\(/,eM=function(e){var t=e.join(" "),i;if(Is.lastIndex=0,Is.test(t))return i=PN.test(t),e[1]=rx(e[1],i),e[0]=rx(e[0],i,J1(e[1])),!0},bc,vi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,d,f,p,g=function _(m){var h=n()-r,x=m===!0,v,S,C,A;if((h>e||h<0)&&(i+=h-t),r+=h,C=r-i,v=C-o,(v>0||x)&&(A=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,o+=v+(v>=s?4:s-v),S=1),x||(l=c(_)),S)for(p=0;p<a.length;p++)a[p](C,f,A,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){L1&&(!hm&&O_()&&(ar=hm=window,F_=ar.document||{},wi.gsap=ci,(ar.gsapVersions||(ar.gsapVersions=[])).push(ci.version),D1(Kf||ar.GreenSockGlobals||!ar.gsap&&ar||{}),K1.forEach(Z1)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,o-d.time*1e3+1|0)},bc=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),bc=0,c=Rc},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,h,x){var v=h?function(S,C,A,M){m(S,C,A,M),d.remove(v)}:m;return d.remove(m),a[x?"unshift":"push"](v),rl(),v},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},d}(),rl=function(){return!bc&&vi.wake()},ot={},bN=/^[\d.\-M][\d.\-,\s]/,LN=/["']/g,DN=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(LN,"").trim():+c,r=l.substr(a+1).trim();return t},NN=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},IN=function(e){var t=(e+"").split("("),i=ot[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[DN(t[1])]:NN(e).split(",").map(F1)):ot._CE&&bN.test(e)?ot._CE("",e):i},tM=function(e){return function(t){return 1-e(1-t)}},nM=function n(e,t){for(var i=e._first,r;i;)i instanceof Vn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},wo=function(e,t){return e&&(jt(e)?e:ot[e]||IN(e))||t},Vo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return oi(e,function(a){ot[a]=wi[a]=s,ot[o=a.toLowerCase()]=i;for(var l in s)ot[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[a+"."+l]=s[l]}),s},iM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Qh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/fm*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*lN((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:iM(a);return s=fm/s,l.config=function(c,u){return n(e,c,u)},l},Jh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:iM(i);return r.config=function(s){return n(e,s)},r};oi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Vo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Vo("Elastic",Qh("in"),Qh("out"),Qh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Vo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Vo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Vo("Circ",function(n){return-(A1(1-n*n)-1)});Vo("Sine",function(n){return n===1?1:-aN(n*sN)+1});Vo("Back",Jh("in"),Jh("out"),Jh());ot.SteppedEase=ot.steps=wi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Dn;return function(a){return((r*Yc(0,o,a)|0)+s)*i}}};el.ease=ot["quad.out"];oi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return B_+=n+","+n+"Params,"});var rM=function(e,t){this.id=oN++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:U1,this.set=t?t.getSetter:j_},Lc=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,il(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),bc||vi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,il(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(rl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ld(this,i),!s._dp||s.parent||B1(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&dr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Dn||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),O1(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+tx(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+tx(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?nl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Jf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(Yc(-Math.abs(this._delay),this._tDur,s),r!==!1),bd(this),mN(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(rl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Dn&&(this._tTime-=Dn)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&dr(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(si(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Jf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=fN);var r=xn;return xn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),xn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,nx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,nx(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Di(this,i),si(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,si(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Dn)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=jt(i)?i:k1,a=function(){var c=r.then;r.then=null,jt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Ul(this)},n}();Ai(Lc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Vn=function(n){w1(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=si(i.sortChildren),zt&&dr(i.parent||zt,Lr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&H1(Lr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ql(0,arguments,this),this},t.from=function(r,s,o){return Ql(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ql(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Zl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Jt(r,s,Di(this,o),1),this},t.call=function(r,s,o){return dr(this,Jt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Jt(r,o,Di(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Zl(o).immediateRender=si(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,d){return a.startAt=o,Zl(a).immediateRender=si(a.immediateRender),this.staggerTo(r,s,a,l,c,u,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:en(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,p,g,_,m,h,x,v,S,C,A,M;if(this!==zt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,S=this._start,v=this._ts,h=!v,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=en(u%m),u===l?(_=this._repeat,f=c):(C=en(u/m),_=~~C,_&&_===C&&(f=c,_--),f>c&&(f=c)),C=nl(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),A&&_&1&&(f=c-f,M=1),_!==C&&!this._lock){var b=A&&C&1,E=b===(A&&_&1);if(_<C&&(b=!b),a=b?0:u%c?c:u,this._lock=1,this.render(a||(M?0:en(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Si(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;nM(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=xN(this,en(a),en(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!_&&(Si(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!h){x=0,g&&(u+=this._zTime=-1e-8);break}}p=g}else{p=this._last;for(var y=r<0?r:f;p;){if(g=p._prev,(p._act||y<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(y-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(y-p._start)*p._ts,s,o||xn&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!h){x=0,g&&(u+=this._zTime=y?-1e-8:Dn);break}}p=g}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-1e-8)._zTime=f>=a?1:-1,this._ts))return this._start=S,bd(this),this.render(r,s,o);this._onUpdate&&!s&&Si(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Bs(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Si(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(qr(s)||(s=Di(this,s,r)),!(r instanceof Lc)){if(Nn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(mn(r))return this.addLabel(r,s);if(jt(r))r=Jt.delayedCall(0,r);else return this}return this!==r?dr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Jt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return mn(r)?this.removeLabel(r):jt(r)?this.killTweensOf(r):(r.parent===this&&Pd(this,r),r===this._recent&&(this._recent=this._last),To(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=en(vi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Di(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Jt.delayedCall(0,s||Rc,o);return a.data="isPause",this._hasPause=1,dr(this,a,Di(this,r))},t.removePause=function(r){var s=this._first;for(r=Di(this,r);s;)s._start===r&&s.data==="isPause"&&Bs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)gs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=zi(r),l=this._first,c=qr(s),u;l;)l instanceof Jt?dN(l._targets,a)&&(c?(!gs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Di(o,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,p,g=Jt.to(o,Ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Dn,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&il(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,d||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ai({startAt:{time:Di(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),ix(this,Di(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),ix(this,Di(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Dn)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return To(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),To(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=vr,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,dr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;il(o,o===zt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(zt._ts&&(O1(zt,Jf(r,zt)),I1=vi.frame),vi.frame>=Jv){Jv+=Ei.autoSleep||120;var s=zt._first;if((!s||!s._ts)&&Ei.autoSleep&&vi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vi.sleep()}}},e}(Lc);Ai(Vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var UN=function(e,t,i,r,s,o,a){var l=new ai(this._pt,e,t,0,1,uM,null,s),c=0,u=0,d,f,p,g,_,m,h,x;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Pc(r)),o&&(x=[i,r],o(x,e,t),i=x[0],r=x[1]),f=i.match(qh)||[];d=qh.exec(r);)g=d[0],_=r.substring(c,d.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Fa(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=qh.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(P1.test(r)||h)&&(l.e=0),this._pt=l,l},V_=function(e,t,i,r,s,o,a,l,c,u){jt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:jt(d)?c?e[t.indexOf("set")||!jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,p=jt(d)?c?BN:lM:W_,g;if(mn(r)&&(~r.indexOf("random(")&&(r=Pc(r)),r.charAt(1)==="="&&(g=Fa(f,r)+(bn(f)||0),(g||g===0)&&(r=g))),!u||f!==r||ym)return!isNaN(f*r)&&r!==""?(g=new ai(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?VN:cM,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&k_(t,r),UN.call(this,e,t,f,r,p,l||Ei.stringFilter,c))},ON=function(e,t,i,r,s){if(jt(e)&&(e=Jl(e,s,t,i,r)),!Sr(e)||e.style&&e.nodeType||Nn(e)||C1(e))return mn(e)?Jl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Jl(e[a],s,t,i,r);return o},sM=function(e,t,i,r,s,o){var a,l,c,u;if(mi[e]&&(a=new mi[e]).init(s,a.rawVars?t[e]:ON(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ai(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Aa))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},gs,ym,G_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,h=e.parent,x=h&&h.data==="nested"?h.vars.targets:m,v=e._overwrite==="auto"&&!I_,S=e.timeline,C,A,M,b,E,y,U,O,I,G,j,q,$;if(S&&(!f||!s)&&(s="none"),e._ease=wo(s,el.ease),e._yEase=d?tM(wo(d===!0?s:d,el.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!S&&!!r.runBackwards,!S||f&&!r.stagger){if(O=m[0]?Eo(m[0]).harness:0,q=O&&r[O.prop],C=Qf(r,z_),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!p?_.render(-1,!0):_.revert(u&&g?uf:uN),_._lazy=0),o){if(Bs(e._startAt=Jt.set(m,Ai({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!_&&si(l),startAt:null,delay:0,onUpdate:c&&function(){return Si(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn||!a&&!p)&&e._startAt.revert(uf),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),M=Ai({overwrite:!1,data:"isFromStart",lazy:a&&!_&&si(l),immediateRender:a,stagger:0,parent:h},C),q&&(M[O.prop]=q),Bs(e._startAt=Jt.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn?e._startAt.revert(uf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Dn,Dn);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&si(l)||l&&!g,A=0;A<m.length;A++){if(E=m[A],U=E._gsap||H_(m)[A]._gsap,e._ptLookup[A]=G={},pm[U.id]&&Ns.length&&Zf(),j=x===m?A:x.indexOf(E),O&&(I=new O).init(E,q||C,e,j,x)!==!1&&(e._pt=b=new ai(e._pt,E,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(N){G[N]=b}),I.priority&&(y=1)),!O||q)for(M in C)mi[M]&&(I=sM(M,C,e,j,E,x))?I.priority&&(y=1):G[M]=b=V_.call(e,E,M,"get",C[M],j,x,0,r.stringFilter);e._op&&e._op[A]&&e.kill(E,e._op[A]),v&&e._pt&&(gs=e,zt.killTweensOf(E,G,e.globalTime(t)),$=!e.parent,gs=0),e._pt&&l&&(pm[U.id]=1)}y&&fM(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,f&&t<=0&&S.render(vr,!0,!0)},FN=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,p;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(u=f[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ym=1,e.vars[t]="+=0",G_(e,a),ym=0,l?Cc(t+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)d=c[p],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,d.e&&(d.e=Yt(i)+bn(d.e)),d.b&&(d.b=u.s+bn(d.b))},kN=function(e,t){var i=e[0]?Eo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=tl({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},zN=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Nn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Jl=function(e,t,i,r,s){return jt(e)?e.call(t,i,r,s):mn(e)&&~e.indexOf("random(")?Pc(e):e},oM=B_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",aM={};oi(oM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return aM[n]=1});var Jt=function(n){w1(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Zl(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,h=l.yoyoEase,x=r.parent||zt,v=(Nn(i)||C1(i)?qr(i[0]):"length"in r)?[i]:zi(i),S,C,A,M,b,E,y,U;if(a._targets=v.length?H_(v):Cc("GSAP target "+i+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||Fu(c)||Fu(u)){if(r=a.vars,S=a.timeline=new Vn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:v}),S.kill(),S.parent=S._dp=Lr(a),S._start=0,f||Fu(c)||Fu(u)){if(M=v.length,y=f&&j1(f),Sr(f))for(b in f)~oM.indexOf(b)&&(U||(U={}),U[b]=f[b]);for(C=0;C<M;C++)A=Qf(r,aM),A.stagger=0,h&&(A.yoyoEase=h),U&&tl(A,U),E=v[C],A.duration=+Jl(c,Lr(a),C,E,v),A.delay=(+Jl(u,Lr(a),C,E,v)||0)-a._delay,!f&&M===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),S.to(E,A,y?y(C,E,v):0),S._ease=ot.none;S.duration()?c=u=0:a.timeline=0}else if(g){Zl(Ai(S.vars.defaults,{ease:"none"})),S._ease=wo(g.ease||r.ease||"none");var O=0,I,G,j;if(Nn(g))g.forEach(function(q){return S.to(v,q,">")}),S.duration();else{A={};for(b in g)b==="ease"||b==="easeEach"||zN(b,g[b],A,g.easeEach);for(b in A)for(I=A[b].sort(function(q,$){return q.t-$.t}),O=0,C=0;C<I.length;C++)G=I[C],j={ease:G.e,duration:(G.t-(C?I[C-1].t:0))/100*c},j[b]=G.v,S.to(v,j,O),O+=j.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return p===!0&&!I_&&(gs=Lr(a),zt.killTweensOf(v),gs=0),dr(x,Lr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!g&&a._start===en(x._time)&&si(d)&&_N(Lr(a))&&x.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),m&&H1(Lr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-Dn&&!u?l:r<Dn?0:r,f,p,g,_,m,h,x,v,S;if(!c)vN(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=en(d%_),d===l?(g=this._repeat,f=c):(m=en(d/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),h=this._yoyo&&g&1,h&&(S=this._yEase,f=c-f),m=nl(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&(v&&this._yEase&&nM(v,h),this.vars.repeatRefresh&&!h&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(en(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(V1(this,u?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(S||this._ease)(f/c),this._from&&(this.ratio=x=1-x),f&&!a&&!s&&!g&&(Si(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;v&&v.render(r<0?r:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&mm(this,r,s,o),Si(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Si(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&mm(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Bs(this,1),!s&&!(u&&!a)&&(d||a||h)&&(Si(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){bc||vi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||G_(this,c),u=this._ease(c/this._dur),FN(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Ld(this,0),this.parent||z1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ul(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,gs&&gs.vars.overwrite!==!0)._first||Ul(this),this.parent&&o!==this.timeline.totalDuration()&&il(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?zi(r):a,c=this._ptLookup,u=this._pt,d,f,p,g,_,m,h;if((!s||s==="all")&&pN(a,l))return s==="all"&&(this._pt=0),Ul(this);for(d=this._op=this._op||[],s!=="all"&&(mn(s)&&(_={},oi(s,function(x){return _[x]=1}),s=_),s=kN(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){f=c[h],s==="all"?(d[h]=s,g=f,p={}):(p=d[h]=d[h]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Pd(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Ul(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ql(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ql(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return zt.killTweensOf(r,s,o)},e}(Lc);Ai(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});oi("staggerTo,staggerFrom,staggerFromTo",function(n){Jt[n]=function(){var e=new Vn,t=gm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var W_=function(e,t,i){return e[t]=i},lM=function(e,t,i){return e[t](i)},BN=function(e,t,i,r){return e[t](r.fp,i)},HN=function(e,t,i){return e.setAttribute(t,i)},j_=function(e,t){return jt(e[t])?lM:U_(e[t])&&e.setAttribute?HN:W_},cM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},VN=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},uM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},X_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},GN=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},WN=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Pd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},jN=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},fM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ai=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||cM,this.d=l||this,this.set=c||W_,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=jN,this.m=i,this.mt=s,this.tween=r},n}();oi(B_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return z_[n]=1});wi.TweenMax=wi.TweenLite=Jt;wi.TimelineLite=wi.TimelineMax=Vn;zt=new Vn({sortChildren:!1,defaults:el,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=eM;var Ao=[],df={},XN=[],sx=0,YN=0,ep=function(e){return(df[e]||XN).map(function(t){return t()})},Sm=function(){var e=Date.now(),t=[];e-sx>2&&(ep("matchMediaInit"),Ao.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=ar.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),ep("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),sx=e,ep("matchMedia"))},dM=function(){function n(t,i){this.selector=i&&vm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=YN++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){jt(i)&&(s=r,r=i,i=jt);var o=this,a=function(){var c=Ft,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=vm(s)),Ft=o,d=r.apply(o,arguments),jt(d)&&o._r.push(d),Ft=c,o.selector=u,o.isReverted=!1,d};return o.last=a,i===jt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ft;Ft=null,i(this),Ft=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Jt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Jt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Ao.length;o--;)Ao[o].id===this.id&&Ao.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),$N=function(){function n(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Sr(i)||(i={matches:i});var o=new dM(0,s||this.scope),a=o.conditions={},l,c,u;Ft&&!o.selector&&(o.selector=Ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=ar.matchMedia(i[c]),l&&(Ao.indexOf(o)<0&&Ao.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Sm):l.addEventListener("change",Sm)));return u&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),ed={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Z1(r)})},timeline:function(e){return new Vn(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,i,r){mn(e)&&(e=zi(e)[0]);var s=Eo(e||{}).get,o=i?k1:F1;return i==="native"&&(i=""),e&&(t?o((mi[t]&&mi[t].get||s)(e,t,i,r)):function(a,l,c){return o((mi[a]&&mi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=zi(e),e.length>1){var r=e.map(function(u){return ci.quickSetter(u,t,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var o=mi[t],a=Eo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;Aa._pt=0,d.init(e,i?u+i:u,Aa,0,[e]),d.render(1,d),Aa._pt&&X_(1,Aa)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=ci.to(e,Ai((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=wo(e.ease,el.ease)),ex(el,e||{})},config:function(e){return ex(Ei,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!mi[a]&&!wi[a]&&Cc(t+" effect requires "+a+" plugin.")}),Kh[t]=function(a,l,c){return i(zi(a),Ai(l||{},s),c)},o&&(Vn.prototype[t]=function(a,l,c){return this.add(Kh[t](a,Sr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=wo(t)},parseEase:function(e,t){return arguments.length?wo(e,t):ot},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Vn(e),r,s;for(i.smoothChildTiming=si(e.smoothChildTiming),zt.remove(i),i._dp=0,i._time=i._tTime=zt._time,r=zt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Jt&&r.vars.onComplete===r._targets[0]))&&dr(i,r,r._start-r._delay),r=s;return dr(zt,i,0),i},context:function(e,t){return e?new dM(e,t):Ft},matchMedia:function(e){return new $N(e)},matchMediaRefresh:function(){return Ao.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Sm()},addEventListener:function(e,t){var i=df[e]||(df[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=df[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:AN,wrapYoyo:CN,distribute:j1,random:Y1,snap:X1,normalize:wN,getUnit:bn,clamp:SN,splitColor:Q1,toArray:zi,selector:vm,mapRange:q1,pipe:EN,unitize:TN,interpolate:RN,shuffle:W1},install:D1,effects:Kh,ticker:vi,updateRoot:Vn.updateRoot,plugins:mi,globalTimeline:zt,core:{PropTween:ai,globals:N1,Tween:Jt,Timeline:Vn,Animation:Lc,getCache:Eo,_removeLinkedListItem:Pd,reverting:function(){return xn},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return I_=e}}};oi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ed[n]=Jt[n]});vi.add(Vn.updateRoot);Aa=ed.to({},{duration:0});var qN=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},KN=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=qN(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},tp=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(mn(s)&&(l={},oi(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}KN(a,s)}}}},ci=ed.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)xn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},tp("roundProps",xm),tp("modifiers"),tp("snap",X1))||ed;Jt.version=Vn.version=ci.version="3.12.7";L1=1;O_()&&rl();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ox,vs,ka,Y_,xo,ax,$_,ZN=function(){return typeof window<"u"},Kr={},lo=180/Math.PI,za=Math.PI/180,aa=Math.atan2,lx=1e8,q_=/([A-Z])/g,QN=/(left|right|width|margin|padding|x)/i,JN=/[\s,\(]\S/,pr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Mm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},eI=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tI=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nI=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},hM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},pM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},iI=function(e,t,i){return e.style[t]=i},rI=function(e,t,i){return e.style.setProperty(t,i)},sI=function(e,t,i){return e._gsap[t]=i},oI=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},aI=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},lI=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Bt="transform",li=Bt+"Origin",cI=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Kr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=pr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Nr(r,a)}):this.tfm[e]=o.x?o[e]:Nr(r,e),e===li&&(this.tfm.zOrigin=o.zOrigin);else return pr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(li,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},mM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},uI=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(q_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=$_(),(!s||!s.isStart)&&!i[Bt]&&(mM(i),r.zOrigin&&i[li]&&(i[li]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},_M=function(e,t){var i={target:e,props:[],revert:uI,save:cI};return e._gsap||ci.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},gM,Em=function(e,t){var i=vs.createElementNS?vs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vs.createElement(e);return i&&i.style?i:vs.createElement(e)},xr=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(q_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,sl(t)||t,1)||""},cx="O,Moz,ms,Ms,Webkit".split(","),sl=function(e,t,i){var r=t||xo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(cx[o]+e in s););return o<0?null:(o===3?"ms":o>=0?cx[o]:"")+e},Tm=function(){ZN()&&window.document&&(ox=window,vs=ox.document,ka=vs.documentElement,xo=Em("div")||{style:{}},Em("div"),Bt=sl(Bt),li=Bt+"Origin",xo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gM=!!sl("perspective"),$_=ci.core.reverting,Y_=1)},ux=function(e){var t=e.ownerSVGElement,i=Em("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ka.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ka.removeChild(i),s},fx=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},vM=function(e){var t,i;try{t=e.getBBox()}catch{t=ux(e),i=1}return t&&(t.width||t.height)||i||(t=ux(e)),t&&!t.width&&!t.x&&!t.y?{x:+fx(e,["x","cx","x1"])||0,y:+fx(e,["y","cy","y1"])||0,width:0,height:0}:t},xM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vM(e))},Oo=function(e,t){if(t){var i=e.style,r;t in Kr&&t!==li&&(t=Bt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(q_,"-$1").toLowerCase())):i.removeAttribute(t)}},xs=function(e,t,i,r,s,o){var a=new ai(e._pt,t,i,0,1,o?pM:hM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},dx={deg:1,rad:1,turn:1},fI={grid:1,flex:1},Hs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=xo.style,l=QN.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",g,_,m,h;if(r===o||!s||dx[r]||dx[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&xM(e),(p||o==="%")&&(Kr[t]||~t.indexOf("adius")))return g=h?e.getBBox()[l?"width":"height"]:e[u],Yt(p?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,h&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===vs||!_.appendChild)&&(_=vs.body),m=_._gsap,m&&p&&m.width&&l&&m.time===vi.time&&!m.uncache)return Yt(s/m.width*d);if(p&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=d+r,g=e[u],x?e.style[t]=x:Oo(e,t)}else(p||o==="%")&&!fI[xr(_,"display")]&&(a.position=xr(e,"position")),_===e&&(a.position="static"),_.appendChild(xo),g=xo[u],_.removeChild(xo),a.position="absolute";return l&&p&&(m=Eo(_),m.time=vi.time,m.width=_[u]),Yt(f?g*s/d:g&&s?d/g*s:0)},Nr=function(e,t,i,r){var s;return Y_||Tm(),t in pr&&t!=="transform"&&(t=pr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Kr[t]&&t!=="transform"?(s=Nc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:nd(xr(e,li))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=td[t]&&td[t](e,t,i)||xr(e,t)||U1(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Hs(e,t,s,i)+i:s},dI=function(e,t,i,r){if(!i||i==="none"){var s=sl(t,e,1),o=s&&xr(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=xr(e,"borderTopColor"))}var a=new ai(this._pt,e.style,t,0,1,uM),l=0,c=0,u,d,f,p,g,_,m,h,x,v,S,C;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=xr(e,t)||r,_?e.style[t]=_:Oo(e,t)),u=[i,r],eM(u),i=u[0],r=u[1],f=i.match(wa)||[],C=r.match(wa)||[],C.length){for(;d=wa.exec(r);)m=d[0],x=r.substring(l,d.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,S=_.substr((p+"").length),m.charAt(1)==="="&&(m=Fa(p,m)+S),h=parseFloat(m),v=m.substr((h+"").length),l=wa.lastIndex-v.length,v||(v=v||Ei.units[t]||S,l===r.length&&(r+=v,a.e+=v)),S!==v&&(p=Hs(e,t,_,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:p,c:h-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?pM:hM;return P1.test(r)&&(a.e=0),this._pt=a,a},hx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hI=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=hx[i]||i,t[1]=hx[r]||r,t.join(" ")},pI=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Kr[a]&&(l=1,a=a==="transformOrigin"?li:Bt),Oo(i,a);l&&(Oo(i,Bt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Nc(i,1),o.uncache=1,mM(r)))}},td={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ai(e._pt,t,i,0,0,pI);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Dc=[1,0,0,1,0,0],yM={},SM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},px=function(e){var t=xr(e,Bt);return SM(t)?Dc:t.substr(7).match(R1).map(Yt)},K_=function(e,t){var i=e._gsap||Eo(e),r=e.style,s=px(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Dc:s):(s===Dc&&!e.offsetParent&&e!==ka&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ka.appendChild(e)),s=px(e),l?r.display=l:Oo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ka.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},wm=function(e,t,i,r,s,o){var a=e._gsap,l=s||K_(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],h=l[4],x=l[5],v=t.split(" "),S=parseFloat(v[0])||0,C=parseFloat(v[1])||0,A,M,b,E;i?l!==Dc&&(M=p*m-g*_)&&(b=S*(m/M)+C*(-_/M)+(_*x-m*h)/M,E=S*(-g/M)+C*(p/M)-(p*x-g*h)/M,S=b,C=E):(A=vM(e),S=A.x+(~v[0].indexOf("%")?S/100*A.width:S),C=A.y+(~(v[1]||v[0]).indexOf("%")?C/100*A.height:C)),r||r!==!1&&a.smooth?(h=S-c,x=C-u,a.xOffset=d+(h*p+x*_)-h,a.yOffset=f+(h*g+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[li]="0px 0px",o&&(xs(o,a,"xOrigin",c,S),xs(o,a,"yOrigin",u,C),xs(o,a,"xOffset",d,a.xOffset),xs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+C)},Nc=function(e,t){var i=e._gsap||new rM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=xr(e,li)||"0",u,d,f,p,g,_,m,h,x,v,S,C,A,M,b,E,y,U,O,I,G,j,q,$,N,H,L,te,me,Ve,W,ee;return u=d=f=_=m=h=x=v=S=0,p=g=1,i.svg=!!(e.getCTM&&xM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),r.scale=r.rotate=r.translate="none"),M=K_(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),c=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),wm(e,$||c,!!$||i.originIsAbsolute,i.smooth!==!1,M)),C=i.xOrigin||0,A=i.yOrigin||0,M!==Dc&&(U=M[0],O=M[1],I=M[2],G=M[3],u=j=M[4],d=q=M[5],M.length===6?(p=Math.sqrt(U*U+O*O),g=Math.sqrt(G*G+I*I),_=U||O?aa(O,U)*lo:0,x=I||G?aa(I,G)*lo+_:0,x&&(g*=Math.abs(Math.cos(x*za))),i.svg&&(u-=C-(C*U+A*I),d-=A-(C*O+A*G))):(ee=M[6],Ve=M[7],L=M[8],te=M[9],me=M[10],W=M[11],u=M[12],d=M[13],f=M[14],b=aa(ee,me),m=b*lo,b&&(E=Math.cos(-b),y=Math.sin(-b),$=j*E+L*y,N=q*E+te*y,H=ee*E+me*y,L=j*-y+L*E,te=q*-y+te*E,me=ee*-y+me*E,W=Ve*-y+W*E,j=$,q=N,ee=H),b=aa(-I,me),h=b*lo,b&&(E=Math.cos(-b),y=Math.sin(-b),$=U*E-L*y,N=O*E-te*y,H=I*E-me*y,W=G*y+W*E,U=$,O=N,I=H),b=aa(O,U),_=b*lo,b&&(E=Math.cos(b),y=Math.sin(b),$=U*E+O*y,N=j*E+q*y,O=O*E-U*y,q=q*E-j*y,U=$,j=N),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,h=180-h),p=Yt(Math.sqrt(U*U+O*O+I*I)),g=Yt(Math.sqrt(q*q+ee*ee)),b=aa(j,q),x=Math.abs(b)>2e-4?b*lo:0,S=W?1/(W<0?-W:W):0),i.svg&&($=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!SM(xr(e,Bt)),$&&e.setAttribute("transform",$))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(p*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Yt(p),i.scaleY=Yt(g),i.rotation=Yt(_)+a,i.rotationX=Yt(m)+a,i.rotationY=Yt(h)+a,i.skewX=x+a,i.skewY=v+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[li]=nd(c)),i.xOffset=i.yOffset=0,i.force3D=Ei.force3D,i.renderTransform=i.svg?_I:gM?MM:mI,i.uncache=0,i},nd=function(e){return(e=e.split(" "))[0]+" "+e[1]},np=function(e,t,i){var r=bn(t);return Yt(parseFloat(t)+parseFloat(Hs(e,"x",i+"px",r)))+r},mI=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,MM(e,t)},no="0deg",Cl="0px",io=") ",MM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,h=i.force3D,x=i.target,v=i.zOrigin,S="",C=h==="auto"&&e&&e!==1||h===!0;if(v&&(d!==no||u!==no)){var A=parseFloat(u)*za,M=Math.sin(A),b=Math.cos(A),E;A=parseFloat(d)*za,E=Math.cos(A),o=np(x,o,M*E*-v),a=np(x,a,-Math.sin(A)*-v),l=np(x,l,b*E*-v+v)}m!==Cl&&(S+="perspective("+m+io),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(C||o!==Cl||a!==Cl||l!==Cl)&&(S+=l!==Cl||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+io),c!==no&&(S+="rotate("+c+io),u!==no&&(S+="rotateY("+u+io),d!==no&&(S+="rotateX("+d+io),(f!==no||p!==no)&&(S+="skew("+f+", "+p+io),(g!==1||_!==1)&&(S+="scale("+g+", "+_+io),x.style[Bt]=S||"translate(0, 0)"},_I=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,h=i.yOffset,x=i.forceCSS,v=parseFloat(o),S=parseFloat(a),C,A,M,b,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=za,c*=za,C=Math.cos(l)*d,A=Math.sin(l)*d,M=Math.sin(l-c)*-f,b=Math.cos(l-c)*f,c&&(u*=za,E=Math.tan(c-u),E=Math.sqrt(1+E*E),M*=E,b*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),C*=E,A*=E)),C=Yt(C),A=Yt(A),M=Yt(M),b=Yt(b)):(C=d,b=f,A=M=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=Hs(p,"x",o,"px"),S=Hs(p,"y",a,"px")),(g||_||m||h)&&(v=Yt(v+g-(g*C+_*M)+m),S=Yt(S+_-(g*A+_*b)+h)),(r||s)&&(E=p.getBBox(),v=Yt(v+r/100*E.width),S=Yt(S+s/100*E.height)),E="matrix("+C+","+A+","+M+","+b+","+v+","+S+")",p.setAttribute("transform",E),x&&(p.style[Bt]=E)},gI=function(e,t,i,r,s){var o=360,a=mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?lo:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),d==="cw"&&c<0?c=(c+o*lx)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*lx)%o-~~(c/o)*o)),e._pt=f=new ai(e._pt,t,i,r,c,eI),f.e=u,f.u="deg",e._props.push(i),f},mx=function(e,t){for(var i in t)e[i]=t[i];return e},vI=function(e,t,i){var r=mx({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,d,f,p,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Bt]=t,a=Nc(i,1),Oo(i,Bt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Bt],o[Bt]=t,a=Nc(i,1),o[Bt]=c);for(l in Kr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=bn(c),g=bn(u),d=p!==g?Hs(i,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new ai(e._pt,a,l,d,f-d,Mm),e._pt.u=g||0,e._props.push(l));mx(a,r)};oi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});td[e>1?"border"+n:n]=function(a,l,c,u,d){var f,p;if(arguments.length<4)return f=o.map(function(g){return Nr(a,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},o.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,d)}});var EM={name:"css",register:Tm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,d,f,p,g,_,m,h,x,v,S,C,A,M,b;Y_||Tm(),this.styles=this.styles||_M(e),b=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(mi[_]&&sM(_,t,i,r,e,s)))){if(p=typeof u,g=td[_],p==="function"&&(u=u.call(i,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Pc(u)),g)g(this,e,_,u,i)&&(M=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Is.lastIndex=0,Is.test(c)||(m=bn(c),h=bn(u)),h?m!==h&&(c=Hs(e,_,c,h)+h):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),b.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],mn(c)&&~c.indexOf("random(")&&(c=Pc(c)),bn(c+"")||c==="auto"||(c+=Ei.units[_]||bn(Nr(e,_))||""),(c+"").charAt(1)==="="&&(c=Nr(e,_))):c=Nr(e,_),f=parseFloat(c),x=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),d=parseFloat(u),_ in pr&&(_==="autoAlpha"&&(f===1&&Nr(e,"visibility")==="hidden"&&d&&(f=0),b.push("visibility",0,a.visibility),xs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=pr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Kr,v){if(this.styles.save(_),S||(C=e._gsap,C.renderTransform&&!t.parseTransform||Nc(e,t.parseTransform),A=t.smoothOrigin!==!1&&C.smooth,S=this._pt=new ai(this._pt,a,Bt,0,1,C.renderTransform,C,0,-1),S.dep=1),_==="scale")this._pt=new ai(this._pt,C,"scaleY",C.scaleY,(x?Fa(C.scaleY,x+d):d)-C.scaleY||0,Mm),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){b.push(li,0,a[li]),u=hI(u),C.svg?wm(e,u,0,A,0,this):(h=parseFloat(u.split(" ")[2])||0,h!==C.zOrigin&&xs(this,C,"zOrigin",C.zOrigin,h),xs(this,a,_,nd(c),nd(u)));continue}else if(_==="svgOrigin"){wm(e,u,1,A,0,this);continue}else if(_ in yM){gI(this,C,_,f,x?Fa(f,x+u):u);continue}else if(_==="smoothOrigin"){xs(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){vI(this,u,e);continue}}else _ in a||(_=sl(_)||_);if(v||(d||d===0)&&(f||f===0)&&!JN.test(u)&&_ in a)m=(c+"").substr((f+"").length),d||(d=0),h=bn(u)||(_ in Ei.units?Ei.units[_]:m),m!==h&&(f=Hs(e,_,c,h)),this._pt=new ai(this._pt,v?C:a,_,f,(x?Fa(f,x+d):d)-f,!v&&(h==="px"||_==="zIndex")&&t.autoRound!==!1?nI:Mm),this._pt.u=h||0,m!==h&&h!=="%"&&(this._pt.b=c,this._pt.r=tI);else if(_ in a)dI.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,r,s);else if(_!=="parseTransform"){k_(_,u);continue}v||(_ in a?b.push(_,0,a[_]):typeof e[_]=="function"?b.push(_,2,e[_]()):b.push(_,1,c||e[_])),o.push(_)}}M&&fM(this)},render:function(e,t){if(t.tween._time||!$_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Nr,aliases:pr,getSetter:function(e,t,i){var r=pr[t];return r&&r.indexOf(",")<0&&(t=r),t in Kr&&t!==li&&(e._gsap.x||Nr(e,"x"))?i&&ax===i?t==="scale"?oI:sI:(ax=i||{})&&(t==="scale"?aI:lI):e.style&&!U_(e.style[t])?iI:~t.indexOf("-")?rI:j_(e,t)},core:{_removeProperty:Oo,_getMatrix:K_}};ci.utils.checkPrefix=sl;ci.core.getStyleSaver=_M;(function(n,e,t,i){var r=oi(n+","+e+","+t,function(s){Kr[s]=1});oi(e,function(s){Ei.units[s]="deg",yM[s]=1}),pr[r[13]]=n+","+e,oi(i,function(s){var o=s.split(":");pr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");oi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ei.units[n]="px"});ci.registerPlugin(EM);var TM=ci.registerPlugin(EM)||ci;TM.core.Tween;function xI(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function yI(n,e,t){return e&&xI(n.prototype,e),n}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var gn,hf,xi,ys,Ss,Ba,wM,co,ec,AM,Br,qi,CM,RM=function(){return gn||typeof window<"u"&&(gn=window.gsap)&&gn.registerPlugin&&gn},PM=1,Ca=[],tt=[],yr=[],tc=Date.now,Am=function(e,t){return t},SI=function(){var e=ec.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,tt),r.push.apply(r,yr),tt=i,yr=r,Am=function(o,a){return t[o](a)}},Us=function(e,t){return~yr.indexOf(e)&&yr[yr.indexOf(e)+1][t]},nc=function(e){return!!~AM.indexOf(e)},On=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Un=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},ku="scrollLeft",zu="scrollTop",Cm=function(){return Br&&Br.isPressed||tt.cache++},id=function(e,t){var i=function r(s){if(s||s===0){PM&&(xi.history.scrollRestoration="manual");var o=Br&&Br.isPressed;s=r.v=Math.round(s)||(Br&&Br.iOS?1:0),e(s),r.cacheID=tt.cache,o&&Am("ss",s)}else(t||tt.cache!==r.cacheID||Am("ref"))&&(r.cacheID=tt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Gn={s:ku,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:id(function(n){return arguments.length?xi.scrollTo(n,on.sc()):xi.pageXOffset||ys[ku]||Ss[ku]||Ba[ku]||0})},on={s:zu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Gn,sc:id(function(n){return arguments.length?xi.scrollTo(Gn.sc(),n):xi.pageYOffset||ys[zu]||Ss[zu]||Ba[zu]||0})},Kn=function(e,t){return(t&&t._ctx&&t._ctx.selector||gn.utils.toArray)(e)[0]||(typeof e=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Vs=function(e,t){var i=t.s,r=t.sc;nc(e)&&(e=ys.scrollingElement||Ss);var s=tt.indexOf(e),o=r===on.sc?1:2;!~s&&(s=tt.push(e)-1),tt[s+o]||On(e,"scroll",Cm);var a=tt[s+o],l=a||(tt[s+o]=id(Us(e,i),!0)||(nc(e)?r:id(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=gn.getProperty(e,"scrollBehavior")==="smooth"),l},Rm=function(e,t,i){var r=e,s=e,o=tc(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=tc();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(g){var _=a,m=s,h=tc();return(g||g===0)&&g!==r&&u(g),o===a||h-a>c?0:(r+(i?m:-m))/((i?h:o)-_)*1e3};return{update:u,reset:d,getVelocity:f}},Rl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},_x=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},bM=function(){ec=gn.core.globals().ScrollTrigger,ec&&ec.core&&SI()},LM=function(e){return gn=e||RM(),!hf&&gn&&typeof document<"u"&&document.body&&(xi=window,ys=document,Ss=ys.documentElement,Ba=ys.body,AM=[xi,ys,Ss,Ba],gn.utils.clamp,CM=gn.core.context||function(){},co="onpointerenter"in Ba?"pointer":"mouse",wM=qt.isTouch=xi.matchMedia&&xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,qi=qt.eventTypes=("ontouchstart"in Ss?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ss?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return PM=0},500),bM(),hf=1),hf};Gn.op=on;tt.cache=0;var qt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){hf||LM(gn)||console.warn("Please gsap.registerPlugin(Observer)"),ec||bM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,d=i.onStop,f=i.onStopDelay,p=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,h=i.onDragEnd,x=i.onDrag,v=i.onPress,S=i.onRelease,C=i.onRight,A=i.onLeft,M=i.onUp,b=i.onDown,E=i.onChangeX,y=i.onChangeY,U=i.onChange,O=i.onToggleX,I=i.onToggleY,G=i.onHover,j=i.onHoverEnd,q=i.onMove,$=i.ignoreCheck,N=i.isNormalizer,H=i.onGestureStart,L=i.onGestureEnd,te=i.onWheel,me=i.onEnable,Ve=i.onDisable,W=i.onClick,ee=i.scrollSpeed,le=i.capture,ie=i.allowClicks,Ce=i.lockAxis,be=i.onLockAxis;this.target=a=Kn(a)||Ss,this.vars=i,p&&(p=gn.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,ee=ee||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(xi.getComputedStyle(Ba).lineHeight)||22);var Ge,k,Fe,ce,We,we,je,T=this,w=0,Y=0,Z=i.passive||!u&&i.passive!==!1,K=Vs(a,Gn),J=Vs(a,on),Re=K(),re=J(),pe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&qi[0]==="pointerdown",Le=nc(a),ne=a.ownerDocument||ys,de=[0,0,0],De=[0,0,0],_e=0,Se=function(){return _e=tc()},Ne=function(Te,Ke){return(T.event=Te)&&p&&~p.indexOf(Te.target)||Ke&&pe&&Te.pointerType!=="touch"||$&&$(Te,Ke)},Qe=function(){T._vx.reset(),T._vy.reset(),k.pause(),d&&d(T)},qe=function(){var Te=T.deltaX=_x(de),Ke=T.deltaY=_x(De),ue=Math.abs(Te)>=r,Be=Math.abs(Ke)>=r;U&&(ue||Be)&&U(T,Te,Ke,de,De),ue&&(C&&T.deltaX>0&&C(T),A&&T.deltaX<0&&A(T),E&&E(T),O&&T.deltaX<0!=w<0&&O(T),w=T.deltaX,de[0]=de[1]=de[2]=0),Be&&(b&&T.deltaY>0&&b(T),M&&T.deltaY<0&&M(T),y&&y(T),I&&T.deltaY<0!=Y<0&&I(T),Y=T.deltaY,De[0]=De[1]=De[2]=0),(ce||Fe)&&(q&&q(T),Fe&&(m&&Fe===1&&m(T),x&&x(T),Fe=0),ce=!1),we&&!(we=!1)&&be&&be(T),We&&(te(T),We=!1),Ge=0},nt=function(Te,Ke,ue){de[ue]+=Te,De[ue]+=Ke,T._vx.update(Te),T._vy.update(Ke),c?Ge||(Ge=requestAnimationFrame(qe)):qe()},ut=function(Te,Ke){Ce&&!je&&(T.axis=je=Math.abs(Te)>Math.abs(Ke)?"x":"y",we=!0),je!=="y"&&(de[2]+=Te,T._vx.update(Te,!0)),je!=="x"&&(De[2]+=Ke,T._vy.update(Ke,!0)),c?Ge||(Ge=requestAnimationFrame(qe)):qe()},ye=function(Te){if(!Ne(Te,1)){Te=Rl(Te,u);var Ke=Te.clientX,ue=Te.clientY,Be=Ke-T.x,Ie=ue-T.y,ze=T.isDragging;T.x=Ke,T.y=ue,(ze||(Be||Ie)&&(Math.abs(T.startX-Ke)>=s||Math.abs(T.startY-ue)>=s))&&(Fe=ze?2:1,ze||(T.isDragging=!0),ut(Be,Ie))}},D=T.onPress=function(Ue){Ne(Ue,1)||Ue&&Ue.button||(T.axis=je=null,k.pause(),T.isPressed=!0,Ue=Rl(Ue),w=Y=0,T.startX=T.x=Ue.clientX,T.startY=T.y=Ue.clientY,T._vx.reset(),T._vy.reset(),On(N?a:ne,qi[1],ye,Z,!0),T.deltaX=T.deltaY=0,v&&v(T))},Q=T.onRelease=function(Ue){if(!Ne(Ue,1)){Un(N?a:ne,qi[1],ye,!0);var Te=!isNaN(T.y-T.startY),Ke=T.isDragging,ue=Ke&&(Math.abs(T.x-T.startX)>3||Math.abs(T.y-T.startY)>3),Be=Rl(Ue);!ue&&Te&&(T._vx.reset(),T._vy.reset(),u&&ie&&gn.delayedCall(.08,function(){if(tc()-_e>300&&!Ue.defaultPrevented){if(Ue.target.click)Ue.target.click();else if(ne.createEvent){var Ie=ne.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,xi,1,Be.screenX,Be.screenY,Be.clientX,Be.clientY,!1,!1,!1,!1,0,null),Ue.target.dispatchEvent(Ie)}}})),T.isDragging=T.isGesturing=T.isPressed=!1,d&&Ke&&!N&&k.restart(!0),Fe&&qe(),h&&Ke&&h(T),S&&S(T,ue)}},ae=function(Te){return Te.touches&&Te.touches.length>1&&(T.isGesturing=!0)&&H(Te,T.isDragging)},ve=function(){return(T.isGesturing=!1)||L(T)},Me=function(Te){if(!Ne(Te)){var Ke=K(),ue=J();nt((Ke-Re)*ee,(ue-re)*ee,1),Re=Ke,re=ue,d&&k.restart(!0)}},Je=function(Te){if(!Ne(Te)){Te=Rl(Te,u),te&&(We=!0);var Ke=(Te.deltaMode===1?l:Te.deltaMode===2?xi.innerHeight:1)*g;nt(Te.deltaX*Ke,Te.deltaY*Ke,0),d&&!N&&k.restart(!0)}},ct=function(Te){if(!Ne(Te)){var Ke=Te.clientX,ue=Te.clientY,Be=Ke-T.x,Ie=ue-T.y;T.x=Ke,T.y=ue,ce=!0,d&&k.restart(!0),(Be||Ie)&&ut(Be,Ie)}},ht=function(Te){T.event=Te,G(T)},Mt=function(Te){T.event=Te,j(T)},ft=function(Te){return Ne(Te)||Rl(Te,u)&&W(T)};k=T._dc=gn.delayedCall(f||.25,Qe).pause(),T.deltaX=T.deltaY=0,T._vx=Rm(0,50,!0),T._vy=Rm(0,50,!0),T.scrollX=K,T.scrollY=J,T.isDragging=T.isGesturing=T.isPressed=!1,CM(this),T.enable=function(Ue){return T.isEnabled||(On(Le?ne:a,"scroll",Cm),o.indexOf("scroll")>=0&&On(Le?ne:a,"scroll",Me,Z,le),o.indexOf("wheel")>=0&&On(a,"wheel",Je,Z,le),(o.indexOf("touch")>=0&&wM||o.indexOf("pointer")>=0)&&(On(a,qi[0],D,Z,le),On(ne,qi[2],Q),On(ne,qi[3],Q),ie&&On(a,"click",Se,!0,!0),W&&On(a,"click",ft),H&&On(ne,"gesturestart",ae),L&&On(ne,"gestureend",ve),G&&On(a,co+"enter",ht),j&&On(a,co+"leave",Mt),q&&On(a,co+"move",ct)),T.isEnabled=!0,T.isDragging=T.isGesturing=T.isPressed=ce=Fe=!1,T._vx.reset(),T._vy.reset(),Re=K(),re=J(),Ue&&Ue.type&&D(Ue),me&&me(T)),T},T.disable=function(){T.isEnabled&&(Ca.filter(function(Ue){return Ue!==T&&nc(Ue.target)}).length||Un(Le?ne:a,"scroll",Cm),T.isPressed&&(T._vx.reset(),T._vy.reset(),Un(N?a:ne,qi[1],ye,!0)),Un(Le?ne:a,"scroll",Me,le),Un(a,"wheel",Je,le),Un(a,qi[0],D,le),Un(ne,qi[2],Q),Un(ne,qi[3],Q),Un(a,"click",Se,!0),Un(a,"click",ft),Un(ne,"gesturestart",ae),Un(ne,"gestureend",ve),Un(a,co+"enter",ht),Un(a,co+"leave",Mt),Un(a,co+"move",ct),T.isEnabled=T.isPressed=T.isDragging=!1,Ve&&Ve(T))},T.kill=T.revert=function(){T.disable();var Ue=Ca.indexOf(T);Ue>=0&&Ca.splice(Ue,1),Br===T&&(Br=0)},Ca.push(T),N&&nc(a)&&(Br=T),T.enable(_)},yI(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();qt.version="3.12.7";qt.create=function(n){return new qt(n)};qt.register=LM;qt.getAll=function(){return Ca.slice()};qt.getById=function(n){return Ca.filter(function(e){return e.vars.id===n})[0]};RM()&&gn.registerPlugin(qt);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xe,ua,et,Tt,gi,pt,Z_,rd,Ic,ic,Fl,Bu,Cn,Dd,Pm,Bn,gx,vx,fa,DM,ip,NM,kn,bm,IM,UM,ls,Lm,Q_,Ha,J_,sd,Dm,rp,Hu=1,Rn=Date.now,sp=Rn(),Hi=0,kl=0,xx=function(e,t,i){var r=pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},yx=function(e,t){return t&&(!pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},MI=function n(){return kl&&requestAnimationFrame(n)},Sx=function(){return Dd=1},Mx=function(){return Dd=0},lr=function(e){return e},zl=function(e){return Math.round(e*1e5)/1e5||0},OM=function(){return typeof window<"u"},FM=function(){return xe||OM()&&(xe=window.gsap)&&xe.registerPlugin&&xe},Fo=function(e){return!!~Z_.indexOf(e)},kM=function(e){return(e==="Height"?J_:et["inner"+e])||gi["client"+e]||pt["client"+e]},zM=function(e){return Us(e,"getBoundingClientRect")||(Fo(e)?function(){return vf.width=et.innerWidth,vf.height=J_,vf}:function(){return Ur(e)})},EI=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Us(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?kM(s):e["client"+s])||0}},TI=function(e,t){return!t||~yr.indexOf(e)?zM(e):function(){return vf}},mr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Us(e,i))?o()-zM(e)()[s]:Fo(e)?(gi[i]||pt[i])-kM(r):e[i]-e["offset"+r])},Vu=function(e,t){for(var i=0;i<fa.length;i+=3)(!t||~t.indexOf(fa[i+1]))&&e(fa[i],fa[i+1],fa[i+2])},pi=function(e){return typeof e=="string"},Ln=function(e){return typeof e=="function"},Bl=function(e){return typeof e=="number"},uo=function(e){return typeof e=="object"},Pl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},op=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},la=Math.abs,BM="left",HM="top",eg="right",tg="bottom",Co="width",Ro="height",rc="Right",sc="Left",oc="Top",ac="Bottom",Qt="padding",Ui="margin",ol="Width",ng="Height",rn="px",Oi=function(e){return et.getComputedStyle(e)},wI=function(e){var t=Oi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ex=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ur=function(e,t){var i=t&&Oi(e)[Pm]!=="matrix(1, 0, 0, 1, 0, 0)"&&xe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},od=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},VM=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},AI=function(e){return function(t){return xe.utils.snap(VM(e),t)}},ig=function(e){var t=xe.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},CI=function(e){return function(t,i){return ig(VM(e))(t,i.direction)}},Gu=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},dn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},fn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Wu=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Tx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ju={toggleActions:"play",anticipatePin:0},ad={top:0,left:0,center:.5,bottom:1,right:1},pf=function(e,t){if(pi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in ad?ad[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Xu=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,p=s.fontWeight,g=Tt.createElement("div"),_=Fo(i)||Us(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=_?pt:i,x=e.indexOf("start")!==-1,v=x?c:u,S="border-color:"+v+";font-size:"+d+";color:"+v+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(r===on?eg:tg)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(g,h.children[0]):h.appendChild(g),g._offset=g["offset"+r.op.d2],mf(g,0,r,x),g},mf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+ol]=1,s["border"+a+ol]=0,s[i.p]=t+"px",xe.set(e,s)},Ze=[],Nm={},Uc,wx=function(){return Rn()-Hi>34&&(Uc||(Uc=requestAnimationFrame(Gr)))},ca=function(){(!kn||!kn.isPressed||kn.startX>pt.clientWidth)&&(tt.cache++,kn?Uc||(Uc=requestAnimationFrame(Gr)):Gr(),Hi||zo("scrollStart"),Hi=Rn())},ap=function(){UM=et.innerWidth,IM=et.innerHeight},Hl=function(e){tt.cache++,(e===!0||!Cn&&!NM&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!bm||UM!==et.innerWidth||Math.abs(et.innerHeight-IM)>et.innerHeight*.25))&&rd.restart(!0)},ko={},RI=[],GM=function n(){return fn(it,"scrollEnd",n)||yo(!0)},zo=function(e){return ko[e]&&ko[e].map(function(t){return t()})||RI},di=[],WM=function(e){for(var t=0;t<di.length;t+=5)(!e||di[t+4]&&di[t+4].query===e)&&(di[t].style.cssText=di[t+1],di[t].getBBox&&di[t].setAttribute("transform",di[t+2]||""),di[t+3].uncache=1)},rg=function(e,t){var i;for(Bn=0;Bn<Ze.length;Bn++)i=Ze[Bn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));sd=!0,t&&WM(t),t||zo("revert")},jM=function(e,t){tt.cache++,(t||!Hn)&&tt.forEach(function(i){return Ln(i)&&i.cacheID++&&(i.rec=0)}),pi(e)&&(et.history.scrollRestoration=Q_=e)},Hn,Po=0,Ax,PI=function(){if(Ax!==Po){var e=Ax=Po;requestAnimationFrame(function(){return e===Po&&yo(!0)})}},XM=function(){pt.appendChild(Ha),J_=!kn&&Ha.offsetHeight||et.innerHeight,pt.removeChild(Ha)},Cx=function(e){return Ic(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},yo=function(e,t){if(gi=Tt.documentElement,pt=Tt.body,Z_=[et,Tt,gi,pt],Hi&&!e&&!sd){dn(it,"scrollEnd",GM);return}XM(),Hn=it.isRefreshing=!0,tt.forEach(function(r){return Ln(r)&&++r.cacheID&&(r.rec=r())});var i=zo("refreshInit");DM&&it.sort(),t||rg(),tt.forEach(function(r){Ln(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Ze.slice(0).forEach(function(r){return r.refresh()}),sd=!1,Ze.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Dm=1,Cx(!0),Ze.forEach(function(r){var s=mr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Cx(!1),Dm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),tt.forEach(function(r){Ln(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),jM(Q_,1),rd.pause(),Po++,Hn=2,Gr(2),Ze.forEach(function(r){return Ln(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Hn=it.isRefreshing=!1,zo("refresh")},Im=0,_f=1,lc,Gr=function(e){if(e===2||!Hn&&!sd){it.isUpdating=!0,lc&&lc.update(0);var t=Ze.length,i=Rn(),r=i-sp>=50,s=t&&Ze[0].scroll();if(_f=Im>s?-1:1,Hn||(Im=s),r&&(Hi&&!Dd&&i-Hi>200&&(Hi=0,zo("scrollEnd")),Fl=sp,sp=i),_f<0){for(Bn=t;Bn-- >0;)Ze[Bn]&&Ze[Bn].update(0,r);_f=1}else for(Bn=0;Bn<t;Bn++)Ze[Bn]&&Ze[Bn].update(0,r);it.isUpdating=!1}Uc=0},Um=[BM,HM,tg,eg,Ui+ac,Ui+rc,Ui+oc,Ui+sc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],gf=Um.concat([Co,Ro,"boxSizing","max"+ol,"max"+ng,"position",Ui,Qt,Qt+oc,Qt+rc,Qt+ac,Qt+sc]),bI=function(e,t,i){Va(i);var r=e._gsap;if(r.spacerIsNative)Va(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},lp=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Um.length,o=t.style,a=e.style,l;s--;)l=Um[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[tg]=a[eg]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Co]=od(e,Gn)+rn,o[Ro]=od(e,on)+rn,o[Qt]=a[Ui]=a[HM]=a[BM]="0",Va(r),a[Co]=a["max"+ol]=i[Co],a[Ro]=a["max"+ng]=i[Ro],a[Qt]=i[Qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},LI=/([A-Z])/g,Va=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||xe.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(LI,"-$1").toLowerCase())}},Yu=function(e){for(var t=gf.length,i=e.style,r=[],s=0;s<t;s++)r.push(gf[s],i[gf[s]]);return r.t=e,r},DI=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},vf={left:0,top:0},Rx=function(e,t,i,r,s,o,a,l,c,u,d,f,p,g){Ln(e)&&(e=e(l)),pi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?pf("0"+e.substr(3),i):0));var _=p?p.time():0,m,h,x;if(p&&p.seek(0),isNaN(e)||(e=+e),Bl(e))p&&(e=xe.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&mf(a,i,r,!0);else{Ln(t)&&(t=t(l));var v=(e||"0").split(" "),S,C,A,M;x=Kn(t,l)||pt,S=Ur(x)||{},(!S||!S.left&&!S.top)&&Oi(x).display==="none"&&(M=x.style.display,x.style.display="block",S=Ur(x),M?x.style.display=M:x.style.removeProperty("display")),C=pf(v[0],S[r.d]),A=pf(v[1]||"0",i),e=S[r.p]-c[r.p]-u+C+s-A,a&&mf(a,A,r,i-A<20||a._isStart&&A>20),i-=i-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var b=e+i,E=o._isStart;m="scroll"+r.d2,mf(o,b,r,E&&b>20||!E&&(d?Math.max(pt[m],gi[m]):o.parentNode[m])<=b+1),d&&(c=Ur(a),d&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+rn))}return p&&x&&(m=Ur(x),p.seek(f),h=Ur(x),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*f),p&&p.seek(_),p?e:Math.round(e)},NI=/(webkit|moz|length|cssText|inset)/i,Px=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=Oi(e);for(o in a)!+o&&!NI.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;xe.core.getCache(e).uncache=1,t.appendChild(e)}},YM=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},$u=function(e,t,i){var r={};r[t.p]="+="+i,xe.set(e,r)},bx=function(e,t){var i=Vs(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,d){var f=o.tween,p=l.onComplete,g={};c=c||i();var _=YM(i,c,function(){f.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){tt.cache++,o.tween&&Gr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=xe.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},dn(e,"wheel",i.wheelHandler),it.isTouch&&dn(e,"touchmove",i.wheelHandler),s},it=function(){function n(t,i){ua||n.register(xe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Lm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!kl){this.update=this.refresh=this.kill=lr;return}i=Ex(pi(i)||Bl(i)||i.nodeType?{trigger:i}:i,ju);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,p=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,x=s.onSnapComplete,v=s.once,S=s.snap,C=s.pinReparent,A=s.pinSpacer,M=s.containerAnimation,b=s.fastScrollEnd,E=s.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Gn:on,U=!d&&d!==0,O=Kn(i.scroller||et),I=xe.core.getCache(O),G=Fo(O),j=("pinType"in i?i.pinType:Us(O,"pinType")||G&&"fixed")==="fixed",q=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],$=U&&i.toggleActions.split(" "),N="markers"in i?i.markers:ju.markers,H=G?0:parseFloat(Oi(O)["border"+y.p2+ol])||0,L=this,te=i.onRefreshInit&&function(){return i.onRefreshInit(L)},me=EI(O,G,y),Ve=TI(O,G),W=0,ee=0,le=0,ie=Vs(O,y),Ce,be,Ge,k,Fe,ce,We,we,je,T,w,Y,Z,K,J,Re,re,pe,Le,ne,de,De,_e,Se,Ne,Qe,qe,nt,ut,ye,D,Q,ae,ve,Me,Je,ct,ht,Mt;if(L._startClamp=L._endClamp=!1,L._dir=y,m*=45,L.scroller=O,L.scroll=M?M.time.bind(M):ie,k=ie(),L.vars=i,r=r||i.animation,"refreshPriority"in i&&(DM=1,i.refreshPriority===-9999&&(lc=L)),I.tweenScroll=I.tweenScroll||{top:bx(O,on),left:bx(O,Gn)},L.tweenTo=Ce=I.tweenScroll[y.p],L.scrubDuration=function(ue){ae=Bl(ue)&&ue,ae?Q?Q.duration(ue):Q=xe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ae,paused:!0,onComplete:function(){return h&&h(L)}}):(Q&&Q.progress(1).kill(),Q=0)},r&&(r.vars.lazy=!1,r._initted&&!L.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),L.animation=r.pause(),r.scrollTrigger=L,L.scrubDuration(d),ye=0,l||(l=r.vars.id)),S&&((!uo(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in pt.style&&xe.set(G?[pt,gi]:O,{scrollBehavior:"auto"}),tt.forEach(function(ue){return Ln(ue)&&ue.target===(G?Tt.scrollingElement||gi:O)&&(ue.smooth=!1)}),Ge=Ln(S.snapTo)?S.snapTo:S.snapTo==="labels"?AI(r):S.snapTo==="labelsDirectional"?CI(r):S.directional!==!1?function(ue,Be){return ig(S.snapTo)(ue,Rn()-ee<500?0:Be.direction)}:xe.utils.snap(S.snapTo),ve=S.duration||{min:.1,max:2},ve=uo(ve)?ic(ve.min,ve.max):ic(ve,ve),Me=xe.delayedCall(S.delay||ae/2||.1,function(){var ue=ie(),Be=Rn()-ee<500,Ie=Ce.tween;if((Be||Math.abs(L.getVelocity())<10)&&!Ie&&!Dd&&W!==ue){var ze=(ue-ce)/K,Xt=r&&!U?r.totalProgress():ze,Xe=Be?0:(Xt-D)/(Rn()-Fl)*1e3||0,Dt=xe.utils.clamp(-ze,1-ze,la(Xe/2)*Xe/.185),nn=ze+(S.inertia===!1?0:Dt),Nt,Et,_t=S,R=_t.onStart,F=_t.onInterrupt,V=_t.onComplete;if(Nt=Ge(nn,L),Bl(Nt)||(Nt=nn),Et=Math.max(0,Math.round(ce+Nt*K)),ue<=We&&ue>=ce&&Et!==ue){if(Ie&&!Ie._initted&&Ie.data<=la(Et-ue))return;S.inertia===!1&&(Dt=Nt-ze),Ce(Et,{duration:ve(la(Math.max(la(nn-Xt),la(Nt-Xt))*.185/Xe/.05||0)),ease:S.ease||"power3",data:la(Et-ue),onInterrupt:function(){return Me.restart(!0)&&F&&F(L)},onComplete:function(){L.update(),W=ie(),r&&!U&&(Q?Q.resetTo("totalProgress",Nt,r._tTime/r._tDur):r.progress(Nt)),ye=D=r&&!U?r.totalProgress():L.progress,x&&x(L),V&&V(L)}},ue,Dt*K,Et-ue-Dt*K),R&&R(L,Ce.tween)}}else L.isActive&&W!==ue&&Me.restart(!0)}).pause()),l&&(Nm[l]=L),f=L.trigger=Kn(f||p!==!0&&p),Mt=f&&f._gsap&&f._gsap.stRevert,Mt&&(Mt=Mt(L)),p=p===!0?f:Kn(p),pi(a)&&(a={targets:f,className:a}),p&&(g===!1||g===Ui||(g=!g&&p.parentNode&&p.parentNode.style&&Oi(p.parentNode).display==="flex"?!1:Qt),L.pin=p,be=xe.core.getCache(p),be.spacer?J=be.pinState:(A&&(A=Kn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),be.spacerIsNative=!!A,A&&(be.spacerState=Yu(A))),be.spacer=pe=A||Tt.createElement("div"),pe.classList.add("pin-spacer"),l&&pe.classList.add("pin-spacer-"+l),be.pinState=J=Yu(p)),i.force3D!==!1&&xe.set(p,{force3D:!0}),L.spacer=pe=be.spacer,ut=Oi(p),Se=ut[g+y.os2],ne=xe.getProperty(p),de=xe.quickSetter(p,y.a,rn),lp(p,pe,ut),re=Yu(p)),N){Y=uo(N)?Ex(N,Tx):Tx,T=Xu("scroller-start",l,O,y,Y,0),w=Xu("scroller-end",l,O,y,Y,0,T),Le=T["offset"+y.op.d2];var ft=Kn(Us(O,"content")||O);we=this.markerStart=Xu("start",l,ft,y,Y,Le,0,M),je=this.markerEnd=Xu("end",l,ft,y,Y,Le,0,M),M&&(ht=xe.quickSetter([we,je],y.a,rn)),!j&&!(yr.length&&Us(O,"fixedMarkers")===!0)&&(wI(G?pt:O),xe.set([T,w],{force3D:!0}),Qe=xe.quickSetter(T,y.a,rn),nt=xe.quickSetter(w,y.a,rn))}if(M){var Ue=M.vars.onUpdate,Te=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){L.update(0,0,1),Ue&&Ue.apply(M,Te||[])})}if(L.previous=function(){return Ze[Ze.indexOf(L)-1]},L.next=function(){return Ze[Ze.indexOf(L)+1]},L.revert=function(ue,Be){if(!Be)return L.kill(!0);var Ie=ue!==!1||!L.enabled,ze=Cn;Ie!==L.isReverted&&(Ie&&(Je=Math.max(ie(),L.scroll.rec||0),le=L.progress,ct=r&&r.progress()),we&&[we,je,T,w].forEach(function(Xt){return Xt.style.display=Ie?"none":"block"}),Ie&&(Cn=L,L.update(Ie)),p&&(!C||!L.isActive)&&(Ie?bI(p,pe,J):lp(p,pe,Oi(p),Ne)),Ie||L.update(Ie),Cn=ze,L.isReverted=Ie)},L.refresh=function(ue,Be,Ie,ze){if(!((Cn||!L.enabled)&&!Be)){if(p&&ue&&Hi){dn(n,"scrollEnd",GM);return}!Hn&&te&&te(L),Cn=L,Ce.tween&&!Ie&&(Ce.tween.kill(),Ce.tween=0),Q&&Q.pause(),_&&r&&r.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Xt=me(),Xe=Ve(),Dt=M?M.duration():mr(O,y),nn=K<=.01,Nt=0,Et=ze||0,_t=uo(Ie)?Ie.end:i.end,R=i.endTrigger||f,F=uo(Ie)?Ie.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),V=L.pinnedContainer=i.pinnedContainer&&Kn(i.pinnedContainer,L),X=f&&Math.max(0,Ze.indexOf(L))||0,B=X,oe,he,Pe,ke,Ae,Ee,Oe,At,Sn,It,Kt,gt,He;for(N&&uo(Ie)&&(gt=xe.getProperty(T,y.p),He=xe.getProperty(w,y.p));B-- >0;)Ee=Ze[B],Ee.end||Ee.refresh(0,1)||(Cn=L),Oe=Ee.pin,Oe&&(Oe===f||Oe===p||Oe===V)&&!Ee.isReverted&&(It||(It=[]),It.unshift(Ee),Ee.revert(!0,!0)),Ee!==Ze[B]&&(X--,B--);for(Ln(F)&&(F=F(L)),F=xx(F,"start",L),ce=Rx(F,f,Xt,y,ie(),we,T,L,Xe,H,j,Dt,M,L._startClamp&&"_startClamp")||(p?-.001:0),Ln(_t)&&(_t=_t(L)),pi(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(pi(F)?F.split(" ")[0]:"")+_t:(Nt=pf(_t.substr(2),Xt),_t=pi(F)?F:(M?xe.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,ce):ce)+Nt,R=f)),_t=xx(_t,"end",L),We=Math.max(ce,Rx(_t||(R?"100% 0":Dt),R,Xt,y,ie()+Nt,je,w,L,Xe,H,j,Dt,M,L._endClamp&&"_endClamp"))||-.001,Nt=0,B=X;B--;)Ee=Ze[B],Oe=Ee.pin,Oe&&Ee.start-Ee._pinPush<=ce&&!M&&Ee.end>0&&(oe=Ee.end-(L._startClamp?Math.max(0,Ee.start):Ee.start),(Oe===f&&Ee.start-Ee._pinPush<ce||Oe===V)&&isNaN(F)&&(Nt+=oe*(1-Ee.progress)),Oe===p&&(Et+=oe));if(ce+=Nt,We+=Nt,L._startClamp&&(L._startClamp+=Nt),L._endClamp&&!Hn&&(L._endClamp=We||-.001,We=Math.min(We,mr(O,y))),K=We-ce||(ce-=.01)&&.001,nn&&(le=xe.utils.clamp(0,1,xe.utils.normalize(ce,We,Je))),L._pinPush=Et,we&&Nt&&(oe={},oe[y.a]="+="+Nt,V&&(oe[y.p]="-="+ie()),xe.set([we,je],oe)),p&&!(Dm&&L.end>=mr(O,y)))oe=Oi(p),ke=y===on,Pe=ie(),De=parseFloat(ne(y.a))+Et,!Dt&&We>1&&(Kt=(G?Tt.scrollingElement||gi:O).style,Kt={style:Kt,value:Kt["overflow"+y.a.toUpperCase()]},G&&Oi(pt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Kt.style["overflow"+y.a.toUpperCase()]="scroll")),lp(p,pe,oe),re=Yu(p),he=Ur(p,!0),At=j&&Vs(O,ke?Gn:on)(),g?(Ne=[g+y.os2,K+Et+rn],Ne.t=pe,B=g===Qt?od(p,y)+K+Et:0,B&&(Ne.push(y.d,B+rn),pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=B+rn)),Va(Ne),V&&Ze.forEach(function(Mr){Mr.pin===V&&Mr.vars.pinSpacing!==!1&&(Mr._subPinOffset=!0)}),j&&ie(Je)):(B=od(p,y),B&&pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=B+rn)),j&&(Ae={top:he.top+(ke?Pe-ce:At)+rn,left:he.left+(ke?At:Pe-ce)+rn,boxSizing:"border-box",position:"fixed"},Ae[Co]=Ae["max"+ol]=Math.ceil(he.width)+rn,Ae[Ro]=Ae["max"+ng]=Math.ceil(he.height)+rn,Ae[Ui]=Ae[Ui+oc]=Ae[Ui+rc]=Ae[Ui+ac]=Ae[Ui+sc]="0",Ae[Qt]=oe[Qt],Ae[Qt+oc]=oe[Qt+oc],Ae[Qt+rc]=oe[Qt+rc],Ae[Qt+ac]=oe[Qt+ac],Ae[Qt+sc]=oe[Qt+sc],Re=DI(J,Ae,C),Hn&&ie(0)),r?(Sn=r._initted,ip(1),r.render(r.duration(),!0,!0),_e=ne(y.a)-De+K+Et,qe=Math.abs(K-_e)>1,j&&qe&&Re.splice(Re.length-2,2),r.render(0,!0,!0),Sn||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),ip(0)):_e=K,Kt&&(Kt.value?Kt.style["overflow"+y.a.toUpperCase()]=Kt.value:Kt.style.removeProperty("overflow-"+y.a));else if(f&&ie()&&!M)for(he=f.parentNode;he&&he!==pt;)he._pinOffset&&(ce-=he._pinOffset,We-=he._pinOffset),he=he.parentNode;It&&It.forEach(function(Mr){return Mr.revert(!1,!0)}),L.start=ce,L.end=We,k=Fe=Hn?Je:ie(),!M&&!Hn&&(k<Je&&ie(Je),L.scroll.rec=0),L.revert(!1,!0),ee=Rn(),Me&&(W=-1,Me.restart(!0)),Cn=0,r&&U&&(r._initted||ct)&&r.progress()!==ct&&r.progress(ct||0,!0).render(r.time(),!0,!0),(nn||le!==L.progress||M||_||r&&!r._initted)&&(r&&!U&&r.totalProgress(M&&ce<-.001&&!le?xe.utils.normalize(ce,We,0):le,!0),L.progress=nn||(k-ce)/K===le?0:le),p&&g&&(pe._pinOffset=Math.round(L.progress*_e)),Q&&Q.invalidate(),isNaN(gt)||(gt-=xe.getProperty(T,y.p),He-=xe.getProperty(w,y.p),$u(T,y,gt),$u(we,y,gt-(ze||0)),$u(w,y,He),$u(je,y,He-(ze||0))),nn&&!Hn&&L.update(),u&&!Hn&&!Z&&(Z=!0,u(L),Z=!1)}},L.getVelocity=function(){return(ie()-Fe)/(Rn()-Fl)*1e3||0},L.endAnimation=function(){Pl(L.callbackAnimation),r&&(Q?Q.progress(1):r.paused()?U||Pl(r,L.direction<0,1):Pl(r,r.reversed()))},L.labelToScroll=function(ue){return r&&r.labels&&(ce||L.refresh()||ce)+r.labels[ue]/r.duration()*K||0},L.getTrailing=function(ue){var Be=Ze.indexOf(L),Ie=L.direction>0?Ze.slice(0,Be).reverse():Ze.slice(Be+1);return(pi(ue)?Ie.filter(function(ze){return ze.vars.preventOverlaps===ue}):Ie).filter(function(ze){return L.direction>0?ze.end<=ce:ze.start>=We})},L.update=function(ue,Be,Ie){if(!(M&&!Ie&&!ue)){var ze=Hn===!0?Je:L.scroll(),Xt=ue?0:(ze-ce)/K,Xe=Xt<0?0:Xt>1?1:Xt||0,Dt=L.progress,nn,Nt,Et,_t,R,F,V,X;if(Be&&(Fe=k,k=M?ie():ze,S&&(D=ye,ye=r&&!U?r.totalProgress():Xe)),m&&p&&!Cn&&!Hu&&Hi&&(!Xe&&ce<ze+(ze-Fe)/(Rn()-Fl)*m?Xe=1e-4:Xe===1&&We>ze+(ze-Fe)/(Rn()-Fl)*m&&(Xe=.9999)),Xe!==Dt&&L.enabled){if(nn=L.isActive=!!Xe&&Xe<1,Nt=!!Dt&&Dt<1,F=nn!==Nt,R=F||!!Xe!=!!Dt,L.direction=Xe>Dt?1:-1,L.progress=Xe,R&&!Cn&&(Et=Xe&&!Dt?0:Xe===1?1:Dt===1?2:3,U&&(_t=!F&&$[Et+1]!=="none"&&$[Et+1]||$[Et],X=r&&(_t==="complete"||_t==="reset"||_t in r))),E&&(F||X)&&(X||d||!r)&&(Ln(E)?E(L):L.getTrailing(E).forEach(function(Pe){return Pe.endAnimation()})),U||(Q&&!Cn&&!Hu?(Q._dp._time-Q._start!==Q._time&&Q.render(Q._dp._time-Q._start),Q.resetTo?Q.resetTo("totalProgress",Xe,r._tTime/r._tDur):(Q.vars.totalProgress=Xe,Q.invalidate().restart())):r&&r.totalProgress(Xe,!!(Cn&&(ee||ue)))),p){if(ue&&g&&(pe.style[g+y.os2]=Se),!j)de(zl(De+_e*Xe));else if(R){if(V=!ue&&Xe>Dt&&We+1>ze&&ze+1>=mr(O,y),C)if(!ue&&(nn||V)){var B=Ur(p,!0),oe=ze-ce;Px(p,pt,B.top+(y===on?oe:0)+rn,B.left+(y===on?0:oe)+rn)}else Px(p,pe);Va(nn||V?Re:re),qe&&Xe<1&&nn||de(De+(Xe===1&&!V?_e:0))}}S&&!Ce.tween&&!Cn&&!Hu&&Me.restart(!0),a&&(F||v&&Xe&&(Xe<1||!rp))&&Ic(a.targets).forEach(function(Pe){return Pe.classList[nn||v?"add":"remove"](a.className)}),o&&!U&&!ue&&o(L),R&&!Cn?(U&&(X&&(_t==="complete"?r.pause().totalProgress(1):_t==="reset"?r.restart(!0).pause():_t==="restart"?r.restart(!0):r[_t]()),o&&o(L)),(F||!rp)&&(c&&F&&op(L,c),q[Et]&&op(L,q[Et]),v&&(Xe===1?L.kill(!1,1):q[Et]=0),F||(Et=Xe===1?1:3,q[Et]&&op(L,q[Et]))),b&&!nn&&Math.abs(L.getVelocity())>(Bl(b)?b:2500)&&(Pl(L.callbackAnimation),Q?Q.progress(1):Pl(r,_t==="reverse"?1:!Xe,1))):U&&o&&!Cn&&o(L)}if(nt){var he=M?ze/M.duration()*(M._caScrollDist||0):ze;Qe(he+(T._isFlipped?1:0)),nt(he)}ht&&ht(-ze/M.duration()*(M._caScrollDist||0))}},L.enable=function(ue,Be){L.enabled||(L.enabled=!0,dn(O,"resize",Hl),G||dn(O,"scroll",ca),te&&dn(n,"refreshInit",te),ue!==!1&&(L.progress=le=0,k=Fe=W=ie()),Be!==!1&&L.refresh())},L.getTween=function(ue){return ue&&Ce?Ce.tween:Q},L.setPositions=function(ue,Be,Ie,ze){if(M){var Xt=M.scrollTrigger,Xe=M.duration(),Dt=Xt.end-Xt.start;ue=Xt.start+Dt*ue/Xe,Be=Xt.start+Dt*Be/Xe}L.refresh(!1,!1,{start:yx(ue,Ie&&!!L._startClamp),end:yx(Be,Ie&&!!L._endClamp)},ze),L.update()},L.adjustPinSpacing=function(ue){if(Ne&&ue){var Be=Ne.indexOf(y.d)+1;Ne[Be]=parseFloat(Ne[Be])+ue+rn,Ne[1]=parseFloat(Ne[1])+ue+rn,Va(Ne)}},L.disable=function(ue,Be){if(L.enabled&&(ue!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Be||Q&&Q.pause(),Je=0,be&&(be.uncache=1),te&&fn(n,"refreshInit",te),Me&&(Me.pause(),Ce.tween&&Ce.tween.kill()&&(Ce.tween=0)),!G)){for(var Ie=Ze.length;Ie--;)if(Ze[Ie].scroller===O&&Ze[Ie]!==L)return;fn(O,"resize",Hl),G||fn(O,"scroll",ca)}},L.kill=function(ue,Be){L.disable(ue,Be),Q&&!Be&&Q.kill(),l&&delete Nm[l];var Ie=Ze.indexOf(L);Ie>=0&&Ze.splice(Ie,1),Ie===Bn&&_f>0&&Bn--,Ie=0,Ze.forEach(function(ze){return ze.scroller===L.scroller&&(Ie=1)}),Ie||Hn||(L.scroll.rec=0),r&&(r.scrollTrigger=null,ue&&r.revert({kill:!1}),Be||r.kill()),we&&[we,je,T,w].forEach(function(ze){return ze.parentNode&&ze.parentNode.removeChild(ze)}),lc===L&&(lc=0),p&&(be&&(be.uncache=1),Ie=0,Ze.forEach(function(ze){return ze.pin===p&&Ie++}),Ie||(be.spacer=0)),i.onKill&&i.onKill(L)},Ze.push(L),L.enable(!1,!1),Mt&&Mt(L),r&&r.add&&!K){var Ke=L.update;L.update=function(){L.update=Ke,tt.cache++,ce||We||L.refresh()},xe.delayedCall(.01,L.update),K=.01,ce=We=0}else L.refresh();p&&PI()},n.register=function(i){return ua||(xe=i||FM(),OM()&&window.document&&n.enable(),ua=kl),ua},n.defaults=function(i){if(i)for(var r in i)ju[r]=i[r];return ju},n.disable=function(i,r){kl=0,Ze.forEach(function(o){return o[r?"kill":"disable"](i)}),fn(et,"wheel",ca),fn(Tt,"scroll",ca),clearInterval(Bu),fn(Tt,"touchcancel",lr),fn(pt,"touchstart",lr),Gu(fn,Tt,"pointerdown,touchstart,mousedown",Sx),Gu(fn,Tt,"pointerup,touchend,mouseup",Mx),rd.kill(),Vu(fn);for(var s=0;s<tt.length;s+=3)Wu(fn,tt[s],tt[s+1]),Wu(fn,tt[s],tt[s+2])},n.enable=function(){if(et=window,Tt=document,gi=Tt.documentElement,pt=Tt.body,xe&&(Ic=xe.utils.toArray,ic=xe.utils.clamp,Lm=xe.core.context||lr,ip=xe.core.suppressOverwrites||lr,Q_=et.history.scrollRestoration||"auto",Im=et.pageYOffset||0,xe.core.globals("ScrollTrigger",n),pt)){kl=1,Ha=document.createElement("div"),Ha.style.height="100vh",Ha.style.position="absolute",XM(),MI(),qt.register(xe),n.isTouch=qt.isTouch,ls=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),bm=qt.isTouch===1,dn(et,"wheel",ca),Z_=[et,Tt,gi,pt],xe.matchMedia?(n.matchMedia=function(c){var u=xe.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},xe.addEventListener("matchMediaInit",function(){return rg()}),xe.addEventListener("matchMediaRevert",function(){return WM()}),xe.addEventListener("matchMedia",function(){yo(0,1),zo("matchMedia")}),xe.matchMedia().add("(orientation: portrait)",function(){return ap(),ap})):console.warn("Requires GSAP 3.11.0 or later"),ap(),dn(Tt,"scroll",ca);var i=pt.hasAttribute("style"),r=pt.style,s=r.borderTopStyle,o=xe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Ur(pt),on.m=Math.round(a.top+on.sc())||0,Gn.m=Math.round(a.left+Gn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(pt.setAttribute("style",""),pt.removeAttribute("style")),Bu=setInterval(wx,250),xe.delayedCall(.5,function(){return Hu=0}),dn(Tt,"touchcancel",lr),dn(pt,"touchstart",lr),Gu(dn,Tt,"pointerdown,touchstart,mousedown",Sx),Gu(dn,Tt,"pointerup,touchend,mouseup",Mx),Pm=xe.utils.checkPrefix("transform"),gf.push(Pm),ua=Rn(),rd=xe.delayedCall(.2,yo).pause(),fa=[Tt,"visibilitychange",function(){var c=et.innerWidth,u=et.innerHeight;Tt.hidden?(gx=c,vx=u):(gx!==c||vx!==u)&&Hl()},Tt,"DOMContentLoaded",yo,et,"load",yo,et,"resize",Hl],Vu(dn),Ze.forEach(function(c){return c.enable(0,1)}),l=0;l<tt.length;l+=3)Wu(fn,tt[l],tt[l+1]),Wu(fn,tt[l],tt[l+2])}},n.config=function(i){"limitCallbacks"in i&&(rp=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Bu)||(Bu=r)&&setInterval(wx,r),"ignoreMobileResize"in i&&(bm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Vu(fn)||Vu(dn,i.autoRefreshEvents||"none"),NM=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Kn(i),o=tt.indexOf(s),a=Fo(s);~o&&tt.splice(o,a?6:2),r&&(a?yr.unshift(et,r,pt,r,gi,r):yr.unshift(s,r))},n.clearMatchMedia=function(i){Ze.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(pi(i)?Kn(i):i).getBoundingClientRect(),a=o[s?Co:Ro]*r||0;return s?o.right-a>0&&o.left+a<et.innerWidth:o.bottom-a>0&&o.top+a<et.innerHeight},n.positionInViewport=function(i,r,s){pi(i)&&(i=Kn(i));var o=i.getBoundingClientRect(),a=o[s?Co:Ro],l=r==null?a/2:r in ad?ad[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/et.innerWidth:(o.top+l)/et.innerHeight},n.killAll=function(i){if(Ze.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=ko.killAll||[];ko={},r.forEach(function(s){return s()})}},n}();it.version="3.12.7";it.saveStyles=function(n){return n?Ic(n).forEach(function(e){if(e&&e.style){var t=di.indexOf(e);t>=0&&di.splice(t,5),di.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),xe.core.getCache(e),Lm())}}):di};it.revert=function(n,e){return rg(!n,e)};it.create=function(n,e){return new it(n,e)};it.refresh=function(n){return n?Hl(!0):(ua||it.register())&&yo(!0)};it.update=function(n){return++tt.cache&&Gr(n===!0?2:0)};it.clearScrollMemory=jM;it.maxScroll=function(n,e){return mr(n,e?Gn:on)};it.getScrollFunc=function(n,e){return Vs(Kn(n),e?Gn:on)};it.getById=function(n){return Nm[n]};it.getAll=function(){return Ze.filter(function(n){return n.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!Hi};it.snapDirectional=ig;it.addEventListener=function(n,e){var t=ko[n]||(ko[n]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(n,e){var t=ko[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};it.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var d=[],f=[],p=xe.delayedCall(r,function(){u(d,f),d=[],f=[]}).pause();return function(g){d.length||p.restart(!0),d.push(g.trigger),f.push(g),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Ln(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Ln(s)&&(s=s(),dn(it,"refresh",function(){return s=e.batchMax()})),Ic(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(it.create(c))}),t};var Lx=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},cp=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===gi&&n(pt,t)},qu={auto:1,scroll:1},II=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||xe.core.getCache(s),a=Rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(qu[(l=Oi(s)).overflowY]||qu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Fo(s)&&(qu[(l=Oi(s)).overflowY]||qu[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},$M=function(e,t,i,r){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&II,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&dn(Tt,qt.eventTypes[0],Nx,!1,!0)},onDisable:function(){return fn(Tt,qt.eventTypes[0],Nx,!0)}})},UI=/(input|label|select|textarea)/i,Dx,Nx=function(e){var t=UI.test(e.target.tagName);(t||Dx)&&(e._gsapAllow=!0,Dx=t)},OI=function(e){uo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Kn(e.target)||gi,u=xe.core.globals().ScrollSmoother,d=u&&u.get(),f=ls&&(e.content&&Kn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Vs(c,on),g=Vs(c,Gn),_=1,m=(qt.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,h=0,x=Ln(r)?function(){return r(a)}:function(){return r||2.8},v,S,C=$M(c,e.type,!0,s),A=function(){return S=!1},M=lr,b=lr,E=function(){l=mr(c,on),b=ic(ls?1:0,l),i&&(M=ic(0,mr(c,Gn))),v=Po},y=function(){f._gsap.y=zl(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},U=function(){if(S){requestAnimationFrame(A);var N=zl(a.deltaY/2),H=b(p.v-N);if(f&&H!==p.v+p.offset){p.offset=H-p.v;var L=zl((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",p.cacheID=tt.cache,Gr()}return!0}p.offset&&y(),S=!0},O,I,G,j,q=function(){E(),O.isActive()&&O.vars.scrollY>l&&(p()>l?O.progress(1)&&p(l):O.resetTo("scrollY",l))};return f&&xe.set(f,{y:"+=0"}),e.ignoreCheck=function($){return ls&&$.type==="touchmove"&&U()||_>1.05&&$.type!=="touchstart"||a.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){S=!1;var $=_;_=zl((et.visualViewport&&et.visualViewport.scale||1)/m),O.pause(),$!==_&&cp(c,_>1.01?!0:i?!1:"x"),I=g(),G=p(),E(),v=Po},e.onRelease=e.onGestureStart=function($,N){if(p.offset&&y(),!N)j.restart(!0);else{tt.cache++;var H=x(),L,te;i&&(L=g(),te=L+H*.05*-$.velocityX/.227,H*=Lx(g,L,te,mr(c,Gn)),O.vars.scrollX=M(te)),L=p(),te=L+H*.05*-$.velocityY/.227,H*=Lx(p,L,te,mr(c,on)),O.vars.scrollY=b(te),O.invalidate().duration(H).play(.01),(ls&&O.vars.scrollY>=l||L>=l-1)&&xe.to({},{onUpdate:q,duration:H})}o&&o($)},e.onWheel=function(){O._ts&&O.pause(),Rn()-h>1e3&&(v=0,h=Rn())},e.onChange=function($,N,H,L,te){if(Po!==v&&E(),N&&i&&g(M(L[2]===N?I+($.startX-$.x):g()+N-L[1])),H){p.offset&&y();var me=te[2]===H,Ve=me?G+$.startY-$.y:p()+H-te[1],W=b(Ve);me&&Ve!==W&&(G+=W-Ve),p(W)}(H||N)&&Gr()},e.onEnable=function(){cp(c,i?!1:"x"),it.addEventListener("refresh",q),dn(et,"resize",q),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){cp(c,!0),fn(et,"resize",q),it.removeEventListener("refresh",q),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new qt(e),a.iOS=ls,ls&&!p()&&p(1),ls&&xe.ticker.add(lr),j=a._dc,O=xe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:YM(p,p(),function(){return O.pause()})},onUpdate:Gr,onComplete:j.vars.onComplete}),a};it.sort=function(n){if(Ln(n))return Ze.sort(n);var e=et.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+et.innerHeight}),Ze.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};it.observe=function(n){return new qt(n)};it.normalizeScroll=function(n){if(typeof n>"u")return kn;if(n===!0&&kn)return kn.enable();if(n===!1){kn&&kn.kill(),kn=n;return}var e=n instanceof qt?n:OI(n);return kn&&kn.target===e.target&&kn.kill(),Fo(e.target)&&(kn=e),e};it.core={_getVelocityProp:Rm,_inputObserver:$M,_scrollers:tt,_proxies:yr,bridge:{ss:function(){Hi||zo("scrollStart"),Hi=Rn()},ref:function(){return Cn}}};FM()&&xe.registerPlugin(it);TM.registerPlugin(it);up.createRoot(document.getElementById("root")).render(P.jsx(dE.StrictMode,{children:P.jsx(rN,{})}));
