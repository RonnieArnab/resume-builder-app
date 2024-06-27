import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-root'>
        <div className='footer-div'>
            <div className="copyright">
                <h6>Copyright © 2023. All rights are reserved</h6>
            </div>
            <div className="links-footer">
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
  )
}

export default Footer
