(function () {

  angular.module('gChemistry')
    .service('allMembersService', allMembersService);

  allMembersService.$inject = ['crudService'];

  function allMembersService(crudService) {
    return {
      oneMember: {},
      getAllMembers: function () {
        return crudService.getAll('members')
        .then(function (members) {
          return members.data.data;
        });
      },
      getOneMember: function (id) {
        return crudService.getOne('members/' + id)
        .then(function (member) {
          return member.data.data;
        });
      }
    };
  };

})();
