"use strict"
import fs from "fs"

const inputText1 = fs.readFileSync("input.txt", "utf8")
const inputText1Array = []


inputText1.split(/\n/).forEach((line) => {
    // console.log('line: ', line)
    inputText1Array.push(line)
})

// console.log(inputText1Array)

const gameGroups = []
const gameSplitRegex = /Game ([\d]{1,3}): ([\d]+ [\w\W]+)/g
for(let line of inputText1Array){
    // console.log(line)
    let temp_ = [...line.matchAll(gameSplitRegex)]
    // console.log(temp_[0][2].split(';'))
    // gameGroups.push(temp_)
    const groupObj = {}
    groupObj['gameNumber'] = temp_[0][1]
    groupObj['sets'] = temp_[0][2].split(';')
    groupObj['isViableGame'] = true
    gameGroups.push(groupObj)
}

let redLimit = 12
let greenLimit = 13
let blueLimit = 14

// console.log(`narp ${gameGroups[0][`gameNumber`]} \n ${gameGroups[0][`sets`][0]}`)

// console.log(gameGroups)

for(let game of gameGroups){
    console.log
    for(let set of game['sets']){
        console.log(`${game['gameNumber']} : ${set}`)
        console.log(`set ${set}`)
        const redRegex = /([\d]{1,3}) red/g
        const blueRegex = /([\d]{1,3}) blue/g
        const greenRegex =/([\d]{1,3}) green/g
        let red = [...set.matchAll(redRegex)].length > 0 ? [...set.matchAll(redRegex)][0][1] : "0"
        let blue = [...set.matchAll(blueRegex)].length > 0 ? [...set.matchAll(blueRegex)][0][1] : "0"
        let green = [...set.matchAll(greenRegex)].length > 0 ? [...set.matchAll(greenRegex)][0][1] : "0"
        console.log(`red ${red}, blue ${blue}, green ${green}`)
        red = parseInt(red)
        blue = parseInt(blue)
        green = parseInt(green)
        if (red > redLimit || blue > blueLimit || green > greenLimit){
            game['isViableGame'] = false
            console.log('NON VIABLE')
        }
        // else{
        //     game['isViableGame'] = true
        // }
    }
}

let counter = 0

for(let eachGame of gameGroups){
    console.log(`game summary ${eachGame['gameNumber']}`)

    console.log(eachGame['isViableGame'])
    if(eachGame['isViableGame']){
        
        counter += parseInt(eachGame['gameNumber'])
    } 
        
}
console.log(`final tally: ${counter}`)