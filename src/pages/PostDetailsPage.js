import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postsService} from "../services";
import {PostDetails} from "../components/PostsContainer/PostDetails";

const PostDetailsPage = () => {
    const [postDetails, setPostDetails] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        postsService.byId(id).then(({data}) => setPostDetails(data))
    }, [id]);

    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {PostDetailsPage};