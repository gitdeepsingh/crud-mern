import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '10px'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class InventoryComponent extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    const { classes } = this.props
    return (
      <main className={classes.root}>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Oh Yeahh !</Paper>
          </Grid>
        </Grid>
      </main>
    )
  }
}

InventoryComponent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(InventoryComponent);
