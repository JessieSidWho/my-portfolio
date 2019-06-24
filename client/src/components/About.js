import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorChange } from '../actions';
import mongo from './../images/iconfinder_mongodb_1012822.png';
import jquery from './../images/iconfinder_jquery_252091 (2).png';
import ex from './../images/expressjslogo.png';

class About extends Component {



    render() {
        return (
            <div className={`row ${this.props.color}`}>
                <div className="col-md-6 mb-5 mt-3" style={{ fontFamily: 'Raleway', fontSize: '6vw' }}>
                        <div className='text-center pb-2' style={{minWidth: '360px'}}>
                        <i class="fas fa-at mr-2"></i>Handles
                        </div>

                        <div className="row justify-content-md-center mb-3">
                            <div className='col-md-12 text-center '>
                                
                                    <p><a className='' href='https://github.com/jessiesidwho'><i class="fab fa-github" style={{color: '#6cc644'}}></i> <span className={`${this.props.color} h1 align-middle`} style={{fontFamily: 'Catamaran'}}>GitHub</span></a></p>
                                    <p><a className='' href='https://twitter.com/jessiesidwho'><i class="fab fa-twitter-square" style={{color: '#00aced'}}></i> <span className={`${this.props.color} h1 align-middle`} style={{fontFamily: 'Catamaran'}}>Twitter</span></a></p>
                                    {/* <a className='' href=''></a> */}
                                
                            </div>
                        </div>

                    </div>

                <div className={`col-md-6 mb-5 mt-3 text-center`}>
                    <div className='text-center pb-2' style={{ fontFamily: 'Raleway', fontSize: '6vw' }}>
                        <i class="fas fa-code-branch mr-2"></i>Skillset
                    </div>

                    <div className='row justify-content-sm-center'>
                        <h1 className='col-sm-2 border p-2 m-0 text-danger bg-light'><i class="fab fa-html5"></i></h1>
                        <h1 className='col-sm-2 border p-2 m-0 text-primary bg-light'><i class="fab fa-css3"></i></h1>
                        <h1 className='col-sm-2 border p-2 m-0 text-warning bg-light'><i class="fab fa-js-square"></i></h1>
                    </div>

                    <div className='row justify-content-sm-center'>
                    <h2 className='col-sm-2 border p-2 m-0 bg-light' style={{color: 'purple'}}><i class="fab fa-bootstrap"></i></h2>
                    <h3 className='col-sm-2 border p-2 m-0 bg-light'><img className='m-0' src={jquery} alt='jquery logo'/></h3>
                    </div>

                    <div className='row justify-content-sm-center'>
                        <h4 className='col-sm-3 border p-2 pt-3 m-0 bg-light'><img className='' src={mongo} alt='mongodb logo'/></h4>
                        <h4 className='col-sm-2 border p-2 pt-3 pb-3 m-0 text-warning bg-light'><img src={ex} height='48px' width='48px' alt='express logo'/></h4>
                        <h1 className='col-sm-2 border p-2 pt-3 pb-3 m-0 text-info bg-light'><i class="fab fa-react"></i></h1>
                        <h1 className='col-sm-2 border p-2 pt-3 m-0 text-dark bg-light'><i class="fab fa-node"></i></h1>
                    </div>

                    <div className='row justify-content-sm-center'>
                        <h1 className='col-sm-3 border p-2 m-0 text-dark bg-light'><i class="fab fa-git-square mr-2"></i><i class="fas fa-terminal"></i></h1>
                        <h1 className='col-sm-2 border p-2 m-0 text-dark bg-light'><i class="fab fa-github-alt"></i></h1>
                        <h1 className='col-sm-2 border p-2 m-0 text-dark bg-light'><i class="fab fa-git-alt"></i></h1>
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