import "../../styles/footer.css";
import { FiInstagram, FiX, FiLinkedin } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";
import toast from "../../toastConfig";

export default function Footer() {
  const { t } = useTranslation("footer");
  const [email, setEmail] = useState("");

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        { subscriber_email: email },
        "YOUR_PUBLIC_KEY",
      )
      .then(() => {
        toast.success("Subscribed successfully!");
        setEmail("");
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  };

  return (
    <footer>
      <hr className="footer-line" />

      <motion.section
        className="footer-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* TOP */}
        <motion.div className="footer-top" variants={fadeUp}>
          <h2 className="footer-logo">{t("footer.brand")}</h2>

          <nav className="footer-nav">
            <motion.a href="#hero" whileHover={{ x: 5 }}>
              {t("nav.home")}
            </motion.a>
            <motion.a href="#about" whileHover={{ x: 5 }}>
              {t("nav.about")}
            </motion.a>
            <motion.a href="#services" whileHover={{ x: 5 }}>
              {t("nav.services")}
            </motion.a>
            <motion.a href="contact" whileHover={{ x: 5 }}>
              {t("nav.contact")}
            </motion.a>
          </nav>

          {/* SOCIAL LINKS */}
          <motion.div className="footer-socials" variants={fadeUp}>
            <motion.a
              href="https://www.linkedin.com/company/navex-global-ksa/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
            >
              <FiLinkedin />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/navexglobalsa/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
            >
              <FiInstagram />
            </motion.a>

            <motion.a
              href="https://x.com/navexglobalksa?s=11"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
            >
              <FiX />
            </motion.a>
          </motion.div>
        </motion.div>

        <hr className="footer-line" />

        {/* BOTTOM */}
        <motion.div className="footer-bottom" variants={fadeUp}>
          <div className="footer-left">
            <p>{t("footer.copy")}</p>
            <p className="footer-small">{t("footer.tagline")}</p>

            {/* ADDRESS BLOCK */}
            <div className="footer-address">
              <p>{t("footer.address.building")}</p>
              <p>{t("footer.address.city")}</p>
              <p>{t("footer.address.area")}</p>
            </div>
          </div>

          <motion.div className="footer-right">
            <h3 className="footer-news-title">{t("footer.subscribeTitle")}</h3>

            <motion.form
              className="footer-input-wrap"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <motion.button
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                {t("footer.submit")}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.section>
    </footer>
  );
}
