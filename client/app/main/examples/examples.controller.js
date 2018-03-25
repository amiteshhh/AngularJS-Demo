(function () {
    'use strict';
    /**
     * @ngdoc controller
     * @module app.examples
     * @name ExamplesCtrl
     * @description
     * Controller to manage examples
     * @requires #/api/app.examples/service/ExamplesSvc ExamplesSvc
     */

    var moduleName = 'app.examples';

    angular.module(moduleName)
        .controller('ExamplesCtrl', Ctrl);

    Ctrl.$inject = ['$injector', '$rootScope'];
    function Ctrl($injector, $rootScope) {
        var vm = this;
        var ExamplesSvc = $injector.get('ExamplesSvc');
        vm.bindValueUsingJS = _bindValueUsingJS;

        init();

        function init() {
            //_sampleOperation();
        }

        function _sampleOperation() {
            ExamplesSvc.sampleOperation().then(function (data) {

            }).catch(handleServiceError)
                .finally(function () {
                    //console.log('Finally hide the loader etc when error or success');
                });
        }

        function _bindValueUsingJS() {
            var container = document.getElementById('bindContainer') || document;

            var data = {
                name: 'Amitesh',
                age: 12
            }
            bindValue(container, data);

            function bindValue(container, data) {
                var attr = 'bind-value';
                var selector = '[' + attr + ']';
                var elements = container.querySelectorAll(selector);
                //elements.forEach doesnt work on IE as elements is not an array rather it is DOM collection
                angular.forEach(elements, function (element) {
                    var prop = element.getAttribute(attr);
                    element.innerText = data[prop] || 'data not available!';
                });
            }
        }

        function handleServiceError(err) {
            console.log('Error occurred with service', err);
            $rootScope.$broadcast('notify-service-error', err);
        }
    }
})();

