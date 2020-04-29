"use strict";

var numberToSkip = 27;
for (var i = 1; i <= 50; i++) {
    // console.log("Number to skip is:" + ' 27');
    if (i === numberToSkip) {
        console.log("Yikes! skipping that number:" + i);
    continue;
     }
    if (i % 2 !== 0)
        console.log("Here is an odd number:" + i);
}


