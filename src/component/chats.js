import { useParams } from "react-router-dom";
import ChatList from "./chatList";
import Messages from "./messages";

export default function Chats() {
    const params = useParams();

    return (
        <>
            <ChatList chatId={params.chatId} />
            <div className="app__field">
                {params.chatId ?
                    <Messages chatId={params.chatId} /> :
                    <div className="app__text">Выберите чат или создайте новый</div>
                }
            </div>
        </>
    );
}