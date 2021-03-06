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
          vm.currentData = [];
          vm.noPrevious = true;
          vm.searchTerm = '';

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
            allMembersService.firstThree = [data[0], data[1], data[2]];
            vm.person = data[0];

            vm.membersList = data;
            var index = 0;

            for (var i = 0; i < 6; i++) {
              vm.currentData.push(vm.membersList[i]);
              index = i;
            }

            if (vm.currentData[0]._id !== vm.membersList[0]._id) {
              vm.noPrevious = false;
            }
// PREVIOUS doesn't work
            vm.previous = function () {
              vm.currentData = [];
              for (var i = index; i > index - 6; i--) {
                vm.currentData.push(vm.membersList[i]);
              }
              index -=6;

              if (vm.currentData[0]._id !== vm.membersList[0]._id || vm.currentData[0]._id === vm.membersList[6]._id) {
                vm.noPrevious = false;
              }
            }
// NEXT works, previous doesn't
            vm.next = function () {
              vm.currentData = [];
              console.log('next', vm.currentData, index);
              for (var i = index; i < (index + 6); i++) {
                vm.currentData.push(vm.membersList[i]);
              }
              index += 6;
              console.log('next', index);
              if (vm.currentData[0]._id !== vm.membersList[0]._id || vm.currentData[0]._id === vm.membersList[6]._id) {
                vm.noPrevious = false;
              }
            };
          });

          vm.search = function (searchTerm) {
            console.log(searchTerm);
            allMembersService.search(searchTerm)
            .then(function (results) {
              vm.currentData = results;
            })
            .catch(function (err) {
              console.log('err', err);
            });
          }


      },
      controllerAs: 'vm'
    };
  };

})();

// needs loading gif
