import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

const ChatBotUI = ({ onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-[12rem] right-6 w-[320px] sm:w-[360px] max-h-[500px] rounded-xl 
             bg-gradient-to-br from-[#0d0d0d] via-[#111111] to-[#1c1c1c] 
             animate-chat-bg border border-neon shadow-[0_0_30px_#00ffe7] 
             backdrop-blur-md z-50 pointer-events-auto overflow-hidden"
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-neon">
                <h2 className="text-neon text-lg font-orbitron font-bold animate-hologram">
                    🤖 HoloBot
                </h2>
                <button
                    onClick={onClose}
                    className="text-neon hover:text-white transition"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Chat Area */}
            <div className="p-4 text-sm text-white font-mono h-[300px] overflow-y-auto">
                <p className="text-neon mb-2">Hello! I'm your futuristic assistant. Ask me anything.</p>
                <div className="mt-4 text-gray-400 italic">[ Chat functionality coming soon... ]</div>
            </div>

            {/* Input Area (Placeholder) */}
            <div className="p-3 border-t border-neon flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full p-2 rounded bg-[#1a1a1a] border-2 border-neon 
                        text-white placeholder:text-gray-400 focus:outline-none 
                        font-mono animate-border-glow"
                />
                <button
                    disabled
                    className="p-2 rounded-full border border-neon text-neon hover:bg-neon hover:text-black transition duration-300 animate-send-glow"
                >
                    🚀
                </button>
            </div>
        </motion.div>
    );
};

export default ChatBotUI;
