# 🎨 Morphin - Premium Cinematic Landing Page Template

A world-class, award-winning landing page template featuring cinematic storytelling, premium animations, and cutting-edge web technologies. Built to inspire and convert.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## ✨ Features

### 🎬 Cinematic Experience
- **Scroll-Driven Storytelling**: Every scroll reveals something new with purpose
- **Word-by-Word Animations**: Headlines animate with stagger for maximum impact
- **Section Pinning**: Immersive scroll experiences with pinned sections
- **Parallax Effects**: Multi-layer depth with independent movement speeds
- **Custom Cursor**: Adaptive cursor that changes based on context

### 🚀 Premium Animations
- **60fps Performance**: GPU-accelerated transforms for buttery smooth animations
- **GSAP ScrollTrigger**: Professional-grade scroll-based animations
- **Lenis Smooth Scroll**: Physics-based momentum scrolling
- **Framer Motion**: React-first animation library for complex interactions
- **Stagger Effects**: Choreographed entrance animations
- **Mask Reveals**: Cinematic wipe and reveal transitions
- **3D Transforms**: Depth and perspective for modern feel

### 🎯 11 Unique Sections
1. **Hero** - Large typography, animated gradients, floating decorations
2. **Problem** - Scroll reveals with perspective transforms
3. **Solution** - Pinned section with mask reveals
4. **Features** - Directional card animations with hover effects
5. **Showcase** - Device mockups with sticky scrolling
6. **Testimonials** - Social proof with random stagger
7. **Case Study** - Image reveals with animated statistics
8. **Technology** - Floating tech stack icons
9. **FAQ** - Smooth accordion interactions
10. **CTA** - Magnetic buttons with animated orbs
11. **Footer** - Elegant links with subtle animations

### 🎨 Design Excellence
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Gradient Backgrounds**: Animated multi-color gradients
- **Soft Shadows**: Layered depth with elevation
- **Rounded Corners**: Modern, friendly aesthetic
- **Dark Mode**: Full support for dark color scheme
- **Responsive Design**: Beautiful on all devices

### ⚡ Performance First
- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic route-based splitting
- **GPU Transforms**: Hardware acceleration for animations
- **Optimized Fonts**: Next.js font optimization
- **Tree Shaking**: Unused code elimination

## 🛠️ Tech Stack

- **Framework**: [Next.js 14.2](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript 5.4](https://www.typescriptlang.org/) - Type-safe development
- **Styling**: [TailwindCSS 3.4](https://tailwindcss.com/) - Utility-first CSS
- **Animations**: 
  - [GSAP 3.12](https://greensock.com/gsap/) - Professional animation library
  - [Framer Motion 11](https://www.framer.com/motion/) - React animation library
  - [Lenis 1.0](https://github.com/studio-freight/lenis) - Smooth scrolling
- **Icons**: Emoji-based for universal compatibility

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nbhson/template-morphin-premium-landing.git
   cd template-morphin-premium-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
morphin/
├── app/
│   ├── layout.tsx          # Root layout with fonts and providers
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── CustomCursor.tsx    # GSAP-powered custom cursor
│   ├── SmoothScroll.tsx    # Lenis smooth scrolling wrapper
│   └── sections/           # All page sections
│       ├── Hero.tsx
│       ├── Problem.tsx
│       ├── Solution.tsx
│       ├── Features.tsx
│       ├── Showcase.tsx
│       ├── Testimonials.tsx
│       ├── CaseStudy.tsx
│       ├── Technology.tsx
│       ├── FAQ.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors & Branding

Edit `tailwind.config.ts` to customize your color palette:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#6366f1',
      secondary: '#a855f7',
      // Add your brand colors
    }
  }
}
```

### Content

Each section is a standalone component in `components/sections/`. Simply edit the content in each file to match your brand.

### Animations

Adjust animation timings in component files:

```typescript
duration: 1,     // Animation duration in seconds
stagger: 0.1,    // Delay between elements
ease: "power4.out" // Easing function
```

## 📱 Responsive Design

The template is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🌙 Dark Mode

Automatic dark mode support based on system preferences. All colors adapt using Tailwind's `dark:` variant.

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **60fps**: Smooth animations on all devices
- **First Load**: < 100KB JavaScript
- **TTI**: < 2 seconds on 4G

## 🎯 Use Cases

Perfect for:
- SaaS landing pages
- Product launches
- Agency portfolios
- Startup websites
- Premium showcases
- Digital products
- App presentations

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - feel free to use for personal and commercial projects.

## 🙏 Acknowledgments

Built with inspiration from world-class studios like:
- Awwwards winners
- CSS Design Awards
- FWA featured sites

## 📞 Support

For questions or issues, please open an issue on GitHub.

---

**Made with ❤️ by [nbhson](https://github.com/nbhson)**

⭐ Star this repo if you find it useful!
