import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../styles/home/hero.css";
import logo from "../../assets/Home/Navex-global.png";

export default function Hero() {
  const { t } = useTranslation("home");

  const line1 = t("hero.line1");
  const line2 = t("hero.line2");

  const splitLetters = (text) => text.split("");

  const letterAnimation = {
    hidden: {
      opacity: 0,
      y: 40,
      x: () => Math.random() * 30 - 15,
      rotate: () => Math.random() * 10 - 5,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-overlay"></div>

      <div className="hero-center-content">
        <motion.img
          src={logo}
          alt="Navex Logo"
          className="hero-logo"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h3
          className="hero-company"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          {t("hero.company")}
        </motion.h3>

        {/* FIRST LINE */}
        <motion.h1
          className="hero-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ staggerChildren: 0.05 }}
        >
          {splitLetters(line1).map((char, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* SECOND LINE */}
        <motion.h1
          className="hero-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: 0.1, staggerChildren: 0.05 }}
        >
          {splitLetters(line2).map((char, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {t("hero.description")}
        </motion.p>
      </div>

      <motion.div
        className="scroll-circle"
        onClick={() => {
          document.getElementById("intro")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <span className="arrow">↓</span>
      </motion.div>
    </section>
  );
}
