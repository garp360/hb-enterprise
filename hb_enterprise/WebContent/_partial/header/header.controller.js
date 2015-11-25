(function() {
    'use strict';

    angular
    	.module('hb.enterprise.surgica')
    	.controller('HeaderController', HeaderController);
    	
    	HeaderController.$inject = ['$scope', '$log', 'header'];
    	
    	function HeaderController ($scope, $log, header) 
    	{
    		$scope.header = header;
    	}
})();
