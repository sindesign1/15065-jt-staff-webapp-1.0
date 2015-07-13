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

		$('body').on('click touch', '#name', function(){
			console.log('name worked');
			$('#frameworksList, #activitiesList').hide();
			$('#tagList').fadeIn();
		});

		$('body').on('click touch', '#frameworks', function(){
			console.log('frameworks worked');
			$('#tagList, #activitiesList').hide();
			$('#frameworksList').fadeIn();
		});

		$('body').on('click touch', '#activities', function(){
			console.log('activities worked');
			$('#frameworksList, #tagList').hide();
			$('#activitiesList').fadeIn();
		});

		$('body').on('click touch', '#mainSidebarBtn', Sidebars.toggleMainSidebar);
		$('body').on('click touch', '#addCoverImg, #addImg, #addImgGrid', Sidebars.togglePhotoSidebar);
		$('body').on('taphold', '#coverPageContainer, .mainImage, .singleImage, .gridImages', Sidebars.toggleTagSidebar);
		$('body').on('click touch', '#editImageBtn', Sidebars.toggleTagSidebar);
		$('body').on('click touch', '#deleteImageBtn, .deleteImagesBtn', Sidebars.deleteImagesDialog);
		$('body').on('click touch', '#likeImageBtn', Sidebars.toggleImageLike);
		$('body').on('click touch', '.modalBtn', Sidebars.deleteImages);
		$('body').on('click touch', '.doneImagesBtn', Sidebars.editImagesMulti);
		$('body').on('click touch', '.classroomImageClose', Sidebars.closeMainModal);

		$('body').on('click touch', '.doneBtn, .cancelBtn', Sidebars.closeTagSidebar);
		$('body').on('click touch', '.thumbnail', Sidebars.openMainModal);

		if ( window.sourcePage == 'classroom' ) {
			console.log('setting li ons to Sidebars');
			$('body').off('click touch', '.li-profiles');
			$('body').off('click touch', '.li-frameworks');
			$('body').off('click touch', '.li-activities');
			$('body').on('click touch', '.li-profiles', Sidebars.addProfileTag);
			$('body').on('click touch', '.li-frameworks', Sidebars.addFramework);
			$('body').on('click touch', '.li-activities', Sidebars.addActivity);
		}		

		$('body').on('click touch', '.edit-placeholder', function() {$(this).text('')});

		$('body').on('change', '.frameworksSelect', Sidebars.changeFramework);
		// $('.frameworksSelect').change(Sidebars.changeFramework);

		$(document).on('click touch', '#coverPageContainer', Sidebars.closePhotoSidebar);
	},

	toggleMainSidebar: function() {
		console.log('clicked');
		if($('#mainSidebar').hasClass('sidebarLeft')) {
			$('#mainSidebar').toggleClass('openLeft');
			$('body').toggleClass('overflow');
		} else if($('#mainSidebar').hasClass('sidebarRight')) {
			$('#mainSidebar').toggleClass('openRight');
			$('body').toggleClass('overflow');
		}
		
	},

	togglePhotoSidebar: function(e) {
		console.log('photo sidebar clicked');
		window.divForBackground = '#coverPageContainer';
		e.stopPropagation();
		$('#addImageSidebar').addClass('display');
		if($('#addImageSidebar').hasClass('sidebarLeft')) {
			$('#addImageSidebar').addClass('openLeft');
		} else if($('#addImageSidebar').hasClass('sidebarRight')) {
			$('#addImageSidebar').addClass('openRight');
		}
		$('body').css('overflow', 'hidden');
	},

	toggleTagSidebar: function() {
		console.log('tag sidebar clicked');
		if($('#tagSidebar').hasClass('sidebarLeft')) {
			$('#tagSidebar').addClass('openLeft');
		} else if($('#tagSidebar').hasClass('sidebarRight')) {
			$('#tagSidebar').addClass('openRight');
		}

		// $('body').css('overflow', 'hidden');
		// $('.sidebarRight').css('right', '0px');
		$('.shrinkContainer').animate({'width': '55%', 'height': '55%', 'padding': '20px 20px'});
		$('.editImageTextArea div').focus();
		// $('.mainImageSection').css({'z-index': '-800'});
//		$('.classGallery').hide();

		$('.editImageTextArea').show();
		$('.profileTagsSection').show();
		$('.frameworksSection').show();
		$('.activitiesSection').show();

	},

	closeTagSidebar: function() {
		console.log('closing sidebar');
//		$('.classGallery').show();
//		$('.mainImageSection').hide();
		$('.mainImageSection').css({'z-index': '-800'});

		$('.shrinkContainer').animate({'width': '100%', 'height': '100%'});

		if($('#tagSidebar').hasClass('sidebarLeft')) {
			$('#tagSidebar').removeClass('openLeft');
		} else if($('#tagSidebar').hasClass('sidebarRight')) {
			$('#tagSidebar').removeClass('openRight');
		}
		$('body').css('overflow', 'auto');
	},

	closePhotoSidebar: function() {
		console.log('rar');
		$('#addImageSidebar').removeClass('display');
		if($('#addImageSidebar').hasClass('sidebarLeft')) {
			$('#addImageSidebar').removeClass('openLeft');
		} else if($('#addImageSidebar').hasClass('sidebarRight')) {
			$('#addImageSidebar').removeClass('openRight');
		}
		$('body').css('overflow', 'auto');
	},

	openMainModal: function() {
		console.log('open main modal');

		if ( !window.selectImagesChecked ) {
			var thumbImg = $(this).find('.classroomThumbImg').prop('src');
			var mainImg = thumbImg.replace('classroomThumbs', 'classroomLarge').replace('thumb_', 'large_');

			window.selectedImage = mainImg;

			// $('.headerPlaceholder').hide();
			// $('.modalHeaderPlaceholder').show();

			// $('.classroomLargeImg').attr("src",mainImg);
			// $('.modal__overlay').css({'opacity': '1', 'transform': 'scale(1)', 'z-index': '800'});

			$('.mainImage-extra').remove();
	
			$('.mainImage').css("background-image",'url(' + mainImg + ')');
			$('#classroom').hide();
			$('.mainImageSection').show();
			$('#loadMainFooter').hide();
			$('.mainImageSection').animate({'opacity': '1'});
			// $('#gridHeader').hide();
			// $('#imageHeader').show();
			$('#loadImgActionFooter').show();
		}
	},

	closeMainModal: function() {
		console.log('close main modal');

		Sidebars.closeTagSidebar();

		$('#classroom').show();
		$('#gridHeader').show();
		$('#imageHeader').hide();

		$('.headerPlaceholder').show();
		$('.modalHeaderPlaceholder').hide();
		$('#loadMainFooter').show();
		$('.mainImageSection').css({'opacity': '0'});
		$('.classGallery').show();
		$('.mainImage').animate({'width': '100%', 'height': '100%'});

		$('.editImageTextArea').hide();
		$('.profileTagsSection').hide();
		$('.frameworksSection').hide();
		$('.activitiesSection').hide();
		$('#loadImgActionFooter').hide();

		$('.editImageTextArea textarea').val('');
		// $('.frameworksSection ul').find('li').not(':first').remove();
		// $('.activitiesSection ul').find('li').not(':first').remove();
		$('.frameworksSection ul').find('li').remove();
		$('.activitiesSection ul').find('li').remove();
		$('.profileTagsSection h6').text('');

		window.addedProfileTags = new Array();
		window.addedFrameworks = new Array();
		window.addedActivities = new Array();
	},

	editImagesMulti: function() {

		Sidebars.openMainModal();

		$('.mainImage-extra').remove();
		$('.mainImage').css("background-image",'');

		if ( window.selectedImages.length > 0 ) {
			$('.mainImage').addClass('mainImage-0').addClass('arrange-horizontally');
			$('.mainImage').css("background-image",'url(' + window.selectedImages[0] + ')');
		}

		for ( var i=1; i<window.selectedImages.length; i++ ) {
			var thisMainImage = $('<div class="mainImage"/>');
			thisMainImage.addClass('mainImage-extra').addClass('mainImage-' + i).css("background-image",'url(' + window.selectedImages[i] + ')');
			thisMainImage.insertAfter('.mainImage-'+(i-1));

			$('.mainImage-' + i).addClass('arrange-horizontally');
		}

		$('.mainImage').css({'width': '32%', 'height': '32%'})
		$('.classGallery').hide();
		$('.mainImageSection').show();
		$('#loadMainFooter').hide();
		$('.mainImageSection').animate({'opacity': '1'});
		$('#gridHeader').hide();
		$('#imageHeader').show();
		$('#loadImgActionFooter').show();

		Sidebars.toggleTagSidebar();
	},

	addSectionItem: function(obj, sectionClass, addedArray) {

		var titleText = $(obj).find('p.title').text();
		var contentText = $(obj).find('p.content').text();
		var pText = $(obj).find('p').text();

		if ( sectionClass.substring(0, 10) == '.framework' ) {
			if ( !titleText ) {
				titleText = $(obj).prevUntil('li p.title').find('p.title').last().text();
			}
		}

		if ( !contentText ) {
			titleText = pText;
			contentText = '<span class="greyText edit-placeholder">Click here to add a sub-paragraph</span>';
		}

		if ( $.inArray(titleText+contentText, addedArray) == -1 ) {

			var pTag = $(sectionClass).find("ul li h4:contains('" + titleText + "')");
			if ( !pTag.text() ) {
			
				$(sectionClass).find('ul').first().append (
					$('<li/>').append(
							$('<h4 contenteditable=true/>').addClass('frameworksTitle').html(titleText)
						).append(
							$('<ul/>')
						)
					)
				;
			}

			pTag = $(sectionClass).find("ul li h4:contains('" + titleText + "')");
			var ulTag = pTag.parent().find('ul');
			ulTag.append(
				$('<li/>').append(
					$('<p contenteditable=true/>').html(contentText)
				)
			);

			addedArray.push(titleText+contentText);
		}
	},

	addFramework: function() {
		Sidebars.addSectionItem(this, '.frameworksSection', window.addedFrameworks);
	},

	addActivity: function() {
		Sidebars.addSectionItem(this, '.activitiesSection', window.addedActivities);
	},

	addProfileTag: function() {

		var sectionClass = '.profileTagsSection';
		var obj = this;
		var addedArray = window.addedProfileTags;

		var personName = $(obj).find('.personName').text();

		if ( $.inArray(personName, addedArray) == -1 ) {
			addedArray.push(personName);

			var tagText = '<span class="greyText">With </span>' + addedArray[0];
			if ( addedArray.length > 1 ) {
				if ( addedArray.length > 2 ) {
					for ( var i=1; i<addedArray.length-1; i++ ) {
						tagText += ', ' + addedArray[i];
					}
				}

				tagText += '<span class="greyText"> and </span>' + addedArray[addedArray.length-1];
			}

			$(sectionClass).find('h6').html(tagText);
		}
	},

	changeFramework: function() {
		$('#frameworksList ul').children().remove();

		var val = $(this).val();
		var frameworkData = window.frameworkData[val];
		for ( var i=0; i<frameworkData.length; i++ ) {
			$('#frameworksList ul').append(
				$('<li class="li-frameworks"/>').append(
					frameworkData[i].title 
					?
					$('<p class="title"/>').text(frameworkData[i].title)
					:
					null
				).append(
					$('<p class="content"/>').text(frameworkData[i].content)
				)
			);
		}
	},

	deleteImagesDialog: function() {

		Sidebars.closeTagSidebar();

		var msg = "Are you sure about this? This image will be permanently deleted from your Journey Tree on all devices.";

		if ( window.fromAlbum ) {
			msg = 'This image will only be removed from this album but will but will still be available in your Journey Tree images.'
		}
		if ( window.selectedImages.length > 0 ) {
			msg = "Are you sure about this? These images will be permanently deleted from your Journey Tree on all devices.";

			if ( window.fromAlbum ) {
				msg = 'These images will only be removed from this album but will but will still be available in your Journey Tree images.'
			}
		}

		$('#modalMsg').html('<p>' + msg + '</p>');

		$('#dialogModal').modal({
		  fadeDuration: 500,
		  fadeDelay: 0.50,
		  escapeClose: false,
		  clickClose: false,
		  showClose: false
		});
	},

	deleteImages: function() {

		$.modal.close();

		window.deletedImages = window.deletedImages || new Array();
		window.deletedImages = window.deletedImages.concat(window.selectedImages);

		if ( window.selectedImage ) {
			window.deletedImages.push(window.selectedImage);
		}

		for ( var i=0; i<window.deletedImages.length; i++ ) {

			var index = window.selectedImages.indexOf(window.deletedImages[i]);
			if ( index > -1 ) {
			    window.selectedImages.splice(index, 1);
			}

//			var srcVal = "../img/classroomThumbs/" + window.deletedImages[i].substring(window.deletedImages[i].lastIndexOf('/')+1);

			var srcVal = window.deletedImages[i].replace('Large', 'Thumbs').replace('large', 'thumb');

			$.each($('img'), function(index, value ) {
				var thisImgSrc = value.src;

				if ( thisImgSrc.substring(thisImgSrc.lastIndexOf('/')) == srcVal.substring(srcVal.lastIndexOf('/')) ) {
					var labelElement = $(value).parent();
					var thumbnailElement = labelElement.parent();

					thumbnailElement.hide();
				}
			});
		}

		Sidebars.closeMainModal();
	},

	toggleImageLike: function() {
		var heartIcon = $(this).find('.jtIcons');
		var heart = heartIcon.text();
		if ( heart == 'e' ) {
			heartIcon.css('color', 'red').text('d');
		} else {
			heartIcon.css('color', '').text('e');
		}
	}
}


window.addedProfileTags = new Array();
window.addedFrameworks = new Array();
window.addedActivities = new Array();

window.frameworkData = {

	federal: [
		{
			title: '1.0 Connectedness',
			content: '1.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			content: '1.2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			content: '1.3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '2.0 Wellbeing',
			content: '2.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			content: '2.2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		}
	],
	state: [
		{
			title: 'a1.0 Connectedness',
			content: '1a.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			content: 'a1.2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: 'a2.0 Wellbeing',
			content: 'a2.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			content: 'a2.2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			content: 'a2.3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			content: 'a2.4 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		}
	]
};

$(document).ready(function(){
	Sidebars.init();
});
