var DataUtils = {
	
	currentChildData : function() {
		return $.parseJSON(localStorage.getItem('currentChildData'));
	},
	setCurrentChildData : function(obj) {
		localStorage.setItem('currentChildData', JSON.stringify(obj));
	}
}