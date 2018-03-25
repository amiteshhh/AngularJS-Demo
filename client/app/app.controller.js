
(function () {
    var moduleName = 'app';
    angular.module(moduleName).controller('AppCtrl', [
        '$scope',
        '$rootScope',
        '$state',
        '$window',
        ctrlFn
    ]);
    function ctrlFn($scope, $rootScope, $state, $window) {
        console.log('appCtrl');
        var vm = this;
        vm.name = 'John Smith';
        vm.footerTemplate = 'app/common/template/footer.html';
        vm.goBack = _goBack;
        vm.isStateActive = _isStateActive;
        vm.loadState = _loadState;
        vm.confirmBeforeRoute = _confirmBeforeRoute;

        _init();
        function _init() {
            $rootScope.loggedInUserInfo = {
                name: 'Amitesh Kumar',
                isAdmin: false
            }
        }

        function _isStateActive(stateName){
            return $state.current.name === stateName;//u can use $state.includes(stateName) as well which is more robust approach for parent/child kind of state
        }

        function _loadState(stateName) {
            if ($state.current.name === stateName) {
                alert('State `' + stateName + '` already loaded in view. ui-router doesn\'t load the same sate again unless untill you force it to do so.');
                return;
            }
            $state.go(stateName);
        }
        function _confirmBeforeRoute(stateName, $event) {
            var confirm = window.confirm('Do you really want to load this view?')
            if (confirm) {
                $state.go(stateName);
            } else {
                $event.preventDefault();
            }
        };

        function _goBack() {
            $window.history.back();
        }

        //$rootScope.$on('notify-service-error', function(param){
        $scope.$on('notify-service-error', function (param, data) {
            vm.errorMessage = 'Some error occurred  while processing your request.';
            console.log(param);
        });
    }
}());