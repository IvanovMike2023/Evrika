import React from "react";
 function Adam(obj) {
    let mas = Object.keys(obj)
    let mas2 = Object.values(obj)
    mas.push(mas2)
    return console.log(mas)

}
Adam({a: 1, b: 2, c: 3})
//keysAndValues({a: 1, b: 2, c: 3}) should return [['a', 'b', 'c'], [1, 2, 3]]