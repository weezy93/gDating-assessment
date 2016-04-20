(function () {

  angular.module('gChemistry')
    .service('authService', authService);

    authService.$inject = ['$http', '$window', 'crudService', 'allMembersService'];

    function authService($http, $window, crudService, allMembersService) {
      return {
        register: function (user) {
          return crudService.addOne('members', user)
          .then(function (member) {
            console.log(member);
            return member;
          });
        },
        login: function (resource, user) {
          return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/' + resource, user)
        },
        logout: function (user) {
          user = null;
          $window.localStorage.clear();
        },
        setUserInfo: function (userData) { // user object and token
          // userData is what is sent from auth routes
          $window.localStorage.setItem('user', JSON.stringify(userData.data.data.user));
          $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
        },
        getUserInfo: function (userData) {
          $window.localStorage.getItem('user');
        },
        getOne: function (id) {
          allMembersService.getOneMember(id)
          .then(function (member) {
            allMembersService.oneMember = member;
            $location.path('/members' + member.slug)
          });
        },

      };
    };

})();

function () {
  angular.module('gChemistry')
  .service('authInterceptor', ['$window', '$q', function ($window, $q) {
    return {
      // always make sure to return anything you use here!
      request: function(config) {
        // check for token in headers
        // config.headers['X-requested-with'] = XMLHttpRequest;
        var token = $window.localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = 'Bearer' + token;
        }
        return config;
      },
      responseError: function(err){
        // if header auth is not present throw an error
        console.log('response err', err);
        return err;
      }
    };
  }]);
})();
