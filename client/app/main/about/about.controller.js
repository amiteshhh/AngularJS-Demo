(function () {
    'use strict';
    /**
     * @ngdoc controller
     * @module app.about
     * @name AboutCtrl
     * @description
     * Controller to manage about
     */

    var moduleName = 'app.about';

    angular.module(moduleName)
        .controller('AboutCtrl', Ctrl);

    function Ctrl() {
        var vm = this;

        init();

        function init() {
        }
    }
})();

