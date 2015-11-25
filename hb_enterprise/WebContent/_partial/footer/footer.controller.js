(function() {
    'use strict';

    angular
    	.module('hb.enterprise.surgica')
    	.controller('FooterController', FooterController);
    	
    	FooterController.$inject = ['$scope', '$log', 'footer'];
    	
    	function FooterController ($scope, $log, footer) 
    	{
    		$scope.footer = footer;
    	}
})();
