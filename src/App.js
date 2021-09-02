import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import './App.css';
import ProjectList from "./components/projects/ProjectList";
import ProjectItem from "./components/projects/ProjectItem";
class App extends Component {
	state = {
		projects: [{
			name: "Lorem Ipsum",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		},
			{
				name: "asd",
				description: "asdasd"
		}]
	}

	render() {
		return (
			<Router>
				<div className="App">
					<div className="Container">
						<Header />
						<Route exact path="/" render={props =>
						(<React.Fragment>
							<ProjectList projects={this.state.projects} />
						</React.Fragment>
						)} />
						<Route path="/about" component={About} />
						<Route name="projects" path="/projects/:name" projects={this.state.projects} component={ProjectItem} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
