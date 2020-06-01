import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//前台页面
import Flayout from "../pages/foreground/layout";
import HomePage from "../pages/foreground/home/index";
import InfoPage from "../pages/foreground/info/index";
import ProjectPage from "../pages/foreground/project/index";
import BusinessPage from "../pages/foreground/business/index";
import BusinessPage2 from "../pages/foreground/business/index2";

//后台页面
import Blayout from "../pages/background/layout";
import ShowIndexPage from "../pages/background/showIndex/index";
import Ui1Page from "../pages/background/UI/index";
import Ui2Page from "../pages/background/UI/index2";
import Ui3Page from "../pages/background/UI/index3";

export default class RouterObj extends Component {
	render () {
		return (
			<Switch>
				<Route path="/admin" render={() =>
					<Blayout>
						<Route exact path="/admin" component={ShowIndexPage} />
						<Route path="/admin/ui1" component={Ui1Page} />
						<Route path="/admin/ui2" component={Ui2Page} />
						<Route path="/admin/ui3" component={Ui3Page} />
					</Blayout>
				} />
				<Route path="/" render={() =>
					<Flayout>
						<Route exact path="/" component={HomePage} />
						<Route path="/info" component={InfoPage} />
						<Route path="/project" exact render={() => {
							return <Redirect to="/index/ProjectPage" />
						}} />
						<Route path="/project/:id" component={ProjectPage} />
						<Route path="/project" exact render={() => {
							return <Redirect to="/index/ProjectPage" />
						}} />
						<Route path="/business" component={BusinessPage} />
						<Route path="/business2" component={BusinessPage2} />
					</Flayout>
				} />
			</Switch >
		)
	}
}
