import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { TextField } from 'material-ui'
import SearchIcon from 'material-ui-icons/Search'
import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/Menu/MenuItem'
import Button from 'material-ui/Button'
import Card from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import { prototype } from 'react-transition-group/CSSTransition';
const styles = theme => ({
  card: {
    margin: 'auto',
    textAlign: 'center',
    paddingTop: 10,
    backgroundColor: '#80808024'
  },
  menu: {
    width: 200,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 130,
    verticalAlign: 'bottom',
    marginBottom: '20px'
  },
  searchField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
    marginBottom: '20px'
  },
  searchButton: {
    minWidth: '20px',
    height: '30px',
    padding: '0 8px'
  }
})
const userRole = ['admin', 'seller']
class Search extends Component {
  state = {
    category: '',
    searchKey:'',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  search=()=>{
     this.props.searchuser(this.state);
  }  

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.root} elevation={4}>
        <TextField
          id="Select user role"
          select
          label="Select user role"
          className={classes.textField}
          value={this.state.category}
          onChange={this.handleChange('category')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal">
          <MenuItem value="All">
            All
            </MenuItem>
          {userRole.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="search"
          label="Search Users"
          type="search"
          onKeyDown={this.enterKey}
          onChange={this.handleChange('searchKey')}
          className={classes.searchField}
          margin="normal"
        />
        <Button variant="raised" color={'primary'} className={classes.searchButton} onClick={this.search}>
          <SearchIcon />
        </Button>
        <Divider />
      </Paper>
    )
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  searchuser:PropTypes.func.isRequired,
}

export default withStyles(styles)(Search)
