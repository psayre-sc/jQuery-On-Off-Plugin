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
	
	function attach(map) {
		return function () {
			var args = Array.prototype.slice.call(arguments, 0);
			for(var i = 0, len = args.length; i < len; i++) {
				args[i] = (typeof args[i]).charAt(0);
			}
			var opts = map[args.join('')];
			if(opts) {
				for(i = 0; i < len; i++) {
					args[opts.i[i]] = arguments[i];
				}
				this[opts.f].apply(this, args);
			}
			return this;
		};
	}

	var bind = 'bind',
		delegate = 'delegate',
		unbind = 'un'+bind,
		undelegate = 'un'+delegate;

	$.fn.on = attach({
		'sf':	{f:bind, i:[0,1]},
		'sof':	{f:bind, i:[0,1,2]},
		'o':	{f:bind, i:[0]},
		'oo':	{f:bind, i:[0,1]},
		'ssf':	{f:delegate, i:[1,0,2]},
		'ssof':	{f:delegate, i:[1,0,2,3]},
		'os':	{f:delegate, i:[1,0]},
		'oso':	0
	});

	$.fn.off = attach({
		's':	{f:unbind, i:[0]},
		'sf':	{f:unbind, i:[0,1]},
		'o':	{f:unbind, i:[0]},
		'ss':	{f:undelegate, i:[1,0]},
		'ssf':	{f:undelegate, i:[1,0,2]},
		'os':	{f:undelegate, i:[1,0]}
	});

})(jQuery);