(function () {

  angular.module('gChemistry')
    .service('authService', authService);

    authService.$inject = ['$http', '$window', '$location', 'crudService', 'allMembersService'];

    function authService($http, $window, $location, crudService, allMembersService) {
      return {
        register: function (user) {
          return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/register', user);
        },
        login: function (user) {
          return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/login', user)
        },
        logout: function (user) {
          $window.localStorage.clear(user);
        },
        setUserInfo: function (userData) { // user object and token
          console.log(userData);
          // userData is what is sent from auth routes
          $window.localStorage.setItem('user', JSON.stringify(userData.data.data.user.email));
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
        getAddress: function (zipcode) {
          return $http({
            method: 'GET',
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + zipcode
          });
        },
      };
    };

})();
