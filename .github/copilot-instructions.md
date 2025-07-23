<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Table To Text Converter - Copilot Instructions

## Project Overview
This is a modern web application built with Next.js, TypeScript, and TailwindCSS that converts tab-separated data (from Excel/Google Sheets) to clean text format.

## Tech Stack
- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with ShadCN UI components
- **UI Components**: ShadCN UI (planned)
- **Fonts**: Inter from Google Fonts

## Code Guidelines
- Use TypeScript for all new files
- Follow Next.js App Router conventions
- Use TailwindCSS for styling with the configured design system
- Implement responsive design principles
- Use semantic HTML elements
- Follow accessibility best practices

## Component Structure
- Place reusable components in `src/components/`
- Use the `src/app/` directory for pages and layouts
- Implement proper TypeScript types for all props and data structures

## Styling Guidelines
- Use the configured CSS custom properties for colors (--background, --foreground, etc.)
- Implement dark mode support using the CSS variables
- Use Tailwind utility classes over custom CSS when possible
- Follow the design system defined in `globals.css`

## Functionality Requirements
- Convert tab-separated data to clean text format
- Support copy/paste functionality
- Provide download capability for converted text
- Implement proper error handling and user feedback
- Ensure cross-browser compatibility

## Development Practices
- Write clean, readable, and maintainable code
- Use proper error boundaries and loading states
- Implement proper form validation
- Use React hooks appropriately
- Follow the principle of separation of concerns
