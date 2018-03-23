angular.module('app.common').filter('addOne', function(){
    return function(input){
        return input && Number(input) + 1;
    };
    
});