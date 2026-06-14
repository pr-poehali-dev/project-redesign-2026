import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/86c5a263-92d9-46ff-91d2-29f6739b2c9f/files/e4df33ab-ad29-46d9-9ba6-c8aff4a06b4d.jpg"
          alt="Натяжной потолок в интерьере"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ИДЕАЛЬНЫЙ ПОТОЛОК
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Натяжные потолки премиум-класса. Монтаж за 1 день, гарантия 15 лет
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-black px-8 py-3 text-sm uppercase tracking-wide transition-all duration-300 hover:bg-transparent hover:text-white border border-white"
        >
          Рассчитать стоимость
        </a>
      </div>
    </div>
  );
}