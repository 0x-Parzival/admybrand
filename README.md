# 🌟 Spiritual Resources Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-v18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.3.0-blue.svg)](https://tailwindcss.com/)

A modern, interactive website for exploring spiritual resources and ancient texts with a contemporary analytical perspective. The site combines traditional wisdom with modern web technologies to create an engaging and informative experience.

## 🚀 Features

- 📊 Interactive Bhagwatam Puran Analysis with advanced data visualization
- 🎨 Modern, cyberpunk-inspired UI with dynamic particle effects
- 📱 Fully responsive design for all devices
- 📈 Interactive charts and visualizations using Chart.js
- 🎯 TypeScript-powered development for type safety and maintainability
- 🎨 Tailwind CSS for rapid styling and consistent design
- 🔄 Real-time updates with React context and state management

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Type Safety**: TypeScript 4.9.5
- **Styling**: Tailwind CSS 3.3.0
- **Charting**: Chart.js 4.x
- **Routing**: React Router 6.x
- **Particles**: tsparticles 3.x
- **Icons**: React Icons
- **State Management**: React Context API
- **Development Tools**: Vite, ESLint, Prettier

## 📦 Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── ParticleBackground/ # Particle effects implementation
│   ├── DataTreya/        # Data visualization components
│   └── Layout/          # Layout components
├── pages/          # Page components
├── context/        # React context providers
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── assets/        # Static assets
└── App.tsx        # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher) or yarn (v1.22 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/0x-Parzival/site.git
cd site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
# or
yarn build
```

## 🎯 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready files
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_API_URL=https://your-api-url.com
VITE_APP_VERSION=1.0.0
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
