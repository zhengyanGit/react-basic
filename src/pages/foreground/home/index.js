import React, { Component } from 'react';
import { Result, Button } from 'antd';

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			load: true
		}
	}
	render () {
		return (
			<div>
				<Result
					status="success"
					title="Successfully Purchased Cloud Server ECS!"
					subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
					extra={[
						<Button type="primary" key="console">
							Go Console
				</Button>,
						<Button key="buy">Buy Again</Button>,
					]}
				/>
				<Result
					status="success"
					title="Successfully Purchased Cloud Server ECS!"
					subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
					extra={[
						<Button type="primary" key="console">
							Go Console
				</Button>,
						<Button key="buy">Buy Again</Button>,
					]}
				/>
				<Result
					status="success"
					title="Successfully Purchased Cloud Server ECS!"
					subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
					extra={[
						<Button type="primary" key="console">
							Go Console
				</Button>,
						<Button key="buy">Buy Again</Button>,
					]}
				/>
			</div>
		)
	}
}