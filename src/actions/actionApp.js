import * as Actions from '../constants/action_type';

export const handlePersonClick = (personId) => {
    return {
        type: Actions.HANDLE_PERSON_CLICK,
        personId: personId
    }

}

export const handleAddPersonView = () => {
    return {
        type: Actions.HANDLE_ADD_PERSON_VIEW
    }
}

export const handleAddPerson = (person) => {
    return{
        type: Actions.HANDLE_ADD_PERSON,
        person:   person
    }
}

