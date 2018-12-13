import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addReminder} from '../actions'
class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            text:''
        }
    }

    addReminder(){
        console.log('this.state',this.state);
        console.log('this',this);
        this.props.addReminder(this.state.text);
    }
    render(){
        return (
            <div>
                <div className='App'>
                    <div className='title'>
                        reminder pro
                    </div>
                    <div className='form-inline'>
                        <div className='form-group'>
                            <input
                                className='form-control'
                                placeholder='remind me this...'
                                onChange={event => this.setState({text:event.target.value})}
                            />

                        </div>
                        <button
                            type='button'
                            className='btn btn-success'
                            onClick={()=>this.addReminder()}
                        >Submit
                        </button>

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{addReminder}) (App);