/**
 * @fileoverview Development team credits page with modern Minecraft + Glassmorphism design.
 * Inspired by the premium aesthetic of the MerchandisePage.
 * @see DOCS.md#animation-system for entrance animations
 * @page /devteam
 */

import React from "react";
import { motion } from "framer-motion";
import { devTeamMembers, devTeamConfig } from "../constants";
import avatarImg from "../assets/avatar_pixel.webp";

/**
 * Get tier label based on member tier.
 * @param {number} tier - Tier level (1, 2, or 3)
 * @returns {string} - Tier label
 */
const getTierLabel = (tier) => {
    switch (tier) {
        case 1: return "Coordinator";
        case 2: return "Core Team";
        case 3: return "Contributor";
        default: return "Member";
    }
};

/**
 * Modern Glassmorphism Team Member Card.
 * Unified design across all tiers with consistent cyan accent.
 * @param {Object} props.member - Team member data
 * @param {number} props.index - Index for staggered animation
 * @param {number} props.tier - Tier level for badge label
 */
const TeamMemberCard = ({ member, index, tier }) => {
    const tierLabel = getTierLabel(tier);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.6,
                delay: Math.min(index * 0.1, 0.6),
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="
                relative rounded-xl overflow-hidden
                bg-white/5 border border-white/10 backdrop-blur-sm
                shadow-lg shadow-black/20
            "
        >
            {/* Image Container */}
            <div className="relative aspect-square">
                <img
                    src={member.photo || avatarImg}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* Content */}
            <div className="p-4 bg-black/40 border-t border-white/5">
                <h4 className="font-minecraft text-white text-sm sm:text-base tracking-wide uppercase line-clamp-2 min-h-[2.5em] mb-1 leading-relaxed text-center">
                    {member.name}
                </h4>
                {member.role && (
                    <p className="font-terminal text-xs text-cyan-400 tracking-wide text-center uppercase">
                        {member.role}
                    </p>
                )}
            </div>
        </motion.div>
    );
};

/**
 * DevTeam page with modern Minecraft + Glassmorphism design.
 */
const DevTeam = () => {
    // Filter members by tier
    const tier1 = devTeamMembers.filter(m => m.tier === 1);
    const tier2 = devTeamMembers.filter(m => m.tier === 2);
    const tier3 = devTeamMembers.filter(m => m.tier === 3);

    return (
        <div className="min-h-screen bg-black text-white relative selection:bg-cyan-500/30">
            {/* Abstract Background with Gradient Orbs */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-neutral-950" />

                {/* Cyan Orb - Top Left */}
                <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] bg-cyan-600 opacity-20" />

                {/* Purple Orb - Bottom Right */}
                <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[150px] bg-purple-900 opacity-20" />

                {/* Emerald Orb - Center */}
                <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full blur-[100px] bg-emerald-800 opacity-10" />

                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-10 min-h-screen pt-20 pb-20 px-4 sm:px-8 max-w-[1400px] mx-auto"
            >
                {/* Header Section - Centered & Symmetrical */}
                <header className="text-center mb-8 sm:mb-10">
                    {/* Decorative Top Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center gap-4 mb-4"
                    >
                        <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-cyan-500/50" />
                        <div className="w-2 h-2 bg-cyan-500 rotate-45" />
                        <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent via-cyan-500/50 to-cyan-500/50" />
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="font-terminal text-cyan-400/80 text-xs sm:text-sm tracking-[0.3em] uppercase mb-2"
                    >
                        {devTeamConfig.pageSubtitle}
                    </motion.p>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="font-minecraft text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-wider mb-3"
                    >
                        {devTeamConfig.pageTitle}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="font-terminal text-white/50 text-sm sm:text-base max-w-xl mx-auto tracking-wide mb-4"
                    >
                        {devTeamConfig.sectionDescription}
                    </motion.p>

                    {/* Decorative Bottom Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-white/20" />
                        <div className="w-1.5 h-1.5 bg-white/40 rotate-45" />
                        <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent via-white/20 to-white/20" />
                    </motion.div>
                </header>

                {/* Team Grid Sections */}
                <div className="space-y-16 sm:space-y-20">

                    {/* Tier 1: Coordinators */}
                    {tier1.length > 0 && (
                        <section>
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="font-minecraft text-cyan-400 text-xl sm:text-2xl uppercase tracking-wider mb-8 text-center"
                                style={{ textShadow: '2px 2px 0px #000, -1px -1px 0px rgba(0,0,0,0.3)' }}
                            >
                                ⚔ Coordinators ⚔
                            </motion.h3>
                            <div className="flex flex-wrap justify-center gap-6">
                                {tier1.map((member, index) => (
                                    <div key={index} className="w-full max-w-[280px]">
                                        <TeamMemberCard member={member} index={index} tier={1} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Tier 2: Core Team */}
                    {tier2.length > 0 && (
                        <section>
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="font-minecraft text-emerald-400 text-xl sm:text-2xl uppercase tracking-wider mb-8 text-center"
                                style={{ textShadow: '2px 2px 0px #000, -1px -1px 0px rgba(0,0,0,0.3)' }}
                            >
                                ⛏ Core Team ⛏
                            </motion.h3>
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                                {tier2.map((member, index) => (
                                    <div key={index} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-[250px]">
                                        <TeamMemberCard member={member} index={index + tier1.length} tier={2} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Tier 3: Contributors */}
                    {tier3.length > 0 && (
                        <section>
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="font-minecraft text-amber-400 text-xl sm:text-2xl uppercase tracking-wider mb-8 text-center"
                                style={{ textShadow: '2px 2px 0px #000, -1px -1px 0px rgba(0,0,0,0.3)' }}
                            >
                                ★ Contributors ★
                            </motion.h3>
                            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                                {tier3.map((member, index) => (
                                    <div key={index} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-1rem)] lg:w-[calc(20%-1rem)] max-w-[200px]">
                                        <TeamMemberCard member={member} index={index + tier1.length + tier2.length} tier={3} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Footer */}
                {devTeamConfig.sectionFooterText && (
                    <motion.footer
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className="mt-20 text-center"
                    >
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/20" />
                            <span className="font-terminal text-xs text-white/40 tracking-wider uppercase">
                                {devTeamConfig.sectionFooterText}
                            </span>
                            <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/20" />
                        </div>
                    </motion.footer>
                )}
            </motion.div>
        </div>
    );
};

export default DevTeam;
