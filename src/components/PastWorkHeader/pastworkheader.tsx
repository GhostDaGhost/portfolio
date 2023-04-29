import Box from '@mui/material/Box/Box';
import Typography from '@mui/material/Typography/Typography';

import React from 'react';
import '../../main.css';

const pastWorkBannerStyle: object = {
    width: '100%',
    borderRadius: '.5vh'
};

// PAST WORK HEADER COMPONENT
const PastWorkHeader: React.FC<PastWorkBanner> = ({imageLink, time}: any = {}) => {
    return (
        <div>
            <Box display="flex" justifyContent="center">
                <img
                    style={pastWorkBannerStyle}
                    src={imageLink}
                    alt='past work entry banner'
                    loading='lazy'
                    draggable='false'
                />
            </Box>

            <Typography sx={{ mt: 3, color: 'darkgrey', textAlign: 'center' }} variant="body1" component="div">
                {time ?? '2023 - Present'}
            </Typography>
        </div>
    );
}

// EXPORT COMPONENT
export default PastWorkHeader;
