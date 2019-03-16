import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ConfrimDialogSlide extends React.Component {
  state = {
    open: true
  };

  handleClose = () => {
    const { onCancel } = this.props;

    this.setState({ open: false });
    onCancel && onCancel();
  };

  handleOk = () => {
    const { onOk } = this.props;

    onOk && onOk();
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { title, content, okText, cancelText } = this.props;

    return (
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">{content}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              {cancelText}
            </Button>
            <Button onClick={this.handleOk} color="primary">
              {okText}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const confirm = ({ title, content, okText = '确定', cancelText = '取消', onOk, onCancel }) => {
  const el = document.createElement('div');
  const currentConfig = { title, content, okText, cancelText, onOk, onCancel };

  document.body.appendChild(el);
  const ConfrimDialogSlideEl = ({ props }) => ReactDOM.createPortal(<ConfrimDialogSlide {...props} />, el);

  function render(props) {
    ReactDOM.render(<ConfrimDialogSlideEl props={{ ...props }} />, el);
  }

  render(currentConfig);
};

Dialog.confirm = confirm;
export default Dialog;
