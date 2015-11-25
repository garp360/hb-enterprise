(function() {
    'use strict';
    
    angular.module('hb.enterprise.surgica')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	    
		$urlRouterProvider.otherwise('/');
	 
	    $stateProvider
		
		.state('surgica', {   
			url : '/',
			controller: 'SurgicaController',
			views: {
				'': {
					templateUrl: 'surgica.html'
				},
				'header@surgica' : {
					templateUrl: '_partial/header/header.html',
					controller: 'HeaderController',
					resolve: {
						site: function() {
							return "JAXHB";
						},
						user: function() {
							return {
								name: "Garth Pidcock",
								dn: "CN=PIDCOCK.GARTH.J.1365524544, OU=CONTRACTOR, OU=PKI, OU=DoD, O=U.S. Government, C=US"
							};
						},
						lastLogin: function() {
							return moment.utc().subtract(2, 'days');
						},
						header : function(user, site, lastLogin) {
							return {
								title: "Surgica-hb",
								version: "1.0.0",
								urls: {
									help: "https://frc-web2d.navair.navy.mil/conops/contextHelp?",
									about: "https://frc-web2d.navair.navy.mil/conops/aboutInfo?"
								},								
								user: user,
								site: site,
								lastLogin: lastLogin
							};
						}
					}  
				},
				'banner@surgica' : {
					templateUrl: '_partial/banner/banner.html',
					controller: 'BannerController',
					resolve: {
						banner : function() {
							return {
								left: "left",
								fill: "fill",
								right: "right"
							};
						}
					}  
				},
				'toolbar@surgica' : {
					templateUrl: '_partial/toolbar/toolbar.html',
					controller: 'ToolBarController',
					resolve: {
						toolbar : function() {
							return {
								text: "toolbar"
							};
						}
					}  
				},
				'dashboard@surgica' : {
					templateUrl: '_partial/dashboard/dashboard.html',
					controller: 'DashBoardController',
					resolve: {
						dashboard : function() {
							return {
								data: { },
								messages: { }
							};
						}
					}
				},
				'footer@conops' : {
					templateUrl: '_partial/footer/footer.html',
					controller: 'FooterController',
					resolve: {
						footer : function() {
							return {
								text: "footer"
							};
						}
					}
				}
			}
		});
	       
	}]); 
})();

