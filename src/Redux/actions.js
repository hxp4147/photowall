import {database} from '../database/config';
// remove
// Actions are really JS objects, but wrapped in functions so that they can be portable
// VV action creators functions that return an Action
export function startAddingPost(post){
    return (dispatch)=> {
        return database.ref('posts').update({[post.id]:post}).then(()=>{
            dispatch(addPost(post));
        }).catch((error)=>{
            console.log(error);
        });
    }
}

export function startLoadingPost(){
    return (dispatch) =>{
        return database.ref('posts').once('value').then((snapshot) =>{
            let posts = [];
            snapshot.forEach((childSnapshot)=>{
                posts.push(childSnapshot.val());
            });
            dispatch(loadPosts(posts));
        }).catch((error)=>{
            console.log(error);
        });
    }
}

export function startRemovingPost(index, id){
    return (dispatch)=> {
        return database.ref(`posts/${id}`).remove().then(()=>{
            dispatch(removePost(index))
        }).catch((error)=>{
            console.log(error);
        });
    }
}

export function startAddingComment(comment, postId){
    return (dispatch) =>{
        return database.ref(`comments/${postId}`).push(comment).then(()=>{
            dispatch(addComment(comment, postId))            
        }).catch((error)=>{
            console.log(error);
        });
    }
}

export function startLoadingComments(){
    return (dispatch) =>{
        return database.ref('comments').once('value').then((snapshot)=>{
            let comments = {};
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key]= Object.values(childSnapshot.val());
            })
            dispatch(loadComments(comments));
        })
    }
}

export function loadPosts(posts){
    return {
        type:'LOAD_POSTS',
        posts
    }
}

export function removePost(index){
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post){
    return{
        type:'ADD_POST',
        post
    }
}

export function addComment(comment, postID){
    return{
        type: 'ADD_COMMENT',
        comment,
        postID
    }
}

export function loadComments(comments){
    return{
        type: 'LOAD_COMMENTS',
        comments
    }
}

// adding post