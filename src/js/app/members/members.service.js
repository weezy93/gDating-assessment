(function () {

  angular.module('gChemistry')
    .service('allMembersService', allMembersService);

  allMembersService.$inject = ['crudService'];

  function allMembersService(crudService) {
    return {
      oneMember: {},
      firstThree: [],
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
      },
      search: function (term) {
        return crudService.search(term)
        .then(function (results) {
          console.log(results);
          return results;
        });
      }
    };
  };

})();
