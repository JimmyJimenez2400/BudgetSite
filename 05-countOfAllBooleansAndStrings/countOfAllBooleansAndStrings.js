function countOfAllBooleansAndStrings(arr) {
  // Dan wrote this;
  var boolCount = 0;

for (var i = 0; i < arr.length; i++)
{
    if (arr[i] === true || arr[i] === false || typeof arr[i] === 'string')
    {
        boolCount = boolCount + 1;
    }
}
 document.write(boolCount);
}
countOfAllBooleansAndStrings([true, "true", false, "false", 9]);
// -----> 4;
document.write("<br />");

countOfAllBooleansAndStrings(["hey", "there", "hello", "there", "world", false]);
// -----> 6;
document.write("<br />");
// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
