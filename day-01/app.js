"use strict"
import fs from "fs"

const x = "dog"
// const fs1 = require("fs")
const readData = fs.readFileSync("input.txt", "utf8")
const finalData = []
const numberList = []
// console.log(readData)

readData.split(/\n/).forEach((line) => {
    // console.log('line: ', line)
    finalData.push(line)
})

const arrayOfNums = []

for(const line of finalData){
    console.log(line)
    const regexNums = /([0-9])/gi
    const numsFound = [...line.matchAll(regexNums)]
    let num1 = numsFound[0][0]
    let num2 = numsFound[numsFound.length -1][0]
    console.log(numsFound, num1, num2)
    console.log(parseInt(num1 + num2))
    arrayOfNums.push(parseInt(num1 + num2))
}

const sum = arrayOfNums.reduce((partialSum, a) => partialSum + a, 0);
console.log(sum)

// const demoRegex = /[0-9]/gi
// const text = 'dog1cat'
// let narp = [...text.matchAll(demoRegex)]
// let narp2 = text.matchAll(demoRegex)
// console.log(narp)
// // // console.log(JSON.stringify(narp2))
// // console.log(narp2.index)
// for(let match of narp){
//     console.log(match);
// }


// // string definition
// const sentence = "JavaScript1JavaScript2";

// // a pattern having 'JavaScript' followed by a digit
// const regex = /JavaScript\d/g;

// // finding matches in the string for the given regular expression
// let results = sentence.matchAll(regex);

// // looping through the iterator
// for (let result of results) {
//   console.log(result);
// }

// // Output:
// // ["JavaScript1", index: 0, input: "JavaScript1JavaScript2", groups: undefined]
// // ["JavaScript2", index: 11, input: "JavaScript1JavaScript2", groups: undefined]