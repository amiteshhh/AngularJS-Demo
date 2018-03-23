(function () {
    var moduleName = 'app', requires = [
            'ngAnimate',
            'ui.bootstrap',
            'ui.router',
            'app.common',
            // home module
            'app.home',
            // user module
            'app.user'
        ];
    angular.module(moduleName, requires);
}());