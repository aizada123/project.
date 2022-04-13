import React from 'react';

const Remember = () => {
    return (
        <div className='remember'>
            <div className='container'>
                <h2 className='little__title'>Remember everything</h2>
                <div className='remember__content'>
                    <img className='remember__image' src='/images/remember_left.png'/>
                    <img className='remember__image' src='/images/remember_right.png'/>
                </div>
            </div>
            <img className='remember__ballons' src='/images/remember_ballons.png' />
        </div>
    );
};

export default Remember;