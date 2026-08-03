import { motion } from "framer-motion";

const letters = ["H", "E", "R", "O"];

export default function Hero() {
  return (
    <section className="min-h-screen bg-green-600 flex items-center justify-center overflow-hidden">
      <div className="flex gap-3">
        {letters.map((letter, index) => (
          <motion.span
            key={letter}
            initial={{
              opacity: 0,
              y: index % 2 === 0 ? -150 : 150,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-7xl md:text-9xl font-extrabold text-white"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
