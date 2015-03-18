
var legislatorApp =  angular.module('legislatorApp', [
    'ngRoute',
    'legislatorController',
    'politicServices'
]);



legislatorApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/legislator-list.html',
        controller: 'LegislatorListCtrl'
      }).
      when('/legislator-detail',{
        templateUrl:'partials/legislator-detail.html',
        controller:'LegislatorDetailCtrl'
      }).
      otherwise({
        redirectTo: '/home'
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

