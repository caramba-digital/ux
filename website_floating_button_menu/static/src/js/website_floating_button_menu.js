odoo.define('website_floating_button_menu.website_floating_button_menu', function (require) {
'use strict';

var publicWidget = require('web.public.widget');

publicWidget.registry.MenuFloatingButton = publicWidget.Widget.extend({
	selector: '#menu_floating_button',
    events: {
        'click .st-menu-button-main': '_onClick',
    },
    
    _onClick: function (ev) {
    	 var mainBtn, panel, clicks, settings, launchPanelAnim, closePanelAnim, openPanel, boxClick;
    	 mainBtn = $(".st-menu-button-main");
    	 panel = $(".st-menu-panel");
    	 clicks = 0;
    	 //default settings
    	//default settings
    	    settings = $.extend({
    	      openDuration: 600,
    	      closeDuration: 200,
    	      rotate: true
    	    });
    	 //Open panel animation
    	 launchPanelAnim = function() {
    		 panel.animate({
    			 opacity: "toggle",
    			 height: "toggle"
    	      }, settings.openDuration);
    	    };

    	    //Close panel animation
    	    closePanelAnim = function() {
    	      panel.animate({
    	        opacity: "hide",
    	        height: "hide"
    	      }, settings.closeDuration);
    	    };
    	    
    	    //Open panel and rotate icon
    	    openPanel = function(e) {
    	      if (clicks === 0) {
    	        if (settings.rotate) {
    	          $(this).removeClass('rotateBackward').toggleClass('rotateForward');
    	        }

    	        launchPanelAnim();
    	        clicks++;
    	      } else {
    	        if (settings.rotate) {
    	          $(this).removeClass('rotateForward').toggleClass('rotateBackward');
    	        }

    	        closePanelAnim();
    	        clicks--;
    	      }
    	      e.preventDefault();
    	      return false;
    	    };
    	    

    	    //Allow clicking in panel
    	    boxClick = function(e) {
    	      e.stopPropagation();
    	    };

    	    //Main button click
    	    mainBtn.on('click', openPanel);

    	    //Prevent closing panel when clicking inside
    	    panel.click(boxClick);
    	    //Click away closes panel when clicked in document
    	    $(document).click(function() {
    	      closePanelAnim();
    	      if (clicks === 1) {
    	        mainBtn.removeClass('rotateForward').toggleClass('rotateBackward');
    	      }
    	      clicks = 0;
    	    });
    },
    	

});
});