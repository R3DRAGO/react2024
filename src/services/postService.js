import {axiosService} from "./axiosService";
import {urls} from "../constant/urls";

const postService = {
    getAll:() => axiosService(urls.posts.baseURL),
    getById:(id) => axiosService(urls.posts.byId(id))
}

export {
    postService
}