import React from 'react';
// media query
import { useMediaQuery } from 'react-responsive';

// icons
import Icon1 from 'assets/images/icon/icon-1.webp';
import Icon2 from 'assets/images/icon/icon-2.webp';
import Icon3 from 'assets/images/icon/icon-3.webp';
import { queryByDisplayValue } from '@testing-library/react';

// const data
const courseData = [
    {
        courseName: 'JEE',
        courseContent: 'Lets Learn',
        icon: Icon1
    },
    {
        courseName: 'NEET',
        courseContent: 'Lets Learn',
        icon: Icon2
    },
    {
        courseName: 'PAT',
        courseContent: 'Lets Learn',
        icon: Icon3
    },
    {
        courseName: 'CPAT',
        courseContent: 'Lets Learn',
        icon: Icon1
    },
    {
        courseName: 'BHU',
        courseContent: 'Lets Learn',
        icon: Icon2
    },
    {
        courseName: 'MANY MORE..',
        courseContent: 'Lets Learn',
        icon: Icon2
    }
];

function OurExperties() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    // extra css
    const style = {
        container: { display: 'grid', gridTemplateColumns: isMobile ? 'repeat(1,1fr)' : 'repeat(3,1fr)', gap: '10px' },
        border: {
            borderRadius: '6px'
        }
    };
    return (
        <>
            <div class="specialty-area">
                <div class="container-fluid" style={style.container}>
                    {courseData.map((item, index) => (
                        <div key={index}>
                            <div class="single-specialty active mt-30">
                                <div class="specialty-box" style={style.border}>
                                    <div class="box-icon">
                                        <img src={item.icon} width="70" height="70" alt="icon" />
                                    </div>
                                    <div class="box-content">
                                        <p>
                                            {item.courseName} <br /> {item.courseContent}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div class="row no-gutters wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                        
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default OurExperties;
