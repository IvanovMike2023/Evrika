

function prefill(a, b) {
    //console.log(a.toString().split(""))
    let mas = []
    for (let i =0;i<a;i++)
    {mas.push(b)}
    console.log(mas)
    return mas

}
//prefill('63829983432984289347293874', '90938498237058927340892374089');// -> "444"
  prefill(3,prefill(2,'2d')) /// --> [1,1,1]
//
//     prefill(2,"abc") --> ['abc','abc']
//
//     prefill("1", 1) --> [1]
//
//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]
//
//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"
