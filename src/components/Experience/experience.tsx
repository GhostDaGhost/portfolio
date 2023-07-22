import { Divider, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import React from 'react';

import '../../main.css';
import { experienceDescriptions } from './data/consts';

const experiencesWithLocalImages: any = {
    'zModeler 3': true,
    'Netlify': true,
    'Vite': true
};

// EXPERIENCE ENTRY COMPONENT
const Experience: React.FC<ExperienceInterface> = ({name, time, linkURL, avatarLinkURL}: any = {}) => {
    return (
        <div>
            <Divider />
            <ListItem>
                <ListItemAvatar>
                    <Avatar
                        sx={{ borderRadius: '0%' }}
                        src={experiencesWithLocalImages[name] ? (`${process.env.PUBLIC_URL}/assets/images/${avatarLinkURL}`) : avatarLinkURL}
                    >
                        {!avatarLinkURL ? <KeyboardDoubleArrowRightIcon/> : ''}
                    </Avatar>
                </ListItemAvatar>

                <ListItemText primary={
                    <Typography variant="body1" component="div">
                        {!linkURL ? name : <a className='hyperlink' href={linkURL} rel="noopener noreferrer" target="_blank">{name}</a>}
                    </Typography>
                } secondary={
                    <Typography variant="body2" component="div">
                        <b>{time}</b> <span style={{ color: 'rgb(105, 105, 105)' }}>-</span> {experienceDescriptions[name] ?? ''}
                    </Typography>
                }/>
            </ListItem>
        </div>
    );
};

// EXPORT EXPERIENCE ENTRY COMPONENT
export default Experience;
