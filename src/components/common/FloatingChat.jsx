// import { useState, useEffect, useRef } from "react";

// function FloatingChat() {
//   const [open, setOpen] = useState(false);
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hello 👋 I am Zenova AI Assistant. How can I help you today?" }
//   ]);
//   const [typing, setTyping] = useState(false);

//   const chatEndRef = useRef(null);

//   // Auto scroll fix
//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // 🧠 Smart AI Logic
//   const generateReply = (userMsg) => {
//     const msg = userMsg.toLowerCase();

//     if (msg.includes("name"))
//       return "I am Zenova AI Assistant 🤖. I help customers with property details, pricing, EMI and bookings.";

//     if (msg.includes("price"))
//       return "Our luxury properties start from ₹50 Lakhs and go up to ₹5 Crore depending on location and amenities. Would you like premium listings?";

//     if (msg.includes("yes"))
//       return "Great 😊 Please tell me your preferred location so I can suggest the best properties.";

//     if (msg.includes("location"))
//       return "We have premium properties in Lucknow, Delhi, Mumbai and Dubai.";

//     if (msg.includes("emi"))
//       return "Yes 👍 We provide EMI options. You can calculate EMI directly on our property page.";

//     if (msg.includes("contact"))
//       return "You can call us at +91 9876543210 or email support@zenova.com.";

//     if (msg.includes("list"))
//       return "Here are some premium listings:\n• Luxury Sky Villa\n• Downtown Premium Apartment\n• Palm Heights Dubai";

//     return "That’s interesting 😊 Could you please provide a bit more detail so I can assist you better?";
//   };

//   const sendMessage = () => {
//     if (!message.trim()) return;

//     const userMessage = { sender: "user", text: message };

//     setMessages((prev) => [...prev, userMessage]);
//     setMessage("");
//     setTyping(true);

//     setTimeout(() => {
//       const botReply = {
//         sender: "bot",
//         text: generateReply(message)
//       };

//       setMessages((prev) => [...prev, botReply]);
//       setTyping(false);
//     }, 1000);
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="fixed bottom-6 right-6 bg-gradient-to-r from-yellow-400 to-yellow-600 
//         text-white px-6 py-3 rounded-full shadow-2xl hover:scale-110 transition z-50"
//       >
//         Chat
//       </button>

//       {/* Chat Box */}
//       <div
//         className={`fixed bottom-20 right-6 w-80 h-[450px] 
//         bg-white dark:bg-gray-900 rounded-2xl shadow-2xl 
//         flex flex-col z-50 transition-all duration-300
//         ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}`}
//       >
//         {/* Header */}
//         <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-3 text-white flex justify-between rounded-t-2xl">
//           <span>Zenova AI Assistant</span>
//           <button onClick={() => setOpen(false)}>✖</button>
//         </div>

//         {/* Messages */}
//         <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`p-2 rounded-lg max-w-[75%] whitespace-pre-line ${
//                 msg.sender === "user"
//                   ? "bg-yellow-100 ml-auto text-right"
//                   : "bg-gray-200 dark:bg-gray-700"
//               }`}
//             >
//               {msg.text}
//             </div>
//           ))}

//           {typing && (
//             <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg w-20 animate-pulse">
//               typing...
//             </div>
//           )}

//           <div ref={chatEndRef}></div>
//         </div>

//         {/* Input */}
//         <div className="flex border-t dark:border-gray-700">
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-1 p-2 outline-none bg-transparent"
//             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           />
//           <button
//             onClick={sendMessage}
//             className="bg-yellow-500 text-white px-4"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }


// export default FloatingChat;



import { useState, useEffect, useRef } from "react";

function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello 👋 I am Zenova AI Assistant. How can I help you today?" }
  ]);
  const [typing, setTyping] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { role: "user", content: message };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setMessage("");
    setTyping(true);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer YOUR_API_KEY_HERE",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "mistralai/mistral-7b-instruct:free",
          messages: updatedMessages
        })
      });

      const data = await response.json();

      const botReply = {
        role: "assistant",
        content: data.choices[0].message.content
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, AI is temporarily unavailable." }
      ]);
    }

    setTyping(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-yellow-400 to-yellow-600 
        text-white px-6 py-3 rounded-full shadow-2xl hover:scale-110 transition z-50"
      >
        Chat
      </button>

      {/* Chat Box */}
      <div
        className={`fixed bottom-20 right-6 w-80 h-[450px] 
        bg-white dark:bg-gray-900 rounded-2xl shadow-2xl 
        flex flex-col z-50 transition-all duration-300
        ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-3 text-white flex justify-between rounded-t-2xl">
          <span>Zenova AI Assistant</span>
          <button onClick={() => setOpen(false)}>✖</button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg max-w-[75%] whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-yellow-100 ml-auto text-right"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              {msg.content}
            </div>
          ))}

          {typing && (
            <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg w-20 animate-pulse">
              typing...
            </div>
          )}

          <div ref={chatEndRef}></div>
        </div>

        {/* Input */}
        <div className="flex border-t dark:border-gray-700">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..." 
            className="flex-1 p-2 outline-none bg-transparent"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-yellow-500 text-white px-4"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default FloatingChat;