import React, {Component} from 'react'

export default () => WrappedComponent => class A extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  
  changeInput = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render () {
    const { age, ...otherProps} = this.props;
    const newProps = {
      value: this.state.value,
      onChange: this.changeInput
    }
    return (
      <div>
        <WrappedComponent sex={'男'} {...otherProps} {...newProps} />
      </div>
    )
  }
}