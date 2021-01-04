function setUnionOfAnyAmountOfSets(...args) {
  // Dan wrote this;
  var result = [];

  for (var i = 0; i < arguments.length; i++) {
    //document.write( arguments.length)
    if( arguments[i] != arguments[i+1] )
    {
      document.write(arguments[i]);
      result = result.concat(arguments[i]);
    }
  }
  //document.write(result);
  //return result;
}
setUnionOfAnyAmountOfSets(1, 2, 4, 4 , 5, 6, 6, 8);
// -----> { 1, 2, 4, 5, 6, 7, 8 };
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
