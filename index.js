const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let player = 'X';
const row1 = ['_', '_', '_'];
const row2 = ['_', '_', '_'];
const row3 = ['_', '_', '_'];
const board = [row1, row2, row3];


const drawBoard = () => {
  console.log(`Player ${player}'s turn`);
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
}


const prompt = () => {
  rl.question("Where would you like to place a piece? {row, column}\n", function (pos) {
    pos = pos.split(',');

    console.log('row: ', pos[0]);
    console.log('column: ', pos[1]);

    checkPosition(pos[0], pos[1]);

  });
}


const checkPosition = (row, col) => {
  if (board[row][col] !== '_') {
    console.log('this space has already been taken, try again');
  } else {
    board[row][col] = player;
    if (player === 'X') {
      player = 'O';
    } else {
      player = 'X';
    }
  }
  drawBoard();
  prompt();
}

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});


drawBoard();
prompt();