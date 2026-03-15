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
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/60 bg-white/85 shadow-[0_18px_60px_rgba(3,58,91,0.14)] backdrop-blur-xl">
        <div className="flex justify-between h-20 px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex items-center relative">
            <Link to="/">
              <div className="relative flex h-16 w-16 items-center justify-center">
                {/* Orbital rings */}
                <div className="absolute w-full h-full border-2 border-[#28A2D4]/30 rounded-full transform rotate-45"></div>
                <div className="absolute w-[120%] h-[120%] border-2 border-[#22B0EB]/20 rounded-full"></div>
                
                {/* Static logo */}
                <div className="relative w-12 h-12 z-10">
                  <img 
                    src={COMPANY_LOGO}
                    alt="Global Associates Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Satellite effect */}
                <motion.div
                  variants={satelliteVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute w-full h-full"
                >
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-[#22B0EB] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#28A2D4] rounded-full blur-sm absolute"></div>
                  </div>
                </motion.div>

                {/* Additional satellites for more dynamic effect */}
                <motion.div
                  variants={satelliteVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute w-[90%] h-[90%] rotate-90"
                >
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2">
                    <div className="w-1.5 h-1.5 bg-[#126190] rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#0C4D75] rounded-full blur-sm absolute"></div>
                  </div>
                </motion.div>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#033A5B] text-white shadow-[0_12px_30px_rgba(3,58,91,0.22)]'
                      : 'text-slate-700 hover:bg-white hover:text-[#033A5B]'
                  }`}
                >
                  <Icon
                    size={17}
                    className={isActive ? 'text-[#FFC635]' : 'text-[#22B0EB] transition-colors'}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 p-3 text-gray-700 transition-colors hover:text-blue-600"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 24,
                staggerChildren: 0.07,
              }
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 24,
                staggerChildren: 0.05,
                staggerDirection: -1,
                when: "afterChildren"
              }
            }
          }}
          className="md:hidden overflow-hidden"
        >
          <motion.div 
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0%)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05
                }
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50%)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3
                }
              }
            }}
            className="mx-3 mb-3 space-y-1 rounded-[1.5rem] border border-white/70 bg-white/95 px-3 pb-3 pt-2 shadow-lg backdrop-blur-sm"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;

              return (
                <motion.div
                  key={item.to}
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                      transition: { type: "spring", stiffness: 300, damping: 24 }
                    },
                    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
                  }}
                >
                  <Link
                    to={item.to}
                    className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-[#033A5B] text-white shadow-[0_12px_30px_rgba(3,58,91,0.18)]'
                        : 'text-gray-700 hover:bg-slate-50 hover:text-[#033A5B]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={18} className={isActive ? 'text-[#FFC635]' : 'text-[#22B0EB]'} />
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
