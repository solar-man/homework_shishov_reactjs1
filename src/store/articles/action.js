import { API_URL } from "../../const";

export const GET_ARTICLES = "ARTICLES::GET_ARTICLES";
export const GET_ARTICLES_REQUEST = "ARTICLES::GET_ARTICLES_REQUEST";
export const GET_ARTICLES_SUCCESS = "ARTICLES::GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAILURE = "ARTICLES::GET_ARTICLES_FAILURE";

export const getArticlesRequest = () => ({
    type: GET_ARTICLES_REQUEST,
});

export const getArticlesSuccess = (data) => ({
    type: GET_ARTICLES_SUCCESS,
    payload: data,
});

export const getArticlesFailure = (err) => ({
    type: GET_ARTICLES_FAILURE,
    payload: err,
});

export const getArticles = () => (dispatch) => {
    dispatch(getArticlesRequest());
    fetch(API_URL)
        .then((res) => res.json())
        .then((response) => dispatch(getArticlesSuccess(response)))
        .catch((err) => getArticlesFailure(err));

};