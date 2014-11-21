/*
* ManifestLoader
* Visit http://createjs.com/ for documentation, updates and examples.
*
*
* Copyright (c) 2012 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

// namespace:
this.createjs = this.createjs||{};

(function () {
	"use strict";

	// constructor
	/**
	 *
	 * @param itemSrc
	 * @param useXHR Default true; Specifies whether or not to load the manifest as JSONP (false), or to use XHR (true/default).
	 * @constructor
	 */
	function ManifestLoader(itemSrc, useXHR) {
		useXHR = useXHR !== false;

		this.AbstractLoader_constructor(itemSrc, useXHR, useXHR ? createjs.DataTypes.JSON : createjs.DataTypes.JSONP);

		// public properties

		// protected properties

	};

	var p = createjs.extend(ManifestLoader, createjs.AbstractLoader);
	var s = ManifestLoader;
	/**
	 * LoadQueue calls this when it creates loaders.
	 * Each loader has the option to say either yes (true) or no (false).
	 *
	 * @private
	 * @param item The LoadItem LoadQueue is trying to load.
	 * @returns {boolean}
	 */
	s.canLoadItem = function(item) {
		return item.type == createjs.DataTypes.MANIFEST;
	};

	// static properties

	// public methods
	p.load = function () {
		// TODO: How much should be in LoadQueue? vs in here?
	};

	// protected methods

	createjs.ManifestLoader = createjs.promote(ManifestLoader, "AbstractLoader");

}());
