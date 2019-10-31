import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import "./Project.css";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default ({ project }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} style={{ minWidth: 256 }} align="left">
      <CardActionArea>
        {project.image && (
          <CardMedia
            className={classes.media}
            image={project.image}
            title={project.title}
          />
        )}
        <CardContent className="Project-content">
          <Typography gutterBottom variant="h5" component="h2">
            {project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
          <Grid className="Project-tech" container spacing={1}>
            {project.tech.map(tech => (
              <Grid item xs={6}>
                <Chip className="Project-tech-chip" size="small" label={tech} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions className="Project-actions">
        <Grid container justify="center">
          <Grid item align="center">
            {project.links.map(link => (
              <Button
                className="Project-action-button"
                size="small"
                color="primary"
                target="_blank"
                href={link.url}
              >
                {link.title}
              </Button>
            ))}
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
