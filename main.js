const [S, E] = ["S", "E"];
let zero = 0;
const graph = [
  [S, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, E]
];

function board(arr) {
  for (var r = 0; r < arr.length; r++) {
    for (var c = 0; c < arr[0].length; c++) {
      let element = arr[r][c];
      console.log(element);
    }
 
  }
}

function traverse(c, r) {
  if (arr[c][r] == E) {
    console.log("We solved the maze at (" + c + ", " + r + ")");
  } else if (arr[c][r] == S) {
    console.log("At valid position (" + c + ", " + r + ")");
    arr[c][r] = 11;
    if (c < arr.length - 1) {
      traverse(c + 1, r);
    }
    if (r < arr[c].length - 1) {
      traverse(c, r + 1);
    }
    if (c > 0) {
      traverse(c - 1, r);
    }
    if (r > 0) {
      traverse(c, r - 1);
    }
  }
}
board(graph);

