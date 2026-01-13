# Reproduction-Aria

A React component library built with TypeScript, React Aria, and Tailwind CSS.

## Installation

```bash
npm install reproduction-aria
```

## Tailwind CSS Setup (Required)

This library uses Tailwind CSS utility classes. You **must** configure your app's Tailwind to scan the library's files:

```js
// tailwind.config.js (or tailwind.config.ts)
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Add this line to include the library's components:
    './node_modules/reproduction-aria/dist/**/*.{js,mjs}',
  ],
  // ...
}
```

If you're using Tailwind CSS v4 with the CSS-based config:

```css
/* In your main CSS file */
@import "tailwindcss";
@source "../node_modules/reproduction-aria/dist";
```

## Usage

```tsx
import { Button } from 'reproduction-aria';

function App() {
  return (
    <div>
      <Button primary onPress={() => console.log('pressed!')}>
        Click me
      </Button>
    </div>
  );
}
```

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Start Storybook for development
npm run storybook

# Build the library
npm run build

# Watch mode for development
npm run dev
```

## Components

### Button

A customizable button component.

```tsx
<Button
  primary={true}
  size="medium" // 'small' | 'medium' | 'large'
  label="Click me"
  backgroundColor="#ff0000"
  onClick={() => {}}
/>
```

### Header

A header component with login/logout functionality.

```tsx
<Header
  user={{ name: 'John Doe' }}
  onLogin={() => {}}
  onLogout={() => {}}
  onCreateAccount={() => {}}
/>
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Build the library for production |
| `npm run dev` | Build in watch mode |
| `npm run storybook` | Start Storybook dev server |
| `npm run build-storybook` | Build Storybook for deployment |
| `npm run lint` | Run TypeScript type checking |

## License

ISC
