(function() {
    'use strict';

    angular
    	.module('ndms.conops.group')
    	.controller('ConopsGroupController', ConopsGroupController);
    	
    	ConopsGroupController.$inject = ['$scope', '$log'];
    	
    	function ConopsGroupController ($scope, $log) 
    	{
    		$scope.app = {
				title: "CONOPs - Manage Group",
				page: "CONOPs Group",
				version: "Version 9.0"
    		};
    	}
})();
