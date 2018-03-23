(function () {
    'use strict';
    /**
     * Module: app.user
     * Configuration and Routing related stuff
     * Note: #### Tweak the route config as per your state and folder structure  ####
     */
 
    var moduleName = 'app.user';

    angular.module(moduleName).config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider.state('user', {
            url: '/user',
            data: {pageTitle: 'user details'},
            // views: {
            //     'menuContent': {
                    templateUrl: 'app/main/user/user.html',
                    controller: 'UserCtrl as vm'
            //    }
           // }
        }).state('user-details', {
            url: '/user-details/{id:int}/:id2?id3&id4',
            params: {
                data: null
            },
            data: {pageTitle: 'user details', restrictTo: 'admin'},
            resolve: {
                countryList: function($q){
                    var deferred = $q.defer();
                    deferred.resolve(1);
                   return deferred.promise;
                }
            },
            templateUrl: 'app/main/user/user-details.html',
            controller: 'UserDetailsCtrl as vm'
        })/* .state('user-details.view1', {
            template: 'I am view 1',
        }).state('user-details.view2', {
            url: '/view2',
            template: 'I am view 2',
        }) */.state('user-details.view1', {
            //template: 'I am view 1',
            views: {
                'view1': {
                    template: 'I am view 1'
                }
            }
        }).state('user-details.view2', {
            views: {
                'view2': {
                    url: '/view2',
                    template: 'I am view 2'
                }
            }
        });
    }
})();
