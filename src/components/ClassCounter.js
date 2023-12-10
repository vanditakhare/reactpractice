import React, { Component } from 'react'

class ClassCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      coun1:0
       
    }
  }
  increCo=()=>{
    this.setState ({
      count:this.state.count+1
    })
  }
  
  render() {
    return (
      <div>
        <button inClick={this.increCo}>count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter
