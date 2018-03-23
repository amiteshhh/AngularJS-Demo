(function () {
    'use strict';
    /**
     * @ngdoc service
     * @module app.user
     * @name UserSvc
     * @description
     * Service to manage user
     */

    var moduleName = 'app';

    angular.module(moduleName)
        .constant('APP_CONSTANT', {
            REST_END_POINT : 'https://jsonplaceholder.typicode.com/'
        });
})();
