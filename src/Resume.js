import React from "react";
import { Paper, Container, Chip, Grid } from "@material-ui/core";
import "./Resume.css";

const skills = [
  // back end
  "Java",
  "REST",
  "ORM",
  "MVC",
  "PHP",
  "MySQL",

  // front end
  "HTML",
  "CSS",
  "React",
  "Javascript",

  // mvc framework
  "Codeigniter",
  "Spring Boot",

  // project management
  "Gradle",
  "Git",
  "SVN",
  "Mercurial",

  // game dev
  "OpenGL",
  "LWJGL",
  "Android/LibGDX"
];

// front end
// back end
// project management

export default props => {
  return (
    <Container maxWidth="md">
      <Paper className="Resume-paper">
        <p>
          Tenacious problem-solver with 8+ years of experience in software
          design and development. Active maintainer of several open-source Java
          projects. Seeking to supplement indie game development earnings with
          part-time position or contract work.
        </p>
        <h1>Skills</h1>
        {skills.map(skill => (
          <Chip label={skill} style={{ marginRight: 4, marginBottom: 4 }} />
        ))}
        <h1>Experience</h1>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <strong>2011 - Current</strong>
          </Grid>
          <Grid item xs={12} sm={9}>
            <strong>Owner at SudoPlay Games</strong>
          </Grid>
          <Grid item xs={0} sm={3}></Grid>
          <Grid item xs={12} sm={9}>
            <ul>
              <li>Developed proprietary game engine with Java and OpenGL</li>
              <li>Implemented modern, deferred rendering graphics pipeline</li>
              <li>
                Designed and developed an entity component system framework
              </li>
              <li>
                Developed an open-source fork of Google’s Gson for use with TML
              </li>
              <li>
                Developed Joise, a Java port of C++ Accidental Noise Library
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <strong>2013 - 2015</strong>
          </Grid>
          <Grid item xs={12} sm={9}>
            <strong>Tutor at Umpqua Community College</strong>
          </Grid>
          <Grid item xs={0} sm={3}></Grid>
          <Grid item xs={12} sm={9}>
            <ul>
              <li>Assisted students in math, writing, and C.I.S.</li>
            </ul>
          </Grid>
        </Grid>
        <h1>Education</h1>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <strong>2008 - 2010</strong>
          </Grid>
          <Grid item xs={12} sm={9}>
            <strong>Umpqua Community College</strong>
          </Grid>
          <Grid item xs={0} sm={3}></Grid>
          <Grid item xs={12} sm={9}>
            <ul>
              <li>A.A.S. in Computer Information Systems</li>
              <li>Supplemental courses in Linear Algebra and Calculus</li>
            </ul>
          </Grid>
        </Grid>
        <h1>Achievements</h1>
        <Grid container>
          <Grid item xs={12}>
            <ul>
              <li>CRLA Master Certified Tutor, Level III</li>
              <li>
                Cisco Certified Entry Level Networking Technician (expired 2012)
              </li>
              <li>
                Outstanding Student in recognition of accomplishment in Writing
                from U.C.C.
              </li>
            </ul>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
