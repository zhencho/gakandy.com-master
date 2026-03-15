import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const ServicesCTA: React.FC = () => (
  <section className="relative overflow-hidden bg-[linear-gradient(135deg,#07111b_0%,#102335_55%,#12314a_100%)] py-16">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#033A5B]/20 to-[#06131f]/40"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-white"
      >
        <span className="mb-4 inline-block rounded-full border border-[#24435d] bg-white/5 px-4 py-1 text-sm font-medium text-[#7cd8ff] backdrop-blur-sm">
          Let's Work Together
        </span>
        <h3 className="mb-6 bg-gradient-to-r from-white to-[#9fdcff] bg-clip-text text-4xl font-bold text-transparent">
          Transform Your Business Today
        </h3>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[#c7d6e4]">
          Ready to elevate your business with professional financial expertise? Our team is here to provide tailored solutions that drive growth and ensure compliance.
        </p>
        <div className="flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#FFC635] px-8 py-4 font-medium text-[#06131f] shadow-lg shadow-[#FFC635]/10 transition-all duration-300 hover:scale-105 hover:bg-[#ffd86a]"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ServicesCTA;
