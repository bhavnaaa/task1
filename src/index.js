import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root using React 18's createRoot method
const root = createRoot(rootElement);

// Render the App component
root.render(<App />);
