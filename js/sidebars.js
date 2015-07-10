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
		$('body').on('taphold', '#coverPageContainer, .mainImageSection', Sidebars.toggleTagSidebar);
		$('body').on('click touch', '#editImageBtn', Sidebars.toggleTagSidebar);
		$('body').on('click touch', '.classroomImageClose', Sidebars.closeMainModal);

		$('body').on('click touch', '.doneBtn, .cancelBtn', Sidebars.closeTagSidebar);
		$('body').on('click touch', '.thumbnail', Sidebars.openMainModal);

		$('body').on('click touch', '.li-profiles', Sidebars.addProfileTag);
		$('body').on('click touch', '.li-frameworks', Sidebars.addFramework);
		$('body').on('click touch', '.li-activities', Sidebars.addActivity);
		$('body').on('click touch', '.edit-placeholder', function() {$(this).text('')});

		$(document).on('click touch', '#coverPageContainer', Sidebars.closePhotoSidebar);
	},

	toggleMainSidebar: function() {
		console.log('clicked');
		if($('#mainSidebar').hasClass('sidebarLeft')) {
			$('#mainSidebar').toggleClass('openLeft');
		} else if($('#mainSidebar').hasClass('sidebarRight')) {
			$('#mainSidebar').toggleClass('openRight');
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
	},

	toggleTagSidebar: function() {
		console.log('tag sidebar clicked');
		if($('#tagSidebar').hasClass('sidebarLeft')) {
			$('#tagSidebar').addClass('openLeft');
		} else if($('#tagSidebar').hasClass('sidebarRight')) {
			$('#tagSidebar').addClass('openRight');
		}

//		$('.modal__overlay').css({'width': '70%'});
//		$('.mainImage').css({'width': '70%'});
		// $('.sidebarRight').css('right', '0px');
		$('.mainImage').animate({'width': '20%', 'height': '20%'});
		$('.editImageTextArea textarea').focus();
		$('.mainImageSection').css({'z-index': '-800'});
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

		$('.mainImage').animate({'width': '100%', 'height': '100%'});

		if($('#tagSidebar').hasClass('sidebarLeft')) {
			$('#tagSidebar').removeClass('openLeft');
		} else if($('#tagSidebar').hasClass('sidebarRight')) {
			$('#tagSidebar').removeClass('openRight');
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
	},
	openMainModal: function() {
		console.log('open main modal');

		if ( !window.selectImagesChecked ) {
			var thumbImg = $(this).find('.classroomThumbImg').prop('src');
			var mainImg = thumbImg.replace('classroomThumbs', 'classroomLarge').replace('thumb_', '');

			// $('.headerPlaceholder').hide();
			// $('.modalHeaderPlaceholder').show();

			// $('.classroomLargeImg').attr("src",mainImg);
			// $('.modal__overlay').css({'opacity': '1', 'transform': 'scale(1)', 'z-index': '800'});

			$('.mainImage').css("background-image",'url(' + mainImg + ')');
			$('.classGallery').hide();
			$('.mainImageSection').show();
			$('#loadMainFooter').hide();
			$('.mainImageSection').animate({'opacity': '1', 'z-index': '-800'});
			$('#gridHeader').hide();
			$('#imageHeader').show();
		}
	},

	closeMainModal: function() {
		console.log('close main modal');

		Sidebars.closeTagSidebar();

		$('#gridHeader').show();
		$('#imageHeader').hide();

		$('.headerPlaceholder').show();
		$('.modalHeaderPlaceholder').hide();
		$('#loadMainFooter').show();
		$('.mainImageSection').css({'opacity': '0', 'z-index': '-800'});
		$('.classGallery').show();
		$('.mainImage').animate({'width': '100%'});

		$('.editImageTextArea').hide();
		$('.profileTagsSection').hide();
		$('.frameworksSection').hide();
		$('.activitiesSection').hide();

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

	addSectionItem: function(obj, sectionClass, addedArray) {

		var titleText = $(obj).find('p.title').text();
		var contentText = $(obj).find('p.content').text();
		var pText = $(obj).find('p').text();

		if ( sectionClass == '.frameworksSection' ) {
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
							$('<h4 contenteditable=true/>').html(titleText)
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
					$('<h6 contenteditable=true/>').html(contentText)
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
	}
}


window.addedProfileTags = new Array();
window.addedFrameworks = new Array();
window.addedActivities = new Array();

$(document).ready(function(){
	Sidebars.init();
});
