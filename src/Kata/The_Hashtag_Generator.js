import React from "react";
function generateHashtag (str) {
    if(!str || str.length > 10) return false
  //  if(str[0]==='#') return false
    let words = str.split(" ")
for (let i =0;i<words.length;i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1)
}

    let newstr = str[0] + str.slice(1)
    let mas = newstr.split('')
    mas.unshift('#')
    let res = mas.join('')
    let res2 = res.replace(/ /g,'')


    words.unshift('#')
    return console.log(words.join('').replace(/ /g,''))
}

generateHashtag ("#Crs");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"