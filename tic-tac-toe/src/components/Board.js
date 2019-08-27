import React from 'react';

import Tile from './Tile';

class Board extends React.Component{
    state={
        locations:{
            // Hold the symbols for the tile
            0:'',
            1:'',
            2:'',
            3:'',
            4:'',
            5:'',
            6:'',
            7:'',
            8:''
        },
        players:[1,2],
        currentPlayer:1 // Start with player 1
    };

    renderBoard(){
        return Object.keys(this.state.locations).map(tile=>{

            return (
                <div class="tile" id={`row-${tile}`}>
                    <Tile letter={this.state.locations[tile]} row={tile} move={this.addMove}/>
                </div>
            
            )
        })
    }

    addMove(player){
        // When player clicks block, its associated letter is placed here (in locations state object)
    }

    render(){
        return(
            <div class="ticTacBoard">
                {this.renderBoard()}
            </div>
        )
    }
}

export default Board;