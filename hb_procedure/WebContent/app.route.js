(function() {
    'use strict';
    
    angular.module('hb.enterprise.surgica.data.procedure')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	    
		$urlRouterProvider.otherwise('/data/search');
	 
	    $stateProvider
		
		.state('data', { 
			abstract: true,
			url : '/data',
			views: {
				'header' : {
					templateUrl: 'http://localhost:9665/hb/surgica/_partial/header/header.html',
					controller: 'HeaderController',
					resolve: {
						site: function() {
							return "NJ-FAC2";
						},
						user: function() {
							return {
								name: "Garth Pidcock",
								dn: "CN=PIDCOCK.GARTH.J.1365524544"
							};
						},
						lastLogin: function() {
							return moment.utc().subtract(2, 'days');
						},
						header : function(user, site, lastLogin) {
							return {
								title: "Data Management - Surgical Procedures (Px)",
								version: "2.0.0",
								urls: {
									help: "#",
									about: "#"
								},								
								user: user,
								site: site,
								lastLogin: lastLogin
							};
						}
					}
				},
				'content' : {
					template: '<div ui-view></div>'
				},
				'footer' : {
					templateUrl: 'http://localhost:9665/hb/surgica/_partial/footer/footer.html',
					controller: 'FooterController',
					resolve: {
						footer : function() {
							return {
								text: ""
							};
						}
					}
				}
			}
		})
		.state('data.search', {
			url : '/search',
			templateUrl: 'app/search/search.html',
			controller: 'SearchController',
			resolve: {
				criteria : function() {
					return { };
				}
			}
		})
		.state('data.search.new-procedure', {
			url : '/',
			modal: true,
			templateUrl: 'app/procedure/procedure.html',
			controller: 'ProcedureController',
			resolve: {
				title : function() {
					return "Create Procedure";
				},
				procedure : function() {
					return { };
				}
			}
		})
		.state('data.search.new-category', {
			url : '/',
			modal: true,
			templateUrl: 'app/category/category.html',
			controller: 'CategoryController',
			resolve: {
				title : function() {
					return "Create Category";
				},
				category : function() {
					return { };
				}
			}
		})
		.state('data.search.edit', {
			url : '/:id',
			modal: true,
			templateUrl: 'app/procedure/procedure.html',
			controller: 'ProcedureController',
			resolve: {
				procedure : function($stateParams, ProcedureFactory) {
					return ProcedureFactory.findById($stateParams.id);
				},
				title : function(procedure) {
					return "Edit Procedure [" + procedure .name + "]";
				}
			}
		});
	       
	}]); 
})();		
