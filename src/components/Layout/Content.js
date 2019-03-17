import React from 'react';
import green from '@material-ui/core/colors/green';
import classNames from 'classnames';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const jss = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  content: {
    position: 'relative',
    paddingLeft: 15,
    paddingRight: 15,
    '@media (min-width: 992px)': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 900,
      margin: 'auto',
      padding: '0 0'
    }
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative'
  },
  loading: {
    opacity: 0.5,
    filter: 'blur(1px)'
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  },
  buttonProgress: {
    // color: green[500],
    position: 'absolute',
    top: '20vh',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
});

const Content = ({ children, className, classes, loading = false, ...rest }) => (
  <Fade in className={classNames(className, classes.content, classes.wrapper, { [classes.loading]: loading })}>
    <div {...rest}>
      <div className='ly-content-wrap'>{children}</div>
      {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
    </div>
  </Fade>
);

export default withStyles(jss)(Content);
