import React, { Component } from 'react';

class AutoComplete extends Component {
 
    componentDidMount() {
        document.addEventListener('mousedown', this.hideAutoComplete());
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.hideAutoComplete());
    }

    hideAutoComplete() {
        this.props.setShowAutoComplete(false);   
    }

    render() {
        return(
            this.props.showAutocomplete && this.props.autoCompleteSuggestions.length > 0 ?
                <div className="autocomplete-list" >
                    {this.props.autoCompleteSuggestions.map((option, index) =>
                        <div key={index} className="autocomplete-list-option" onClick={() => this.props.setSearchTerm(option)}>
                            {option}
                        </div>
                    )}
                </div> :
                    null
        )
    }
}

export default AutoComplete;