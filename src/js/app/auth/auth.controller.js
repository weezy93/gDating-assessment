(function () {

  angular.module('gChemistry')
    .controller('authController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {
      initialUser = {
        username: '',
        email: '',
        password: '',
        names: {
          firstName: '',
          lastName: '',
        },
        dob: ''
      };

      $scope.registerUser = {};

      $scope.user = {};

      $scope.register = function (user) {
        return authService.addMember(user)
        .then(function (member) {
        });

        $scope.registerUser = initialUser;
      };


      $scope.register = function (member) {
        authService.register(member)
        .then(function (member) {
          authService.setUserInfo(member);
          $location.path('/members/' + member.slug);
          $scope.registerUser = initialUser;
        })
        .catch(function (err) {
          // check status code, send appropriate message
          console.log('err', err);
          return next(err);
        });
      };


    }]);
})();
