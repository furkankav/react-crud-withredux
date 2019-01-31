import { connect } from 'react-redux';
import PersonEdit from '../components/PersonEdit';
import {handlePersist} from '../actions/actionApp'

const mapStateToProps = (state) => {
    return {
        selectedPerson: state.selectedPerson
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handlePersist: (person) => dispatch(handlePersist(person))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonEdit);