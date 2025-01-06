// Theme management
const currentTheme = document.documentElement.dataset.theme;
const themeSwitcherEl = document.querySelector("input[name=theme]");
if (currentTheme === "dark") themeSwitcherEl.setAttribute("checked", true);
themeSwitcherEl.addEventListener("click", () => {
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = newTheme;
  window.localStorage.setItem("data-theme", newTheme);
});
