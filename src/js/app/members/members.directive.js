(function () {
  angular.module('gChemistry')
  .directive('allMembers', allMembers);

  allMembers.$inject = ['$location', 'allMembersService'];


  function allMembers($location, allMembersService) {
    return {
      restrict: 'E',
      templateUrl: 'js/app/members/members.template.html',
      controller: function ($location, allMembersService) {
          var vm = this;
          vm.membersList = [];

          vm.getOne = function(id) {
            allMembersService.getOneMember(id)
            .then(function (member) {
              allMembersService.oneMember = member;
              console.log(allMembersService.oneMember);
              $location.path('/members/' + member.slug);
            });
          };

          allMembersService.getAllMembers()
          .then(function (data) {
            vm.person = data[0];
            console.log(data[0]);
            vm.membersList = data;
          });
      },
      controllerAs: 'vm'
    };
  };

})();

// needs loading gif
