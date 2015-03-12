
var phonecatApp =  angular.module('phonecatApp', [
    'ngRoute',
    'legislatorController',
    'phonecatFilters',
    'politicServices'
]);



phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'LegislatorListCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);








// phonecatApp.config(['$routeProvider',
//     function($routeProvider){
//         $routeProvider.
//             when('/phones',{
//                 templateUrl:'partials/phone-list.html',
//                 controller:'PhoneListCtrl'
//             }).
//             when('/phones/:phoneId',{
//                 templateUrl:'partials/phone-detail.html',
//                 controller:'PhoneDetailCtrl'
//             }).
//             otherwise({
//                 redirectTo:'/phones'
//             });
//     }
// ]);

