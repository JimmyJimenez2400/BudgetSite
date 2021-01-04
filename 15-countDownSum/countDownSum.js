class MySolution {
  countDownSum(num) {
    // Dan wrote this;
    var sum = 0;
    for( var i = num ; i >= 0 ; i-- )
    {
      //document.write(i);
      sum += i;
      //document.write(sum);
    }
    document.write(sum, "<br />");
  }
}
let studentSolution = new MySolution();
studentSolution.countDownSum(5);
// -----> 15;
studentSolution.countDownSum(10);
// -----> 55;
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
