var Story = {

	init: function() {
		Story.events();
		Story.setInputVal();
		Story.showArrow();
		Story.showAddBtn();
		Story.findScreenHeight();
	},

	events: function() {
		$('body').on('click touch', '#header', Story.changeHeaderText);
		$('body').on('click touch', '.addElementBtn', Story.openAddElement);
		$('body').on('click touch', '#nevermindBtn', Story.closeAddElement);
		$('body').on('click touch', '#addPhotoElement', Story.addPhotoElement);
		$(document).on('click touch','#learningStoryPage', Story.closePhotoSidebar);
		$('body').on('click touch', '#addTextElement', Story.addTextElement);
		$('body').on('click touch', '#arrowContainer', Story.slideUpEffect);
		$('body').on('click touch', '#addFramework', Story.addFramework);

		// $('body').on('click touch', '.li-profiles', Story.setProfileTag);
		$('body').off('click touch', '.li-frameworks');
		$('body').off('click touch', '.li-activities');
		$('body').on('click touch', '.li-frameworks', Story.appendTagContent);
		$('body').on('click touch', '.li-activities', Story.appendTagContent);

	},

	findScreenHeight: function() {
		var height = $(window).height();

		$('#coverPageContainer').height(height - 230);
	},

	changeHeaderText: function(e) {
		e.preventDefault();
		// $('#header, #subHeader').hide();

		// $('#headerInput, #subHeaderInput').show();
		$('#headerInput').focus();		
	},

	setInputVal: function() {
		var headerText = "Today's Class Learning Story";
		var subHeaderText = "Enter Classroom Details";

		$('#headerInput').val(headerText);
		$('#subHeaderInput').val(subHeaderText);
	},

	showArrow: function() {
		var timeOut = window.setTimeout(Story.showArrow, 1000);
		var $coverImg = $('body').find('#coverPageContainer');
		var headerText = "Today's Class Learning Story";
		var subHeaderText = "Enter Classroom Details";
		var headerInput = $('#headerInput').text();
		var subHeaderInput = $('#subHeaderInput').text();

		var $arrowDiv = $('#arrowContainer');

		$arrowDiv.hide();

		console.log(headerInput);

		console.log(subHeaderInput);

		console.log($coverImg.css('background-image'));
		
		if ($coverImg.css('background-image') != 'none' && headerInput != headerText && subHeaderInput != subHeaderText) {
			$arrowDiv.show();
			clearTimeout(timeOut);
			// $(document).on('swipeup', 'body', Story.swipeUp);
			$('#learningStoryPage').show();
			// $('#coverPageContainer').css('position', 'absolute');
			
		} else {
			$arrowDiv.hide();
		}

	},

	slideUpEffect: function(e) {
		console.log('scrooooollleeedddd');
		
		var myDiv = $('html body');
		console.log(myDiv);
		var scrollto = myDiv.offset().top + 500;
		myDiv.animate({ scrollTop:  myDiv.offset().top + 500}, 1000);
		console.log(scrollto);
		e.stopPropagation();
	},

	showAddBtn: function() {
		$('#learningStoryPage').append('<div class="addBtnContainer"><button id="addElementBtn" class="addElementBtn">?</button></div>');
	},

	openAddElement: function() {
		$('#addElementContainer').fadeIn('slow');
		
	},

	closeAddElement: function() {
		$('#addElementContainer').fadeOut('slow');
		// var height = $(document).height();
		
	},

	addPhotoElement: function() {

		var $storyPage = $('#learningStoryPage');

		$('div.singleImage').removeClass('singleImage-active');

		$storyPage.append('<div class="singleImage singleImage-active"></div>');

		$storyPage.append('<div class="addBtnContainer" style="margin-top:30px;"><button id="addElementBtn" class="addElementBtn">?</button></div>');


		window.divForBackground = '.singleImage-active';

		$('#addElementContainer').css('display', 'none');

		$storyPage.css('height', '100%');
		var $image = $storyPage.find('div.singleImage.singleImage-active');
		console.log($image);

		$('html, body').animate({
	        scrollTop: $image.offset().top + 500
	    }, 1000);

	    $('#addImageSidebar').addClass('display');
		if($('#addImageSidebar').hasClass('sidebarLeft')) {
			$('#addImageSidebar').addClass('openLeft');
		} else if($('#addImageSidebar').hasClass('sidebarRight')) {
			$('#addImageSidebar').addClass('openRight');
		}

		if($('#addImageSidebar').hasClass('openRight')) {
			$('#learningStoryPage').css('padding', '20px 20px');
			$('.singleImage').css('width', '56%');
		}

		$('.singleImage').css('display', 'block');
		$('#learningStoryPage').css('height', 'auto');
	},

	addTextElement: function(e) {
		var $storyPage = $('#learningStoryPage');

		$storyPage.append('<div contentEditable="true" class="storyInput"></div>');

		var $textField = $('.storyInput').focus();

		$('html, body').animate({
	        scrollTop: $textField.offset().top + 500
	    }, 1000);
		e.preventDefault();
		e.stopPropagation();
		$('.storyInput').focus();

		$storyPage.append('<div class="addBtnContainer" style="margin-top:30px;"><button id="addElementBtn" class="addElementBtn">?</button></div>');


		$('#addElementContainer').css('display', 'none');
		$('#learningStoryPage').css('height', 'auto');
	},

	addFramework: function() {
		console.log('cliiicckkkeeeed');
		if($('#tagSidebar').hasClass('sidebarLeft')) {
			$('#tagSidebar').addClass('openLeft');
		} else if($('#tagSidebar').hasClass('sidebarRight')) {
			$('#tagSidebar').addClass('openRight');
		}

		$('#addElementContainer').css('display', 'none');
		$('#learningStoryPage').css('height', 'auto');
	},

	appendTagContent: function() {

		console.log('################################### appendTagContent');

		var $storyPage = $('#learningStoryPage');

		// 1 Detect what section theuser clicked
		var sectionType = $(this).parent().parent().attr('id');

		console.log('sectionType = ' + sectionType);

		var sectionClass = sectionType.replace('List', 'Section');

		console.log('sectionClass = ' + sectionClass);

//		( !$storyPage.find('.' + sectionClass).length ) {

		// if ( !$storyPage.find('.' + sectionClass).length ) {
			// 1. Construct the frameworksSection or activitiesSection or profileTagsSection
			$storyPage.append(
				$('<ul/>').append(
					$('<li class="' + sectionClass + '"/>').append(
						$('<ul/>')
						)
					)
				);

			// 2. Call Sidebars.addFramework() etc;
			if ( sectionType == 'frameworksList' ) {
				console.log('Yay, doing frameworks Sidebars.addSectionItem on ' + sectionClass);
				Sidebars.addSectionItem(this, '.' + sectionClass, window.addedFrameworks);
			}
			if ( sectionType == 'activitiesList' ) {
				console.log('Yay, doing activities Sidebars.addSectionItem on ' + sectionClass);
				Sidebars.addSectionItem(this, '.' + sectionClass, window.addedActivities);
			}
		// }
		$storyPage.append('<div class="addBtnContainer" style="margin-top:30px;"><button id="addElementBtn" class="addElementBtn">?</button></div>');

	},

	closePhotoSidebar: function() {
		$('#addImageSidebar').removeClass('display');
		if($('#addImageSidebar').hasClass('sidebarLeft')) {
			$('#addImageSidebar').removeClass('openLeft');
		} else if($('#addImageSidebar').hasClass('sidebarRight')) {
			$('#addImageSidebar').removeClass('openRight');
			$('#learningStoryPage').css('padding', '20px 100px 100px 100px');
			$('.singleImage').css('width', '100%');
			$('.singleImage').css('border', 'none');
			//$('#learningStoryPage').append('<div class="addBtnContainer"><button id="addElementBtn" class="addElementBtn">?</button></div>')
		}


	}

}

window.frameworkIndex = 0;

$(document).ready(function(){
	Story.init();
});