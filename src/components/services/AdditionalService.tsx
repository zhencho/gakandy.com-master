import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { LucideIcon } from 'lucide-react';

interface AdditionalServiceProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const AdditionalService: React.FC<AdditionalServiceProps> = ({ title, description, icon: Icon }) => (
  <motion.div
    variants={fadeInUp}
    className="group relative rounded-[1.5rem] border border-[#24435d] bg-[rgba(12,27,42,0.88)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-[#2e597b]"
  >
    <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-r from-[#033A5B]/20 to-[#22B0EB]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative">
      <div className="mb-4 h-12 w-12 transform rounded-xl bg-gradient-to-br from-[#12314a] to-[#22B0EB] p-2.5 transition-transform duration-300 group-hover:scale-110">
        <Icon className="w-full h-full text-white" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-[#f4fbff] transition-colors duration-300 group-hover:text-[#7cd8ff]">
        {title}
      </h3>
      <p className="text-sm text-[#9db0c3]">
        {description}
      </p>
    </div>
  </motion.div>
);

export default AdditionalService;
