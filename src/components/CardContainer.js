import React from 'react';
import Card from "./Card";

class CardContainer extends React.Component {
    constructor(props){
        super(props);

    }

    shuffle = (array) => {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    };

// Splits an array into smaller chunks which are determined by the user
    chunkArray = (myArray, chunk_size) =>{
        var results = [];

        while (myArray.length) {
            results.push(myArray.splice(0, chunk_size));
        }

        return results;
    };
// Randomizes the values and returns an array of Card components
    Randomize = (numPlayers, teams, names) =>{
        const arr = [];
        for (let i = 0; i < numPlayers; i++){
            arr.push(<Card pokemon={teams[i]} playerName={names[i]} key={i}/>)
        }
        return arr;
    };

    render(){
        const rand = this.shuffle(this.props.pokemon.split("\n"));
        const teams = this.chunkArray(rand, this.props.maxPokemon);
        const cards = this.Randomize(this.props.playerNames.length, teams, this.props.playerNames);
        return(
            <div>
                <div id="userContainer">
                    <div className="cardContainer row mx-auto">
                        {cards}
                    </div>
                </div>
            </div>
        );
    }
}

export default CardContainer;