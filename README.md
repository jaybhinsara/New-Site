## Jay Bhinsara – Portfolio

A modern, animated portfolio built with React, Vite, and Framer Motion. Fully responsive, themeable, and optimized for fast deployments.

## Features
- Smooth section and card animations via Framer Motion
- Animated dark/light toggle with a bulb micro-interaction
- Mobile-first responsive layout and accessible semantics
- Sparkling ambient background particles
- SEO-ready metadata and social sharing cards

## Tech Stack
- React 19
- Vite 7 (dev/build/preview)
- Framer Motion 12
- CSS with design tokens (custom properties)

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Deploy Options

### Vercel (recommended)
1. Push code to GitHub
2. Import the repo at https://vercel.com
3. Vercel auto-detects Vite. Click Deploy.

### Netlify
1. Push code to GitHub
2. Import at https://netlify.com
3. Build command: `npm run build` – Publish directory: `dist`

### GitHub Pages
1. Install: `npm i -D gh-pages`
2. Add scripts:
   ```json
   {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## Project Structure

```
src/
  components/
    Contact.jsx
    Education.jsx
    Experience.jsx
    Hero.jsx
    Projects.jsx
    Skills.jsx
    Sparkles.jsx
    ThemeToggle.jsx
    ThemeToggle.css
  styles/
    index.css
  data.js
  App.jsx
  main.jsx
public/
  favicon.svg
index.html
vite.config.js
```

## Customize Content
Edit `src/data.js` to update projects, experience, education, and skills.

## Customize Theme
Tweak CSS variables in `src/styles/index.css` under `:root` and `:root.light`.

## Metadata & Sharing
Update meta tags in `index.html` (title, description, Open Graph/Twitter cards).

## CI
This repository includes a GitHub Actions workflow that installs, builds, and validates the project on each push and PR. See `.github/workflows/ci.yml`.

## License
MIT – feel free to use and adapt.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
