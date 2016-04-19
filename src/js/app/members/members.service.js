(function () {

  angular.module('gChemistry')
    .service('allMembersService', allMembersService);

  allMembersService.$inject = ['crudService'];

  function allMembersService(crudService) {
    return {
      getAllMembers: function () {
        return crudService.getAll('members')
        .then(function (members) {
          return members.data.data;
        });
      },
      getOneMember: function (member) {
        return crudService.getOne('members', member)
        .then(function (member) {
          return member;
        });
      }
    };
  };

})();
