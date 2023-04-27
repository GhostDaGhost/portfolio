import Tooltip from "@mui/material/Tooltip";
import React from 'react';

import '../../main.css';
import './galleryimage.css';

// GALLERY IMAGE COMPONENT
const GalleryImage: React.FC<GalleryImageInterface> = ({hint, path, onImageClick}: any = {}) => {
    return (
        <Tooltip title={hint ?? 'Image Hint'} placement='top' arrow>
            <div className='gallery_image_wrapper' onClick={onImageClick}>
                <img className='gallery_img' src={path ?? ''} alt='gallery item showcase' draggable='false'/>
            </div>
        </Tooltip>
    );
};

// EXPORT GALLERY IMAGE COMPONENT
export default GalleryImage;
