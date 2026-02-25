"use client";

import { motion } from "framer-motion";
import styles from "./FocusCards.module.css";
import pageStyles from "@/app/page.module.css";
import Image from "next/image";

const categories = [
    {
        id: "gourmet",
        label: "Category",
        title: "Gourmet Products",
        description: "We curate exceptional gourmet products from the world’s rarest and finest origins — rare ingredients, exquisite flavors, and timeless indulgence for the most discerning palates.",
        image: "/images/7d226198-69a8-47ec-9b0f-4991a32c5f74.webp" // Placeholder for now, can swap later
    },
    {
        id: "spirits",
        label: "Category",
        title: "Fine Wines & Spirits",
        description: "We present fine wines and premium spirits that represent the pinnacle of craftsmanship and heritage. Rare champagnes with delicate bubbles and timeless elegance, alongside aged single malts.",
        image: "/images/strong-hard-alcoholic-drinks-spirits-liqueurs-d-2026-01-09-09-52-38-utc.webp"
    },
    {
        id: "cosmetics",
        label: "Category",
        title: "Professional Cosmetics",
        description: "We present professional cosmetics of the highest caliber — advanced, science-backed formulations that deliver visible transformation and timeless beauty.",
        image: "/images/histomer_products.png"
    }
];

export default function FocusCards() {
    return (
        <section id="focus" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={`${pageStyles.aboutHeader} ${styles.header}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: "easeOut" } }
                    }}
                >
                    <div className={pageStyles.overlineWrapper}>
                        <motion.div
                            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.5, ease: "circOut" } } }}
                            className={pageStyles.horizontalMark}
                        />
                        <motion.span
                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } } }}
                            className={pageStyles.overline}
                        >
                            Our Focus
                        </motion.span>
                    </div>
                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } } }}
                        className={pageStyles.hugeTitle}
                    >
                        Our Focus
                    </motion.h2>
                    <p className={styles.intro} style={{ marginTop: "40px", maxWidth: "700px" }}>
                        Three directions define ENVI: gourmet experiences of unparalleled quality, fine wine & spirits that embody timeless refinement, and cosmetics crafted for transformative results.
                    </p>
                </motion.div>

                <div className={styles.list}>
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            className={styles.row}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
                                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.5, ease: "easeOut" } }
                            }}
                        >
                            <div className={styles.imageCol}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        fill
                                        className={styles.image}
                                    />
                                    <div className={styles.imageOverlay} />
                                </div>
                            </div>
                            <div className={styles.textCol}>
                                <h3 className={styles.cardTitle}>{cat.title}</h3>
                                <p className={styles.cardBody}>{cat.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
