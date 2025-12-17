import { Mail, MapPin, Clock, Send, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  onNavigate: (page: string, section?: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Using Web3Forms API to send emails
      // Get your free API key at: https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '8a34fb26-c028-4366-acd6-1004725ede46', // Replace with your Web3Forms access key
          from_name: formData.name,
          email: formData.email,
          subject: `DeFiTax Contact: ${formData.subject}`,
          message: formData.message,
          to: 'renier@elevateventuregroup.com',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h1 className="text-5xl lg:text-6xl mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or need assistance? We're here to help you navigate your crypto tax journey.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 lg:p-12">
                <h2 className="text-3xl mb-2">Send us a message</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Tell us more about your question or concern..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>

                {/* Status Messages */}
                {status === 'loading' && (
                  <div className="mt-4 text-gray-600">
                    <Clock className="w-5 h-5 inline-block mr-2" />
                    Sending...
                  </div>
                )}
                {status === 'success' && (
                  <div className="mt-4 text-green-500">
                    <CheckCircle className="w-5 h-5 inline-block mr-2" />
                    Message sent successfully!
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-4 text-red-500">
                    <AlertCircle className="w-5 h-5 inline-block mr-2" />
                    {errorMessage}
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Social Links */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://x.com/defitax_us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/defitax/"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-12 text-center">
            <h2 className="text-3xl mb-4">
              Looking for quick answers?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Check out our FAQ page for instant answers to common questions
            </p>
            <button
              onClick={() => onNavigate('faq')}
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Visit FAQ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}