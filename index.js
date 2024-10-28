let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.querySelector(".newGame");

let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const showWinner = (winner) => {
  msg.innerHTML = `Congratulations! Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Value = boxes[pattern[0]].innerHTML;
    let pos2Value = boxes[pattern[1]].innerHTML;
    let pos3Value = boxes[pattern[2]].innerHTML;

    if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
      if (pos1Value === pos2Value && pos2Value === pos3Value) {
        showWinner(pos1Value);
      }
    }
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
