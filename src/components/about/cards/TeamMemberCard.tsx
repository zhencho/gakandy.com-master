import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp, GraduationCap, Award, Building2, Briefcase, Target } from 'lucide-react';
import { TeamMember } from '../shared/types';

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="flex h-full flex-col overflow-hidden rounded-xl border border-[#24435d] bg-[linear-gradient(180deg,rgba(12,27,42,0.96)_0%,rgba(10,22,34,0.96)_100%)] shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition-shadow duration-300 hover:shadow-[0_28px_70px_rgba(0,0,0,0.3)]"
    >
      <div className="relative">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br from-[#22B0EB]/10 to-[#033A5B]/10" />
        <div className="absolute bottom-0 left-0 h-24 w-24 rounded-tr-full bg-gradient-to-tr from-[#033A5B]/10 to-[#22B0EB]/10" />

        <div className="relative z-10 flex flex-col items-center p-6 md:flex-row">
          <motion.div
            layout="position"
            className="relative mb-4 h-48 w-48 flex-shrink-0 cursor-pointer overflow-hidden rounded-full border-4 border-[#102335] shadow-lg md:mb-0 md:h-40 md:w-40"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-[#22B0EB]/20 to-[#033A5B]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <motion.img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.div>

          <div className="flex-1 text-center md:ml-8 md:text-left">
            <div className="inline-block">
              <h3 className="bg-gradient-to-r from-[#7cd8ff] to-[#f4fbff] bg-clip-text text-2xl font-bold text-transparent">{member.name}</h3>
              <div className="mb-2 mt-1 h-0.5 bg-gradient-to-r from-[#033A5B] to-[#22B0EB]"></div>
            </div>
            <p className="mb-3 font-medium text-[#9db0c3]">{member.position}</p>
            <p className="mb-4 line-clamp-2 text-[#c7d6e4]">{member.bio}</p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#033A5B] to-[#22B0EB] px-4 py-2 font-medium text-white shadow-md transition-all duration-300 hover:from-[#022a43] hover:to-[#1a8dbd] hover:shadow-lg"
            >
              <span>View {isExpanded ? 'Less' : 'More'}</span>
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative flex-1 overflow-hidden px-6 pb-6 md:flex md:flex-col"
          >
            <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#24435d] to-transparent" />

            <div className="h-full space-y-6 pt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-8">
                  <div className="rounded-lg border border-[#24435d] bg-[#102335] p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                    <div className="mb-4 flex items-center gap-2 font-semibold text-[#7cd8ff]">
                      <GraduationCap className="h-5 w-5" />
                      <h4>Qualifications</h4>
                    </div>
                    <ul className="list-none space-y-2">
                      {member.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-1.5 text-[#22B0EB]">&bull;</span>
                          <span className="text-[#c7d6e4]">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg border border-[#24435d] bg-[#102335] p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                    <div className="mb-4 flex items-center gap-2 font-semibold text-[#7cd8ff]">
                      <Award className="h-5 w-5" />
                      <h4>Areas of Expertise</h4>
                    </div>
                    <ul className="list-none space-y-2">
                      {member.expertise.map((exp, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-1.5 text-[#22B0EB]">&bull;</span>
                          <span className="text-[#c7d6e4]">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {member.industries && (
                    <div className="rounded-lg border border-[#24435d] bg-[#102335] p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                      <div className="mb-4 flex items-center gap-2 font-semibold text-[#7cd8ff]">
                        <Building2 className="h-5 w-5" />
                        <h4>Industries of Expertise</h4>
                      </div>
                      <ul className="list-none space-y-2">
                        {member.industries.map((industry, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="mt-1.5 text-[#22B0EB]">&bull;</span>
                            <span className="text-[#c7d6e4]">{industry}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="space-y-8">
                  <div className="rounded-lg border border-[#24435d] bg-[#102335] p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                    <div className="mb-4 flex items-center gap-2 font-semibold text-[#7cd8ff]">
                      <Briefcase className="h-5 w-5" />
                      <h4>Professional Experience</h4>
                    </div>
                    <ul className="list-none space-y-2">
                      {member.experience.map((exp, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-1.5 text-[#22B0EB]">&bull;</span>
                          <span className="text-[#c7d6e4]">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {member.specializations && (
                    <div className="rounded-lg border border-[#24435d] bg-[#102335] p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                      <div className="mb-4 flex items-center gap-2 font-semibold text-[#7cd8ff]">
                        <Target className="h-5 w-5" />
                        <h4>Specializations</h4>
                      </div>
                      <ul className="list-none space-y-2">
                        {member.specializations.map((spec, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="mt-1.5 text-[#22B0EB]">&bull;</span>
                            <span className="text-[#c7d6e4]">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
