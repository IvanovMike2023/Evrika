
function decipherThis(str) {
return  str.split(' ')
    .map(a=>
   a.replace(/\d+/g,c => String.fromCharCode(c))
      .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
         //console.log(g)

 ).join()

};


console.log(decipherThis('72ol8e 103doo 100ya')); // 'Hello good day'

/*function decipherThis(str) {
   return str.split(" ")
     .map(w =>
       w.replace(/^\d+/, c => String.fromCharCode(c))
        .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
     )
     .join(" ")
 }
*/