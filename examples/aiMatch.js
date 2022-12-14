const jsChessEngine = require('js-chess-engine');

const whiteAiLevel = 2
const blackAiLevel = 2

const game = new jsChessEngine.Game()

play()

function play () {
    const status = game.exportJson()
    if (status.isFinished) {
        console.log(`${status.turn} is in ${status.checkMate ? 'checkmate' : 'draw'}`)
    } else {
        console.time('Calculated in')
        const move = game.aiMove(status.turn === 'black' ? blackAiLevel : whiteAiLevel)
        console.log(`${status.turn.toUpperCase()} move ${JSON.stringify(move)}`)
        console.timeEnd('Calculated in')
        game.printToConsole()
        play()
    }
}