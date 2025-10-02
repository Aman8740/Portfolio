# GitHub Copilot Instructions for Portfolio Project

## Project Overview
This is a modern React TypeScript portfolio website built with Vite, showcasing professional experience, projects, education, and skills. The portfolio is designed for deployment on GitHub Pages and follows modern web development best practices.

## Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with @tailwindcss/typography
- **UI Components**: shadcn/ui component library
- **Content Rendering**: react-markdown for rich text
- **Typography**: Inter font family
- **Deployment**: GitHub Pages

## Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (sidebar, theme toggle)
│   ├── portfolio/      # Portfolio-specific components
│   └── ui/            # shadcn/ui components
├── data/              # Static data and content
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── types/             # TypeScript type definitions
```

## Code Standards

### TypeScript
- Use strict TypeScript configuration
- Define proper interfaces for all data structures
- Prefer type safety over `any` types
- Use proper typing for React components and props

### React Components
- Use functional components with hooks
- Follow the compound component pattern where appropriate
- Implement proper prop validation with TypeScript interfaces
- Use React.memo() for performance optimization when needed

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use Inter font for professional typography
- Maintain consistent spacing using Tailwind's spacing scale
- Prefer CSS Grid over complex carousel components for better responsiveness

### Content Management
- Store all portfolio data in `src/data/portfolio-data.ts`
- Use markdown formatting for rich text content
- Implement react-markdown for content rendering
- Maintain consistent data structure for projects, experience, and education

## Development Guidelines

### Component Development
1. **Portfolio Components**: Located in `src/components/portfolio/`
   - Each tab (projects, experience, education) should be a separate component
   - Use consistent props interface across portfolio components
   - Implement markdown rendering for descriptions

2. **UI Components**: Use shadcn/ui components from `src/components/ui/`
   - Follow shadcn/ui patterns and conventions
   - Customize components using Tailwind CSS
   - Avoid complex components that cause mobile layout issues

3. **Layout Components**: Responsive design principles
   - Implement proper sidebar navigation
   - Ensure mobile-first responsive design
   - Use theme toggle for dark/light mode support

### Data Management
- Portfolio data should be strongly typed using interfaces from `src/types/portfolio.ts`
- Use consistent naming conventions (camelCase for properties)
- Include proper metadata (dates, company names, technologies)
- Format descriptions using markdown for rich text rendering

### Performance Considerations
- Optimize images in `public/assets/`
- Use lazy loading for heavy components
- Implement proper error boundaries
- Minimize bundle size by avoiding unnecessary dependencies

## Deployment Instructions
- Build for production: `npm run build`
- Deploy to GitHub Pages using the dist/ folder
- Ensure all assets are properly referenced with relative paths
- Test responsive design across different devices

## Git Workflow
- Keep `.gitignore` minimal (node_modules/, dist/)
- Include all configuration files necessary for deployment
- Use meaningful commit messages
- Tag releases for portfolio updates

## Troubleshooting Common Issues

### Mobile Responsiveness
- Avoid carousel components that cause layout issues
- Use CSS Grid instead of complex carousel libraries
- Test on various screen sizes using browser dev tools
- Ensure touch interactions work properly

### Typography Issues
- Use Inter font consistently across all components
- Avoid mixing font families within the same section
- Use Tailwind typography classes for consistent sizing
- Test text rendering across different browsers

### Markdown Rendering
- Use react-markdown with proper prose styling
- Test markdown content for proper formatting
- Ensure code blocks and lists render correctly
- Maintain consistent markdown syntax in data files

## Best Practices for Future Development
1. Always test changes on mobile devices
2. Maintain type safety throughout the codebase
3. Use semantic HTML for better accessibility
4. Keep dependencies minimal and up-to-date
5. Document any new features or significant changes
6. Follow the established file structure and naming conventions

## Contact Information
For questions or contributions, please refer to the portfolio contact information or create an issue in the GitHub repository.