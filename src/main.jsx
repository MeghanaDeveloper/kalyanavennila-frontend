import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, Store } from "./Users/redux/store/myStore.jsx";
import { AuthProvider } from "./Users/context/auth/AuthProvider.jsx";
import ProfileProvider from "./Users/context/profile/ProfileProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <ProfileProvider>
            <App />
            <Toaster position="top-right" />
          </ProfileProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
