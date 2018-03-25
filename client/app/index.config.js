(function () {
    var moduleName = 'app';
    angular.module(moduleName).config([
        '$urlRouterProvider',
        '$stateProvider',
        configFn
    ]);
    function configFn($urlRouterProvider, $stateProvider) {
        // if the path doesn't match any of the urls you configured
        // otherwise will take care of routing the user to the specified url
        $urlRouterProvider.otherwise('/home');//its not a name of state
        $stateProvider.state('403', {
            template: '<h2 class="view-container" style="color:red">Looks like you are not authorized to access this page.\
                           <br> If you are admin, check the checkbox at top right corner and try again</h2>'
        });
        $stateProvider.state('admin', {
            url: '/settings',
            templateUrl: 'admin-ng-template',//you can append html also in name
            data: { role: 'isAdmin', pageTitle: 'Admin' }
        });
    }
}());