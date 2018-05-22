import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import LoadingError from '../LoadingError/LoadingError';
import LoadedUsers from '../../containers/LoadedUsers';
import fetchUsers from './helpers/fetchUsers';

class UsersList extends Component {
    constructor() {
        super();
        this.state = {
            nextPageUrl: null,
            previousPageUrl: null,
            isFetching: null,
            error: null,
            currentPage: null
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.searchTerm !== this.props.searchTerm
    }

    componentWillReceiveProps(nextProps) {
       if (nextProps.searchTerm !== this.props.searchTerm) this.loadUsers(nextProps.searchTerm, 0)
    }

    loadUsers(searchTerm = this.props.searchTerm, searchPage) {    
        this.setState({
            ...this.state,
            isFetching: true
        })
        fetchUsers(searchTerm, searchPage)
            .then(result => {
                this.props.setUsersList(result.list);
                this.setState({
                    ...this.state,
                    nextPageUrl: result.nextPageUrl,
                    previousPageUrl: result.previousPageUrl,
                    isFetching: false,
                    error: null,
                    currentPage: result.currentPage        
                })
            })
            .catch(error => {
                this.setState({
                    ...this.state,
                    isFetching: false,
                    error
                })
            });
    }

    render() {
        return(
            <div className="users-list">
                {
                this.state.isFetching ?
                    <Loader /> :
                        this.state.error ?
                            <LoadingError errorText = {this.state.error} /> :
                                <LoadedUsers loadUsers = {this.loadUsers.bind(this)} nextPageUrl = {this.state.nextPageUrl} previousPageUrl = {this.state.previousPageUrl} currentPage = {this.state.currentPage} />
                }
            </div> 
        )
    }
}
  
export default UsersList;
  