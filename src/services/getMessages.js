export async function{getMessage} {
    const response = fetch(
        "https://sturdy-space-adventure-vqjpvwg66xhj9q-5000.app.github.dev/messages"
    );
    const data = await response.json();
    return data;
}
