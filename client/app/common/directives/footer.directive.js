(function () {
    var moduleName = 'app.common';
    angular.module(moduleName).directive('appFooter', [directiveFn]);
    function directiveFn() {
        return {
            //restrict: 'A',
            templateUrl: 'app/common/template/footer.html'
        };
    }
}());