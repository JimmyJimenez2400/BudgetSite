function sumOfAllOddNumbers(nums) {
  // Dan wrote this;
  var oddCount= 0;

  for( var i =0; i < nums.length; i++)
  {
    if(nums[i] % 2 != 0)
    {
      oddCount += 1;
    }
  }
  document.write(oddCount);
}
sumOfAllOddNumbers([0,1,2,3,4,5,6,7]);
document.write("<br />");
sumOfAllOddNumbers([2,4,6,7,8,9,10]);
// Do not edit this line;
module.exports = sumOfAllOddNumbers;
