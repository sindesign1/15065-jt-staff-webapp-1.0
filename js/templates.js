var Templates = {

	init: function() {
		Templates.loadScripts();
	},

	loadScripts: function() {
		// $('head').prepend("<script src='js/jquery-1.11.3.js' type='text/javascript'></script>");
		// $('head').append("<script src='js/templates.js' type='text/javascript'></script>");
		// $('head').append("<link rel='stylesheet' type='text/css' href='css/style.css'>")
	},
}

$(document).ready(function(){
	Templates.init();
});