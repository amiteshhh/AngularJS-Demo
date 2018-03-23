describe("myLib", function () {
    var addOne;
    beforeEach(module('app.common'));
    beforeEach(inject(function (_addOneFilter_) {
        addOne = _addOneFilter_;
    }));
    describe("addOne", function () {

        it("should add one", function () {
            //addOne = $filter('addOne');
            expect(addOne(1)).toEqual(2);  
        });
        xit("should add one 1", function () {
            var addOne = $filter('addOne');
            expect(addOne(null)).toEqual('Hello null');  
        });
        xit("should add one 2", function () {
            var addOne = $filter('addOne');
            expect(addOne(null)).toEqual('Hello null');  
        });

    });

});
