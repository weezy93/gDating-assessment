(function () {

  'use strict';

  angular.module('gChemistry')
  .service('crudService', ['$http', function ($http) {
    return {
      getAll: function (resource) {
        return $http({
          method: 'GET',
          url: 'https://galvanize-student-apis.herokuapp.com/gdating/' + resource
        });
      },
      getOne: function (resource) {
        return $http({
          method: 'GET',
          url: 'https://galvanize-student-apis.herokuapp.com/gdating/' + resource
        })
      },
      addOne: function (resource, payload) {
        return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/' + resource, payload);
      },
      updateOne: function (resource) {

      },
      deleteOne: function (resource) {

      }
    };
  }]);
})();
