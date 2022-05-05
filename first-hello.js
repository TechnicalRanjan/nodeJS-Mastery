const mission  = "learn"

if(mission === 'learn'){
    console.log('Time to write some node code')
}else{
    console.log(`Is ${mission} really more fun?`)
}


console.log("process.argv[0]: ",process.argv[0])
console.log("process.argv[1]: ",process.argv[1])
console.log("process.argv[2]: ",process.argv[2])

//when we type in CMD 
//node first-hello.js explore

// #OUTPUT

// #process.argv[0]:  C:\Program Files\nodejs\node.exe
// #process.argv[1]:  F:\Node\nodeJS-Mastery\first-hello.js
// #process.argv[2]:  explore
