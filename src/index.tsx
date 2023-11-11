import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from "./context/ThemeContext";

const rootElement = document.getElementById('root') as HTMLElement

if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}

