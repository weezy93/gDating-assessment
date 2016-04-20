  // (function () {
  //   angular.module('gChemistry')
  //   .service('authInterceptor', ['$window', '$q', function ($window, $q) {
  //     return {
  //       // always make sure to return anything you use here!
  //       request: function(config) {
  //         // check for token in headers
  //         // config.headers['X-requested-with'] = XMLHttpRequest;
  //         var token = $window.localStorage.getItem('token');
  //
  //         return config;
  //       },
  //       responseError: function(err){
  //         // if header auth is not present throw an error
  //         console.log('response err', err);
  //         return err;
  //       }
  //     };
  //   }]);
  // })();
