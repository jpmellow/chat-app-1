import { useState } from "react";
import { }

export function MessageInput() {
    const [message, setMessage] = useState("");

    const handleSend = 

    return (
        <div>
            <input value={message} on onChange={(ev)} => setMessage(ev.target.value)} />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}