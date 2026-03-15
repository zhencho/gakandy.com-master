import { motion } from 'framer-motion';
import { Feature } from '../shared/types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-[#033A5B] to-[#22B0EB] rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
      <div className="relative flex h-full flex-col rounded-xl border border-[#24435d] bg-[rgba(12,27,42,0.92)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#033A5B] to-[#22B0EB] p-2 mb-4">
          <feature.icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="mb-3 text-xl font-bold text-[#f4fbff]">
          {feature.title}
        </h3>
        <p className="leading-relaxed text-[#9db0c3]">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}; 
