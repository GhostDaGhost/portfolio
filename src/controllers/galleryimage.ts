// WHEN TRIGGERED, CLOSE EXPANDED IMAGE
export const CloseExpandedImage: any = () => {
    const zoomedImageContainer: any = document.getElementById('main_zoomedimage_wrapper');
    const zoomedImageElem: any = document.getElementById('main_zoomedimage');

    const zoomedImageDescription: any = document.getElementById('main_zoomedimage_description');
    const mainBackgroundContainer: any = document.getElementById('main_inner_centeredarea');
    const scrollPosition: number = window['pageYOffset'];

    zoomedImageContainer['style']['opacity'] = 0;
    setTimeout(() => {
        zoomedImageElem['src'] = '';
        zoomedImageDescription['innerHTML'] = ''

        mainBackgroundContainer['style']['opacity'] = 1;
        window.scrollTo(0, scrollPosition);
    }, 500);
}
