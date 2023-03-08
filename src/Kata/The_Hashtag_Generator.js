import React from "react";
function generateHashtag (str) {
    if(!str || str.length > 10) return false
    let words2 = str
        .split(" ")
         .map(word =>word.charAt(0).toUpperCase()+word.slice(1)
).join('')

    return console.log(words2)
}

generateHashtag ("#Crs");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"