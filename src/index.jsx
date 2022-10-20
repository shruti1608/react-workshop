import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
//import {ReactQueryDevtools} from '@tanstack/react-query/devtools'

const queryClient = new QueryClient()
//const queryClient = useQueryClient();

ReactDOM.render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
    <App />
    {/* <ReactQueryDevtools InitialIsopen={false} position="bootom-right"/> */}
    </QueryClientProvider>
  </React.StrictMode>
  ,
 // React.createElement('h1',null,'hello!'),
  
  document.getElementById("root")
);

