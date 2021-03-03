import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCommentRoundedIcon from '@material-ui/icons/AddCommentRounded';
import { useState, useCallback } from 'react';

export default function ChatAddDialog({ onAddChat }) {
    const [open, setOpen] = useState(false);
    const [chatName, setChatName] = useState('');

    const handleClickOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);


    const handleChangeName = useCallback((event) => {
        setChatName(event.target.value);
    }, []);

    const handleApply = useCallback(() => {
        if (chatName) {
            onAddChat(chatName);
        }
        handleClose();
    }, [onAddChat, chatName]);

    return (
        <div className="chat__add">
            <Button onClick={handleClickOpen} startIcon={<AddCommentRoundedIcon />}>
                Добавить чат
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Новый чат</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Чтобы добавить чат, заполните необходимые поля
                    </DialogContentText>
                    <TextField required value={chatName} onChange={handleChangeName}
                        autoFocus
                        margin="dense"
                        label="Название"
                        type="text"
                        fullWidth
                        helperText="Введите название"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >
                        Отмена
                    </Button>
                    <Button onClick={handleApply} >
                        Добавить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}