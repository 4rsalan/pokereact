import React from "react";

class Card extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.pokemon){
            const list = this.props.pokemon.map((pokemon, i) =>{
                return <li key={i}>{pokemon}</li>
            });
            return(
                <div className="card col-sm-4">
                    <h6>{this.props.playerName}</h6>
                    <ul>
                        {list}
                    </ul>
                </div>
            );
        }
        else{
            return(
                <div className="card col-sm-4">
                    <h6>{this.props.playerName}</h6>
                    Loading...
                </div>
            );
        }
    }
}

export default Card;