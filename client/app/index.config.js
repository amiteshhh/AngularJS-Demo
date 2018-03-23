(function () {
    var moduleName = 'app';
    angular.module(moduleName).config([
        '$urlRouterProvider',
        '$stateProvider',
        configFn
    ]);
    function configFn($urlRouterProvider, $stateProvider, HomeSvcProvider) {
        //alert(typeof HomeSvcProvider)
         // if the path doesn't match any of the urls you configured
    // otherwise will take care of routing the user to the specified url
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('403', {
            template: '<h2>You are not allowed to view it.</h2>'
        });
    }
}());