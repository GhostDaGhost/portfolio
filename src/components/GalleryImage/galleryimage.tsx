import Tooltip from "@mui/material/Tooltip";
import React from 'react';

import '../../main.css';
import './galleryimage.css';

// GALLERY IMAGE COMPONENT
const GalleryImage: React.FC<GalleryImageElement> = ({hint, path, onImageClick}: any = {}) => {
    return (
        <Tooltip title={hint ?? 'Image Hint'} placement='top' arrow>
            <div className='gallery_image_wrapper' onClick={onImageClick}>
                <img style={{ width: '100%' }} src={path ?? ''} alt='gallery item showcase' draggable='false'/>
            </div>
        </Tooltip>
    );
};

// EXPORT GALLERY IMAGE COMPONENT
export default GalleryImage;
