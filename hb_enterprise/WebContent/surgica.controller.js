(function() {
    'use strict';

    angular
    	.module('hb.enterprise.surgica')
    	.controller('SurgicaController', SurgicaController);
    	
    	SurgicaController.$inject = ['$scope', '$log'];
    	
    	function SurgicaController ($scope, $log) 
    	{
    		$scope.app = {
				title: "Surgica-hb",
				page: "SURGICA",
				version: "Version 0.1.0"
    		};
    	}
})();
