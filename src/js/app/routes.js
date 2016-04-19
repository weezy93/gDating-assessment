(function () {
  angular.module('gChemistry')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '../partials/home.html'
    })
    .when('/members', {
      templateUrl: 'partials/allMembers.html'
    })
    .when('/members/:slug', {
      templateUrl: '../partials/oneMember.html'
    })
    .when('/auth/login', {
      templateUrl: '../partials/login.html'
    })
    .when('/auth/register', {
      templateUrl: '../partials/register.html'
    })
    .when('/auth/logout', {

    })
    .otherwise('/');
  });
})();
