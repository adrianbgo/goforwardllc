import React from 'react'

const Newsletter = () => {
    return (
        <section className='hero is-small'>
            <div className='notification is-primary'>
                <div className='level'>
                    <div className='level-left'>
                        <div className='level-item'>
                            <p className='title'>Sign up for my newsletter!</p>
                        </div>
                    </div>
                    <div className='level-right'>
                        <div className='level-item'>
                            <input className='input' type='email' placeholder='Your Email'/>
                        </div>
                        <div className='level-item'>
                            <btn className='button' type='submit'>Submit</btn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
