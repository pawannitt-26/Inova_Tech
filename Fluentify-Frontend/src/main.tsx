import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, MantineProvider } from '@mantine/core';
import { Toaster } from 'react-hot-toast';
import UserContextProvider from './Context/UserContextProvider.tsx';
import { ModalsProvider } from '@mantine/modals';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <ModalsProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Toaster />
            <App />
          </BrowserRouter>
        </UserContextProvider>
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
);
