const jsChessEngine = require('js-chess-engine');
const whiteAiLevel = 3
const blackAiLevel = 1
const game = new jsChessEngine.Game()
var fs = require('fs');

var notepad = []
let iter = 0

play()

function play () {
    const status = game.exportJson()
    if (status.isFinished) {
        game.printToConsole()
        console.log(`${status.turn} is in ${status.checkMate ? 'checkmate' : 'draw'}`)
        notepad.push(`${status.turn} is in ${status.checkMate ? 'checkmate' : 'draw'}`)
        var file = fs.createWriteStream('games/aiMatch.txt');
        file.on('error', (err)=> { /* error handling */ console.log("ERROR writing to file. ", err) });
        notepad.forEach((line) =>{ file.write(line) });
        file.end();
    } else {
        const move = game.aiMove(status.turn === 'black' ? blackAiLevel : whiteAiLevel);
        var piece = Object.keys(move)[0]
        console.log(`${status.turn} moves ${ piece } piece to ${ move[piece]}`)
        iter++
        notepad.push(`${iter}. ${ piece } ${ move[piece]} `);
        play();
    }
}