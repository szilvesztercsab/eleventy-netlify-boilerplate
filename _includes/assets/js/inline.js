// Theme management
var theme =
  window.localStorage.getItem("data-theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
document.documentElement.setAttribute("data-theme", theme);
window.onload = () => {
  const themeSwitcher = document.querySelector("input[name=theme]");
  if (theme === "dark") themeSwitcher.setAttribute("checked", true);
  themeSwitcher.addEventListener("click", () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    html.setAttribute("data-theme", newTheme);
    window.localStorage.setItem("data-theme", newTheme);
  });
};
