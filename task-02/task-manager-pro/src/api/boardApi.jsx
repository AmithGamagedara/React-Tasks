import axios from "axios";
const API_URL = "http://localhost:3001";

//Boards 
export const getBoards = () => axios.get(`${API_URL}/boards`);
export const getBoard = (boardId) => axios.get(`${API_URL}/boards/${boardId}`);
export const getLists = (boardId) =>  axios.get(`${API_URL}/lists?boardId=${boardId}`);
export const getTasks = (listId) => axios.get(`${API_URL}/tasks?listId=${listId}`);

//Tasks add,update and delete
export const addTask = (task) => axios.post(`${API_URL}/tasks`, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/tasks/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/tasks/${id}`);

