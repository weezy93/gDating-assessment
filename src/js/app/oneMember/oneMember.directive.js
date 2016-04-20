(function () {
  angular.module('gChemistry')
  .directive('oneMember', oneMember);

  oneMember.$inject = ['$routeParams', 'allMembersService'];

  function oneMember($routeParams, allMembersService) {
    return {
      restrict: 'E',
      templateUrl: 'js/app/oneMember/oneMember.template.html',
      controller: function ($routeParams, allMembersService) {
        var vm = this;
        vm.member = allMembersService.oneMember;

      },
      controllerAs: 'vm'
    }
  };
})();


// using allMembersService to persist data
