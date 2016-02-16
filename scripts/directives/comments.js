galleryApp.directive('comments', function(){
	return{
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'scripts/directives/comments.html',
		controller: 'GalleryDetailCtrl'
	};
});