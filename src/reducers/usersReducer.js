let initialState = {
    searchTerm: '',
    list: []
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_TERM':
            return ({
                ...state,
                searchTerm: action.searchTerm
            })

        case 'SET_USERS_LIST':
            return ({
                ...state,
                list: action.usersList
            })
        
        default:
            return state
    }
}

export default users;
