import React from 'react'
import './banner.css'

function Banner() {
  return (
    <div className='home_hero container-fluid' id='home'>
        <div className='row home_hero_row'>
            <div className="col-md-7 welcome_div order-sm-2 order-2 order-md-1">
                <div className='width_control'>
                <span>
                    <h1>Full Stack Developer<img src="https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png" width={50} alt="" /></h1>
                </span>
                <span>
                    <p>Hi, I'm Joyal Shine. A passionate Full Stack Web and App Developer. Eager to learn more 📍</p>
                </span>
                <div>
                    <span>
                        <a href="https://www.linkedin.com/in/joyal-shine/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </span>
                    <span>
                        <a href="https://github.com/joyalshine"  target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i> 
                        </a>
                    </span>
                </div>
                </div>
            </div>
            <div className="col-md-5 welcome_gif order-sm-1 order-1 order-md-2">
                {/* <div>
                <img width={300} src="https://camo.githubusercontent.com/40165a147c3dcea0fa1db780bb533fc5f98546ccfb9d5d05ddb2f429277f5348/68747470733a2f2f616e616c7974696373696e6469616d61672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f31322f646576656c6f7065722d6472696262626c652e676966" alt="" />
                </div> */}
                <div className='hero-image'>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
