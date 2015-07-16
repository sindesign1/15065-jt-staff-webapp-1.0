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
			$('#normalSearch').show();
			$('#frameworkSearch').hide();
			$('#frameworksList, #activitiesList').hide();
			$('#tagList').fadeIn();
		});

		$('body').on('click touch', '#frameworks', function(){
			console.log('frameworks worked');
			$('#normalSearch').hide();
			$('#frameworkSearch').show();
			$('#tagList, #activitiesList').hide();
			$('#frameworksList').fadeIn();
		});

		$('body').on('click touch', '#activities', function(){
			console.log('activities worked');
			$('#normalSearch').show();
			$('#frameworkSearch').hide();
			$('#frameworksList, #tagList').hide();
			$('#activitiesList').fadeIn();
		});

		$('body').on('click touch', '#mainSidebarBtn', Sidebars.toggleMainSidebar);
		$('body').on('click touch', '#treeBtn', Sidebars.toggleChildrenSidebar);
		$('body').on('click touch', '#addCoverImg, #addImg, #addImgGrid, #writePostAddPhotos', Sidebars.togglePhotoSidebar);
		$('body').on('taphold', '#coverPageContainer, .mainImage, .singleImage, .gridImages', Sidebars.toggleTagSidebar);
		$('body').on('click touch', '#editImageBtn, #writePostAddTags', Sidebars.toggleTagSidebar);
		$('body').on('click touch', '#deleteImageBtn, .deleteImagesBtn', Sidebars.deleteImagesDialog);
		$('body').on('click touch', '#likeImageBtn', Sidebars.toggleImageLike);
		$('body').on('click touch', '.modalBtn', Sidebars.deleteImages);
		$('body').on('click touch', '.classroomImageClose', Sidebars.closeMainModal);
		$('body').on('click touch', '#threeDots', Sidebars.toggleCharlotteMessageSidebar);

		$('body').on('click touch', '.doneBtn', Sidebars.closeSidebars);
		$('body').on('click touch', '.cancelBtn', Sidebars.closeSidebarsWithCancel);
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
		$('body').on('click touch', '#frameworks', Sidebars.changeFramework);

		$(document).on('click touch', '#coverPageContainer', Sidebars.closePhotoSidebar);
	},

	toggleChildrenSidebar: function() {
		console.log('clicked');
		if($('#childListSidebar').hasClass('sidebarLeft')) {
			$('#childListSidebar').toggleClass('openLeft');
			$('body').toggleClass('overflow');
		} else if($('#childListSidebar').hasClass('sidebarRight')) {
			$('#childListSidebar').toggleClass('openRight');
			$('body').toggleClass('overflow');
		}
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

	toggleCharlotteMessageSidebar: function() {
		console.log('clicked');
		if($('#messageSidebar-c').hasClass('sidebarLeft')) {
			$('#messageSidebar-c').toggleClass('openLeft');
			$('body').toggleClass('overflow');
		} else if($('#messageSidebar-c').hasClass('sidebarRight')) {
			$('#messageSidebar-c').toggleClass('openRight');
			$('body').toggleClass('overflow');
		}
		if($('#messageSidebar-c').hasClass('openRight')){
			$('.childContent').animate({"margin-left":"-320px", "width":"768px"}, 200);
			$('.messagesMainList').animate({"margin-left":"-320px"}, 200);
			$('.MessageThreadNames').animate({"right":"320px"}, 200);
			$('.messageOverlay').fadeIn();
		} else {
			$('.childContent').animate({"margin-left":"0px", "width":"100%"}, 200);
			$('.messagesMainList').animate({"margin-left":"0px"}, 200);
			$('.MessageThreadNames').animate({"right":"0px"}, 200);
			$('.messageOverlay').fadeOut();
		}

		console.log($('#mainSidebar'));
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

		if($('#addImageSidebar').hasClass('openRight')) {
			$('.writePostControls').css('width', '53%');
			$('.editSection').css('width', '55%');
		} else if(!$('#addImageSidebar').hasClass('openRight')) {
			$('.editSection').css('width', '100%');
			$('.writePostControls').css('width', '100%');
		}
	},

	toggleTagSidebar: function() {
		console.log('tag sidebar clicked');


		if ( window.selectImagesChecked ) {
			Sidebars.editImagesMulti();
		} 

		$('#imagesHeader').hide();
		$('#loadSelectImagesHeader').hide();
		$('#loadEditImageHeader').show();
		$('.postBtnContainer').show();

		if($('#tagSidebar').hasClass('sidebarLeft')) {
			$('#tagSidebar').addClass('openLeft');
		} else if($('#tagSidebar').hasClass('sidebarRight')) {
			$('#tagSidebar').addClass('openRight');
		}

		// $('body').css('overflow', 'hidden');
		// $('.sidebarRight').css('right', '0px');
		$('.mainImageSection').animate({'width': '59%', 'height': '55%', 'padding': '90px 0px 0px 0px'});
		$('.editSection').show().animate({'width': '59%'});
		//$('.writePostControls').animate('width', '55%');
		$('.writePostControls').css('width', '53%');

		// $('.mainImageSection').css({'z-index': '-800'});
//		$('.classGallery').hide();

		$('.editImageTextArea').show();
		$('#postInput').focus();
		$('.profileTagsSection').show();
		$('.frameworksSection').show();
		$('.activitiesSection').show();
		$('.frameworksSection').children().remove();
		Sidebars.changeFramework();
	},

	closeSidebars: function() {
		console.log('closing sidebar');
//		$('.classGallery').show();
//		$('.mainImageSection').hide();
		// $('.mainImageSection').css({'z-index': '-800'});

		Story.sliderOpen = false;

		$('#loadEditImageHeader').hide();
		if ( window.selectImagesChecked ) {
			$('#imagesHeader').hide();
			$('#loadSelectImagesHeader').show();
		} else {
			$('#imagesHeader').show();
			$('#loadSelectImagesHeader').hide();
		}
		$('.editSection').show();
		$('.writePostControls').css('width', '100%');

		$('.postBtnContainer').hide();

		$('.editSection').animate({'width': '100%'});
		$('.writePostControls').animate('width', '94%');
		$('.mainImageSection').animate({'width': '100%', 'height': '100%', 'padding': '90px 0 0 0'});

		if($('#tagSidebar').hasClass('sidebarLeft')) {
			$('#tagSidebar').removeClass('openLeft');
		} else if($('#tagSidebar').hasClass('sidebarRight')) {
			$('#tagSidebar').removeClass('openRight');
		}
		$('body').css('overflow', 'auto');


		$('#addImageSidebar').removeClass('display');
		if($('#addImageSidebar').hasClass('sidebarLeft')) {
			$('#addImageSidebar').removeClass('openLeft');
		} else if($('#addImageSidebar').hasClass('sidebarRight')) {
			$('#addImageSidebar').removeClass('openRight');
			$('#learningStoryPage').css('padding', '20px 100px 100px 100px');
			$('.singleImageContainer').css('width', '100%');
			$('.singleImage').css('border', 'none');
			$('.firstImage, .secondImage, .thirdImage').css('border', 'none');
			$('.gridImages').css({'width': '100%'});
			$('.firstImage').css('height', '500px');
			$('.secondImage, .thirdImage').css({'height': '250px', 'width': '49%'});
			$('.thirdImage').css('margin-left', '7.3px');
			$('.photoPlaceholder').hide();
		}

		if ( window.sourcePage == 'ls-coverPage' ) {
			if ( $('#storyPageTop' + window.frameworkIndex).find('.frameworksSection' + window.frameworkIndex + ' ul li').length < 1 &&
				$('#storyPageTop' + window.frameworkIndex).find('.activitiesSection' + window.frameworkIndex + ' ul li').length < 1 ) {
				$('#storyPageTop' + window.frameworkIndex).remove();
			}
		}
	},

	closeSidebarsWithCancel: function() {
		Sidebars.closeSidebars();

		if ( window.sourcePage == 'ls-coverPage' ) {
			$('#storyPageTop' + window.frameworkIndex).remove();
			if ( $('.singleImage-active').parent().hasClass('singleImageContainer') ) {
				$('.singleImage-active').parent().remove(); //can't get the image back once removed (same as overlay)
				window.completedCurrentImageSelectSection = true;
			} else if ( $('.singleImage-active').parent().parent().hasClass('imageGridContainer') ) {
				$('.singleImage-active').parent().parent().remove(); //can't get the image back once removed (same as overlay)
				window.completedCurrentImageSelectSection = true;
			}
		}
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
			var mainImg = thumbImg.replace('Thumbs', 'Large').replace('thumb_', 'large_');

			window.selectedImage = mainImg;

			// $('.headerPlaceholder').hide();
			// $('.modalHeaderPlaceholder').show();

			// $('.classroomLargeImg').attr("src",mainImg);
			// $('.modal__overlay').css({'opacity': '1', 'transform': 'scale(1)', 'z-index': '800'});

			$('.mainImage-extra').remove();
	
			$('.mainImage').css("background-image",'url(' + mainImg + ')');
			$('#gallery').hide();
			$('.mainImageSection').show();
			$('#loadMainFooter').hide();
			$('.mainImageSection').css({'opacity': '1'});
			// $('.mainImageSection').animate({'opacity': '1'});
			// $('#gridHeader').hide();
			// $('#imageHeader').show();
			$('#loadImgActionFooter').show();
			$('#likeImageBtn').find('.jtIcons').css('color', '').text('e');

			Sidebars.shrinkChildHeader();
			window.mainModalOpened = true;
		}
	},

	closeMainModal: function() {
		console.log('close main modal');

		Sidebars.closeSidebars();

		$('#classroom').show();
		$('#gallery').show();
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
		$('.editSection').hide();
		$('.mainImageSection').hide();

		$('.editImageTextArea textarea').val('');
		// $('.frameworksSection ul').find('li').not(':first').remove();
		// $('.activitiesSection ul').find('li').not(':first').remove();
		$('.frameworksSection ul').find('li').remove();
		$('.activitiesSection ul').find('li').remove();
		$('.profileTagsSection h6').text('');
		$('#likeImageBtn').find('.jtIcons').css('color', '').text('e');

		window.addedProfileTags = new Array();
		window.addedFrameworks = new Array();
		window.addedActivities = new Array();

		window.mainModalOpened = false;
		Sidebars.expandChildHeader();
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
	},

	addSectionItemOld: function(obj, sectionClass, addedArray) {

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

			var pTag = $(sectionClass).find("ul li h4").
					filter(function() {
					    return $(this).text() == titleText;
					});

			if ( pTag.length == 0 ) {
			
				$(sectionClass).find('ul').first().append (
					$('<li/>').append(
							$('<h4 contenteditable=true/>').addClass('frameworksTitle').html(titleText)
						).append(
							$('<ul/>')
						)
					)
				;
			}

			// pTag = $(sectionClass).find("ul li h4:contains('" + titleText + "')");
			pTag = $(sectionClass).find("ul li h4").
					filter(function() {
					    return $(this).text() == titleText;
					});

			var ulTag = pTag.parent().find('ul');
			ulTag.append(
				$('<li/>').append(
					$('<p contenteditable=true/>').html(contentText)
				)
			);

			addedArray.push(titleText+contentText);
		}
	},

	addSectionItem: function(obj, sectionClass, addedArray) {

		if ( window.sourcePage == 'ls-coverPage' ) {
			Sidebars.addSectionItemOld(obj, sectionClass, addedArray);
			return;
		}

		var headingText = $(obj).find('p.heading').text();
		var titleText = $(obj).find('p.title').text();
		var contentText = $(obj).find('p.content').text();
		var pText = $(obj).find('p').text();

		if ( sectionClass.substring(0, 10) == '.framework' ) {
			if ( !headingText ) {
				headingText = $(obj).prevUntil('li p.heading').find('p.heading').last().text();
			}
		}

		if ( !titleText ) {
			titleText = pText;
		}

		if ( $.inArray(headingText+titleText, addedArray) == -1 ) {

			$(sectionClass).append(
				$('<div class="addedFramework"/>').text(titleText)
			);

			addedArray.push(headingText+titleText);
		}
	},

	addFramework: function() {
		Sidebars.addSectionItem(this, '.frameworksSection', window.addedFrameworks);
	},

	addActivity: function() {
		Sidebars.addSectionItem(this, '.frameworksSection', window.addedActivities);
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

		var val = $('.frameworksSelect').val();
		if ( !val ) {
			val = 'federal';
		}

		var frameworkData = window.frameworkData[val];
		for ( var i=0; i<frameworkData.length; i++ ) {
			$('#frameworksList ul').append(
				$('<li class="li-frameworks"/>').append(
					frameworkData[i].heading 
					?
					$('<p class="heading"/>').text(frameworkData[i].heading)
					:
					null
				).append(
					$('<p class="title"/>').text(frameworkData[i].title)
				).append(
					$('<p class="content"/>').text(frameworkData[i].content)
				)
			);
		}
	},

	deleteImagesDialog: function() {

		Sidebars.closeSidebars();

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
		var heartIcon = $('#likeImageBtn').find('.jtIcons');
		var heart = heartIcon.text();
		if ( heart == 'e' ) {
			$('#likeImageBtn').find('.jtIcons').css('color', 'red').text('d');
		} else {
			$('#likeImageBtn').find('.jtIcons').css('color', '').text('e');
		}
	},

	shrinkChildHeader: function() {
		if ( !$('.childheader').hasClass('shrink') ) {
	        $('.childheader').addClass('shrink');
	        $('.messageSidebar').addClass('fixed');
	        $('.childFixed').addClass('fixed');
		}
	},

	expandChildHeader: function() {
        $('.childheader').removeClass('shrink');
        $('.messageSidebar').removeClass('fixed');
        $('.childFixed').removeClass('fixed');
	}
}


window.addedProfileTags = new Array();
window.addedFrameworks = new Array();
window.addedActivities = new Array();

window.frameworkData = {

	federal: [
		{
			heading: '1.0 Connectedness',
			title: '1.1 belonging',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '1.2 responsiveness',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '1.3 awareness',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '1.4 responsibility',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '2.0 Identity',
			title: '2.1 safety',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '2.2 autonomy',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '2.3 confidence',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '2.4 empathy',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '3.0 Wellbeing',
			title: '3.1 emotional',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '3.2 physical',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '4.0 Confidence',
			title: '4.1 curiosity',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '4.2 problem-solving',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '4.3 adaptability',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '4.4 connectedness',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '5.0 Communication',
			title: '5.1 interaction',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '5.2 engagement',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '5.3 expression',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '5.4 understanding',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '5.5 information',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		}
	],
	state: [
		{
			heading: 'a1.0 Connectedness',
			title: '1.3 becoming',
			content: '1a.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '1.4 becoming',
			content: 'a1.2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			heading: 'a2.0 Wellbeing',
			title: '2.1 becoming',
			content: 'a2.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '2.2 becoming',
			content: 'a2.2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '2.3 becoming',
			content: 'a2.3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			title: '2.4 becoming',
			content: 'a2.4 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		}
	]
};

$(document).ready(function(){
	Sidebars.init();
});
