'use client';

import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const revealElements = document.querySelectorAll('.fade-in-section');
    revealElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }
        
        .fade-in-section {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #8B7355 0%, #A0926B 50%, #6B5B47 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-hover {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }
        
        .professional-gradient {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        }
        
        .mocha-gradient {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        }
        
        .dark-gradient {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
        }
        
        .accent-gradient {
          background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
        }
        
        .black-button {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          border: 1px solid #333333;
        }
        
        .black-button:hover {
          background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
          border: 1px solid #555555;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        
        .professional-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .professional-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Modern Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-stone-100 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900 tracking-tight">
                KLYRR
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-stone-600 hover:text-stone-900 font-medium transition-colors duration-200">
                Features
              </a>
              <a href="#proof" className="text-stone-600 hover:text-stone-900 font-medium transition-colors duration-200">
                Case Studies
              </a>
              <a href="#pricing" className="text-stone-600 hover:text-stone-900 font-medium transition-colors duration-200">
                Pricing
              </a>
              <a 
                href="#contact" 
                className="black-button text-white px-6 py-2.5 font-semibold hover:shadow-lg transition-all duration-200 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 lg:pt-32 pb-16 lg:pb-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 professional-gradient"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-stone-100/30 to-amber-50/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-200/60 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 mocha-gradient rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-stone-700">GTM Operating System</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl lg:text-5xl xl:text-4xl font-bold text-stone-900 leading-[1.15] mb-8">
                What If Your Growth Has Already{' '}
                <span className="gradient-text">Flatlined</span>
                {' '}— And You're the Last to Know?
              </h1>

              {/* Supporting Text */}
              <div className="space-y-6 mb-12 text-lg text-stone-600 leading-relaxed">
                <p>
                  Leads "look fine." Metrics seem "okay." But CAC climbs, deals stall, and ghosting grows.
                </p>
                <p>
                  It's not your funnel. It's your foundation.
                </p>
                <p className="text-stone-900 font-semibold text-lg">
                  <span className="gradient-text font-bold">KLYRR installs plug-and-play GTM engines</span>
                  {' '}that drive pipeline, conversions, and expansion — in <strong>days</strong>, not quarters.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <div className="flex items-center gap-3 bg-green-50/80 border border-green-200/60 rounded-xl px-6 py-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-green-700">150+ SQLs in 90 days</span>
                </div>
                <div className="flex items-center gap-3 bg-green-50/80 border border-green-200/60 rounded-xl px-6 py-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-green-700">$390K revenue lift</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#diagnosis" 
                  className="black-button text-white px-8 py-4 font-semibold text-lg hover:shadow-xl transition-all duration-200 shadow-lg transform hover:-translate-y-1 text-center"
                >
                  Fix My Funnel Now
                </a>
                <a 
                  href="#proof" 
                  className="border-2 border-slate-200 text-slate-700 px-8 py-4 font-semibold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 text-center"
                >
                  Show Me The Proof
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-stone-200/30 to-amber-100/30 rounded-3xl blur-2xl"></div>
                
                {/* Main Container */}
                <div className="relative bg-white rounded-3xl shadow-xl border border-stone-200/50 overflow-hidden">
                  <div className="p-8">
                    {/* Dashboard Mockup */}
                    <div className="professional-gradient rounded-2xl p-8 aspect-[4/3] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mocha-gradient rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-2">GTM Dashboard</h3>
                        <p className="text-stone-600">Real-time pipeline optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-black"></div>
              <span className="text-sm font-semibold text-slate-900">PLATFORM OVERVIEW</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Enterprise GTM Platform<br/>
              <span className="gradient-text">Built for Scale</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive revenue operations infrastructure designed for B2B SaaS companies scaling from $1M to $100M+ ARR.
            </p>
          </div>

          {/* Feature Grid - Professional Layout */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20 fade-in-section">
            {/* Feature 1 */}
            <div className="professional-card p-8 card-hover group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 dark-gradient flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Revenue Intelligence</h3>
                  <div className="w-8 h-0.5 bg-black mt-2"></div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Advanced pipeline analytics and forecasting with ML-powered insights to identify revenue bottlenecks before they impact growth.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                <div className="w-1 h-1 bg-black"></div>
                <span>Real-time pipeline scoring</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="professional-card p-8 card-hover group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 dark-gradient flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Automation Engine</h3>
                  <div className="w-8 h-0.5 bg-black mt-2"></div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Multi-channel engagement workflows that scale personalized outreach across email, LinkedIn, and sales sequences automatically.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                <div className="w-1 h-1 bg-black"></div>
                <span>6+ integrated channels</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="professional-card p-8 card-hover group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 dark-gradient flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Team Orchestration</h3>
                  <div className="w-8 h-0.5 bg-black mt-2"></div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Unified workspace for sales, marketing, and success teams with role-based dashboards and collaborative deal management.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                <div className="w-1 h-1 bg-black"></div>
                <span>Cross-functional workflows</span>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-slate-50 p-12 mb-20 fade-in-section">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-8">
                  Enterprise Architecture
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 dark-gradient flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">SOC 2 Type II Compliant</div>
                      <div className="text-sm text-slate-600">Enterprise-grade security and compliance</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 dark-gradient flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">99.9% Uptime SLA</div>
                      <div className="text-sm text-slate-600">Mission-critical reliability guarantee</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 dark-gradient flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">API-First Integration</div>
                      <div className="text-sm text-slate-600">Connect with 200+ business tools</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 border border-slate-200">
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-900 mb-2">48hrs</div>
                  <div className="text-slate-600 mb-6">Implementation Time</div>
                  <div className="h-px bg-slate-200 mb-6"></div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">250%</div>
                      <div className="text-sm text-slate-600">Avg. Pipeline Growth</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">3.2x</div>
                      <div className="text-sm text-slate-600">Sales Velocity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center fade-in-section">
            <a 
              href="#engines" 
              className="inline-flex items-center gap-3 black-button text-white px-12 py-4 font-semibold text-lg hover:shadow-xl transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              <span>View Technical Specifications</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="proof" className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 bg-slate-200 border border-slate-300 px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-black"></div>
              <span className="text-sm font-semibold text-slate-900">PERFORMANCE METRICS</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Enterprise <span className="gradient-text">Results</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Quantified outcomes from Fortune 500 companies and high-growth SaaS organizations implementing our platform.
            </p>
          </div>

          {/* Metrics Grid - Professional */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 fade-in-section">
            <div className="professional-card p-8 text-center card-hover">
              <div className="w-16 h-16 dark-gradient flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">247%</div>
              <div className="text-slate-600 font-semibold text-lg mb-2">Pipeline Velocity</div>
              <div className="h-px bg-slate-200 mb-3"></div>
              <div className="text-sm text-slate-500">Average improvement</div>
            </div>
            
            <div className="professional-card p-8 text-center card-hover">
              <div className="w-16 h-16 dark-gradient flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">$2.4M</div>
              <div className="text-slate-600 font-semibold text-lg mb-2">Revenue Impact</div>
              <div className="h-px bg-slate-200 mb-3"></div>
              <div className="text-sm text-slate-500">Per client (12 months)</div>
            </div>
            
            <div className="professional-card p-8 text-center card-hover">
              <div className="w-16 h-16 dark-gradient flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">48hrs</div>
              <div className="text-slate-600 font-semibold text-lg mb-2">Implementation</div>
              <div className="h-px bg-slate-200 mb-3"></div>
              <div className="text-sm text-slate-500">From contract to results</div>
            </div>
            
            <div className="professional-card p-8 text-center card-hover">
              <div className="w-16 h-16 dark-gradient flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">98.2%</div>
              <div className="text-slate-600 font-semibold text-lg mb-2">Client Retention</div>
              <div className="h-px bg-slate-200 mb-3"></div>
              <div className="text-sm text-slate-500">Year-over-year</div>
            </div>
          </div>

          {/* Case Studies - Professional Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 fade-in-section">
            <div className="professional-card p-10 card-hover">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 dark-gradient flex items-center justify-center text-white font-bold text-xl">
                  SC
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">SaaS Company</div>
                  <div className="text-slate-600">$50M ARR • Financial Services</div>
                </div>
              </div>
              
              <blockquote className="text-xl font-semibold text-slate-900 mb-8 leading-relaxed">
                "Platform reduced our sales cycle from 180 to 45 days while increasing average deal size by 3.2x. ROI achieved within first quarter."
              </blockquote>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-900">75%</div>
                  <div className="text-sm text-slate-600">Cycle Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">3.2x</div>
                  <div className="text-sm text-slate-600">Deal Size</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">Q1</div>
                  <div className="text-sm text-slate-600">ROI Timeline</div>
                </div>
              </div>
            </div>

            <div className="professional-card p-10 card-hover">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 dark-gradient flex items-center justify-center text-white font-bold text-xl">
                  FT
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">FinTech Corp</div>
                  <div className="text-slate-600">$120M ARR • B2B Payments</div>
                </div>
              </div>
              
              <blockquote className="text-xl font-semibold text-slate-900 mb-8 leading-relaxed">
                "Implementation team delivered enterprise-grade solution in 48 hours. Pipeline visibility increased 400% with automated forecasting."
              </blockquote>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-900">48hrs</div>
                  <div className="text-sm text-slate-600">Implementation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">400%</div>
                  <div className="text-sm text-slate-600">Visibility Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-600">Forecast Accuracy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Clients */}
          <div className="bg-white border border-slate-200 p-12 mb-16 fade-in-section">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Trusted by Enterprise Organizations
              </h3>
              <div className="w-16 h-px bg-black mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-5 gap-8 items-center justify-items-center">
              <div className="text-xl font-bold text-slate-400">ENTERPRISE A</div>
              <div className="text-xl font-bold text-slate-400">TECH CORP</div>
              <div className="text-xl font-bold text-slate-400">SAAS INC</div>
              <div className="text-xl font-bold text-slate-400">PLATFORM CO</div>
              <div className="text-xl font-bold text-slate-400">GROWTH LLC</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center fade-in-section">
            <a 
              href="#case-studies" 
              className="inline-flex items-center gap-3 black-button text-white px-12 py-4 font-semibold text-lg hover:shadow-xl transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              <span>Download Case Studies</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-black"></div>
              <span className="text-sm font-semibold text-slate-900">SOLUTION COMPARISON</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Enterprise <span className="gradient-text">Advantage</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive analysis of implementation approaches for revenue operations infrastructure at scale.
            </p>
          </div>

          {/* Professional Comparison Table */}
          <div className="bg-slate-50 p-12 mb-20 fade-in-section">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-6 px-6 font-bold text-slate-900 text-lg">Implementation Approach</th>
                    <th className="text-center py-6 px-6 font-bold text-slate-900 text-lg">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 dark-gradient flex items-center justify-center mb-2">
                          <span className="text-white font-bold">K</span>
                        </div>
                        <span>KLYRR Platform</span>
                      </div>
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-slate-600 text-lg">Traditional Agency</th>
                    <th className="text-center py-6 px-6 font-bold text-slate-600 text-lg">In-House Development</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-6 px-6 font-semibold text-slate-900">Implementation Timeline</td>
                    <td className="text-center py-6 px-6 font-bold text-slate-900">48 Hours</td>
                    <td className="text-center py-6 px-6 text-slate-600">6-12 Weeks</td>
                    <td className="text-center py-6 px-6 text-slate-600">3-6 Months</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-6 px-6 font-semibold text-slate-900">Cost Structure</td>
                    <td className="text-center py-6 px-6 font-bold text-slate-900">Fixed Investment</td>
                    <td className="text-center py-6 px-6 text-slate-600">Monthly Retainer</td>
                    <td className="text-center py-6 px-6 text-slate-600">Ongoing Overhead</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-6 px-6 font-semibold text-slate-900">System Ownership</td>
                    <td className="text-center py-6 px-6 font-bold text-slate-900">Client Retains Full Control</td>
                    <td className="text-center py-6 px-6 text-slate-600">Agency Dependencies</td>
                    <td className="text-center py-6 px-6 text-slate-600">Internal Management Required</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-6 px-6 font-semibold text-slate-900">ROI Timeline</td>
                    <td className="text-center py-6 px-6 font-bold text-slate-900">30-90 Days</td>
                    <td className="text-center py-6 px-6 text-slate-600">90+ Days</td>
                    <td className="text-center py-6 px-6 text-slate-600">6-12 Months</td>
                  </tr>
                  <tr>
                    <td className="py-6 px-6 font-semibold text-slate-900">Scalability</td>
                    <td className="text-center py-6 px-6 font-bold text-slate-900">Enterprise-Grade Infrastructure</td>
                    <td className="text-center py-6 px-6 text-slate-600">Limited by Agency Resources</td>
                    <td className="text-center py-6 px-6 text-slate-600">Requires Additional Hiring</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Solution Highlights */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20 fade-in-section">
            <div className="professional-card p-8 card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 dark-gradient flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Rapid Deployment</h3>
                  <div className="w-8 h-0.5 bg-black mt-2"></div>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                Pre-built enterprise infrastructure deployed in under 48 hours with zero downtime to existing operations.
              </p>
              <div className="text-2xl font-bold text-slate-900">48hrs</div>
              <div className="text-sm text-slate-600">Average implementation</div>
            </div>

            <div className="professional-card p-8 card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 dark-gradient flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Fixed Investment</h3>
                  <div className="w-8 h-0.5 bg-black mt-2"></div>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                Transparent, one-time investment with no hidden fees, ongoing retainers, or surprise costs.
              </p>
              <div className="text-2xl font-bold text-slate-900">$50K</div>
              <div className="text-sm text-slate-600">Starting investment</div>
            </div>

            <div className="professional-card p-8 card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 dark-gradient flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Full Ownership</h3>
                  <div className="w-8 h-0.5 bg-black mt-2"></div>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                Complete system ownership with white-glove training for internal team independence.
              </p>
              <div className="text-2xl font-bold text-slate-900">100%</div>
              <div className="text-sm text-slate-600">Client ownership</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center fade-in-section">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 black-button text-white px-12 py-4 font-semibold text-lg hover:shadow-xl transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              <span>Schedule Enterprise Demo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-900/10 to-stone-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-stone-700/10 to-amber-900/10 rounded-full blur-3xl"></div>
        
        <div className="relative py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-4 gap-12 mb-16">
              {/* Brand Column */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 dark-gradient flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">K</span>
                  </div>
                  <div className="text-white text-3xl font-bold tracking-tight">
                    KLYRR
                  </div>
                </div>
                <p className="text-stone-300 text-lg mb-8 leading-relaxed max-w-md">
                  Modular GTM Systems for SaaS Growth. Stop throwing budget at broken processes. Install proven systems that work.
                </p>
                
                {/* Social Links */}
                <div className="flex gap-4 mb-8">
                  <a href="#" className="group w-12 h-12 bg-stone-800/50 border border-stone-700 flex items-center justify-center hover:bg-stone-700 hover:border-stone-600 transition-all duration-300">
                    <svg className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="group w-12 h-12 bg-stone-800/50 border border-stone-700 flex items-center justify-center hover:bg-stone-700 hover:border-stone-600 transition-all duration-300">
                    <svg className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="group w-12 h-12 bg-stone-800/50 border border-stone-700 flex items-center justify-center hover:bg-stone-700 hover:border-stone-600 transition-all duration-300">
                    <svg className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>

                {/* Contact Info */}
                <div className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact@klyrr.com</span>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-white mb-8 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Quick Links
                </h4>
                <div className="space-y-4">
                  <a href="#diagnosis" className="block text-stone-300 hover:text-white hover:pl-2 transition-all duration-200 group">
                    <span className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      Free GTM Diagnosis
                    </span>
                  </a>
                  <a href="#engines" className="block text-stone-300 hover:text-white hover:pl-2 transition-all duration-200 group">
                    <span className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      GTM Engines
                    </span>
                  </a>
                  <a href="#pricing" className="block text-stone-300 hover:text-white hover:pl-2 transition-all duration-200 group">
                    <span className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      Pricing
                    </span>
                  </a>
                  <a href="#case-studies" className="block text-stone-300 hover:text-white hover:pl-2 transition-all duration-200 group">
                    <span className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      Case Studies
                    </span>
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-bold text-white mb-6 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.07 7.07 0 00-7-7H3v5h5V5z" />
                  </svg>
                  Newsletter
                </h4>
                <p className="text-stone-300 mb-6 leading-relaxed">
                  Join 1,000+ founders reading GTM playbooks that actually convert.
                </p>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="flex-1 bg-stone-800/50 border border-stone-700 px-4 py-3 text-white placeholder-stone-400 focus:outline-none focus:border-white focus:bg-stone-800 transition-all duration-200"
                    />
                    <button className="black-button text-white px-6 py-3 font-semibold hover:shadow-xl transition-all duration-200 shadow-lg transform hover:-translate-y-0.5">
                      Subscribe
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-stone-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>No spam. Unsubscribe anytime.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-stone-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-stone-400 mb-4 md:mb-0 flex items-center gap-4">
                <span>© 2025 KLYRR. All rights reserved.</span>
                <div className="hidden md:block w-1 h-1 bg-stone-600 rounded-full"></div>
                <span className="text-stone-500">Made with ❤️ for SaaS growth</span>
              </div>
              <div className="flex gap-8">
                <a href="#privacy" className="text-stone-400 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Privacy Policy
                </a>
                <a href="#terms" className="text-stone-400 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}