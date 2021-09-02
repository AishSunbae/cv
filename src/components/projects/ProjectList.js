//rce
import React, { Component } from "react";
import Project from "./Project";
import PropTypes from "prop-types";

export class ProjectList extends Component {
    render() {
        return this.props.projects.map((project) => (
            <Project project={project}/>
        ));
    }
}

ProjectList.propTypes = {
    project: PropTypes.array.isRequired,
}

export default ProjectList;