import { LOAD_POSTS } from "../action/constant/action-type";

const initState = {
    posts: [],
}

function rootReducer(state = initState, action) {
    switch (action.type) {
        case LOAD_POSTS:
            return {...initState, posts: action.posts};
        default:
            return state;
    }

    return state;
}

export default rootReducer;
