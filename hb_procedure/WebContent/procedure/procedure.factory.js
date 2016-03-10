(function() {
	'use strict';

	angular
	.module('hb.enterprise.surgica.data.procedure')
	.factory('ProcedureFactory', ProcedureFactory);

	ProcedureFactory.$inject = ['$q', '$log'];
	
	function ProcedureFactory($q, $log) 
	{
		var factory = {};
		
		return factory;
	};
})();