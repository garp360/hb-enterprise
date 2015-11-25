(function() {
	'use strict';

	angular.module('ndms.conops.group').controller('SearchController', SearchController);

	SearchController.$inject = [ '$scope', '$log', 'criteria', 'ConopsGroupFactory' ];

	function SearchController($scope, $log, criteria, ConopsGroupFactory) 
	{
		// variables
		$scope.criteria = criteria;
		$scope.results = {};
		$scope.isSimpleSearch = true;
		$scope.globalSelect = false;
		
		
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
			$scope.results = ConopsGroupFactory.findConopsGroupByCriteria(criteria);
			$scope.globalSelect = false;
		};
		
		function clear() 
		{
			$scope.criteria = {};
			$scope.results = [];
			$scope.globalSelect = false;
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
			if($scope.isSimpleSearch) {
				criteria.group = null;
				criteria.permission = null;
				criteria.dn = null;
				criteria.lastname = null;
			} else {
				criteria.simple = null;
			}
		};

		function buildCriteria() 
		{
			var criteria = {};
			criteria.isSimpleSearch = $scope.isSimpleSearch;
			if(criteria.isSimpleSearch)
			{
				criteria.group = $scope.criteria.simple;
				criteria.permission = $scope.criteria.simple;
				criteria.dn = $scope.criteria.simple;
				criteria.lastname = $scope.criteria.simple;
			} 
			else 
			{
				addCriteria(criteria, "group", $scope.criteria.group);
				addCriteria(criteria, "permission", $scope.criteria.permission);
				addCriteria(criteria, "dn", $scope.criteria.dn);
				addCriteria(criteria, "lastname", $scope.criteria.lastname);
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