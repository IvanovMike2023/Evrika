
function decipherThis(str) {
return  str.split(' ')
    .map(a=>
   a.replace(/\d+/g,c => String.fromCharCode(c))
      .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
         //console.log(g)

 ).join()

};
let p =0
let users = ['dimych', 'valera', 'artem', 'katya']
yo();
if (users.length > 4) {
 yo();
} else {
}
if (users.length < 2 || window !== null) {
 yo()
}

for (let i=0;i<1;i++) {
 yo()
}


function yo(){

 p++
 console.log(p)
}


decipherThis('72ol8e 103doo 100ya'); // 'Hello good day'

/*function decipherThis(str) {
   return str.split(" ")
     .map(w =>
       w.replace(/^\d+/, c => String.fromCharCode(c))
        .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
     )
     .join(" ")
 }
*/