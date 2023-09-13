export class TaskPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    this.root.appendChild(style);

    async function loadCSS() {
      const css = await fetch("./components/TaskPage.css");
      const cssText = await css.text();
      style.textContent = cssText;
    }

    loadCSS();
  }

  connectedCallback() {
    const template = document.getElementById("task-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
    this.render();
  }

  render() {
    const tasks = app.store.tasks;
    const div = this.root.querySelector("div");
    tasks.forEach((task) => {
      task.instances.forEach((instance) => {
        const taskItem = document.createElement("task-instance");
        taskItem.dataset.instance = JSON.stringify({ ...task, ...instance });
        div.appendChild(taskItem);
      });
    });

    const newTaskButton = this.root.querySelector("button");
    newTaskButton.addEventListener("click", () => {
      app.router.go("/new-task");
    });
  }
}

export default TaskPage;
