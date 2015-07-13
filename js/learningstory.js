var Story = {

	sliderOpen: false,
	editOverlayOpen: false,

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
		$('body').on('click touch','.menuIcon', Story.closePhotoSidebar);
		$('body').on('click touch', '#addTextElement', Story.addTextElement);
		$('body').on('click touch', '#arrowContainer', Story.slideUpEffect);
		$('body').on('click touch', '#addFramework', Story.addFramework);
		$('body').on('click touch', '#addImageGrid', Story.addImageGridElement);
		$('body').on('click touch', '.gridImage', Story.addSelectedGridImage);
		$('body').on('click touch', '.edit', Story.showEditOverlay);
		$('body').on('click touch', '#editElement', Story.editElement);
		$('body').on('click touch', '#moveUp, #moveTextUp', Story.moveUp);
		$('body').on('click touch', '#moveDown, #moveTextDown', Story.moveDown);
		$('body').on('click touch', '#deleteElement', Story.deleteElement);
		$('body').on('click touch', '#deleteText', Story.deleteText);

		// $('body').on('click touch', '.li-profiles', Story.setProfileTag);

		if ( window.sourcePage == 'ls-coverPage' ) {
			console.log('setting li ons to Story');
			$('body').off('click touch', '.li-profiles');
			$('body').off('click touch', '.li-frameworks');
			$('body').off('click touch', '.li-activities');
			$('body').on('click touch', '.li-profiles', Story.addProfileTag);
			$('body').on('click touch', '.li-frameworks', Story.appendTagContent);
			$('body').on('click touch', '.li-activities', Story.appendTagContent);
		}
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

	slideUpEffect: function() {
		console.log('scrooooollleeedddd');
		
		var myDiv = $('html body');
		console.log(myDiv);
		var scrollto = myDiv.offset().top + 500;
		myDiv.animate({ scrollTop:  myDiv.offset().top + 500}, 1000);
		console.log(scrollto);
		// e.stopPropagation();
	},

	showAddBtn: function() {
		console.log('test');
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

		$storyPage.append('<div class="singleImageContainer"><div class="singleImage edit element singleImage-active"></div></div>');

		$('.singleImageContainer').append('<div class="addBtnContainer" style="margin-top:30px;"><button id="addElementBtn" class="addElementBtn">?</button></div>');

		window.divForBackground = '.singleImage-active';

		$('#addElementContainer').css('display', 'none');

		$storyPage.css('height', '100%');
		var $image = $storyPage.find('div.singleImage.singleImage-active');
		console.log($image);

		$('html, body').animate({
	        scrollTop: $image.offset().top + 500
	    }, 1000);

		Story.openImageSidebar();

		if(Story.sliderOpen) {
			$('#learningStoryPage').css('padding', '20px 20px');
			$('.singleImageContainer').css('width', '56%');
		}

		$('.singleImageContainer').css('display', 'block');
		$('.singleImage').css('display', 'block');
		$('#learningStoryPage').css('height', 'auto');
	},

	addTextElement: function(e) {
		var $storyPage = $('#learningStoryPage');

		$storyPage.append('<div class="textContainer"><div contentEditable="true" class="storyInput element"></div><div class="textOptions" contentEditable="false"><div class="textArrows" id="moveTextUp">|</div><div class="textArrows" id="moveTextDown">_</div><div class="textDelete" id="deleteText">a</div></div></div>');

		var $textField = $('.storyInput').focus();

		$('html, body').animate({
	        scrollTop: $textField.offset().top + 500
	    }, 1000);
		e.preventDefault();
		// e.stopPropagation();
		$('.storyInput').focus();

		$('.textContainer').append('<div class="addBtnContainer" style="margin-top:30px;"><button id="addElementBtn" class="addElementBtn">?</button></div>');


		$('#addElementContainer').css('display', 'none');
		$('#learningStoryPage').css('height', 'auto');
	},

	addImageGridElement: function() {
		var $storyPage = $('#learningStoryPage');

		$('div.gridImage').removeClass('singleImage-active');

		$storyPage.append('<div class="imageGridContainer"><div class="gridImages element edit"><div class="firstImage gridImage singleImage-active"></div><div class="secondImage gridImage"></div><div class="thirdImage gridImage"></div></div></div>');

		$('.imageGridContainer').append('<div class="addBtnContainer" style="margin-top:30px;"><button id="addElementBtn" class="addElementBtn">?</button></div>');


		window.divForImageGrid = '.singleImage-active';

		$('#addElementContainer').css('display', 'none');

		$storyPage.css('height', '100%');
		var $image = $storyPage.find('div.gridImage.singleImage-active');
		console.log($image);

		$('html, body').animate({
	        scrollTop: $image.offset().top + 500
	    }, 1000);

		Story.openImageSidebar();

		if(Story.sliderOpen) {
			$('#learningStoryPage').css('padding', '20px 20px');
			$('.singleImageContainer').css('width', '56%');
		}

		$('.singleImage').css('display', 'block');
		$('#learningStoryPage').css('height', 'auto');
	},

	openImageSidebar: function(){
		Story.sliderOpen = true;
	    $('#addImageSidebar').addClass('display');
		if($('#addImageSidebar').hasClass('sidebarLeft')) {
			$('#addImageSidebar').addClass('openLeft');
		} else if($('#addImageSidebar').hasClass('sidebarRight')) {
			$('#addImageSidebar').addClass('openRight');
		}
	},

	//when a grid image is clicked, change the active class to this image
	addSelectedGridImage: function(){
		if(!Story.sliderOpen){
			console.log('asgl stopped!!!');
			return;
		}
		var $this = $(this);
		// e.stopPropagation();
		$('.gridImage.singleImage-active').removeClass('singleImage-active');
		$this.addClass('singleImage-active');
	},

	showEditOverlay: function() {
		
		//stops this from happening when sliders open
		if(Story.sliderOpen){
			return;
		}

		// Story.editOverlayOpen = true;
		// $('.edit').removeClass('overlay');
		var $this = $(this);
		$('.overlay').show();
		var height = $this.height();
		var width = $this.width();
		// var top = $this.offset().top;
		var $overlay = $('.overlay');
		$this.append($overlay);

		console.log(width);

		$overlay.height(height);
		$overlay.width(width);
		if($this.hasClass('gridImages')) {
			$overlay.css('margin-top', '-' + height + 'px');
		} else {
			$overlay.css('margin-top', '0px');
		}
		// $overlay.offset({top: top});

		
		

		// $overlay.append('<div class="editOptions"><div id="addPhotoElement" class="btnContainer"><button>^</button><div>photo</div></div><div id="addTextElement" class="btnContainer"><button>6</button><div>text</div></div><div id="addImageGrid" class="btnContainer"><button>^</button><div>image grid</div></div><div id="addFramework" class="btnContainer"><button>f</button><div>frameworks</div></div></div>');

		
	},

	editElement: function(e){
		e.stopPropagation();
		var $this = $(this);
		var $overlay = $('.overlay');
		$this.parent().hide();
		var type;
		var $itemElement = $this.parent().parent();
		$('.singleImage, .gridImage').removeClass('singleImage-active');

		//this is for singe image stuff
		if($itemElement.hasClass('singleImage')){
			type = "image";
			$itemElement.addClass('singleImage-active');
			Story.openImageSidebar();
			console.log(type);

		//this is for grid image stuff
		}else if($itemElement.hasClass('gridImages')){
			type = "grid";
			$itemElement.find('.firstImage').addClass('singleImage-active');
			Story.openImageSidebar();
			console.log(type);
		}

	},

	deleteElement: function() {
		var $this = $(this);
		var $item = $this.parent().parent();
		var $overlay = $('.overlay');

		// $overlay.hide();

		$item.detach();
	},

	deleteText: function() {
		var $this = $(this);
		var $item = $this.parent().parent();

		$item.remove();


	},

	moveUp: function(e){
		e.stopPropagation();
		var $this = $(this);
		var $overlay = $('.overlay');
		var type;
		var $item = $this.parent().parent();
		var $itemElement = $this.parent().parent().parent();
		console.log($itemElement);

		//this is for singe image stuff
		if($item.hasClass('singleImage')){
			type = "image";
			// var prevElements = $itemElement.prevAll('.element');
			// var numPrevElements = prevElements.length;
			// var currentPosition = numPrevElements;
			// var moveToPosition = currentPosition - 1;

			var elementToMove = $itemElement;
			var elementToMoveBefore = $itemElement.prev();
			$itemElement.insertBefore(elementToMoveBefore);


		//this is for grid image stuff
		}else if($item.hasClass('gridImages')){
			type = "grid";
			var elementToMove = $itemElement;
			var elementToMoveBefore = $itemElement.prev();
			$itemElement.insertBefore(elementToMoveBefore);
			console.log(type);
		}else if($item.hasClass('textContainer')){
			type = "text";
			var elementToMove = $item;
			var elementToMoveBefore = $item.prev();
			$item.insertBefore(elementToMoveBefore);
			console.log(type);
		}
	},

	moveDown: function(e) {
		e.stopPropagation();
		var $this = $(this);
		var $overlay = $('.overlay');
		var type;
		var $item = $this.parent().parent();
		var $itemElement = $this.parent().parent().parent();

		//this is for singe image stuff
		if($item.hasClass('singleImage')){
			type = "image";
			// var prevElements = $itemElement.prevAll('.element');
			// var numPrevElements = prevElements.length;
			// var currentPosition = numPrevElements;
			// var moveToPosition = currentPosition - 1;

			var elementToMove = $itemElement;
			var elementToMoveBefore = $itemElement.next();
			$itemElement.insertAfter(elementToMoveBefore);


		//this is for grid image stuff
		}else if($item.hasClass('gridImages')){
			type = "grid";
			var elementToMove = $itemElement;
			var elementToMoveBefore = $itemElement.next();
			$itemElement.insertAfter(elementToMoveBefore);
			console.log(type);
		}else if($item.hasClass('textContainer')){
			type = "text";
			var elementToMove = $item;
			var elementToMoveBefore = $item.next();
			$item.insertAfter(elementToMoveBefore);
			console.log(type);
		}
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

		var $storyPage = $('#learningStoryPage');
		
		window.addedProfileTags = new Array();
		window.addedFrameworks = new Array();
		window.addedActivities = new Array();

		window.frameworkIndex++;

		if ( !$('#storyPageTop' + window.frameworkIndex).length ) {

			$storyPage.append(
				$('<div id="storyPageTop' + window.frameworkIndex + '"/>').append(
					$('<ul/>').append(
						$('<li class="frameworksSection' + window.frameworkIndex + '"/>').css('display', 'none').append(
							$('<ul/>')
							)
						)
					)
				).append(
					$('<ul/>').append(
						$('<li class="activitiesSection' + window.frameworkIndex + '"/>').css('display', 'none').append(
							$('<ul/>')
							)
						)
				).append(
					$('<div class="addBtnContainer" style="margin-top:30px;"><button id="addElementBtn" class="addElementBtn">?</button></div>')
				);
		}
	},

	appendTagContent: function() {

		var $storyPage = $('#learningStoryPage');
		var $editContainer = $('<div class="edit"></div>');

		// 1 Detect what section theuser clicked
		var sectionType = $(this).parent().parent().attr('id');

		var sectionClass = sectionType.replace('List', 'Section') + window.frameworkIndex;

		// 2. Call Sidebars.addFramework() etc;
		if ( sectionType == 'frameworksList' ) {
			$('.frameworksSection' + window.frameworkIndex).show();
			Sidebars.addSectionItem(this, '.' + sectionClass, window.addedFrameworks);
		}
		if ( sectionType == 'activitiesList' ) {
			$('.activitiesSection' + window.frameworkIndex).show();
			Sidebars.addSectionItem(this, '.' + sectionClass, window.addedActivities);
		}
	},

	addProfileTag: function() {

		var $storyPage = $('#learningStoryPageTags');
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

			$(sectionClass).html(tagText);
		}
	},

	closePhotoSidebar: function() {
		Story.sliderOpen = false;
		$('#addImageSidebar').removeClass('display');
		if($('#addImageSidebar').hasClass('sidebarLeft')) {
			$('#addImageSidebar').removeClass('openLeft');
		} else if($('#addImageSidebar').hasClass('sidebarRight')) {
			$('#addImageSidebar').removeClass('openRight');
			$('#learningStoryPage').css('padding', '20px 100px 100px 100px');
			$('.singleImageContainer').css('width', '100%');
			$('.singleImage').css('border', 'none');
			//$('#learningStoryPage').append('<div class="addBtnContainer"><button id="addElementBtn" class="addElementBtn">?</button></div>')
		}
	}

}

window.frameworkIndex = 0;

$(document).ready(function(){
	Story.init();
});