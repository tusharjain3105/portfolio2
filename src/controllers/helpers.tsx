import { ThemeMode } from "../env";

export const getCurrentTheme = () => {
  return localStorage.getItem(ThemeMode.storagekey) || ThemeMode.light;
};

export const toggleTheme = (theme = getCurrentTheme()) => {
  document.body.classList.toggle(ThemeMode.dark);
  document.body.classList.toggle(ThemeMode.light);
  if (theme === ThemeMode.dark) {
    localStorage.setItem(ThemeMode.storagekey, ThemeMode.light);
  } else if (theme === ThemeMode.light) {
    localStorage.setItem(ThemeMode.storagekey, ThemeMode.dark);
  }
};
