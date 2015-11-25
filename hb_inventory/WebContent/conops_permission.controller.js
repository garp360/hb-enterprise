(function() {
    'use strict';

    angular
    	.module('ndms.conops.permission')
    	.controller('ConopsPermissionController', ConopsPermissionController);
    	
    	ConopsPermissionController.$inject = ['$scope', '$log'];
    	
    	function ConopsPermissionController ($scope, $log) 
    	{
    		$scope.app = {
				title: "CONOPS - Manage Permission",
				page: "CONOPS Permission",
				version: "Version 9.0"
    		};
    	}
})();
