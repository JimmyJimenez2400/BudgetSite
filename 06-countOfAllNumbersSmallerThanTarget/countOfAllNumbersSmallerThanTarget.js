function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Dan wrote this;
  var numCount = 0;

      for(var i = 0; i < nums.length; i++)
      {
        if( nums[i] < target)
        {
          numCount += 1;
        }

      }
      document.write(numCount);
}
countOfAllNumbersSmallerThanTarget([1,2,3,4,5], 9);

document.write("<br />");

countOfAllNumbersSmallerThanTarget([1,5,3,2,20,18], 18);
// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
