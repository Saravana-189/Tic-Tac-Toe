import Strike from "./Strike";
import Tile from "./Tile";

function Board({tiles,onTileclick,playerturn,strikeclass}) {
    return ( 
        <div className="board">
           <Tile playerturn={playerturn} onclick={()=> onTileclick(0)} value={tiles[0]} className='right-border bottom-border'/>
           <Tile playerturn={playerturn} onclick={()=> onTileclick(1)} value={tiles[1]} className='right-border bottom-border'/>
           <Tile playerturn={playerturn} onclick={()=> onTileclick(2)} value={tiles[2]} className='bottom-border'/>
           <Tile playerturn={playerturn} onclick={()=> onTileclick(3)} value={tiles[3]} className='right-border bottom-border'/>
           <Tile playerturn={playerturn} onclick={()=> onTileclick(4)} value={tiles[4]} className='right-border bottom-border'/>
           <Tile playerturn={playerturn} onclick={()=> onTileclick(5)} value={tiles[5]} className=' bottom-border'/>
           <Tile playerturn={playerturn} onclick={()=> onTileclick(6)} value={tiles[6]} className='right-border'/>
           <Tile playerturn={playerturn} onclick={()=> onTileclick(7)} value={tiles[7]} className='right-border'/>
           <Tile playerturn={playerturn} onclick={()=> onTileclick(8)} value={tiles[8]}/>
           <Strike strikeclass={strikeclass}/>
        </div>
     );
}

export default Board;