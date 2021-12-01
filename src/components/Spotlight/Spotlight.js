import React from 'react';
import './Spotlight.css';

const Spotlight = () => {
    return (
        <section className='hero is-black is-large'>
            <div className='hero-body has-text-centered'>
                <div className='container'>
                    <div className=''>
                        <p className='title is-white'>
                            Featured Product
                        </p>
                        <p className='subtitle is-light'>
                            Lorem ipsum dolor sit amet consectetur<br/>adipiscing elit
                        </p>
                        <a className='button is-light'>
                            Buy Now!
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Spotlight
