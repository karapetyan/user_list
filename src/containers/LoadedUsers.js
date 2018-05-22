import { connect } from 'react-redux';
import LoadedUsers from '../components/LoadedUsers/LoadedUsers';

const mapStateToProps = state =>
    ({
        loadedList: state.users.list
    })
    
export default connect(
    mapStateToProps,
    null
)(LoadedUsers)
