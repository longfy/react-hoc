import React, { Component } from 'react'
import C from './C'

@C()
class D extends Component {
    render() {
        const { value } = this.props;
        return (
            <div>
                <input type="text" {...this.props} /><br/>
                <h1>D{value}</h1>
            </div>
        )
    }
}

export default D
