import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

interface HeroProps {
  onRequestDeck: () => void;
  onScheduleCall: () => void;
}

export default function Hero({ onRequestDeck, onScheduleCall }: HeroProps) {
  const metrics = [
    { value: '20+', label: 'Years in Digital Transformation' },
    { value: 'R1B+', label: 'Program Value Led' },
    { value: '10+', label: 'Markets Across Africa & Europe' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-accent-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Revision AI
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Pragmatic AI implementation for enterprises that want production-grade results, not just proofs of concept.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.button
              onClick={onRequestDeck}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-xl hover:shadow-2xl transition-shadow"
            >
              Request Investment Deck
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={onScheduleCall}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              Schedule a Call
              <Calendar className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-primary-200 text-sm md:text-base">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

