export const populatePosts = (posts) => {
    return {
        type: 'POPULATE_POSTS',
        posts
    }
}

export const addPost = (post) => {
    return {
        type: 'ADD_POST',
        post
    }
}

export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}