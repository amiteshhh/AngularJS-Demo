(function () {
    var moduleName = 'app', requires = [
            'ngAnimate',
            'ui.bootstrap'
        ];
    angular.module(moduleName, requires);
}());
(function () {
    var moduleName = 'app';
    angular.module(moduleName).controller('Ctrl', [
        '$scope',
        '$injector',
        '$filter',
        ctrlFn
    ]);
    function ctrlFn($scope, $injector, $filter) {
        var vm = this;

        var ageFilter = $filter('age');
        var UserSvc = $injector.get('UserSvc');

        vm.name = 'John Smith';
        vm.counter = 10;
        vm.increaseBy = 1;
        vm.dateFormat = 'yyyy/mm/dd';
        vm.isUserModelInvalid = UserSvc.isUserModelInvalid;
        _init();
        function _init() {
            _getUsers();
            UserSvc.getUser({
                postId: 1
            }).then(function(data){
                vm.user = data;
            });
        }
        function _getUsers(){
            vm.loading = true;
            UserSvc.getUsers().then(function(response){
                vm.users = response;
            }).catch(function(err){
                vm.err = err;
            }).finally(function(){
                vm.loading = false;
            });
        }
    }
}());
(function () {
    var moduleName = 'app';
    angular.module(moduleName).service('UserSvc', ['$http', '$q', '$timeout', SvcFn]);
    function SvcFn($http, $q, $timeout) {
        return {
            getUsers: _getUsers,
            getUser: _getUser,
            getUsers2: _getUsers2,
            isUserModelInvalid: _isUserModelInvalid
        };
        function _isUserModelInvalid(user) {
            if (!user) {
                return null;
            }
            var errors = [];
            if (!user.name) {
                errors.push('User name required');
            }
            return errors;
        }

        function _getUsers() {
            var req = {
                url: 'https://jsonplaceholder.typicode.com/users',
                method: 'GET'
            };
            return $http(req).then(function(response){
                return response.data;
            }).catch(function(err){
                throw err;
            });
        }

        function _getUser(params) {
            var deferred = $q.defer();
            var req = {
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: 'POST',
                params : {id:1},
                data: {name: 'amitesh'}
            };
            $http(req).then(function(response){
                deferred.resolve(response.data);
            }).catch(function(err){
                deferred.reject(err);
            });
            return deferred.promise;
        }

        function _getUsers2() {
            var deferred = $q.defer();
            var data =  [
                {
                    id: 1,
                    name: 'John Smith',
                    company: 'cts',
                    dob: '2008-02-21T05:37:08.414Z',
                    experience: 1
                },
                {
                    id: 2,
                    name: 'John Smith',
                    company: 'cts',
                    dob: null
                }
            ];
            $timeout(function(){
                deferred.reject('Some error occurred!');
            }, 2000, true);            
            return deferred.promise;
        }
    }
}());
(function () {
    var moduleName = 'app';
    angular.module(moduleName).directive('counter', [
        '$parse',
        counterDirective
    ]);
    function counterDirective($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var getter = $parse(attrs.counterModel);
                var setter = getter.assign;
                console.log(scope.$eval(attrs.counterModel));
                element.on('click', function () {
                    var value = getter(scope);
                    setter(scope, value + Number(attrs.increaseBys));
                    scope.$apply();
                });
            }
        };
    }
}());
(function () {
    var moduleName = 'app';
    angular.module(moduleName).directive('capitalize', [directiveFn]);
    function directiveFn() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl) {
                ctrl.$parsers.push(function ($viewValue) {
                    if (!$viewValue) {
                        return $viewValue;
                    }
                    var capitalizedValue = $viewValue.toUpperCase();
                    //capitalizedValue = capitalizedValue.replace(/[0-9]/g, '');
                    if (capitalizedValue !== $viewValue) {
                        ctrl.$setViewValue(capitalizedValue);
                        ctrl.$render();
                    }
                    //ctrl.$setValidity('capitalize', false);
                    return capitalizedValue;
                });
                ctrl.$formatters.push(function ($modelValue) {
                    return $modelValue && $modelValue.toUpperCase();
                });
            }
        };
    }
}());

(function () {
    var moduleName = 'app';
    angular.module(moduleName).directive('textOnly', [directiveFn]);
    function directiveFn() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl) {
                
                ctrl.$validators.textOnly = function(modelValue, viewValue) {
                    var value = modelValue || viewValue;
                    return !/[0-9]+/.test(value);
                };
            }
        };
    }
}());
(function () {
    var moduleName = 'app';
    angular.module(moduleName).directive('restrictDigit', [directiveFn]);
    function directiveFn() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl) {
                element.on('keydown', function () {
                    var keyCode = event.which || event.keyCode;
                    if (keyCode > 47 && keyCode < 56) {
                        event.preventDefault();
                        return false;
                    }
                });
            }
        };
    }
}());
(function () {
    var moduleName = 'app';
    angular.module(moduleName).directive('convertToDate', [directiveFn]);
    function directiveFn() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl) {
                ctrl.$formatters.push(function ($modelValue) {
                    return $modelValue && new Date($modelValue);
                });
            }
        };
    }
}());
(function () {
    var moduleName = 'app';
    angular.module(moduleName).filter('age', [filterFn]);
    function filterFn() {
        var year_ms = 365 * 24 * 60 * 60 * 1000;
        var month_ms = year_ms / 12;
        return function (str, ageType) {
            if (!str) {
                return str;
            }
            var divider = ageType === 'm' ? month_ms : year_ms;
            //sample input 2008-02-21T05:37:08.414Z
            var d = new Date(str), today = new Date();
            return Math.ceil((today - d) / divider);
        };
    }
}());
(function () {
    var moduleName = 'app';
    angular.module(moduleName).filter('typeof', [filterFn]);
    function filterFn() {
        return function (param) {
            return typeof param;
        };
    }
}());