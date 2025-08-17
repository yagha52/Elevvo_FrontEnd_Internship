import React, { useState, useEffect } from 'react';
import { CheckCircle, Users, BarChart3, Star, ArrowRight, Zap } from 'lucide-react';

const TaskFlowLanding = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <CheckCircle style={{ width: '32px', height: '32px', color: '#2563eb' }} />,
      title: "Smart Task Management",
      description: "Organize tasks with intelligent categorization, priority levels, and deadline tracking that adapts to your workflow."
    },
    {
      icon: <Users style={{ width: '32px', height: '32px', color: '#2563eb' }} />,
      title: "Team Collaboration",
      description: "Share projects, assign tasks, and communicate seamlessly with your team members in real-time."
    },
    {
      icon: <BarChart3 style={{ width: '32px', height: '32px', color: '#2563eb' }} />,
      title: "Progress Analytics",
      description: "Track productivity with detailed insights, reports, and performance metrics to optimize your workflow."
    }
  ];

  const reviews = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      content: "TaskFlow transformed how our team manages projects. The intuitive interface and powerful features make collaboration effortless.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Freelance Designer",
      content: "I've tried dozens of task management apps, but TaskFlow is the only one that actually improved my productivity. Game changer!",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      role: "Startup Founder",
      content: "The analytics feature gives us incredible insights into our team's performance. TaskFlow is essential for scaling efficiently.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "Up to 10 tasks per month",
        "Basic task organization",
        "Mobile app access",
        "Email support"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      features: [
        "Unlimited tasks",
        "Advanced analytics",
        "Team collaboration",
        "Priority support",
        "Custom workflows",
        "API access"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Team",
      price: "$24",
      period: "per member/month",
      features: [
        "Everything in Pro",
        "Advanced team features",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced security",
        "Custom branding"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏' },
    { name: 'LinkedIn', icon: 'in' },
    { name: 'GitHub', icon: '⚡' },
    { name: 'Discord', icon: '💬' }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 50,
      borderBottom: '1px solid #f3f4f6',
      padding: '0 16px'
    },
    navContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '64px'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    logoIcon: {
      width: '32px',
      height: '32px',
      background: 'linear-gradient(135deg, #2563eb, #9333ea)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logoText: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#111827'
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    },
    navLink: {
      color: '#6b7280',
      textDecoration: 'none',
      transition: 'color 0.2s',
      cursor: 'pointer'
    },
    navButton: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    mobileMenu: {
      display: 'none'
    },
    hero: {
      paddingTop: '96px',
      paddingBottom: '80px',
      padding: '96px 16px 80px',
      textAlign: 'center'
    },
    heroContent: {
      maxWidth: '1280px',
      margin: '0 auto'
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '24px',
      lineHeight: '1.1'
    },
    heroGradient: {
      background: 'linear-gradient(135deg, #2563eb, #9333ea)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroSubtitle: {
      fontSize: '20px',
      color: '#6b7280',
      marginBottom: '32px',
      lineHeight: '1.6',
      maxWidth: '768px',
      margin: '0 auto 32px'
    },
    heroButton: {
      background: 'linear-gradient(135deg, #2563eb, #9333ea)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      border: 'none',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.2s',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    mockup: {
      marginTop: '64px',
      position: 'relative'
    },
    mockupContainer: {
      background: 'linear-gradient(135deg, #dbeafe, #e9d5ff)',
      borderRadius: '16px',
      padding: '32px',
      maxWidth: '1024px',
      margin: '0 auto',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    mockupWindow: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
    },
    mockupHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '16px'
    },
    mockupDots: {
      display: 'flex',
      gap: '4px'
    },
    mockupDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%'
    },
    mockupTask: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px',
      borderRadius: '8px',
      marginBottom: '12px'
    },
    section: {
      padding: '80px 16px'
    },
    sectionGray: {
      backgroundColor: '#f9fafb'
    },
    sectionContent: {
      maxWidth: '1280px',
      margin: '0 auto'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '64px'
    },
    sectionTitle: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '16px'
    },
    sectionSubtitle: {
      fontSize: '20px',
      color: '#6b7280',
      maxWidth: '768px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gap: '32px'
    },
    gridCols3: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    card: {
      backgroundColor: 'white',
      padding: '32px',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s',
      cursor: 'pointer'
    },
    cardIcon: {
      marginBottom: '24px',
      padding: '12px',
      backgroundColor: '#dbeafe',
      borderRadius: '12px',
      width: 'fit-content'
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '16px'
    },
    cardDescription: {
      color: '#6b7280',
      lineHeight: '1.6'
    },
    stars: {
      display: 'flex',
      marginBottom: '16px'
    },
    reviewText: {
      color: '#374151',
      marginBottom: '24px',
      fontStyle: 'italic',
      lineHeight: '1.6'
    },
    reviewer: {
      display: 'flex',
      alignItems: 'center'
    },
    reviewerAvatar: {
      width: '48px',
      height: '48px',
      background: 'linear-gradient(135deg, #2563eb, #9333ea)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: '600',
      marginRight: '16px'
    },
    reviewerName: {
      fontWeight: '600',
      color: '#111827'
    },
    reviewerRole: {
      color: '#6b7280',
      fontSize: '14px'
    },
    pricingCard: {
      position: 'relative',
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s'
    },
    popularBadge: {
      position: 'absolute',
      top: '-16px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'linear-gradient(135deg, #2563eb, #9333ea)',
      color: 'white',
      padding: '4px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '600'
    },
    pricingContent: {
      padding: '32px'
    },
    pricingName: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '8px'
    },
    pricingPrice: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '24px'
    },
    pricingPeriod: {
      color: '#6b7280',
      marginLeft: '8px'
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 32px 0'
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '12px'
    },
    pricingButton: {
      width: '100%',
      padding: '12px 24px',
      borderRadius: '12px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    footer: {
      backgroundColor: '#111827',
      color: 'white',
      padding: '64px 16px'
    },
    footerContent: {
      maxWidth: '1280px',
      margin: '0 auto'
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px',
      marginBottom: '32px'
    },
    footerBrand: {
      gridColumn: 'span 2'
    },
    footerDescription: {
      color: '#9ca3af',
      marginBottom: '24px',
      maxWidth: '384px'
    },
    socialLinks: {
      display: 'flex',
      gap: '16px'
    },
    socialLink: {
      width: '40px',
      height: '40px',
      backgroundColor: '#374151',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    footerSection: {
      marginBottom: '16px'
    },
    footerTitle: {
      fontWeight: '600',
      marginBottom: '16px'
    },
    footerLinks: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    footerLink: {
      color: '#9ca3af',
      textDecoration: 'none',
      marginBottom: '8px',
      display: 'block',
      transition: 'color 0.2s',
      cursor: 'pointer'
    },
    footerBottom: {
      borderTop: '1px solid #374151',
      paddingTop: '32px',
      textAlign: 'center',
      color: '#9ca3af'
    },
    animate: {
      transform: 'translateY(0)',
      opacity: 1,
      transition: 'all 1s ease-out'
    },
    animateHidden: {
      transform: 'translateY(32px)',
      opacity: 0
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <Zap style={{ width: '20px', height: '20px', color: 'white' }} />
            </div>
            <span style={styles.logoText}>TaskFlow</span>
          </div>
          
          <div style={styles.navLinks}>
            <a href="#features" style={styles.navLink}>Features</a>
            <a href="#reviews" style={styles.navLink}>Reviews</a>
            <a href="#pricing" style={styles.navLink}>Pricing</a>
            <button style={styles.navButton}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero"
        data-animate
        style={{
          ...styles.hero,
          ...(visibleSections.has('hero') ? styles.animate : styles.animateHidden)
        }}
      >
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Organize Your Tasks,{' '}
            <span style={styles.heroGradient}>Amplify Your Success</span>
          </h1>
          <p style={styles.heroSubtitle}>
            TaskFlow is the modern task management solution that helps individuals and teams stay organized, 
            focused, and productive. Transform chaos into clarity with our intuitive platform.
          </p>
          <button 
            style={styles.heroButton}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <span>Start Your Free Trial</span>
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </button>
          
          <div style={styles.mockup}>
            <div style={styles.mockupContainer}>
              <div style={styles.mockupWindow}>
                <div style={styles.mockupHeader}>
                  <div style={styles.mockupDots}>
                    <div style={{...styles.mockupDot, backgroundColor: '#ef4444'}}></div>
                    <div style={{...styles.mockupDot, backgroundColor: '#f59e0b'}}></div>
                    <div style={{...styles.mockupDot, backgroundColor: '#10b981'}}></div>
                  </div>
                  <span style={{ color: '#6b7280', fontSize: '14px', marginLeft: '16px' }}>TaskFlow Dashboard</span>
                </div>
                <div>
                  <div style={{...styles.mockupTask, backgroundColor: '#dbeafe'}}>
                    <span style={{color: '#374151'}}>Complete quarterly review</span>
                    <span style={{color: '#2563eb', fontSize: '14px'}}>Due today</span>
                  </div>
                  <div style={{...styles.mockupTask, backgroundColor: '#d1fae5'}}>
                    <span style={{color: '#374151'}}>Team standup meeting</span>
                    <span style={{color: '#059669', fontSize: '14px'}}>In progress</span>
                  </div>
                  <div style={{...styles.mockupTask, backgroundColor: '#f3f4f6'}}>
                    <span style={{color: '#374151'}}>Update project documentation</span>
                    <span style={{color: '#6b7280', fontSize: '14px'}}>Tomorrow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features"
        data-animate
        style={{
          ...styles.section,
          ...styles.sectionGray,
          ...(visibleSections.has('features') ? styles.animate : styles.animateHidden)
        }}
      >
        <div style={styles.sectionContent}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Powerful Features for Modern Teams</h2>
            <p style={styles.sectionSubtitle}>
              Discover the tools that make TaskFlow the preferred choice for thousands of productive teams worldwide.
            </p>
          </div>

          <div style={{...styles.grid, ...styles.gridCols3}}>
            {features.map((feature, index) => (
              <div 
                key={index}
                style={styles.card}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={styles.cardIcon}>
                  {feature.icon}
                </div>
                <h3 style={styles.cardTitle}>{feature.title}</h3>
                <p style={styles.cardDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section 
        id="reviews"
        data-animate
        style={{
          ...styles.section,
          ...(visibleSections.has('reviews') ? styles.animate : styles.animateHidden)
        }}
      >
        <div style={styles.sectionContent}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Loved by Teams Everywhere</h2>
            <p style={styles.sectionSubtitle}>
              See what our users have to say about their TaskFlow experience.
            </p>
          </div>

          <div style={{...styles.grid, ...styles.gridCols3}}>
            {reviews.map((review, index) => (
              <div key={index} style={styles.card}>
                <div style={styles.stars}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} style={{ width: '20px', height: '20px', color: '#fbbf24', fill: '#fbbf24' }} />
                  ))}
                </div>
                <p style={styles.reviewText}>"{review.content}"</p>
                <div style={styles.reviewer}>
                  <div style={styles.reviewerAvatar}>
                    {review.avatar}
                  </div>
                  <div>
                    <div style={styles.reviewerName}>{review.name}</div>
                    <div style={styles.reviewerRole}>{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        id="pricing"
        data-animate
        style={{
          ...styles.section,
          ...styles.sectionGray,
          ...(visibleSections.has('pricing') ? styles.animate : styles.animateHidden)
        }}
      >
        <div style={styles.sectionContent}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Simple, Transparent Pricing</h2>
            <p style={styles.sectionSubtitle}>
              Choose the plan that fits your needs. Upgrade or downgrade at any time.
            </p>
          </div>

          <div style={{...styles.grid, ...styles.gridCols3, maxWidth: '1200px', margin: '0 auto'}}>
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                style={{
                  ...styles.pricingCard,
                  ...(plan.popular ? { 
                    border: '2px solid #2563eb',
                    transform: 'scale(1.05)'
                  } : {})
                }}
              >
                {plan.popular && (
                  <div style={styles.popularBadge}>Most Popular</div>
                )}
                
                <div style={styles.pricingContent}>
                  <h3 style={styles.pricingName}>{plan.name}</h3>
                  <div style={styles.pricingPrice}>
                    {plan.price}
                    <span style={styles.pricingPeriod}>{plan.period}</span>
                  </div>
                  
                  <ul style={styles.featureList}>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={styles.feature}>
                        <CheckCircle style={{ width: '20px', height: '20px', color: '#10b981', marginRight: '12px' }} />
                        <span style={{color: '#374151'}}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    style={{
                      ...styles.pricingButton,
                      ...(plan.popular ? {
                        background: 'linear-gradient(135deg, #2563eb, #9333ea)',
                        color: 'white'
                      } : {
                        backgroundColor: '#f3f4f6',
                        color: '#111827'
                      })
                    }}
                    onMouseEnter={(e) => {
                      if (plan.popular) {
                        e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
                        e.target.style.transform = 'scale(1.05)';
                      } else {
                        e.target.style.backgroundColor = '#e5e7eb';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (plan.popular) {
                        e.target.style.boxShadow = 'none';
                        e.target.style.transform = 'scale(1)';
                      } else {
                        e.target.style.backgroundColor = '#f3f4f6';
                      }
                    }}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        id="footer"
        data-animate
        style={{
          ...styles.footer,
          ...(visibleSections.has('footer') ? styles.animate : styles.animateHidden)
        }}
      >
        <div style={styles.footerContent}>
          <div style={styles.footerGrid}>
            <div style={styles.footerBrand}>
              <div style={styles.logo}>
                <div style={styles.logoIcon}>
                  <Zap style={{ width: '20px', height: '20px', color: 'white' }} />
                </div>
                <span style={{...styles.logoText, color: 'white'}}>TaskFlow</span>
              </div>
              <p style={styles.footerDescription}>
                Transform your productivity with TaskFlow. The modern task management solution for individuals and teams.
              </p>
              <div style={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <div 
                    key={index}
                    style={styles.socialLink}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#4b5563';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#374151';
                    }}
                    title={social.name}
                  >
                    <span style={{ fontSize: '18px' }}>{social.icon}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 style={styles.footerTitle}>Product</h4>
              <ul style={styles.footerLinks}>
                <li><a href="#" style={styles.footerLink}>Features</a></li>
                <li><a href="#" style={styles.footerLink}>Pricing</a></li>
                <li><a href="#" style={styles.footerLink}>API</a></li>
                <li><a href="#" style={styles.footerLink}>Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={styles.footerTitle}>Support</h4>
              <ul style={styles.footerLinks}>
                <li><a href="#" style={styles.footerLink}>Help Center</a></li>
                <li><a href="#" style={styles.footerLink}>Contact Us</a></li>
                <li><a href="#" style={styles.footerLink}>Privacy Policy</a></li>
                <li><a href="#" style={styles.footerLink}>Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div style={styles.footerBottom}>
            <p>&copy; 2025 TaskFlow. All rights reserved. Built with passion for productivity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TaskFlowLanding;