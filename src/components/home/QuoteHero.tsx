import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeInUp, softReveal, staggerContainer } from '../../utils/animations';

export const QuoteHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#07111b_0%,#081522_100%)]">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(#22B0EB 0.5px, transparent 0.5px), radial-gradient(#FFC635 0.5px, transparent 0.5px)",
            backgroundSize: "22px 22px",
            backgroundPosition: "0 0, 11px 11px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center">
          <motion.div variants={softReveal} className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#12314a] to-[#22B0EB] shadow-[0_18px_40px_rgba(34,176,235,0.18)]">
              <Quote className="h-6 w-6 text-white" />
            </div>
          </motion.div>

          <motion.blockquote variants={softReveal} className="relative">
            <div className="relative z-10">
              <p className="mx-auto max-w-4xl text-xl font-medium leading-relaxed tracking-[-0.02em] text-[#dce7f1] md:text-[1.7rem] md:leading-[1.55]">
                "If you can't show through an audit trail how you arrived at the numbers on your balance sheet, that is a significant internal control failure."
              </p>
            </div>
          </motion.blockquote>

          <motion.div variants={fadeInUp} className="mt-6">
            <p className="bg-gradient-to-r from-[#7cd8ff] to-[#FFC635] bg-clip-text text-lg font-medium tracking-[-0.02em] text-transparent">Robert Cobb</p>
            <p className="mt-1 text-sm text-[#7d92a7]">Auditor</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
