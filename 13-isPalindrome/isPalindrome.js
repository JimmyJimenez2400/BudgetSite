function isPalindrome(word) {
  // Dan wrote this;
}
var Reverse_Word = '';

  for( var i = word.length - 1 ; i >= 0 ; i-- )
  {
    Reverse_Word += word.charAt(i);
    //document.write(Reverse_Word);
  }

  //document.write(Reverse_Word);

  if ( word === Reverse_Word)
  document.write(true,"<br />");

  else {
  document.write(false, "<br />");
  }
// Do not edit this line;
module.exports = isPalindrome;
