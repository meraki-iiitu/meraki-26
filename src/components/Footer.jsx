import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import iiitLogo from '../assets/iiitu.webp';
import { scrollToSection } from '../utils/scrollToSection';

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] text-white border-t-4 border-accent-400" style={{ boxShadow: '0 -4px 0 0 rgba(6, 182, 212, 0.3)' }}>
            { }
            <div className="max-w-7xl mx-auto px-6 py-12">
                { }
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[14px] border-t-transparent border-b-transparent border-l-accent-400"></div>
                        <h2 className="text-2xl md:text-3xl font-minecraft tracking-widest text-white">
                            COORDINATORS
                        </h2>
                        <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-r-[14px] border-t-transparent border-b-transparent border-r-accent-400"></div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
                        { }
                        <div className="bg-gray-900/60 border-4 border-gray-700 p-6 hover:border-accent-400 transition-all duration-300 hover:shadow-lg hover:shadow-accent-400/20">
                            <h3 className="text-lg font-pixel mb-3 text-accent-300">Pranav garg</h3>
                            <p className="text-sm text-gray-400 font-terminal mb-1">23346@iiitu.ac.in</p>
                            <p className="text-sm text-gray-400 font-terminal">+91XXXXXXXXXX</p>
                        </div>

                        { }
                        <div className="bg-gray-900/60 border-4 border-gray-700 p-6 hover:border-accent-400 transition-all duration-300 hover:shadow-lg hover:shadow-accent-400/20">
                            <h3 className="text-lg font-pixel mb-3 text-accent-300">Pranav garg</h3>
                            <p className="text-sm text-gray-400 font-terminal mb-1">23346@iiitu.ac.in</p>
                            <p className="text-sm text-gray-400 font-terminal">+91XXXXXXXXXX</p>
                        </div>
                    </div>
                </div>

                { }
                <div className="flex justify-center items-center mb-12 py-8 border-y-2 border-gray-800">
                    <div className="flex items-center gap-6">
                        { }
                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-accent-400 hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)' }}>
                            <img
                                src={iiitLogo}
                                alt="IIIT Una Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        { }
                        <div className="hidden md:block w-px h-16 bg-accent-400" style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }}></div>

                        { }
                        <div>
                            <h2 className="text-3xl md:text-5xl font-minecraft text-accent-300 tracking-wider hover:text-accent-400 transition-colors duration-300">
                                MERAKI
                            </h2>
                            <p className="text-xs md:text-sm text-gray-400 font-pixel text-center mt-1">
                                Indian Institute of Information Technology Una
                            </p>
                        </div>
                    </div>
                </div>

                { }
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center md:text-left">
                    { }
                    <div className="bg-gray-900/40 p-6 border-l-4 border-accent-400">
                        <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                            <span className="text-accent-400 text-xl">▶</span>
                            <h3 className="text-lg font-pixel text-accent-300">OTHER FESTS</h3>
                        </div>
                        <ul className="space-y-3 font-terminal text-gray-400">
                            <li>
                                <a
                                    href="https://mridang.iiitu.ac.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-accent-400 transition-colors duration-300 hover:pl-2 inline-block"
                                >
                                    › MRIDANG
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://esummit.iiitu.ac.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-accent-400 transition-colors duration-300 hover:pl-2 inline-block"
                                >
                                    › ESUMMIT
                                </a>
                            </li>
                        </ul>
                    </div>

                    { }
                    <div className="bg-gray-900/40 p-6 border-l-4 border-accent-400">
                        <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                            <span className="text-accent-400 text-xl">▶</span>
                            <h3 className="text-lg font-pixel text-accent-300">CONNECT WITH US</h3>
                        </div>
                        <div className="flex justify-center md:justify-start gap-6">
                            <a
                                href="https://www.instagram.com/meraki_iiitu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center bg-gray-800 border-2 border-gray-700 hover:border-accent-400 hover:bg-accent-500 transition-all duration-300 hover:scale-110"
                                style={{ imageRendering: 'pixelated' }}
                            >
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a
                                href="mailto:contact@meraki.com"
                                className="w-12 h-12 flex items-center justify-center bg-gray-800 border-2 border-gray-700 hover:border-accent-400 hover:bg-accent-500 transition-all duration-300 hover:scale-110"
                                style={{ imageRendering: 'pixelated' }}
                            >
                                <FaEnvelope className="text-2xl" />
                            </a>
                        </div>
                    </div>

                    { }
                    <div className="bg-gray-900/40 p-6 border-l-4 border-accent-400">
                        <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                            <span className="text-accent-400 text-xl">▶</span>
                            <h3 className="text-lg font-pixel text-accent-300">QUICK LINKS</h3>
                        </div>
                        <ul className="space-y-3 font-terminal text-gray-400">
                            <li>
                                <a
                                    href="#contact"
                                    onClick={(e) => scrollToSection(e, 'contact')}
                                    className="hover:text-accent-400 transition-colors duration-300 hover:pl-2 inline-block cursor-pointer"
                                >
                                    › HOW TO REACH
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/team"
                                    className="hover:text-accent-400 transition-colors duration-300 hover:pl-2 inline-block"
                                >
                                    › COORDINATING TEAM
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            { }
            <div className="border-t-2 border-gray-800 bg-black py-4 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-500 font-terminal">
                    <p className="flex items-center gap-2">
                        <span className="text-accent-400">©</span> 2025 MERAKI - TechFest IIIT UNA
                    </p>
                    <p className="flex items-center gap-2">
                        Developed by - <span className="text-accent-400 font-pixel">DEVTEAM</span>
                        <span className="text-accent-400 animate-pulse">_</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
