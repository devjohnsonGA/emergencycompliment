const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]
  colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
var randomColor = colors[Math.floor(Math.random() * colors.length)]
  
 
// console.log(randomCompliments);
// console.log(randomColor);
// app.get('/', (req, res) =>{
//     var randomCompliments = compliments[Math.floor(Math.random() * compliments.length)]
//     var randomColor = colors[Math.floor(Math.random() * colors.length)]
//     res.send(randomCompliments)
// })
app.listen(4000, () =>{
    console.log("Port 4000 ACTIVATED")
})

