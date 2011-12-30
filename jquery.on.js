/*
 .on()/.off() for legacy jQuery

 Adds the .on()/.off() functions for events introduced in jQuery 1.7

 Requires: jQuery 1.4.3+
 Version: 1.0
 Company: SiteCrafting
 Authors: Paul Sayre
 Created: 2011-12-30
 Updated: 2011-12-30

 */
(function ($) {

	if(!$.fn.on) {
		$.fn.on = function () {
			var args = Array.prototype.slice.call(arguments, 0);
			for(var i = 0, len = args.length; i < len; i++) {
				args[i] = (typeof args[i]).charAt(0);
			}
			var opts = onMap[args.join('')];
			if(opts) {
				for(i = 0; i < len; i++) {
					args[opts.i[i]] = arguments[i];
				}
				this[opts.fn].apply(this, args);
			}
			return this;
		};
	}


	if(!$.fn.off) {
		$.fn.off = function () {
			var args = Array.prototype.slice.call(arguments, 0);
			for(var i = 0, len = args.length; i < len; i++) {
				args[i] = (typeof args[i]).charAt(0);
			}
			var opts = offMap[args.join('')];
			if(opts) {
				for(i = 0; i < len; i++) {
					args[opts.i[i]] = arguments[i];
				}
				this[opts.fn].apply(this, args);
			}
			return this;
		};
	}


	var onMap = {
		'sf':	{fn:'bind', i:[0,1]},
		'sof':	{fn:'bind', i:[0,1,2]},
		'o':	{fn:'bind', i:[0]},
		'oo':	{fn:'bind', i:[0,1]},
		'ssf':	{fn:'delegate', i:[1,0,2]},
		'ssof':	{fn:'delegate', i:[1,0,2,3]},
		'os':	{fn:'delegate', i:[1,0]},
		'oso':	false
	};


	var offMap = {
		's':	{fn:'unbind', i:[0]},
		'sf':	{fn:'unbind', i:[0,1]},
		'o':	{fn:'unbind', i:[0]},
		'ss':	{fn:'undelegate', i:[1,0]},
		'ssf':	{fn:'undelegate', i:[1,0,2]},
		'os':	{fn:'undelegate', i:[1,0]}
	};

})(jQuery);