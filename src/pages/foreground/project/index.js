import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


export default class ProjectPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			load: true
		}
	}
	render () {
		console.log('this.props', this.props)
		return (
			<div>
				<div className="project-left">
					<Menu
					>
						<Menu.Item key="project1">
							<Link to="/project/child1">项目1</Link>
						</Menu.Item>
						<Menu.Item key="project2">
							<Link to="/project/child2">项目2</Link>
						</Menu.Item>
						<Menu.Item key="project3">
							<Link to="/project/child3">项目3</Link>
						</Menu.Item>
					</Menu>
				</div>
				<div className="project-right">
					project -> {this.props.match.params.id}
				</div>
			</div>
		)
	}
}