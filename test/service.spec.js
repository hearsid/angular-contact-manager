describe("Contacts Service " , function() {

    var ContactsService ;

    beforeEach(module('app'));

    beforeEach(inject(function(ContactsService) {
         ContactsService = ContactsService ;
    }));

    it('should check if service exists' , function() {
        expect(ContactsService).not.toBe(null)
    });

    it('should check the first contact name to be Terrence' ,inject(function(ContactsService){
        expect(ContactsService.contacts[0].name).toEqual('Terrence S. Hatfield');
    }));
});