import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./Header.css";

const ProjectButton = ({ history, pathname }) => (
  <Button
    className={
      "Header-button Header-button-projects" +
      (pathname === "/projects" ? " selected" : "")
    }
    onClick={() => history.push("/projects")}
  >
    <Grid container>
      <Grid item xs={12}>
        <i className="fas fa-code-branch fa-2x"></i>
      </Grid>
      <Grid item xs={12}>
        projects
      </Grid>
    </Grid>
  </Button>
);

const ResumeButton = ({ history, pathname }) => (
  <Button
    className={
      "Header-button Header-button-resume" +
      (pathname === "/resume" ? " selected" : "")
    }
    onClick={() => history.push("/resume")}
  >
    <Grid container>
      <Grid item xs={12}>
        <i className="fas fa-file-alt fa-2x"></i>
      </Grid>
      <Grid item xs={12}>
        resume
      </Grid>
    </Grid>
  </Button>
);

const ContactButton = ({ history, pathname }) => (
  <Button
    className={
      "Header-button Header-button-contact" +
      (pathname === "/contact" ? " selected" : "")
    }
    onClick={() => history.push("/contact")}
  >
    <Grid container>
      <Grid item xs={12}>
        <i className="fas fa-envelope fa-2x"></i>
      </Grid>
      <Grid item xs={12}>
        contact
      </Grid>
    </Grid>
  </Button>
);

const GithubButton = () => (
  <Button className="Header-button Header-button-github">
    <Grid container>
      <Grid item xs={12}>
        <i className="fab fa-github fa-2x"></i>
      </Grid>
      <Grid item xs={12}>
        github&nbsp;<i class="fas fa-external-link-alt"></i>
      </Grid>
    </Grid>
  </Button>
);

export default props => {
  const { history, location } = props;
  const { pathname } = location;
  return (
    <header>
      <h1>Jason Taylor</h1>
      <ProjectButton history={history} pathname={pathname} />
      <ResumeButton history={history} pathname={pathname} />
      <ContactButton history={history} pathname={pathname} />
    </header>
  );
};
