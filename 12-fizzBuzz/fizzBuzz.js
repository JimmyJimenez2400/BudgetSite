function fizzBuzz(start, end) {
  // Dan wrote this;
  for(var i = start; i <= end; i++){

    if (i % 3 == 0 && i % 5 == 0)
    {
      document.write("FizzBuzz");
    }

    else if (i % 3 == 0)
    {
      document.write("Fizz");
    }

    else if (i % 5 == 0)
    {
            document.write("Buzz");
    }

    else
       // output.push(i);
       document.write(i);
  }
  document.write("<br />");
}
fizzBuzz(1, 15);
//-----> [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];

fizzBuzz(1, 20);
//-----> [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"];
// Do not edit this line;
module.exports = fizzBuzz;
