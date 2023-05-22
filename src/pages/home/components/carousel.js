// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React from 'react';

// // material ui
// import { useTheme } from '@mui/material/styles';
// import { useMediaQuery, Typography } from '@mui/material';
// import { Carousel as ReactCarousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const images = [
//     {
//         src: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1605&q=80',
//         alt: 'Image 1'
//     },
//     {
//         src: 'https://images.unsplash.com/photo-1502465771179-51f3535da42c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
//         alt: 'Image 2'
//     },
//     {
//         src: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1605&q=80',
//         alt: 'Image 3'
//     }
// ];

// const Carousel = () => {
//     const theme = useTheme();
//     const matchesSM = useMediaQuery(theme.breakpoints.up('md'));
//     return (
//         <ReactCarousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
//             {images.map((image, index) =>
//                 matchesSM ? (
//                     <div key={index}>
//                         <img className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} src={image.src} alt={image.alt} />
//                     </div>
//                 ) : (
//                     <div key={index}>
//                         <img className="d-block w-100" style={{ height: '250px', objectFit: 'cover' }} src={image.src} alt={image.alt} />
//                     </div>
//                 )
//             )}
//         </ReactCarousel>
//     );
// };

// export default Carousel;
