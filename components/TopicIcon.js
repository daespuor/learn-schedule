class TopicIcon extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    this.root.appendChild(style);

    async function loadCSS() {
      const resp = await fetch("/components/TopicIcon.css");
      const cssText = await resp.text();
      style.textContent = cssText;
    }

    loadCSS();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const topic = this.dataset.topic;
    const topicIcon = document.createElement("img");
    topicIcon.src = `/images/${topic}.svg`;
    topicIcon.alt = `This is a ${topic} task instance`;
    this.root.appendChild(topicIcon);
  }
}

export default TopicIcon;
