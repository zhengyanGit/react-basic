import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

export default class MenuCpt extends React.Component {


	constructor(props) {
		super(props);
		console.log('1221', props)
		this.state = {
			collapsed: this.props.collapsed
		}
	}

	handleClick = e => {
		console.log('click ', e);
	};



	render () {
		console.log('render', this.props.collapsed)
		return (
			<Menu
				onClick={this.handleClick}
				defaultSelectedKeys={['1']}
				mode="inline"
				inlineCollapsed={this.props.collapsed}
			>
				<SubMenu
					key="sub1"
					title={
						<span>
							<MailOutlined />
							<span>UI组建</span>
						</span>
					}
				>
					<Menu.Item key="1">
						<Link to="/admin/ui1">UI组建1</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Link to="/admin/ui2">UI组建2</Link>
					</Menu.Item>
					<Menu.Item key="3">
						<Link to="/admin/ui3">UI组建3</Link>
					</Menu.Item>
				</SubMenu>
				<SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
					<Menu.Item key="5">Option 5</Menu.Item>
					<Menu.Item key="6">Option 6</Menu.Item>
					<SubMenu key="sub3" title="Submenu">
						<Menu.Item key="7">Option 7</Menu.Item>
						<Menu.Item key="8">Option 8</Menu.Item>
					</SubMenu>
				</SubMenu>
				<SubMenu
					key="sub4"
					title={
						<span>
							<SettingOutlined />
							<span>用户管理</span>
						</span>
					}
				>
					<Menu.Item key="9">用户列表</Menu.Item>
					<Menu.Item key="10">新增用户</Menu.Item>
				</SubMenu>
			</Menu>
		);
	}
}