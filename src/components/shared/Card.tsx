import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'bordered';
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = 'default',
  className = '',
  onClick,
  ...props
}: CardProps) {
  const baseStyles = 'transition-all duration-300';
  
  const variantStyles = {
    default: 'surface-card',
    elevated: 'surface-card-elevated',
    bordered: 'surface-card border-[#2e597b]',
  };

  const styles = [
    baseStyles,
    variantStyles[variant],
    onClick ? 'cursor-pointer' : '',
    className,
  ].join(' ');

  return (
    <motion.div
      className={styles}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.02 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
