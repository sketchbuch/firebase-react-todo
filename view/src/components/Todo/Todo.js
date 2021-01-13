import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';

const styles = ((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
})
);

class TodoComp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Hello I am todo
            </Typography>
      </main>
    )
  }
}

export const Todo = withStyles(styles)(TodoComp);