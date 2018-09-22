import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import * as appApi from '../api/appApi';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '10px'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

class AddProductComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      prodName: '',
      code: '',
      stockCount: '',
      expDate: ''
    }
  }

  handleChange = (id) => e => {
    this.setState({
      [id]: e.target.value
    })
  }


  onAddProduct = () => {
    const formData = {
      prodName: this.state.prodName,
      code: this.state.code,
      stockCount: this.state.stockCount,
      expDate: this.state.expDate
    }
    console.log(JSON.stringify(formData))
    console.log((this.state.expDate))
    appApi.addProduct(formData);
  }

  render() {
    const { classes } = this.props
    return (
      <main className={classes.root}>
        <Grid container spacing={16}>
          <form className={classes.container}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h1>Give Product Details</h1>
                <TextField
                  id="prodName"
                  label="Product Name"
                  className={classes.textField}
                  value={this.state.prodName}
                  onChange={this.handleChange('prodName')}
                  margin="normal"
                />
                <TextField
                  id="code"
                  label="Code"
                  className={classes.textField}
                  value={this.state.code}
                  onChange={this.handleChange('code')}
                  margin="normal"
                />
                <TextField
                  id="stockCount"
                  label="Quantity"
                  className={classes.textField}
                  value={this.state.stockCount}
                  onChange={this.handleChange('stockCount')}
                  margin="normal"
                />
                <TextField
                  id="expDate"
                  label="Expiry Date"
                  type="date"
                  value={this.state.expDate}
                  className={classes.textField}
                  onChange={this.handleChange('expDate')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button onClick={this.onAddProduct}>Add Product</Button>
              </Paper>
            </Grid>
          </form>
        </Grid>
      </main>
    )
  }
}

AddProductComponent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AddProductComponent);
