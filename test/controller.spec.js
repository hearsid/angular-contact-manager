/**
 * Created by sid on 18/11/15.
 */
describe('Contacts Controller ', function() {

    beforeEach(module('app'));

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
        expect(scope.greeting).toEqual("Hello world!");
    });

});
