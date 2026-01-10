/**
 * @fileoverview Partners page highlighting sponsors and collaborators in a hierarchy.
 * 
 * Displays partners categorized into Platinum, Gold, Silver, and Merchandise tiers.
 * Features a Minecraft-themed aesthetic with tier-specific frame materials and
 * particle effects.
 */

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import wallBg from "../assets/sponsors_minecraft_bg.webp";
import { appleSlideUp, appleScaleIn } from "../utils/motion";

// Import logos
import iiituLogo from '../assets/sponsors/iiitu_logo.webp';
import interviewBuddyLogo from '../assets/sponsors/interview_buddy.webp';
import unstopLogo from '../assets/sponsors/unstop_logo.svg';
import aerostarLogo from '../assets/sponsors/aerostar.webp';
import devfolioLogo from '../assets/sponsors/devfolio_logo.webp';
import whosNextLogo from '../assets/sponsors/whosnext.webp';
import mioartaiLogo from '../assets/mioartai.jpg';
import dopamineStoreLogo from '../assets/dopamine_store.avif';
import ethindiaLogo from '../assets/ethindia.svg';

// Partner Data with Categories
const platinumPartners = [
    { name: "mioArtAI", firm: "mioArtAI", designation: "Theme Partner", logo: mioartaiLogo, url: "https://www.instagram.com/mioartai/" },
    { name: "AEROSTAR", firm: "AEROSTAR", designation: "Technology Partner", logo: aerostarLogo, url: "https://www.instagram.com/aerostar007/" }
];

const goldPartners = [
    { name: "Devfolio", firm: "Devfolio", designation: "Platform Partner", logo: devfolioLogo, url: "https://devfolio.co" },
    { name: "Unstop", firm: "Unstop", designation: "Platform Partner", logo: unstopLogo, url: "https://unstop.com" }
];

const silverPartners = [
    { name: "ETHindia", firm: "ETHindia", designation: "Silver Sponsor", logo: ethindiaLogo, url: "https://www.instagram.com/ethindiaco/" },
    { name: "InterviewBuddy", firm: "InterviewBuddy", designation: "Silver Sponsor", logo: interviewBuddyLogo, url: "https://interviewbuddy.net" }
];

const merchPartners = [
    { name: "Dopamine Store", firm: "Dopamine Store", designation: "Merchandise Partner", logo: dopamineStoreLogo, url: "https://thedopaminestore.in" }
];

/**
 * Floating Particles Effect
 * Creates ambient floating squares resembling Minecraft particles.
 */
const FloatingParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const particleCount = 20;
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 10 + 5,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bg-white/5 border border-white/10"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.5, 0],
                        rotate: [0, 90, 180]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

/**
 * Tier-Specific Frame Styling
 */
const getFrameStyles = (tier) => {
    switch (tier) {
        case 'platinum':
            return {
                border: "linear-gradient(135deg, #b9f2ff 0%, #4facfe 50%, #00f2fe 100%)",
                shadow: "0 0 30px rgba(79, 172, 254, 0.4)",
                innerBorder: "#00f2fe",
                pinGradient: "radial-gradient(circle at 30% 30%, #fff 0%, #4facfe 100%)",
                bgColor: "rgba(0, 242, 254, 0.05)"
            };
        case 'gold':
            return {
                border: "linear-gradient(135deg, #fff3b0 0%, #ca26ff 0%, #e6ce6a 0%, #b88a00 100%)", // Custom Gold
                shadow: "0 0 30px rgba(255, 215, 0, 0.3)",
                innerBorder: "#FFD700",
                pinGradient: "radial-gradient(circle at 30% 30%, #fff 0%, #ffd700 100%)",
                bgColor: "rgba(255, 215, 0, 0.05)"
            };
        case 'silver':
            return {
                border: "linear-gradient(135deg, #e0e0e0 0%, #9e9e9e 100%)",
                shadow: "0 0 25px rgba(255, 255, 255, 0.2)",
                innerBorder: "#C0C0C0",
                pinGradient: "radial-gradient(circle at 30% 30%, #fff 0%, #999 100%)",
                bgColor: "rgba(255, 255, 255, 0.05)"
            };
        case 'merch':
            return {
                border: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #feada6 100%)", // Redstone-ish
                shadow: "0 0 25px rgba(255, 100, 100, 0.3)",
                innerBorder: "#ff4d4d",
                pinGradient: "radial-gradient(circle at 30% 30%, #fff 0%, #ff4d4d 100%)",
                bgColor: "rgba(255, 0, 0, 0.05)"
            };
        default: // Wood (Fallback)
            return {
                border: "linear-gradient(145deg, #8B6914 0%, #654321 50%, #3D2914 100%)",
                shadow: "0 10px 25px rgba(0,0,0,0.6)",
                innerBorder: "#8B6914",
                pinGradient: "radial-gradient(circle at 30% 30%, #AAA 0%, #333 100%)",
                bgColor: "transparent"
            };
    }
};

/**
 * Minecraft-styled Poster Frame Component
 */
const PartnerCard = ({ partner, index, size = "medium", tier = "wood" }) => {
    const handleClick = () => {
        if (partner.url) {
            window.open(partner.url, '_blank', 'noopener,noreferrer');
        }
    };

    const styles = getFrameStyles(tier);

    // Size mapping
    const sizeClasses = {
        large: "w-64 h-64 sm:w-80 sm:h-80",
        medium: "w-48 h-48 sm:w-60 sm:h-60",
        small: "w-36 h-36 sm:w-44 sm:h-44"
    };

    return (
        <motion.div
            className="relative cursor-pointer group"
            variants={appleScaleIn(index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
                scale: 1.05,
                y: -10,
                rotateX: 10,
                transition: { type: "spring", stiffness: 200, damping: 15 }
            }}
            style={{ perspective: 1000 }}
            onClick={handleClick}
        >
            {/* Glow Effect */}
            <div
                className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                style={{ background: styles.innerBorder }}
            />

            {/* Frame Structure */}
            <div
                className={`relative ${sizeClasses[size]} overflow-hidden`}
                style={{
                    boxShadow: styles.shadow,
                }}
            >
                {/* Frame Border Material */}
                <div className="absolute inset-0 z-10"
                    style={{
                        background: styles.border,
                        maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
                        maskSize: '100% 100%, calc(100% - 16px) calc(100% - 16px)',
                        maskComposite: 'exclude',
                        WebkitMaskComposite: 'xor',
                        padding: '8px'
                    }}
                />

                {/* Inner Border Color */}
                <div className="absolute inset-[8px] z-10 border-4 opacity-50"
                    style={{ borderColor: styles.innerBorder }}
                />

                {/* Canvas Background */}
                <div
                    className="absolute inset-[16px] flex items-center justify-center bg-[#1a1a1a] overflow-hidden"
                    style={{
                        boxShadow: "inset 0 0 30px rgba(0,0,0,0.8)",
                        background: `
                            linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                            url('https://www.transparenttextures.com/patterns/cubes.png')
                        `,
                        backgroundColor: '#151515'
                    }}
                >
                    {/* Tier Tint Overlay */}
                    <div className="absolute inset-0 opacity-20" style={{ background: styles.bgColor }} />

                    {/* Logo */}
                    <div className="w-[75%] h-[75%] flex items-center justify-center relative z-20 transition-transform duration-500 group-hover:scale-110">
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                        />
                    </div>
                </div>

                {/* Glint Animation (Glass effect) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Pin/Nail Detail */}
            <div
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-40"
                style={{
                    background: styles.pinGradient,
                    boxShadow: "0 2px 4px rgba(0,0,0,0.8)",
                    border: '1px solid rgba(255,255,255,0.2)'
                }}
            />

            {/* Floating Label */}
            <motion.div
                className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-max text-center z-50 pointer-events-none"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg">
                    <h3 className="font-minecraft text-white text-lg tracking-wide text-shadow-sm leading-tight">
                        {partner.name}
                    </h3>
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-1" />
                    <p className="font-terminal text-cyan-400 text-xs tracking-wider">
                        {partner.designation}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const SectionHeading = ({ title, color = "text-yellow-400", icon = "◆" }) => (
    <motion.div
        variants={appleSlideUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 mb-16 justify-center relative z-10"
    >
        <div className="flex items-center gap-4">
            <span className={`text-2xl ${color} animate-pulse`}>{icon}</span>
            <div className={`h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-${color.split('-')[1]}-500/50`} />
            <h2 className={`font-minecraft ${color} text-2xl sm:text-3xl md:text-5xl tracking-[0.15em] uppercase drop-shadow-[0_4px_0_rgba(0,0,0,0.5)] text-center`}>
                {title}
            </h2>
            <div className={`h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-${color.split('-')[1]}-500/50`} />
            <span className={`text-2xl ${color} animate-pulse`}>{icon}</span>
        </div>
    </motion.div>
);

const Partners = () => {
    return (
        <div className="min-h-screen bg-[#050505] relative overflow-x-hidden pt-24 pb-20 selection:bg-cyan-500/30">
            {/* Background Texture */}
            <div
                className="absolute inset-0 z-0 opacity-20 fixed"
                style={{
                    backgroundImage: `url(${wallBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Ambient Particles */}
            <FloatingParticles />

            {/* Dark Gradient Overlay for Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] z-0 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center mb-28 relative">
                    <motion.div
                        variants={appleScaleIn(0)}
                        initial="hidden"
                        animate="show"
                        className="inline-block relative"
                    >
                        <h1 className="font-minecraft text-white text-5xl sm:text-7xl md:text-8xl mb-4 tracking-widest text-shadow-xl relative z-10">
                            PARTNERS
                        </h1>
                        {/* Glitch/Shadow Layers */}
                        <div className="absolute top-0 left-1 text-cyan-500/30 font-minecraft text-5xl sm:text-7xl md:text-8xl w-full h-full -z-10 blur-sm">PARTNERS</div>
                        <div className="absolute top-0 -left-1 text-red-500/30 font-minecraft text-5xl sm:text-7xl md:text-8xl w-full h-full -z-10 blur-sm">PARTNERS</div>
                    </motion.div>

                    <motion.p
                        variants={appleSlideUp(0.2)}
                        initial="hidden"
                        animate="show"
                        className="font-terminal text-gray-400 text-sm sm:text-lg tracking-[0.2em] max-w-2xl mx-auto uppercase mt-4"
                    >
                        &lt; Building The Future Block By Block /&gt;
                    </motion.p>
                </div>

                {/* Platinum Tier */}
                <div className="mb-32 relative">
                    {/* Background Glow for Tier */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

                    <SectionHeading title="Platinum Partners" color="text-cyan-300" icon="❖" />
                    <div className="flex flex-wrap justify-center gap-16 sm:gap-24 relative z-10">
                        {platinumPartners.map((p, i) => (
                            <PartnerCard key={i} partner={p} index={i} size="large" tier="platinum" />
                        ))}
                    </div>
                </div>

                {/* Gold Tier */}
                <div className="mb-32 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none" />

                    <SectionHeading title="Gold Partners" color="text-yellow-400" icon="◈" />
                    <div className="flex flex-wrap justify-center gap-12 sm:gap-20 relative z-10">
                        {goldPartners.map((p, i) => (
                            <PartnerCard key={i} partner={p} index={i} size="medium" tier="gold" />
                        ))}
                    </div>
                </div>

                {/* Silver Tier */}
                <div className="mb-32">
                    <SectionHeading title="Silver Partners" color="text-slate-300" icon="◇" />
                    <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
                        {silverPartners.map((p, i) => (
                            <PartnerCard key={i} partner={p} index={i} size="small" tier="silver" />
                        ))}
                    </div>
                </div>

                {/* Merchandise Section */}
                <div className="mb-32 relative">
                    <div className="absolute inset-0 bg-red-900/10 blur-[100px] rounded-full pointer-events-none" />
                    <SectionHeading title="Merchandise" color="text-red-400" icon="⚡" />
                    <div className="flex flex-wrap justify-center gap-16 relative z-10">
                        {merchPartners.map((p, i) => (
                            <PartnerCard key={i} partner={p} index={i} size="medium" tier="merch" />
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-4xl mx-auto text-center p-1"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-xl blur opacity-20" />
                    <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-10 sm:p-14 overflow-hidden">
                        {/* Decorative Corner lines */}
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-xl" />
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/30 rounded-br-xl" />

                        <h3 className="font-minecraft text-2xl sm:text-3xl text-white mb-6">
                            WANT TO <span className="text-cyan-400">SPONSOR?</span>
                        </h3>
                        <p className="font-terminal text-gray-400 mb-8 max-w-xl mx-auto">
                            Join us in crafting the ultimate tech experience. Let's build something extraordinary together.
                        </p>
                        <motion.a
                            href="mailto:meraki@iiitu.ac.in"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-minecraft tracking-widest uppercase rounded-sm border border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300"
                        >
                            Become a Partner
                        </motion.a>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Partners;
