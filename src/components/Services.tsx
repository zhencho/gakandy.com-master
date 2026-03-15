import { motion } from 'framer-motion';
import { FileText, ChartBar, Shield, Building2, Scale, Users } from 'lucide-react';

const services = [
  {
    title: 'Assurance Services',
    description: 'Comprehensive audit services including external audits, internal audits, and performance audits.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/audit.jpeg?updatedAt=1732207356936',
    icon: FileText,
  },
  {
    title: 'Management Reporting Services',
    description: 'Strategic reporting solutions for effective business decision making and performance tracking.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-15.jpg?updatedAt=1732207353030',
    icon: ChartBar,
  },
  {
    title: 'Risk Management & Technology Advisory',
    description: 'Expert guidance on risk assessment, management, and technological solutions.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-07.jpg?updatedAt=1732207350583',
    icon: Shield,
  },
  {
    title: 'Corporate Finance Advisory',
    description: 'Strategic financial planning and advisory services for corporate growth.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/financial-statements-importance.jpg?updatedAt=1732284241510',
    icon: Building2,
  },
  {
    title: 'Forensic & Litigation Services',
    description: 'Specialized forensic accounting and litigation support services.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-21.png?updatedAt=1732207354054',
    icon: Scale,
  },
  {
    title: 'Payroll Services',
    description: 'Comprehensive payroll management, tax compliance, and employee benefits administration.',
    image: 'https://ik.imagekit.io/ri5cvrkrr/payroll-Service.jpg?updatedAt=1732284189366',
    icon: Users,
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-[linear-gradient(180deg,#07131f_0%,#0a1927_100%)] pb-12 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-[#f4fbff] sm:text-4xl"
          >
            Our Core Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-lg text-[#9db0c3]"
          >
            Professional services tailored to meet your business needs with excellence and precision
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={service.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-[#24435d] bg-[rgba(12,27,42,0.92)] shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2e597b]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d2133] via-transparent to-[#12314a]/60 opacity-80" />
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06131f]" />
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={service.image}
                    alt={service.title}
                  />
                  <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-[rgba(8,19,31,0.82)] p-3 shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
                    <Icon className="h-6 w-6 text-[#4ec4ff]" />
                  </div>
                </div>

                <div className="relative p-6">
                  <h3 className="mb-2 text-xl font-bold text-[#f4fbff] transition-colors duration-300 group-hover:text-[#7cd8ff]">
                    {service.title}
                  </h3>
                  <p className="text-[#9db0c3]">{service.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#22B0EB] via-[#4ec4ff] to-[#FFC635] opacity-60" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
