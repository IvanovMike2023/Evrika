
function decipherThis(str) {
 let r = /\d+/g
 let mas = str.split(' ').map(function (a,b,d){
  console.log(a)
  let c=a.match(r)
     let rrr= String.fromCharCode(c)
  let n = rrr+ a.slice(c[0].length)
   let mas =n.split('')
    let last = mas.splice(1,1,mas[mas.length-1]).join()
  mas.pop()
  mas.push(last)
  return mas.join('')
 }
 )
 console.log(mas.join(' '))
};


decipherThis('72olle 103doo 100ya'); // 'Hello good day'

//function decipherThis(str) {
//   return str.split(" ")
//     .map(w =>
//       w.replace(/^\d+/, c => String.fromCharCode(c))
//        .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
//     )
//     .join(" ")
// }

//
//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]
//
//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"
