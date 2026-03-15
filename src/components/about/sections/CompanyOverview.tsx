import { motion } from 'framer-motion';
import { Feature } from '../shared/types';
import { FeatureCard } from '../cards/FeatureCard';
import { Briefcase, Users, Shield, Award } from 'lucide-react';

const features: Feature[] = [
  {
    title: 'Full-Service Capability',
    description: 'A professional services firm offering comprehensive financial and business solutions in Sri Lanka.',
    icon: Briefcase,
  },
  {
    title: 'Client-Focused Structure',
    description: 'We construct our team to reflect your organizational structure for optimal service delivery.',
    icon: Users,
  },
  {
    title: 'Transparent Approach',
    description: 'All aspects of our service delivery are made transparent to ensure client satisfaction.',
    icon: Shield,
  },
  {
    title: 'Diverse Services',
    description: 'From accounting and auditing to business advisory and system implementation.',
    icon: Award,
  },
];

export const CompanyOverview: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07131f_0%,#0b1c2c_100%)] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#f4fbff] sm:text-4xl">
            Company Overview
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg leading-8 text-[#9db0c3]">
            Global Associates Kandy is a leading professional services firm based in Kandy, Sri Lanka, 
            offering a diverse range of financial and business services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}; 
