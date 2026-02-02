/**
 * @fileoverview Expert Talk section with Minecraft-themed speaker cards.
 *
 * Fixes:
 * - Auto-centers cards when only 1 or 2 speakers exist
 * - No empty grid columns
 * - Preserves all animations & hover effects
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import workshopsBg from "../assets/elite_minecraft_bg.webp";
import { expertTalks } from "../constants";
import { appleSlideUp, sectionTransition } from "../utils/motion";

function ExpertTalk() {
  const sectionRef = useRef(null);

  /* Scroll animations */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.2], [60, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.2], [0.98, 1]);

  /* Speaker Card */
  const SpeakerCard = ({ speaker, index }) => (
    <motion.div
      variants={appleSlideUp(index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="group relative cursor-pointer w-full"
      style={{
        maxWidth: expertTalks.length <= 2 ? "320px" : "100%",
      }}
    >
      <div
        className="relative w-full aspect-[3/4] bg-[#474747]"
        style={{
          border: "3px solid",
          borderColor: "#888888 #1a1a1a #1a1a1a #666666",
        }}
      >
        <div
          className="relative w-full h-full bg-[#3a3a3a] overflow-hidden"
          style={{
            border: "2px solid",
            borderColor: "#2a2a2a #555555 #555555 #2a2a2a",
          }}
        >
          {/* Image */}
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Default bottom bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/85 p-4 transition-opacity duration-500 group-hover:opacity-0">
            <h3 className="font-minecraft text-white text-sm uppercase tracking-wider">
              {speaker.name}
            </h3>
            <p className="font-minecraft text-cyan-400 text-xs mt-1">
              {"{" + speaker.title + "}"}
            </p>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/85 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col">
            <div>
              <h3 className="font-minecraft text-white text-sm uppercase tracking-wider">
                {speaker.name}
              </h3>
              <p className="font-minecraft text-cyan-400 text-xs mt-1">
                {"{" + speaker.title + "}"}
              </p>
            </div>

            <ul className="mt-4 space-y-2 flex-1 overflow-y-auto">
              {speaker.highlights.map((item, i) => (
                <li
                  key={i}
                  className="font-minecraft text-gray-300 text-xs flex gap-2"
                >
                  <span className="text-cyan-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pixel corners */}
          <div className="absolute top-0 left-0 w-3 h-3 bg-[#5a5a5a]" />
          <div className="absolute top-0 right-0 w-3 h-3 bg-[#5a5a5a]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#1a1a1a]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#1a1a1a]" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="expert-talk"
      ref={sectionRef}
      className="relative min-h-screen text-white overflow-hidden"
      style={{ paddingTop: "var(--navbar-height, 5rem)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={workshopsBg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, scale: contentScale }}
        className="relative z-10 px-6 py-16"
      >
        {/* Header */}
        <motion.div
          className="max-w-7xl mx-auto mb-12 flex items-center gap-4"
          variants={appleSlideUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="text-cyan-400 text-3xl">▶</span>
          <h2 className="font-minecraft text-3xl md:text-4xl uppercase tracking-widest">
            Expert Talks
          </h2>
        </motion.div>

        {/* 🔥 FIXED: Dynamic grid based on number of speakers */}
        <motion.div
          className={`
            max-w-6xl
            mx-auto
            ${expertTalks.length <= 2 
              ? "flex flex-wrap justify-center gap-8" 
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            }
          `}
          variants={sectionTransition}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {expertTalks.map((speaker, index) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              index={index}
            />
          ))}
        </motion.div>

        {/* Optional: Add a message if you want to show more are coming */}
        {expertTalks.length <= 2 && (
          <motion.div
            variants={appleSlideUp(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="flex justify-center items-center gap-4 mt-4">
              <div className="h-[2px] w-16 bg-cyan-500/30" />
              <span className="text-gray-400 text-sm">Stay Tuned</span>
              <div className="h-[2px] w-16 bg-cyan-500/30" />
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

export default ExpertTalk;