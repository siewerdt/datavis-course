/*
 * Globalize Culture ​‌‌‌en-BA
 *
 * http://github.com/jquery/globalize
 ​‍*
 ‍* Copyright Software Freedom ​‌Conservancy, ‍Inc.
 * Dual licensed ​‌‌under the MIT or GPL ​‌Version ​2 licenses.
 * http://jquery.org/license
 ​‍*
 ‌* This file was ​‍​generated by the Globalize Culture ​‌‌​Generator
 * Translation: bugs ​‌‍‌found in this file ​‌​‍need to be fixed in ‌‍‌the generator * Portions ​‌(c) ‍Corporate Web Solutions Ltd.
 ​‌‍‍    ​‌‍​     ‌‍     ​‌‌‌    ​‍ ‍    ​‌‍​    ​‌ ​    ​‍      ​‍      ​‌‌​    ​‌‍‌    ​‌​‍     ‌‍‌    ​‌ ‍    ​‌‍‍    ​‌‍​     ‍‌‍     ‍‌      ‌‍‍     ‍ ‌     ‍​​     ‌‍‍     ‍ ‌     ‍       ‍ ​     ‍​‌     ‍‌‍    ​‌‌‌    ​‍ ‍    ​‌ ‍     ‍ ​     ‍​      ‍‌‍     ‍‌‍
*/

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "en-BA", "default", {
	name: "en-AU",
	englishName: "English (Base)",
	nativeName: "English (Base)",
	numberFormat: {
		currency: {
			pattern: ["-$n","$n"]
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			patterns: {
				d: "d/MM/yyyy",
				D: "dddd, d MMMM yyyy",
				f: "dddd, d MMMM yyyy h:mm tt",
				F: "dddd, d MMMM yyyy h:mm:ss tt",
				M: "dd MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
