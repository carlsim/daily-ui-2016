var galleryControllers = angular.module('galleryControllers',[]);

galleryControllers.controller('GalleryListCtrl', ['$scope', '$http', 
	function($scope, $http){
		$http.get('https://raw.githubusercontent.com/carlsim/daily-ui-2016/gh-pages/photos/photos.json')
		.success(function(data){
			$scope.photos = data;
		});
	}
]);