import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ScheduleEventCard = ({ item }) => {
    const { event, time } = item;

    // Variants for hover animations
    const cardVariants = {
        rest: { scale: 1, y: 0 },
        hover: {
            scale: 1.02,
            y: -4,
            borderColor: '#06b6d4', // Cyan
            transition: { type: 'spring', stiffness: 300, damping: 20 }
        }
    };

    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="group relative"
        >
            <Link
                to={item.key ? `/event/${item.key}` : '#'}
                className="block"
            >
                {/* Minecraft Style Card Container */}
                <div className="
          relative bg-[#111] 
          border-[4px] border-[#333] border-b-[#1a1a1a] border-r-[#1a1a1a] border-t-[#555] border-l-[#555]
          p-4 sm:p-5
          flex flex-col sm:flex-row gap-5
          transition-all duration-200
          group-hover:border-cyan-500 group-hover:bg-[#1a1a1a]
        ">

                    {/* Main Visual - Pixelated Image Frame */}
                    <div className="
            relative shrink-0 
            w-full sm:w-48 aspect-video sm:aspect-[4/3]
            bg-[#000] border-4 border-[#333]
            overflow-hidden
          ">
                        {event?.icon || event?.image1 || event?.image2 ? (
                            <img
                                src={event.icon || event.image1 || event.image2}
                                alt={event.title}
                                className="w-full h-full object-contain bg-[#050505] opacity-90 group-hover:opacity-100 transition-opacity duration-300 pixel-image"
                                style={{ imageRendering: 'pixelated' }}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#222]">
                                <span className="font-minecraft text-[#444] text-[10px]">NO SIGNAL</span>
                            </div>
                        )}

                        {/* Status Overlay */}
                        <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
                            {event?.isElite && (
                                <span className="
                  bg-purple-900/80 text-purple-300 
                  px-2 py-1 
                  font-terminal text-[10px] 
                  border border-purple-500
                  backdrop-blur-sm
                ">
                                    ELITE
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 flex flex-col w-full min-w-0">
                        {/* Header: Title & ID */}
                        <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="
                font-minecraft text-xl sm:text-2xl text-white 
                w-full leading-tight
                group-hover:text-cyan-400 transition-colors
                drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]
              ">
                                {event?.title || 'Unknown Event'}
                            </h3>
                        </div>

                        {/* Description/Tags */}
                        <div className="mb-auto">
                            <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-terminal text-gray-400 mb-2">
                                {event?.tags?.map((tag, i) => (
                                    <span key={i} className="bg-[#222] px-2 py-1 border border-[#333]">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Footer: Time & Venue */}
                        <div className="
              mt-3 pt-3 
              border-t-2 border-[#333] border-dashed
              flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2
              font-terminal text-sm
            ">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1.5 text-cyan-400">
                                    <span className="animate-pulse">▶</span>
                                    {time}
                                </span>
                            </div>

                            {event?.venue && (
                                <div className="text-gray-400 bg-[#151515] px-2 py-1 border border-[#333]">
                                    LOC: {event.venue}
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                {/* Interactive Corner Decor (Minecraft styled) */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            </Link>
        </motion.div>
    );
};

export default ScheduleEventCard;
