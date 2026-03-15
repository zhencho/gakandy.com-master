import { motion } from 'framer-motion';
import { CoreValue } from '../shared/types';

interface CoreValueCardProps {
  value: CoreValue;
  index: number;
  gradientFrom: string;
  gradientTo: string;
}

export const CoreValueCard: React.FC<CoreValueCardProps> = ({
  value,
  index,
  gradientFrom,
  gradientTo
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className={`absolute -inset-2 rounded-lg bg-gradient-to-r from-${gradientFrom} to-${gradientTo} blur opacity-0 transition duration-300 group-hover:opacity-20`}></div>
      <div className="relative flex h-full flex-col rounded-xl border border-[#24435d] bg-[rgba(12,27,42,0.92)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
        <div className={`mb-4 h-12 w-12 rounded-lg bg-gradient-to-br from-${gradientFrom} to-${gradientTo} p-2`}>
          <value.icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-[#f4fbff]">{value.title}</h3>
        <ul className="mt-2 space-y-2 text-[#9db0c3]">
          {value.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1.5 text-[#22B0EB]">&bull;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
