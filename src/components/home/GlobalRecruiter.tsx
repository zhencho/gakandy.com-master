import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AUDIT_TOOL_URL } from '../../constants/links';
import { fadeInUp, softReveal, staggerContainer } from '../../utils/animations';

export const GlobalRecruiter: React.FC = () => {
  return (
    <section className="overflow-hidden bg-[linear-gradient(135deg,#07111b_0%,#0b1c2c_55%,#102335_100%)] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h2 
            className="relative mb-5 text-3xl font-bold tracking-[-0.03em] animate-text-shine"
            variants={softReveal}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            style={{
              background: 'linear-gradient(-45deg, #FFC635, #FFD700, #ffffff, #FFC635)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 15px rgba(255, 198, 53, 0.3)',
              animation: 'shine 3s linear infinite'
            }}
          >
            Looking for Top Talent?
          </motion.h2>
          <motion.p variants={fadeInUp} className="mx-auto mb-8 max-w-2xl text-base leading-7 text-[#9db0c3] sm:text-lg sm:leading-8">
            Connect with our sister company, Global Rapid Recruiter, specializing in finding exceptional talent 
            for your business needs. From finance professionals to industry experts, we help you build the perfect team.
          </motion.p>
          
          <motion.a
            variants={fadeInUp}
            href="https://globalrapidrecruiter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFC635] px-8 py-4 font-semibold text-[#06131f]
                     transition-all duration-300 transform hover:scale-105 hover:bg-[#ffd86a]"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Visit Global Rapid Recruiter</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>

        <motion.div
          variants={softReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-[#24435d] bg-[rgba(12,27,42,0.8)] p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.26)] backdrop-blur-sm lg:p-10"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFC635] text-[#00204A]">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h3 className="text-2xl font-bold tracking-[-0.025em] text-[#f4fbff]">Need a Quick Audit Readiness Check?</h3>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#9db0c3] sm:leading-8">
            Explore our upcoming audit tool to review compliance touchpoints, organize supporting information,
            and prepare your team for a smoother audit process. Open the live workspace to continue in
            our audit platform.
          </p>
          <Link
            to="/audit-tool"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#FFC635] bg-transparent px-8 py-4 font-semibold text-[#FFC635] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFC635] hover:text-[#00204A]"
            aria-label={`Open Audit Tool at ${AUDIT_TOOL_URL}`}
          >
            <span>Open Audit Tool</span>
            <ExternalLink className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>

      <style>{`
        @keyframes shine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-text-shine {
          animation: shine 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default GlobalRecruiter;
