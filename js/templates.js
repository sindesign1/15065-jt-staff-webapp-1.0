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
		Templates.photoSidebar();
		Templates.childNav();
		Templates.chooseCentreHeader();
		Templates.learningStoryHeader();
		Templates.selectImages();
		Templates.albumnHeader();
		Templates.bunniesHeader();
		Templates.helpHeader();
		Templates.draftsHeader();
		Templates.editImageHeader();
	},

	loadScripts: function() {
		$('head').append("<script src='../js/sidebars.js' type='text/javascript'></script>");
		$('head').append("<script src='../js/learningstory.js' type='text/javascript'></script>");
		$('head').append("<script src='../js/taphold.js' type='text/javascript'></script>");
		$('head').append("<script src='../js/main.js' type='text/javascript'></script>");
		$('head').append("<script src='../js/common.js' type='text/javascript'></script>");
		$('head').append("<script src='../js/selectimages.js' type='text/javascript'></script>");
		$('head').append("<script src='../js/datautils.js' type='text/javascript'></script>");
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
	},

	photoSidebar: function() {
		$('#loadPhotoSidebar').load('../templates/addImageSidebar.html #addImageSidebar');
	},

	childNav: function() {
		$('#loadchildNav').load('../templates/childNav.html #addchildHeader');
	},

	chooseCentreHeader: function() {
		$('#loadChooseCentreHeader').load('../templates/headers.html #chooseCentreHeader');
	},

	learningStoryHeader: function() {
		$('#loadLearningStoryHeader').load('../templates/headers.html #learningStoryHeader');
	},

	selectImages: function() {
		$('#loadSelectImagesHeader').load('../templates/headers.html #selectImagesHeader');
	},

	albumnHeader: function() {
		$('#loadAlbumHeader').load('../templates/headers.html #albumHeader');
	},

	bunniesHeader: function() {
		$('#loadBunniesHeader').load('../templates/headers.html #bunniesHeader');
	},

	helpHeader: function() {
		$('#loadHelpHeader').load('../templates/headers.html #helpHeader');
	},

	draftsHeader: function() {
		$('#loadDraftsHeader').load('../templates/headers.html #draftsHeader');
	},

	childrenHeader: function() {
		$('#loadChildrenHeader').load('../templates/headers.html #childrenHeader');
	},

	editImageHeader: function() {
		$('#loadEditImageHeader').load('../templates/headers.html #editImageHeader');
	},

	messagesHeader: function() {
		$('#loadMessagesHeader').load('../templates/headers.html #messagesHeader');
	},
}

$(document).ready(function(){
	Templates.init();
});