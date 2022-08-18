import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from './App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { Global } from '@emotion/react';
import { Globalstyles } from 'styles/Global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={Globalstyles} />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
