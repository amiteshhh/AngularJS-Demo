(function () {
    'use strict';
    /**
     * @ngdoc controller
     * @module app.user
     * @name UserCtrl
     * @description
     * Controller to manage user
     * @requires #/api/app.user/service/UserSvc UserSvc
     */

    var moduleName = 'app.user';

    angular.module(moduleName)
        .controller('UserCtrl', Ctrl);

    Ctrl.$inject = ['$injector', '$rootScope', '$scope', 'APP_CONSTANT', '$state', '$uibModal'];
    function Ctrl($injector, $rootScope, $scope, APP_CONSTANT, $state, $uibModal) {
        var vm = this;

        console.log(APP_CONSTANT);
        var UserSvc = $injector.get('UserSvc');

        vm.greet = 'Hi';
        console.log(APP_CONSTANT);
        init();

        function init() {
            _getUsers();
        }

        function _getUsers() {
            vm.isDataLoading = true;
            var promise = UserSvc.getUsers();//smart async/timeout handling
            promise.then(function (users) {
                vm.users = users;
            }).catch(function (err) {
                vm.users = err;
                console.log(err);
                $rootScope.$broadcast('notify-error', {});//ideally instead of broadcasting you can simply create a service like ErrorSvc
            }).finally(function () {
                console.log('completed');
                vm.isDataLoading = false;
            });
            console.log(vm.users);//it will be undefined at this moment as promise is resolved in next javascript execution tick
        }        

        vm.getClassName = function () {
            return 'odd';
        };

        vm.loadUser = function (user) {
            $state.go('user-details', {
                id: user.id
            });
        }
        vm.openUserModal = function (user) {
            $uibModal.open({
                //templateUrl: 'app/main/user/user-details.html',
                templateUrl: 'script-template-example',//it can be any name like user.html; see user.html
                controllerAs: 'vm',
                controller: function (data) {
                    var modalVm = this;
                    modalVm.userDetails = angular.copy(data);
                },
                resolve: {
                    data: function () {
                        return user;
                    }
                }
            }).result.then(function(modifiedUser){
                var index = vm.users.indexOf(user);
                vm.users[index] = modifiedUser;
            });
        };

    }
})();

