import { useEffect, useState } from 'react'
import io from 'socket.io-client'

var socket;

function ChatScreen({id,name}) {
    const [chats, setChats] = useState([]);
    
    useEffect(() => {
        socket = io.connect(`http://localhost:5000?cred={"id":"${id}","name":"tushar"}`)
        socket.on('chatFromServer', (data) => {
            setChats((prev) => {
                return [...prev, data];
            })
        })
    }, [])
    
    function sendMessage() {
        const data = document.getElementById('message-box').value;
        socket.emit('chatFromClient',data);
        // setChats((prev) => {
        //     return [...prev, `${name} : ${data}`];
        // })
    }

    return (
        <div>
            <input placeholder='Message' id='message-box'></input>
            <button onClick={sendMessage}>Send</button>
            {chats.map((ele) => {
                return <p>{ ele}</p>
            })}
        </div>
    )
}

export default ChatScreen