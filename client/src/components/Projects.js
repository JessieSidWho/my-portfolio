import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorChange } from '../actions';
import FlipSearch from './../images/FlipSearch.png';
import StudyLive from './../images/Study_Live.png';

class Projects extends Component {



    render() {
        return (
            <div className={`row ${this.props.color} justify-content-md-center`}>
                <div className={`col-md-6`}>
                    <div className='text-center' style={{ fontFamily: 'Raleway', fontSize: '6vw' }}>
                        Education
                    </div>
                    
                    <div className='row justify-content-sm-center'>
                        <div className='col-sm-6'>

                            <div className='text-center h4'><strong>Completed</strong></div>
                        
                            <ul>
                                <li>Certification: Berkeley Coding Boot Camp</li>
                                <li>Business Administration: CSU East Bay</li>
                            </ul>
                        </div>

                        <div className='col-sm-6'>

                        <div className='text-center h4'><strong>In Progress</strong></div>
                        
                            <ul>
                                <li>Certification: React-Native iOS/Android App Development</li>
                                <li>Certification: </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>

                <div className={`col-md-6 text-center`}>
                    <div className='text-center' style={{ fontFamily: 'Raleway', fontSize: '6vw' }}>
                        <i class="fas fa-code"></i>Projects
                    </div>    
                        <p><a href='https://study-live.herokuapp.com' className={``}><img className={`border border-white rounded-lg`} src={StudyLive} alt='project link' height='95' width='300'/></a></p> 

                        <p><a href='https://flipsearch.herokuapp.com/main' className={``}><img className={`border border-dark rounded-lg`} src={FlipSearch} alt='project link' height='95' width='300'/></a></p>                 
                </div>
            </div>
        );
    }
}

function mapStateToProps({ color }) {
    return { color };
}

export default connect(mapStateToProps, { colorChange })(Projects);