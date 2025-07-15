import React, { useState } from 'react'
import ButtonComponent from './Button.component.jsx'

const ButtonExample = () => {
  const [loading, setLoading] = useState(false)

  const handleClick = (buttonType) => {
    console.log('Button clicked:', buttonType)
  }

  const handleLoadingClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Button Component Examples</h1>
      
      {/* Variants */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <ButtonComponent variant="primary" onClick={() => handleClick('primary')}>
            Primary Button
          </ButtonComponent>
          <ButtonComponent variant="secondary" onClick={() => handleClick('secondary')}>
            Secondary Button
          </ButtonComponent>
          <ButtonComponent variant="outline" onClick={() => handleClick('outline')}>
            Outline Button
          </ButtonComponent>
          <ButtonComponent variant="ghost" onClick={() => handleClick('ghost')}>
            Ghost Button
          </ButtonComponent>
          <ButtonComponent variant="danger" onClick={() => handleClick('danger')}>
            Danger Button
          </ButtonComponent>
          <ButtonComponent variant="success" onClick={() => handleClick('success')}>
            Success Button
          </ButtonComponent>
          <ButtonComponent variant="warning" onClick={() => handleClick('warning')}>
            Warning Button
          </ButtonComponent>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <ButtonComponent size="small" variant="primary" onClick={() => handleClick('small')}>
            Small Button
          </ButtonComponent>
          <ButtonComponent size="medium" variant="primary" onClick={() => handleClick('medium')}>
            Medium Button
          </ButtonComponent>
          <ButtonComponent size="large" variant="primary" onClick={() => handleClick('large')}>
            Large Button
          </ButtonComponent>
        </div>
      </section>

      {/* Icons */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <ButtonComponent 
            variant="primary" 
            icon="/src/assets/images/hero-section/video icon.png"
            onClick={() => handleClick('icon-left')}
          >
            Icon Left
          </ButtonComponent>
          <ButtonComponent 
            variant="secondary" 
            icon="/src/assets/images/hero-section/video icon.png"
            iconPosition="right"
            onClick={() => handleClick('icon-right')}
          >
            Icon Right
          </ButtonComponent>
          <ButtonComponent 
            variant="outline" 
            icon="🚀"
            onClick={() => handleClick('emoji-icon')}
          >
            Emoji Icon
          </ButtonComponent>
        </div>
      </section>

      {/* States */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Button States</h2>
        <div className="flex flex-wrap gap-4">
          <ButtonComponent variant="primary" onClick={() => handleClick('normal')}>
            Normal Button
          </ButtonComponent>
          <ButtonComponent variant="primary" disabled onClick={() => handleClick('disabled')}>
            Disabled Button
          </ButtonComponent>
          <ButtonComponent 
            variant="primary" 
            loading={loading}
            onClick={handleLoadingClick}
          >
            {loading ? 'Loading...' : 'Loading Button'}
          </ButtonComponent>
        </div>
      </section>

      {/* Full Width */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Full Width Buttons</h2>
        <div className="space-y-4 max-w-md">
          <ButtonComponent 
            variant="primary" 
            fullWidth 
            onClick={() => handleClick('full-width-primary')}
          >
            Full Width Primary
          </ButtonComponent>
          <ButtonComponent 
            variant="secondary" 
            fullWidth 
            onClick={() => handleClick('full-width-secondary')}
          >
            Full Width Secondary
          </ButtonComponent>
        </div>
      </section>

      {/* Links */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Button Links</h2>
        <div className="flex flex-wrap gap-4">
          <ButtonComponent 
            variant="primary" 
            href="#pricing"
            onClick={() => handleClick('link')}
          >
            Link Button
          </ButtonComponent>
          <ButtonComponent 
            variant="secondary" 
            href="https://example.com"
            target="_blank"
            onClick={() => handleClick('external-link')}
          >
            External Link
          </ButtonComponent>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Real-world Examples</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Header Buttons</h3>
          <div className="flex gap-4 mb-6">
            <ButtonComponent variant="ghost" size="medium">
              Login
            </ButtonComponent>
            <ButtonComponent variant="primary" size="medium">
              Get Demo
            </ButtonComponent>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Hero Section Buttons</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonComponent variant="primary" size="large">
              See Pricing
            </ButtonComponent>
            <ButtonComponent 
              variant="secondary" 
              size="large"
              icon="/src/assets/images/hero-section/video icon.png"
            >
              Watch Demo
            </ButtonComponent>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ButtonExample 