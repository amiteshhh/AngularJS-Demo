(function () {
    'use strict';
    /**
     * @ngdoc service
     * @module app.home
     * @name HomeSvc
     * @description
     * Service to manage home
     */

    var moduleName = 'app.home';

    angular.module(moduleName)
        .service('HomeSvc', Svc);

    Svc.$inject = ['$http', '$q', 'APP_CONFIG'];
    function Svc($http, $q, APP_CONFIG) {

        return {
            sampleOperation: _sampleOperation
        };

        function _sampleOperation() {
            var deferred = $q.defer();
            var url = APP_CONFIG.SERVER_URL + APP_CONFIG.REST_ENDPOINT + '/home/';
            $http.get(url).then(function (response) {
                deferred.resolve(response.data);
            }, function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }
    }
})();
