import { connect } from 'react-redux';
import { setSearchTerm } from '../actions';
import Search from '../components/Search/Search';

const mapStateToProps = state =>
    ({
        searchTerm: state.users.searchTerm
    })

const mapDispatchToProps = dispatch =>
    ({
        setSearchTerm: searchTerm => dispatch(setSearchTerm(searchTerm))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)