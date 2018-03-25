(function () {
    var moduleName = 'app', requires = [
            'ngAnimate',
            'ui.bootstrap',
            'ui.router',
            'app.common',
            // home module
            'app.home',
            // user module
            'app.user',
            // examples module
            'app.examples',
            // about module
            'app.about'
        ];
    angular.module(moduleName, requires);
}());