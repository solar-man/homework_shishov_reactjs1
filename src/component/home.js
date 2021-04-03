import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../store/articles/action";
import { STATUSES } from "../const";

export default function Home() {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.articles.articles);
    const articlesRequest = useSelector(state => state.articles.request);

    useEffect(() => {
        dispatch(getArticles());
    }, [dispatch]);

    const renderArticle = useCallback((article) => (
        <div>
            <h4>{article.title}</h4>
            <span>{article.summary}</span>
        </div>
    ), []);

    if (articlesRequest === STATUSES.REQUEST) {
        return <h3>Loading</h3>
    }

    if (articlesRequest === STATUSES.FAILURE) {
        return <h3>ERROR</h3>
    }
    return (
        <div className="app__field">
            <div className='data__field'>
                <div className="home__text">
                    Home
                </div>
                <Divider />
                <div className="home__link">
                    <Link to='/profile'> Мой профиль</Link>
                    <Link to='/chats'> Чаты</Link>
                </div>
            </div>
            <div className='data__field'>
                <div className='data__articles'>
                    {articles.map(renderArticle)}
                </div>
            </div>
            
        </div >
    );
}