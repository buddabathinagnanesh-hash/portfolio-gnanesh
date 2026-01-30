import React from 'react'
import SectionHeader from './SectionHeader'

const Contact = () => {
  const contacts = [
    {
      icon: '📧',
      title: 'Email',
      value: 'buddabathinagnanesh@gmail.com',
      link: 'mailto:buddabathinagnanesh@gmail.com',
      description: 'Direct line for opportunities and collaboration',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Buddabathina Gnanesh',
      link: 'https://www.linkedin.com/in/buddabathina-gnanesh-09a007369/',
      description: 'Connect with me professionally',
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: '@buddabathinagnanesh-hash',
      link: 'https://github.com/buddabathinagnanesh-hash',
      description: 'Explore my open source contributions',
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+91 7780360822',
      link: 'https://wa.me/917780360822',
      description: 'Available for quick communication',
    },
  ]

  return (
    <section id="contact" className="section">
      <SectionHeader
        title="Let's Work Together"
        subtitle="I'm actively looking for Frontend Engineer opportunities focused on building performant, scalable, and user-centered web applications"
      />

      <div className="contact-content">
        {contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card card--contact reveal-stagger"
          >
            <div className="contact-icon">{contact.icon}</div>
            <h4 className="contact-title">{contact.title}</h4>
            <p className="contact-description">{contact.description}</p>
            <span className="contact-value">{contact.value}</span>
            <span className="contact-arrow">→</span>
          </a>
        ))}
      </div>

      <div className="contact-cta">
        <p className="contact-prompt">I’m open to frontend developer opportunities and collaborations.</p>
        <a
          href="mailto:buddabathinagnanesh@gmail.com?subject=Frontend opportunity - let's collaborate!"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Send me an email
        </a>
        <p className="contact-note">I typically respond within 24 hours</p>
      </div>
    </section>
  )
}

export default Contact
