const postReducer = (state = [], action) => {
    switch (action.type) {
        case "POPULATE_POSTS":
            return action.posts
        
        case "ADD_POST":
            return [...state, action.post]
        
        case "DELETE_POST":
            return state.filter(post => { return post.id !== action.id })
        
        default:
            return { ...state }
    }
}

export default postReducer