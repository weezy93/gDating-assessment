(function () {

  angular.module('gChemistry')
  .service('allMembersService', allMembersService);

  allMembersService.$inject = ['crudService'];

  function allMembersService(crudService) {
    return {
      getAllMembers: function () {
        return crudService.getAll('members')
        .then(function (members) {
          console.log(members);
          return members;
        });
      },
      getOneMember: function (member) {
        return crudService.getOne('members', member)
        .then(function (member) {
          console.log(member);
          return member;
        });
      }
    };
  };

})();
