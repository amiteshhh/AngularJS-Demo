(function () {
    'use strict';
    /**
     * Module: app.home
     * Configuration and Routing related stuff
     * Note: #### Tweak the route config as per your state and folder structure  ####
     */

    var moduleName = 'app.home';

    angular.module(moduleName).config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'app/main/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
        });
    }
})();
