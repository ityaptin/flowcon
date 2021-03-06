/**
 * Добавляет-удаляет пользователей общей базы
 *
 * @module ShareArea
 *
 * Created by Evgeniy Malyarov on 26.10.2018.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import withStyles from 'metadata-react/styles/paper600';
import BtnsDialog from './BtnsDialog';
import BasesTable from './BasesTable';

function getRows(rows, db) {
  return rows.map((user) => {
    return user.value.includes(db) ? Object.assign({checked: true}, user) : user;
  });
}

class ShareArea extends BtnsDialog {

  onToggle = (row) => {
    const {name, refresh} = this.props;
    this.setState({query: true});
    return $p.superlogin[row.checked ? 'unshare_db' : 'share_db'](row.name, name)
      .then(() => {
        this.setState({query: false});
        refresh();
      })
      .catch((err) => {
        this.setState({query: false});
        const error = err.response && err.response.data.message || err.message;
        $p.ui.dialogs.alert({title: 'Ошибка добавления базы', text: error});
      });
  };

  render() {
    let {state: {open, error, query}, props} = this;
    if(!props.name) {
      error = 'Не указана область данных';
    }
    return <div>
      <IconButton title="Пользователи общей базы" onClick={this.handleClickOpen}><ShareIcon/></IconButton>
      <Dialog
        open={open}
        onClose={this.handleClose}
      >
        <DialogTitle>Пользователи области данных</DialogTitle>
        <DialogContent>
          <TextField
            label="Область"
            value={props.name}
            margin="dense"
            onChange={this.handleChange}
            InputProps={{
              readOnly: true,
            }}
          />
          {props.name && <BasesTable
            title="Пользователи"
            className={query ? props.classes.disabled : ''}
            rows={getRows(props.rows, props.name)}
            onToggle={this.onToggle}
            check
            multi
          />}
          <DialogContentText>
            {error}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Отмена
          </Button>
        </DialogActions>
      </Dialog>
    </div>;
  }

}

ShareArea.propTypes = {
  name: PropTypes.string,
  refresh: PropTypes.func,
};

export default withStyles(ShareArea);
