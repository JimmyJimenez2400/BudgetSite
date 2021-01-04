function sumOfNumsWithinARange(nums, start, end) {
  // Dan wrote this;
  var rangeCount = 0;

  for(var i = 0; i < nums.length; i++)
  {
    if(nums[i] >= start && nums[i] <= end)
    {
      rangeCount += 1;
    }

  }
  document.write(rangeCount);
}
sumOfNumsWithinARange([2,4,5,6,23], 4, 6);
document.write("<br />");
sumOfNumsWithinARange([2,4,5,6,23], 2, 23);
// Do not edit this line;
module.exports = sumOfNumsWithinARange;
