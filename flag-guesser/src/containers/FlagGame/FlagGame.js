import React, { Component } from 'react';
import classes from './FlagGame.module.css';

class FlagGame extends Component {
    state = {
        countries: [],
        chosenCountry: null,
        won: false,
        potato: "potato"
    }

    init = () => {
        const url = "https://restcountries.eu/rest/v2/all";
        fetch(url)
        .then(res => res.json())
        .then(res => {
            const shuffled = res.sort(() => .5 - Math.random());// shuffle  
            let selected = shuffled.slice(0,4) ; //get sub-array of first n elements AFTER shuffle
            var chosen = selected.map(country => {
                return {
                    name: country.name,
                    flag: country.flag
                }
            })

            console.log(chosen);
            this.setState({countries: chosen});

            var randomCount = chosen[(Math.floor(Math.random() * 4) + 1) - 1];
            this.setState({chosenCountry: randomCount});
        })

    }

    componentDidMount(){
        this.init()
 
    }


    boxClickHandler = (name, index) => {
        console.log("box clicked");
        if(name === this.state.chosenCountry.name){
            console.log("corrent")
            this.setState({won: true});
        } else {
            console.log("wrong")

        }
    }

    restartHandler = () => {
        this.setState({won: false})
        this.init()
    }

    render(){
        console.log(this.state.potato);

        var box = this.state.countries.map((current, index) => {
            return <div className={classes.box} key={current.name} onClick={() => this.boxClickHandler(current.name, index)}>{current.name}</div>
        });
        console.log(box);


        if(this.state.won){
            console.log('You win');
            box = <>
            <div>You won</div>
            <button onClick={this.restartHandler}>
            Play again?
            </button>
            </>
        }

        var output = <div>Loading...</div>

        if(this.state.chosenCountry){
            console.log(this.state.chosenCountry.name)
            output = <div className={classes.randomFlag}><img src={this.state.chosenCountry.flag}></img></div>
        }

        return (
            <> 
            <div className={classes.container}>
            <div className={classes.boxall}>
                {box}
            </div>
            <h2 className={classes.chooseText}>Select a Flag</h2>
                {output}
            </div>
            </>
        )
    }
}


export default FlagGame;