(function () {
  angular.module('gChemistry')
  .directive('allMembers', allMembers)

  allMembers.$inject = ['allMembersService'];


  function allMembers(allMembersService) {
    return {
      restrict: 'E',
      templateUrl: 'js/app/allMembers/members.template.html',
      controller: function (allMembersService) {
          var vm = this;
          vm.member = {}
          vm.membersList = [];

          allMembersService.getAllMembers()
          .then(function (data) {
            console.log('data', data[0]);
            vm.membersList = data;
          });
      },
      controllerAs: 'vm'
    };
  };



})();


// register partial with controller and service
// member dashboard
