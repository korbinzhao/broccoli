

import React from "react";
import ReactDOM from 'react-dom/client';
import App from './pages/invite';

import './global.less';

const container = document.getElementById('root');

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
}

