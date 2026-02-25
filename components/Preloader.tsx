"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hold the preloader for 2.2 seconds to let the logo glow and hold
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: {
                            duration: 1.2,
                            ease: [0.76, 0, 0.24, 1], // Custom cubic-bezier for a strong, decisive pull up
                            delay: 0.2
                        }
                    }}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100vh",
                        backgroundColor: "#000000",
                        zIndex: 99999, // Ensure it is above absolutely everything
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        pointerEvents: "none",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                            transition: { duration: 1.2, ease: "easeOut" }
                        }}
                        exit={{
                            opacity: 0,
                            y: -50,
                            transition: { duration: 0.8, ease: "easeIn" }
                        }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            src="/images/ENVI.webp"
                            alt="ENVI Logo"
                            width={160}
                            height={48}
                            style={{
                                objectFit: "contain",
                                filter: "invert(1) brightness(2) drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                            }}
                            priority
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
