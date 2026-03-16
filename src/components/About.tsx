import { motion } from 'framer-motion';

export default function About() {
  return (
    <div id="about" className="relative overflow-hidden bg-[linear-gradient(180deg,#081522_0%,#0b1c2c_100%)] py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,198,53,0.06),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,176,235,0.08),transparent_40%)] pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center lg:mb-16"
        >
          <div className="mb-6 flex items-center justify-center space-x-4">
            <div className="h-0.5 w-12 bg-[#FFC635]" />
            <h2 className="text-4xl font-medium tracking-[-0.04em] text-[#f4fbff] sm:text-5xl">
              Our Commitment to Excellence
            </h2>
            <div className="h-0.5 w-12 bg-[#FFC635]" />
          </div>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {[
              {
                title: 'Professional Excellence',
                image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-22.png?updatedAt=1732207355523',
                alt: 'Financial analysis',
                text: 'Global Associates is an organization of substance with a full-service capability available in Sri Lanka.'
              },
              {
                title: 'Tailored Solutions',
                image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-15.jpg?updatedAt=1732207353030',
                alt: 'Business consultation',
                text: 'We construct our team to reflect your organization structure. We make all aspects of our service delivery transparent to the client.'
              },
              {
                title: 'Exceeding Expectations',
                image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-17.jpg?updatedAt=1732207353126',
                alt: 'Team collaboration',
                text: 'Our aim is to beat your expectations from any assignments, bringing our views about business operations and compliance.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-[1.5rem] border border-[#24435d] bg-[rgba(12,27,42,0.88)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <img src={item.image} alt={item.alt} className="h-24 w-24 rounded-xl object-cover shadow-md" />
                  <div>
                    <h3 className="mb-2.5 text-xl font-semibold tracking-[-0.02em] text-[#f4fbff]">{item.title}</h3>
                    <p className="max-w-md text-[15px] leading-7 text-[#9db0c3] sm:text-base">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-2 group"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] border border-[#24435d] shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
                <img
                  src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-12.jpg?updatedAt=1732207352390"
                  alt="Business professionals"
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06131f]/70 to-transparent opacity-80" />
              </div>
            </motion.div>

            {[
              { src: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-19.jpg?updatedAt=1732207353391', alt: 'Corporate meeting' },
              { src: 'https://ik.imagekit.io/ri5cvrkrr/acc1.jpg?updatedAt=1732207356333', alt: 'Office workspace' }
            ].map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-48 w-full rounded-xl border border-[#24435d] object-cover shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
