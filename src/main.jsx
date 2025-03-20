import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import {  Toaster } from 'react-hot-toast'
import { persistor, Store } from './redux/store/myStore.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor} >
      <AuthProvider>
    <App />
    <Toaster position="top-right" />
    </AuthProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
