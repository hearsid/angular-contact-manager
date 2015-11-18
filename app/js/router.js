(function(angular) {

    angular.module('app')
        .config(function($stateProvider, $urlRouterProvider) {
            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/");
            //
            // Now set up the states
            $stateProvider
                .state('home', {
                    url: "/",
                    templateUrl: "app/templates/contacts.tpl.html"
                })
                .state('edit', {
                    url: "/edit/:id",
                    templateUrl: "app/templates/new-contact.tpl.html" ,
                    controller : function ($scope ) {
                        $scope.title = "Edit";


                    }

                })
                .state('add', {
                    url: "/add",
                    templateUrl: "app/templates/new-contact.tpl.html" ,
                    controller : function ($scope) {
                        $scope.title = "Add";
                    }
                })

        });




})(this.angular) ;