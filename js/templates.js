var Templates = {

	init: function() {
		Templates.loadScripts();
		Templates.mainNavFooter();
		Templates.imgActionFooter();
		Templates.formatActionFooter();
		Templates.mainSidebar();
		Templates.childListSidebar();
		Templates.childListStatic();
		Templates.charlotteMessageSidebar();
		Templates.tagSidebar();
		Templates.photoSidebar();
		Templates.childNav();
		Templates.chooseCentreHeader();
		Templates.learningStoryHeader();
		Templates.imagesHeader();
		Templates.selectImages();
		Templates.albumnHeader();
		Templates.bunniesHeader();
		Templates.helpHeader();
		Templates.draftsHeader();
		Templates.editImageHeader();
		Templates.messagesHeader();
		Templates.childrenHeader();
		Templates.postHeader();
		Templates.charlotteHeader();
		Templates.jacobHeader();
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

	formatActionFooter: function() {
		$('#loadFormatActionFooter').load('../templates/botFormatActions.html #botFormatActions');
	},

	mainSidebar: function() {
		$('#loadMainSidebar').load('../templates/mainSidebar.html #mainSidebar');
	},

	childListSidebar: function() {
		$('#loadChildListSidebar').load('../templates/childListSidebar.html #childListSidebar');
	},

	childListStatic: function() {
		$('#loadChildListStatic').load('../templates/childListStatic.html #childListStatic');
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

	imagesHeader: function() {
		$('#loadImagesHeader').load('../templates/headers.html #imagesHeader');
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

	postHeader: function() {
		$('#loadPostHeader').load('../templates/headers.html #writePostHeader');
	},

	charlotteHeader: function() {
		$('#loadCharlotteHeader').load('../templates/headers.html #addCharlotteHeader');
	},

	jacobHeader: function() {
		$('#loadJacobHeader').load('../templates/headers.html #addJacobHeader');
	},

}

$(document).ready(function(){
	Templates.init();
});
