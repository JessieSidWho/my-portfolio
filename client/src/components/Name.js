import React, { Component } from "react";
import { connect } from 'react-redux';
import { colorChange } from '../actions';
import profile from './../images/circle-cropped.png';


class Name extends Component {
    render() {
        return (
            <>
                <div className={`row ${this.props.color}`}>
                    <div className="col-md-6" style={{ fontFamily: 'Catamaran', fontSize: '8vw' }}>
                        <div className='text-center' style={{minWidth: '360px'}}>
                            I'm Jessie.
                        </div>

                        <div className="row">
                            <div className='col-md-12'>
                                {/* <div className='text-center'>
                                    <i className="fas fa-arrow-down"></i>
                                </div> */}
                                <div className='row justify-content-md-center mb-3'>
                                    <div id='badge' className={`col-md-7 border rounded-lg text-center ${this.props.color}`}>
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
    }
};

function mapStateToProps({ color }) {
    return { color };
}

export default connect(mapStateToProps, { colorChange })(Name);