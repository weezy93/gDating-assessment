(function () {
  angular.module('gChemistry')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'home/home.template.html'
    })
    .when('/members', {
      templateUrl: 'allMembers/allMembers.template.html',
      controller: 'allMembersCtrl'
    })
    .when('/members/:slug', {
      templateUrl: 'oneMember/oneMember.template.html'
    })
    .otherwise('/');
  });
})();
