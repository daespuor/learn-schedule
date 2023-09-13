import Router from "./services/Router.js";
import Store from "./services/Store.js";
import Task from "./services/Task.js";
import TaskPage from "./components/TaskPage.js";
import TaskInstance from "./components/TaskInstance.js";
import TopicIcon from "./components/TopicIcon.js";
import NewTaskPage from "./components/NewTaskPage.js";

window.app = {
  store: Store,
  router: Router,
};

document.addEventListener("DOMContentLoaded", async () => {
  await Task.getTasks();
  app.router.init();
});

customElements.define("task-page", TaskPage);
customElements.define("task-instance", TaskInstance);
customElements.define("topic-icon", TopicIcon);
customElements.define("new-task-page", NewTaskPage);
