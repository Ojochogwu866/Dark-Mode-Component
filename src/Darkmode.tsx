import { ChangeEventHandler } from "react";
import "./Dark.css";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};
const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};
const storedTheme = localStorage.getItem("theme");

const autoDark =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
const toggleButton: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};
const defaultDark =
  storedTheme === "dark" || (storedTheme === null && autoDark);

if (defaultDark) {
  setDark();
}

setDark();
const DarkMode = () => {
  return (
    <div className="toggle-container">
      <span>
        <SunIcon />
      </span>
      <label htmlFor="checkbox" className="toggle-id">
        <input
          onChange={toggleButton}
          defaultChecked
          type="checkbox"
          id="checkbox"
        />
        <div className="slider feature"></div>
      </label>
      <span>
        <MoonIcon />
      </span>
    </div>
  );
};
export default DarkMode;
