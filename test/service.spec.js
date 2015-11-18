describe("Contacts Service " , function() {

    beforeEach(function() {
        angular.module('app')
    }) ;

    it('should check if service exists' , inject(function(ContactsService){
        expect(ContactsService).not.to.equal(null);
    }));

    it('should check the first contact name to be Terrence' ,inject(function(ContactsService){
        expect(ContactsService.contacts[0].name).toEqual('Terrence S. Hatfield');
    }));
});