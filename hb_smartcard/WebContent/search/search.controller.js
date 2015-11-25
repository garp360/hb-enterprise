(function() {
	'use strict';

	angular.module('hb.enterprise.surgica.smartcard').controller('SearchController', SearchController);

	SearchController.$inject = [ '$scope', '$log', 'criteria', 'cogs', 'filter', 'optionData' ];

	function SearchController($scope, $log, criteria, cogs, filter, optionData) 
	{
		// variables
		$scope.criteria = criteria;
		$scope.cogs = cogs;
		$scope.results = [];
		$scope.filter = filter;
		$scope.furnished = optionData.furnished;
		$scope.dlr = optionData.dlr;
		$scope.globalSelect = false;
		
		
		// methods
		$scope.search = search;
		$scope.clear = clear;
		$scope.remove = remove;
		$scope.add = add;
		
		// view helper
		$scope.translateTrueFalse = translateTrueFalse;
		$scope.toggleAll = toggleAll;
		
		function search() 
		{
			$scope.results = [];
			$scope.results = angular.copy(cogs);
			$scope.filter = getFilter();
		};
		
		function clear() 
		{
			$scope.filter = {};
			$scope.criteria = {};
			$scope.results = [];
			$scope.furnished.current = $scope.furnished.values[0];
			$scope.dlr.current = $scope.dlr.values[0];
		};
		
		function add() {
			
		};
		
		function remove() {
			
		};

		function toggleAll()
		{
			var toggle = $scope.globalSelect;
			angular.forEach($scope.results, function(item){
				item.selected = toggle;
			});
		};
		
		function translateTrueFalse(value) 
		{
			var text = "No";
			if(value) 
			{
				text = "Yes";
			}
			return text;
		};
		
		function getFilter() 
		{
			var filter = {};
			
			if($scope.criteria.code)
			{
				filter.code = $scope.criteria.code;
			}
			
			if($scope.furnished.current && $scope.furnished.current.value != null )
			{
				filter.furnished = $scope.furnished.current.value;
			}
			
			if($scope.dlr.current && $scope.dlr.current.value != null )
			{
				filter.dlr = $scope.dlr.current.value;
			}
			
			return filter;
		};

	}
})();