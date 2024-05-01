import Gamestate from "./Gamestate";

function Reset({gamestate,onreset}) {
    if(gamestate===Gamestate.inprogress){
        return;
    }
    return ( 
        <button onClick={onreset} className="reset-btn">RESET</button>
    );
}

export default Reset;