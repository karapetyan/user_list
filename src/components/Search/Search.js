import React, { Component } from 'react';
import AutoComplete from '../../containers/AutoComplete';
import { throttle } from 'throttle-debounce';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            showAutoComplete: false
        };
    }

    setShowAutoComplete(newValue) {
        this.setState({
            ...this.state,
            showAutoComplete: newValue
        })
    }

    handleKeyDown(event, inputValue) {
        if (event.code === 'Enter') {
            this.props.setSearchTerm(inputValue);
            this.setShowAutoComplete(false);
        } else {
            throttle(300, () => {
                this.props.setSearchTerm(inputValue);
                this.setShowAutoComplete(true);
            });
        }
    }

    render() {
        return(
            <div>
                <input ref={input => this.searchInput = input} type="text" defaultValue={this.searchTerm} placeholder="Поиск по имени пользователя" onKeyDown={(event) => this.handleKeyDown(event, this.searchInput.value)} />
                <AutoComplete showAutoComplete={this.state.showAutoComplete} setShowAutoComplete={this.setShowAutoComplete.bind(this)} />
            </div>
        ) 
    }
}

export default Search;
