import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Project from "./Project.js";
import { useProjectState } from "./project-context.js";
import "./ProjectList.css";

const GithubButton = () => (
  <Button className="ProjectList-button">
    github&nbsp;&nbsp;<i class="fas fa-external-link-alt"></i>
  </Button>
);

const ProjectList = () => {
  const projectState = useProjectState();

  return (
    <>
      <Grid container spacing={8}>
        <Grid item sm={12} align="right">
          <GithubButton />
        </Grid>
      </Grid>

      <Grid container spacing={2} justify="center">
        {projectState.projects.map(project => (
          <Grid item sm style={{ minWidth: 264 }} align="center">
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default React.memo(ProjectList);
