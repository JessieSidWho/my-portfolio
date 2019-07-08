import React, { Component } from 'react';
import { connect } from 'react-redux';
import { footerColor } from '../actions';

class Footer extends Component {

    render() {
        return (
            <footer className={`footer navbar-fixed-bottom ${this.props.footer} justify-content-md-center`}>             
                 <div className=' text-center pt-3 pb-2'>
                     <a className='mr-2' href='https://github.com/jessiesidwho'><i class="fab fa-github" style={{ color: '#6cc644', fontSize: '40px' }}></i> <span className={`h1 align-middle`} style={{ fontFamily: 'Catamaran' }}></span></a>
                     <a className='ml-2' href='https://twitter.com/jessiesidwho'><i class="fab fa-twitter-square" style={{ color: '#00aced', fontSize: '40px' }}></i> <span className={`h1 align-middle`} style={{ fontFamily: 'Catamaran' }}></span></a>
                 </div>
            </footer>
        );
    }
}

function mapStateToProps({ footer }) {
    return { footer };
}

export default connect(mapStateToProps, { footerColor })(Footer);