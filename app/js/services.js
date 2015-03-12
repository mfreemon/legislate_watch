'use strict';



/* Services */

var politicServices = angular.module('politicServices', ['ngResource']);

politicServices.factory('Legislator', ['$resource', 
	function($resource){
		return $resource('https://congress.api.sunlightfoundation.com/legislators?apikey=63ff41a056884535b7a2d9cd90bed918&chamber=senate&per_page=100',{},{
			query:{
				method:'GET'
				}
			});
	}]);


// params:{
// 					phonesId:'phones'
// 					},
// 				isArray:true

// var phonecatServices = angular.module('phonecatServices', ['ngResource']);

// phonecatServices.factory('Phone', ['$resource',
//   function($resource){
//     return $resource('phones/:phoneId.json', {}, {
//       query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
//     });
//   }]);