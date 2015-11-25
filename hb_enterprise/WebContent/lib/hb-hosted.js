(function() {
    'use strict';
    
    angular
    .module('hb.enterprise.hosted', [])
   

   	.controller('FooterController', FooterController)
	.controller('HeaderController', HeaderController)
	.controller('ToolBarController', ToolBarController);
	
	ToolBarController.$inject = ['$scope', '$log', 'toolbar'];
	function ToolBarController ($scope, $log, toolbar) 
	{
		$scope.toolbar = toolbar;
	}
	
	HeaderController.$inject = ['$scope', '$log', 'header'];
	function HeaderController ($scope, $log, header) 
	{
		$scope.header = header;
	}
   
	FooterController.$inject = ['$scope', '$log', 'footer'];
	function FooterController ($scope, $log, footer) 
	{
		$scope.footer = footer;
	}


})();