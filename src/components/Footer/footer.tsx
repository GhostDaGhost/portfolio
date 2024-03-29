import Typography from '@mui/material/Typography';

import React from 'react';

import '../../main.css';

// FOOTER COMPONENT
const Footer: React.FC = () => {
    return (
        <div className='about_page_wrapper'>
            <Typography variant="body2" component="div">
                Built using <a className='hyperlink' href='https://reactjs.org/' rel="noopener noreferrer" target="_blank">TypeScript React</a> and <a className='hyperlink' href='https://mui.com/' rel="noopener noreferrer" target="_blank">Material UI</a>.
            </Typography>
        </div>
    );
}

// EXPORT FOOTER COMPONENT
export default Footer;
