function sumOfAllEvenNumbers(nums) {
  // Dan wrote this;
  var evenCount= 0;

  for( var i =0; i < nums.length; i++)
  {
    if(nums[i] % 2 == 0)
    {
      evenCount += 1;
    }
  }
  document.write(evenCount);
}
sumOfAllEvenNumbers([0,1,2,3,4,5]);
document.write("<br />")
sumOfAllEvenNumbers([2,4,6,7,8,9,10]);
// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
