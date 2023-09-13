class NewTaskPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    this.root.appendChild(style);

    async function loadCSS() {
      const resp = await fetch("/components/NewTaskPage.css");
      const cssText = await resp.text();
      style.textContent = cssText;
    }

    loadCSS();
  }

  connectedCallback() {
    const template = document.getElementById("new-task-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
    this.render();
  }

  render() {}
}

export default NewTaskPage;
