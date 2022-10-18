const jsChessEngine = require('js-chess-engine')
const game = new jsChessEngine.Game()

game.move("A2", "A4")
game.aiMove(1)
console.log(game.moves())
