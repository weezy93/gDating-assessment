(function () {
  angular.module('gChemistry')
  .directive('oneMember', oneMember);

  oneMember.$inject = ['$rootScope', '$routeParams', 'allMembersService', 'oneMemberService'];

  function oneMember($rootScope, $routeParams, allMembersService, oneMemberService) {
    return {
      restrict: 'E',
      templateUrl: 'js/app/oneMember/oneMember.template.html',
      controller: function ($routeParams, allMembersService) {
        var vm = this;
        vm.member = allMembersService.oneMember;

        vm.thisMember = false;
        if (vm.member.email === $rootScope.currentUser) {
          vm.thisMember = true;
        }

      },
      controllerAs: 'vm'
    }
  };
})();


// using allMembersService to persist data
