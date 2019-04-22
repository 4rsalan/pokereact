import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


class CreatePlayerInputForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            isClicked: false,
            names: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.renderPlayerInputContainer = this.renderPlayerInputContainer.bind(this);
    }

    handleChange(event){
        this.setState({
            value: event.target.value,
            isClicked: false
        });
    }

    renderPlayerInputContainer(numInputs){
        return <PlayerInputContainer numPlayers={numInputs}/>;
    }

    render(){
        const inputContainer = this.renderPlayerInputContainer(this.state.value);
        const { isClicked, value } = { ...this.state };
        console.log("What is my state value", isClicked);
        console.log("What is my value, ", value);
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

class PlayerInputContainer extends React.Component {
    constructor(props){
        super(props);
        this.state ={pokePerTeam: '',
                     names: [],
                     isClicked: false,
                     numPlayers: this.props.numPlayers
        };


        this.RenderPlayerNameInput = this.RenderPlayerNameInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderPlayerCardContainer = this.renderPlayerCardContainer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameInputs = this.handleNameInputs.bind(this);
    }

    componentWillMount(){
        //console.log(this.state.names);
        //console.log(this.state.numPlayers);
        //console.log("HELLO");
    };

    RenderPlayerNameInput(numInputs){
        let inputs = [];
        for (let i = 0; i < numInputs; i++){
            inputs.push(<input type="text" key={i} onBlur={this.handleNameInputs} name={i} className="userInput"/>);
        }
        return inputs;
    }

    renderPlayerCardContainer(numCards, names){
        return <PlayerCardContainer numCards={numCards} names={names} />
    }

    handleChange(event){
        this.setState({
            pokePerTeam: event.target.pokePerTeam,
        });
        console.log(this.state.pokePerTeam);
    }

    handleNameInputs(event){

    }

    handleSubmit(event){
        this.setState({
            isClicked: true,
            pokePerTeam: event.target.pokePerTeam,
        });
    }

    render(){
        const {isClicked, pokePerTeam, names} = { ...this.state};
        console.log(isClicked, pokePerTeam, names);
        const inputs = [];
        if (this.props.numPlayers <= 0 || isNaN(this.props.numPlayers)){
            return <h5 className={"mt-2 text-danger bg-dark"}>Please enter a valid amount of players</h5>
        }
        else{
          inputs.push(this.RenderPlayerNameInput(this.props.numPlayers));
        }


        return(
            <div>
            <div className="contain">
            <h6 className="newTitle">Please enter all the players</h6>
            {inputs}
            <h6>What is the maximum amount of pokemon per player?</h6>
            <input type="text" className="teamMax" value={pokePerTeam} onChange={this.handleChange}/>
            </div>
            <button className="userButton" onClick={this.handleSubmit}>Generate Players!</button>
            {isClicked ? this.renderPlayerCardContainer(this.props.numPlayers, names) : null }
            </div>
        );
    }

}

class PlayerNameInput extends React.Component {

    render(){
        return(
              <input type="text" className="userInput"/>
        );
    }
}

class PlayerCardContainer extends React.Component {
    constructor(props){
        super(props);

    }


    createCards(numCards, names){
        let cards = [];

        for (let i = 0; i < numCards; i++){
            cards.push(<Card name={i} playerName={names[i]}/>);
            console.log(names[i]);
        }
        return cards;
    }

    render(){
        const cards = this.createCards(this.props.numCards, this.props.names);

        return(
            <div>
                <div>
                    <h3 id="randTitle">Please Enter the list of pokemon line by line</h3>
                    <textarea id="list"></textarea>
                    <div>
                        <button id="randomize">Randomize!</button>
                    </div>
                </div>
                <div id="userContainer">
                    <div className="cardContainer row mx-auto">
                        {cards}
                    </div>
                </div>
            </div>
        );
    }
}

class Card extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
          <div className="card col-sm-4">
            <h6>Test User</h6>
                <PokemonList/>
          </div>
        );
    }
}

class PokemonList extends React.Component{


    render(){
        return(
            <div>
                <ul>
                    <li>Pikachu</li>
                    <li>Pichu</li>
                    <li>Lucario</li>
                    <li>Torchic</li>
                    <li>Rhydon</li>
                </ul>
            </div>
        );
    }
}


class MainContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isReset: false,
            numPlayers: 0
        };

    }

    render(){
        return(
            <div>
                <h1 className="text-center">Pokemon Randomizer!!</h1>
                <div className="container text-center">
                    <h3>How many players are there?</h3>
                    <div id="users"></div>
                    <CreatePlayerInputForm/>
                    <div>
                    </div>


                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <MainContainer/>,
    document.getElementById('root')
);
