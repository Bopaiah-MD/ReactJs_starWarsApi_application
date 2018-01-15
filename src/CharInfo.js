import React, { Component } from 'react';
import './App.css';

class CharInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
    }

    open = () => {
        this.setState({ expanded: true })  
    }

    close = () => {
        this.setState({ expanded: false })
    }
      
 render() {

        const charData = this.props.charInfo

    if (!this.state.expanded) {
            return <p className="info-align" onClick={this.open}> click to view Planet details </p>
        }

        return (
            <div>
                <p className="info-align" onClick={this.close}> Hide details </p>
               
                <ul className ="planet-info-style">
               
                    <li> <h3> name: {charData.name}</h3></li>
                    <li> <h3> population: {charData.population}</h3></li>
                    <li> <h3> surface_water: {charData.surface_water}</h3></li>
                    <li> <h3> climate: {charData.climate}</h3></li>
                    <li> <h3> url: {charData.url}</h3></li>
                </ul> 
                
            </div>
        )

    }
}

export default CharInfo;
