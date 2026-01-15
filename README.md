# 🔗 LinkShrink Pro

A modern, full-stack URL shortener built with Next.js 15, Prisma 7, and TypeScript.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-7.0-2D3748?style=flat-square&logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## 🧪 About This Project

This project was built as an **experiment with vibe coding** — a development approach where I leverage AI-assisted tools to rapidly prototype and ship production-ready applications. The goal was to test how quickly I could go from zero to a fully functional, deployed application while maintaining code quality and best practices.

**Result:** Complete URL shortener with database, API, and frontend in under 2 hours.

## ✨ Features

- **Instant URL Shortening** — Generate 6-character unique codes using nanoid
- **Click Analytics** — Track how many times each link is clicked
- **Modern UI** — Gradient backgrounds, glassmorphism, smooth animations
- **Type-Safe** — Full TypeScript with Zod validation
- **Edge-Ready** — Server-side redirects for maximum performance

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Database | SQLite + Prisma 7 (libSQL adapter) |
| Styling | Tailwind CSS |
| Validation | Zod |
| Icons | Lucide React |
| Language | TypeScript |

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/link-shrink-pro.git
cd link-shrink-pro

# Install dependencies
npm install

# Set up the database
npx prisma migrate dev --name init

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 📁 Project Structure

```
link-shrink-pro/
├── app/
│   ├── api/shorten/route.ts    # POST endpoint for creating short URLs
│   ├── [shortcode]/page.tsx    # Dynamic route for redirects
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Homepage UI
├── components/
│   └── shorten-form.tsx        # Interactive URL form component
├── lib/
│   ├── db.ts                   # Prisma client with libSQL adapter
│   └── utils.ts                # Tailwind merge utility
├── prisma/
│   └── schema.prisma           # Database schema
└── prisma.config.ts            # Prisma 7 configuration
```

## 🔧 API Reference

### Create Short URL

```http
POST /api/shorten
Content-Type: application/json

{
  "url": "https://example.com/very-long-url-here"
}
```

**Response:**
```json
{
  "id": "clxyz123456",
  "originalUrl": "https://example.com/very-long-url-here",
  "shortCode": "abc123",
  "clicks": 0,
  "createdAt": "2024-01-15T10:00:00.000Z"
}
```

### Redirect

```http
GET /{shortCode}
```
Redirects to the original URL and increments click counter.

## 💡 What I Learned

Building this project with vibe coding taught me:

1. **Rapid Prototyping** — AI tools accelerate the boring parts, letting me focus on architecture and UX decisions
2. **Modern Prisma 7** — The new adapter-based architecture requires a different mental model
3. **Next.js 15 Breaking Changes** — Dynamic route params are now Promises that need to be awaited
4. **Production Mindset** — Even with AI assistance, understanding fundamentals is essential for debugging

## 🎯 Future Improvements

- [ ] Custom short codes
- [ ] QR code generation
- [ ] Analytics dashboard with charts
- [ ] User authentication
- [ ] API rate limiting
- [ ] Deploy to Vercel with PostgreSQL

## 📄 License

MIT © Simon Bartos

---

**Built with ☕ and vibe coding** — *Testing the future of software development*
# Url-shortener-next.js
