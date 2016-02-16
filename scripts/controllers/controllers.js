var galleryControllers = angular.module('galleryControllers',[]);

galleryControllers.controller('GalleryListCtrl', ['$scope', '$http', 
	function($scope, $http){
		$http.get('/photos/photos.json')
		.success(function(data){
			$scope.photos = data;
		});
	}
]);