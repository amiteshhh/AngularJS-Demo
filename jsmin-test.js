describe("myLib", function () {
  var x ;
  beforeEach(function(){
    x = 12;
  });
  describe("addOne", function () {

    it("should add one", function () {
      x++;
      expect(addOne(x)).toBe(14);
    });

    it("should add one", function () {
      x++;
      expect(addOne(x)).toBe(14);
    });

  });

});
