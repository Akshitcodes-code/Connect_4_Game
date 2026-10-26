

var playerRed = "R";
var playerYellow = "Y";
var curPlayer = playerRed;

var gameOver = false;
var board;

var rows=6;
var coloumns=7;

window.onload = function(){ 
    setGame();
}

function setGame(){
    board = [];

    for (let r=0; r<rows; r++){
        let row=[];
        for (let c=0; c < coloumns;c++){
            row.push(' ');


            let tile = document.createElement("div");
            tile.id = r.toString()+ "-" + c.toString();

            tile.classList.add("tile");
            tile.addEventListener("click",setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setPiece(){
    if (gameOver){
        return ;
    }
    let coords = this.id.split("-");
    let c = parseInt(coords[1]);

    let r = rows-1;
    while(r>=0 && board[r][c]!=' ') {
        r--;
    }

    if (r<0){
        return;
    }


    board[r][c] = curPlayer;


    let tile = document.getElementById(r.toString()+ "-"+ c.toString());
    
    if(curPlayer == playerRed){
        tile.classList.add("red-piece");
        curPlayer = playerYellow;
    } else{
        tile.classList.add("yellow-piece");
        curPlayer= playerRed;
    }

}
