import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {PostForm} from "./PostForm";
import {Post} from "./Post";

const PostsContainer = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);
    return (
        <div>
            <PostForm setPosts={setPosts}/>
            <hr/>
            <Post posts={posts}/>
        </div>
    );
};

export {PostsContainer};