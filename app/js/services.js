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
