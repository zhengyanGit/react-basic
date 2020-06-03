import React, { Component } from 'react';
import { Layout, Row, Col, Button, Avatar } from 'antd';
import { SyncOutlined, MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import MenuCpt from './component/menuCpt';
import '../../basic/css/admin.css';

const { Header, Footer, Content } = Layout;



export default class Blayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
			width: 265
		}
	}


	//菜单收缩
	_toggleCollapsed = () => {
		console.log('this.state.collapsed', this.state.collapsed);

		this.setState({
			width: !this.state.collapsed ? 80 : 265,
			collapsed: !this.state.collapsed,
		});
	}

	render () {
		let { collapsed } = this.state;
		return (
			<Layout>
				<Header className="head">
					<div className="head-left" style={{ width: this.state.width + 'px' }}>
						<SyncOutlined spin style={{ 'fontSize': '30px', color: '#fff' }} />
					</div>
					<div className="head-right">
						<Button className="upDown" type="primary" onClick={this._toggleCollapsed}>
							{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
						</Button>
						<div className="userBox">
							<Avatar size={40} icon={<UserOutlined />} />
							<span className="userName">zhangsan</span>
						</div>
					</div>
				</Header>
				<Content>
					<div className="menu_nav" style={{ width: this.state.width + 'px' }}>
						<MenuCpt collapsed={collapsed} />
					</div>
					<div className="contain-box" style={{ paddingLeft: this.state.width + 'px' }}>
						{this.props.children}
					</div>
				</Content>
				<Footer className="foot">Footer</Footer>
			</Layout >
		)
	}
}