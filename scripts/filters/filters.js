var galleryFilters = angular.module('galleryFilters',[]);

galleryFilters.filter('startFrom', function(){
	return function(input, start){
		if(input){
			start = +start;
			return input.slice(start);
		}
		return [];
	}
});