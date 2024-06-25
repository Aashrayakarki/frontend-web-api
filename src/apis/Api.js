import axios from "axios";

//creating backend Config!
const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type": 'multipart/form-data',
    },
})


//Test API
export const testAPI = () => Api.get('/')

//Register API
export const registerUserApi = (data) => Api.post('/api/user/register', data)

//Login API
export const loginUserApi = (data) => Api.post('/api/user/login', data)

//Exercise API
export const createExerciseApi = (data) => Api.post('/api/exercise/create', data)

//Get All Exercises API
export const getAllExercises = () => Api.get('/api/exercise/get_all_exercises')

//Get Exercise By ID API


//http://localhost:5000/test