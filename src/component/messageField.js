import { useState, useCallback, useEffect, useRef } from "react";
import MessageItem from './messageItem';
import { ARR, BOT_NAME, BOT_TEXT } from '../const.js';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'

function MessageField() {
    const [messageArr, setMessageArr] = useState(ARR);
    const messFieldEl = useRef();

    const addMessage = useCallback((event) => {
        event.preventDefault();
        const messageEl = event.target.elements[0];
        if (!messageEl) return;
        if (messageEl.value) {
            setMessageArr([...messageArr, { text: messageEl.value, author: 'Я' }]);
            messageEl.classList.remove('error');
            messageEl.value = '';
        } else {
            messageEl.classList.add('error');
        }
        messageEl.focus();
    }, [messageArr]);


    useEffect(() => {
        let timerID = null;
        const lastAuthor = messageArr[messageArr.length - 1].author;
        if (lastAuthor && lastAuthor != BOT_NAME) {
            timerID = setTimeout(() => {
                setMessageArr([...messageArr, { text: lastAuthor + BOT_TEXT, author: BOT_NAME }]);
            }, 1000)
        }

        if (messFieldEl) {
            messFieldEl.current.scrollTop = messFieldEl.current.scrollHeight;
        }

        return () => {
            timerID ? clearTimeout(timerID) : null;
        }
    }, [messageArr]);


    const renderMessage = useCallback((message) => {
        return (<MessageItem text={message.text} author={message.author} />);
    }, [messageArr]);

    return (
        <div className="app__field">
            <div ref={messFieldEl} className="message__field">
                {messageArr.map(renderMessage)}
            </div>
            <form className="sendMess__form" onSubmit={addMessage}>
                <label htmlFor="message__input">Ваше сообщение:</label>
                <input type="text" name="message__input" placeholder="Введите текст сообщения"></input>
                <button type="submit"><i class="fas fa-share-square"></i></button>
            </form>
        </div >
    );
}

export default MessageField;