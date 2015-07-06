var Templates = {

	init: function() {
		Templates.loadScripts();
		Templates.mainNavFooter();
		Templates.imgActionFooter();
		Templates.mainSidebar();
		Templates.childListSidebar();
		Templates.charlotteMessageSidebar();
		Templates.charlotteMessageSidebar();
		Templates.tagSidebar();
	},

	loadScripts: function() {
		// $('head').prepend("<script src='js/jquery-1.11.3.js' type='text/javascript'></script>");
		$('head').append("<script src='../js/sidebars.js' type='text/javascript'></script>");
<<<<<<< HEAD
=======
		$('head').append("<link rel='stylesheet' type='text/css' href='../css/style.css'>");
>>>>>>> templateFunctionality
	},

	mainNavFooter: function() {
		$('#loadMainFooter').load('../templates/botMainNav.html #botMainNav');
	},

	imgActionFooter: function() {
		$('#loadImgActionFooter').load('../templates/botImgActions.html #botImgActions');
	},

	mainSidebar: function() {
		$('#loadMainSidebar').load('../templates/mainSidebar.html #mainSidebar');
	},

	childListSidebar: function() {
		$('#loadChildListSidebar').load('../templates/childListSidebar.html #childListSidebar');
	},

	charlotteMessageSidebar: function() {
		$('#loadCharlotteMsgSidebar').load('../templates/messageSidebar-c.html #messageSidebar-c');
	},

	jacobMessageSidebar: function() {
		$('#loadJacobMsgSidebar').load('../templates/messageSidebar-j.html #messageSidebar-j');
	},

	tagSidebar: function() {
		$('#loadTagSidebar').load('../templates/tagSidebar.html #tagSidebar');
	}

	photoSidebar: function() {
		$('#loadPhotoSidebar').load('../templates/addImageSidebar.html #addImageSidebar');
	}
}

$(document).ready(function(){
	Templates.init();
});