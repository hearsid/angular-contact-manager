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
                .state('contact.edit', {
                    url: "/edit",
                    templateUrl: "app/templates/new-contact.html"

                })
                .state('contact.add', {
                    url: "/add",
                    templateUrl: "app/templates/new-contact.html"
                })

        });




})(this.angular) ;