var Templates = {

	init: function() {
		Templates.loadScripts();
	},

	loadScripts = function() {
		$('head').append("<script src='js/jquery-1.11.3.js' type='text/javascript'></script>");
	},
}

$(document).ready(function(){
	Templates.init();
});