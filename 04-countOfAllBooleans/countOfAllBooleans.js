function countOfAllBooleans(arr) {
  // Dan wrote this;
  var boolCount = 0;

for (var i = 0; i < arr.length; i++)
{
    if (arr[i] === true || arr[i] === false)
    {
        boolCount = boolCount + 1;
    }
}
 document.write(boolCount);
}
countOfAllBooleans(["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false]);
document.write("<br />");

countOfAllBooleans([true, false, true, false, true, 7]);
document.write("<br />");

countOfAllBooleans([true, false, true, false, true, 7]);
// Do not edit this line;
module.exports = countOfAllBooleans;
