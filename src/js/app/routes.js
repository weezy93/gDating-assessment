(function () {

  angular.module('gChemistry')
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '../partials/home.html',
      controller: 'authController'
      // restricted: false,
      // preventLoggedIn: true
    })
    .when('/members', {
      templateUrl: '../partials/allMembers.html',
      // restricted: true,
      // preventLoggedIn: false
    })
    .when('/members/:slug', {
      templateUrl: '../partials/oneMember.html',
      // restricted: true,
      // preventLoggedIn: false
    })
    .when('/auth/login', {
      templateUrl: '../partials/login.html',
      controller: 'authController'
      // restricted: false,
      // preventLoggedIn: true
    })
    .when('/auth/register', {
      templateUrl: '../partials/register.html',
      controller: 'authController',
      // restricted: false,
      // preventLoggedIn: true,
    })
    .when('/auth/logout', {
      controller: 'authController',
      restricted: false,
      preventLoggedIn: false,
      resolve: {
        test: function (authService, $location) {
        authService.logout();
        $location.path('/login')
        }
      }
    })
    .otherwise('/');
    // $httpProvider.interceptors.push('authInterceptor');
  });

  angular.module('gChemistry').run( function ($rootScope, $location, $window, authService) {

  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    // next is route we're going to
    // if restricted and no token
    $rootScope.currentUser = $window.localStorage.getItem('user');
    if (next.restricted && !$window.localStorage.getItem('token')) {
      $location.path('/auth/login');
    }

    if (next.preventLoggedIn && $window.localStorage.getItem('token')) {
      $location.path('/');
    }
   });
});

})();

// register partial with controller and service
// member dashboard
