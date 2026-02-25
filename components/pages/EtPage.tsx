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

export default function EtPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      <main className={styles.main}>
        <Hero title="Ole ENVI" />

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
                    Sissejuhatus
                  </motion.span>
                </div>
                <motion.h2
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } } }}
                  className={styles.hugeTitle}
                >
                  Ettevõttest ENVI
                </motion.h2>
              </div>

              <div className={styles.aboutContent}>
                <motion.p variants={{ hidden: { opacity: 0, y: 20, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} className={styles.leadParagraph}>
                  ENVI on Tallinnas, Eestis tegutsev esmaklassiline impordi ja levitamise ettevõte.
                </motion.p>

                <motion.div
                  className={styles.contentDivider}
                  variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1, ease: "circOut" } } }}
                />

                <motion.p variants={{ hidden: { opacity: 0, y: 20, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} className={styles.bodyText}>
                  Pakume eksklusiivset ligipääsu erakordsetele rahvusvahelistele brändidele <span className={styles.highlight}>gurmeetoidu, peenveinide ja professionaalse kosmeetika</span> valdkonnas. ENVI loob pikaajalisi strateegilisi partnerlusi visioonikate tootjatega, pakkudes sujuvat turule sisenemist Baltikumis ja Euroopas: alates logistikast ja tollivormistusest kuni esmaklassilise turunduse ja müügikanalite arenduseni.
                </motion.p>
                <motion.p variants={{ hidden: { opacity: 0, y: 20, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} className={styles.bodyText}>
                  Tallinnast — dünaamilisest Euroopa keskusest — tagame kõrgeima kvaliteedi, eksklusiivsuse ja täpsuse standardid.
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
                <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className={styles.label}>Ametlik Partnerlus</motion.span>
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
                  Itaalia dermakosmeetika tipptasemel, mida toetab üle 40 aasta teaduslikku uurimistööd.
                </motion.p>
                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className={styles.bodyText}>
                  Uuenduslikud valemid taastavad, tasakaalustavad ja elustavad nahka, kasutades botaanilisi tüvirakke ja naha biostimulatsiooni. Ideaalne professionaalidele, see pakub tipptasemel ravimeetodeid, mis muudavad isegi tundliku ja kahjustatud naha oma kõige tervemaks ja säravamaks olekuks.
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
