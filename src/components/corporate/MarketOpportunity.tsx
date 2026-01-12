import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Globe, TrendingUp, Users, DollarSign } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({ end, duration = 2, prefix = '', suffix = '', decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = easeOutQuart * end;
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function MarketOpportunity() {
  const marketStats = [
    {
      icon: DollarSign,
      value: 50000000000,
      prefix: '$',
      label: 'Market Size',
      description:
        'Global enterprise AI software and services spending is projected to exceed $50B annually, with a significant share focused on implementation, integration and change management.',
    },
    {
      icon: TrendingUp,
      value: 25,
      suffix: '%',
      label: 'Annual Growth Rate',
      description:
        'Enterprise AI and automation markets are growing at over 25% CAGR, driven by demand for productivity, new digital products and cost-efficient operations.',
    },
    {
      icon: Users,
      value: 50000000,
      label: 'Target Customers',
      description:
        'Tens of thousands of mid-to-large enterprises globally are actively exploring AI but lack internal delivery capacity and architecture expertise to execute at scale.',
    },
  ];

  const customerSegments = [
    {
      title: 'Financial services & insurance',
      description:
        'Banks, insurers and asset managers needing robust, compliant AI for underwriting, claims, risk and customer experience.',
      size: '40%',
    },
    {
      title: 'Telecoms & digital infrastructure',
      description:
        'Operators modernizing legacy systems and leveraging AI for customer operations, network optimization and digital channels.',
      size: '35%',
    },
    {
      title: 'Enterprise services & platforms',
      description:
        'Consultancies, shared-service organizations and platform businesses embedding AI into service delivery and product offerings.',
      size: '25%',
    },
  ];

  return (
    <section id="market" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Market Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprises across Africa and global markets are under pressure to move from AI experimentation to scaled, production-grade capabilities—yet the talent and experience to do this well remains scarce.
          </p>
        </motion.div>

        {/* Market Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {marketStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.value < 1 ? 1 : 0}
                  />
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Target Market */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Target Market Definition
          </h3>
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Revision AI serves medium to large enterprises that have strategic ambitions for AI but face delivery friction: complex legacy landscapes, multiple stakeholders, regulatory constraints and limited internal AI implementation experience. Typical buyers are C-level technology and business leaders who need a trusted partner to translate strategy into architecture, roadmaps and shipped solutions.
            </p>
          </div>
        </motion.div>

        {/* Customer Segments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Customer Segments
          </h3>
          <div className="space-y-4">
            {customerSegments.map((segment, index) => (
              <motion.div
                key={segment.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold text-gray-900">{segment.title}</h4>
                  <span className="text-primary-600 font-bold">{segment.size}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: segment.size }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-3 rounded-full"
                  />
                </div>
                <p className="text-gray-600">{segment.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-8 h-8" />
            <h3 className="text-3xl font-display font-bold">Competitive Advantage</h3>
          </div>
          <p className="text-lg leading-relaxed max-w-3xl">
            Unlike generalist consultancies or tooling vendors, Revision AI is focused on pragmatic AI implementation in complex enterprises. Our advantage lies in the founder’s track record leading large-scale programmes, deep experience with enterprise architecture and integration, and hands-on delivery of AI systems such as RAG-based document intelligence, automation platforms and customer data solutions. This combination enables us to design solutions that executives can trust and engineering teams can maintain.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

