(function () {
    var moduleName = 'app.user';
    angular.module(moduleName).directive('userCard', [directiveFn]);
    function directiveFn() {
        return {
            restrict: 'E',
            scope:{
                userDetails: '=',
                //userDetails: '@',
                //userDetails: '&',
            },
            template: `
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <h3><a ui-sref="user-details({data: vm.userDetails})">{{vm.userDetails.name}}</a></h3>
                    <span class="text-small" ng-click="vm.loadUser(vm.userDetails)">{{vm.userDetails.phone}}</span>
                    <button class="btn btn-primary" ng-click="vm.editInModal(userDetails)">Edit in Modal</span>
                </div>
            `,
            controllerAs: 'vm',
            bindToController: true,
            controller: function($state, $uibModal){
                var vm = this;
                vm.loadUser = function(userDetails){
                    $state.go('user-details', {data: userDetails, id:userDetails.id, id2:2, id3:3, id4:4});
                };
                vm.editInModal = function(){
                    var modalInstance = $uibModal.open({
                        templateUrl: 'app/main/user/user-details.html',
                        controller: function(userDetails){
                            debugger;
                            var modalVm = this;
                            modalVm.userDetails = userDetails;
                            modalVm.userDetails = vm.userDetails;
                        },
                        controllerAs: 'vm',
                        //size: '',
                        resolve: {
                          userDetails: function () {
                            return vm.userDetails;
                          }
                        }
                      });

                      modalInstance.result.then(function(data){
                        debugger;
                        console.log(data);
                      }).catch(function(){
                          //do nothing
                          console.log('dismissed');
                      })
                };
            }
        };
    }
}());