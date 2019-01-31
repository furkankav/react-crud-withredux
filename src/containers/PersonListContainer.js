import { connect } from 'react-redux';

import { handlePersonClick, handleAddPersonView} from '../actions/actionApp';
import PersonList from '../components/PersonList';

const mapStateToProps = (state) => {
    return {
        people: state.people
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePersonClick: (person) => dispatch(handlePersonClick(person)),
        handleAddPersonView: ()=> dispatch(handleAddPersonView())
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonList);