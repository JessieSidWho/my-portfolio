import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorChange } from '../actions';

class About extends Component {



    render() {
        return (
            <div className={`row ${this.props.color}`}>
                <div className={`col-md-6`}>
                    <div className='text-center' style={{ fontFamily: 'Catamaran', fontSize: '7vw' }}>
                        About Me
                    </div>
                    <div className='pl-3 pr-3 pb-3'>
                        <p>Dynamic and motivated professional well-known for creating positive environments
                            as well as working relationships. Skilled at demonstrating exceptional
                            communication skills and making critical decisions during challenges. Adaptable
                            leader with the ability to work independently and develop opportunities that
                            further establish organizational goals. With a recent change in career to
                            Web Development; gained proficiency in the MERN Stack as well as other technical
                            skills.</p>
                    </div>
                </div>

                <div className={`col-md-6 text-center`}>
                    <div className='' style={{ fontFamily: 'Raleway', fontSize: '7vw' }}>
                        <i class="fas fa-code-branch"></i>Skillset
                    </div>

                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    
                </div>
            </div>
        );
    }
}

function mapStateToProps({ color }) {
    return { color };
}

export default connect(mapStateToProps, { colorChange })(About);