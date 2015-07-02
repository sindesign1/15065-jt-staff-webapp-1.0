var Sidebars = {

	init: function() {
		Sidebars.events();
	},

	events: function() {
		$('body').on('click touch', '.bioBtn', Sidebars.toggleBio);
	},

	toggleBio: function() {
		console.log('clicked');
		var $this = $(this);
		var $bio = $this.closest('.bioDisplay');

		$this.slideToggle($bio);


	}
}

$(document).ready(function(){
	Sidebars.init();
});