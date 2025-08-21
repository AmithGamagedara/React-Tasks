import './index.css'
import ReactDom from "react-dom/client"
import App from './App.jsx'

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(<App/>);
