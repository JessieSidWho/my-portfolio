import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorChange } from '../actions';
import ToggleSwitch from './ToggleSwitch';

class NavBar extends Component {



    render() { 
        return (
            <nav className={`navbar row ${this.props.color}`}>
                <div className='ml-5 pl-5'>
                <ToggleSwitch/>
                </div>

                <div className="navbar-brand text-right p-2" href="/" style={{fontFamily: 'Black Ops One', fontSize: '70px'}}>Hello World.</div>

                {/* // <a href='http://localhost:3001/api/logout'><button className="btn btn-secondary btn-block" >Logout</button></a> */}

             </nav>
        );
    }
}
 
function mapStateToProps({ color }) {
    return { color };
}

export default connect(mapStateToProps, { colorChange })(NavBar);