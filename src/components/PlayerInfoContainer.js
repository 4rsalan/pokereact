import React from "react";
import CardContainer from "./CardContainer";

class PlayerInfoContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numPlayers: this.props.numPlayers,
            players: [],
            numPokemonPerTeam: '',
            listPokemon: [],
            sortedPokemon: [],
            inputFields: [],
            isClicked: false,
            error: false
        };
    }

    handleChange = (event)=>{
        this.setState({
            numPokemonPerTeam: event.target.value,
            isClicked: false
        });
        console.log(this.state.numPokemonPerTeam);
    };

    TextAreaHandler = event =>{
        this.setState({
            listPokemon: event.target.value
        });
    };

    NameInputHandler = (event) =>{
        const newArray = this.state.players.slice();
        newArray[event.currentTarget.dataset.id] = event.target.value;
        this.setState({players: newArray})
    };

    RenderPlayerNameInput = (numInputs)=>{
        let values = [];
        let inputs = [];

        for (let i = 0; i < numInputs; i++){
            values.push([""]);
            inputs.push(<input type="text" key={i} value={this.state.players[i]} className="userInput" data-id={i} onChange={this.NameInputHandler}/>)
        }

        this.setState({
            players: values,
            inputFields: inputs
        });
    };

    RenderCardContainer = (players, sortedPokemon, numPokemonPerTeam) =>{
        return <CardContainer playerNames={players} pokemon={sortedPokemon} maxPokemon={numPokemonPerTeam}/>;
    };

    componentDidMount(){
        if (this.props.numPlayers <= 0 || isNaN(this.props.numPlayers)){
            return <h5 className={"mt-2 text-danger bg-dark"}>Please enter a valid amount of players</h5>
        }
        else{
            this.RenderPlayerNameInput(this.props.numPlayers);
        }
    }

    SubmissionHandler = () => {
        if (this.state.numPokemonPerTeam <= 0 || isNaN(this.state.numPokemonPerTeam)) {
            this.setState({error: true});
        }
        else{
            this.setState({isClicked: true});
        }
    };

    render(){
        const {isClicked, inputFields, error} = { ...this.state};
        if (this.props.numPlayers <= 0 || isNaN(this.props.numPlayers)){
            return <h5 className={"mt-2 text-danger bg-dark"}>Please enter a valid amount of players</h5>
        }
        return(
            <div>
                <div className="contain">
                    <h6 className="newTitle">Please enter all the players</h6>
                    {inputFields}
                    <h6>What is the maximum amount of pokemon per player?</h6>
                    <input type="text" className="teamMax" value={this.state.numPokemonPerTeam} onChange={this.handleChange}/>
                </div>
                <div>
                    <h3 id="randTitle">Please Enter the list of pokemon line by line</h3>
                    <textarea id="list" value={this.state.listPokemon} onChange={this.TextAreaHandler}/>
                    <div>
                        <button id="randomize" onClick={this.SubmissionHandler}>Randomize!</button>
                        {error ? this.RenderCardContainer(this.state.players, this.state.listPokemon, this.state.numPokemonPerTeam) : null }
                    </div>
                </div>
                {isClicked ? this.RenderCardContainer(this.state.players, this.state.listPokemon, this.state.numPokemonPerTeam) : null }
            </div>
        );
    }

}

export default PlayerInfoContainer;
