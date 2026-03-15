import { motion } from 'framer-motion';
import { Target, Briefcase } from 'lucide-react';

export const VisionMission: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07131f_0%,#0b1c2c_100%)] py-12">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#033A5B] via-[#22B0EB] to-[#126190]" />
      <div className="absolute -left-64 -top-64 h-[500px] w-[500px] rounded-full bg-[#033A5B]/15 blur-3xl" />
      <div className="absolute -right-64 -bottom-64 h-[500px] w-[500px] rounded-full bg-[#22B0EB]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#033A5B] to-[#22B0EB] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-300" />
            <div className="relative h-full rounded-2xl border border-[#24435d] bg-[rgba(12,27,42,0.92)] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#033A5B] to-[#22B0EB] p-4 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <Target className="w-full h-full text-white" />
                </div>
              </div>
              
              {/* Content */}
              <h2 className="mb-4 text-2xl font-bold text-[#f4fbff] transition-colors duration-300 group-hover:text-[#7cd8ff]">
                Our Vision
              </h2>
              <p className="relative leading-relaxed text-[#9db0c3]">
                <span className="absolute -left-4 top-0 font-serif text-4xl text-[#22B0EB]/20">"</span>
                To be the trusted leader in professional services, setting industry standards through innovation, expertise, and unwavering commitment to excellence in everything we do.
                <span className="absolute -right-4 bottom-0 font-serif text-4xl text-[#22B0EB]/20">"</span>
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#22B0EB] to-[#126190] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-300" />
            <div className="relative h-full rounded-2xl border border-[#24435d] bg-[rgba(12,27,42,0.92)] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#22B0EB] to-[#126190] p-4 transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <Briefcase className="w-full h-full text-white" />
                </div>
              </div>
              
              {/* Content */}
              <h2 className="mb-4 text-2xl font-bold text-[#f4fbff] transition-colors duration-300 group-hover:text-[#7cd8ff]">
                Our Mission
              </h2>
              <p className="relative leading-relaxed text-[#9db0c3]">
                <span className="absolute -left-4 top-0 font-serif text-4xl text-[#22B0EB]/20">"</span>
                To empower our clients' success by delivering exceptional professional services through innovative solutions, ethical practices, and lasting partnerships built on trust.
                <span className="absolute -right-4 bottom-0 font-serif text-4xl text-[#22B0EB]/20">"</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 
