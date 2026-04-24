import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: [
      'your-custom-hostname.com', // Example custom hostname
      '192.168.1.100', // Example IP address
      '.your-local-domain', // Example local domain (e.g., .test)
    ],
  },
});
