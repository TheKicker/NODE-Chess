const jsChessEngine = require('js-chess-engine');
const readline = require('readline');

const game = new jsChessEngine.Game()

play()

function play () {
    // Print the game to console
    game.printToConsole()

    // Ask the user which piece to move (location)
    let rl = getInput()
    rl.question('From? ', from => {
        rl.close()
        // calculate potential moves for that piece
        const moves = game.moves(from)
        console.log('Your options: ', moves)
        rl = getInput()
        rl.question('To? ', to => {
            rl.close()
            // Try the move or putput the error
            try {
                game.move(from, to)
            } catch (error) {
                console.log(`Skipping: ${error}`)
            }
            // check the status of the game
            if (game.exportJson().isFinished) {
                console.log('Game over')
            } else {
                play()
            }
        })
    })
}

function getInput () {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
}