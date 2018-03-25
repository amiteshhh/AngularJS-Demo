(function () {
    'use strict';
    /**
     * Module: app.about
     * Configuration and Routing related stuff
     * Note: #### Tweak the route config as per your state and folder structure  ####
     */

    var moduleName = 'app.about';

    angular.module(moduleName).config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            templateUrl: 'app/main/about/about.html',
            controller: 'AboutCtrl as vm'
        });
    }
})();
