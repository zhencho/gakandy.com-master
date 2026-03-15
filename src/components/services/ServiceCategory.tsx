import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface ServiceCategoryProps {
  title: string;
  description: string;
  services: string[];
}

export const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, description, services }) => (
  <motion.div
    variants={fadeInUp}
    className="rounded-[1.5rem] border border-[#24435d] bg-[rgba(12,27,42,0.9)] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-[#2e597b]"
  >
    <h3 className="mb-4 text-2xl font-bold text-[#f4fbff]">{title}</h3>
    <p className="mb-6 text-[#9db0c3]">{description}</p>
    <ul className="space-y-3">
      {services.map((service, index) => (
        <li key={index} className="flex items-start space-x-2">
          <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#4ec4ff]" />
          <span className="text-[#d6e3ef]">{service}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default ServiceCategory;
