(function() {
	'use strict';

	angular
	.module('ndms.conops.permission').factory('ConopsPermissionFactory', ConopsPermissionFactory);

	function ConopsPermissionFactory($q, $log) 
	{
		var factory = {};
		var criteriaFields = ["group", "permission"];
		factory.findConopsPermissionById = findPermissionById;
		factory.findConopsPermissionByCriteria = findPermissionByCriteria;

		function findPermissionById(id) 
		{
			var deferred = $q.defer();
			deferred.resolve( getData()[id] );
			
			return deferred.promise;
		};

		function findPermissionByCriteria(criteria) 
		{
			var results = {};
			var filtered = [];
			var permissions = getData();
			var totalRecords = 0;
			
			if(isEmptyCriteria(criteria, criteriaFields)) {
				angular.forEach(permissions, function(permission) {
					filtered.push(permission);
					totalRecords += 1;
				});
			} else {
				angular.forEach(permissions, function(permission) {
					if(isMatch(permission, criteria)) {

						filtered.push(permission);
					}
					totalRecords += 1;
				});
			}
			
			results.data = filtered;
			results.criteria = criteria;
			results.totalRecords = totalRecords;
			
			return results;
		};
		
		function isMatch(permission, criteria) 
		{
			var isMatch = false;
			if(criteria.isSimpleSearch)
			{
				isMatch = match(permission, criteria, "group") || match(permission, criteria, "permission");
			}
			else
			{
				isMatch = match(permission, criteria, "group") && match(permission, criteria, "permission");
			}
			
			return isMatch;
		};
		
		function match(permission, criteria, field) {
			var isMatch = criteria.isSimpleSearch ? false : true;
			
			if(criteria.hasOwnProperty(field) && field === "permission" )
			{
				isMatch = permission.name.indexOf(criteria[field]) >= 0;
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
				"perm_group_2827282" : {
					"name" : "CONOPS_ADMIN",
					"permissions" : [
						{
							"id" : "permission_1789288",
							"selected" : false,
							"match" : false,
							"name" : "MANAGE_GROUPS",
							"comment" : "comment"
						},
						{
							"id" : "permission_3578576",
							"selected" : false,
							"match" : false,
							"name" : "MANAGE_PERMISSIONS",
							"comment" : "comment"
						}
					]
				},
				"perm_group_2117728" : {
					"name" : "TIME_KEEPER",
					"permissions" : [ 
						{
							"id" : "permission_5367864",
							"selected" : false,
							"match" : false,
							"name" : "CRON_ADMIN",
							"comment" : "comment"
						},
						{
							"id" : "permission_7157152",
							"selected" : false,
							"match" : false,
							"name" : "CSA",
							"comment" : "comment"
						},
						{
							"id" : "permission_8946440",
							"selected" : false,
							"match" : false,
							"name" : "ONBOARDING",
							"comment" : "comment"
						},
						{
							"id" : "permission_3578576",
							"selected" : false,
							"match" : false,
							"name" : "MANAGE_PERMISSIONS",
							"comment" : "comment"
						}
					]
				},
				"perm_group_92726622" : {
					"name" : "FINANCE",
					"permissions" : [ {
							"id" : "permission_10735728",
							"selected" : false,
							"match" : false,
							"name" : "LOGISTICS",
							"comment" : "comment"
						},
						{
							"id" : "permission_12525016",
							"selected" : false,
							"match" : false,
							"name" : "FINANCIALS",
							"comment" : "comment"
						},
						{
							"id" : "permission_3578576",
							"selected" : false,
							"match" : false,
							"name" : "MANAGE_PERMISSIONS",
							"comment" : "comment"
						}
					]
				}
			};
		}
		
		function getDatas() {
			return [{
		        'id': 1,
		        'title': 'node1',
		        'nodes': [
		          {
		            'id': 11,
		            'title': 'node1.1',
		            'nodes': [
		              {
		                'id': 111,
		                'title': 'node1.1.1',
		                'nodes': []
		              }
		            ]
		          },
		          {
		            'id': 12,
		            'title': 'node1.2',
		            'nodes': []
		          }
		        ]
		      }, {
		        'id': 2,
		        'title': 'node2',
		        'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
		        'nodes': [
		          {
		            'id': 21,
		            'title': 'node2.1',
		            'nodes': []
		          },
		          {
		            'id': 22,
		            'title': 'node2.2',
		            'nodes': []
		          }
		        ]
		      }, {
		        'id': 3,
		        'title': 'node3',
		        'nodes': [
		          {
		            'id': 31,
		            'title': 'node3.1',
		            'nodes': []
		          }
		        ]
		      }];
		}

		return factory;
	};
})();