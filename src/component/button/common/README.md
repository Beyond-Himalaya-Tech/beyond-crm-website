# Button Component

A dynamic, reusable button component built with React and Tailwind CSS. This component supports multiple variants, sizes, states, and can render as either a button or anchor tag.

## Features

- ✅ **Multiple Variants** - Primary, secondary, outline, ghost, danger, success, warning
- ✅ **Different Sizes** - Small, medium, large
- ✅ **Icon Support** - Left or right positioned icons (images or React elements)
- ✅ **Loading State** - Built-in loading spinner
- ✅ **Disabled State** - Proper disabled styling and behavior
- ✅ **Link Support** - Can render as anchor tag with href
- ✅ **Full Width** - Option for full-width buttons
- ✅ **Accessibility** - Focus states and proper ARIA attributes
- ✅ **Responsive** - Works on all screen sizes

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Button content |
| `variant` | `string` | `'primary'` | Button style variant |
| `size` | `string` | `'medium'` | Button size |
| `type` | `string` | `'button'` | HTML button type |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading state with spinner |
| `fullWidth` | `boolean` | `false` | Full width button |
| `icon` | `string \| ReactElement` | `null` | Icon (path or React element) |
| `iconPosition` | `string` | `'left'` | Icon position |
| `href` | `string` | `null` | If provided, renders as anchor |
| `target` | `string` | `'_self'` | Target for anchor tags |
| `onClick` | `function` | `() => {}` | Click handler |
| `className` | `string` | `''` | Additional CSS classes |

## Variants

### Available Variants:
- **`primary`** - White background, dark text (default)
- **`secondary`** - Transparent background, white text
- **`outline`** - Transparent background, white border
- **`ghost`** - Transparent background, no border
- **`danger`** - Red background, white text
- **`success`** - Green background, white text
- **`warning`** - Yellow background, white text

### Variant Examples:
```jsx
<ButtonComponent variant="primary">Primary</ButtonComponent>
<ButtonComponent variant="secondary">Secondary</ButtonComponent>
<ButtonComponent variant="outline">Outline</ButtonComponent>
<ButtonComponent variant="ghost">Ghost</ButtonComponent>
<ButtonComponent variant="danger">Danger</ButtonComponent>
<ButtonComponent variant="success">Success</ButtonComponent>
<ButtonComponent variant="warning">Warning</ButtonComponent>
```

## Sizes

### Available Sizes:
- **`small`** - Compact button with small text
- **`medium`** - Standard button size (default)
- **`large`** - Large button with bigger text and padding

### Size Examples:
```jsx
<ButtonComponent size="small">Small</ButtonComponent>
<ButtonComponent size="medium">Medium</ButtonComponent>
<ButtonComponent size="large">Large</ButtonComponent>
```

## Icons

### Icon Support:
The component supports both image paths and React elements as icons.

```jsx
// Image icon (left position)
<ButtonComponent 
  icon="/path/to/icon.png"
  iconPosition="left"
>
  Button with Icon
</ButtonComponent>

// Image icon (right position)
<ButtonComponent 
  icon="/path/to/icon.png"
  iconPosition="right"
>
  Button with Icon
</ButtonComponent>

// React element icon
<ButtonComponent icon={<span>🚀</span>}>
  Button with Emoji
</ButtonComponent>
```

## States

### Loading State:
```jsx
<ButtonComponent loading={true}>
  Loading...
</ButtonComponent>
```

### Disabled State:
```jsx
<ButtonComponent disabled>
  Disabled Button
</ButtonComponent>
```

### Full Width:
```jsx
<ButtonComponent fullWidth>
  Full Width Button
</ButtonComponent>
```

## Link Buttons

### Internal Links:
```jsx
<ButtonComponent href="#section">
  Go to Section
</ButtonComponent>
```

### External Links:
```jsx
<ButtonComponent 
  href="https://example.com"
  target="_blank"
>
  External Link
</ButtonComponent>
```

## Usage Examples

### Basic Usage:
```jsx
import ButtonComponent from './Button.component.jsx'

function App() {
  return (
    <ButtonComponent onClick={() => console.log('clicked')}>
      Click Me
    </ButtonComponent>
  )
}
```

### Header Buttons:
```jsx
<div className="flex gap-4">
  <ButtonComponent variant="ghost" size="medium">
    Login
  </ButtonComponent>
  <ButtonComponent variant="primary" size="medium">
    Get Demo
  </ButtonComponent>
</div>
```

### Hero Section Buttons:
```jsx
<div className="flex flex-col sm:flex-row gap-4">
  <ButtonComponent variant="primary" size="large">
    See Pricing
  </ButtonComponent>
  <ButtonComponent 
    variant="secondary" 
    size="large"
    icon="/path/to/video-icon.png"
  >
    Watch Demo
  </ButtonComponent>
</div>
```

### Form Buttons:
```jsx
<div className="space-y-4">
  <ButtonComponent 
    type="submit" 
    variant="primary" 
    fullWidth
    loading={isSubmitting}
  >
    {isSubmitting ? 'Submitting...' : 'Submit Form'}
  </ButtonComponent>
  
  <ButtonComponent 
    type="button" 
    variant="outline" 
    fullWidth
    onClick={handleReset}
  >
    Reset Form
  </ButtonComponent>
</div>
```

### Action Buttons:
```jsx
<div className="flex gap-2">
  <ButtonComponent variant="success" icon="✅">
    Approve
  </ButtonComponent>
  <ButtonComponent variant="danger" icon="❌">
    Reject
  </ButtonComponent>
  <ButtonComponent variant="warning" icon="⚠️">
    Warning
  </ButtonComponent>
</div>
```

## Styling

The component uses Tailwind CSS classes and follows the design system:

- **Primary Color**: `#aa14b5` (purple theme)
- **White**: `#ffffff`
- **Dark Text**: `#333333`
- **Border Radius**: `rounded-lg`
- **Transitions**: `transition-all duration-300`

### Custom Styling:
```jsx
<ButtonComponent 
  className="custom-button-class"
  variant="primary"
>
  Custom Button
</ButtonComponent>
```

## Accessibility

The component includes proper accessibility features:

- **Focus States**: Visible focus rings
- **Disabled States**: Proper ARIA attributes
- **Loading States**: Screen reader friendly
- **Keyboard Navigation**: Full keyboard support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- React 18+
- Tailwind CSS 4.0+

## Example

See `ButtonExample.jsx` for a complete demonstration of all button features and variants. 