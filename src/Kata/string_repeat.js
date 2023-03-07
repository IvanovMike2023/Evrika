import React from "react";

function keepOrder(arr, val) {
    for (let i = 0; i < arr.length; i++){
        if ( val <= arr[i] ) {
            return console.log(i);
        }
    }
    return arr.length;
};

keepOrder([-4, 0, 2, 2, 5], -4 );  // return "5 1"
//
//  Test.assertSimilar(keepOrder([1, 2, 3, 4, 7], 5), 4);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4, 7], 0), 0);
//     Test.assertSimilar(keepOrder([1, 1, 2, 2, 2], 2), 2);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4], 5), 4);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4], -1), 0);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4], 2), 1);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4], 0), 0);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4], 1), 0);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4], 2), 1);
//     Test.assertSimilar(keepOrder([1, 2, 3, 4], 3), 2);