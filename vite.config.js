import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ['your-custom-hostname.com', '192.168.1.100', '.your-local-domain'],
  },
});
