import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className='skills-parent container-fluid' id="skills">
        <div className='child'>
            <div className="skill-set row m-1">
                <div className="col-md-3 stack-title">
                    <div className="">
                        <h5>Front-End</h5>
                    </div>
                </div>
                <div className="col-12 col-md-9 stack-items row">
                    <div className="col-sm-6 col-md-6 stack-items-innerDiv">
                        <div className="stack-item">
                            <img src='/template/joyal/icons/html.png' alt="" />
                        </div>
                        <div className="stack-item">
                            <img src='/template/joyal/icons/css.png' alt="" />
                        </div>
                        <div className="stack-item">
                            <img src='/template/joyal/icons/javascript.png' alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 stack-items-innerDiv">
                        <div className="stack-item">
                            <img src='/template/joyal/icons/react.png' alt="" />
                        </div>
                        <div className="stack-item ">
                            <img src='/template/joyal/icons/html.png' alt="" />
                        </div>
                        <div className="stack-item">
                            <img src='/template/joyal/icons/bootstrap.png' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-set row m-1">
                <div className="col-md-3 stack-title">
                    <div className="">
                        <h5>Back-End</h5>
                    </div>
                </div>
                <div className="col-md-9 stack-items row">
                    <div className="col-sm-6 col-md-6 stack-items-innerDiv">
                        <div className="stack-item">
                            <img src='/template/joyal/icons/nodejs.png' alt="" />
                        </div>
                        <div className="stack-item">
                            <img src='/template/joyal/icons/express.png' alt="" />
                        </div>
                        <div className="stack-item">
                            <img src='/template/joyal/icons/mongodb.png' alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 stack-items-innerDiv">
                        <div className="stack-item">
                            <img src='/template/joyal/icons/firebase.png' alt="" />
                        </div>
                        <div className="stack-item">
                            <img src='/template/joyal/icons/mysql.png' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-set row m-1">
                <div className="col-md-3 stack-title">
                    <div className="">
                        <h5>App</h5>
                    </div>
                </div>
                <div className="col-md-9 stack-items">
                    <div className="stack-item">
                        <img src='/template/joyal/icons/flutter.png' alt="" />
                    </div>
                </div>
            </div>

            <div className="skill-set row m-1">
                <div className="col-md-3 stack-title">
                    <div className="">
                        <h5>Other Skills</h5>
                    </div>
                </div>
                <div className="col-md-9 stack-items">
                    <div className="stack-item">
                        <img src='/template/joyal/icons/figma.png' alt="" />
                    </div>
                    <div className="stack-item">
                        <img src='/template/joyal/icons/git.png' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
