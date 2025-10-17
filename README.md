# Btab Marketing Site

Modern Next.js 15 marketing website for the Btab e-commerce fulfillment platform.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Docker** ready for production deployment
- **Traefik** integration for automatic SSL
- **Responsive design** - Mobile, tablet, desktop
- **SEO optimized** with metadata
- **Fast performance** with static optimization

## 📁 Project Structure

```
btab-marketing-site/
├── src/
│   ├── app/                  # Next.js 15 App Router pages
│   │   ├── page.tsx          # Homepage
│   │   ├── pricing/          # Pricing page
│   │   ├── products/         # Products catalog
│   │   ├── how-it-works/     # How it works guide
│   │   └── api-docs/         # API documentation
│   ├── components/           # Reusable React components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Footer.tsx        # Site footer
│   │   └── CTA.tsx           # Call-to-action component
│   └── app/globals.css       # Global styles
├── public/                   # Static assets
├── Dockerfile                # Docker build configuration
├── docker-compose.yml        # Docker Compose for deployment
└── package.json              # Dependencies
```

## 🛠️ Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

## 🐳 Docker Deployment

### Quick Deploy (Production)

1. Build and start the container:
```bash
docker-compose up -d --build
```

2. The site will be available at:
   - **https://btab.app** (production)
   - **https://www.btab.app** (redirects to btab.app)

### Deploy Steps Explained

The site integrates with your existing Traefik setup:

1. **Build Docker image** - Multi-stage build for optimal size
2. **Start container** - Runs on port 3000 internally
3. **Traefik routes traffic** - Automatically:
   - Routes `btab.app` → marketing site
   - Routes `www.btab.app` → redirects to `btab.app`
   - Obtains SSL certificate via Let's Encrypt
   - Applies security headers

### Traefik Integration

The `docker-compose.yml` includes:
- ✅ Automatic SSL with Let's Encrypt
- ✅ WWW to non-WWW redirect
- ✅ Security headers (HSTS, XSS protection, etc.)
- ✅ Production optimizations

**Important:** Ensure Traefik is running with the `traefik-network` network:
```bash
docker network ls | grep traefik-network
```

## 🌐 URL Structure

After deployment:

| URL | Purpose |
|-----|---------|
| `btab.app` | Homepage |
| `btab.app/pricing` | Pricing tiers |
| `btab.app/products` | Product catalog |
| `btab.app/how-it-works` | Platform guide |
| `btab.app/api-docs` | API documentation |
| `api.btab.app` | API (separate service) |
| `vendors.btab.app` | Vendor dashboard (separate service) |

## 📝 Content Updates

### Updating Page Content

1. Edit files in `src/app/[page]/page.tsx`
2. Rebuild and redeploy:
```bash
docker-compose up -d --build
```

### Adding New Pages

1. Create new directory: `src/app/new-page/`
2. Add `page.tsx` with content
3. Update navigation in `src/components/Header.tsx`
4. Rebuild and deploy

## 🔧 Configuration

### Environment Variables

Currently no environment variables needed. For future API integration:

```bash
# Create .env.local
NEXT_PUBLIC_API_URL=https://api.btab.app/api/v1
```

### Updating Colors/Branding

Edit `tailwind.config.ts`:
```typescript
colors: {
  btab: {
    primary: '#3B82F6',    // Main blue
    secondary: '#1E40AF',  // Darker blue
    accent: '#10B981',     // Green for profits
  },
}
```

## 📊 Performance

- **Build output:** `standalone` mode for minimal Docker image
- **Resource limits:** 512MB RAM, 1 CPU
- **Caching:** Next.js automatic static optimization
- **Images:** WebP/AVIF support configured

## 🔒 Security

Security headers applied via Traefik:
- HTTPS redirect
- HSTS with preload
- Content type nosniff
- XSS filter
- Referrer policy

## 🚀 Deployment Checklist

- [ ] Install dependencies: `npm install`
- [ ] Test locally: `npm run dev`
- [ ] Build for production: `npm run build`
- [ ] Verify Traefik network exists
- [ ] Deploy: `docker-compose up -d --build`
- [ ] Check container status: `docker ps | grep btab_marketing`
- [ ] Check logs: `docker logs btab_marketing`
- [ ] Test URLs: `curl -I https://btab.app`
- [ ] Verify SSL certificate
- [ ] Test all pages (/, /pricing, /products, /how-it-works, /api-docs)

## 🐛 Troubleshooting

### Container won't start
```bash
docker logs btab_marketing
```

### Traefik not routing
```bash
# Check Traefik labels
docker inspect btab_marketing | grep traefik

# Check Traefik network
docker network inspect traefik-network
```

### Site not loading
```bash
# Check if container is running
docker ps | grep btab_marketing

# Check if port 3000 is listening
docker exec btab_marketing netstat -tuln | grep 3000
```

### Rebuild from scratch
```bash
docker-compose down
docker rmi btab-marketing-site_marketing-site
docker-compose up -d --build
```

## 📦 Dependencies

**Production:**
- next: ^15.0.0
- react: ^18.3.0
- react-dom: ^18.3.0

**Development:**
- typescript: ^5.3.3
- tailwindcss: ^3.3.6
- autoprefixer: ^10.4.16
- postcss: ^8.4.32

## 📄 License

Proprietary - Btab Platform

## 🤝 Support

For issues or questions:
- Technical: api-support@btab.com
- General: support@btab.com
