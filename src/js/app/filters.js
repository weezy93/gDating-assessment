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
    .filter('capitalize', function () {
      return function (input, all) {
        var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
              return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
      }
    });
})();
