# Treasurer App 📱💰

A React Native mobile application built with Expo for managing payment collections and financial tracking. The app features a modern UI with gradient components and a floating action button (FAB) for quick actions.

## 🚀 Features

- **Payment Dashboard**: View payment collections and dues
- **Card-based UI**: Modern gradient cards displaying payment information
- **Speed Dial FAB**: Floating action button with quick import options
- **Responsive Design**: Optimized for mobile devices
- **Gradient Components**: Custom gradient buttons, cards, and text components

## 📁 File Structure

```
treasurer-app/
├── app/                          # Main application screens
│   └── (tabs)/                   # Tab-based navigation
│       ├── _layout.tsx           # Tab layout configuration
│       ├── dashboard.tsx         # Main dashboard screen
│       ├── index.tsx             # Home screen
│       └── splashScreen.tsx      # Splash screen
├── assets/                       # Static assets
│   ├── fonts/                    # Custom fonts (Karla family)
│   └── images/                   # App images and icons
├── components/                   # Reusable UI components
│   ├── grouped-components/       # Complex component combinations
│   │   └── card-component.tsx    # Payment card with gradient elements
│   ├── individual-component/      # Individual UI components
│   │   ├── gradient-button.tsx   # Gradient button component
│   │   ├── gradient-card.tsx     # Gradient card container
│   │   ├── gradient-fab.tsx      # Speed dial FAB component
│   │   ├── gradient-input.tsx    # Gradient input field
│   │   └── gradient-text.tsx     # Gradient text component
│   ├── layout/                   # Layout components
│   │   ├── container.tsx         # Main container with padding
│   │   └── header.tsx            # App header component
│   └── ui/                       # Additional UI components
├── styles/                       # Global styles and themes
│   └── colors.tsx               # Color definitions
└── package.json                  # Dependencies and scripts
```

## 🧩 Component Documentation

### Layout Components

#### `Container` (`components/layout/container.tsx`)
- **Purpose**: Provides consistent padding and layout structure
- **Props**: `children`, `style`, `...props` (extends ViewProps)
- **Features**: 23px horizontal padding, flexible width

#### `Header` (`components/layout/header.tsx`)
- **Purpose**: App header with customizable text and font weight
- **Props**: `text`, `fontWeight`
- **Features**: Supports different font weights (extrabold, bold, etc.)

### Individual Components

#### `GradientCard` (`components/individual-component/gradient-card.tsx`)
- **Purpose**: Container with gradient background
- **Props**: `children`
- **Features**: Gradient background, rounded corners, shadow effects

#### `GradientText` (`components/individual-component/gradient-text.tsx`)
- **Purpose**: Text component with gradient styling
- **Props**: `text`, `fontSize`, `fontWeight`, `style`
- **Features**: Customizable font size and weight, gradient text effect

#### `GradientButton` (`components/individual-component/gradient-button.tsx`)
- **Purpose**: Button with gradient background and icon support
- **Props**: `children`, `icon`, `onPress`
- **Features**: Gradient background, icon support, touch feedback

#### `GradientFab` (`components/individual-component/gradient-fab.tsx`)
- **Purpose**: Speed dial floating action button
- **Props**: `icon`, `onPress`
- **Features**: 
  - Main FAB with gradient background
  - Speed dial with two action buttons
  - Smooth spring animations
  - Dynamic icon (Plus/X based on state)
  - Auto-close on action selection

### Grouped Components

#### `CardComponent` (`components/grouped-components/card-component.tsx`)
- **Purpose**: Complete payment card with all gradient elements
- **Features**:
  - Displays payment amounts (collected and total due)
  - Shows course name and description
  - Includes gradient text and button elements
  - Positioned pig image overlay
  - "View details" action button

## 🎨 Styling

### Color Scheme
- **Primary**: `#D8125A` (Pink/Magenta)
- **Secondary**: `#CC5B8F` (Lighter Pink)
- **Text**: `#000000` (Black)
- **Background**: `#FFFFFF` (White)

### Typography
- **Font Family**: Karla (Regular, Medium, SemiBold, Bold, ExtraBold)
- **Font Sizes**: 12px, 14px, 22px (configurable)
- **Font Weights**: Regular, Medium, SemiBold, Bold, ExtraBold

## 📱 Screens

### Dashboard (`app/(tabs)/dashboard.tsx`)
- **Purpose**: Main payment dashboard screen
- **Features**:
  - Header with "Treasurer" title
  - "Payment Dashboard" subtitle
  - Scrollable list of payment cards
  - Fixed speed dial FAB in bottom right
  - Container with consistent padding

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npx expo start
   ```

3. **Run on device/emulator**:
   - Press `a` for Android
   - Press `i` for iOS
   - Scan QR code with Expo Go app

## 🔧 Development

### Adding New Components
1. Create component in appropriate directory (`individual-component/` or `grouped-components/`)
2. Follow existing naming conventions
3. Add TypeScript interfaces for props
4. Include proper styling with StyleSheet
5. Update this README with component documentation

### Component Guidelines
- Use TypeScript for type safety
- Follow React Native best practices
- Implement proper prop interfaces
- Use consistent styling patterns
- Add shadow effects for depth
- Support both iOS and Android

## 📝 Update Log

### Latest Updates
- ✅ Speed dial FAB with import options
- ✅ Dynamic FAB icon (Plus/X toggle)
- ✅ Scrollable dashboard with multiple cards
- ✅ Gradient components with consistent styling
- ✅ Responsive layout with proper positioning

---

**Built with**: React Native, Expo, TypeScript, Linear Gradient
**UI Framework**: Custom gradient components with modern design
**Navigation**: Expo Router with tab-based navigation
