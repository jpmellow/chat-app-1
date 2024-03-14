export async function postMesage (message) {
    await fetch(
        "https://sturdy-space-adventure-vqjpvwg66xhj9q-5000.app.github.dev/messages",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
}