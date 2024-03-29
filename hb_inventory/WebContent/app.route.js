(function() {
    'use strict';
    
    angular.module('ndms.conops.permission')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	    
		$urlRouterProvider.otherwise('/');
	 
	    $stateProvider
		
		.state('conops_permission', {   
			url : '/',
			views: {
				'': {
					templateUrl: 'conops_permission.html'
				},
				'header@conops_permission' : {
					templateUrl: 'http://localhost:7101/ux/_partial/header/header.html',
					controller: 'HeaderController',
					resolve: {
						site: function() {
							return "FRCSE";
						},
						user: function() {
							return {
								name: "Garth Pidcock",
								dn: "CN=PIDCOCK.GARTH.J.1365524544, OU=CONTRACTOR, OU=PKI, OU=DoD, O=U.S. Government, C=US"
							}
						},
						lastLogin: function() {
							return moment.utc().subtract(2, 'days');
						},
						header : function(user, site, lastLogin) {
							return {
								title: "Data Management - CONOPS Permission",
								version: "2.0.0",
								urls: {
									help: "https://frc-web2d.navair.navy.mil/conops/contextHelp?",
									about: "https://frc-web2d.navair.navy.mil/conops/aboutInfo?"
								},								
								user: user,
								site: site,
								lastLogin: lastLogin
							}
						}
					}
				},
				'toolbar@conops_permission' : {
					templateUrl: 'http://localhost:7101/ux/_partial/toolbar/toolbar.html'
				},
				'footer@conops_permission' : {
					templateUrl: 'http://localhost:7101/ux/_partial/footer/footer.html',
					controller: 'FooterController',
					resolve: {
						footer : function() {
							return {
								text: ""
							}
						}
					}
				},
				'search@conops_permission' : {
					templateUrl: 'search/search.html',
					controller: 'SearchController',
					resolve: {
						criteria : function() {
							return { };
						}
					}
				}
			}
		});
	       
	}]); 
})();
