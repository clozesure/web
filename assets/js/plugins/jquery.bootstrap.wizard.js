@@ -1,7 +1,7 @@
/*!
 * jQuery twitter bootstrap wizard plugin
 * Examples and documentation at: http://github.com/VinceG/twitter-bootstrap-wizard
 * version 1.4.2
 * Requires jQuery v1.3.2 or later
 * Supports Bootstrap 2.2.x, 2.3.x, 3.0
 * Dual licensed under the MIT and GPL licenses:
 @@ -329,16 +329,16 @@ $.fn.bootstrapWizard.defaults = {
	previousSelector: '.wizard li.previous',
	firstSelector:    '.wizard li.first',
	lastSelector:     '.wizard li.last',
    finishSelector:   '.wizard li.finish',
	backSelector:     '.wizard li.back',
	onShow:           null,
	onInit:           null,
	onNext:           null,
	onPrevious:       null,
	onLast:           null,
	onFirst:          null,
    onFinish:         null,
    onBack:           null,
	onTabChange:      null,
	onTabClick:       null,
	onTabShow:        null
};
})(jQuery);
