import { MessageInput } from "./MessageInput";
import { MessagesList } from "./MessagesList";

export function ChatApp() {
    return (
        <>
            <MessagesList />
            <MessageInput />
        </>
    );
}