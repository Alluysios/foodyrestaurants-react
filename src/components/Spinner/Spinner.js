import React from 'react';
import './Spinner.scss';
import SpinnerGif from './spinner.gif'

const Spinner = () => {
    return (
        <div className='absolute-center'>
            <img src={SpinnerGif} alt="Spinner"/>
            <p> Loading please wait...</p>
        </div>
    )
}

export default Spinner;
