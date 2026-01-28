# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Core Front End Stack

### React + Vite

**WHY**

- API is REST-based, JWT-secured - react integrates well 
- Industry-standard. Large ecosystem
- Easily scalable (assignment + portfolio piece -> real-world app)
- Vite gives fast dev startup compared to CRA
- best balance of simplicity, industry relevence + safe otion for htis assignment

**Alternatives**

- Next.js - also good option but adds SSR complexity 
- Vue - React aligns beter with node backend
- Svelte - less industry use

### API communication - axios

**WHY**

- Axios over fetch because: interceptors for JWT (Authorization: Bearer <token>)
- Centralised error handling
cleaner request/response logic
- Good match for backend auth model

### zod (forms and validation)

- Already use in backend
- Same schems logic on both fornt/back
- Clear validation errors before API call
- shows architectural consistency 

### Tailwind CSS (UI styling)

**WHY**

- Have installed 'classic' tailwindcss with postCSS pipeline(not the vite plugin shortcut) - faster setup but less learning, less control and newer so less industry practice

- fast build for layouts
- widely used in modern startups
- works well when creating dashboards (admin/host views)

** Alternatives**

- MUI - pre built components (tables,models, forms)
- tradeoff is less styling control and heavier bundle (since still studying, want to have some creative control for learning)

---

## MAIN CONTENT

### Pages:

- HOME (/)
- Explore All (Spaces & Events) - Another page for individual clicked space/event that then leads to bookings page? 
- Login (all users)
- Create Account (User signup)
- Become a host signup (form)
- Bookings (protected, different for hosts or users o ntheir dashboard)
- 

### Code Quality and Formatting:

Airbnb styling compatible

- ESLint enforces code quality rules:
    - Catches bugs and errors
    - Enforces react
    - Ensures consistent naming and coding patterns
```bash 
npm run lint # Checks for issues
npm run lin:fix # Auto-fixes issues
```

- Prettier
    - Automtic formatting
    - Consistent spacing, quotes, line breaks
```bash
npm run format # Format all files
npm run format:check # Format check
```

---

## UI/Design Style
We've developed a customised design system using Tailwind CSS v4 with a defined:

- Color palette (primary burgundy, secondary cream, white neutrals)
- Typography system (Inter for body, Poppins for headings) **WILL CHANGE FONTS WHEN REFINING STYLING**
- Spacing scale (Tailwind's 4px base unit)
- Component library (buttons, cards, forms with consistent styling) **TO CREATE THESE FILES IN COMPONENTS/UI**
- Responsive breakpoints

See docs/STYLE_GUIDE.md for complete visual design documentation. **TO CREATE STILL. LINK TO THE DOC**

### Component Patterns

All UI components follow consistent patterns:

- Reusable components in src/components/ui/ **to complete**
- Props-based customisation
- Accessible by default (ARIA labels, keyboard navigation)
- Mobile-first responsive design

### Stock images from pexels.com

- Stock photos, royalty free
