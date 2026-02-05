/**
 * @fileoverview Event schedule page with day-based tabs.
 * 
 * Displays event schedule organized by day with interactive tabs.
 * Features a "Coming Soon" skeleton UI when schedule is not yet available.
 * 
 * @see DOCS.md#animation-system for tab transitions
 * @page /schedule
 */

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import scheduleBg from "../assets/schedule_bg.png";
import minecraftSignComingSoon from "../assets/minecraft_sign_coming_soon.webp";
import { getScheduleForDay, showSchedule } from "../constants";
import ScheduleEventCard from "../components/ScheduleEventCard";
import ServerInfoCard from "../components/ServerInfoCard";

/**
 * Schedule page component with day tabs.
 * 
 * @returns {JSX.Element} Schedule page with events or skeleton
 * 
 * @state activeDay - Currently selected day (1, 2, or 3)
 * 
 * @conditional
 * - showSchedule=false: Displays wireframe skeleton with "Coming Soon"
 * - showSchedule=true: Displays full interactive schedule
 */
const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  /**
   * Animation variants for event list items.
   * @physics Spring-based slide-in from left
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // Scroll-based animations
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.2], [60, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.2], [0.98, 1]);

  /**
   * Skeleton block for loading/placeholder UI.
   * @param {Object} props
   * @param {string} props.className - Additional Tailwind classes
   */
  const SkeletonBlock = ({ className }) => (
    <div className={`bg-gray-700/50 animate-pulse ${className}`} />
  );

  /**
   * Skeleton card mimicking event list item structure.
   * Used in "Coming Soon" skeleton UI.
   */
  const SkeletonCard = () => (
    <div className="bg-gray-800/50 border-2 border-gray-700/50 p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
      <SkeletonBlock className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0" />
      <SkeletonBlock className="w-10 h-10 sm:w-12 sm:h-12 shrink-0" />
      <div className="flex-1 min-w-0 space-y-2">
        <SkeletonBlock className="h-4 w-3/4" />
        <SkeletonBlock className="h-3 w-1/2" />
      </div>
      <SkeletonBlock className="h-6 w-16 shrink-0" />
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="min-h-[100dvh] relative text-white pt-20 sm:pt-28 pb-12 sm:pb-16"
      style={{
        backgroundImage: `url(${scheduleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
        style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
      >
        {/* Page Header */}
        <motion.div
          className="text-center mb-6 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-0 h-0 border-t-[6px] sm:border-t-[10px] border-b-[6px] sm:border-b-[10px] border-l-[8px] sm:border-l-[14px] border-t-transparent border-b-transparent border-l-cyan-400"></div>
            <h2 className="font-terminal text-cyan-400 text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              EVENT TIMELINE
            </h2>
            <div className="w-0 h-0 border-t-[6px] sm:border-t-[10px] border-b-[6px] sm:border-b-[10px] border-r-[8px] sm:border-r-[14px] border-t-transparent border-b-transparent border-r-cyan-400"></div>
          </div>
          <h1
            className="font-minecraft text-3xl sm:text-5xl md:text-7xl text-white mb-3 sm:mb-4 tracking-wider"
            style={{
              textShadow: "4px 4px 0px #000",
            }}
          >
            SCHEDULE
          </h1>
          <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </motion.div>

        {/* 
         * Conditional Rendering
         * 
         * showSchedule=false: Skeleton wireframe with "Coming Soon" badge
         * showSchedule=true: Full schedule with day tabs and event list
         */}
        {!showSchedule ? (
          /* Coming Soon Skeleton UI */
          <div className="relative min-h-[50vh]">
            {/* Floating "Coming Soon" Badge */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none select-none">
              <div className="relative w-[400px] sm:w-[500px] md:w-[600px] aspect-[4/3] flex items-center justify-center transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src={minecraftSignComingSoon} alt="Coming Soon" className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl opacity-100" />
              </div>
            </div>

            {/* Skeleton Background Content */}
            <motion.div
              className="flex flex-col lg:grid lg:grid-cols-4 gap-6 lg:gap-8 opacity-30 pointer-events-none select-none filter blur-[1px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              {/* Skeleton Sidebar */}
              <div className="lg:col-span-1 order-2 lg:order-1 space-y-4">
                <div className="bg-gray-800/50 border-2 border-gray-700/50 p-4 sm:p-6">
                  <div className="flex lg:flex-col items-center gap-4 lg:gap-0">
                    <SkeletonBlock className="w-20 h-20 sm:w-24 sm:h-24 lg:w-full lg:aspect-square shrink-0" />
                    <div className="flex-1 lg:w-full lg:mt-4 space-y-2">
                      <SkeletonBlock className="h-20 w-full" />
                      <SkeletonBlock className="h-4 w-1/2 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Skeleton Schedule */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {[1, 2, 3].map(i => (
                    <SkeletonBlock key={i} className="h-10 sm:h-12 w-24 sm:w-32" />
                  ))}
                </div>
                <SkeletonBlock className="h-8 w-40 mb-4 sm:mb-6" />
                <div className="space-y-2 sm:space-y-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <SkeletonCard key={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        ) : (
          /* Full Schedule Content */
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Server Info Sidebar */}
            <motion.div
              className="lg:col-span-1 order-2 lg:order-1 h-fit sticky top-24"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0 }}
            >
              <ServerInfoCard />
            </motion.div>

            {/* Schedule Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* 
               * Day Selector Tabs
               */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-4 mb-8 sm:mb-10 overflow-x-auto pb-6 pt-2 scrollbar-hide snap-x snap-mandatory -mx-4 px-6 sm:mx-0 sm:px-2"
              >
                {[1, 2, 3].map((day) => (
                  <motion.button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`font-minecraft px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border-4 transition-all relative whitespace-nowrap snap-start shrink-0 min-w-[120px] sm:min-w-[140px] shadow-[4px_4px_0px_rgba(0,0,0,0.5)] ${activeDay === day
                      ? "bg-[#333] text-white border-white border-b-gray-400 translate-y-1 shadow-[2px_2px_0px_rgba(0,0,0,0.5)]"
                      : "bg-[#111] text-gray-400 border-[#444] border-b-[#222] hover:bg-[#222] hover:text-white hover:border-gray-500"
                      }`}
                  >
                    <span className="relative z-10 drop-shadow-md">Day {day}</span>
                  </motion.button>
                ))}
              </motion.div>

              {/* Active Day Label - Styled */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8 flex items-center justify-between"
                >
                  <div className="bg-cyan-600 text-white font-minecraft py-2 px-4 border-2 border-cyan-300 shadow-[4px_4px_0px_#000] inline-flex items-center gap-2">
                    <span className="animate-pulse">_</span>
                    <span>DAY {activeDay} LOGS</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Event List with staggered entrance */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`schedule-${activeDay}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="space-y-6 relative ml-2 sm:ml-4"
                >
                  {/* Vertical Timeline Bar - Dashed for retro feel */}
                  <div className="hidden sm:block absolute left-[-30px] top-2 bottom-2 w-1 border-l-2 border-dashed border-gray-700"></div>

                  {getScheduleForDay(activeDay).map((item, index) => (
                    <motion.div
                      key={item.eventId || index}
                      variants={itemVariants}
                    >
                      <ScheduleEventCard item={item} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )
        }
      </motion.div >
    </div >
  );
};

export default Schedule;
