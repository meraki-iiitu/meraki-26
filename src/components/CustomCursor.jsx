import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Custom Minecraft Crossbow Cursor
 * 
 * Renders a custom DOM-based cursor that tracks mouse movement.
 * - Default: Crossbow (crossbow.png)
 * - Hover: Pointer Arrow (pointer.png)
 * - Click: Recoil animation ("Shooting" effect)
 */
const CustomCursor = () => {
    // Mouse position state
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Direct mouse position for instant response (no spring lag)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Interaction states
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            // Update raw mouse values
            // Subtract offset to center the cursor hotpot if needed
            // For crossbow: Tip is usually top-left or center. Let's assume top-left requires no offset 
            // but usually custom cursors need -width/2. 
            // Standard CSS cursor is top-left (0,0). 
            // We'll stick to (e.clientX, e.clientY) for 0,0 alignment, 
            // but might need adjustment based on image hotspot.
            // Directly set x/y for instant movement
            x.set(e.clientX);
            y.set(e.clientY);

            if (!isVisible) setIsVisible(true);
        };

        // Check for hoverable elements (links, buttons, inputs)
        const handleMouseOver = (e) => {
            const target = e.target;

            // Check for interactive elements
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('role') === 'button' ||
                target.classList.contains('pointer-cursor') ||
                // Check for input types that are effectively buttons
                (target.tagName === 'INPUT' && ['submit', 'button', 'reset', 'checkbox', 'radio'].includes(target.type));

            setIsHovering(isInteractive);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', () => setIsClicking(true));
        window.addEventListener('mouseup', () => setIsClicking(false));
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', () => setIsClicking(true));
            window.removeEventListener('mouseup', () => setIsClicking(false));
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    // Rigid animation variants
    const variants = {
        default: {
            rotate: 0,
            scale: 1,
            x: 0,
            y: 0
        },
        clicking: {
            // "Recoil" - quick snap back and rotate
            rotate: -10,
            scale: 0.95,
            x: -2,
            y: 2,
            transition: {
                type: "tween", // Use tween for instant mechanical feel
                duration: 0.05
            }
        },
        hover: {
            scale: 1.1,
            rotate: 0,
            transition: { duration: 0.1 }
        }
    };

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{ x, y }}
        >
            <motion.img
                src={isHovering ? "/assets/cursor/pointer.png" : "/assets/cursor/crossbow.png"}
                alt="cursor"
                className="w-8 h-8 object-contain"
                variants={variants}
                animate={isClicking ? "clicking" : (isHovering ? "hover" : "default")}
                style={{
                    transformOrigin: "top left"
                }}
            />
        </motion.div>
    );
};

export default CustomCursor;
