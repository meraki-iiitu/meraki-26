import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ArenaXPopup = ({ isOpen, onClose, subEvents }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />

                {/* Modal */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="
                        relative z-10 
                        w-full max-w-2xl 
                        bg-[#1a1a1a] 
                        border-[6px] border-[#333] border-t-[#555] border-l-[#555] border-b-[#111] border-r-[#111]
                        p-6 sm:p-8
                        shadow-[0_0_20px_rgba(0,0,0,0.5)]
                    "
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="
                            absolute top-4 right-4 
                            w-8 h-8 
                            flex items-center justify-center 
                            bg-[#cc0000] text-white font-bold 
                            border-2 border-red-400 border-b-red-900 border-r-red-900 
                            hover:brightness-110 active:translate-y-0.5
                            font-minecraft
                        "
                    >
                        X
                    </button>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="font-minecraft text-2xl sm:text-3xl text-white mb-2 text-shadow">
                            SELECT GAME MODE
                        </h2>
                        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                    </div>

                    {/* Game Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {subEvents.map((event, index) => (
                            <a
                                key={index}
                                href={event.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative block"
                                onClick={onClose}
                            >
                                <div className="
                                    flex flex-col items-center gap-4 
                                    bg-[#111] p-4 
                                    border-4 border-[#333] border-b-[#000] border-r-[#000]
                                    group-hover:border-cyan-500 group-hover:-translate-y-1 
                                    transition-all duration-200
                                    h-full
                                ">
                                    {/* Logo Container */}
                                    <div className="
                                        w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 
                                        bg-black/50 p-2 
                                        border-2 border-[#333]
                                        group-hover:border-cyan-400/50
                                        transition-colors
                                    ">
                                        <img
                                            src={event.logo}
                                            alt={event.name}
                                            className="w-full h-full object-contain pixel-image"
                                            style={{ imageRendering: 'pixelated' }}
                                        />
                                    </div>

                                    {/* Game Title */}
                                    <span className="
                                        font-minecraft text-lg text-center text-gray-300 
                                        group-hover:text-cyan-400 transition-colors
                                    ">
                                        {event.name}
                                    </span>

                                    {/* Action Text */}
                                    <span className="
                                        mt-auto
                                        font-terminal text-xs text-center text-gray-500
                                        group-hover:text-white transition-colors
                                    ">
                                        [INIT_LOGIN]
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Footer decoration */}
                    <div className="mt-8 text-center">
                        <p className="font-terminal text-xs text-gray-500 animate-pulse">
                            &gt; WAITING FOR PLAYER SELECTION_
                        </p>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ArenaXPopup;
