import React, { Component } from 'react'

export default () => WrappedComponent => class C extends Component {

    static displayName = `NewComponent(${getDisplayName(WrappedComponent)})`;

    constructor (props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    changeInput = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        // const { ...newProps } = this.props;
        const newProps = {
            value: this.state.name,
            onChange: this.changeInput
        }
        return (
            <div>
                <WrappedComponent {...newProps} />
            </div>
        )
    }
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}