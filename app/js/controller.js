(function(angular) {
    angular.module('app')
        .controller('ContactsController' , ContactsController) ;

    ContactsController.$inject = ['$scope','ContactsService'] ;
    function ContactsController(scope,ContactsService) {

        scope.contacts = ContactsService.contacts ;

        scope.addContact = function() {

        }

    }

})(this.angular);