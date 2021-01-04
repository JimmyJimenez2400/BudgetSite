class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }
  binarySearch(nums, target) {
  // Dan wrote this;
   let start=0, end=nums.length-1;

    // Iterate while start not meets end
    while (start<=end){

        // Find the mid index
        let mid=Math.floor((start + end)/2);

        // If element is present at mid, return True
        if (nums[mid]===target)
        {
        document.write("true <br>");
        return true;
        }

        // Else look in left or right half accordingly
        else if (nums[mid] < target)
        {
          start = mid + 1;
        }
        else
             end = mid - 1;
    }
    document.write("false <br>");
    return false;
  }
}

let studentSolution = new MySolution();

studentSolution.binarySearch([1,2,3,4,5], 3);
// -----> true;

let studentSolution1 = new MySolution();
studentSolution1.binarySearch([1,2,3,4,5], 8);
// -----> false;
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
