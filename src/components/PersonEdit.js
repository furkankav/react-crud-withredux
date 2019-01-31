import React, {Component} from 'react';


class PersonEdit extends Component {

    constructor(props){
        super(props);
        this.state = {
            person: this.props.selectedPerson
        }
    }

    handleFNChange = (event) => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.person.firstName = event.target.value;
        this.setState(newState);
    };

    handleLNChange = (event) => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.person.lastName = event.target.value;
        this.setState(newState);
    };


    render() {
        return (
            <div>
                <span>{this.props.selectedPerson.firstName} {this.props.selectedPerson.lastName} </span>
                <br/><br/>
                <input className = "firstName" type="text" defaultValue={this.props.selectedPerson.firstName} onChange={this.handleFNChange}/><br/>
                <input className = "lastName" type="text" defaultValue={this.props.selectedPerson.lastName} onChange={this.handleLNChange}/><br/>
                <button className = "saveBtn" onClick={() => this.props.handlePersist(this.state.person)}>Save</button>
                <button className= "cancelBtn" onClick={() => this.props.handlePersist(null)}>Cancel</button>
            </div>
        );
    }
}

export default PersonEdit;
