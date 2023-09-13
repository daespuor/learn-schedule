import API from "./API.js";

const Task = {
  getTasks: async () => {
    app.store.tasks = await API.getTasks();
  },
};

export default Task;
