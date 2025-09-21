import React, { useState, useEffect } from "react";

const Chatbot = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm Ayush's assistant. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const userMessage = inputMessage.trim();
    setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.response, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, something went wrong. Please try again later.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={`fixed z-50 ${isMobile && chatOpen ? 'inset-0 bg-black/30' : 'bottom-6 right-6'}`}>
      {chatOpen && (
        <div className={`bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col border border-gray-200 dark:border-gray-700 backdrop-blur-sm
             ${isMobile ? 
            'fixed inset-4 m-auto max-w-full max-h-screen' : 
            'w-[500px] h-[600px] mb-4'
          }`}>
          {/* Header */}
          <div className="p-4 bg-blue-600 text-white rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold text-base">Ayush's Assistant</h3>
                <p className="text-xs text-white/80">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-all duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
            {messages.map((msg, index) => {
              const isExpanded = expandedIndexes.includes(index);
              const shouldTruncate = msg.text.length > 200;
              const displayText =
                shouldTruncate && !isExpanded
                  ? msg.text.slice(0, 200) + "..."
                  : msg.text;

              return (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md border border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{displayText}</div>
                    {shouldTruncate && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className={`mt-2 text-xs underline hover:no-underline transition-all duration-200 ${
                          msg.sender === "user"
                            ? "text-white/80 hover:text-white"
                            : "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                        }`}
                      >
                        {isExpanded ? "Show less" : "Show more"}
                      </button>
                    )}
                  </div>
                  {msg.sender === "user" && (
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center ml-2 flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-semibold">
                        U
                      </span>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Loading animation */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-white text-sm">🤖</span>
                </div>
                <div className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
                    <div
                      className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white disabled:opacity-50 text-sm placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || inputMessage.trim() === ""}
                className="bg-blue-600 text-white px-4 py-3 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      {(!chatOpen || !isMobile) && (
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className={`bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 transform hover:rotate-12
            ${isMobile ? 
              'fixed bottom-6 right-6 w-14 h-14 z-50' : 
              'w-16 h-16'
            }`}
        >
          {chatOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default Chatbot;