import { MessageCircle } from "lucide-react";

function ChatButton() {
  return (
    <button className="chat-button" aria-label="Open chat">
      <MessageCircle size={22} />
    </button>
  );
}

export default ChatButton;