import {loadPosts} from "../index";

export function loadAllPost()
{
    console.log('Load all post with REST');
    return (dispatch)=>{
        console.log('Run function loadAllPost');
        fetch('http://localhost:8080/api/post')
            .then(response=>response.json())
            .then(posts=>dispatch(loadPosts(posts)));
        ;
    }
}
