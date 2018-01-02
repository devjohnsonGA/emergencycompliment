const express = require('express')
const app = express()
console.log('testing')
var shuffle = require('shuffle-array'),
compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]
  colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
  
 var randomCompliments = shuffle.pick(compliments);
 var randomColor = shuffle.pick(colors)
  
 
// console.log(randomCompliments);
// console.log(randomColor);
app.get('/', (req, res) =>{
    res.send(randomCompliments)
})
app.listen(4000, () =>{
    console.log("Port 4000 ACTIVATED")
})
//npm shuffle array package I used https://www.npmjs.com/package/shuffle-array
