import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    width: '100%',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

const CommentBox = ({ classes, content, onChange, ...rest }) => (
  <form className={classes.container} noValidate autoComplete="off">
    <TextField
      id="outlined-multiline-flexible"
      label="评论"
      multiline
      rowsMax="4"
      value={content}
      onChange={onChange}
      className={classes.textField}
      margin="normal"
      variant="outlined"
      {...rest}
    />
  </form>
  );

CommentBox.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withStyles(styles)(CommentBox);
