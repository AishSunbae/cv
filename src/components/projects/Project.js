//rce
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//import ProjectItem from './ProjectItem';

export class Project extends Component {

    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px"
        }
    }

    componentWillReceiveProps(newProps) {

    if(newProps === undefined) {
       console.log("new title is", this.state.projects);
       console.log("new body content is", this.state.projects);
	} else {
		console.log("not undefined");
	}
}

    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <Link to={{ pathname: `/projects/${this.props.project}`, query: '/projects' }}>
                        Donec interdum gravida sodales.{this.props.project}</Link>
                </p>
            </div>
        )
    }
}

export default Project
