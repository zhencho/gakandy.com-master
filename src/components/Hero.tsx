import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { fadeInUp, gentleFloat, scaleIn, slideInFromLeft, slideInFromRight, staggerContainer } from '../utils/animations';

const highlights = [
  'Audit and assurance services tailored for growth-stage and established businesses',
  'Trusted advisory support for governance, reporting, and operational clarity',
];

const stats = [
  { label: 'Client-first delivery', value: 'Tailored' },
  { label: 'Response model', value: 'Hands-on' },
  { label: 'Focus', value: 'Audit-ready' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#07111b_0%,#091827_48%,#06131f_100%)] pt-32 sm:pt-36"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div variants={gentleFloat} initial="initial" animate="animate" className="absolute left-[-10rem] top-8 h-72 w-72 rounded-full bg-[#22B0EB]/12 blur-3xl" />
        <motion.div variants={gentleFloat} initial="initial" animate="animate" className="absolute right-[-8rem] top-24 h-80 w-80 rounded-full bg-[#033A5B]/25 blur-3xl" style={{ animationDelay: '1.2s' }} />
        <motion.div variants={gentleFloat} initial="initial" animate="animate" className="absolute bottom-[-8rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FFC635]/8 blur-3xl" style={{ animationDelay: '2.4s' }} />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-[4.5rem] sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-24"
      >
        <motion.div
          variants={slideInFromLeft}
          className="max-w-3xl"
        >
          <div className="max-w-fit px-2 py-3">
            <motion.div
              variants={scaleIn}
              className="relative"
            >
              <motion.div
                className="relative inline-block"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.35)',
                  filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.25))'
                }}
              >
                <div className="pointer-events-none absolute -inset-x-8 -inset-y-5 rounded-full border border-[#2c4d6c]/80" />
                <div className="pointer-events-none absolute inset-0">
                  <motion.div
                    className="relative h-full w-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      className="absolute left-1/2 top-[-1.5rem] h-5 w-5 -translate-x-1/2 rounded-full"
                      style={{
                        background: `conic-gradient(from 0deg,#033A5B 0deg,#0C4D75 120deg,#22B0EB 240deg,#033A5B 360deg)`,
                        boxShadow: '0 0 18px 3px rgba(34, 176, 235, 0.25)'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 uppercase font-extrabold tracking-[0.16em] text-3xl sm:text-5xl">
                  <motion.span
                    className="inline-block text-[#22B0EB]"
                    initial={{ y: -70, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                      background: 'linear-gradient(145deg, #56d4ff 0%, #28A2D4 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      position: 'relative',
                      padding: '0 4px'
                    }}
                  >
                    Global
                  </motion.span>
                  <motion.span
                    className="inline-block text-[#e8f0f7]"
                    initial={{ y: 70, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Associates
                  </motion.span>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-3 flex items-center justify-center text-lg font-medium text-[#9db0c3] sm:justify-start sm:text-2xl"
                >
                  <span>Chartered Accountants</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#24435d] bg-[rgba(16,35,53,0.72)] px-4 py-2 text-sm font-semibold text-[#9fdcff] shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#4ec4ff]" />
            Trusted chartered accountants for modern businesses
          </motion.div>

          <motion.h1 variants={fadeInUp} className="mt-7 max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-[#f3f8fc] sm:text-6xl">
            Financial clarity,
            <span className="block bg-gradient-to-r from-[#4ec4ff] via-[#8cdcf8] to-[#f1f7fb] bg-clip-text text-transparent">
              audit confidence,
            </span>
            and business momentum.
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-5 max-w-xl text-base leading-7 text-[#9db0c3] sm:text-lg sm:leading-8">
            Global Associates helps organizations strengthen reporting, navigate compliance,
            and move forward with practical advice that feels sharp, responsive, and dependable.
          </motion.p>

          <motion.div variants={staggerContainer} className="mt-7 space-y-3">
            {highlights.map((item) => (
              <motion.div variants={fadeInUp} key={item} className="flex items-start gap-3 text-[#c7d6e4]">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#12314a] text-white">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#4ec4ff]" />
                </div>
                <p className="max-w-xl text-[15px] leading-7 sm:text-base">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#22B0EB] px-7 py-4 text-sm font-semibold text-[#06131f] shadow-[0_18px_40px_rgba(34,176,235,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#56d4ff]"
            >
              Schedule Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#24435d] bg-[rgba(16,35,53,0.72)] px-7 py-4 text-sm font-semibold text-[#e8f0f7] shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#4ec4ff]/40 hover:text-white"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={staggerContainer} className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                variants={fadeInUp}
                key={stat.label}
                className="rounded-[1.5rem] border border-[#24435d] bg-[rgba(12,27,42,0.9)] px-5 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur"
              >
                <p className="text-2xl font-bold text-[#f1f7fb]">{stat.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#9db0c3]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideInFromRight}
          className="relative"
        >
          <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-[2rem] bg-[#FFC635]/15 blur-2xl lg:block" />
          <div className="absolute -right-6 bottom-16 hidden h-28 w-28 rounded-full bg-[#22B0EB]/18 blur-2xl lg:block" />

          <div className="relative overflow-hidden rounded-[2rem] border border-[#24435d] bg-[rgba(12,27,42,0.86)] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <motion.img
              src="https://ik.imagekit.io/d36vkx7c33/gakandy/primary-hero-image.jpg"
              alt="Global Associates professional consultation"
              className="h-[440px] w-full rounded-[1.5rem] object-cover object-[72%_top] lg:object-[78%_top]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-[#06131f]/60 via-transparent to-transparent" />
            <motion.div
              variants={fadeInUp}
              className="absolute bottom-7 left-7 right-7 rounded-[1.5rem] border border-white/10 bg-[rgba(7,17,27,0.72)] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.32)] backdrop-blur-md lg:right-10"
            >
              <div className="flex items-center gap-3 text-sm font-semibold text-[#FFC635]">
                <TrendingUp className="h-4 w-4" />
                Performance through excellence
              </div>
              <p className="mt-3 max-w-md text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#f4fbff]">
                Built for organizations that want sharper oversight and smoother decision-making.
              </p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#b5c6d6]">
                From audit preparation to advisory support, we help teams stay organized, accountable,
                and ready for what comes next.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
