# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Hosting at www.shaunahuja.ca/ramp

From the separate Ramp project folder, build the Ramp page and export it into this personal website repository:

```sh
SITE_BASE_PATH=/ramp/ SITE_URL=https://www.shaunahuja.ca npm run build
node scripts/export-to-personal-site.mjs /absolute/path/to/personal-website
```

The personal website includes the resulting `public/ramp` folder in its normal Vite build.
Its `vercel.json` maps `/ramp` and `/ramp/` to `/ramp/index.html`.
Commit the exported folder and routing configuration in the personal website repository,
then deploy through its existing Vercel Git integration. No DNS changes are needed.
Repeat the export after Ramp updates. The canonical URL uses `/ramp/`.
Without SITE_BASE_PATH, local development and builds still default to `/`.

### Main portfolio content

Experience and project entries are defined in `src/components/ExperienceCard.jsx`
and `src/components/ProjectsCard.jsx`. Shared card markup renders each list.
The Resume button serves `public/assets/ShaunResume.pdf` at its existing URL.
Mustang Capital's logo is stored locally as `public/assets/MustangCapital.jpg`,
sourced from the company logo on https://www.linkedin.com/company/mustang-capital/home/.
The main site uses the existing Vercel Git integration; nested Ramp exports and
rewrites are independent of these content updates.
