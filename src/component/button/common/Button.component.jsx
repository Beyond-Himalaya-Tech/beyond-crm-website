import React from 'react'

const ButtonComponent = ({
  children,
  variant = 'primary', // primary, secondary, outline, ghost, danger
  size = 'medium', // small, medium, large
  type = 'button', // button, submit, reset
  disabled = false,
  loading = false,
  fullWidth = false,
  icon = null, // can be string (path) or React element
  iconPosition = 'left', // left, right
  href = null, // if provided, renders as anchor tag
  target = '_self', // _self, _blank, etc.
  onClick = () => {},
  className = '',
  ...props
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-normal cursor-pointer transition-all duration-300 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  }
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-white text-[#333333] border-white hover:bg-transparent hover:text-white focus:ring-white',
    secondary: 'bg-transparent text-black border-white hover:bg-white hover:text-[#333333] focus:ring-white',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#333333] focus:ring-white',
    ghost: 'bg-transparent text-white border-transparent hover:bg-black hover:bg-opacity-10 focus:ring-white',
    danger: 'bg-red-600 text-white border-red-600 hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white border-green-600 hover:bg-green-700 focus:ring-green-500',
    warning: 'bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400'
  }
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : ''
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClasses} ${className}`.trim()
  
  // Icon component
  const IconElement = () => {
    if (!icon) return null
    
    if (typeof icon === 'string') {
      return (
        <img 
          src={icon} 
          alt=""
          className={`${size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-6 h-6' : 'w-5 h-5'} ${
            iconPosition === 'right' ? 'ml-2' : 'mr-2'
          }`}
        />
      )
    }
    
    return (
      <span className={`${iconPosition === 'right' ? 'ml-2' : 'mr-2'}`}>
        {icon}
      </span>
    )
  }
  
  // Loading spinner
  const LoadingSpinner = () => (
    <svg 
      className={`animate-spin ${size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-6 h-6' : 'w-5 h-5'} ${
        iconPosition === 'right' ? 'ml-2' : 'mr-2'
      }`} 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
  
  // Content with icon and loading state
  const content = (
    <>
      {loading ? (
        <>
          <LoadingSpinner />
          {children}
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && <IconElement />}
          {children}
          {icon && iconPosition === 'right' && <IconElement />}
        </>
      )}
    </>
  )
  
  // Render as anchor if href is provided
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={buttonClasses}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    )
  }
  
  // Render as button
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  )
}

export default ButtonComponent 