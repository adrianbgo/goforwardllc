import React from 'react';
import './Featured.css';
import placeholder from '../../images/placeholder-4-3.gif';

const Featured = (props) => {
    return (
        <section className='storefront my-6'>
            <p className='title has-text-centered'>
                Featured {props.type === 'products' ? 'Products' : 'Services'}
            </p>
            <div className='columns'>
                <div className='column is-one-fifth is-offset-one-fifth has-text-centered'>
                    <div className='card'>
                        <div className='card-image'>
                            <figure className='image is-4by3'>
                                <img src={placeholder} alt='placeholder image' />
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='content'>
                                <p className='title'>
                                    Featured {props.type === 'products' ? 'Product' : 'Service'}
                                </p>
                                <p className=''>
                                    Lorem Ipsum dolor sit amet<br/>consectetur adipiscing elit
                                </p>
                                <a className='button'>
                                    Buy Now!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='column is-one-fifth  has-text-centered'>
                    <div className='card'>
                        <div className='card-image'>
                            <figure className='image is-4by3'>
                                <img src={placeholder} alt='placeholder image' />
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='content'>
                                <p className='title'>
                                    Featured {props.type === 'products' ? 'Product' : 'Service'}
                                </p>
                                <p className=''>
                                    Lorem Ipsum dolor sit amet<br/>consectetur adipiscing elit
                                </p>
                                <a className='button'>
                                    Buy Now!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='column is-one-fifth has-text-centered'>
                    <div className='card'>
                        <div className='card-image'>
                            <figure className='image is-4by3'>
                                <img src={placeholder} alt='placeholder image' />
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='content'>
                                <p className='title'>
                                    Featured {props.type === 'products' ? 'Product' : 'Service'}
                                </p>
                                <p className=''>
                                    Lorem Ipsum dolor sit amet<br/>consectetur adipiscing elit
                                </p>
                                <a className='button'>
                                    Buy Now!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured
