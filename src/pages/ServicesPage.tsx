import { 
  Calculator, 
  FileSpreadsheet, 
  Users, 
  Sparkles,
  Globe,
  BarChart3,
  Check,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ServicesPageProps {
  onNavigate: (page: string, section?: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  
  const services = [
    {
      icon: <Calculator className="w-8 h-8" />,
      color: 'bg-primary',
      title: 'Tax Calculations',
      description: 'Automatic calculation of capital gains, losses, and income from all crypto activities.',
    },
    {
      icon: <FileSpreadsheet className="w-8 h-8" />,
      color: 'bg-green',
      title: 'Tax-Ready Data',
      description: 'Generate Form 8949 and Schedule D-ready data and reports instantly.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      color: 'bg-light-blue',
      title: 'Multi-Chain Support',
      description: 'Track transactions across Ethereum, Bitcoin, Solana, and 50+ blockchains.',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'bg-purple',
      title: 'Portfolio Tracking',
      description: 'Real-time portfolio monitoring with detailed performance analytics.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      color: 'bg-orange',
      title: 'Tax Professional Integration',
      description: 'Share your reports directly with tax professionals for seamless collaboration.',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      color: 'bg-primary',
      title: 'DeFi & NFT Support',
      description: 'Complete coverage of DeFi protocols, staking, lending, and NFT transactions.',
    },
  ];

  const detailedServices = [
    {
      title: 'Automated Transaction Import',
      description: 'Connect your wallets and exchanges to automatically sync all your crypto transactions. We support top exchanges and DeFi protocols with direct blockchain integration.',
      features: [
        'API connections to major exchanges',
        'Wallet address tracking',
        'Direct blockchain data sourcing',
        'Automatic categorization',
      ],
   video: 'https://defitax.us/wp-content/uploads/2025/12/1_1.mp4',
      bgColor: 'rgba(0, 82, 254, 0.05)',
    },
    {
      title: 'Comprehensive Tax Reports',
      description: 'Generate complete, IRS-Defendable tax reports with just a few clicks. Our reports include all necessary forms and supporting documentation for your tax filing.',
      features: [
        'Form 8949 & Schedule D Ready Reporting',
        'Capital gains/loss summary',
        'Income reports (staking, mining)',
        'Audit-ready transaction history',
      ],
    video: 'https://defitax.us/wp-content/uploads/2025/12/Report-Ready.mp4',
      bgColor: 'rgba(48, 192, 96, 0.05)',
    },
    {
      title: 'DeFi & NFT Expertise',
      description: 'Navigate the complexity of DeFi and NFT taxation with confidence. We accurately track and report on staking rewards, liquidity pools, yield farming, and NFT sales.',
      features: [
        'Liquidity pool tracking',
        'Staking rewards calculation',
        'NFT cost basis tracking',
        'Wrapped token handling',
      ],
     video: 'https://defitax.us/wp-content/uploads/2025/12/Complexity.mp4',
      bgColor: 'rgba(0, 199, 217, 0.05)',
    },
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'per year',
      description: 'Entry-level access only',
      bestFor: [
        'Entry-level access only',
        'Basic access capped at 50 transactions',
      ],
      features: [
        '1 Method',
        '50 Transactions',
      ],
      addOns: [],
      cta: 'Get Started',
      color: 'border-gray-200',
      textColor: 'text-gray-900',
      bgColor: 'bg-white',
    },
    {
      name: 'Bronze',
      price: '$50',
      period: 'per year',
      description: 'Covers up to 250 transactions',
      bestFor: [
        '$50/year covers up to 250 transactions',
      ],
      features: [
        '1 Method',
        '250 Transactions',
      ],
      addOns: [],
      cta: 'Get Started',
      color: 'border-gray-200',
      textColor: 'text-gray-900',
      bgColor: 'bg-white',
    },
    {
      name: 'Silver',
      price: '$99',
      period: 'per year',
      description: 'Method count increases from Bronze',
      bestFor: [
        '$99/year covers up to 1,500 transactions',
        'Method count increases from Bronze',
      ],
      features: [
        '2 Methods',
        '1,500 Transactions',
      ],
      addOns: [],
      cta: 'Get Started',
      color: 'border-gray-300',
      textColor: 'text-gray-900',
      bgColor: 'bg-white',
    },
    {
      name: 'Gold',
      price: '$249',
      period: 'per year',
      description: 'Same number of methods as Silver, higher transaction volume',
      bestFor: [
        '$249/year covers up to 10,000 transactions',
        'Same number of methods as Silver, higher transaction volume',
      ],
      features: [
        '2 Methods',
        '10,000 Transactions',
      ],
      addOns: [],
      cta: 'Get Started',
      color: 'border-primary',
      textColor: 'text-white',
      bgColor: 'bg-primary',
      recommended: true,
    },
    {
      name: 'Platinum',
      price: '$349',
      period: 'per year',
      description: 'Increased method flexibility',
      bestFor: [
        '$349/year covers up to 25,000 transactions',
        'Increased method flexibility',
      ],
      features: [
        '3 Methods',
        '25,000 Transactions',
      ],
      addOns: [],
      cta: 'Get Started',
      color: 'border-gray-200',
      textColor: 'text-gray-900',
      bgColor: 'bg-white',
    },
    {
      name: 'Diamond',
      price: '$549',
      period: 'per year',
      description: 'Full method access',
      bestFor: [
        '$549/year for unlimited transaction volume',
        'No caps',
        'Full method access',
      ],
      features: [
        'All Methods',
        'Unlimited Transactions',
      ],
      addOns: [],
      cta: 'Get Started',
      color: 'border-gray-200',
      textColor: 'text-gray-900',
      bgColor: 'bg-white',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        {/* Video Background with fallback */}
        <div className="absolute inset-0 w-full h-full gradient-blue-lightblue">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ display: 'block' }}
          >
            <source src="https://defitax.us/wp-content/uploads/2025/12/BLocksZoomed.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 animate-blue-gradient opacity-60"></div>
        
        <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl text-white mb-6">
            Complete Crypto Tax Solutions
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            From simple trades to complex DeFi strategies, we provide the tools and expertise 
            you need for accurate crypto tax compliance.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to handle your crypto taxes with confidence
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 max-w-[1200px] mx-auto">
            {services.map((service, index) => (
              service.title !== 'IRS Forms' && (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
              >
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center text-white mb-6 mx-auto md:mx-0`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg">{service.description}</p>
              </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {detailedServices.map((service, index) => (
        <section
          key={index}
          className="py-24"
          style={{ backgroundColor: service.bgColor }}
        >
          <div className="max-w-[1440px] mx-auto px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 className="text-4xl mb-6">{service.title}</h2>
                <p className="text-xl text-gray-600 mb-8">{service.description}</p>
                <motion.ul 
                  className="space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.5, delay: i * 1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-6 h-6 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex justify-end min-h-[400px] items-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-auto block mx-auto md:mr-auto md:ml-0"
                    style={{ width: '70%', borderRadius: '20px' }}
                  >
                    <source src={service.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6">
              Simple, <span className="text-green">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your trading volume
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans
              .filter(plan => plan.name === 'Free' || plan.name === 'Silver' || plan.name === 'Gold')
              .map((plan, index) => (
              <div
                key={index}
                className={`bg-white border-2 ${plan.color} rounded-2xl p-8 relative transition-all hover:-translate-y-2 hover:shadow-xl ${
                  plan.recommended ? 'shadow-2xl lg:scale-105' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-6 py-2 rounded-full font-semibold text-sm">
                      Recommended
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/ {plan.period}</span>
                </div>
                <p className="text-gray-600 mb-8">{plan.description}</p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Best For:</p>
                  <ul className="space-y-3 mb-6">
                    {plan.bestFor.map((bestFor, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{bestFor}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold text-gray-900 mb-3">Included:</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.addOns && plan.addOns.length > 0 && (
                    <>
                      <p className="text-sm font-semibold text-gray-900 mb-3">Available Add-ons:</p>
                      <ul className="space-y-2">
                        {plan.addOns.map((addOn, i) => (
                          <li key={i} className="text-gray-600 text-xs flex items-start">
                            <span className="mr-2">•</span>
                            <span>{addOn}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                <button
                  onClick={() => window.location.href = 'https://app.defitax.us/'}
                  className={`w-full py-4 rounded-lg font-semibold transition-all ${
                    plan.recommended
                      ? 'bg-white text-primary hover:bg-green hover:text-white hover:shadow-lg hover:-translate-y-1'
                      : 'bg-primary text-white hover:bg-green hover:text-white hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          
          {/* See All Plans Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => setIsPricingModalOpen(true)}
              className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              See All Plans
            </button>
          </div>
          
          {/* Add-on Information */}
          <div className="mt-16 bg-white rounded-2xl p-8 border-2 border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">Premium Add-On: Audit Protection</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <p className="text-3xl font-bold text-primary mb-2">$1,999</p>
                <p className="text-gray-600">per year</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <p className="text-3xl font-bold text-primary mb-2">$219</p>
                <p className="text-gray-600">per month</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Full IRS communication and representation</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Review of filings for compliance accuracy</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Support for penalties, disputes, and Offer-in-Compromise</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 text-center">
              <strong>Important:</strong> Must be active before an audit begins
            </p>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need help choosing the right plan?</p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Modal */}
      {isPricingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Animated gradient background */}
          <div className="absolute inset-0 gradient-blue-lightblue opacity-30 animate-gradient blur-sm"></div>
          
          <div className="bg-white rounded-2xl max-w-7xl w-full my-8 relative max-h-[90vh] overflow-y-auto z-10">
            {/* Close Button */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center rounded-t-2xl z-10">
              <h3 className="text-3xl font-semibold">All Pricing Plans</h3>
              <button
                onClick={() => setIsPricingModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`bg-white border-2 ${plan.color} rounded-2xl p-8 relative ${
                      plan.recommended ? 'shadow-2xl lg:scale-105' : ''
                    }`}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-white px-6 py-2 rounded-full font-semibold text-sm">
                          Recommended
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 ml-2">/ {plan.period}</span>
                    </div>
                    <p className="text-gray-600 mb-8">{plan.description}</p>
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-900 mb-3">Best For:</p>
                      <ul className="space-y-3 mb-6">
                        {plan.bestFor.map((bestFor, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{bestFor}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm font-semibold text-gray-900 mb-3">Included:</p>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {plan.addOns && plan.addOns.length > 0 && (
                        <>
                          <p className="text-sm font-semibold text-gray-900 mb-3">Available Add-ons:</p>
                          <ul className="space-y-2">
                            {plan.addOns.map((addOn, i) => (
                              <li key={i} className="text-gray-600 text-xs flex items-start">
                                <span className="mr-2">•</span>
                                <span>{addOn}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                    <button
                      onClick={() => window.location.href = 'https://app.defitax.us/'}
                      className={`w-full py-4 rounded-lg font-semibold transition-all ${
                        plan.recommended
                          ? 'bg-white text-primary hover:bg-gray-100'
                          : 'bg-primary text-white hover:bg-opacity-90'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-blue-green opacity-90 animate-gradient"></div>
        <div className="max-w-[1440px] mx-auto px-8 relative text-center">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of crypto traders who trust DeFiTax for their tax compliance needs.
          </p>
          <button
            onClick={() => window.location.href = 'https://app.defitax.us/'}
            className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}