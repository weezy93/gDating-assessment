(function () {

  angular.module('gChemistry')
    .service('oneMemberService', oneMemberService);

    oneMemberService.$inject = ['$window', '$location', 'crudService'];

    function oneMemberService($window, crudService) {
      return {
        editProfile: function (member) {
          return crudService.editOne('members/' + member._id, member)
          .then(function (member) {
            console.log(member);
          })
          .catch(function (err) {
            console.log('err', err);
          });
        }
       };
    };

})();
