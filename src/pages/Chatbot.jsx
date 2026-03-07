import { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {

    if (!message) return;

    try {
     const res = await axios.post(
  "http://localhost:5000/api/chat",
  { message: message }
);

   setChat((prevChat) => [
  ...prevChat,
  {
    user: message,
    bot: res.data.response
  }
]);

      setMessage("");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f6f4] p-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        AI Wellness Companion
      </h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">

        <div className="space-y-4 mb-6">

          {chat.map((msg, index) => (
            <div key={index}>

              <p className="font-semibold">You:</p>
              <p className="mb-2">{msg.user}</p>

              <p className="font-semibold text-teal-600">Companion:</p>
              <p>{msg.bot}</p>

            </div>
          ))}

        </div>

        <div className="flex gap-3">

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border p-2 rounded-lg"
            placeholder="Talk to your companion..."
          />

          <button
            onClick={sendMessage}
            className="bg-teal-600 text-white px-4 rounded-lg"
          >
            Send
          </button>

        </div>

      </div>
    </div>
  );
};

export default Chatbot;