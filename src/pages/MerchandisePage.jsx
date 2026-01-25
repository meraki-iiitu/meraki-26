/**
 * @fileoverview Merchandise store page with modern premium aesthetic.
 * 
 * Displays a merchandise catalog with brand selection and product grid.
 * Features a sleek dark theme with glassmorphism and neon accents.
 * 
 * @component
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { appleSlideUp, appleScaleIn } from "../utils/motion";
import { STORE_ASSETS, DOON_PRODUCTS, DOPAMINE_PRODUCTS } from "../constants/merchandiseData";

/**
 * Modern Glassmorphism Product Card
 */
const ProductCard = ({ product, onClick, isSelected, brandColor }) => {
    const accentColor = brandColor === 'cyan' ? 'border-cyan-500 shadow-cyan-500/20' : 'border-red-500 shadow-red-500/20';
    const textColor = brandColor === 'cyan' ? 'text-cyan-400' : 'text-red-400';
    const bgHover = brandColor === 'cyan' ? 'group-hover:bg-cyan-950/30' : 'group-hover:bg-red-950/30';

    return (
        <motion.div
            onClick={onClick}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className={`
                relative cursor-pointer group rounded-xl overflow-hidden transition-all duration-300
                bg-white/5 border backdrop-blur-sm
                ${isSelected
                    ? `border-2 ${accentColor} shadow-[0_0_30px_rgba(0,0,0,0.3)] bg-white/10`
                    : 'border-white/10 hover:border-white/20'
                }
            `}
        >
            {/* Image Container */}
            <div className={`
                relative aspect-square p-4 flex items-center justify-center 
                transition-colors duration-500 ${bgHover}
            `}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />

                {/* Type Badge */}
                <div className="absolute top-3 left-3">
                    <span className="font-terminal text-[10px] sm:text-xs px-2 py-1 rounded bg-black/60 backdrop-blur-md text-white/80 border border-white/10 uppercase tracking-widest">
                        {product.type}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 bg-black/40 border-t border-white/5">
                <h4 className="font-minecraft text-white text-sm sm:text-base tracking-wide uppercase line-clamp-2 min-h-[2.5em] mb-2 leading-relaxed">
                    {product.name}
                </h4>
                <div className="flex items-center justify-end">
                    <span className="font-terminal text-xs text-white/40 group-hover:text-white/80 transition-colors uppercase tracking-wider">
                        View Details →
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

/**
 * Modern Store Selection Card
 * Optimized for full-screen fit without scrolling
 */
const StoreCard = ({ name, image, accentColor, onClick }) => {
    const isCyan = accentColor === 'cyan';
    const gradient = isCyan
        ? 'from-cyan-950/50 to-transparent hover:from-cyan-900/60'
        : 'from-red-950/50 to-transparent hover:from-red-900/60';
    const border = isCyan ? 'hover:border-cyan-500/50' : 'hover:border-red-500/50';
    const btnColor = isCyan ? 'bg-cyan-500 group-hover:bg-cyan-400' : 'bg-red-600 group-hover:bg-red-500';

    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`
                relative w-full h-full overflow-hidden rounded-2xl border border-white/10 
                bg-gradient-to-br ${gradient} backdrop-blur-xl p-0
                transition-all duration-300 ${border} group text-left flex flex-col
            `}
        >
            {/* Flexible Image Container - Shrinks to fit available space */}
            <div className="relative flex-1 min-h-0 w-full flex items-center justify-center p-4 bg-black/20">
                <div className={`
                    absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60
                `} />
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
                />
            </div>

            {/* Fixed Height Content - Always visible at bottom */}
            <div className="flex-shrink-0 p-4 sm:p-6 relative z-10 flex flex-col bg-black/40 border-t border-white/5">
                <h3 className="font-minecraft text-white text-lg sm:text-2xl tracking-widest uppercase mb-1">
                    {name}
                </h3>
                <p className="font-terminal text-white/60 text-[10px] sm:text-xs mb-3">
                    Exclusive {isCyan ? 'Doon' : 'Dopamine'} Collection
                </p>

                <div className={`
                    w-full py-3 rounded-lg font-minecraft text-center text-white tracking-widest uppercase text-xs sm:text-sm
                    transform transition-all duration-300 shadow-lg ${btnColor} bg-opacity-90
                `}>
                    Enter Store
                </div>
            </div>
        </motion.button>
    );
};

/**
 * Main Merchandise Page
 */
const MerchandisePage = () => {
    const location = useLocation();
    const [showPopup, setShowPopup] = useState(true);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (location.state?.brand) {
            handleSelectBrand(location.state.brand);
        }
    }, [location.state]);

    const handleSelectBrand = (brand) => {
        setSelectedBrand(brand);
        setShowPopup(false);
        const productList = brand === "doon" ? DOON_PRODUCTS : DOPAMINE_PRODUCTS;
        setProducts(productList);
        setSelectedProduct(productList.find(p => p.featured) || productList[0]);
    };

    const isCyan = selectedBrand === "doon";
    const brandColor = isCyan ? "cyan" : "red";
    const brandName = isCyan ? "Doon Merchandise" : "Dopamine Store";
    const accentText = isCyan ? 'text-cyan-400' : 'text-red-500';

    return (
        <div className="min-h-screen bg-black text-white relative selection:bg-cyan-500/30">
            {/* Abstract Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-neutral-950" />
                <div className={`
                    absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20
                    ${isCyan ? 'bg-cyan-600' : 'bg-red-600'}
                `} />
                <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[150px] bg-purple-900/20" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            {/* Brand Selection Screen - Full Screen No Scroll */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col overflow-hidden"
                    >
                        <div className="flex-1 flex flex-col p-4 w-full h-full max-w-7xl mx-auto">
                            {/* Header */}
                            <div className="flex-shrink-0 text-center mb-4 sm:mb-8 pt-2 sm:pt-4">
                                <h1 className="font-minecraft text-2xl sm:text-4xl md:text-5xl text-white mb-2 tracking-wider">
                                    SELECT STORE
                                </h1>
                                <p className="font-terminal text-white/50 tracking-widest uppercase text-[10px] sm:text-sm">
                                    Choose your preferred merchandise partner
                                </p>
                            </div>

                            {/* Split Screen Grid */}
                            <div className="flex-1 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 min-h-0 pb-4">
                                <StoreCard
                                    name="Doon Store"
                                    image={STORE_ASSETS.doon.hoodie}
                                    accentColor="cyan"
                                    onClick={() => handleSelectBrand("doon")}
                                />
                                <StoreCard
                                    name="Dopamine"
                                    image={STORE_ASSETS.dopamine.hoodie}
                                    accentColor="red"
                                    onClick={() => handleSelectBrand("dopamine")}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Shop Content */}
            {selectedBrand && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative z-10 min-h-screen pt-24 pb-20 px-4 sm:px-8 max-w-[1600px] mx-auto"
                >
                    {/* Header */}
                    <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 mb-2"
                            >
                                <span className={`w-3 h-3 rounded-full ${isCyan ? 'bg-cyan-500' : 'bg-red-500'}`} />
                                <span className="font-terminal text-white/60 text-sm tracking-[0.2em] uppercase">
                                    Official Meraki 2026 Collection
                                </span>
                            </motion.div>
                            <h1 className="font-minecraft text-4xl md:text-6xl text-white uppercase tracking-wider">
                                {brandName}
                            </h1>
                        </div>

                        <motion.button
                            onClick={() => setShowPopup(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border border-white/20 bg-white/5 hover:bg-white/10 
                                     backdrop-blur-sm rounded-lg font-terminal text-white/80 
                                     text-xs tracking-widest uppercase transition-all"
                        >
                            Switch Store
                        </motion.button>
                    </header>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 icon-grid">

                        {/* Featured Sidebar (Desktop) / Top Section (Mobile) */}
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <AnimatePresence mode="wait">
                                {selectedProduct && (
                                    <motion.div
                                        key={selectedProduct.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="lg:sticky lg:top-32"
                                    >
                                        <div className={`
                                            relative rounded-2xl overflow-hidden border bg-gradient-to-b
                                            ${isCyan
                                                ? 'border-cyan-500/30 from-cyan-950/20 to-black/40'
                                                : 'border-red-500/30 from-red-950/20 to-black/40'
                                            } backdrop-blur-xl
                                        `}>
                                            <div className="p-8 md:p-12 flex items-center justify-center bg-[url('/grid.png')] bg-repeat opacity-90">
                                                <img
                                                    src={selectedProduct.image}
                                                    alt={selectedProduct.name}
                                                    className="w-full max-w-sm drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>

                                            <div className="p-8 border-t border-white/10 bg-black/40">
                                                <div className="flex items-start justify-between gap-4 mb-4">
                                                    <div>
                                                        <span className="inline-block px-3 py-1 rounded bg-white/10 text-white/60 text-xs font-terminal uppercase tracking-widest mb-3">
                                                            {selectedProduct.type}
                                                        </span>
                                                        <h2 className="font-minecraft text-2xl md:text-3xl text-white leading-tight uppercase">
                                                            {selectedProduct.name}
                                                        </h2>
                                                    </div>
                                                </div>

                                                <a
                                                    href={selectedProduct.buyLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`
                                                        block w-full py-5 rounded-xl font-minecraft text-xl text-center uppercase tracking-widest text-white shadow-lg
                                                        transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                                                        ${isCyan
                                                            ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 shadow-cyan-900/20'
                                                            : 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 shadow-red-900/20'
                                                        }
                                                    `}
                                                >
                                                    Buy Now
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Product Grid */}
                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <h3 className="font-terminal text-white/40 text-sm uppercase tracking-widest mb-6">
                                Available Products ({products.length})
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                                {products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        onClick={() => setSelectedProduct(product)}
                                        isSelected={selectedProduct?.id === product.id}
                                        brandColor={brandColor}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default MerchandisePage;
