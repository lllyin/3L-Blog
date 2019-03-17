import React from 'react';
import green from '@material-ui/core/colors/green';
import classNames from 'classnames';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './Content.less';

const jss = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
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
  <Fade in className={classNames({ [classes.loading]: loading })}>
    <section className={classNames(`${styles.content} ${className}`, classes.wrapper)} {...rest}>
      <div>{children}</div>
      {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
    </section>
  </Fade>
);

export default withStyles(jss)(Content);
