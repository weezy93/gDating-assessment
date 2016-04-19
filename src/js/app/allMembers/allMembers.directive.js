(function () {
  angular.module('gChemistry')
  .directive('allMembers', allMembers)
  .controller('allMembersCtrl', allMembersCtrl);

  allMembersCtrl.$inject = ['allMembersService'];


  function allMembers() {
    return {
      templateUrl: 'js/app/allMembers/allMembers.template.html',
      controller: allMembersCtrl,
      controllerAs: 'vm'
    };
  };

  function allMembersCtrl(allMembersService) {
      var vm = this;
      vm.member = {}

      allMembersService.getAllMembers()
      .then(function (data) {
        vm.membersList = data;
      });
  };

})();


// register partial with controller and service
// member dashboard
