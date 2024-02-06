import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const sheepService = {
    getAll:() => axiosService(urls.launches.baseURL)
}

export {
    sheepService
}