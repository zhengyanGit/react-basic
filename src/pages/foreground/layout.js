import React, { Component } from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import HeaderCpt from '../foreground/component/header';

const { Header, Footer, Content } = Layout;

export default class Flayout extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}



	render () {
		return (
			<Layout className="f-body">
				<Header>
					<div className="head-box">
						<div className="head-log"><Avatar size={50} icon={<UserOutlined />} /></div>
						<div className="head-nav">
							<HeaderCpt />
						</div>
					</div>
				</Header>
				<Content className="main">
					{this.props.children}
				</Content>
				<Footer className="foot">Footer</Footer>
			</Layout>
		)
	}
}



