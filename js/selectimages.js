var SelectImages = {

	init: function() {
		SelectImages.events();
	},

	enableSelect: function(e) {
		// $('.selectImagesBtn').hide();
//		e.stopPropagation();

		$('#imagesHeader').hide();
		$('#loadSelectImagesHeader').show();
		$('#loadEditImageHeader').hide();

		$('#loadMainFooter').hide();
		$('body').find('#loadImgActionFooter').show();
		console.log($('#loadImgActionFooter'));

		window.selectImagesChecked = true;

		SelectImages.selectEvents();
	},

	disableSelect: function() {

		$('#imagesHeader').show();
		$('#loadSelectImagesHeader').hide();
		$('#loadEditImageHeader').hide();

		window.selectImagesChecked = false;

		$('div.thumbnail').css({'box-shadow': 'none', '-webkit-box-shadow': 'none'});

		$('body').off('click touch', 'div.thumbnail');

		window.selectedImages = new Array();
	},

	events: function() {
		$('body').on('click touch', '.selectImagesBtn', SelectImages.enableSelect);
		$('body').on('click touch', '.cancelImagesBtn', SelectImages.disableSelect);
	},

	selectEvents: function() {
		$('body').on('click touch', 'div.thumbnail', SelectImages.selectImage);
	},

	selectImage: function() {

		var imgSrc = $(this).find('.classroomThumbImg').attr("src");

		var $selectElement = $(this);

		if ( $selectElement.css('box-shadow') == 'none' ) {

			$selectElement.css({'-webkit-box-shadow': '0 0 0 4px #FF0000', 'box-shadow': '0 0 0 4px #FF0000'});

			if ( $.inArray(imgSrc, window.selectedImages) == -1 ) {
				window.selectedImages.push(imgSrc);
			}
		} else {

			$selectElement.css({'box-shadow': 'none', '-webkit-box-shadow': 'none'});

			var index = window.selectedImages.indexOf(imgSrc);
			if ( index > -1 ) {
			    window.selectedImages.splice(index, 1);
			}
		}
	}
}

window.selectedImages = new Array();

$(document).ready(function(){
	SelectImages.init();
});