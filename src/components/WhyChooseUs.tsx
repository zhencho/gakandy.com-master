import { motion } from 'framer-motion';
import { Award, Clock, Target, Briefcase, Calendar, Star } from 'lucide-react';
import { fadeInUp, softReveal, staggerContainer } from '../utils/animations';

const features = [
  {
    name: 'Professional Excellence',
    description: 'Delivering high-quality auditing and consultancy services with unwavering commitment to excellence.',
    icon: Award,
    gradient: 'from-[#12314a] to-[#0C4D75]',
  },
  {
    name: 'Industry Expertise',
    description: 'Leveraging years of experience to provide comprehensive financial and business solutions.',
    icon: Briefcase,
    gradient: 'from-[#0f2740] to-[#126190]',
  },
  {
    name: 'Client-Centric Approach',
    description: 'Tailoring our services to meet your specific needs with unlimited support and guidance.',
    icon: Target,
    gradient: 'from-[#126190] to-[#22B0EB]',
  },
  {
    name: 'Timely Delivery',
    description: 'Meeting deadlines consistently while maintaining the highest standards of quality.',
    icon: Clock,
    gradient: 'from-[#102335] to-[#1f6f98]',
  },
  {
    name: 'Continuous Support',
    description: 'Providing ongoing assistance and updates to ensure your continued success.',
    icon: Calendar,
    gradient: 'from-[#102335] to-[#1b8bc4]',
  },
  {
    name: 'Quality Assurance',
    description: 'Implementing rigorous quality control measures to deliver exceptional results.',
    icon: Star,
    gradient: 'from-[#0C4D75] to-[#126190]',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#081522_0%,#0b1c2c_100%)] py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -skew-y-6 bg-[#0f2740] opacity-50 w-full h-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,176,235,0.09),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,198,53,0.06),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center lg:mb-16"
        >
          <h2 className="section-eyebrow">Why Choose Global Associates</h2>
          <p className="mt-3 text-4xl font-extrabold tracking-[-0.035em] text-[#f4fbff] sm:text-5xl font-serif">
            Our Commitment to Excellence
          </p>
          <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[#22B0EB] to-[#FFC635]" />
          <p className="section-subtitle mt-6 max-w-3xl">
            We are dedicated to delivering exceptional financial services and innovative solutions
            that drive your business forward.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 lg:mt-16"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={softReveal}
                className="group relative overflow-hidden rounded-[1.75rem] border border-[#24435d] bg-[rgba(12,27,42,0.9)] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-1 hover:border-[#2e597b]"
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.12]`} />
                <div className="relative flex flex-col items-start">
                  <motion.div variants={fadeInUp} className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.gradient} text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:scale-110`}>
                    <feature.icon className="h-7 w-7" aria-hidden="true" />
                  </motion.div>
                  <motion.h3 variants={fadeInUp} className="mt-5 text-xl font-bold tracking-[-0.02em] text-[#f4fbff] transition-colors duration-500 group-hover:text-[#7cd8ff]">
                    {feature.name}
                  </motion.h3>
                  <motion.p variants={fadeInUp} className="mt-3 text-[15px] leading-7 text-[#9db0c3] transition-colors duration-500 group-hover:text-[#d5e3ef] sm:text-base">
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
