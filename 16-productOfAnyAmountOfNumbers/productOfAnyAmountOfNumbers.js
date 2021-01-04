function productOfAnyAmountOfNumbers(...args) {
  // Dan wrote this;
  var product = args[0];

  for (var i = 1; i < args.length; i++){
    //document.write(args[i],"<br />");
    //document.write(product,"<br />");
    product *= args[i];
    //document.write(product,"<br />");
  }
    document.write(product,"<br />");
}
productOfAnyAmountOfNumbers(3,4,5);
// -----> 60;

productOfAnyAmountOfNumbers([2,4,6]);
// -----> 48;
// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
