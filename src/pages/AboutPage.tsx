import { motion } from 'framer-motion';
import Benefits from '../components/about/Benefits';
import { CompanyOverview } from '../components/about/sections/CompanyOverview';
import { OurStory } from '../components/about/sections/OurStory';
import { VisionMission } from '../components/about/sections/VisionMission';
import { CoreValues } from '../components/about/sections/CoreValues';
import { TeamSection } from '../components/about/sections/TeamSection';

export default function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[linear-gradient(180deg,#06131f_0%,#081522_100%)] pt-20"
    >
      <CompanyOverview />
      <OurStory />
      <VisionMission />
      <TeamSection />
      <section className="bg-[linear-gradient(135deg,#0b1c2c_0%,#102335_100%)] py-6">
        <Benefits />
      </section>
      <CoreValues />
    </motion.div>
  );
} 
