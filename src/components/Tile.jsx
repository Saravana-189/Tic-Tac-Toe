function Tile({className,value,onclick,playerturn}) {
    let hoverclass=null;
    if(value==null&&playerturn!=null){
        hoverclass=`${playerturn.toLowerCase()}-hover`
    }
    return ( 
    <div onClick={onclick} className={`tile ${className} ${hoverclass}`}>
    {value}
    </div>
     );
}

export default Tile;