import React, { Component } from 'react'

function hoc(WrappedComponent) {
    return class A extends Component {
        render() {
            return (
                <div>
                    <WrappedComponent />
                </div>
            )
        }
    }
}

export default hoc