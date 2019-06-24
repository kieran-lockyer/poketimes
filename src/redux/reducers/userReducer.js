const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                name: action.name
            }
        
        case "LOGOUT_USER":
            return {}
        
        default:
            return { ...state }
    }
}

export default userReducer