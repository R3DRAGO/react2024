import axios from "axios";

import {baseURL} from "../constants/ursl";

const apiService = axios.create({baseURL});

export {
    apiService
}