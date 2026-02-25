"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero({ title = "Be The ENVI" }: { title?: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Parallax: background moves at 0.4x scroll speed
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 3.4, // synchronizes to trigger after the preloader finishes
                duration: 2.5,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            },
        },
    };

    return (
        <section ref={ref} className={styles.heroSection}>
            <motion.div style={{ y }} className={styles.bgContainer}>
                <Image
                    src="/images/BG.webp"
                    alt="ENVI Hero Background"
                    fill
                    priority
                    quality={100}
                    className={styles.bgImage}
                />
                <div className={styles.overlay} />
            </motion.div>

            <div className={styles.content}>
                <motion.h1
                    className={`display-hero ${styles.titleWrapper}`}
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className={styles.subtextContainer}
                >
                    <p className={styles.subtext}>Premium Import & Distribution</p>
                    <p className={styles.subtext}>Tallinn, Estonia</p>
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
            </motion.div>
        </section>
    );
}
