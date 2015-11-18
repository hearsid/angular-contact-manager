(function (angular) {
    angular.module('app')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = ['$scope', 'ContactsService', '$state', '$rootScope'];
    function ContactsController(scope, ContactsService, $state, $rootScope) {

        var vm = this;
        vm.contacts = ContactsService.contacts;

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
        }


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