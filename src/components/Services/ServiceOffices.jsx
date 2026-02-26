import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function ServiceOffices({ title1, title2, subtitle, offices }) {
  const marqueeRef = useRef(null);
  const controls = useAnimation();

  const items = [...offices, ...offices];

  useEffect(() => {
    const containerWidth = marqueeRef.current.scrollWidth / 2;

    controls.start({
      x: [-containerWidth, 0],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, []);

  return (
    <section className="offices-section">
      <div className="offices-title">
        <h2>
          {title1} <span className="highlight">{title2}</span>
        </h2>
        <p>{subtitle}</p>
      </div>

      <div className="marquee-wrapper">
        <motion.div
          className="marquee-content"
          ref={marqueeRef}
          animate={controls}
        >
          {items.map((office, i) => (
            <div className="office-card" key={i}>
              <img src={office.img} alt={office.name} className="office-img" />
              <h3>{office.name}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceOffices;
