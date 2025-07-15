# Header Component

A dynamic, responsive header component built with React and Tailwind CSS. This component includes mobile menu functionality, scroll effects, and customizable navigation items and buttons.

## Features

- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **Mobile Menu** - Hamburger menu with slide-in animation
- ✅ **Scroll Effects** - Shadow effect when scrolling
- ✅ **Active Navigation** - Highlights active navigation items
- ✅ **Customizable** - Configurable logo, navigation items, and buttons
- ✅ **Accessibility** - Keyboard navigation (Escape key to close menu)
- ✅ **Smooth Animations** - CSS transitions for all interactions
- ✅ **Tailwind CSS** - Built with utility-first CSS framework

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `object` | `{ src: "...", alt: "Beyondcrm", text: "BeyondCRM" }` | Logo configuration |
| `navigationItems` | `array` | `[...]` | Array of navigation items |
| `buttons` | `array` | `[...]` | Array of action buttons |
| `onNavItemClick` | `function` | `() => {}` | Callback for navigation item clicks |
| `onButtonClick` | `function` | `() => {}` | Callback for button clicks |

### Logo Object Structure
```javascript
{
  src: "path/to/logo.png",
  alt: "Logo alt text",
  text: "Logo text"
}
```

### Navigation Items Structure
```javascript
[
  {
    name: "Home",
    href: "#home",
    isActive: true
  },
  {
    name: "Services", 
    href: "#services",
    isActive: false
  }
]
```

### Buttons Structure
```javascript
[
  {
    text: "Login",
    type: "secondary", // "primary" or "secondary"
    href: "#login"
  },
  {
    text: "Get Demo",
    type: "primary",
    href: "#demo"
  }
]
```

## Usage

### Basic Usage
```jsx
import HeaderComponent from './Header.component.js'

function App() {
  return (
    <HeaderComponent />
  )
}
```

### Advanced Usage with Custom Props
```jsx
import HeaderComponent from './Header.component.js'

function App() {
  const navigationItems = [
    { name: 'Home', href: '#home', isActive: true },
    { name: 'Services', href: '#services', isActive: false },
    { name: 'Pricing', href: '#pricing', isActive: false },
    { name: 'Contact', href: '#contact', isActive: false }
  ]

  const buttons = [
    { text: 'Login', type: 'secondary', href: '#login' },
    { text: 'Get Demo', type: 'primary', href: '#demo' }
  ]

  const logo = {
    src: "/path/to/logo.png",
    alt: "My Company",
    text: "MyCompany"
  }

  const handleNavItemClick = (item, index) => {
    console.log('Navigation clicked:', item.name)
    // Add your navigation logic here
  }

  const handleButtonClick = (button) => {
    console.log('Button clicked:', button.text)
    // Add your button logic here
  }

  return (
    <HeaderComponent 
      logo={logo}
      navigationItems={navigationItems}
      buttons={buttons}
      onNavItemClick={handleNavItemClick}
      onButtonClick={handleButtonClick}
    />
  )
}
```

## Styling

The component uses Tailwind CSS classes and includes:

- **Primary Color**: `#aa14b5` (purple)
- **Font**: Poppins (imported from Google Fonts)
- **Responsive Breakpoints**: 
  - Mobile: `< 1045px` (hamburger menu)
  - Desktop: `≥ 1045px` (full navigation)

### Custom Styling

You can customize the component by modifying the Tailwind classes in the component file. The main color variables are:

```css
--primary-color: #aa14b5
--white-color: #ffffff
--black-color: #333333
```

## Mobile Menu Features

- **Slide-in Animation**: Menu slides in from the left
- **Backdrop**: Semi-transparent overlay
- **Close on Click**: Clicking backdrop closes menu
- **Escape Key**: Press Escape to close menu
- **Body Scroll Lock**: Prevents background scrolling when open

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- React 18+
- Tailwind CSS 4.0+
- Poppins font (Google Fonts)

## Installation

1. Ensure Tailwind CSS is installed and configured
2. Import the Poppins font in your CSS
3. Copy the component files to your project
4. Import and use the component

## Example

See `HeaderExample.jsx` for a complete usage example with scroll effects and content. 