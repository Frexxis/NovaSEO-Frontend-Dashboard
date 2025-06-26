# 🤝 Contributing to NovaSEO Frontend Dashboard

Thank you for your interest in contributing to the NovaSEO Frontend Dashboard! This document provides guidelines and information for contributors.

## 🎯 Project Overview

NovaSEO is a modern, AI-powered SEO dashboard built with:
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Modern UI component library
- **Radix UI** - Accessible component primitives

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Frexxis/NovaSEO-Frontend-Dashboard.git
   cd NovaSEO-Frontend-Dashboard
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Development Guidelines

### Code Style

- **TypeScript**: Use strict typing, avoid `any`
- **Components**: Use function components with hooks
- **Naming**: Use descriptive names, PascalCase for components
- **File Organization**: Follow the established folder structure

### Component Guidelines

```typescript
// ✅ Good component structure
import * as React from "react"
import { cn } from "@/lib/utils"

interface ComponentProps {
  title: string
  variant?: "default" | "primary"
  className?: string
}

export const Component = React.forwardRef<
  HTMLDivElement,
  ComponentProps
>(({ title, variant = "default", className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("base-styles", className)}
      {...props}
    >
      {title}
    </div>
  )
})
Component.displayName = "Component"
```

### Styling Guidelines

- **Tailwind CSS**: Use utility classes
- **Dark Mode**: Support both light and dark themes
- **Responsive**: Mobile-first approach
- **Accessibility**: Include proper ARIA attributes

```tsx
// ✅ Good styling example
<button 
  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  aria-label="Submit form"
>
  Submit
</button>
```

## 🔄 Contribution Workflow

### 1. Fork & Clone
```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/NovaSEO-Frontend-Dashboard.git
cd NovaSEO-Frontend-Dashboard
```

### 2. Create Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Make Changes
- Follow the coding guidelines
- Test your changes thoroughly
- Ensure responsive design
- Check accessibility

### 4. Commit Changes
```bash
# Use conventional commit format
git commit -m "feat: add new dashboard widget"
git commit -m "fix: resolve mobile navigation issue"
git commit -m "docs: update API documentation"
```

### 5. Push & Create PR
```bash
git push origin feature/your-feature-name
# Create Pull Request on GitHub
```

## 📝 Commit Message Format

Use [Conventional Commits](https://conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

## 🧪 Testing

- Test components in multiple screen sizes
- Verify dark/light mode compatibility
- Check keyboard navigation
- Validate with screen readers when possible

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/UI Documentation](https://ui.shadcn.com)
- [Radix UI Documentation](https://radix-ui.com)

## ❓ Questions?

If you have questions or need help:
- Check existing issues on GitHub
- Create a new issue for bugs or feature requests
- Start a discussion for general questions

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to NovaSEO! 🚀