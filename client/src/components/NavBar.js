import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorChange } from '../actions';
// import ToggleSwitch from './ToggleSwitch';

class NavBar extends Component {



    render() { 
        return (
            <div className={`col-md-12 ${this.props.color}`}>

                <div className="bg-dark text-right p-2" href="/" style={{color: '#f1f1ef', fontSize: '40px'}}>Hello World.</div>

                {/* // <a href='http://localhost:3001/api/logout'><button className="btn btn-secondary btn-block" >Logout</button></a> */}

             </div>
        );
    }
}
 
function mapStateToProps({ color }) {
    return { color };
}

export default connect(mapStateToProps, { colorChange })(NavBar);