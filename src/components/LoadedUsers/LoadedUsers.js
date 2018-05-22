import React from 'react';
import Pagination from '../Pagination/Pagination';
import './LoadedUsers.css';

const LoadedUsers = ({loadedList, loadUsers, nextPageUrl, previousPageUrl}) =>
    loadedList.length > 0 ?
        <div className="loaded-users">
            {
                loadedList.map((user, index) => 
                    <div key={index}>
                        {user.name}
                    </div>
                )
            }
            <Pagination loadUsers = {loadUsers} nextPageUrl = {nextPageUrl} previousPageUrl = {previousPageUrl} />
        </div> :
            <div className="empty-list"></div>

export default LoadedUsers;