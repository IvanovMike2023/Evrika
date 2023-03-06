//"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
//""  -->  ""
function order(words){
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
        console.log(a.match(/\d/))
        console.log('a.match(/\d/)')
    }).join(' ');
}
order('is2 Thi1s T4est 3a')

