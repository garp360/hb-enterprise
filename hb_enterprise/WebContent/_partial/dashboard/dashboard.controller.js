(function() {
    'use strict';

    angular
    	.module('hb.enterprise.surgica')
    	.controller('DashBoardController', DashBoardController);
    	
    	DashBoardController.$inject = ['$scope', '$log', 'dashboard'];
    	
    	function DashBoardController ($scope, $log, dashboard) 
    	{
    		$scope.dashboard = dashboard;
    	}
})();
