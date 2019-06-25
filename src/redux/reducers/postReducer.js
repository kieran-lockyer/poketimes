const postReducer = (state = [], action) => {
    switch (action.type) {
        case "POPULATE_POSTS":
            return action.posts.reverse()
        
        case "ADD_POST":
            console.log(action)
            return [{ title: action.post.title, body: action.post.body, id: state[0].id + 1 }, ...state]
        
        case "DELETE_POST":
            return state.filter(post => { return post.id !== action.id })
        
        default:
            return state
    }
}

export default postReducer