import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorChange } from '../actions';

class About extends Component {



    render() {
        return (
            <div className={`row ${this.props.color} justify-content-md-end`}>
                <div className={`col-md-7`}>
                    <div className='text-center' style={{ fontFamily: 'Catamaran', fontSize: '7vw' }}>
                        About Me
                    </div>
                    <div className='pl-3 pr-3 pb-3'>
                        <p><em>I love problem solving.</em> Since my entry to the world of Business 8 years ago; 
                            no matter if it was Finance or Management, I have been keen on being the go-to 
                            person. If there is a problem to fix, I was on it and enjoyed doing it.</p>

                            <p>In the Fall of 2018, I left the world of Business to pursue Web Development. 
                                It's an interest that I had for a very long time but had not taken the leap 
                                to pursue it. I saw an opportunity and took it. Out came the books and I 
                                took part a program at the UC Berkeley Ext. for Full Stack Web Development.</p>

                            <p>Finished in Spring of 2019 and am feeling confident about my skills as a 
                                Full Stack Developer to build and develop web applications. Yes, it's 
                                challenging; but that's the beauty of it.</p>

                            <p>*There will always be a challenge and I will always keep learning.</p>
                            <p>*There will always be room for growth and I will always keep growing.</p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ color }) {
    return { color };
}

export default connect(mapStateToProps, { colorChange })(About);