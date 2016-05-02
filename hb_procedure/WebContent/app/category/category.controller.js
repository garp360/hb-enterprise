(function() {
	'use strict';

	angular.module('hb.enterprise.surgica.data.procedure').controller('CategoryController', CategoryController);

	CategoryController.$inject = [ '$scope', '$log', '$state', 'category', 'title' ];

	function CategoryController($scope, $log, $state, category, title) 
	{
		$scope.hasEdit = true;
		$scope.hasDelete = true;
		$scope.category = category;
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