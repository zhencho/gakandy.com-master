import { motion } from 'framer-motion';
import { TimelineItem as TimelineItemType, Stat } from '../shared/types';
import { TimelineItem } from '../cards/TimelineItem';

const timelineItems: TimelineItemType[] = [
  {
    year: '2000',
    description: 'Founded as a small accounting practice in Kandy, focusing on local businesses.',
  },
  {
    year: '2015',
    description: 'Expanded services to include comprehensive auditing and business advisory.',
  },
  {
    year: '2018',
    description: 'Established partnerships with international firms to enhance service capabilities.',
  },
  {
    year: '2023',
    description: 'Recognized as one of the leading professional services firms in the region.',
  },
];

const stats: Stat[] = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Clients Served' },
  { value: '100%', label: 'Client Satisfaction' },
];

export const OurStory: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#081522_0%,#0a1a2a_100%)] py-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#033A5B]/12 to-[#22B0EB]/8" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#033A5B] via-[#22B0EB] to-[#126190]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-[34rem] lg:max-w-[32rem]"
          >
            <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-[#033A5B] via-[#22B0EB] to-[#126190] sm:left-7" />
            
            {/* Timeline Items */}
            {timelineItems.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </motion.div>

          {/* Right Column - Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Decorative pattern */}
            <div className="absolute -right-4 -top-4 w-72 h-72 rounded-full bg-gradient-to-br from-[#033A5B]/20 to-[#22B0EB]/10 blur-3xl" />
            
            <div className="relative rounded-2xl border border-[#24435d] bg-[rgba(12,27,42,0.92)] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="mb-6 text-3xl font-bold text-[#f4fbff]">Our Story</h2>
                <div className="prose prose-lg max-w-none text-[#9db0c3]">
                  <p className="mb-6">
                    Global Associates Kandy was founded with a vision to provide exceptional professional services
                    to businesses in Sri Lanka. Our journey began with a commitment to excellence and a deep
                    understanding of local business needs.
                  </p>
                  <p className="mb-6">
                    Over the years, we have grown into a trusted partner for businesses across various sectors,
                    delivering innovative solutions and maintaining the highest standards of professional service.
                  </p>
                  <p>
                    Today, we continue to evolve and adapt to meet the changing needs of our clients while
                    staying true to our core values of integrity, excellence, and client focus.
                  </p>
                </div>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="bg-gradient-to-r from-[#7cd8ff] to-[#FFC635] bg-clip-text text-4xl font-bold text-transparent transition-all duration-300">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm font-medium text-[#9db0c3]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 
