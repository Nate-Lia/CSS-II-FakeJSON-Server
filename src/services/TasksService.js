import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/Nate-Lia/CSS-II-FakeJSON-Server",
  withCredentials: false,
  headers: {
    Accept: "application/json"
  }
});

export default {
  getTasks() {
    return apiClient.get("/tasks");
  }
};
