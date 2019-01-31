
import * as Actions  from "../constants/action_type";

const initialState = {
    people: [
        {firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'},
        {firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2'}
    ],
    currentView: "PersonList",
    selectedPerson: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.HANDLE_PERSON_CLICK: return handlePersonClick(state, action);
        case Actions.HANDLE_ADD_PERSON_VIEW: return handleAddPersonView(state);
        case Actions.HANDLE_ADD_PERSON: return handleAddPerson(state,action);
        case Actions.HANDLE_PERSIST: return handlePersist(state,action);
        default:
    }
    return state;
};

const handlePersonClick = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.currentView = "PersonEdit";
    newState.selectedPerson = state.people.reduce((acc, p) => (p.id === action.personId) ? p : acc);
    return newState;
}

const handleAddPersonView = (state) => {
    const newState = JSON.parse((JSON.stringify(state)));
    newState.currentView = 'PersonAdd';
    return newState;
}


const handleAddPerson = (state, action) => {
    const newState = JSON.parse((JSON.stringify(state)));
    newState.people.push(action.person);
    newState.currentView = "PeopleList";
    return newState;
}


const handlePersist = (state,action) => {
    const newState = JSON.parse((JSON.stringify(state)));

    if (action.person === null) {
        // do nothing : Cancel button operation of PersonEdit view
    } else {
        newState.people = state.people.map(p => {
            if (p.id === action.person.id) {
                p.firstName = action.person.firstName;
                p.lastName = action.person.lastName;
            }
            return p;
        });
    }
    newState.currentView = "PersonList";
    return newState;
}


export default rootReducer;