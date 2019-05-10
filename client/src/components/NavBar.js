import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorChange } from '../actions';

class NavBar extends Component {



    render() { 
        return (
            // <div className={`navbar-dark ${this.props.color} text-center`}>


                <div className="bg-dark text-center pt-2 pb-2" href="/" style={{color: '#f1f1ef', fontSize: '30px'}}>Jasmeet Sidhu</div>

                // <a href='http://localhost:3001/api/logout'><button className="btn btn-secondary btn-block" >Logout</button></a>

            //  </div>
        );
    }
}
 
function mapStateToProps({ color }) {
    return { color };
}

export default connect(mapStateToProps, { colorChange })(NavBar);