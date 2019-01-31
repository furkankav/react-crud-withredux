import React, {Component} from 'react';
import "./styles/PersonList.css";

class PersonList extends Component {

    render() {
        return (
            <div>
                <ul className="PersonList">
                    {this.props.people.map((person) => <li className="person"
                                                           onClick={() => this.props.handlePersonClick(person.id)}
                                                           key={person.id}>{person.firstName} {person.lastName}</li>)}
                </ul>
                <br/>
                <button onClick={this.props.handleAddPersonView}> add new user</button>
            </div>

        );
    }
}

export default PersonList;
