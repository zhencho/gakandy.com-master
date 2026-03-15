import { Menu, X, Home, Users, Briefcase, PhoneCall, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const COMPANY_LOGO = "https://ik.imagekit.io/d36vkx7c33/gakandy/logo-wihtout-text.png?updatedAt=1733490143012";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About Us', icon: Users },
    { to: '/services', label: 'Services', icon: Briefcase },
    { to: '/audit-tool', label: 'Audit Tool', icon: ShieldCheck },
    { to: '/contact', label: 'Contact', icon: PhoneCall },
  ];

  const satelliteVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: -360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-[#24435d]/70 bg-[rgba(8,19,31,0.82)] shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex h-20 justify-between px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-shrink-0 items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative flex h-16 w-16 items-center justify-center">
                <div className="absolute h-full w-full rounded-full border-2 border-[#28A2D4]/30 rotate-45" />
                <div className="absolute h-[120%] w-[120%] rounded-full border border-[#22B0EB]/20" />
                <div className="relative z-10 h-12 w-12 rounded-full bg-white/95 p-1 shadow-[0_8px_25px_rgba(255,255,255,0.18)]">
                  <img
                    src={COMPANY_LOGO}
                    alt="Global Associates Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <motion.div
                  variants={satelliteVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute h-full w-full"
                >
                  <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                    <div className="h-2 w-2 rounded-full bg-[#22B0EB]" />
                    <div className="absolute h-2 w-2 rounded-full bg-[#28A2D4] blur-sm" />
                  </div>
                </motion.div>
                <motion.div
                  variants={satelliteVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute h-[90%] w-[90%] rotate-90"
                >
                  <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#126190]" />
                    <div className="absolute h-1.5 w-1.5 rounded-full bg-[#0C4D75] blur-sm" />
                  </div>
                </motion.div>
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9db0c3]">Global Associates</p>
                <p className="text-xs text-[#6e8599]">Chartered Accountants</p>
              </div>
            </Link>
          </div>

          <div className="hidden items-center md:flex">
            <div className="flex items-center gap-2 rounded-full border border-[#24435d] bg-[rgba(16,35,53,0.82)] px-3 py-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.to;

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-[#12314a] text-[#f4fbff] shadow-[0_14px_30px_rgba(4,12,20,0.4)]'
                        : 'text-[#c7d6e4] hover:bg-[#102335] hover:text-white'
                    }`}
                  >
                    <Icon size={17} className={isActive ? 'text-[#FFC635]' : 'text-[#4ec4ff]'} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-full border border-[#24435d] bg-[#102335] p-3 text-[#d9e6f2] transition-colors hover:text-white"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              transition: { type: "spring", stiffness: 300, damping: 24, staggerChildren: 0.07 }
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: { type: "spring", stiffness: 300, damping: 24, staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" }
            }
          }}
          className="overflow-hidden md:hidden"
        >
          <motion.div
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0%)",
                transition: { type: "spring", bounce: 0, duration: 0.7, delayChildren: 0.2, staggerChildren: 0.05 }
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50%)",
                transition: { type: "spring", bounce: 0, duration: 0.3 }
              }
            }}
            className="mx-3 mb-3 space-y-1 rounded-[1.5rem] border border-[#24435d] bg-[rgba(9,24,39,0.96)] px-3 pb-3 pt-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;

              return (
                <motion.div
                  key={item.to}
                  variants={{
                    open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
                    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
                  }}
                >
                  <Link
                    to={item.to}
                    className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-[#12314a] text-white shadow-[0_12px_30px_rgba(0,0,0,0.28)]'
                        : 'text-[#d4e1ee] hover:bg-[#102335] hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={18} className={isActive ? 'text-[#FFC635]' : 'text-[#4ec4ff]'} />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
}
