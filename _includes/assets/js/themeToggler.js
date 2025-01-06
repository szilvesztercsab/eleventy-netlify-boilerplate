// Theme management
const themeSwitcherEl = document.querySelector("input[name=theme]");

if (document.documentElement.dataset.theme === "dark")
  themeSwitcherEl.setAttribute("checked", true);

themeSwitcherEl.addEventListener("click", () => {
  const newTheme =
    document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = newTheme;
  window.localStorage.setItem("data-theme", newTheme);
});
