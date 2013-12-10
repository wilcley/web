define(["crypt/rsa/base64"],function(userFS){
  describe("Test the Base64 conversion functions:", function(){
    
    it("Converts from Hex to Base64", function() {
        //test a short message
        expect(hex2b64("deadbeef")).toEqual("3q2+7w==");
      });
    
    it("Converts a long random message back and forth", function() {
      var len=4194304, b64="", randIndex, i;
      for (i=0; i<len; i++) {
        randIndex = Math.floor(Math.random()*b64map.length);
        b64 += b64map[randIndex];
      }
      expect(hex2b64(b64tohex(b64))).toEqual(b64);
      });
    
    it("Converts Base64 to Byte arrays", function () {
      expect(b64toBA("3q2+7w==")).toEqual([222, 173, 190, 239]);
      });
  });
  });
