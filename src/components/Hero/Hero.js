import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className='hero is-primary is-halfheight'>
            <div className='hero-body has-text-centered'>
                <div className='container'>
                    <div className=''>
                        <p className='title'>
                            Lorem Ipsum Dolor<br/>Sit Amet
                        </p>
                        <p className='subtitle pt-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>eiusmod tempor incident ut labore est
                        </p>
                        <a className='button is-info mt-5'>Contact</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
