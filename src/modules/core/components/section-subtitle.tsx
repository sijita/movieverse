'use client';
import { motion } from 'framer-motion';

export default function SectionSubtitle({
  icon,
  subtitle,
  rotate,
}: {
  icon: React.ReactNode;
  subtitle: string;
  rotate: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      viewport={{ once: true }}
      className={`flex items-center gap-2 bg-black text-white p-2 transform ${rotate} w-fit`}
    >
      {icon}
      <h2 className="text-3xl font-semibold">{subtitle}</h2>
    </motion.div>
  );
}
