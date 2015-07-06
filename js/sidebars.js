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

		$('body').on('click touch', '#mainSidebarBtn', Sidebars.toggleMainSidebar);
		$('body').on('click touch', '#addCoverImg, #addImg, #addImgGrid', Sidebars.togglePhotoSidebar);
		$('body').on('click touch', '#addCoverTagBtn, #addTagBtn', Sidebars.toggleTagSidebar);
	},

	toggleMainSidebar: function() {
		console.log('clicked');
		if($('#mainSidebar').hasClass('sidebarLeft')) {
			$('#mainSidebar').toggleClass('openLeft');
		} else if($('#mainSidebar').hasClass('sidebarRight')) {
			$('#mainSidebar').toggleClass('openRight');
		}
	},

	togglePhotoSidebar: function() {
		console.log('photo sidebar clicked');
		$('#addImageSidebar').toggleClass('display');
		if($('#addImageSidebar').hasClass('sidebarLeft')) {
			$('#addImageSidebar').toggleClass('openLeft');
		} else if($('#addImageSidebar').hasClass('sidebarRight')) {
			$('#addImageSidebar').toggleClass('openRight');
		}
	},

	toggleTagSidebar: function() {
		console.log('tag sidebar clicked');
		$('#addImageSidebar').toggleClass('display');
		if($('#tagSidebar').hasClass('sidebarLeft')) {
			$('#tagSidebar').toggleClass('openLeft');
		} else if($('#tagSidebar').hasClass('sidebarRight')) {
			$('#tagSidebar').toggleClass('openRight');
		}
	}

}

$(document).ready(function(){
	Sidebars.init();
});