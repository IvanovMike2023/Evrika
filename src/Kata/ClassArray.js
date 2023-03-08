import React from "react";





Array.prototype.square = function () {
    return this.toString().replace(/[\s.,%]/g, '').split('').map(elem => elem * elem)// this.map(Math.sqrt);
}
Array.prototype.cube = function () {
        return this.toString().replace(/[\s.,%]/g, '').split('').map(elem=>elem*elem*elem)// this.map(Math.sqrt);
    }
Array.prototype.average = function () {
        const sum = this.reduce((acc, number) => acc + number).reduce((acc, number) => acc + number);
        const length = this.toString().replace(/[\s.,%]/g, '').split('').length;
        return sum/length ;
    }
Array.prototype.sum = function () {
        const summ = this.reduce((acc, number) => acc + number).reduce((acc, number) => acc + number);
                return summ;
    }
Array.prototype.even = function () {
        const even = this.toString().replace(/[\s.,%]/g, '').split('').filter(m=>m%2===0)
                return even;
    }
Array.prototype.odd = function () {
        const even = this.toString().replace(/[\s.,%]/g, '').split('').filter(m=>m%2!=0)
                return console.log(even);
    }


const numbers = [1, 2, 3, 4, 5]
//let  numbers = new Numbers(numbers );
//numbers.square() // false
//numbers.cube()
numbers.sum()
//numbers.summ()
//numbers.average()
// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]