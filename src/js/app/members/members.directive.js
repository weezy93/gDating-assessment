(function () {
  angular.module('gChemistry')
  .directive('allMembers', allMembers);

  allMembers.$inject = ['allMembersService'];


  function allMembers(allMembersService) {
    return {
      restrict: 'E',
      templateUrl: 'js/app/members/members.template.html',
      controller: function (allMembersService) {
          var vm = this;
          vm.message = 'hello';
          vm.membersList = [];
          vm.person = {};

          allMembersService.getAllMembers()
          .then(function (data) {
            vm.person = data[0];
            vm.membersList = data;
            console.log(vm.person);
            return vm.person;
          });
      },
      controllerAs: 'vm'
    };
  };

})();

// needs loading gif
