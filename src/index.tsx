import React from 'react';
import ReactDOM from 'react-dom/client';

import Main from './main';

const root: any = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);
