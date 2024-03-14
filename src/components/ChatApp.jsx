import { MessageInput } from "@services/MessageInput";
import { MessagesList } from "@components/MessagesList";

export function ChatApp() {
    return (
        <>
            <MessageList />
            <MessageInput />
        </>
    );
}