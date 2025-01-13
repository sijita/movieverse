'use client';
import { IconRosetteFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export default function CategorySubtitle({ section }: { section: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex items-center max-sm:text-center gap-1 transform -rotate-2 bg-black p-2 w-fit"
    >
      <IconRosetteFilled
        className="text-white fill-white flex-shrink-0"
        size={25}
      />
      <h2 className="text-3xl font-bold">{section} populares</h2>
    </motion.div>
  );
}
