import React from 'react';
import LetterTile from './LetterTile';

class Tile extends React.Component{
    state={};

    render(){
        return(
            <div class="tile" id={`tile-${this.props.row}`}>
                <LetterTile letter={this.props.letter}/>
            </div>
            
        )
    }
}

export default Tile;