"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FocusCards from "@/components/FocusCards";
import CustomCursor from "@/components/CustomCursor";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      <main className={styles.main}>
        <Hero />

        {/* About Section */}
        <section id="about" className={`${styles.textSection} ${styles.aboutSection}`}>
          <div className="container">
            <motion.div
              className={styles.aboutGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { staggerChildren: 0.2, duration: 1.2, ease: "easeOut" } },
                hidden: { opacity: 0, y: 60, filter: "blur(10px)" }
              }}
            >
              <div className={styles.aboutHeader}>
                <div className={styles.overlineWrapper}>
                  <motion.div
                    variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.5, ease: "circOut" } } }}
                    className={styles.horizontalMark}
                  />
                  <motion.span
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } } }}
                    className={styles.overline}
                  >
                    Introduction
                  </motion.span>
                </div>
                <motion.h2
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } } }}
                  className={styles.hugeTitle}
                >
                  About ENVI
                </motion.h2>
              </div>

              <div className={styles.aboutContent}>
                <motion.p variants={{ hidden: { opacity: 0, y: 20, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} className={styles.leadParagraph}>
                  ENVI is a premium import and distribution company located in Tallinn, Estonia.
                </motion.p>

                <motion.div
                  className={styles.contentDivider}
                  variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1, ease: "circOut" } } }}
                />

                <motion.p variants={{ hidden: { opacity: 0, y: 20, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} className={styles.bodyText}>
                  We provide exclusive access to exceptional international brands in <span className={styles.highlight}>gourmet products, fine wine spirits, and professional cosmetics</span>. ENVI builds long-term strategic partnerships with visionary producers, offering seamless market entry into the Baltics and Europe: from logistics and customs clearance to premium marketing and sales channel development.
                </motion.p>
                <motion.p variants={{ hidden: { opacity: 0, y: 20, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} className={styles.bodyText}>
                  From Tallinn — a dynamic European hub — we guarantee the highest standards of quality, exclusivity, and precision.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        <Marquee />

        <FocusCards />

        {/* Official Partnership Section */}
        <section id="partners" className={`${styles.textSection} ${styles.editorialPartnership}`}>
          <div className="container">
            <div className={styles.editorialGrid}>
              <motion.div
                className={styles.editorialImageWrapper}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { scale: 0.95, opacity: 0, filter: "blur(10px)" },
                  visible: { scale: 1, opacity: 1, filter: "blur(0px)", transition: { duration: 1.5, ease: "easeOut" } }
                }}
              >
                <Image src="/images/histomer-professional-cosmetics.webp" alt="Histomer Partnership" fill className={styles.editorialImg} />
              </motion.div>

              <motion.div
                className={styles.editorialContent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { staggerChildren: 0.2, duration: 1.2, ease: "easeOut", delayChildren: 0.3 } }
                }}
              >
                <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className={styles.label}>Official Partnership</motion.span>
                <motion.h2
                  variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
                  className={styles.editorialTitle}
                >
                  Histomer<br />Professional
                </motion.h2>
                <motion.div
                  variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.5, ease: "circOut" } } }}
                  className={styles.contentDivider}
                />
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className={styles.leadParagraph}>
                  Italian dermocosmetic excellence, backed by over 40 years of scientific research.
                </motion.p>
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className={styles.bodyText}>
                  Innovative formulas regenerate, balance, and revitalize skin using botanical stem cells and skin bio-stimulation. Ideal for professionals, it offers cutting-edge treatments that transform even sensitive and damaged skin into its healthiest, most luminous state.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
