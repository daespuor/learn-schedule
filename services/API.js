const API = {
  url: "/data/tasks.json",
  getTasks: async function () {
    const resp = await fetch(API.url);
    const data = await resp.json();
    return data;
  },
};

export default API;
