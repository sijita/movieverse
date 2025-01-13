'use client';
import { IconCategoryFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export default function CategoryTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-1 bg-white text-black p-2 transform -rotate-1 w-fit shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    >
      <IconCategoryFilled className="flex-shrink-0" size={25} />
      <h2 className="text-4xl font-bold">Categorías</h2>
    </motion.div>
  );
}
