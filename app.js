let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");

let turn = true; //player X and O

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turn){                       //TURN SHOUD BE TRUE
            box.innerText = "O";  
            turn = false;
        }
        else{
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
       
    }
};

const showWinner = (winner) => {
    msg.innerText = `CONGRATULATIONS!!!! WINNER IS ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for( let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner" , pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

const resetGame = () =>{
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);