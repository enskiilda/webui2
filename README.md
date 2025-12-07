# Open WebUI - Next.js Frontend

A minimal Next.js frontend-only chat interface.

## Features

- **Frontend-only**: No backend required, runs entirely in the browser
- **Expandable Sidebar**: Sidebar slides in/out instead of separate components
- **Dark Theme**: Modern dark UI with blue accents
- **Mock Responses**: Simulated chat responses for demonstration

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

The app will be available at `http://localhost:3000`

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Sidebar.tsx        # Expandable sidebar
│   └── ChatInterface.tsx  # Chat interface
└── public/                # Static assets
```

## Technologies

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
