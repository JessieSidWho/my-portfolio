import React from "react";
import profile from './../images/circle-cropped.png';


const Name = () => {
    return (
        <>
            <div className="row bg-dark">
                <div className="col-md-5 text-white" style={{ fontFamily: 'Catamaran', fontSize: '100px' }}>
                    <div className='text-center'>
                        I'm Jessie.
                  </div>

                    <div className="row">
                        <div className='col-md-12'>
                            <div className='text-center'>
                                <i className="fas fa-arrow-down"></i>
                            </div>
                            <div className='row justify-content-md-center mb-3'>
                                <div id='badge' className='col-md-7 border border-white rounded-lg text-center' width='100%'>
                                    <img className='m-3' src={profile} alt='profile pic' style={{ width: '50%', height: 'auto' }} />
                                    <div className='h3' style={{ fontFamily: 'Raleway' }}>Jasmeet Sidhu</div>
                                    <div className='h4 pb-0 mb-0' style={{ fontFamily: 'Raleway' }}>Full Stack Developer
                                    <a href='https://www.linkedin.com/in/jsidhu22/' className='btn btn-block btn-primary rounded-lg mt-3 mb-3'>Linked<i className="fab fa-linkedin"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
};

export default Name;