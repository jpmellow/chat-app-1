import { getMessages } "@/services/getMessages";
import { useQuery } from "@tanstack/react-query";

export function MessagesList() {
    const messages = useQuery({
        queryKey: ["messages"],
        queryFn: getMessages,
        refetchOnWindowFocus: true,
        refetchInterval: 10000,
    });

    return (
        <div>
            {messages.data?.map((item, index) => (
                <div key={index}>
                    <b>{item.author}</b> - {item.message}
                </div>
            ))}
        </div>
    
    );
}