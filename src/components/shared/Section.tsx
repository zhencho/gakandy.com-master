import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  containerClassName?: string;
  background?: 'white' | 'gray' | 'primary' | 'secondary' | 'dark' | 'darkElevated';
}

export default function Section({
  children,
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  containerClassName = '',
  background = 'dark',
  ...props
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-site-surface text-site-text',
    gray: 'bg-site-elevated text-site-text',
    primary: 'bg-indigoDye-primary text-white',
    secondary: 'bg-pictonBlue-primary text-white',
    dark: 'bg-site-bg text-site-text',
    darkElevated: 'bg-site-surface text-site-text',
  };

  return (
    <motion.section
      className={`py-20 ${backgroundStyles[background]} ${className}`}
      {...props}
    >
      <div className={`container mx-auto px-4 ${containerClassName}`}>
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`section-title mb-4 font-serif ${
                  background === 'primary' || background === 'secondary'
                    ? 'text-white'
                    : 'text-site-text'
                } ${titleClassName}`}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`section-subtitle ${
                  background === 'primary' || background === 'secondary'
                    ? 'text-gray-100'
                    : 'text-site-muted'
                } ${subtitleClassName}`}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}
