import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

export default function Header() {
    const profile = useSelector(store => store.profile);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return (
        <div className="header">
            <div className='header__menu'>
                <IconButton
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MenuRoundedIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                        <MenuItem onClick={handleClose}><Link to="/">Главная</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/chats">Чаты</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/profile">Профиль</Link></MenuItem>
                </Menu>
            </div>
            <div className='header__title'>Вас приветствует My CHATS!
                </div>
        </div>
    );
}