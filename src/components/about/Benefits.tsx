import { Heart, DollarSign, Clock4, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const benefits = [
  { 
    name: 'We Do Things With Love And Passion',
    description: 'Every project is handled with utmost care and dedication to ensure exceptional quality and outstanding results.',
    icon: Heart 
  },
  { 
    name: 'Affordable Price Range',
    description: 'Competitive pricing without compromising on the quality of our services, delivering maximum value for your investment.',
    icon: DollarSign 
  },
  { 
    name: 'Receive on Time',
    description: 'We value your time and ensure timely delivery of all our commitments, maintaining strict adherence to project schedules.',
    icon: Clock4 
  },
  { 
    name: 'Satisfaction Guaranteed',
    description: 'Your satisfaction is our priority, backed by our commitment to excellence and continuous support throughout the process.',
    icon: CheckCircle2 
  }
];

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#081522_0%,#0b1c2c_100%)] py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-64 -top-64 h-[500px] w-[500px] rounded-full bg-[#033A5B]/15 blur-3xl" />
        <div className="absolute -right-64 -bottom-64 h-[500px] w-[500px] rounded-full bg-[#0C4D75]/12 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,176,235,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,176,235,0.08),transparent_40%)]" />
      </div>

      {/* Grid Pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-4 bg-gradient-to-r from-[#f4fbff] to-[#7cd8ff] bg-clip-text text-3xl font-bold text-transparent lg:text-4xl"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-[#9db0c3]"
          >
            Experience excellence in professional services with our dedicated team committed to your success
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.name}
              variants={fadeInUp}
              className="group h-full"
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-[#24435d] bg-[rgba(12,27,42,0.9)] p-8 transition-all duration-300">
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#22B0EB]/10 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex flex-col flex-1 z-10">
                  {/* Icon container */}
                  <div className="mb-6 relative">
                    <div className="relative bg-gradient-to-br from-[#033A5B] to-[#0C4D75] w-16 h-16 
                                  rounded-xl flex items-center justify-center mx-auto transform 
                                  transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <benefit.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col flex-1 justify-between">
                    <h3 className="mb-3 text-center text-xl font-medium text-[#f4fbff] transition-colors duration-300 group-hover:text-[#7cd8ff]">
                      {benefit.name}
                    </h3>
                    <p className="text-center text-sm leading-relaxed text-[#9db0c3] transition-colors duration-300 group-hover:text-[#dce7f1]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
