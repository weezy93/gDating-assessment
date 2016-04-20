(function () {

  angular.module('gChemistry')
    .service('authService', authService);

    authService.$inject = ['$http', '$window', '$location', 'crudService', 'allMembersService'];

    function authService($http, $window, $location, crudService, allMembersService) {
      return {
        register: function (user) {
          return crudService.addOne('members', user)
          .then(function (member) {
            console.log(member);
            return member;
          });
        },
        login: function (resource, user) {
          return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/login', user)
        },
        logout: function () {
          $window.localStorage.setItem('user', null);
          $window.localStorage.setItem('token', null);
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
        getAddress: function (zipcode) {
          return $http({
            method: 'GET',
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + zipcode
          });
        },
      };
    };

})();
