var Templates = {

	init: function() {
		Templates.loadScripts();
	},

	loadScripts = function() {
		$('head').append("<script src='js/jquery.js' type='text/javascript'></script>)
	},
}

$(document).ready(function(){
	Templates.init();
});