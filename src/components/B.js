import React, {Component} from 'react'
import A from './A'

@A()
class B extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  render () {
    return (
      <div>
        <input type="text" {...this.props} />
        姓名：{ this.props.name }
        性别：{ this.props.age }
        年龄：{ this.props.sex }
        <div style={{backgroundColor: 'red', height: '100px'}}></div><br/>
        <div style={{backgroundColor: 'red', height: '100px'}}></div><br/>
        <div style={{backgroundColor: 'red', height: '100px'}}></div><br/>
        <div style={{backgroundColor: 'red', height: '100px'}}></div><br/>
      </div>
    )
  }

}

export default B