import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const tabArr = [{
  icon: 'icon-xiazai45',
  text: '首页',
  link: '/home'
},{
  icon: 'icon-fenlei',
  text: '分类',
  link: '/category'
},{
  icon: 'icon-gouwuche',
  text: '购物车',
  link: '/car'
},{
  icon: 'icon-wode',
  text: '我的',
  link: '/user'
}]

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default () => WrappedComponent => class Index extends Component {

  static displayName = `page(${getDisplayName(WrappedComponent)})`

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  itemChange = (i) => {
    this.setState({
      index: i
    })
  }

  render() {
    const url = window.location.href
    return (
      <div className="pages">
        <WrappedComponent/>
        <div className="tabbar">
          <div className="tabbar-container">
            {
              tabArr.map((item, i) => (
                <Link to={item.link} key={i} className={`tabbar-item${url.indexOf(item.link) > -1 ? ' active' : ''}`} onClick={() => this.itemChange(i)}>
                  <i className={`iconfont ${item.icon}`}></i>
                  <p>{item.text}</p>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}
