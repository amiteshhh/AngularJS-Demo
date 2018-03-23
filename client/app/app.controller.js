
(function () {
    var moduleName = 'app';
    angular.module(moduleName).controller('AppCtrl', [
        '$scope',
        '$injector',
        '$state',
        '$window',
        ctrlFn
    ]);
    function ctrlFn($scope, $injector, $state, $window) {
        console.log('appCtrl');
        var vm = this;
        vm.name = 'John Smith';
        vm.footerTemplate = 'app/common/template/footer.html';
        vm.goBack = _goBack;

        _init();
        function _init() {

        }

        vm.loadHome= function(){
            $state.go('home');
        };

        function _goBack(){
            $window.history.back();
        }

        //$rootScope.$on('notify-service-error', function(param){
        $scope.$on('notify-service-error', function(param, data){
            vm.name = 'Error';
            console.log(param);
        });
    }
}());