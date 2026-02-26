import { motion } from "framer-motion";

function ServiceWhy({
  bgImage,
  title1,
  title2,
  items,
  icons,
  softSection,
  softStagger,
  softItem,
}) {
  return (
    <section
      className="why-card-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="why-card-overlay">
        <div className="container">
          <motion.h3
            className="why-card-title"
            variants={softSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {title1} <span className="brand-highlight">{title2}</span>
          </motion.h3>

          <motion.div
            className="why-card-grid"
            variants={softStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {items.map((item, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  className="why-card"
                  variants={softItem}
                  key={index}
                >
                  <div className="why-icon">
                    <Icon />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServiceWhy;
