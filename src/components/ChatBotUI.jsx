import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

const ChatBotUI = ({ onClose }) => {
    const [userTyping, setUserTyping] = useState(false);
    const [typingTimeout, setTypingTimeout] = useState(null);

    // Handler to detect typing
    const handleTyping = (e) => {
        if (e.target.value.length > 0) {
            setUserTyping(true);
            clearTimeout(typingTimeout);
            const timeout = setTimeout(() => setUserTyping(false), 1500); // 1.5s after last key
            setTypingTimeout(timeout);
        } else {
            setUserTyping(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-24 sm:bottom-48 right-2 sm:right-6 w-[90vw] sm:w-[360px] max-h-[80vh] sm:max-h-[500px] rounded-xl 
             bg-gradient-to-br from-[#0d0d0d]/40 via-[#111111]/40 to-[#1c1c1c]/40 
             animate-holo-bg border border-neon shadow-[0_0_30px_#00ffe7] 
             backdrop-blur-xl z-50 pointer-events-auto overflow-hidden"
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-neon">
                <h2 className="text-neon text-lg font-orbitron font-bold animate-hologram">
                    🤖 HoloBot
                </h2>
                <button onClick={onClose} className="text-neon hover:text-white transition">
                    <X size={20} />
                </button>
            </div>

            {/* Chat Area */}
            <div className="p-4 text-sm text-white font-mono h-[50vh] sm:h-[300px] overflow-y-auto space-y-3">
                {/* Bot message */}
                <div className="bg-[#0d0d0d]/60 text-neon px-4 py-2 rounded-xl 
                        shadow-[0_0_12px_#00ffe7] animate-message-glow max-w-[85%]">
                    Hello! I'm your futuristic assistant. Ask me anything.
                </div>

                {/* User message */}
                <div className="ml-auto bg-[#11001a]/60 text-purple-300 px-4 py-2 rounded-xl 
                        shadow-[0_0_12px_#6f00ff] animate-message-glow-right max-w-[85%]">
                    [ You: Message preview here ]
                </div>

                {/* Typing indicator */}
                <div className="space-y-2">
                    {/* HoloBot typing */}
                    <div className="flex items-center space-x-2 text-neon font-semibold text-xs animate-pulse">
                        <span className="animate-hologram">HoloBot is typing</span>
                        <span className="w-2 h-2 rounded-full bg-neon animate-typing-bubble"></span>
                        <span className="w-2 h-2 rounded-full bg-neon animate-typing-bubble delay-200"></span>
                        <span className="w-2 h-2 rounded-full bg-neon animate-typing-bubble delay-400"></span>
                    </div>

                    {/* User typing */}
                    {userTyping && (
                        <div className="flex justify-end">
                            <div className="flex items-center space-x-2 text-purple-400 font-semibold text-xs animate-pulse ml-auto">
                                <span className="animate-hologram">You are typing</span>
                                <span className="w-2 h-2 rounded-full bg-purple-500 animate-typing-bubble"></span>
                                <span className="w-2 h-2 rounded-full bg-purple-500 animate-typing-bubble delay-200"></span>
                                <span className="w-2 h-2 rounded-full bg-purple-500 animate-typing-bubble delay-400"></span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-neon flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full p-2 rounded bg-[#1a1a1a]/50 border-2 border-neon 
                        text-white placeholder:text-gray-400 focus:outline-none 
                        font-mono focus:ring-2 focus:ring-purple-400 transition 
                        animate-border-glow caret-purple-400"
                    onChange={handleTyping}
                />
                <button
                    disabled
                    className="p-2 rounded-full border border-neon text-neon 
                        hover:bg-neon hover:text-black transition duration-300 animate-send-glow"
                >
                    🚀
                </button>
            </div>
        </motion.div>
    );
};

export default ChatBotUI;
