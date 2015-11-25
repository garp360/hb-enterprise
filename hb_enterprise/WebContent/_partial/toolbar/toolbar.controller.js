(function() {
    'use strict';

    angular
    	.module('hb.enterprise.surgica')
    	.controller('ToolBarController', ToolBarController);
    	
    	ToolBarController.$inject = ['$scope', '$log', 'toolbar'];
    	
    	function ToolBarController ($scope, $log, toolbar) 
    	{
    		$scope.toolbar = toolbar;
    	}
})();
