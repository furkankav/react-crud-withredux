import React, { Component } from 'react';
import uuid  from 'uuid4';

class PersonAdd extends Component {

    constructor(props){
        super(props);
        this.state = {
            person: {
                firstName: "",
                lastName: "",
                id: uuid
            }
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
        return <div> <h3>Add Person </h3> <br/>
            First Name <input className="firstName" type="text" onChange={this.handleFNChange}/> <br/>
            Last Name <input className="lastName" type="text" onChange={this.handleLNChange} />
            <button name="btnAdd" onClick={() => this.props.handleAddPerson(this.state.person)}> Add </button>
        </div>
    }
}

export default PersonAdd;