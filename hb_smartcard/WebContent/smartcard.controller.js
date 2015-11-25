(function() {
    'use strict';

    angular
    	.module('hb.enterprise.surgica.smartcard')
    	.controller('SmartCardController', SmartCardController);
    	
    	SmartCardController.$inject = ['$scope', '$log'];
    	
    	function SmartCardController ($scope, $log) 
    	{
    		$scope.app = {
				title: "Surgica-hb - SmartCard",
				page: "SMARTCARD",
				version: "Version 1.0.0"
    		};
    	}
})();
