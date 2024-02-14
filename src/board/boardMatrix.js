
export default (row, col, bombs) => {
  let board = [];
  let mineLocation = [];

  //Creating blank board

  //x = column
  for (let x = 0; x < row; x++) {
    let subCol = [];
    for (let y = 0; y < col; y++) {
      subCol.push({
        value: 0,
        revealed: false,
        x: x,
        y: y,
        flagged: false,
      });
    }
    board.push(subCol)
  }

  //Random Bomb Placement
  // let bombCount = 0;
  // while (bombCount < bombs) {
  //   let x = randomNum(0, row - 1);
  //   let y = randomNum(0, col - 1);

  //   if (board[x][y].value === 0) {
  //     board[x][y].value = "X";
  //     mineLocation.push([x, y]);
  //     bombCount++;
  //   }
  // }

  // const randomNum = (min = 0, max) => {
  //   Math.floor(Math.random() * (max - min + 1) + min);
  // }

}