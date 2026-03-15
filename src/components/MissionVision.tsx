import { motion } from 'framer-motion';
import { Target, Eye, ArrowRight } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07131f_0%,#0b1c2c_100%)] pb-24 pt-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rotate-12 rounded-full bg-[#12314a]/50" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 -rotate-12 rounded-full bg-[#102335]/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-[#f4fbff]"
          >
            Our Mission & Vision
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[#22B0EB] to-[#FFC635]"
          />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {[
            {
              title: 'Our Mission',
              icon: Target,
              text: 'Delivering excellence in auditing and consultancy services through innovative solutions and unwavering commitment to quality.',
              items: ['Professional Excellence', 'Client Satisfaction', 'Innovative Solutions']
            },
            {
              title: 'Our Vision',
              icon: Eye,
              text: 'Shaping the future of financial services in Sri Lanka by setting new standards of excellence and innovation in auditing and consultancy.',
              items: ['Industry Leadership', 'Continuous Innovation', 'Regional Excellence']
            }
          ].map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative rounded-[1.75rem] border border-[#24435d] bg-[rgba(12,27,42,0.9)] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-[#22B0EB]/8 to-transparent" />
                <div className="relative">
                  <div className="mb-6 flex items-center">
                    <div className="rounded-2xl bg-[#102335] p-3 border border-[#24435d]">
                      <Icon className="h-8 w-8 text-[#4ec4ff]" />
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-[#f4fbff]">{card.title}</h3>
                  </div>
                  <p className="mb-6 text-lg leading-relaxed text-[#9db0c3]">{card.text}</p>
                  <ul className="space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center text-[#d6e3ef]">
                        <ArrowRight className="mr-2 h-5 w-5 text-[#FFC635]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
