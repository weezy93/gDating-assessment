(function () {
  angular.module('gChemistry')
  .directive('oneMember', oneMember);

  oneMember.$inject = ['$routeParams', 'oneMemberService'];

  function oneMember($routeParams, oneMemberService) {
    return {
      restrict: 'E',
      templateUrl: 'js/app/oneMember/oneMember.template.html',
      controller: function ($routeParams, oneMemberService) {
        var vm = this;
        vm.member = {};
        console.log('params', $routeParams);

        // oneMemberService.getOneMember()
        // .then(function (member) {
        //   vm.member = member;
        // });

      },
      controllerAs: 'vm'
    }
  };
})();
