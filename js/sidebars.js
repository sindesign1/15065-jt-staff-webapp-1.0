var Sidebars = {

	init: function() {
		Sidebars.events();
	},

	events: function() {
		$('body').on('click touch', '#hannahBioBtn', function(e){
			e.stopPropagation();
			console.log('cliiicckkkkkk');
			$('#hannahBio').slideToggle();
		});

		$('body').on('click touch', '#carolBioBtn', function(e){
			console.log('cliiicckkkkkk');
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
			$('.MessageThreadNames').animate({"right":"320px", "top":"151px"}, 200);
			$('.childheader').addClass("shrink");
			$('.messageOverlay').fadeIn();
		} else {
			$('.childContent').animate({"margin-left":"0px", "width":"100%"}, 200);
			$('.messagesMainList').animate({"margin-left":"0px"}, 200);
			$('.MessageThreadNames').animate({"right":"0px", "top":"151px"}, 200);
			$('.childheader').addClass("shrink");
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
			heading: '1.0 Identity',
			title: '1.1 safe',
			content: 'Children feel safe, secure, and supported.'
		},
		{
			title: '1.2 autonomy',
			content: 'Children develop their emerging autonomy, inter-dependence, resilience and sense of agency.'
		},
		{
			title: '1.3 self identities',
			content: 'Children develop knowledgeable and confident self identities'
		},
		{
			title: '1.4 respect',
			content: 'Children learn to interact in relation to others with care, empathy and respect.'
		},
		{
			title: '2.0 Connectedness',
			title: '2.1 belonging',
			content: 'Children develop a sense of belonging to groups and communities and understanding of the reciprocal rights and responsibilities necessary for active community participation.'
		},
		{
			title: '2.2 diversity',
			content: 'Children respond to diversity with respect.'
		},
		{
			title: '2.3 fairness',
			content: 'Children become aware of fairness.'
		},
		{
			title: '2.4 responsible',
			content: 'Children become socially responsible and show respect for the environment.'
		},
		{
			title: '3.0 Wellbeing',
			title: '3.1 emotional',
			content: 'Children become strong in their social and emotional wellbeing.'
		},
		{
			title: '3.2 physical',
			content: 'Children take increasing responsibility for their own health and physical wellbeing.'
		},
		{
			title: '4.0 Involved Learners',
			title: '4.1 curiosity',
			content: 'Children develop dispositions for learning such as curiosity, cooperation, confidence, creativity, commitment, enthusiasm, persistence, imagination and reflexivity.'
		},
		{
			title: '4.2 problem-solving',
			content: 'Children develop a range of skills and processes such as problem solving, enquiry, experimentation, hypothesizing, researching and investigating.'
		},
		{
			title: '4.3 adaptability',
			content: 'Children transfer and adapt what they learn from one context to another.'
		},
		{
			title: '4.4 connectedness',
			content: 'Children resource their own learning though connecting with people, place, technologies and natural and processed materials.'
		},
		{
			title: '5.0 Communication',
			title: '5.1 interaction',
			content: 'Children interact verbally and non-verbally with others for a range of purposes.'
		},
		{
			title: '5.2 engagement',
			content: 'Children engage with a range of texts and gain meaning from these texts.'
		},
		{
			title: '5.3 expression',
			content: 'Children express ideas and make meaning using a range of media.'
		},
		{
			title: '5.4 understanding',
			content: 'Children begin to understand how symbols and pattern systems work.'
		},
		{
			title: '5.5 information',
			content: 'Children use information and communication technologies to access information, investigate ideas and represent their thinking.'
		},
		{
			title: 'Principles',
			title: 'respectful',
			content: 'Secure, respectful and reciprocal relationships. Additional Summary- Educators support the development of a strong sense of wellbeing and interact with the child in their learning.'
		},
		{
			title: 'Partnerships',
			content: 'Additional Summary- Educators recognize that families are children’s first most influencial teachers.'
		},
		{
			title: 'High expectations',
			content: 'Additional Summary- Children progress well when they, their parents and educators hold high expectations for their achievement of learning.'
		},
		{
			title: 'Diversity',
			content: 'Additional Summary- There are many ways of living, being and of knowing. Children are born belonging to a culture, which is not only influenced by traditional practices, heritage and ancestral knowledge, but also by the experiences, values and beliefs of individual families and communities'
		},
		{
			title: 'Reflective',
			content: 'Additional Summary- Educators become co-learners with children, families and community, and value the continuity and richness of local knowledge shared by community members, including Aboriginal and Torres Strait Islander Elders'
		},
		{
			title: 'Principles',
			title: 'Holistic',
			content: 'Additional Summary- Recognises the connectedness of mind, body and spirit.'
		},
		{
			title: 'Responsive',
			content: 'Additional Summary- Educators recognize that families are children’s first most influencial teachers.Additional Summary- Responsive to all children’s strengths, abilities and interests'
		},
		{
			title: 'Play',
			content: 'Additional Summary- Play provides opportunities for children to learn as they discover, create, improvise and imagine'
		},
		{
			title: 'Intentional',
			content: 'Additional Summary- Educators who engage in intentional teaching recognize that learning occurs in social contexts and that interactions and conversations are vitally important for learning'
		},
		{
			title: 'Environments',
			content: 'Additional Summary- Learning environments are welcoming spaces when they reflect and enrich the lives and identities of children and families participating in the setting and respond to their interests and needs'
		},
		{
			title: 'Cultural',
			content: 'Additional Summary- Educators that are culturally competent respect multiple cultural ways of knowing, seeing and living, celebrate the benefits of diversity and have an ability to understand and honour differences'
		},
		{
			title: 'Continuity',
			content: 'Additional Summary- Children bring family and community ways of being, belonging and becoming to their early childhood settings. By building on these experiences educators help all children to feel secure, confident and included and to experience continuity in how to be and how to learn'
		},
		{
			title: 'Assessment',
			content: 'Additional Summary- Assessment for children’s learning refers to the process of gathering and analysing information as evidence about what children know, can do and understand. It is part of an ongoing cycle that includes planning, documenting and evaluating children’s learning'
		}
	],
	state: [
		{
			heading: '1.0 Identity',
			title: '1.1 security',
			content: 'Building a sense of security and trust'
		},
		{
			title: '1.2 independence',
			content: 'Acting with increasing independence and perseverance'
		},
		{
			title: '1.3 self-identity',
			content: 'Building a confident self-identity'
		},
		{
			heading: '2.0 Connectedness',
			title: '2.1 relationships',
			content: 'Building positive relationships with others'
		},
		{
			title: '2.2 diversity',
			content: 'Showing increasing respect for diversity'
		},
		{
			title: '2.3 environments',
			content: 'Showing increasing respect for environments '
		},
		{
			heading: '3.0 Wellbeing',
			title: '3.1 autonomy',
			content: 'Building a sense of autonomy and wellbeing'
		},
		{
			title: '3.2 concern',
			content: 'Exploring ways to show care and concern and interact positively with others'
		},
		{
			title: '3.3 safety',
			content: 'Exploring ways to promote own and others’ health and safety'
		},
		{
			title: '3.4 physical wellbeing',
			content: 'Exploring ways to promote physical wellbeing'
		},
		{
			heading: '4.0 learning',
			title: '4.1 positive dispositions',
			content: 'Building positive dispositions and approaches toward learning'
		},
		{
			title: '4.2 confidence',
			content: 'Increasing confidence and involvement in learning'
		},
		{
			title: '4.3 imaginative',
			content: 'Engaging in ways to be imaginative and creative'
		},
		{
			title: '4.4 technologies',
			content: 'Exploring tools, technologies and information and communication technologies (ICTs)'
		},
		{
			heading: '5.0 Communicating',
			title: '5.1 language',
			content: 'Exploring and expanding ways to use language'
		},
		{
			title: '5.2 literacy',
			content: 'Exploring and engaging with literacy in personally meaningful ways'
		},
		{
			title: '5.3 numeracy',
			content: 'Exploring and engaging with numeracy in personally meaningful ways'
		},
		{
			heading: '6.0 Decision-making',
			title: '6.1 learners',
			content: 'Adopting a view of children as active, competent, capable and creative learners'
		},
		{
			title: '6.2 expectations',
			content: 'Holding high expectations and promoting all children’s success'
		},
		{
			title: '6.3 diverse',
			content: 'Embracing the diverse social and cultural knowledge, languages and ways of knowing and being that children bring to kindergarten'
		},
		{
			heading: '7.0 partnerships',
			title: '7.1 family',
			content: 'Teachers foster inclusive partnerships when they recognize and value complexity and diversity of children’s home lives and family structures'
		},
		{
			title: '7.2 parents',
			content: 'Recognising and valuing the vital role parents, carers and family members play in children’s wellbeing.'
		},
		{
			heading: '8.0 environments',
			title: '8.1 nurturing',
			content: 'Teachers plan and create welcoming, safe and nurturing environments to promote children’s holistic learning and development.'
		},
		{
			title: '8.2 cultural',
			content: 'Inclusive environments acknowledge and value children’s diverse abilities and social and cultural backgrounds.'
		},
		{
			title: '8.3 Aboriginal and Torres Strait Islander',
			content: 'Supports Aboriginal and Torres Strait Islander children to build connections between familiar ways of knowing and being, and kindergarten learning.'
		},
		{
			heading: '9.0 contexts',
			title: '9.1 Play',
			content: 'Play, real-life engagements, and routines and transitions are contexts that best suit the learning and development needs of young children – with play the dominant context in the kindergarten program.'
		},
		{
			title: '9.2 cultural heritage',
			content: 'Provide opportunities to help strengthen children’s wellbeing, sense of identity and pride in their cultural heritage by building connections to people, place and language.'
		},
		{
			heading: '10.0 learning',
			title: '10.1 capabilities',
			content: 'Recognize and value children’s current competencies, capabilities and potential.'
		},
		{
			title: '10.2 expectations',
			content: 'Establish and make explicit high expectations for all children.'
		},
		{
			title: '10.3 pathways',
			content: 'Plan a range of pathways to enable each child to be a successful learner'
		},
		{
			title: '10.4 intentional teaching',
			content: 'Engage in intentional teaching to help build concepts and dispositions that are vital for future success.'
		},
		{
			title: '10.5 document',
			content: 'Monitor, document and assess children’s learning and development.'
		},
		{
			title: '10.6 Share',
			content: 'Share information about children’s learning in meaningful ways with parents and other partners.'
		},
		{
			title: '10.7 continuity',
			content: 'Work with partners to promote continuity in children’s prior, present and future learning and experiences.'
		},
		{
			heading: '11.0 Teaching',
			title: '11.1 Challenging',
			content: 'Additional Summary- Offering children opportunites to extend their skills and ideas in the context of secure relationships. Teachers gauge when to offer challenges and opportunites that will extend children’s thinking through provocation and reflection.'
		},
		{
			title: '11.2 Collaborating',
			content: 'Additional Summary- Enabling children to take the lead in an investigation or an idea while working alongside them to contribute to, rather than dominate, the direction of the experience. This can also include involving others, such as family members and members of the community, who may have particular expertise or knowledge that can inform the learning.'
		},
		{
			title: '11.3 Encouraging',
			content: 'Additional Summary- Supporting, particularly when children are making an effort, through making comments that motivate and encourage them to persist.'
		},
		{
			title: '11.4 Explaining',
			content: 'Additional Summary- Making ideas and requests clear for children. This is useful at times when children want or need to understand a concept or idea, often about their own or others’ safety or rights.'
		},
		{
			title: '11.5 Identifying',
			content: 'Additional Summary- Drawing children’s attention to new ideas and topics. Pointing out things of interest may generate areas for exploration and investigation.'
		},
		{
			title: '11.6 Imagining',
			content: 'Additional Summary- Creating an environment where children are encouraged to use imagination and creativity to investigate, hypothesise and express themselves. Teachers plan for children to have opportunities where there is freedom to engage in experiences with no set expectations for outcomes, and where children can explore their own possibilities.'
		},
		{
			title: '11.7 Instructing',
			content: 'Additional Summary- Using techniques that engage children and are respectful of children’s ideas. Teachers use direct instruction when other strategies might not be appropriate.'
		},
		{
			title: '11.8 Listening',
			content: 'Additional Summary- Encouraging children to lead conversations through listening deeply and thoughtfully to what they are saying. Through actively responding to children’s contributions, teachers create opportunities for authentic and sustained conversational exchanges.'
		},
		{
			title: '11.9 connections',
			content: 'Additional Summary- Encouraging children to lead conversations through listening deeply and thoughtfully to what they are saying. Through actively responding to children’s contributions, teachers create opportunities for authentic and sustained conversational exchanges.'
		},
		{
			title: '11.10 Modelling',
			content: 'Additional Summary- Demonstrating a skill or how a task is done. Modelling should always be supported with opportunities for children to have a go at practicing the skill themselves.'
		},
		{
			title: '11.11 Negotiating',
			content: 'Additional Summary- Enabling children to have a go at solving problems and addressing complex issues. Teachers provide ‘scaffolding’ to allow children to see multiple sides to an argument or issue, and encourage children to find reasonable solutions that can address their own and others’ perspectives.'
		},
		{
			title: '11.12 choice',
			content: 'Additional Summary- Offering opportunites for children to make choices. This involves recognizing children’s capacities to make safe choices and experience the consequences of their actions. Provisions for choice need to be well considered in the context of the relationships, and should not place children at risk or in danger. Supporting children to make choices is valuable when autonomy and independence are encouraged.'
		},
		{
			title: '11.13 Questioning',
			content: 'Additional Summary- Engaging children in a sensitive way in thinking and problem solving. Questions should be genuine and respectful, and not used to gather responses already known by teachers. Teachers should encourage children to ask questions of them and their own peers.'
		},
		{
			title: '11.14 Researching',
			content: 'Additional Summary- Working with children to find out and investigate. This can involve asking others, using the internet and local library, or telephoning relevant agencies. Researching helps children learn about the many ways of finding solutions and gathering information.'
		},
		{
			title: '11.15 revising',
			content: 'Additional Summary- Taking the opportunity to revisit experiences and engage in thinking that enables children to reflect on and build on prior learning.'
		},
		{
			title: '11.16 Scaffolding',
			content: 'Additional Summary- Using knowledge of children’s abilities. Teachers can break down task and ideas, and provide children with a supportive framework for taking the next steps or moving onto a higher level of thinking.'
		}
	],
	atsi: [
		{
			heading: '1.0 proud',
			title: '1.1 identity',
			content: 'Builds a knowledgeable and confident identity'
		},
		{
			title: '1.2 confidence',
			content: 'Builds a sense of beliefs and confidence in themselves.'
		},
		{
			heading: '2.0 participant',
			title: '2.1 belonging',
			content: 'Broadens their sense of belonging to groups and communities'
		},
		{
			title: '2.2 independent',
			content: 'Becomes increasingly independent and interdependent.'
		},
		{
			heading: '3.0 healthy',
			title: '3.1 emotional',
			content: 'becomes strong in their emotional wellbeing'
		},
		{
			title: '3.2 physical',
			content: 'becomes strong in their physical wellbeing'
		},
		{
			heading: '4.0 learner',
			title: '4.1 involved',
			content: 'becomes a confident and involved knower and learner'
		},
		{
			title: '4.2 explores',
			content: 'explores, investigates and connects with people, land, place, time and technology.'
		},
		{
			heading: '5.0 communicator',
			title: '5.1 language',
			content: 'explores and expands ways to use language'
		},
		{
			title: '5.2 literacy',
			content: 'engages with multiple forms of literacy that build bridges between family and community contexts and new learning'
		},
		{
			title: '5.3 numeracy',
			content: 'engages with numeracy concepts that build bridges between family and community contexts and new learning.'
		},
		{
			heading: 'Principles',
			title: 'identity',
			content: 'Knowing who you are’ and having a positive sense of cultural identity is central to children’s social, emotional, intellectual, physical and spiritual wellbeing.'
		},
		{
			title: 'connect',
			content: 'Children learn best through responsive and reciprocal relationships that connect with their world.'
		},
		{
			title: 'wellbeing',
			content: 'Strong family and community engagement enables children’s health, learning and wellbeing.'
		},
		{
			title: 'languages',
			content: 'First languages define every child – their knowledge, identity and relationships.'
		},
		{
			title: 'capable',
			content: 'Children are competent and capable and have been learning since birth.'
		},
		{
			title: 'attitudes',
			content: 'Children’s positive attitudes to learning are essential for success.'
		},
		{
			title: 'rights',
			content: 'Children are entitled to a voice of their own and to having their rights valued.'
		},
		{
			title: 'reflective',
			content: 'Ongoing learning and reflective practice underpin a quality kindergarten program'
		}
	],
	mtop: [
		{
			heading: '1.0 Identity',
			title: '1.1 safe',
			content: 'Children feel safe, secure, and supported.'
		},
		{
			title: '1.2 autonomy',
			content: 'Children develop their emerging autonomy, inter-dependence, resilience and sense of agency.'
		},
		{
			title: '1.3 self identities',
			content: 'Children develop knowledgeable and confident self identities.'
		},
		{
			title: '1.4 respect',
			content: 'Children learn to interact in relation to others with care, empathy and respect.'
		},
		{
			heading: '2.0 connected',
			title: '2.1 belonging',
			content: 'Children develop a sense of belonging to groups and communities and understanding of the reciprocal rights and responsibilities necessary for active community participation.'
		},
		{
			title: '2.2 diversity',
			content: 'Children respond to diversity with respect.'
		},
		{
			title: '2.3 fairness',
			content: 'Children become aware of fairness.'
		},
		{
			title: '2.4 environment',
			content: 'Children become socially responsible and show respect for the environment.'
		},
		{
			heading: '3.0 wellbeing',
			title: '3.1 emotional',
			content: 'Children become strong in their social and emotional wellbeing.'
		},
		{
			title: '3.2 physical',
			content: 'Children take increasing responsibility for their own health and physical wellbeing.'
		},
		{
			heading: '4.0 learners',
			title: '4.1 curiosity',
			content: 'Children develop dispositions for learning such as curiosity, cooperation, confidence, creativity, commitment, enthusiasm, persistence, imagination and reflexivity.'
		},
		{
			title: '4.2 investigating',
			content: 'Children develop a range of skills and processes such as problem solving, enquiry, experimentation, hypothesizing, researching and investigating.'
		},
		{
			title: '4.3 context',
			content: 'Children transfer and adapt what they learn from one context to another.'
		},
		{
			title: '4.4 technologies',
			content: 'Children use information and communication technologies to access information, investigate ideas and represent their thinking.'
		},
		{
			heading: 'Principles',
			title: 'respectful',
			content: 'Additional Summary- Secure, respectful and reciprocal relationships between children; between children and adults; and amongst adults provide the foundation upon which the community in school age care settings is established.'
		},
		{
			title: 'Partnerships',
			content: 'Additional Summary- Families, schools and local communities contribute to the opportunities provided for this age group.'
		},
		{
			title: 'expectations',
			content: 'Additional Summary- School age care educators who are committed to equity believe in all children’s capacities to access opportunities and succeed, regardless of diverse circumstances and abilities. They nurture children’s optimism, happiness and sense of fun.'
		},
		{
			title: 'diversity',
			content: 'Additional Summary- Being aware of and understanding diversity in school age care means taking into account the context of different family practices, values and beliefs.'
		},
		{
			title: 'reflective',
			content: 'Additional Summary- Educators continually seek ways to build their professional knowledge and develop learning communities. They collaborate with children, families and community, and value the continuity and richness of local knowledge shared by community members, including Aboriginal and Torres Strait Islander Elders.'
		},
		{
			heading: 'Practices',
			title: 'Holistic',
			content: 'Additional Summary- School age care educators take a holistic approach to their roles and responsibilities recognising the connectedness of mind, body and spirit. They focus attention on children’s physical, personal, social, emotional and spiritual wellbeing as well as cognitive aspects of learning as it pertains to lifelong learning.'
		},
		{
			title: 'Collaboration',
			content: 'Additional Summary- School age care educators are responsive to all children’s strengths, abilities and interests. They value and build on children’s strengths, skills and knowledge to ensure their wellbeing and motivation and engagement in experiences.'
		},
		{
			title: 'play',
			content: 'Additional Summary- Play and leisure activities provide opportunities for children to learn as they discover, create, improvise and imagine.'
		},
		{
			title: 'Intentionality',
			content: 'Additional Summary- Intentionality refers to actions that are deliberate, purposeful and thoughtful. Educators who engage in intentional actions recognise that learning occurs in social contexts, and that interactions and conversations are vitally important for learning.'
		},
		{
			title: 'Environments',
			content: 'Additional Summary- School age care environments are welcoming spaces when they reflect and enrich the lives and identities of children and families participating in the setting in response to their interests and needs. Environments that support wellbeing and development are vibrant and flexible spaces that are responsive to the welfare and abilities of each child.'
		},
		{
			title: 'Cultural',
			content: 'Additional Summary- Educators who are culturally competent respect multiple cultural ways of knowing, seeing and living, celebrate the benefits of diversity and have an ability to understand and honour differences.'
		},
		{
			title: 'Continuity',
			content: 'Additional Summary- School age care settings are situated in complementary relationships with homes, schools and community spaces with different places and environments having their own purposes, expectations and ways of doing things. In learning life skills children draw on the understandings, skills and attitudes from the range of settings in which they engage.'
		},
		{
			title: 'wellbeing',
			content: 'Additional Summary- Educators gather knowledge about children’s wellbeing and learning as they reflect and engage in processes such as scanning, monitoring, gathering and analysing information about how children feel and what children know, can do and understand. It is part of an ongoing cycle that includes planning, documenting and evaluating children’s wellbeing, development and learning.'
		}
	]
};

$(document).ready(function(){
	Sidebars.init();
});
