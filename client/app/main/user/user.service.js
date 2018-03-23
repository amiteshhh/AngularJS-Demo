(function () {
    'use strict';
    /**
     * @ngdoc service
     * @module app.user
     * @name UserSvc
     * @description
     * Service to manage user
     */

    var moduleName = 'app.user';

    angular.module(moduleName)
        .service('UserSvc', Svc);

    Svc.$inject = ['$http', 'APP_CONSTANT'];
    function Svc($http, APP_CONSTANT) {

        return {
            getUser: _getUser,
            getUsers: _getUsers
        };

        function _getUser(id) {
            var req = {
                url: APP_CONSTANT.REST_END_POINT + 'users/' + id,
                method: 'GET'
            };
            return $http(req).then(function (response) {
                return response.data;
            }).catch(function (err) {
                throw err;
            });
        }
        function _getUsers() {
            var req = {
                url: APP_CONSTANT.REST_END_POINT + 'users',
                method: 'GET'
            };
            return $http(req).then(function (response) {
                return response.data.slice(0,5);//first five only
            }).catch(function (err) {
                throw err;
            });
        }
    }
})();
