// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-expm1@v0.2.3-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function r(t,n){return e(t)||e(n)||n<=0?NaN:s(-n)/s(t-n)}function i(t){return e(t)||t<=0?n(NaN):function(n){if(e(n))return NaN;return s(-t)/s(n-t)}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
