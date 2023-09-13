const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const href = link.getAttribute("href");
        Router.go(href);
      });
    });
    window.addEventListener("popstate", (event) => {
      if (event.state.route) {
        Router.go(event.state.route, false);
      }
    });
    Router.go(window.location.pathname);
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      window.history.pushState({ route }, undefined, route);
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("task-page");
        break;
      case "/new-task":
        pageElement = document.createElement("new-task-page");
        break;
    }

    if (!pageElement) {
      pageElement = document.createElement("h1");
      pageElement.textContent = "404";
    }

    const main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(pageElement);
    window.scrollTo(0, 0);
  },
};

export default Router;
