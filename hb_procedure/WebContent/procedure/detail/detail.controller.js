(function() {
	'use strict';

	angular.module('hb.enterprise.surgica.data.procedure').controller('DetailController', DetailController);

	DetailController.$inject = [ '$scope', '$log', '$state', 'procedure', 'title' ];

	function DetailController($scope, $log, $state, procedure, title) 
	{
		$scope.hasEdit = true;
		$scope.hasDelete = true;
		$scope.procedure = procedure;
		$scope.title = title;
		
		$scope.reset = reset;
		$scope.archive = archive;
		$scope.save = save;
		$scope.cancel = cancel;
		
		function reset() {
			
		}
		
		function cancel() {
			$state.go("^");
		}
		
		function save() {
			
		}
		
		function archive() {
			
		}
		
	}
})();