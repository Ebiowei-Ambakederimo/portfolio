"use client"

import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "@/components/AnimatedHeaderSection";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Pricing = () => {
  const cardRefs = useRef([]);
  const containerRef = useRef(null);


  const text = `Choose the perfect plan that fits your needs
    and budget. Transparent pricing with
    no hidden fees.`;

  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small projects and personal use",
      features: [
        "Up to 5 projects",
        "Basic support",
        "10GB storage",
        "Email notifications",
        "Basic analytics"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Unlimited projects",
        "Priority support",
        "100GB storage",
        "Advanced notifications",
        "Detailed analytics",
        "Team collaboration",
        "Custom integrations"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Unlimited storage",
        "24/7 phone support",
        "Custom reporting",
        "SSO integration",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  useGSAP(() => {
    // Staggered card entrance animation
    gsap.fromTo("#pricing-card", {
      y: 80,
      opacity: 0,
      scale: 0.9,
      rotationX: 15
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      rotationX: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#pricing-card",
        start: "top 80%"
      }
    });

    // Floating animation for popular badge
    gsap.to(".popular-badge", {
      y: -5,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  const handleMouseEnter = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    // Scale and rotate animation on hover
    gsap.to(card, {
      scale: 1.05,
      rotationY: 5,
      z: 50,
      duration: 0.6,
      ease: "power2.out"
    });

    // Animate the gradient background
    gsap.to(card.querySelector('.gradient-bg'), {
      opacity: 0.1,
      scale: 1.1,
      duration: 0.6,
      ease: "power2.out"
    });

    // Stagger animate features
    gsap.fromTo(card.querySelectorAll('.feature-item'), {
      x: -10,
      opacity: 0.7
    }, {
      x: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    // Reset transformations
    gsap.to(card, {
      scale: 1,
      rotationY: 0,
      z: 0,
      duration: 0.6,
      ease: "power2.out"
    });

    // Reset gradient background
    gsap.to(card.querySelector('.gradient-bg'), {
      opacity: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out"
    });
  };

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 1000
    });
  };

  return (
    <section id="pricing" className="flex bg-white flex-col min-h-screen py-20">
      <AnimatedHeaderSection
        subTitle={"Simple, Transparent Pricing"}
        title={"Pricing"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      
      <div 
        ref={containerRef}
        className="flex flex-col items-center justify-center gap-8 px-6 lg:flex-row lg:gap-6"
      >
        {pricingPlans.map((plan, index) => (
          <div
            key={plan.id}
            id="pricing-card"
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`relative p-8 bg-white border-2 border-gray-200 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 max-w-sm w-full ${
              plan.popular ? 'border-purple-500 lg:scale-105' : ''
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Gradient background overlay */}
            <div 
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.color} opacity-0 gradient-bg`}
            />

            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 popular-badge">
                <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
                  Most Popular
                </div>
              </div>
            )}

            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center feature-item"
                    >
                      <Icon 
                        icon="lucide:check" 
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" 
                      />
                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                } transform hover:translate-y-[-2px]`}
              >
                Get Started
                <Icon 
                  icon="lucide:arrow-right" 
                  className="w-4 h-4 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" 
                />
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 opacity-10">
              <Icon 
                icon="lucide:sparkles" 
                className="w-8 h-8 text-gray-400" 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-600 mb-4">
          Need a custom solution? 
        </p>
        <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-all duration-300">
          Contact Sales
        </button>
      </div>
    </section>
  );
};

export default Pricing;