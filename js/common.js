var Common = Common || {};


Common.sourceObject = null;

Common.init = function() {
		Common.events();
};

Common.loadSourceObject = function(obj) {
	Common.sourceObject = obj;	
};

Common.events = function() {

		$('body').off('click touch', '.li-frameworks');
		$('body').off('click touch', '.li-activities');
		$('body').on('click touch', '.li-frameworks', Common.frameworksClick);
		$('body').on('click touch', '.li-activities', Common.activitiesClick);
};

Common.frameworksClick = function() {
		console.log('in Common.frameworksClick');
		Sidebars.addFramework();
};

Common.activitiesClick = function() {
		console.log('in Common.activitiesClick');
		Sidebars.addActivity();
};

// $(document).ready(function(){
// 	Common.init();
// });