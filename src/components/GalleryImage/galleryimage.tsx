import Tooltip from "@mui/material/Tooltip";

import React from 'react';

import '../../main.css';
import './galleryimage.css';

const galleryImageDescriptions: any = {
    'Health Triaging Menu': `
        This menu served as a way to check injuries of yourself or other players. The left row would hold injured body parts and sort them into columns.
        The right row would hold the injuries to the selected body part column and show on the skeleton where that body part is. The colored icons to the left
        of the skeleton were a way to provide medications/insert IVs to heal the player or treat any negative effects on them.
    `,

    'Mobile Phone': `
        A device with a custom frame and no direct real-life brand resemblance. This device is used as the primary method of communication and interaction
        for the players. It includes a camera, messaging, social media, calling, banking and more! This image shows the home page of the phone.
    `,

    'Police Mobile Data Terminal': `
        A device that is primarily used for record searching, data recording and report creating.
    `,

    'Crafting Menu': `
        This menu serves a way for the player to craft items with ingredients in their inventory. They had the option to craft one or three or five at a time.
    `,

    'Mobile Phone - Social Media': `
        Using the same mobile phone system, a social media application was implemented that lets a user create/login to an account and begin "bleeting" which is the counterpart
        of "tweeting" in the lore. Users were able to rebleet (retweet), like and tag other accounts.
    `
}

// GALLERY IMAGE INTERFACE
interface GalleryImageInterface {
    hint: string;
    path: string;
}

// GALLERY IMAGE COMPONENT
const GalleryImage: React.FC<GalleryImageInterface> = ({hint, path}: any = {}) => {
    return (
        <Tooltip title={hint ?? 'Image Hint'} placement='top' arrow>
            <div className='gallery_image_wrapper' onClick={() => {
                const zoomedImageContainer: any = document.getElementById('main_zoomedimage_wrapper');
                const zoomedImageElem: any = document.getElementById('main_zoomedimage');

                const zoomedImageDescription: any = document.getElementById('main_zoomedimage_description');
                const mainBackgroundContainer: any = document.getElementById('main_inner_centeredarea');

                zoomedImageElem['src'] = path;
                zoomedImageDescription['innerHTML'] = galleryImageDescriptions[hint] ?? '';

                zoomedImageContainer['style']['opacity'] = 1;
                mainBackgroundContainer['style']['opacity'] = 0.25;
            }}>
                <img className='gallery_img' src={path ?? ''} alt='gallery image' draggable='false'/>
            </div>
        </Tooltip>
    );
};

// EXPORT GALLERY IMAGE COMPONENT
export default GalleryImage;
