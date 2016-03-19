(function() {
	'use strict';

	angular.module('hb.enterprise.surgica.data.procedure').controller('SearchController', SearchController);

	SearchController.$inject = [ '$scope', '$log', 'criteria', 'ProcedureFactory' ];

	function SearchController($scope, $log, criteria, ProcedureFactory) 
	{
		// variables
		$scope.errorMessage = null;
		$scope.criteria = criteria;
		$scope.result = { };
		$scope.isSimpleSearch = true;

		// methods
		$scope.search = search;
		$scope.clear = clear;
		$scope.remove = remove;
		$scope.add = add;
		
		// view helper
		$scope.toggleAll = toggleAll;
		$scope.toggleSearch = toggleSearch;
		
		function search() 
		{
			var criteria = buildCriteria();
			ProcedureFactory.findByCriteria(criteria).then(function(procedures){
				$scope.result = procedures;
			}, function(errMsg) {
				$scope.errorMessage = errMsg;
			});
		};
		
		function clear() 
		{
			$scope.criteria = { };
			$scope.result = { };
			$scope.errorMessage = null;
		};
		
		function add() {
			
		};
		
		function remove() {
			
		};

		function toggleAll()
		{
			var toggle = $scope.globalSelect;
			angular.forEach($scope.results.data, function(item){
				item.selected = toggle;
			});
		};

		function toggleSearch()
		{
			$scope.isSimpleSearch = !$scope.isSimpleSearch;
			clear();
			
			if ( $scope.isSimpleSearch ) {
				criteria.isSimpleSearch = true;
			} else {
				criteria.isSimpleSearch = false;
			}
		};

		function buildCriteria() 
		{
			var criteria = {};
			criteria.isSimpleSearch = $scope.isSimpleSearch;
			if(criteria.isSimpleSearch)
			{
				criteria.name = $scope.criteria.simple;
				criteria.code = $scope.criteria.simple;
				criteria.category = $scope.criteria.simple;
			} 
			else 
			{
				addCriteria(criteria, "name", $scope.criteria.name);
				addCriteria(criteria, "code", $scope.criteria.code);
				addCriteria(criteria, "category", $scope.criteria.category);
			}
			return criteria;
		};

		function addCriteria(criteria, fieldName, value ) 
		{
			if(value) 
			{
				criteria[fieldName] = value;
			} 
		};

	}
})();