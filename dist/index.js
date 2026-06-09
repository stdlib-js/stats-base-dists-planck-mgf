"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=n(function(O,s){
var i=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-special-expm1/dist');function N(e,r){return i(e)||i(r)||r<=0?NaN:u(-r)/u(e-r)}s.exports=N
});var v=n(function(R,q){
var p=require('@stdlib/utils-constant-function/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-expm1/dist');function x(e){if(f(e)||e<=0)return p(NaN);return r;function r(t){return f(t)?NaN:o(-e)/o(t-e)}}q.exports=x
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),a=c(),g=v();y(a,"factory",g);module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
