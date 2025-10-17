# Deployment Guide - Btab Marketing Site

## Quick Start (Production Deployment)

```bash
cd /home/sd/dev/playlround/btab-marketing-site
docker-compose up -d --build
```

That's it! The site will be live at `https://btab.app`

---

## Detailed Deployment Steps

### Step 1: Install Dependencies (First Time Only)

```bash
cd /home/sd/dev/playlround/btab-marketing-site
npm install
```

### Step 2: Test Locally (Optional but Recommended)

```bash
# Development mode
npm run dev
# Visit http://localhost:3000

# Production build test
npm run build
npm start
# Visit http://localhost:3000
```

### Step 3: Deploy to Production

```bash
# Build and start Docker container
docker-compose up -d --build
```

**What happens:**
1. Docker builds the Next.js app (takes 2-5 minutes first time)
2. Creates optimized production image
3. Starts container named `btab_marketing`
4. Traefik automatically:
   - Routes `btab.app` to the container
   - Obtains SSL certificate
   - Applies security headers
   - Redirects www → non-www

### Step 4: Verify Deployment

```bash
# Check container is running
docker ps | grep btab_marketing

# Check logs
docker logs btab_marketing -f

# Test the site
curl -I https://btab.app
```

Expected output:
```
HTTP/2 200
content-type: text/html
...
```

---

## Updating the Site

### Content Updates

1. Edit files in `src/app/`
2. Rebuild and redeploy:
```bash
docker-compose up -d --build
```

### Quick Update (No Dependency Changes)

```bash
# Pull latest changes (if using git)
git pull

# Rebuild
docker-compose up -d --build
```

---

## Managing the Container

### View Logs
```bash
docker logs btab_marketing -f
```

### Restart Container
```bash
docker restart btab_marketing
```

### Stop Container
```bash
docker-compose down
```

### Rebuild from Scratch
```bash
docker-compose down
docker rmi btab-marketing-site_marketing-site
docker-compose up -d --build
```

---

## Integration with Existing Infrastructure

### Current Setup

Your VPS already has:
- ✅ Traefik reverse proxy running
- ✅ `traefik-network` Docker network
- ✅ Let's Encrypt SSL configuration
- ✅ API at `api.btab.app`
- ✅ Vendor sites at `*.vendors.btab.app`

### Marketing Site Integration

The marketing site **automatically integrates** via Traefik labels:

```yaml
# From docker-compose.yml
labels:
  - "traefik.http.routers.btab-marketing.rule=Host(`btab.app`) || Host(`www.btab.app`)"
```

**No manual Traefik configuration needed!**

---

## DNS Configuration

Ensure your DNS records point to your VPS:

```
A     btab.app          →  YOUR_VPS_IP
A     www.btab.app      →  YOUR_VPS_IP
A     api.btab.app      →  YOUR_VPS_IP  (already set)
A     *.vendors.btab.app →  YOUR_VPS_IP  (already set)
```

---

## Resource Usage

**Container Resources:**
- CPU: 0.5-1.0 cores
- RAM: 256-512MB
- Disk: ~200MB (image + logs)

**Monitoring:**
```bash
docker stats btab_marketing
```

---

## Troubleshooting

### 1. Container Won't Start

```bash
# Check logs for errors
docker logs btab_marketing

# Common issues:
# - Node modules not installed → run npm install
# - Build errors → check syntax errors in code
# - Port conflicts → check nothing else on 3000
```

### 2. Site Not Accessible

```bash
# Is container running?
docker ps | grep btab_marketing

# Is Traefik running?
docker ps | grep traefik

# Is Traefik network accessible?
docker network inspect traefik-network | grep btab_marketing
```

### 3. SSL Certificate Issues

```bash
# Check Traefik logs
docker logs <traefik_container_name> | grep btab.app

# Force certificate renewal (if needed)
docker restart <traefik_container_name>
```

### 4. www Redirect Not Working

The docker-compose.yml includes redirect middleware:
```yaml
- "traefik.http.middlewares.btab-www-redirect.redirectregex.regex=^https://www\\.btab\\.app/(.*)"
```

Test:
```bash
curl -I https://www.btab.app
# Should return 301/302 redirect
```

### 5. Performance Issues

```bash
# Check resource usage
docker stats btab_marketing

# Increase resource limits in docker-compose.yml if needed:
deploy:
  resources:
    limits:
      cpus: '2.0'
      memory: 1GB
```

---

## Backup and Rollback

### Backup Current Image

```bash
# Before updating, save current image
docker tag btab-marketing-site_marketing-site btab-marketing-site_marketing-site:backup-$(date +%Y%m%d)
```

### Rollback to Previous Version

```bash
# Stop current
docker-compose down

# Restore backup
docker tag btab-marketing-site_marketing-site:backup-YYYYMMDD btab-marketing-site_marketing-site:latest

# Start
docker-compose up -d
```

---

## Maintenance

### View Logs (Last 100 Lines)
```bash
docker logs btab_marketing --tail 100
```

### Clear Old Logs
```bash
# Logs are automatically rotated (10MB max, 3 files)
# Configured in docker-compose.yml:
logging:
  options:
    max-size: "10m"
    max-file: "3"
```

### Update Dependencies
```bash
# Update package.json versions
npm update

# Rebuild
docker-compose up -d --build
```

---

## Production Checklist

Before deploying to production:

- [ ] Dependencies installed (`npm install`)
- [ ] Site tested locally (`npm run dev`)
- [ ] Production build tested (`npm run build && npm start`)
- [ ] DNS records configured (btab.app, www.btab.app)
- [ ] Traefik running and accessible
- [ ] `traefik-network` exists
- [ ] docker-compose.yml reviewed
- [ ] Built and started (`docker-compose up -d --build`)
- [ ] Container running (`docker ps`)
- [ ] Logs clean (`docker logs btab_marketing`)
- [ ] HTTPS working (`curl -I https://btab.app`)
- [ ] All pages accessible (/, /pricing, /products, /how-it-works, /api-docs)
- [ ] WWW redirect working (`curl -I https://www.btab.app`)
- [ ] SSL certificate valid (A+ rating on SSL Labs)
- [ ] Mobile responsive (test on phone/tablet)

---

## Monitoring

### Health Checks

```bash
# Basic health check
curl -f https://btab.app || echo "Site down!"

# Check response time
curl -o /dev/null -s -w "Time: %{time_total}s\n" https://btab.app

# Monitor container
watch -n 5 'docker stats btab_marketing --no-stream'
```

### Log Monitoring

```bash
# Follow logs in real-time
docker logs btab_marketing -f

# Check for errors
docker logs btab_marketing | grep -i error
```

---

## CI/CD (Future Enhancement)

For automated deployments:

```bash
#!/bin/bash
# deploy.sh

cd /home/sd/dev/playlround/btab-marketing-site
git pull
npm install
docker-compose up -d --build

# Verify
sleep 10
curl -f https://btab.app || exit 1
```

---

## Support

**Logs to check:**
1. Container logs: `docker logs btab_marketing`
2. Traefik logs: `docker logs <traefik_container>`
3. Next.js build output: During `docker-compose build`

**Common solutions:**
- Restart container: `docker restart btab_marketing`
- Rebuild image: `docker-compose up -d --build`
- Check Traefik labels: `docker inspect btab_marketing | grep traefik`
