
# SecureWipe Pro (Demo)

This repository contains a static frontend and a Node/Express backend that simulate a professional Android data wiping interface and API (no destructive functionality).

## Structure
- frontend/ — Static UI (index.html, style.css, app.js)
- backend/ — Express API with routes for device analysis, wiping methods, and reports

## Backend (local)
```
cd backend
npm install
npm run dev
```
The API listens on PORT=3001 by default.

## Frontend (local)
Open frontend/index.html in a browser. To point it at the API, set `window.API_BASE_URL` before app.js loads or serve with a static server and inject an env.

## Deploy
- Frontend: Netlify/Cloudflare Pages
- Backend: Render Web Service
- Database (optional): Supabase / Neon
