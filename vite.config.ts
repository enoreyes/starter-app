import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Specify the root directory of the project
  root: resolve(__dirname, 'src'),
  
  // Configure the public directory
  publicDir: resolve(__dirname, 'public'),
  
  // Resolve configuration for TypeScript and module imports
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  
  // Configure the development server
  server: {
    // Tauri expects a fixed port, and not a random one
    port: 1420,
    // Only listen on localhost for security
    host: '0.0.0.0',
    // Strict port ensures the app doesn't try to use another port if 1420 is taken
    strictPort: true,
  },
  
  // Build configuration
  build: {
    // Output directory for the build
    outDir: resolve(__dirname, 'dist'),
    // Ensure Tauri can find the index.html file
    emptyOutDir: true,
    // Generate sourcemaps for better debugging
    sourcemap: true,
    // Target modern browsers
    target: ['es2021', 'chrome100', 'safari13'],
    // Minify the output
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    // Include dependencies that need optimization
    include: ['react', 'react-dom'],
  },
  
  // Configure esbuild for TypeScript
  esbuild: {
    // Enable JSX in .tsx files
    jsx: 'automatic',
  },
});
