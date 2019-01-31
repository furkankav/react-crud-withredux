import { connect } from 'react-redux';

import PersonAdd from '../components/PersonAdd';

import { handleAddPerson } from '../actions/actionApp'

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddPerson: (person) => dispatch(handleAddPerson(person))
    }
}

export default connect(null, mapDispatchToProps)(PersonAdd);