import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about-parent container-fluid' id='about'>
        <div className="row about-row">
            <div className="col-lg-6  img-main-div">
                <div className="img-div">
                    <img className='main-about-img' src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt="" />
                    <img className='rotating-inner' src="https://stefantopalovicdev.vercel.app/static/media/working-emoji.c5325f52b5be329995a5.png" alt="" />
                    <span>
                        <img className='rotating-outer' src="https://stefantopalovicdev.vercel.app/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg" alt="" />
                    </span>
                </div>
            </div>
            <div className="col-lg-6 about-p">
                <h6>ABOUT ME</h6>
                <h5>Tech Enthusiast | App, Front-end, and Back-end Development 📍</h5>
                <p>Hello! I'm Joyal Shine, a dedicated and driven third-year student at Vellore Institute of Technology, Vellore. With a strong passion for technology, I have honed my skills in app development, front-end development, and back-end development. I thrive on transforming ideas into functional and visually appealing digital experiences. By leveraging my expertise in coding and design, I create seamless and user-centric solutions. Join me on my journey as I continue to explore new technologies, expand my knowledge, and make a lasting impact in the world of web and mobile development.</p>
            </div>
        </div>
    </div>
  )
}

export default About
