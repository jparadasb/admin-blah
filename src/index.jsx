import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './containers/App';
import { registerServiceWorker } from './utils';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
