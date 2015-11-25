(function() {
    'use strict';
    
    angular.module('hb.enterprise.surgica.smartcard')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	    
		$urlRouterProvider.otherwise('/');
	 
	    $stateProvider
		
		.state('smartcard', {   
			url : '/',
			views: {
				'': {
					templateUrl: 'smartcard.html'
				},
				'header@smartcard' : {
					templateUrl: 'http://localhost:9665/hb/surgica/_partial/header/header.html',
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
								title: "Data Management - COG",
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
				'toolbar@smartcard' : {
					templateUrl: 'http://localhost:9665/hb/surgica/_partial/toolbar/toolbar.html'
				},
				'footer@smartcard' : {
					templateUrl: 'http://localhost:9665/hb/surgica/_partial/footer/footer.html',
					controller: 'FooterController',
					resolve: {
						footer : function() {
							return {
								text: ""
							}
						}
					}
				},
				'search@smartcard' : {
					templateUrl: 'search/search.html',
					controller: 'SearchController',
					resolve: {
						optionData: function(){ 
							var optionData = {
								furnished: {
									values : [ 
									    { text : "All", order : 0, value: null }, 
									    { text : "Yes", order : 1, value: true }, 
									    { text : "No", order : 2, value: false } 
									],
									current : {}
								},
								dlr: {
									values : [ 
									    { text : "All", order : 0, value: null }, 
									    { text : "Yes", order : 1, value: true }, 
									    { text : "No", order : 2, value: false } 
									],
									current : {}
								}
							}
							
							optionData.furnished.current = optionData.furnished.values[0];
							optionData.dlr.current = optionData.dlr.values[0];
							
							return optionData;
						},
						criteria : function() {
							return { };
						},
						filter : function() {
							return { };
						},
						cogs: function() {
							var cogs = [];
							var lib = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
							for(var i=0; i<1000; i++)
							{
								var r1 = Math.abs(Math.floor(Math.random() * (0 - lib.length + 1)) + 0);
								var r2 = Math.abs(Math.floor(Math.random() * (0 - lib.length + 1)) + 0);
								var code = lib[r1].toString() + lib[r2].toString();
																
								var id = i * 1789288;
								
								cogs.push({id: id, selected: false, code: code, dmFundCode: "GC", furnished: true, dlr: false})
							}
							
							return cogs;
						}
					}
				}
			}
		});
	       
	}]); 
})();
