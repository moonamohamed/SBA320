import { React } from 'react';
import { ReactDOM } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Jokes from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Jokes/>
  </Provider>,
)
