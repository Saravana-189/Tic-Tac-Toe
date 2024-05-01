import Board from "./Board";
import { useState,useEffect } from "react";
import Gameover from "./Gameover";
import Gamestate from "./Gamestate";
import Reset from "./Reset";
function Tictactoe(){
    const playerx="X";
    const playero="O";
    const winnings=[
        {combo:[0,1,2] ,strikeclass:"strike-row-1"},
        {combo:[3,4,5] ,strikeclass:"strike-row-2"},
        {combo:[6,7,8] ,strikeclass:"strike-row-3"},
        {combo:[0,3,6] ,strikeclass:"strike-col-1"},
        {combo:[1,4,7] ,strikeclass:"strike-col-2"},
        {combo:[2,5,8] ,strikeclass:"strike-col-3"},
        {combo:[0,4,8] ,strikeclass:"strike-diagonal-1"},
        {combo:[2,4,6] ,strikeclass:"strike-diagonal-2"},
    ];
    const handlereset=()=>{
setGamestate(Gamestate.inprogress);
setTiles(Array(9).fill(null));
setStrikeclass(null);
setPlayerturn(playerx);
    }
    function checkwinner(tiles,setStrikeclass,setGamestate){
      for(let winning of winnings){
        const {combo,strikeclass}=winning;
        const titlevalue1=tiles[combo[0]];
        const titlevalue2=tiles[combo[1]];
        const titlevalue3=tiles[combo[2]];
        if(titlevalue1!=null&&titlevalue1==titlevalue2&&titlevalue1==titlevalue3){
            setStrikeclass(strikeclass);
            if(titlevalue1===playero){
                setGamestate(Gamestate.playero);
                return;
            }
            else{
               setGamestate(Gamestate.playerx);
               return;
            }
        }
      }
      const area=tiles.every((tile)=>tile!==null);
      if(area) setGamestate(Gamestate.draw);
    }
    const [tiles,setTiles]=useState(Array(9).fill(null));
    const [playerturn,setPlayerturn]=useState(playerx);
    const [strikeclass,setStrikeclass]=useState();
    const [gamestate,setGamestate]=useState();
    useEffect(()=>{
       checkwinner(tiles,setStrikeclass,setGamestate);
    },[tiles])
    const handleTileclick=(index)=>{
       
        if(tiles[index]!==null) return;
       const newtile=[...tiles];
       newtile[index]=playerturn;
       setTiles(newtile);
       if(playerturn===playero){
        setPlayerturn(playerx);
       }
       else{
        setPlayerturn(playero);
       }
    }
    return(
        <div>
            <h1>Tic Tac Toe</h1>
            <Board strikeclass={strikeclass} playerturn={playerturn}tiles={tiles} onTileclick={handleTileclick}/>
            <Gameover gamestate={gamestate}/>
            <Reset gamestate={gamestate} onreset={handlereset}/>
        </div>
    );
}
export default Tictactoe;