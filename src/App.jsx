import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}
