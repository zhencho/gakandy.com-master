import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#06131f_0%,#081522_100%)] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-[1.75rem] border border-[#24435d] bg-[rgba(12,27,42,0.92)] p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
      >
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        </div>
        <h1 className="mb-4 text-2xl font-bold text-[#f4fbff]">
          Thank You for Contacting Us!
        </h1>
        <p className="mb-8 text-[#9db0c3]">
          We have received your message and will get back to you as soon as possible.
        </p>
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#22B0EB] px-6 py-3 font-semibold text-[#06131f] transition-colors hover:bg-[#56d4ff]"
          >
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
