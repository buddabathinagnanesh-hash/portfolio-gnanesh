import React from 'react'

const Card = ({ 
  variant = 'default',
  children,
  className = '',
  onClick,
  as: Component = 'div',
  ...props 
}) => {
  const variantClass = `card card--${variant}`
  
  return (
    <Component 
      className={`${variantClass} ${className} reveal-stagger`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Card
