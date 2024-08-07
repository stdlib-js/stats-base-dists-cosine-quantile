/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var cosineCDF = require( '@stdlib/stats-base-dists-cosine-cdf' );


// VARIABLES //

var MAX_ITERATIONS = 1e4;
var TOLERANCE = 1e-12;


// MAIN //

/**
* Bisection method to find quantile as there is no closed-form expression for the inverse of the CDF.
*
* @private
* @param {Probability} p - input value
* @param {number} mu - location parameter
* @param {NonNegativeNumber} s - scale parameter
* @returns {number} evaluated quantile function
*/
function bisect( p, mu, s ) {
	var a;
	var b;
	var c;
	var m;
	var n;

	n = 1;
	a = mu - s;
	b = mu + s;
	while ( n < MAX_ITERATIONS ) {
		m = ( a + b ) / 2.0;
		if ( b - a < TOLERANCE ) {
			return m;
		}
		c = cosineCDF( m, mu, s );
		if ( p > c ) {
			a = m;
		} else {
			b = m;
		}
		n += 1;
	}
	return m;
}


// EXPORTS //

module.exports = bisect;
