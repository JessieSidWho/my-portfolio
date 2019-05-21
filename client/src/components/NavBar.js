import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorChange } from '../actions';
import ToggleSwitch from './ToggleSwitch';

class NavBar extends Component {



    render() { 
        return (
            <nav className={`navbar row ${this.props.color} pl-5`}>
                <div className='col-md-4 text-center pb-2'>
                <ToggleSwitch/>
                </div>

                <div className="col-md-7 text-center p-2" href="/" style={{fontFamily: 'Black Ops One', fontSize: '7VW'}}> Hello World.</div>

                {/* // <a href='http://localhost:3001/api/logout'><button className="btn btn-secondary btn-block" >Logout</button></a> */}

             </nav>
        );
    }
}
 
function mapStateToProps({ color }) {
    return { color };
}

export default connect(mapStateToProps, { colorChange })(NavBar);