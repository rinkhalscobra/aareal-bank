import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const securityHeaders = () => ({
  name: 'security-headers',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      res.setHeader('X-Frame-Options', 'SAMEORIGIN');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-XSS-Protection', '1; mode=block');
      res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
      res.setHeader(
        'Permissions-Policy',
        'camera=(), microphone=(), geolocation=()'
      );
      res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co https://images.pexels.com https://api.coingecko.com wss://*.webcontainer.io ws://*.webcontainer.io https://*.webcontainer.io http://*.webcontainer.io https://*.webcontainer-api.io http://*.webcontainer-api.io wss://*.webcontainer-api.io ws://*.webcontainer-api.io; frame-ancestors 'self';"
      );
      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      res.setHeader('X-Frame-Options', 'SAMEORIGIN');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-XSS-Protection', '1; mode=block');
      res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
      res.setHeader(
        'Permissions-Policy',
        'camera=(), microphone=(), geolocation=()'
      );
      res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co https://images.pexels.com https://api.coingecko.com wss://*.webcontainer.io ws://*.webcontainer.io https://*.webcontainer.io http://*.webcontainer.io https://*.webcontainer-api.io http://*.webcontainer-api.io wss://*.webcontainer-api.io ws://*.webcontainer-api.io; frame-ancestors 'self';"
      );
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), securityHeaders()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
