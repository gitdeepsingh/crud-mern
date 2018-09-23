import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

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
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  }
});

class InventoryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    }
  }

  componentDidMount() {
    const url = 'http://localhost:4200/inventory';
    axios.get(url)
      .then((res) => {
        this.setState({
          inventory: res.data.products
        })
      }, (err) => { console.warn('Unable to fetch') });
  }

  generateProductList = () => {
    return this.state.inventory.map((x) => {
      return (
        <li key={x._id}>{x.prodName}</li>
      )
    })
  }

  render() {
    const { classes } = this.props
    return (
      <main className={classes.root}>
        <Grid container spacing={16}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>Code</CustomTableCell>
                  <CustomTableCell>Product</CustomTableCell>
                  <CustomTableCell numeric>Stock</CustomTableCell>
                  <CustomTableCell>Expiry Date</CustomTableCell>
                  <CustomTableCell>Action</CustomTableCell>
                  <CustomTableCell> </CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.inventory.map(row => {
                  return (
                    <TableRow className={classes.row} key={row._id}>
                      <CustomTableCell component="th" scope="row">
                        {row.code}
                      </CustomTableCell>
                      <CustomTableCell>{row.prodName}</CustomTableCell>
                      <CustomTableCell numeric>{row.stockCount}</CustomTableCell>
                      <CustomTableCell>{row.expiryDate}</CustomTableCell>
                      <CustomTableCell> </CustomTableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </main>
    )
  }
}

InventoryComponent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(InventoryComponent);
