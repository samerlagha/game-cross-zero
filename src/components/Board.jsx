import React from 'react';
import './Board.css'
import Squar from './Squar';
const Board = ({squares,click}) => {
    return (
        <div className="board">
          {squares.map((square, index)=>(
          <Squar
           key={index} 
           value={square}
           onClick={()=>click(index)}
           />
          ))}
        </div>
    );
};

export default Board;