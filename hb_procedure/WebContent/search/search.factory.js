(function() {
	'use strict';

	angular
	.module('ndms.conops.group').factory('ConopsGroupFactory', ConopsGroupFactory);

	function ConopsGroupFactory($q, $log) 
	{
		var factory = {};
		var criteriaFields = ["group", "permission", "dn", "lastname"];
		factory.findConopsGroupById = findGroupById;
		factory.findConopsGroupByCriteria = findGroupByCriteria;

		function findGroupById(id) 
		{
			var deferred = $q.defer();
			deferred.resolve( getData()[id] );
			
			return deferred.promise;
		};

		function findGroupByCriteria(criteria) 
		{
			var results = {};
			var filtered = [];
			var groups = getData();
			var totalRecords = 0;
			
			if(isEmptyCriteria(criteria, criteriaFields)) {
				angular.forEach(groups, function(group) {
					filtered.push(group);
					totalRecords += 1;
				});
			} else {
				angular.forEach(groups, function(group) {
					if(isMatch(group, criteria)) {

						filtered.push(group);
					}
					totalRecords += 1;
				});
			}
			
			results.data = filtered;
			results.criteria = criteria;
			results.totalRecords = totalRecords;
			
			return results;
		};
		
		function isMatch(group, criteria) 
		{
			var isMatch = false;
			if(criteria.isSimpleSearch)
			{
				isMatch = match(group, criteria, "group") || match(group, criteria, "permission") || match(group, criteria, "dn") || match(group, criteria, "lastname");
			}
			else
			{
				isMatch = match(group, criteria, "group") && match(group, criteria, "permission") && match(group, criteria, "dn") && match(group, criteria, "lastname");
			}
			
			return isMatch;
		};
		
		function match(group, criteria, field){
			var isMatch = criteria.isSimpleSearch ? false : true;
			
			if(criteria.hasOwnProperty(field) && field === "group" )
			{
				isMatch = group.name.indexOf(criteria[field]) >= 0;
			}
			
			return isMatch;
		}
		
		function isEmptyCriteria(criteria, criteriaFields) {
			var isEmpty = true;

			angular.forEach(criteriaFields, function(criteriaField) {
				if(isEmpty && criteria.hasOwnProperty(criteriaField))
				{
					var prop = criteria[criteriaField];
					
					if(prop) 
					{
						isEmpty = false;
					}
				}
			});
			
			return isEmpty;
		}
		
		function getData() {
			return {
				"group_1789288" : {
					"id" : "group_1789288",
					"selected" : false,
					"name" : "CONOPS_ADMIN",
					"comment" : "comment"
				},
				"group_3578576" : {
					"id" : "group_3578576",
					"selected" : false,
					"name" : "MRO_ADMIN",
					"comment" : "comment"
				},
				"group_5367864" : {
					"id" : "group_5367864",
					"selected" : false,
					"name" : "CRON_ADMIN",
					"comment" : "comment"
				},
				"group_7157152" : {
					"id" : "group_7157152",
					"selected" : false,
					"name" : "CSA",
					"comment" : "comment"
				},
				"group_8946440" : {
					"id" : "group_8946440",
					"selected" : false,
					"name" : "ONBOARDING",
					"comment" : "comment"
				},
				"group_10735728" : {
					"id" : "group_10735728",
					"selected" : false,
					"name" : "LOGISTICS",
					"comment" : "comment"
				},
				"group_12525016" : {
					"id" : "group_12525016",
					"selected" : false,
					"name" : "FINANCIALS",
					"comment" : "comment"
				}
			};
		}

		return factory;
	};
})();