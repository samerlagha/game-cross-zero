import React, { useState } from 'react';
import './Game.css'
import Board from './Board';
import { calculateWinner } from '../helper';
const Game = () => {
    const[board,setBoard]=useState(Array(9).fill(null))
    const [xIsNext,setXisNext]=useState(true)
    const winner= calculateWinner(board)
    const handleClick = (index) => {
        const boardCopy=[...board]
        //game over or gaimer get click
        if(winner || boardCopy[index]) return 
        //how the next player 
        boardCopy[index] = xIsNext ? 'X' : '0'
        // update the state 
        setBoard(boardCopy)
        setXisNext(!xIsNext)
    }

    const startNewGame=()=>{
        return(
            <button className="start__btn"
             onClick={()=>setBoard(Array(9).fill(null))}>
                 clear board
             </button>
        )
    }
    return (
        <div className="wrapper">
            {startNewGame()}
            <Board squares={board} click={handleClick}/>
            <p className='game__info'>
                {winner ? 'The winner is : ' + winner
                
              : 'The Next is : ' +(
                  xIsNext ? 'X' : '0'
              )
            }
            </p>
        </div>
    );
};

export default Game;