import React from 'react';

const Pagination = ({ loadUsers, nextPageUrl, previousPageUrl }) =>
    <div>
        {
            previousPageUrl ?
                <button type="button" onClick={() => loadUsers(undefined, previousPageUrl)}>Предыдущая страница</button> :
                    <p>Предыдущая страница</p>
        }
        {
            nextPageUrl ?
                <button type="button" onClick={() => loadUsers(undefined, nextPageUrl)}>Следующая страница</button> :
                    <p>Следующая страница</p>
        }
    </div>

export default Pagination;