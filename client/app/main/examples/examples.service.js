(function () {
    'use strict';
    /**
     * @ngdoc service
     * @module app.examples
     * @name ExamplesSvc
     * @description
     * Service to manage examples
     */

    var moduleName = 'app.examples';

    angular.module(moduleName)
        .service('ExamplesSvc', Svc);

    Svc.$inject = ['$http', '$q', 'APP_CONSTANT'];
    function Svc($http, $q, APP_CONSTANT) {

        return {
            sampleOperation: _sampleOperation
        };

        function _sampleOperation() {
            var deferred = $q.defer();
            var url = APP_CONSTANT.SERVER_URL + APP_CONSTANT.REST_ENDPOINT + '/examples/';
            $http.get(url).then(function (response) {
                deferred.resolve(response.data);
            }, function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }
    }
})();
