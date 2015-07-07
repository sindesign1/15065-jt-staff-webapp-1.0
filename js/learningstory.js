var Story = {

	init: function() {
		Story.events();
		Story.showArrow();
	},

	events: function() {
		$('body').on('click touch', '#header', Story.changeHeaderText);
	},

	changeHeaderText: function(e) {
		e.preventDefault();
		$('#header, #subHeader').hide();

		var headerText = $('#header').text();
		var subHeaderText = $('#subHeader').text();

		$('#headerInput, #subHeaderInput').show();
		$('#headerInput').focus();

		$('#headerInput').val(headerText);
		$('#subHeaderInput').val(subHeaderText);
	},

	showArrow: function() {
		if (!$.trim($("#headerInput, #subHeaderInput").val())) {
		    console.log('has input');
		}
	},

}

$(document).ready(function(){
	Story.init();
});