(function(angular) {
    angular.module('app')
        .controller('ContactsController' , ContactsController) ;

    ContactsController.$inject = ['$scope','ContactsService'] ;
    function ContactsController(scope,ContactsService) {

        this.contacts = ContactsService.contacts ;

        scope.addContact = function() {

        };

        scope.editContact = function(id) {

        };

    }

})(this.angular);