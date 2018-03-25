(function () {
    'use strict';
    /**
     * Module: app.examples
     * Configuration and Routing related stuff
     * Note: #### Tweak the route config as per your state and folder structure  ####
     */

    var moduleName = 'app.examples';

    angular.module(moduleName).config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider.state('examples', {
            url: '/examples',
            templateUrl: 'app/main/examples/examples.html',
            controller: 'ExamplesCtrl as vm'
        });
    }
})();
