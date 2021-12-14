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
    
res.header('Content-Type', 'text/html')
res.write("<h1> you     | vs |      ai</h1><br>")
switch (rps){
    case "scissors":
        res.write(`<html>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Pair_of_scissors_with_black_handle%2C_2015-06-07.jpg/800px-Pair_of_scissors_with_black_handle%2C_2015-06-07.jpg"style="width:130px; height: auto;" alt="scissors">
</html>`)
    break
    case "rock":
        res.write(`<html>
<img src="https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8="style="width:130px; height: auto;" alt="scissors">
</html>`)
    break
    case "paper":
        res.write(`<html>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Paper_450x450.jpg/220px-Paper_450x450.jpg"style="width:130px; height: auto;" alt="scissors">
</html>`)
    break

}
res.write("vs")
switch (Bot){
    case "scissors":
        res.write(`<html>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Pair_of_scissors_with_black_handle%2C_2015-06-07.jpg/800px-Pair_of_scissors_with_black_handle%2C_2015-06-07.jpg"style="width:130px; height: auto;" alt="scissors">
</html>`)
    break
    case "rock":
        res.write(`<html>
<img src="https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8="style="width:130px; height: auto;" alt="scissors">
</html>`)
    break
    case "paper":
        res.write(`<html>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Paper_450x450.jpg/220px-Paper_450x450.jpg"style="width:130px; height: auto;" alt="scissors">
</html>`)
    break

}
res.write("<br>")
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