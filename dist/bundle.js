(function(angular) {
    'use strict';

    angular.module('app' ,
        ['ui.router' ,
        'ngAnimate']);

})(this.angular);
(function (angular) {
    'use strict';
    angular.module('app')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = ['$scope', 'ContactsService', '$state', '$rootScope'];
    function ContactsController(scope, ContactsService, $state, $rootScope) {

        var vm = this;
        // scope.contacts = vm.contacts = ContactsService.contacts;

        ContactsService.getContacts()
            .then(function(response) {
              vm.contacts = response.data ;    
            }, function(error) {

            });

        /*    scope.submit = function(title , id) {
         if(title == 'Add') {
         scope.addContact() ;
         }
         else {
         scope.editContact(id);
         }
         };*/
        scope.addContact = function (name, email, tel) {

            var name = name;
            var email = email;
            var tel = tel;
            vm.contacts.push({id: (vm.contacts.length + 1), name: name, email: email, tel: tel});
            $state.go('home');
        };

        scope.editContact = function (id, name, email, tel) {

            for (var i in vm.contacts) {
                var contact = vm.contacts[i];
                var userId = contact.id;

                if (userId == id) {

                    contact.name = name;
                    contact.email = email;
                    contact.tel = tel;
                }
            }

            $state.go('home');
        };

        scope.deleteContact = function (index) {
            vm.contacts.splice(index, 1);
        };


        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                // transitionTo() promise will be rejected with
                // a 'transition prevented' error


                if (toState.name !== 'edit')
                    return;

                var id = toParams.id;


                for (var i in vm.contacts) {
                    var userId = vm.contacts[i].id ;

                    if(id == userId) {

                        var contact = vm.contacts[i];
                        scope.name = contact.name;
                        scope.email = contact.email;
                        scope.tel = contact.tel;
                        scope.id = contact.id;

                    }
                }
            });

    }

})(this.angular);

/*(function(angular) {
    angular.module('app')
        .directive('contactsDirective' , ContactsDirective) ;


    ContactsDirective.$inject = [] ;
    function ContactsDirective() {

    }

})(this.angular);*/

/**
 * Created by sid on 17/11/15.
 */

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
                        $scope.name = "";
                        $scope.email = "";
                        $scope.tel = "";
                    }
                })

        });




})(this.angular) ;
(function(angular) {
    'use strict';

    angular.module('app')
        .factory('ContactsService' , ContactsService) ;

    ContactsService.$inject = ['$http', '$location'];
    function ContactsService($http, $location) {

        var theObject = {


            // store some predefined contacts for now
            contacts: [
                {
                    id: 1,
                    name : 'Terrence S. Hatfield',
                    tel: '651-603-1723',
                    email: 'TerrenceSHatfield@rhyta.com'
                },
                {
                    id: 2,
                    name : 'Chris M. Manning',
                    tel: '513-307-5859',
                    email: 'ChrisMManning@dayrep.com'
                },
                {
                    id: 3,
                    name : 'Ricky M. Digiacomo',
                    tel: '918-774-0199',
                    email: 'RickyMDigiacomo@teleworm.us'
                },
                {
                    id: 4,
                    name : 'Michael K. Bayne',
                    tel: '702-989-5145',
                    email: 'MichaelKBayne@rhyta.com'
                },
                {
                    id: 5,
                    name : 'John I. Wilson',
                    tel: '318-292-6700',
                    email: 'JohnIWilson@dayrep.com'
                },
                {
                    id: 6,
                    name : 'Rodolfo P. Robinett',
                    tel: '803-557-9815',
                    email: 'RodolfoPRobinett@jourrapide.com'
                }
            ] ,

            // make a get call here to get the contacts
            getContacts : function() {
              var no_of_contacts = $location.search().no_of_contacts;
              var url = 'http://localhost:3000/getContacts?no_of_contacts='+no_of_contacts;
              var contactsPromise = $http.get(url);
              return contactsPromise;
            }
        };

        return theObject ;
    }

})(this.angular);
