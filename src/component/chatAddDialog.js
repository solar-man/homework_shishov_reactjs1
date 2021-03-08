import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import AddCommentRoundedIcon from '@material-ui/icons/AddCommentRounded';
import { useState, useCallback } from 'react';
import { CHAT_TYPE } from '../const';

export default function ChatAddDialog({ onAddChat }) {
    const [open, setOpen] = useState(false);
    const [chatName, setChatName] = useState('');
    const [chatType, setChatType] = useState(CHAT_TYPE[0]);

    const renderChatTypes = useCallback((type) =>
        <MenuItem value={type}>
            {type}
        </MenuItem>
        , []);

    const handleClickOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const handleChangeType = useCallback((event) => {
        setChatType(event.target.value);
    }, []);

    const handleChangeName = useCallback((event) => {
        setChatName(event.target.value);
    }, []);

    const handleApply = useCallback(() => {
        if (chatName && chatName.trim()) {
            onAddChat(chatName, chatType);
        }
        handleClose();
    }, [onAddChat, chatName, chatType]);

    return (
        <div className="chat__add">
            <Button onClick={handleClickOpen} startIcon={<AddCommentRoundedIcon />}>
                Add new Chat
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Добавить новый чат</DialogTitle>
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
                    <TextField value={chatType} onChange={handleChangeType}
                        select
                        margin="dense"
                        fullWidth
                        helperText="Выберите тип чата"
                    >
                        {CHAT_TYPE.map(renderChatTypes)}
                    </TextField>
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