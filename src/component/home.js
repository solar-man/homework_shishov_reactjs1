import { Link } from 'react-router-dom';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Divider from '@material-ui/core/Divider';

export default function Home() {
    return (
        <div className="app__field">
            <div className='data__field'>
                <div className="home__text">
                Здравствуйте!
                </div>
                <Divider />
                <div className="home__link">
                    <Link to='/profile'>Мой профиль</Link>
                    <Link to='/chats'>Чаты</Link>
                </div>
            </div>
        </div >
    );
}