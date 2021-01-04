function countOfAllIndexMatchingNumbers(nums) {
  // Dan wrote this;
  var dupResult = 1;
  var noDup = 0;
  for(var i = 0; i < nums.length; i++)
  {
      //document.write(nums[i], "<br />");
    for( var j = i + 1; j < nums.length; j++)
    {
      //document.write(nums[j], "<br />");
      if(nums[i] === nums[j])
      {
      //document.write(nums[i], "E<br />");
      //document.write(nums[j], "En<br />");
      dupResult += dupResult;
      //document.write(dupResult, "Dup<br />");
      }
      else if (nums[i] != nums[j])
      {
      //document.write(nums[i], "N<br />");
      //document.write(nums[j], "Ne<br />");
      noDup = nums.length;
      //document.write(noDup, "NOT<br />");
      }
    }
  }
    if (dupResult >=2)
    {
      document.write(dupResult, " - Match<br />");
    }
    else if (dupResult >=1)
    {
      document.write(noDup, " - No Match<br />");
    }
}
countOfAllIndexMatchingNumbers([0,1,2,3,4]);
 //-----> 5;
countOfAllIndexMatchingNumbers([0,2,3,4,4,5,77]);
// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
