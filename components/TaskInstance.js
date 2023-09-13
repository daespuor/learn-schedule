import { getDayOfTheWeek } from "../lib/dates.js";

class TaskInstance extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    this.root.appendChild(style);

    async function loadCSS() {
      const resp = await fetch("/components/TaskInstance.css");
      const cssText = await resp.text();
      style.textContent = cssText;
    }

    loadCSS();
  }

  connectedCallback() {
    const template = document.getElementById("task-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
    this.render();
  }

  render() {
    const instance = this.dataset.instance
      ? JSON.parse(this.dataset.instance)
      : null;
    if (instance) {
      const topicIcon = document.createElement("topic-icon");
      topicIcon.dataset.topic = instance.topic;
      this.root.querySelector(".instance-topic").appendChild(topicIcon);
      this.root.querySelector("h3").textContent = instance.name;
      this.root.querySelector(".instance-dates").textContent = `${
        instance.startTime
      } - ${instance.endTime} ${getDayOfTheWeek(instance.date).substring(
        0,
        3
      )}`;
      this.root.querySelector(".instance-teacher").textContent =
        instance.teacher;
      this.root.querySelector(".instance-description").textContent =
        instance.description;
    }
  }
}

export default TaskInstance;
