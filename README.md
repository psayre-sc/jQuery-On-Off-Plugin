.on() and .off()
================

This jQuery plugin creates a forward compatible API for the new [.on()](http://api.jquery.com/on/) and
[.off()](http://api.jquery.com/off/) functions introduced in jQuery 1.7.

The jQuery team is moving away from the [.bind()](http://api.jquery.com/bind/), [.live()](http://api.jquery.com/live/),
and [.delegate()](http://api.jquery.com/delegate/) functions. As a result, you may want to start using the new .on() and
.off() functions now. This plugin maps the .on() and .off() functions to their .bind() and .delegate() counterparts.


Requirements
------------

* jQuery 1.4.3+


Notes
-----

This plugin is for people who have older versions of jQuery, but want to use the new functions. It will not provide any
backward compatibility if/when .live(), .bind() or .delegate() are depricated.