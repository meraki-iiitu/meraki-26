import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks - separate heavy dependencies
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-animation': ['framer-motion', 'lenis'],
          // Three.js is very large, separate it
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          // Homepage sections (below-the-fold lazy-loaded)
          'home-sections': [
            './src/components/About.jsx',
            './src/components/Faq.jsx',
            './src/components/FlagshipEvent.jsx',
            './src/components/ExpertTalk.jsx',
            './src/components/Sponsors.jsx',
          ],
          // 3D model component separate (uses Three.js)
          'home-3d': [
            './src/components/ScrollModel.jsx',
          ],
          // Group page components by feature
          'pages-main': [
            './src/pages/Gallery.jsx',
            './src/pages/Schedule.jsx',
            './src/pages/Team.jsx',
            './src/pages/DevTeam.jsx',
          ],
          'pages-details': [
            './src/pages/EventDetails.jsx',
            './src/pages/WorkshopDetails.jsx',
          ],
          // Constants/data chunks
          'data': [
            './src/constants/index.js',
            './src/constants/eventsData.js',
            './src/constants/galleryData.js',
            './src/constants/teamData.js',
            './src/constants/workshopsData.js',
          ],
        },
      },
    },
  },
})
