var Sidebars = {

	init: function() {
		Sidebars.events();
	},

	events: function() {
		$('#messageSidebar-c').on('click touch', '#hannahBioBtn', function(e){
			e.stopPropagation();
			$('#hannahBio').slideToggle();
		});

		$('#messageSidebar-c').on('click touch', '#carolBioBtn', function(e){
			e.stopPropagation();
			$('#carolBio').slideToggle();
		});

		$('#tagSidebar').on('click touch', '#name', function(){
			$('#frameworksList, #activitiesList').hide();
			$('#tagList').fadeIn();
		});

		$('#tagSidebar').on('click touch', '#frameworks', function(){
			$('#tagList, #activitiesList').hide();
			$('#frameworksList').fadeIn();
		});

		$('#tagSidebar').on('click touch', '#activities', function(){
			$('#frameworksList, #tagList').hide();
			$('#activitiesList').fadeIn();
		});


	},

}

$(document).ready(function(){
	Sidebars.init();
});