(function () {
    'use strict';
    /**
     * @ngdoc service
     * @module app
     * @name APP_CONSTANT
     * @description
     * Contains application level constants
     */

    var moduleName = 'app';

    angular.module(moduleName)
        .constant('APP_CONSTANT', {
            REST_END_POINT : 'https://jsonplaceholder.typicode.com/'
        });
})();
