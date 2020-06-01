import React, { Component } from 'react';
import { Layout, Row, Col, Button } from 'antd';
import { SyncOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import MenuCpt from './component/menuCpt';
import '../../basic/css/admin.css';
const { Header, Footer, Content } = Layout;



export default class Blayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false
		}
	}


	//菜单收缩
	_toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}

	render () {
		let { collapsed } = this.state;
		return (
			<Layout>
				<Header className="head">
					<Row>
						<Col sm={24} md={3}>
							<div style={{ textAlign: 'center' }}>
								<SyncOutlined spin style={{ 'fontSize': '30px', color: '#fff' }} />
							</div>
						</Col>
						<Col sm={0} md={21} style={{ color: '#fff' }}>
							<Button type="primary" onClick={this._toggleCollapsed} style={{ marginBottom: 16 }}>
								{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
							</Button>
						</Col>
					</Row>
				</Header>
				<Content>
					<Row>
						<Col sm={24} md={3}>
							<div className="menu_nav">
								<MenuCpt collapsed={collapsed} />
							</div>
						</Col>
						<Col sm={0} md={21} style={{ color: '#000' }}>
							{this.props.children}
						</Col>
					</Row>
				</Content>
				<Footer className="foot">Footer</Footer>
			</Layout>
		)
	}
}