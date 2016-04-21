(function () {
  angular.module('gChemistry')
    .filter('gender', function () {
      return function (input) {
        if (input == 0) {
          return 'Male';
        } else if (input == 1) {
          return 'Female';
        } else if (input == 2) {
          return 'Gender Queer';
        } else {
          return 'Decline to Answer';
        }
      }
    })
    .filter('toUpperCase', function () {
      return function (input) {
       // make names to upper case
      }
    });
})();
