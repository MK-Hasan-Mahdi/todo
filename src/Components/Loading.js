import React from 'react';
import { SpinnerDiamond } from 'spinners-react';



const Loading = () => {
    return (
        <div className='flex h-screen justify-center items-center text-3xl'>
            <SpinnerDiamond size={60} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
    );
};

export default Loading;