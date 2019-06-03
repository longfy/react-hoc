import React, { Component } from 'react'
import A from './A'

@A
class B extends Component {
    render() {
        return (
            <div>
                <h1>BBBBBBBBBBBBB</h1>
            </div>
        )
    }
}

export default B