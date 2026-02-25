"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("interactive")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateCursorPosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateCursorPosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="cursor-dot"
            animate={{
                x: position.x - (isHovering ? 32 : 8),
                y: position.y - (isHovering ? 32 : 8),
                width: isHovering ? 64 : 16,
                height: isHovering ? 64 : 16,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.2 }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                backgroundColor: "#FFFFFF",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 9999,
                mixBlendMode: "difference", // This makes it invert anything beneath it
            }}
        />
    );
}
