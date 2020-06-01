odoo.define('website_alert.pulsar_alert', function (require) {
'use strict';

var publicWidget = require('web.public.widget');

publicWidget.registry.PulsarAlert = publicWidget.Widget.extend({
	jsLibs: [[
        '/website_alert/static/src/js/jquery.pulsate.js',
    ]],
	selector: '#pulsar-alert',
    disabledInEditableMode: true,
	start: function () {
		$('#pulsar-alert').fadeIn( 3000 ).pulsate({reach:100, color:"#ff0000"}).delay( 8000 ).slideUp( 300 );

	},
});

});