// Theme management
document.documentElement.dataset.theme =
  window.localStorage.getItem("data-theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
