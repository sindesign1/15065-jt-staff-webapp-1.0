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
	},

	events: function() {
		$('body').on('click touch', '.selectImagesBtn', SelectImages.enableSelect);
		$('body').on('click touch', '.cancelImagesBtn', SelectImages.disableSelect);
	},

	selectEvents: function() {
		$('body').on('click touch', 'div.thumbnail', SelectImages.selectImage);
	},

	selectImage: function() {
		$(this).css({'border-style': 'solid', 'border-color': 'red'});
	}
}

$(document).ready(function(){
	SelectImages.init();
});