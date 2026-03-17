import { motion } from 'framer-motion';
import { Star, Lightbulb, Users, Globe } from 'lucide-react';
import { fadeInUp, slideInFromLeft, slideInFromRight, staggerContainer } from '../utils/animations';
import coreValuesImage from '../assets/core-values.jpg';

const coreValues = [
  {
    icon: Star,
    title: 'Excellence',
    description: 'Delivering high-quality professional services with unwavering commitment to standards and best practices.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Adapting to changing business environments with modern solutions and forward-thinking approaches.',
  },
  {
    icon: Users,
    title: 'Client Focus',
    description: 'Understanding and meeting client needs through personalized attention and dedicated service.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Providing international expertise with deep local knowledge to serve businesses worldwide.',
  },
];

export default function CoreValues() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="relative overflow-hidden bg-gradient-to-br from-[#033A5B] via-[#0C4D75] to-[#084461] py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,176,235,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(18,97,144,0.2),transparent_30%)]" />
        <div className="absolute -left-64 -top-64 h-[500px] w-[500px] rounded-full bg-[#22B0EB]/10 blur-3xl" />
        <div className="absolute -right-64 -bottom-64 h-[500px] w-[500px] rounded-full bg-[#126190]/10 blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#22B0EB] via-[#126190] to-[#033A5B]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-16 xl:gap-20">
          <motion.div
            variants={slideInFromLeft}
            className="max-w-2xl text-center lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[#8fdbff] shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:text-sm"
            >
              Professional Principles
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="mb-6 text-4xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.4rem]"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-2xl text-base leading-8 text-slate-200/90 sm:text-lg sm:leading-9 lg:mx-0"
            >
              At Global Associates, our values shape everything we do. We believe in delivering excellence through 
              innovation, maintaining unwavering client focus, and leveraging our global expertise for local success.
            </motion.p>
          </motion.div>

          <motion.div
            variants={slideInFromRight}
            className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-[#22B0EB]/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-2 shadow-[0_26px_70px_rgba(3,58,91,0.35)] backdrop-blur-sm">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="relative overflow-hidden rounded-[1.25rem] shadow-[0_18px_45px_rgba(2,12,27,0.4)]">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#021a2d]/70 via-[#033A5B]/10 to-transparent" />
                <img
                  src={coreValuesImage}
                  alt="Professional Excellence"
                  className="h-[280px] w-full object-cover transition-transform duration-700 ease-out sm:h-[340px] lg:h-[420px]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_14px_36px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-500 hover:border-[#6dd8ff]/30 hover:bg-white/[0.1] hover:shadow-[0_24px_60px_rgba(2,12,27,0.32)] sm:p-7"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#22B0EB]/18 via-transparent to-[#126190]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#22B0EB] via-[#1a8dbd] to-[#126190] shadow-[0_14px_30px_rgba(34,176,235,0.22)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <value.icon className="h-7 w-7 text-white sm:h-8 sm:w-8" />
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-semibold tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#9fe4ff]">
                  {value.title}
                </h3>

                <p className="text-sm leading-7 text-slate-200/85 transition-colors duration-300 group-hover:text-white sm:text-[0.95rem]">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
