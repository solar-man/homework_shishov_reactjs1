import { useRef, useEffect, useState } from "react";
import { BOT_NAME } from '../const.js';

function MessageItem(props) {
    const messItemEl1 = useRef();
    const messItemEl2 = useRef();
    const [author, setAuthor] = useState(props.author);

    useEffect(() => {
        if (messItemEl1 && messItemEl2) {
            if (author == BOT_NAME) {
                messItemEl1.current.classList.add('robot');
                messItemEl2.current.classList.add('robot');
                setAuthor(<i class="fas fa-user-secret"></i>);
            }
        }
    }, [author]);

    return (
        <div className="message__item">
            <div ref={messItemEl1} className="message__author">
                {author}
            </div>
            <div ref={messItemEl2} className="message__text">
                {props.text}
            </div>
        </div>
    );
}

export default MessageItem;