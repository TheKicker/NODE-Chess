const jsChessEngine = require('js-chess-engine');
const game = new jsChessEngine.Game()

game.move("A2", "A4")
game.aiMove(3)
console.log(game.moves())
