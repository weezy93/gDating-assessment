(function () {
  angular.module('gChemistry')
    .controller('authController', authController);

  authController.$inject = ['$scope', '$location', 'authService'];

  function authController($scope, $location, authService) {
    initialUser = {
     username: '',
     email: '',
     password: '',
     names: {
       firstName: '',
       lastName: '',
     },
     dob: '',
     address: {
       zipcode: '',
       geo: {}
     }
   };

   $scope.user = {};
   $scope.error = '';

    $scope.register = function (member) {
      authService.getAddress($scope.user.zipcode)
       .then(function (result) {
         console.log();
         $scope.user.address.geo.lat = result.data.results[0].geometry.location.lat;
         $scope.user.address.geo.lng = result.data.results[0].geometry.location.lng;

         console.log('after zip', $scope.user);

         authService.register($scope.user)
         .then(function (member) {
           authService.setUserInfo(member);
           $location.path('/members/' + member.slug);
           $scope.user = initialUser;
         })
         .catch(function (err) {
           // check status code, send appropriate message
           console.log('err', err);
           return next(err);
         });
       });


    };
    $scope.login = function (member) {
      authService.login('members', member)
      .then(function (result) {

        if (result.status === 200) {
          authService.setUserInfo(result);
          $location.path('/members');
        } else {
          $scope.error = 'Email and/or password is incorrect'
        }
      })
      .catch(function (err) {
        console.log('login err', err);
      });
    };
  };

})();
