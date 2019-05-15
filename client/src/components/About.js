import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorChange } from '../actions';

class About extends Component {



    render() { 
        return (
            <div className={`row ${this.props.color} justify-content-md-end`}>
                <div className={`col-md-6`}>
                    <div className='text-center' style={{ fontFamily: 'Catamaran', fontSize: '70px' }}>
                        About Me
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