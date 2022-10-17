import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient()
//const queryClient = useQueryClient();

ReactDOM.render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>
  ,
 // React.createElement('h1',null,'hello!'),
  
  document.getElementById("root")
);

