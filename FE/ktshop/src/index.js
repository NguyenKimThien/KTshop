
import ReactDOM from 'react-dom/client';
import RouterCustome from './router/router';
import { BrowserRouter } from 'react-router-dom';
import "./style/style.scss";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterCustome />
  </BrowserRouter>
);

