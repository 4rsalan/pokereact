import React from "react";
import InputContainer from "./InputContainer"

class MainContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numPlayers: 0
        };

    }

    render(){
        return(
            <div>
                <h1 className="text-center">Pokemon Randomizer!!</h1>
                <div className="container text-center">
                    <h3>How many players are there?</h3>
                    <InputContainer/>
                    <div>
                    </div>


                </div>
            </div>
        );
    }
}

export default MainContainer