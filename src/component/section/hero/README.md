# Hero Component

A dynamic, responsive hero section component built with React and Tailwind CSS. This component includes customizable content, responsive design, and interactive elements.

## Features

- ✅ **Fully Responsive** - Mobile-first design that works on all screen sizes
- ✅ **Dynamic Content** - Configurable title, description, and buttons
- ✅ **Background Effects** - Multiple background layers with opacity
- ✅ **Interactive Buttons** - Primary and secondary button types with icons
- ✅ **Image Optimization** - Responsive image layout for desktop and mobile
- ✅ **Smooth Animations** - CSS transitions for all interactions
- ✅ **Tailwind CSS** - Built with utility-first CSS framework

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `object` | `{ main: "Complete", highlight: "CRM", subtitle: "For Overseas Education Consultants." }` | Title configuration |
| `description` | `string` | `"Begin an exceptional transformation..."` | Hero description text |
| `buttons` | `array` | `[...]` | Array of action buttons |
| `heroImage` | `object` | `{ src: "...", alt: "Hero Image" }` | Main hero image |
| `backgroundImage` | `string` | `"/src/assets/images/hero-section/Framer.png"` | Background image URL |
| `onButtonClick` | `function` | `() => {}` | Callback for button clicks |
| `className` | `string` | `""` | Additional CSS classes |

### Title Object Structure
```javascript
{
  main: "Complete",
  highlight: "CRM", 
  subtitle: "For Overseas Education Consultants."
}
```

### Buttons Array Structure
```javascript
[
  {
    text: "See Pricing",
    type: "primary", // "primary" or "secondary"
    href: "#pricing",
    icon: null // or path to icon image
  },
  {
    text: "Watch Demo",
    type: "secondary",
    href: "#demo",
    icon: "/path/to/icon.png"
  }
]
```

### Hero Image Object Structure
```javascript
{
  src: "/path/to/hero-image.png",
  alt: "Hero Image"
}
```

## Usage

### Basic Usage
```jsx
import HeroComponent from './Hero.component.jsx'

function App() {
  return (
    <HeroComponent />
  )
}
```

### Advanced Usage with Custom Props
```jsx
import HeroComponent from './Hero.component.jsx'

function App() {
  const heroConfig = {
    title: {
      main: "Build",
      highlight: "Amazing",
      subtitle: "Web Applications."
    },
    description: "Create stunning web applications with our modern tools and frameworks.",
    buttons: [
      {
        text: "Get Started",
        type: "primary",
        href: "#start",
        icon: null
      },
      {
        text: "Learn More",
        type: "secondary", 
        href: "#learn",
        icon: "/path/to/icon.png"
      }
    ],
    heroImage: {
      src: "/path/to/hero.png",
      alt: "Hero Illustration"
    },
    backgroundImage: "/path/to/bg.png"
  }

  const handleButtonClick = (button) => {
    console.log('Button clicked:', button.text)
    // Add your navigation logic here
  }

  return (
    <HeroComponent 
      {...heroConfig}
      onButtonClick={handleButtonClick}
    />
  )
}
```

## Responsive Design

The component uses a mobile-first approach with the following breakpoints:

- **Mobile (< 640px)**: Stacked layout, image below content
- **Small (640px - 1024px)**: Side-by-side layout with smaller text
- **Large (≥ 1024px)**: Full desktop layout with large text and images

### Responsive Features:
- **Title**: Scales from `text-4xl` to `text-6xl`
- **Description**: Scales from `text-lg` to `text-xl`
- **Buttons**: Stack vertically on mobile, horizontal on larger screens
- **Image**: Hidden on desktop, shown below content on mobile

## Styling

The component uses the same color scheme as the header:

- **Primary Color**: `#aa14b5` (purple background)
- **Text Color**: `#ffffff` (white)
- **Button Colors**: White background with dark text, or transparent with white text

### Background Layers:
1. **Main Background**: Purple color
2. **Background Image**: Framer image with 20% opacity
3. **Vector Overlay**: Hero vector with 10% opacity

## Customization

### Adding Custom Styles
```jsx
<HeroComponent 
  className="custom-hero-class"
  // ... other props
/>
```

### Custom Button Styles
The component automatically applies different styles based on button type:
- **Primary**: White background, dark text
- **Secondary**: Transparent background, white text

### Background Customization
```jsx
<HeroComponent 
  backgroundImage="/path/to/custom-bg.png"
  // ... other props
/>
```

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

## Example

See `HeroExample.jsx` for a complete usage example with all features demonstrated. 