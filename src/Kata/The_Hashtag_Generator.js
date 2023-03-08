import React from "react";
function generateHashtag(string) {
    if (string.trim() === '') return false;

    const stringWithCamelCase = string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

    const stringWithHashtag = `#${stringWithCamelCase.trim()}`;

    return stringWithHashtag.length > 140 ? false : console.log(stringWithHashtag);
}

generateHashtag ("#Do We Have A Hashtag");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"