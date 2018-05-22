import { connect } from 'react-redux';
import AutoComplete from '../components/AutoComplete/AutoComplete';
import { setSearchTerm } from '../actions/index';

const mapStateToProps = state =>
    ({
        autoCompleteSuggestions: state.users.list.length >= 5 ? 
            state.users.list.slice(0, 5) : 
                state.users.list.slice(0, state.users.list.length)
    })

const mapDispatchToProps = dispatch =>
    ({
        setSearchTerm: searchTerm => dispatch(setSearchTerm(searchTerm))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AutoComplete)