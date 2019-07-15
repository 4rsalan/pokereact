import React from 'react'
import PlayerInfoContainer from "./PlayerInfoContainer"

class InputContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numPlayers: 0,
            value: "",
            isClicked: false
        }
    }

    renderPlayerInputContainer = (numInputs) =>{
        return <PlayerInfoContainer numPlayers={numInputs}/>;
    };

    handleChange = (event)=>{
        this.setState({
            value: event.target.value,
            isClicked: false
        });
    };

    render(){
        const {isClicked} = {...this.state};
        return(
            <div>
                <input type="text" id="playerCount" name="NumberPlayers" value={this.state.value} onChange={this.handleChange}/>
                <button id="create" onClick={() => this.setState({isClicked: !this.state.isClicked})}>Create Players!</button>
                <button id="reset" onClick={() => this.setState({isClicked: false})}>Reset All</button>
                {isClicked ? this.renderPlayerInputContainer(this.state.value) : null }
            </div>
        );
    }

}

export default InputContainer;