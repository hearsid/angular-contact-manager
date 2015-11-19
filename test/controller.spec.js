/**
 * Created by sid on 18/11/15.
 */
describe('Contacts Controller ', function() {

    beforeEach(module('app'));

    // no need of vm since I can get the this context by ContactsController itself
    var ContactsController,
        scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ContactsController = $controller('ContactsController', {
            $scope: scope
        });
    }));

    it('should check if contacts controller exists' , function() {
        expect(ContactsController).not.toEqual(undefined) ;
    })

    it('check total contacts', function () {
        expect(scope.contacts.length).toEqual(6);
    });

    it('should check if contact is added successfully' , function() {
        scope.addContact('Tim','tim@timmy.com','34234545345');
        expect(scope.contacts.length).toEqual(7);
    }) ;

    it('should check if contact are deleted' , function() {
        scope.deleteContact(1) ;
        expect(scope.contacts.length).toEqual(5);
    }) ;

    it('should check edit contact' , function() {
        var contacts = ContactsController.contacts ;
        scope.editContact(1,'Sid');
        expect(contacts[0].name).toEqual('Sid');

    });

});
