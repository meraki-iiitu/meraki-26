/**
 * @fileoverview Animated route configuration with page transitions.
 * 
 * Uses React Router with Framer Motion AnimatePresence for coordinated
 * page enter/exit animations. Each route is wrapped in PageWrapper
 * for consistent transition behavior.
 * 
 * Code-splitting is implemented using React.lazy() for route-based chunks.
 * 
 * @see DOCS.md#animation-system for AnimatePresence behavior
 * @module components/AnimatedRoutes
 */

import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Hero from "./Hero";
import PageWrapper from "./PageWrapper";

// Lazy-loaded page components for code-splitting
const Contact = React.lazy(() => import("./Contact"));
const Gallery = React.lazy(() => import("../pages/Gallery"));
const Schedule = React.lazy(() => import("../pages/Schedule"));
const Team = React.lazy(() => import("../pages/Team"));
const DevTeam = React.lazy(() => import("../pages/DevTeam"));
const EventDetails = React.lazy(() => import("../pages/EventDetails"));
const WorkshopDetails = React.lazy(() => import("../pages/WorkshopDetails"));

/**
 * Loading fallback component for lazy-loaded routes.
 */
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="font-minecraft text-cyan-400 text-lg tracking-wider">LOADING...</p>
    </div>
  </div>
);

/**
 * Animated route switcher with page transitions.
 * 
 * @returns {JSX.Element} Routes wrapped in AnimatePresence
 * 
 * @animation
 * - mode="wait": New page waits for current page exit animation
 * - key={location.pathname}: Triggers AnimatePresence on route change
 * 
 * @routes
 * - / → Hero (home page with sections)
 * - /contact → Contact form
 * - /gallery → Photo gallery
 * - /schedule → Event schedule
 * - /team → Team members
 * - /devteam → Development team credits
 * - /event/:eventId → Dynamic event details
 * - /workshop/:workshopSlug → Dynamic workshop details
 */
const AnimatedRoutes = () => {
  // Track current location for route-based key
  const location = useLocation();

  return (
    /**
     * AnimatePresence Configuration
     * 
     * @mode "wait" - Ensures exit animation completes before enter begins
     * @key location.pathname - Unique key triggers remount on route change
     */
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Suspense fallback={<PageLoader />}><Contact /></Suspense></PageWrapper>} />
        <Route path="/gallery" element={<PageWrapper><Suspense fallback={<PageLoader />}><Gallery /></Suspense></PageWrapper>} />
        <Route path="/schedule" element={<PageWrapper><Suspense fallback={<PageLoader />}><Schedule /></Suspense></PageWrapper>} />
        <Route path="/team" element={<PageWrapper><Suspense fallback={<PageLoader />}><Team /></Suspense></PageWrapper>} />
        <Route path="/devteam" element={<PageWrapper><Suspense fallback={<PageLoader />}><DevTeam /></Suspense></PageWrapper>} />
        <Route path="/event/:eventId" element={<PageWrapper><Suspense fallback={<PageLoader />}><EventDetails /></Suspense></PageWrapper>} />
        <Route path="/workshop/:workshopSlug" element={<PageWrapper><Suspense fallback={<PageLoader />}><WorkshopDetails /></Suspense></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
