const readline = require('readline');
const jsChessEngine = require('js-chess-engine');
const game = new jsChessEngine.Game()

game.printToConsole()

 // Ask the user to select the index of a file from your array
 var rl = readline.createInterface({ input: process.stdin, output: process.stdout});
 console.log(game.moves())
 rl.question("Please make your move from the array: ", (answer)=> {
    var choice = answer
    game.move(choice, game.moves(choice)[0])
    game.aiMove()
    game.printToConsole()
    rl.close();
 });