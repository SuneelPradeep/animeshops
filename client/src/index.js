import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontext";
import { FilterContextProvider } from "./context/filter_context";
import {CartContextProvider} from './context/cart_context'
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

const DOMAIN_INFO = process.env.REACT_APP_DOMAIN_INFO;
const CLIENT_INFO = process.env.REACT_APP_CLIENT_INFO;

////console.log('DOMAIN INFO',DOMAIN_INFO,CLIENT_INFO);

root.render(
    <Auth0Provider domain={DOMAIN_INFO}
    clientId={CLIENT_INFO }
      redirectUri= {window.location.origin}
    
    >
    <AppProvider>
   <FilterContextProvider>
    <CartContextProvider>
     <App />
     </CartContextProvider>
     </FilterContextProvider>
    </AppProvider>
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(//////console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
