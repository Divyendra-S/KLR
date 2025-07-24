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
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(139, 115, 85, 0.12);
        }
        
        .professional-gradient {
          background: linear-gradient(135deg, #F7F5F3 0%, #EDE8E3 50%, #E8E2DB 100%);
        }
        
        .mocha-gradient {
          background: linear-gradient(135deg, #8B7355 0%, #A0926B 100%);
        }
        
        .earth-gradient {
          background: linear-gradient(135deg, #F4F1EB 0%, #E8DDD4 100%);
        }
        
        .accent-gradient {
          background: linear-gradient(135deg, #6B5B47 0%, #8B7355 100%);
        }
        
        .black-mocha-button {
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2520 50%, #1a1a1a 100%);
          border: 1px solid rgba(139, 115, 85, 0.2);
        }
        
        .black-mocha-button:hover {
          background: linear-gradient(135deg, #000000 0%, #2a2520 50%, #000000 100%);
          border: 1px solid rgba(139, 115, 85, 0.3);
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
                className="black-mocha-button text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
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
                  className="black-mocha-button text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-200 shadow-lg transform hover:-translate-y-1 text-center"
                >
                  Fix My Funnel Now
                </a>
                <a 
                  href="#proof" 
                  className="border-2 border-stone-200 text-stone-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-stone-300 hover:bg-stone-50 transition-all duration-200 text-center"
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
      <section id="features" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-section">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/60 rounded-full px-5 py-2 mb-8">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-amber-700">Why Choose KLYRR</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              GTM Operating System —<br/>
              <span className="gradient-text">not another agency</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Stop throwing budget at broken processes. Install proven systems that work.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20 fade-in-section">
            {/* Feature 1 */}
            <div className="group bg-white rounded-3xl p-8 shadow-sm border border-stone-100/50 card-hover hover:shadow-2xl hover:border-stone-200/60 transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 mocha-gradient rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">Diagnose Fast</h3>
                  <p className="text-stone-600 leading-relaxed text-lg mb-6">
                    Uncover where your funnel leaks — before burning more budget. Our diagnostic reveals the exact choke points killing your growth.
                  </p>
                  <div className="flex items-center gap-3 text-emerald-600 font-semibold">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>48-hour diagnosis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white rounded-3xl p-8 shadow-sm border border-stone-100/50 card-hover hover:shadow-2xl hover:border-stone-200/60 transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 mocha-gradient rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">Plug In Growth Engines</h3>
                  <p className="text-stone-600 leading-relaxed text-lg mb-6">
                    Choose from 6 modular GTM systems — built to fix specific choke points. No one-size-fits-all solutions.
                  </p>
                  <div className="flex items-center gap-3 text-emerald-600 font-semibold">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>6 proven engines</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white rounded-3xl p-8 shadow-sm border border-stone-100/50 card-hover hover:shadow-2xl hover:border-stone-200/60 transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 mocha-gradient rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">Expert Deployment</h3>
                  <p className="text-stone-600 leading-relaxed text-lg mb-6">
                    We install everything: copy, workflows, automations, scoring — zero fluff. Your team gets trained, not abandoned.
                  </p>
                  <div className="flex items-center gap-3 text-emerald-600 font-semibold">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>White-glove setup</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white rounded-3xl p-8 shadow-sm border border-stone-100/50 card-hover hover:shadow-2xl hover:border-stone-200/60 transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 mocha-gradient rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">Results Without Hiring</h3>
                  <p className="text-stone-600 leading-relaxed text-lg mb-6">
                    No retainers. No headcount. Just outcomes — compounding from week one. Your existing team becomes unstoppable.
                  </p>
                  <div className="flex items-center gap-3 text-emerald-600 font-semibold">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Zero new hires needed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="bg-gradient-to-r from-stone-50 to-amber-50/30 rounded-3xl p-12 mb-16 fade-in-section">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-4">
                How It Works
              </h3>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                From diagnosis to deployment in under two weeks
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 mocha-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">Diagnose</h4>
                <p className="text-stone-600 leading-relaxed">
                  We audit your entire GTM stack and identify what's broken
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 mocha-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">Design</h4>
                <p className="text-stone-600 leading-relaxed">
                  We build custom engines targeted at your specific growth blockers
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 mocha-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">Deploy</h4>
                <p className="text-stone-600 leading-relaxed">
                  We install everything and train your team to run it independently
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center fade-in-section">
            <a 
              href="#engines" 
              className="inline-flex items-center gap-3 black-mocha-button text-white px-12 py-5 rounded-2xl font-semibold text-xl hover:shadow-xl transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              <span>Explore All Engines</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="proof" className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-100/30 to-stone-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-stone-100/30 to-amber-100/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-section">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 rounded-full px-5 py-2 mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-emerald-700">Client Results</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              Wins That <span className="gradient-text">Compound</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Real results from real companies who stopped guessing and started growing
            </p>
          </div>

          {/* Metrics Grid - Enhanced */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 fade-in-section">
            <div className="bg-gradient-to-br from-white to-stone-50/50 rounded-3xl p-8 text-center shadow-sm border border-stone-100/50 card-hover">
              <div className="w-16 h-16 mocha-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-4xl font-bold gradient-text mb-3">18% → 44%</div>
              <div className="text-stone-600 font-semibold text-lg">Demo Close Rate</div>
              <div className="text-emerald-600 text-sm font-semibold mt-2">+144% increase</div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-stone-50/50 rounded-3xl p-8 text-center shadow-sm border border-stone-100/50 card-hover">
              <div className="w-16 h-16 mocha-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-3">$85K → $390K</div>
              <div className="text-stone-600 font-semibold text-lg">Expansion Revenue</div>
              <div className="text-emerald-600 text-sm font-semibold mt-2">+359% growth</div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-stone-50/50 rounded-3xl p-8 text-center shadow-sm border border-stone-100/50 card-hover">
              <div className="w-16 h-16 mocha-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-amber-600 mb-3">&lt;7 days</div>
              <div className="text-stone-600 font-semibold text-lg">First Demo</div>
              <div className="text-emerald-600 text-sm font-semibold mt-2">vs. 6+ weeks before</div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-stone-50/50 rounded-3xl p-8 text-center shadow-sm border border-stone-100/50 card-hover">
              <div className="w-16 h-16 mocha-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-stone-700 mb-3">2.1x</div>
              <div className="text-stone-600 font-semibold text-lg">Inbound Lift</div>
              <div className="text-emerald-600 text-sm font-semibold mt-2">110% more leads</div>
            </div>
          </div>

          {/* Enhanced Testimonials */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20 fade-in-section">
            <div className="group bg-gradient-to-br from-white to-stone-50/30 rounded-3xl p-8 shadow-sm border border-stone-100/50 card-hover hover:shadow-2xl transition-all duration-500">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl font-semibold text-stone-900 mb-8 leading-relaxed">
                "We thought things were 'fine' — until KLYRR tripled our close rate."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 mocha-gradient rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  C
                </div>
                <div>
                  <cite className="text-stone-900 font-bold text-lg block">COO</cite>
                  <span className="text-stone-600 font-semibold">B2B CRM Platform</span>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-emerald-600 text-sm font-semibold">$2.5M ARR</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-stone-50/30 rounded-3xl p-8 shadow-sm border border-stone-100/50 card-hover hover:shadow-2xl transition-all duration-500">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl font-semibold text-stone-900 mb-8 leading-relaxed">
                "9 enterprise demos in 3 weeks after ghosting for months."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 mocha-gradient rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  H
                </div>
                <div>
                  <cite className="text-stone-900 font-bold text-lg block">Head of Growth</cite>
                  <span className="text-stone-600 font-semibold">Fintech Startup</span>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-emerald-600 text-sm font-semibold">$8M ARR</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-stone-50/30 rounded-3xl p-8 shadow-sm border border-stone-100/50 card-hover hover:shadow-2xl transition-all duration-500">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl font-semibold text-stone-900 mb-8 leading-relaxed">
                "We hit ARR target 2 quarters early — no new hires."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 mocha-gradient rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  S
                </div>
                <div>
                  <cite className="text-stone-900 font-bold text-lg block">CEO</cite>
                  <span className="text-stone-600 font-semibold">HealthTech SaaS</span>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-emerald-600 text-sm font-semibold">$15M ARR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-gradient-to-r from-stone-50 to-amber-50/30 rounded-3xl p-12 mb-16 fade-in-section">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Trusted by Growth Leaders at
              </h3>
            </div>
            <div className="grid md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="text-2xl font-bold text-stone-400">B2B CRM</div>
              <div className="text-2xl font-bold text-stone-400">FinTech Inc</div>
              <div className="text-2xl font-bold text-stone-400">HealthTech</div>
              <div className="text-2xl font-bold text-stone-400">SaaS Co</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center fade-in-section">
            <a 
              href="#case-studies" 
              className="inline-flex items-center gap-3 black-mocha-button text-white px-12 py-5 rounded-2xl font-semibold text-xl hover:shadow-xl transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              <span>See More Case Studies</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-100/20 to-stone-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-stone-100/20 to-amber-100/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-section">
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200/60 rounded-full px-5 py-2 mb-8">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-purple-700">Value Comparison</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              Why Choose <span className="gradient-text">KLYRR</span>?
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Stop paying agency retainers. Stop waiting for new hires. Get results in days, not quarters.
            </p>
          </div>

          {/* Enhanced Comparison Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20 fade-in-section">
            {/* KLYRR - Highlighted */}
            <div className="relative group">
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                Most Popular
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-emerald-500/20 card-hover hover:shadow-2xl hover:border-emerald-500/40 transition-all duration-500 h-full">
                <div className="text-center">
                  <div className="w-20 h-20 mocha-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">KLYRR</h3>
                  <p className="text-stone-600 mb-8">Plug-and-play GTM engines</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-emerald-50/50 rounded-2xl">
                    <span className="font-semibold text-stone-900">Setup Time</span>
                    <span className="font-bold text-emerald-600 text-lg">3–5 Days</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-emerald-50/50 rounded-2xl">
                    <span className="font-semibold text-stone-900">Cost Structure</span>
                    <span className="font-bold text-emerald-600 text-lg">Fixed Price</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-emerald-50/50 rounded-2xl">
                    <span className="font-semibold text-stone-900">ROI Timeline</span>
                    <span className="font-bold text-emerald-600 text-lg">30–90 Days</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-emerald-50/50 rounded-2xl">
                    <span className="font-semibold text-stone-900">Support Level</span>
                    <span className="font-bold text-emerald-600 text-lg">White-glove</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-emerald-50/50 rounded-2xl">
                    <span className="font-semibold text-stone-900">Ownership</span>
                    <span className="font-bold text-emerald-600 text-lg">You Own It</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-stone-100">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-stone-900 mb-2">
                      Starting at <span className="gradient-text">$15K</span>
                    </div>
                    <div className="text-stone-600">One-time investment</div>
                  </div>
                  <a 
                    href="#contact" 
                    className="block w-full text-center black-mocha-button text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>

            {/* Agency */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100/50 card-hover hover:shadow-lg transition-all duration-500 h-full">
              <div className="text-center">
                <div className="w-20 h-20 bg-stone-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">Agency</h3>
                <p className="text-stone-600 mb-8">Traditional marketing agency</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-red-50/50 rounded-2xl">
                  <span className="font-semibold text-stone-900">Setup Time</span>
                  <span className="font-bold text-red-600 text-lg">6–8 Weeks</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-red-50/50 rounded-2xl">
                  <span className="font-semibold text-stone-900">Cost Structure</span>
                  <span className="font-bold text-red-600 text-lg">Monthly Retainer</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-red-50/50 rounded-2xl">
                  <span className="font-semibold text-stone-900">ROI Timeline</span>
                  <span className="font-bold text-red-600 text-lg">90+ Days</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-red-50/50 rounded-2xl">
                  <span className="font-semibold text-stone-900">Support Level</span>
                  <span className="font-bold text-red-600 text-lg">Account Manager</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-red-50/50 rounded-2xl">
                  <span className="font-semibold text-stone-900">Ownership</span>
                  <span className="font-bold text-red-600 text-lg">They Own It</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-stone-100">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-stone-900 mb-2">
                    $8K-25K<span className="text-lg text-stone-600">/month</span>
                  </div>
                  <div className="text-stone-600">Ongoing commitment</div>
                </div>
                <div className="block w-full text-center bg-stone-100 text-stone-500 py-4 rounded-2xl font-semibold text-lg cursor-not-allowed">
                  Not Recommended
                </div>
              </div>
            </div>

            {/* In-House */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100/50 card-hover hover:shadow-lg transition-all duration-500 h-full">
              <div className="text-center">
                <div className="w-20 h-20 bg-stone-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">In-House</h3>
                <p className="text-stone-600 mb-8">Build your own team</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-orange-50/50 rounded-2xl">
                  <span className="font-semibold text-stone-900">Setup Time</span>
                  <span className="font-bold text-orange-600 text-lg">3–6 Months</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-50/50 rounded-2xl">
                  <span className="font-semibold text-stone-900">Cost Structure</span>
                  <span className="font-bold text-orange-600 text-lg">High & Ongoing</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-50/50 rounded-2xl">
                  <span className="font-semibold text-stone-900">ROI Timeline</span>
                  <span className="font-bold text-orange-600 text-lg">Unclear</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-50/50 rounded-2xl">
                  <span className="font-semibold text-stone-900">Support Level</span>
                  <span className="font-bold text-orange-600 text-lg">You Train Them</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-50/50 rounded-2xl">
                  <span className="font-semibold text-stone-900">Ownership</span>
                  <span className="font-bold text-orange-600 text-lg">You Own Risk</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-stone-100">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-stone-900 mb-2">
                    $200K+<span className="text-lg text-stone-600">/year</span>
                  </div>
                  <div className="text-stone-600">Plus benefits & training</div>
                </div>
                <div className="block w-full text-center bg-stone-100 text-stone-500 py-4 rounded-2xl font-semibold text-lg cursor-not-allowed">
                  Too Expensive
                </div>
              </div>
            </div>
          </div>

          {/* Value Props Grid */}
          <div className="bg-gradient-to-r from-white to-stone-50/50 rounded-3xl p-12 mb-16 fade-in-section">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-4">
                The KLYRR Advantage
              </h3>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Everything you need, nothing you don't
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-bold text-stone-900 mb-2">No Retainers</h4>
                <p className="text-stone-600 text-sm">One-time investment, lifetime value</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-stone-900 mb-2">Install Guarantee</h4>
                <p className="text-stone-600 text-sm">We ensure everything works perfectly</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="font-bold text-stone-900 mb-2">Transparent Pricing</h4>
                <p className="text-stone-600 text-sm">No hidden fees or surprise costs</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-stone-900 mb-2">Referral Rewards</h4>
                <p className="text-stone-600 text-sm">2 referrals = free system tune-up</p>
              </div>
            </div>
          </div>

          {/* ROI Calculator Teaser */}
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-12 text-center fade-in-section">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Calculate Your ROI in 60 Seconds
              </h3>
              <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                See exactly how much KLYRR could add to your bottom line based on your current metrics
              </p>
              <a 
                href="#roi-calculator" 
                className="inline-flex items-center gap-3 bg-white text-stone-900 px-12 py-5 rounded-2xl font-semibold text-xl hover:shadow-xl transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                <span>Try ROI Calculator</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
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
                  <div className="w-12 h-12 mocha-gradient rounded-2xl flex items-center justify-center shadow-lg">
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
                  <a href="#" className="group w-12 h-12 bg-stone-800/50 border border-stone-700 rounded-2xl flex items-center justify-center hover:bg-stone-700 hover:border-stone-600 transition-all duration-300">
                    <svg className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="group w-12 h-12 bg-stone-800/50 border border-stone-700 rounded-2xl flex items-center justify-center hover:bg-stone-700 hover:border-stone-600 transition-all duration-300">
                    <svg className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="group w-12 h-12 bg-stone-800/50 border border-stone-700 rounded-2xl flex items-center justify-center hover:bg-stone-700 hover:border-stone-600 transition-all duration-300">
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
                      className="flex-1 bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:bg-stone-800 transition-all duration-200"
                    />
                    <button className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-amber-500 hover:to-amber-400 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
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