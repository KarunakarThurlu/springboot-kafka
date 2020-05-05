import React, { Component } from 'react'

export default class componentName extends Component {
    constructor(props){
        super(props);
        this.state={count:0}
    }
    componentDidMount(){
        document.title=`clicked: ${this.state.count}`
    }
    componentDidUpdate(){
        document.title=`clicked: ${this.state.count}`
    }
    render() {
        return (
            <div>
                <h1>clicked {this.state.count} times</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Click</button>
            </div>
        )
    }
}
