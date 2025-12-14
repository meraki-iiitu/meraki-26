import React from 'react';
import { motion } from 'framer-motion';
import coordinatorsBg from '../assets/coordinators.webp';
import avatarImg from '../assets/avatar_pixel.webp';
import { coordinators, coreCoordinators, departmentHeads } from '../constants';

const Team = () => {

    return (
        <div className="min-h-screen relative text-white pt-24 pb-16"
            style={{
                backgroundImage: `url(${coordinatorsBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {}

                {}
                <div className="text-center mb-8">
                    <p className="font-terminal text-cyan-400 text-sm mb-2 tracking-widest">
                        LEADERSHIP & GUIDANCE
                    </p>
                    <h1 className="font-minecraft text-5xl md:text-6xl text-white mb-16">
                        COORDINATORS
                    </h1>
                </div>

                {}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    {coordinators.map((coord, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            {}
                            <div className={`w-48 h-48 rounded-full mx-auto mb-4 border-4 flex items-center justify-center overflow-hidden relative ${coord.isHOD
                                ? 'border-amber-300'
                                : 'border-gray-300'
                                }`}>
                                <img src={avatarImg} alt={coord.name} className="w-full h-full object-cover" />
                                {coord.isHOD && (
                                    <span className="absolute bottom-2 bg-red-600 text-white font-pixel text-xs px-3 py-1 z-10">
                                        HOD CSE
                                    </span>
                                )}
                            </div>
                            <h3 className="font-pixel text-lg text-white">{coord.name}</h3>
                            <p className="font-terminal text-sm text-gray-300">{coord.role}</p>
                            {coord.subtitle && (
                                <p className="font-terminal text-xs text-gray-400">{coord.subtitle}</p>
                            )}
                        </motion.div>
                    ))}
                </div>

                {}
                <div className="text-center mb-8">
                    <p className="font-terminal text-cyan-400 text-sm mb-2 tracking-widest">
                        THE EXECUTING TEAM
                    </p>
                    <h2 className="font-minecraft text-4xl md:text-5xl text-white mb-16">
                        CONVENORS
                    </h2>
                </div>

                {}
                <div className="mb-16">
                    <h3 className="font-pixel text-2xl text-white text-center mb-8">
                        CORE COORDINATORS
                    </h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {coreCoordinators.map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
                                className="w-40 h-40 rounded-full border-4 border-gray-300 hover:border-cyan-400 transition-all cursor-pointer overflow-hidden"
                            >
                                <img src={avatarImg} alt="Core Coordinator" className="w-full h-full object-cover" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {}
                <div className="mb-16">
                    <h3 className="font-pixel text-2xl text-white text-center mb-8">
                        DEPARTMENT HEADS
                    </h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {departmentHeads.map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + index * 0.05 }}
                                className="w-40 h-40 rounded-full border-4 border-gray-300 hover:border-cyan-400 transition-all cursor-pointer overflow-hidden"
                            >
                                <img src={avatarImg} alt="Department Head" className="w-full h-full object-cover" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-600 pt-8">
                    <div>
                        <h3 className="font-pixel text-sm text-gray-300 mb-2">COORDINATORS</h3>
                        <p className="font-terminal text-xs text-gray-400">Pranav garg</p>
                        <p className="font-terminal text-xs text-gray-400">+91 XXXXXXXXXX</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-4xl mb-2">🎮</div>
                        <h2 className="font-minecraft text-3xl">MERAKI</h2>
                    </div>
                    <div>
                        <h3 className="font-pixel text-sm text-gray-300 mb-2">QUICK LINKS</h3>
                        <p className="font-terminal text-xs text-gray-400">Back to home</p>
                        <p className="font-terminal text-xs text-gray-400">Registration Form</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
