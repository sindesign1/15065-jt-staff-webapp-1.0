var SelectImages = {

	init: function() {
		SelectImages.events();
	},

	enableSelect: function() {
		$('.selectImagesBtn').hide();
		$('.doneImagesBtn').show();
		$('.cancelImagesBtn').show();

		window.selectImagesChecked = true;

		SelectImages.selectEvents();
	},

	disableSelect: function() {
		$('.selectImagesBtn').show();
		$('.doneImagesBtn').hide();
		$('.cancelImagesBtn').hide();

		window.selectImagesChecked = false;

		$('div.thumbnail').css({'border': 'none'});

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

		if ( $(this).css('border-color') == 'rgb(255, 0, 0)' ) {

			$(this).css({'border-style': 'none', 'border-color': ''});

			var index = window.selectedImages.indexOf(imgSrc);
			if ( index > -1 ) {
			    window.selectedImages.splice(index, 1);
			}

		} else {
			$(this).css({'border-style': 'solid', 'border-color': 'red'});

			if ( $.inArray(imgSrc, window.selectedImages) == -1 ) {
				window.selectedImages.push(imgSrc);
			}
		}
	}
}

window.selectedImages = new Array();

$(document).ready(function(){
	SelectImages.init();
});