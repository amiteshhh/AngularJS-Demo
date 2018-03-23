(function () {
    'use strict';
    /**
     * @ngdoc controller
     * @module app.home
     * @name HomeCtrl
     * @description
     * Controller to manage home
     * @requires #/api/app.home/service/HomeSvc HomeSvc
     */
    
    var moduleName = 'app.home';

    angular.module(moduleName)
        .controller('HomeCtrl', Ctrl);

    Ctrl.$inject = ['$injector', '$rootScope'];
    function Ctrl($injector, $rootScope) {
        var vm = this;
        //var HomeSvc = $injector.get('HomeSvc');

        vm.message = 'You are at home';
        //$scope.message = 'You are at home';

        init();

        function init() {
            //_sampleOperation();
        }

        function _sampleOperation() {
            HomeSvc.sampleOperation().then(function (data) {

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

