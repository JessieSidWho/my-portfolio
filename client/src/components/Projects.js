import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorChange } from '../actions';
import FlipSearch from './../images/FlipSearch.png';
import StudyLive from './../images/Study_Live.png';

class Projects extends Component {



    render() {
        return (
            <div className={`row ${this.props.color} justify-content-md-center`}>
                <div className={`col-md-10`}>
                    <div className='text-center' style={{ fontFamily: 'Catamaran', fontSize: '7vw' }}>
                        A few of My Projects . .
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className={`col-sm-6 text-center `}>
                            <a href='https://flipsearch.herokuapp.com/main' className={``}><img className={`border border-dark rounded-lg mt-2 mb-2`} src={FlipSearch} alt='project link' height='114' width='334'/></a>
                        </div>
                        <div className={`col-sm-6 text-center`}>
                            <a href='https://study-live.herokuapp.com' className={``}><img className={`border border-white rounded-lg mt-2 mb-2`} src={StudyLive} alt='project link' height='114' width='334'/></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

function mapStateToProps({ color }) {
    return { color };
}

export default connect(mapStateToProps, { colorChange })(Projects);