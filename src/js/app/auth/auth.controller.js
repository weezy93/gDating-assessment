(function () {
  angular.module('gChemistry')
    .controller('authController', authController);

  authController.$inject = ['$scope', '$location', 'authService'];

  function authController($scope, $location, authService) {
    initialUser = {
     username: '',
     email: '',
     password: '',
     gender: '',
     slug: '',
     names: {
       firstName: '',
       lastName: '',
     },
     dob: '',
     address: {
       zipcode: '',
       geo: {
         lat: '',
         lng: ''
       }
     }
   };

   $scope.user = initialUser;
   $scope.error = '';

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

    $scope.register = function (member) {
      console.log(member);
      authService.getAddress($scope.user.address.zipcode)
       .then(function (result) {
         $scope.user.address.geo.lat = result.data.results[0].geometry.location.lat;
         $scope.user.address.geo.lng = result.data.results[0].geometry.location.lng;
         $scope.user.slug = member.username + '-' + member.dob;


         authService.register($scope.user)
         .then(function (member) {
           authService.setUserInfo(member);
           $location.path('/members');
           $scope.user = initialUser;
         })
         .catch(function (err) {
           // check status code, send appropriate message
           console.log('err', err);
         });
       });

       $scope.logout = function () {
         authService.logout();
       }

    };

  };

})();
