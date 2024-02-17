import axios from "axios";

const axiosInstance = axios.create({
  //1- local instance of firebase function
  // baseURL:"http://127.0.0.1:5001/clone-b52bb/us-central1/api"
  // 2- deployed version of firebase function
  baseURL: "https://console.firebase.google.com/project/clone-b52bb/overview",
  // 3- deployed version of amazon server on render.com
  // baseURL: "https://amazon-backend-deploy.onrender.com/"
});

export {axiosInstance};