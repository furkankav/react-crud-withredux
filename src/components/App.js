import React, {Component} from 'react';
import PersonList from '../containers/PersonListContainer';
import PersonEdit from '../containers/PersonEditContainer';
import PersonAdd from '../containers/PersonAddContainer';
import './styles/App.css';


// This will create a unique id for new persons

class App extends Component {


    render() {

        let view;

        switch (this.props.currentView) {
            // case "PersonEdit":
            //     view = <PersonEdit/>
            //     break;
            case "PersonAdd":
                view =  <PersonAdd/>
                break;
            default:
                view = <PersonList/>
        }

        return (
            <div className="Main">
                {view}
            </div>
        );
    }
}

export default App;
