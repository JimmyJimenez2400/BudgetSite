function sumOfMinimumAndMaximum(nums) {
  // Dan wrote this;
  var minElmnt = 0;
  var maxElmnt = 0;
  var min_maxSum = 0;

  minElmnt = nums[0];

   for(var i = 1; i  < nums.length ; i++)
   {
     //min_maxSum = min_maxSum + nums[i];

     if( nums[i] < minElmnt)
     {
       minElmnt = nums[i];
       //return min;
     }

     else if ( nums[i] > maxElmnt)
     {
       maxElmnt = nums[i];
       //return max;
     }

    min_maxSum = minElmnt + maxElmnt;
   }

  /*document.write(minElmnt);
  document.write("<br />");
  document.write(maxElmnt);
  document.write("<br />");*/
  document.write(min_maxSum);
  document.write("<br />");
  document.write("<br />");
}
sumOfMinimumAndMaximum([2,2]);

sumOfMinimumAndMaximum([2,4,5,6,23]);

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
