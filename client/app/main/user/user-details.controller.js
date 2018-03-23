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
        .controller('UserDetailsCtrl', Ctrl);

    Ctrl.$inject = ['$injector', '$rootScope', '$stateParams', 'countryList'];
    function Ctrl($injector, $rootScope, $stateParams, countryList) {
        var vm = this;
        var UserSvc = $injector.get('UserSvc');

        var userId = $stateParams.id;

        init();

        function init() {
            if(!userId){
                return;
            }
            if($stateParams.data){
                vm.userDetails = $stateParams.data;
            } else{
                _getUser(userId);
            }           
        }

        function _getUser(userId) {
            UserSvc.getUser(userId).then(function (data) {
                vm.userDetails = data;
            }).catch(handleServiceError)
                .finally(function () {
                    //console.log('Finally hide the loader etc when error or success');
                });
        }

        function handleServiceError(err) {
            console.log('Error occurred with service', err);
            $rootScope.$broadcast('notify-service-error', err);
        }
    }
})();

