function Adam(obj) {
    const countItems = {};
    const countItems2 = [];
    for (const item of obj) {
        countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
    }
    let res = Object.values(countItems)
    function getMaxOfArray(r) {
        return Math.max.apply(null, r);
    }
    let res2 = Object.keys(countItems)
    function getMaxOfArray2(r2) {
        return Math.max.apply(null, r2);
    }
//console.log(getMaxOfArray2(res2))
//console.log(getMaxOfArray(res))
 //console.log(Object.keys(countItems))
    const result = Object.keys(countItems).filter((item) =>  countItems[item]>=getMaxOfArray(res))// ? countItems2.push(countItems[item]):console.log('cascsac'))
//console.log(getMaxOfArray2(result))
console.log(result.length)


}
Adam([12,10,8,12,7,6,4,10,12,10])

/*[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
    [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
    [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

 */