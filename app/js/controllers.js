'use strict';


var legislatorController = angular.module('legislatorController', []);

/** One method of preventing depreciation of services during minification issues using $inject**/
//function PhoneListCtrl($scope, $http){
//    $http.get('phones/phones.json').success(function(data){
//        $scope.phones = data;
//    });
//    $scope.orderProp = 'age';
//}
//PhoneListCtrl.$inject = ['$scope', '$http'];
//phonecatController.controller('PhoneListCtrl', PhoneListCtrl);




/** another means of preventing depreciation of services during minification issues**/
legislatorController.controller('LegislatorListCtrl',['$scope','Legislator', 
	function($scope, Legislator) {
    $scope.legislators = Legislator.query();
    // $scope.senators = Legislator.get({:$routeParams.first_name});
    // $scope.orderProp = "age";
}]);

// phonecatController.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Legislator',
//   function($scope, $routeParams, Phone) {
//     $scope.phone = Phone.get({: $routeParams.phoneId}, function(phone){
//     $scope.mainImageUrl = phone.images[0];
//     });

//     $scope.setImage = function(imageUrl){
//       $scope.mainImageUrl = imageUrl;
//     };
//   }]);



//console.log(access);


