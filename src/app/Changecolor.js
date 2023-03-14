import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changecolor } from '../feature/theme';

function Changecolor() {
    const [color, setcolor] = useState("");
    const dispatch = useDispatch()
    return (
        <div className="wrapper fadeInDown">
            <input type="text" onChange={(event) => setcolor(event.target.value)}></input>
            <button onClick={() => { dispatch(changecolor(color))}}>cHANGE cOLUR </button>
        </div>
    );
}

export default Changecolor;