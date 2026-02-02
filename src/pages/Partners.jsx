/**
 * @fileoverview Partners page with modern Minecraft design.
 * @page /partners
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import partnersBg from "../assets/partners_bg.png";
import { appleScaleIn } from "../utils/motion";

// Import shared partner data
import {
    goldPartners,
    travelPartners,
    merchLifestylePartners,
    platformPartners,
    silverPartners,
    otherPartners
} from "../constants/partnersData";

// Glass-specific frame styles
const getGlassStyles = (tier) => {
    const glassBase = {
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
    };

    switch (tier) {
        case 'platinum':
            return {
                ...glassBase,
                border: "2px solid rgba(79, 172, 254, 0.5)",
                background: "linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.05) 100%)",
                glow: "0 0 20px rgba(79, 172, 254, 0.4)",
                accent: "#4facfe"
            };
        case 'gold':
            return {
                ...glassBase,
                border: "2px solid rgba(255, 215, 0, 0.5)",
                background: "linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)",
                glow: "0 0 20px rgba(255, 215, 0, 0.4)",
                accent: "#FFD700"
            };
        case 'silver':
            return {
                ...glassBase,
                border: "2px solid rgba(192, 192, 192, 0.5)",
                background: "linear-gradient(135deg, rgba(224, 224, 224, 0.1) 0%, rgba(158, 158, 158, 0.05) 100%)",
                glow: "0 0 20px rgba(192, 192, 192, 0.4)",
                accent: "#C0C0C0"
            };
        case 'merch':
            return {
                ...glassBase,
                border: "2px solid rgba(255, 77, 77, 0.5)",
                background: "linear-gradient(135deg, rgba(255, 77, 77, 0.1) 0%, rgba(255, 77, 77, 0.05) 100%)",
                glow: "0 0 20px rgba(255, 77, 77, 0.4)",
                accent: "#ff4d4d"
            };
        case 'platform':
            return {
                ...glassBase,
                border: "2px solid rgba(75, 108, 183, 0.5)",
                background: "linear-gradient(135deg, rgba(75, 108, 183, 0.1) 0%, rgba(24, 40, 72, 0.05) 100%)",
                glow: "0 0 20px rgba(75, 108, 183, 0.4)",
                accent: "#4b6cb7"
            };
        case 'travel':
            return {
                ...glassBase,
                border: "2px solid rgba(255, 126, 95, 0.5)",
                background: "linear-gradient(135deg, rgba(255, 126, 95, 0.1) 0%, rgba(254, 180, 123, 0.05) 100%)",
                glow: "0 0 20px rgba(255, 126, 95, 0.4)",
                accent: "#ff7e5f"
            };
        default:
            return {
                ...glassBase,
                border: "2px solid rgba(17, 153, 142, 0.5)",
                background: "linear-gradient(135deg, rgba(17, 153, 142, 0.1) 0%, rgba(56, 239, 125, 0.05) 100%)",
                glow: "0 0 20px rgba(17, 153, 142, 0.4)",
                accent: "#11998e"
            };
    }
};

/**
 * Minecraft Glass-themed Partner Card
 */
const PartnerCard = ({ partner, index, size = "default", tier = "wood" }) => {
    const handleClick = () => {
        if (partner.url) {
            window.open(partner.url, '_blank', 'noopener,noreferrer');
        }
    };

    const styles = getGlassStyles(tier);
    const sizeClasses = {
        default: "w-48 h-48 sm:w-56 sm:h-56"
    };

    return (
        <motion.div
            className="relative cursor-pointer group"
            variants={appleScaleIn(index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            onClick={handleClick}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Outer Glow on Hover */}
            <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"
                style={{ background: styles.accent }}
            />

            {/* Glass Container */}
            <div
                className={`relative ${sizeClasses[size]} rounded-xl overflow-hidden flex items-center justify-center transition-all duration-300`}
                style={{
                    background: styles.background,
                    backdropFilter: styles.backdropFilter,
                    WebkitBackdropFilter: styles.WebkitBackdropFilter,
                    boxShadow: styles.boxShadow,
                    border: styles.border,
                }}
            >
                {/* Minecraft Glass "Streaks" Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-30 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]" />

                {/* Subtle sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                {/* Logo Container */}
                <div className="w-[70%] h-[70%] relative z-10 flex items-center justify-center filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Minecraft-style Corner Pixels (Glass Pane accents) */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white/40" />
                <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-white/40" />
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-white/40" />
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white/40" />
            </div>
        </motion.div>
    );
};

const SectionHeading = ({ title, color = "text-yellow-400" }) => (
    <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`font-terminal ${color} text-xl sm:text-2xl uppercase tracking-[0.2em] mb-8 text-center`}
    >
        {title}
    </motion.h3>
);

const Partners = () => {
    // Scroll-based animations
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const contentOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.2], [60, 0]);
    const contentScale = useTransform(scrollYProgress, [0, 0.2], [0.98, 1]);

    return (
        <div
            ref={containerRef}
            className="min-h-screen relative text-white pt-20 sm:pt-24 pb-12 sm:pb-16"
            style={{
                backgroundImage: `url(${partnersBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "scroll",
            }}
        >
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/60"></div>

            <motion.div
                className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10"
                style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
            >
                {/* Header Section */}
                <motion.div
                    className="text-center mb-10 sm:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="w-0 h-0 border-t-[6px] sm:border-t-[10px] border-b-[6px] sm:border-b-[10px] border-l-[8px] sm:border-l-[14px] border-t-transparent border-b-transparent border-l-cyan-400"></div>
                        <h2 className="font-terminal text-cyan-400 text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                            SUPPORTERS OF THE REALM
                        </h2>
                        <div className="w-0 h-0 border-t-[6px] sm:border-t-[10px] border-b-[6px] sm:border-b-[10px] border-r-[8px] sm:border-r-[14px] border-t-transparent border-b-transparent border-r-cyan-400"></div>
                    </div>
                    <h1
                        className="font-minecraft text-3xl sm:text-5xl md:text-7xl text-white mb-3 sm:mb-4 tracking-wider"
                        style={{
                            textShadow: "3px 3px 0px #000, 2px 2px 0px rgba(6, 182, 212, 0.5)",
                        }}
                    >
                        PARTNERS
                    </h1>
                    <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
                </motion.div>

                <div className="space-y-16 sm:space-y-20">
                    {/* Gold Tier */}
                    <div className="relative">
                        <SectionHeading title="Gold Partners" color="text-yellow-400" />
                        <div className="flex flex-wrap justify-center gap-16 relative z-10">
                            {goldPartners.map((p, i) => (
                                <PartnerCard key={i} partner={p} index={i} size="default" tier="gold" />
                            ))}
                        </div>
                    </div>

                    {/* Travel Partner */}
                    <div className="relative">
                        <SectionHeading title="Travel Partner" color="text-orange-400" />
                        <div className="flex flex-wrap justify-center gap-12 sm:gap-20 relative z-10">
                            {travelPartners.map((p, i) => (
                                <PartnerCard key={i} partner={p} index={i} size="default" tier="travel" />
                            ))}
                        </div>
                    </div>

                    {/* Merchandise & Lifestyle */}
                    <div className="relative">
                        <SectionHeading title="Merchandise & Lifestyle" color="text-red-400" />
                        <div className="flex flex-wrap justify-center gap-16 relative z-10">
                            {merchLifestylePartners.map((p, i) => (
                                <PartnerCard key={i} partner={p} index={i} size="default" tier="merch" />
                            ))}
                        </div>
                    </div>

                    {/* Platform Partners */}
                    <div className="relative">
                        <SectionHeading title="Platform Partners" color="text-blue-400" />
                        <div className="flex flex-wrap justify-center gap-12 sm:gap-16 relative z-10">
                            {platformPartners.map((p, i) => (
                                <PartnerCard key={i} partner={p} index={i} size="default" tier="platform" />
                            ))}
                        </div>
                    </div>

                    {/* Silver Sponsors */}
                    <div>
                        <SectionHeading title="Silver Sponsors" color="text-slate-300" />
                        <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
                            {silverPartners.map((p, i) => (
                                <PartnerCard key={i} partner={p} index={i} size="default" tier="silver" />
                            ))}
                        </div>
                    </div>

                    {/* Other Partners */}
                    <div>
                        <SectionHeading title="Other Partners" color="text-emerald-400" />
                        <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
                            {otherPartners.map((p, i) => (
                                <PartnerCard key={i} partner={p} index={i} size="default" tier="other" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-4xl mx-auto text-center mt-20 p-1"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-xl blur opacity-20" />
                    <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-10 sm:p-14 overflow-hidden">
                        {/* Decorative Corner lines */}
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-xl" />
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/30 rounded-br-xl" />

                        <h3 className="font-minecraft text-2xl sm:text-3xl text-white mb-6">
                            WANT TO <span className="text-cyan-400">SPONSOR?</span>
                        </h3>
                        <p className="font-terminal text-gray-400 mb-8 max-w-xl mx-auto">
                            Join us in crafting the ultimate tech experience. Let's build something extraordinary together.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-minecraft tracking-widest uppercase rounded-sm border border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300"
                            >
                                Become a Partner
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Partners;
