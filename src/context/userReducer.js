export const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { name: 'Kieran' }
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}