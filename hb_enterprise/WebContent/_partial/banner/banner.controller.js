(function() {
    'use strict';

    angular
    	.module('hb.enterprise.surgica')
    	.controller('BannerController', BannerController);
    	
    	BannerController.$inject = ['$scope', '$log', 'banner'];
    	
    	function BannerController ($scope, $log, banner) 
    	{
    		$scope.banner = banner;
    	}
})();
