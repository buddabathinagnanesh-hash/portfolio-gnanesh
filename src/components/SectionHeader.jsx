import React from 'react'

const SectionHeader = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`section-header reveal ${className}`}>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  )
}

export default SectionHeader
