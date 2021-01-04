function frequencyCounter(word) {
  // Dan wrote this;
  var letter_Count1 = 1;
 var letter_Count = 1;
 for (var position = 0; position < word.length; position++)
 {
    if (word.charAt(position) == word.charAt(position+1))
      {
      //test0 =  word.charAt(position);
      //test1 =  word.charAt(position+1);
      //document.write(test0, " TEST0 <br >");
      //document.write(test1, " TEST1 <br >");
      //document.write(" ", word.charAt(position), " : ", letter_Count, " ");
      letter_Count1 += 1;
      document.write(" ", word.charAt(position), " : ", letter_Count1, " ");
      }
      else if(word.charAt(position) != word.charAt(position+1)){
      //test2 =  word.charAt(position);
      //test3 =  word.charAt(position+1);
      //document.write(test2, " TEST2 <br >");
      //document.write(test3, " TEST3 <br >");
      //document.write(" ", word.charAt(position), " : ", letter_Count, " ");
      letter_Count == 1;
      document.write(" ", word.charAt(position), " : ", letter_Count, " ");
      }
  }
  document.write("<br />");
}
frequencyCounter("doughnut");
// -----> { "d": 1, "o": 1, "u": 2, "g": 1, "h": 1, "n": 1, "t": 1, };

frequencyCounter("computer");
// -----> { "c": 1, "o": 1, "m": 1, "p": 1, "u": 1, "t": 1, "e": 1, "r": 1 };
// Do not edit this line;
module.exports = frequencyCounter;
