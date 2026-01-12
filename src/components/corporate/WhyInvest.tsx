import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Shield, Target, PieChart } from 'lucide-react';

export default function WhyInvest() {
  const investmentReasons = [
    {
      icon: TrendingUp,
      title: 'Proven enterprise delivery track record',
      description:
        'Plerk is built on two decades of experience delivering complex programmes for Tier-1 organizations, reducing delivery risk for investors backing an execution-focused team.',
    },
    {
      icon: Target,
      title: 'Focused on a fast-growing, under-served niche',
      description:
        'We operate at the intersection of AI implementation and enterprise architecture, a space where demand is accelerating and credible, hands-on partners are scarce.',
    },
    {
      icon: Shield,
      title: 'Pragmatic, risk-aware approach to AI',
      description:
        'Our methodology emphasizes responsible AI, governance and incremental delivery, helping clients (and investors) avoid the reputational and operational risks of poorly implemented AI.',
    },
    {
      icon: DollarSign,
      title: 'Scalable consulting and productized offerings',
      description:
        'We are building reusable accelerators and methodologies that can scale across clients and geographies, creating leverage beyond pure time-and-materials consulting.',
    },
  ];

  const useOfFunds = [
    { category: 'Product & accelerator development', percentage: 40, color: 'bg-primary-500' },
    { category: 'Go-to-market & sales', percentage: 30, color: 'bg-accent-500' },
    { category: 'Delivery capacity & expert hires', percentage: 20, color: 'bg-primary-400' },
    { category: 'Operations, governance & runway', percentage: 10, color: 'bg-accent-400' },
  ];

  return (
    <section id="why-invest" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Why Invest in Plerk
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A compelling investment opportunity with strong growth potential
          </p>
        </motion.div>

        {/* Investment Thesis */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {investmentReasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Use of Funds */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Use of Funds
          </h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Visual Chart */}
              <div className="space-y-4">
                {useOfFunds.map((item, index) => (
                  <div key={item.category}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 font-semibold">{item.category}</span>
                      <span className="text-gray-600">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                        className={`${item.color} h-4 rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <PieChart className="w-12 h-12 text-primary-600 mb-4" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  Investment will be directed toward building reusable AI implementation assets (frameworks, templates and reference
                  architectures), expanding sales capacity into key markets, and scaling a small, senior delivery team. A disciplined
                  allocation between productized IP and high-value consulting capacity enables both near-term revenue and long-term
                  enterprise value.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROI & Growth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Projected Growth Trajectory</h3>
            <p className="leading-relaxed mb-4">
              Over the next 3–5 years, Plerk plans to deepen its footprint in financial services and insurance while expanding into
              adjacent industries such as telecoms and enterprise services. Growth will be driven by a combination of repeat business from
              anchor clients, referral-based work, and a targeted go-to-market motion focused on high-value AI implementation programmes.
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="text-3xl font-bold mb-2">3–5x revenue growth over 5 years</div>
              <div className="text-primary-100">Driven by a focused portfolio of multi-year enterprise AI implementation engagements</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent-600 to-accent-700 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Exit Strategy</h3>
            <p className="leading-relaxed mb-4">
              Potential exit paths include acquisition by a global consulting firm, technology integrator or platform provider seeking to
              accelerate its AI implementation capabilities in Africa and emerging markets. As reusable IP and a strong client portfolio are
              developed, strategic partnerships may also evolve into buy-out opportunities.
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="text-3xl font-bold mb-2">5–7 year horizon</div>
              <div className="text-accent-100">Focused on building a durable, acquisition-ready AI implementation practice</div>
            </div>
          </div>
        </motion.div>

        {/* Risk Mitigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk Mitigation</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We mitigate risk through a phased delivery model, clear stage gates, and tight alignment with client governance processes. Each
            engagement begins with an assessment of data, architecture, regulatory and change-management risks, followed by a roadmap that
            sequences value in small, testable increments. This approach reduces large upfront bets, increases learning velocity and ensures
            that both clients and investors have transparency into progress and outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

