import './index.css';
import ReactDom from "react-dom/client";
import App from "./App";
import {ImagesProvider} from "./context/images";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(
  <ImagesProvider>
    <App />
  </ImagesProvider>
);
