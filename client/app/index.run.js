(function () {
    var moduleName = 'app';
    angular.module(moduleName).run([
        '$rootScope',
        '$state',
        runBlock
    ]);
    function runBlock($rootScope, $state) {
        console.log('runBlock');

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toStateParams, fromState, fromStateParams){
           
            console.log('stateChangeSuccess');
            $rootScope.pageTitle= toState.data && toState.data.pageTitle;
        });

        $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams, fromState, fromStateParams){
           
            if(toState.name==='user'){//logic for restricted access
                //$state.go('403');
                //event.preventDefault();
            }
        });
    }
}());