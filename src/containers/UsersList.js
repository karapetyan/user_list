import { connect } from 'react-redux';
import UsersList from '../components/UsersList/UsersList';
import { setUsersList } from '../actions/index';

const mapStateToProps = state =>
    ({
        searchTerm: state.users.searchTerm
    })

const mapDispatchToProps = dispatch =>
    ({
        setUsersList: (usersList) => dispatch(setUsersList(usersList))
    })

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(UsersList)