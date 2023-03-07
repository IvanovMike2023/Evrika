import React from "react";
 function highAndLow(obj) {
   let mas = obj.split(" ").map(Number)
console.log(mas)
    let max = Math.max.apply(null, mas)
     let min = Math.min.apply(null,mas)
     let res = `${max}  ${min}`
    return console.log(res)

}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"