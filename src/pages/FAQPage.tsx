import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQPageProps {
  onNavigate: (page: string, section?: string) => void;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  name: string;
  color: string;
  faqs: FAQItem[];
}

export function FAQPage({ onNavigate }: FAQPageProps) {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories: FAQCategory[] = [
    {
      name: 'General',
      color: 'bg-primary',
      faqs: [
        {
          question: 'What is DeFiTax?',
          answer: 'DeFiTax is a comprehensive crypto tax software that helps you track, calculate, and report your cryptocurrency taxes. We support top exchanges and DeFi protocols, making it easy to generate IRS-defendable tax reports.',
        },
        {
          question: 'How does DeFiTax work?',
          answer: 'Simply connect your wallets and exchanges, and DeFiTax automatically syncs all your transactions. Our platform calculates your capital gains, losses, and income, then generates Form 8949 and Schedule D-ready reports for your accountant or tax professional.',
        },
        {
          question: 'Is DeFiTax secure?',
          answer: 'Yes, we use bank-grade encryption and security measures to protect your data. We never ask for your private keys or withdrawal permissions. We only need read-only API access to track your transactions.',
        },
        {
          question: 'Which countries does DeFiTax support?',
          answer: 'DeFiTax currently supports tax reporting for the United States, Canada, United Kingdom, Australia, and several other countries. We\'re constantly expanding our international coverage.',
        },
      ],
    },
    {
      name: 'Crypto',
      color: 'bg-light-blue',
      faqs: [
        {
          question: 'What types of transactions does DeFiTax track?',
          answer: 'DeFiTax tracks all types of crypto transactions including trades, purchases, sales, transfers, staking rewards, mining income, airdrops, forks, DeFi activities, and NFT transactions.',
        },
        {
          question: 'How are DeFi transactions taxed?',
          answer: 'DeFi transactions such as swaps, liquidity pool deposits/withdrawals, and yield farming are typically taxed as capital gains events. Rewards earned from staking and liquidity pools are generally considered ordinary income.',
        },
        {
          question: 'Are NFTs taxable?',
          answer: 'Yes, NFTs are taxable. When you sell or trade an NFT, you may owe capital gains tax on any profit. NFTs are classified as collectibles, which may be subject to a higher tax rate of 28% for long-term gains.',
        },
        {
          question: 'What about crypto received as gifts?',
          answer: 'Receiving crypto as a gift is generally not a taxable event. However, when you later sell or trade that gifted crypto, you\'ll need to calculate capital gains using the original owner\'s cost basis and purchase date.',
        },
      ],
    },
    {
      name: 'Compliance',
      color: 'bg-green',
      faqs: [
        {
          question: 'What tax forms does DeFiTax generate?',
          answer: 'DeFiTax provides Form 8949 and Schedule D-ready data and reporting. We also provide detailed transaction reports and audit trails for your records that you can share with your tax professional.',
        },
        {
          question: 'Can I import data from other tax software?',
          answer: 'DeFiTax imports transaction data directly from the blockchain to ensure accuracy and prevent data corruption. CSV files from other tax software can be manipulated or contain errors, which is why we prioritize direct blockchain integration for the most reliable tax reporting.',
        },
        {
          question: 'Do I need to report every transaction?',
          answer: 'Yes, the IRS requires you to report all taxable crypto transactions, regardless of the amount. DeFiTax automatically tracks and categorizes all your transactions to ensure complete compliance.',
        },
        {
          question: 'What if I made a mistake on a previous tax return?',
          answer: 'If you discover an error, you should file an amended return using Form 1040-X. DeFiTax can help you generate accurate reports for previous years to correct any mistakes.',
        },
      ],
    },
    {
      name: 'Payments',
      color: 'bg-purple',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards and debit cards through Stripe. Subscriptions are billed annually, and we offer a free tier for users with up to 100 transactions.',
        },
        {
          question: 'Can I upgrade or downgrade my plan?',
          answer: 'Yes, you can change your plan at any time. If you upgrade to an annual plan, you\\\'ll be charged the full difference immediately, and your renewal date stays the same (no proration). If you downgrade, the change will take effect at your next billing cycle.',
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a 14-day money-back guarantee for annual subscriptions. If you\'re not satisfied with DeFiTax, contact our support team for a full refund within 14 days of purchase.',
        },
        {
          question: 'Is there a free trial?',
          answer: 'Yes! Our Starter plan is completely free and includes support for up to 100 transactions. This is perfect for trying out DeFiTax and seeing if it meets your needs before upgrading.',
        },
      ],
    },
  ];

  const currentFAQs = faqCategories.find(cat => cat.name === activeCategory)?.faqs || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h1 className="text-5xl lg:text-6xl mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about DeFiTax, crypto taxation, and our platform
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-2">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                {faqCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => {
                      setActiveCategory(category.name);
                      setOpenIndex(0);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                      activeCategory === category.name
                        ? `${category.color} text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {currentFAQs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-lg pr-8">{faq.question}</span>
                      <ChevronDown
                        className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openIndex === index && (
                      <div className="px-8 pb-6">
                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-4xl mb-6">
            Still have <span className="text-green">questions?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Contact Support
            </button>
            <button
              onClick={() => onNavigate('blog')}
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-lg font-semibold hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Browse Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}