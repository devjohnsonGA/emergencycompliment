compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


$(document).ready(function(){
    var randomCompliments = compliments[Math.floor(Math.random() * compliments.length)]
    $('.compliments').text(randomCompliments)
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    $('.bod').css('background-color', randomColor)
    $('button').click(function(){
        console.log('clicked')
        location.reload()
    })
})

