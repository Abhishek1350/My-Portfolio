import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({} as any);

export const ThemeProvider = ({ children }: any) => {
    const storedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState<string>(storedTheme || "dark");

    const setThemeColors = (theme: string) => {
        const rootElement = document.querySelector(":root") as HTMLElement;

        const darkTheme = () => {
            rootElement.style.setProperty("--background_primary", "#0d1117");
            rootElement.style.setProperty("--background_secondary", "#161b22");
            rootElement.style.setProperty("--textColor_primary", "#c9d1d9");
            rootElement.style.setProperty("--textColor_secondary", "#f0f6fc");
            rootElement.style.setProperty("--shadow_primary", "#f0f6fc");
            rootElement.style.setProperty("--shadow_secondary", "#c9d1d9");
        };

        const lightTheme = () => {
            rootElement.style.setProperty("--background_primary", "#f8f9fa");
            rootElement.style.setProperty("--background_secondary", "#EFF7FD");
            rootElement.style.setProperty("--textColor_primary", "#707375");
            rootElement.style.setProperty("--textColor_secondary", "#343a40");
            rootElement.style.setProperty("--shadow_primary", "#343a40");
            rootElement.style.setProperty("--shadow_secondary", "#707375");
        };

        if (theme === "dark") darkTheme();
        else lightTheme();
    };

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        setThemeColors(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};