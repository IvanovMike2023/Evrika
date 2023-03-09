function ho() {
   console.log(arguments[0])
   return arguments[0] ? 'Ho ' + arguments[0] : 'Ho!'
}
//ho(); // should return "Ho!"
 ho(ho()); // should return "Ho Ho!"
//ho(ho(ho())); // should return "Ho Ho Ho!

//add("123", "321"); -> "444"
//add("11", "99");   -> "110"
