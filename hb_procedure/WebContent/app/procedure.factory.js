(function() {
	'use strict';

	angular
		.module('hb.enterprise.surgica.data.procedure')
		.factory('ProcedureFactory', ProcedureFactory);
	
		ProcedureFactory.$inject = ['$q', '$log','$firebaseArray', '$firebaseObject'];
		
		function ProcedureFactory($q, $log, $firebaseArray, $firebaseObject) 
		{
			var CATEGORIES = new Firebase("https://surgica.firebaseio.com/procedure/categories");
			var PROCEDURES = new Firebase("https://surgica.firebaseio.com/procedure/procedures");
			var CRITERIA_FIELDS = ["name", "code", "category"];
			
			var factory = {};
			
			function findById(id) {
				var deferred = $q.defer();
				$firebaseObject(PROCEDURES.child(id)).$loaded().then(function(procedure) {					
					deferred.resolve(procedure);
				}).catch(function(errMsg){
					deferred.reject(errMsg);
				});
				return deferred.promise;
			};
			
			function findByCriteria(criteria) 
			{
				var deferred = $q.defer();
				
				$firebaseArray(PROCEDURES).$loaded().then(function(procedures) {
					var matches = [ ];
					
					if ( isEmptyCriteria(CRITERIA_FIELDS, criteria) ) {
						matches = procedures;
					} else {
						if(criteria.isSimpleSearch) {
							matches = simpleQuery(criteria, procedures);
						} else {
							matches = advancedQuery(criteria, procedures);
						}
					}
					
					var result = {
						criteria: criteria,
						totalRecords: procedures.length,
						matches: matches
					};
					
					deferred.resolve(result);
				}).catch(function(errMsg){
					deferred.reject(errMsg);
				});
				
				return deferred.promise;
			};
			
			function isEmptyCriteria(fields, criteria) {
				var isEmpty = true;
				for( var i=0; i<fields.length; i++ ) {
					if(criteria.hasOwnProperty(fields[i]) && criteria[fields[i]] && criteria[fields[i]].trim().length > 0) {
						isEmpty = false;
						break;
					};
				}
				return isEmpty;
			}
			
			function simpleQuery(criteria, procedures) {
				var matches = [];
				angular.forEach(procedures, function(procedure) {
					if(isMatch(["name"], criteria, procedure) || isMatch(["code"], criteria, procedure) || isMatch(["category","name"], criteria, procedure.category)) {
						matches.push(procedure);
					} 
				});
				return matches;
			};

			function advancedQuery(criteria, procedures) {
				var matches = [];
				angular.forEach(procedures, function(procedure) {
					if(isMatch(["name"], criteria, procedure) && isMatch(["code"], criteria, procedure) && isMatch(["category","name"], criteria, procedure.category)) {
						matches.push(procedure);
					} 
				});
				return matches;
			};
			
			function isMatch(fieldNames, criteria, object) 
			{
				var match = true;
				var criteriaFieldName = null;
				var objectFieldName = null;
				
				if(fieldNames.length > 1) {
					criteriaFieldName = fieldNames[0];
					objectFieldName = fieldNames[1];
				} else {
					criteriaFieldName = fieldNames[0];
					objectFieldName = fieldNames[0];
				}
				
				if(criteria.hasOwnProperty(criteriaFieldName) && object.hasOwnProperty(objectFieldName) && object[objectFieldName] && criteria[criteriaFieldName]) {
					var criteriaValue = criteria[criteriaFieldName].toLowerCase();
					var objectValue = object[objectFieldName].toLowerCase();
					match = criteriaValue.trim().length > 0 && (objectValue === criteriaValue || objectValue.indexOf(criteriaValue) >= 0);
				}
				return match;
			}
			
			factory.findById = findById;
			factory.findByCriteria = findByCriteria;

			return factory;
		};
})();