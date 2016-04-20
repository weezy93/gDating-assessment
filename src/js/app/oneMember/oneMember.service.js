(function () {

  angular.module('gChemistry')
    .service('oneMemberService', oneMemberService);

    oneMemberService.$inject = ['crudService'];

    function oneMemberService(crudService) {
      return {
        // getOneMember: function (slug) {
        //   crudService.getOne('member/' + slug)
        //   .then(function (member) {
        //     return member.data.data;
        //   });
        // }
      };
    };

})();
