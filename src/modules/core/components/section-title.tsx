'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SectionTitle({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-2 transform -rotate-1 w-fit shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    >
      <Link
        href={href}
        className="text-4xl font-bold text-black hover:text-white hover:bg-black transition-colors"
      >
        {title}
      </Link>
    </motion.div>
  );
}
