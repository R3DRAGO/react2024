import {apiService} from "./apiService";
import {urls} from "../constants/ursl";

const commentsService={
    getByPostId:(postId)=>apiService.get(urls.comments.base, {params:postId})
}

export {
    commentsService
}