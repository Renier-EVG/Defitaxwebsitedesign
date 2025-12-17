import { 
  Calculator, 
  FileSpreadsheet, 
  BarChart3,
  Check,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

interface PricingPageProps {
  onNavigate: (page: string, section?: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = (index: number) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setMousePosition({ x: 0, y: 0 });
  };

  const allPricingPlans = [
    {
      name: 'Blue',
      badge: 'Free Plan',
      price: '$0',
      period: 'year',
      description: 'Best for: Beginners or casual users with small transaction volumes.',
      features: [
        'Up to 100 transactions per year',
        '1 accounting method',
        'Audit-ready reports',
        'Blockchain integration',
      ],
      addOns: [
        'Add-on transactions',
        'Add-on accounting methods',
        'Add-on audit protection',
      ],
      borderColor: 'border-primary',
    },
    {
      name: 'Bronze',
      price: '$50',
      period: 'year',
      description: 'Best for: Users who transact occasionally but need more than basic reporting.',
      features: [
        'Up to 5,000 transactions per year',
        '2 accounting methods',
        'Audit-ready reports',
        'Blockchain integration',
      ],
      addOns: [
        'Add-on transactions',
        'Add-on accounting methods',
        'Add-on audit protection',
      ],
      borderColor: 'border-orange',
    },
    {
      name: 'Silver',
      price: '$249',
      period: 'year',
      description: 'Best for: Active traders who need more advanced accounting options and larger limits.',
      features: [
        'Up to 10,000 transactions per year',
        '4 accounting methods',
        'Audit-ready reports',
        'Blockchain integration',
      ],
      addOns: [
        'Add-on transactions',
        'Add-on accounting methods',
        'Add-on audit protection',
      ],
      borderColor: 'border-gray-300',
    },
    {
      name: 'Gold',
      badge: 'Recommended',
      price: '$349',
      period: 'year',
      description: 'Best for: Active, diversified traders who need accuracy, flexibility, and security.',
      features: [
        '10,000 transactions',
        '4 accounting methods',
        'Audit-ready reports',
        'Blockchain integration',
      ],
      addOns: [
        'Add-on transactions',
        'Add-on accounting methods',
        'Add-on audit protection',
      ],
      recommended: true,
      borderColor: 'border-orange',
    },
    {
      name: 'Platinum',
      price: '$549',
      period: 'year',
      description: 'Best for: High-volume traders, tax professionals, and users who want full control and token-level accuracy.',
      features: [
        'Unlimited transactions',
        '4 accounting methods with token-level reporting',
        'Audit-ready reports',
        'Blockchain integration',
        'All accounting methods included',
      ],
      addOns: [
        'Add-on audit protection',
      ],
      borderColor: 'border-purple',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl mb-6">All Pricing Plans</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flexible pricing is designed to scale with your trading activity and compliance needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPricingPlans.map((plan, index) => {
              const isHovered = hoveredCard === index;
              const tiltX = isHovered ? (mousePosition.y / 120) : 0;
              const tiltY = isHovered ? -(mousePosition.x / 120) : 0;
              const translateX = isHovered ? (mousePosition.x / 150) : 0;
              const translateY = isHovered ? (mousePosition.y / 150) : 0;

              return (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={`bg-white border-2 ${plan.borderColor} rounded-2xl p-8 relative cursor-pointer`}
                  style={{
                    transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate(${translateX}px, ${translateY}px)`,
                    transition: isHovered ? 'none' : 'all 0.3s ease-out',
                    boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.15)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className={`${
                        plan.recommended ? 'bg-primary' : 'bg-green'
                      } text-white px-6 py-2 rounded-full font-semibold text-sm`}>
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-2">/ {plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Includes:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-semibold mb-3">Optional Add-ons:</h4>
                    <ul className="space-y-2">
                      {plan.addOns.map((addOn, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start space-x-2">
                          <span className="text-primary">•</span>
                          <span>{addOn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => window.location.href = 'https://app.defitax.us/'}
                    className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all inline-flex items-center justify-center space-x-2 font-semibold"
                  >
                    <span>Start for Free</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Structure Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 border border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl mb-3">How the Pricing Structure Works</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Our flexible pricing is designed to scale with your trading activity and compliance needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Transaction Limits Scale With Your Activity</h4>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Each pricing tier gives you a higher cap on how many transactions you can report.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-100">
                    <div className="text-sm text-gray-600 mb-1">Blue</div>
                    <div className="font-semibold text-primary">100</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3 text-center border border-orange-100">
                    <div className="text-sm text-gray-600 mb-1">Bronze</div>
                    <div className="font-semibold text-orange">5,000</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 text-center border border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">Silver</div>
                    <div className="font-semibold text-gray-700">10,000</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3 text-center border border-yellow-200">
                    <div className="text-sm text-gray-600 mb-1">Gold</div>
                    <div className="font-semibold text-yellow-600">10,000</div>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-100">
                  <div className="text-sm text-gray-600 mb-1">Platinum</div>
                  <div className="font-semibold text-purple">Unlimited</div>
                </div>
                <div className="mt-4 bg-green-50 rounded-lg p-4 border-l-4 border-green">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-green">Recommended:</span> Gold matches most active traders&apos; needs without overspending.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green to-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Accounting Methods Increase With Higher Tiers</h4>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  More advanced users need more flexibility.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="text-gray-700">Basic users</span>
                    <span className="font-semibold text-primary">1 method</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="text-gray-700">Mid-tier users</span>
                    <span className="font-semibold text-primary">2-4 methods</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <span className="text-gray-700">Platinum users</span>
                    <span className="font-semibold text-purple">Token-level</span>
                  </div>
                </div>
                <div className="mt-4 bg-light-blue-50 rounded-lg p-4 border-l-4 border-light-blue">
                  <p className="text-sm text-gray-700">
                    Platinum includes token-level accounting, meaning you can apply different methods at a granular level.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-light-blue to-cyan-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">All Paid Tiers Include Core Compliance Features</h4>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Every plan from Bronze upward includes:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Audit-ready reporting</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Blockchain integration</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Access to add-ons</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple to-pink-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Add-Ons Allow Users to Customize Any Plan</h4>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Users can upgrade any plan with:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border border-blue-100">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Additional transactions</span>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-50 to-transparent rounded-lg border border-green-100">
                    <div className="w-2 h-2 bg-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Additional accounting methods</span>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg border border-purple-100">
                    <div className="w-2 h-2 bg-purple rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Audit protection services <span className="text-sm text-gray-500">(must be purchased before an audit begins)</span></span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-light-blue to-green relative overflow-hidden animate-gradient">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust DeFi Tax for accurate, automated, audit-ready reporting.
            </p>
            <button
              onClick={() => onNavigate('signup')}
              className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all inline-flex items-center justify-center space-x-2 font-semibold"
            >
              <span>Start for Free</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}