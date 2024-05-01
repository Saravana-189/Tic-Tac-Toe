import Gamestate from "./Gamestate";
function Gameover({gamestate}) {
   switch(gamestate){
    case Gamestate.inprogress:
        return;
    case Gamestate.playerx:
         return <div className="game-over">X wins</div>;
    case Gamestate.playero:
        return <div className="game-over">O wins</div>;
    case Gamestate.draw:
        return <div className="game-over">DRAW</div>;       
    default:
       return;
   }
}

export default Gameover;