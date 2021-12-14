const express = require('express')
const app = express()

console.log("URL: http://127.0.0.1/?rps=rock")

var rps = ""

// User input
app.get('/', (req, res) => {
    if (req.query.rps == "rock" || req.query.rps == "r") {
        rps = "rock"
    }
    else if (req.query.rps == "paper" || req.query.rps == "p") {
        rps = "paper"
    }
    else if (req.query.rps == "scissors" || req.query.rps == "s") {
        rps = "scissors"
    }
    // Create bot
    function Random(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    var BotOptions = ["rock", "paper", "scissors"]
    var Bot = BotOptions[Random(0, 3)]

    // Draw
    if (Bot == "rock" && rps == "rock") {
        res.write("Draw!")
    }
    else if (Bot == "paper" && rps == "paper") {
        res.write("Draw!")
    }
    else if (Bot == "scissors" && rps == "scissors") {
        res.write("Draw!")
    }

    // Win
    else if (Bot == "rock" && rps == "paper") {
        res.write("Win!")
    }
    else if (Bot == "paper" && rps == "scissors") {
        res.write("Win!")
    }
    else if (Bot == "scissors" && rps == "rock") {
        res.write("Win!")
    }

    // Lose
    else if (Bot == "rock" && rps == "scissors") {
        res.write("Lose!")
    }
    else if (Bot == "paper" && rps == "rock") {
        res.write("Lose!")
    }
    else if (Bot == "scissors" && rps == "paper") {
        res.write("Lose!")
    }
    res.end()
    
});app.listen(80)