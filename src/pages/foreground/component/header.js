import React, { Component } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
const { SubMenu } = Menu;

class HeaderCpt extends Component {
	constructor(props) {
		super(props);
		console.log('props-000', props)
		this.state = {
			current: this._getCurrent(props.location)
		}
	}

	_getCurrent = (location) => {
		let lsArr = location.pathname.split('/');
		console.log('lsArr[1]', lsArr[1])
		return lsArr[1] == '' ? 'home' : lsArr[1]
	}

	_handleClick = e => {
		this.setState({
			current: e.key
		});
	};

	render () {
		return (
			<Menu theme="dark" onClick={this._handleClick} selectedKeys={[this.state.current]} mode="horizontal">
				<Menu.Item key="home" icon={<HomeOutlined />}>
					<Link to="/">首页</Link>
				</Menu.Item>
				<Menu.Item key="info" icon={<AppstoreOutlined />}>
					<Link to="/info">简介</Link>
				</Menu.Item>
				<SubMenu key="project" icon={<SettingOutlined />} title="项目">
					<Menu.Item key="project:1">
						<Link to="/project/child1">项目 1</Link>
					</Menu.Item>
					<Menu.Item key="project:2">
						<Link to="/project/child2">项目 2</Link>
					</Menu.Item>
					<Menu.Item key="project:3">
						<Link to="/project/child3">项目 3</Link>
					</Menu.Item>
				</SubMenu>
				<SubMenu key="business" icon={<SettingOutlined />} title="业务概况">
					<Menu.Item key="setting:1">
						<Link to="/business">业务概况 1</Link>
					</Menu.Item>
					<Menu.Item key="setting:2">
						<Link to="/business2">业务概况 2</Link>
					</Menu.Item>
				</SubMenu>
				<Menu.Item key="alipay">
					<a href="https://ant.design" target="_blank" rel="noopener noreferrer">更多</a>
				</Menu.Item>
				<Menu.Item key="admin">
					<Link to="/admin">后台管理</Link>
				</Menu.Item>
			</Menu>
		)
	}
}

export default withRouter(HeaderCpt)