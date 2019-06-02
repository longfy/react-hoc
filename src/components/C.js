import React, {Component} from 'react'
import A from './A'

@A()
class C extends Component {
  render () {
    return (
      <div>
        <input type="text" {...this.props} />
        <div style={{backgroundColor: 'blue', width: '50%', float: 'left',height: '100px'}}></div><br/>
        <div style={{backgroundColor: 'blue', width: '50%', float: 'left',height: '100px'}}></div><br/>
        <div style={{backgroundColor: 'blue', width: '50%', float: 'left',height: '100px'}}></div><br/>
        <div style={{backgroundColor: 'blue', width: '50%', float: 'left',height: '100px'}}></div><br/>
        <div style={{clear: 'both'}}></div>
      </div>
    )
  }

}

export default C