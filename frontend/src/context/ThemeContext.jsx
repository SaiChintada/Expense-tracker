import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext =
  createContext();

export const ThemeProvider = ({
  children,
}) => {

  const [darkMode,
    setDarkMode] =
      useState(true);

  useEffect(() => {

    if (darkMode) {

      document.body.classList.add(
        "dark-theme"
      );

      document.body.classList.remove(
        "light-theme"
      );

    } else {

      document.body.classList.add(
        "light-theme"
      );

      document.body.classList.remove(
        "dark-theme"
      );
    }

  }, [darkMode]);

  const toggleTheme = () => {

    setDarkMode(
      !darkMode
    );
  };

  return (

    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>
  );
};

export const useTheme = () =>
  useContext(ThemeContext);