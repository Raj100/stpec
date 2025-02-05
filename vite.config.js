import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// const Url = import.meta.env.VITE_API_URL;


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/static':{
        target: 'https://nitgoa1.vercel.app',
        changeOrigin: true,
        secure: false,
      },
      '/api': {
        target: `http://nitgoa1.vercel.app`,
        changeOrigin: true,
        secure: false,      
      }
    }
  },
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//         chunkSizeWarningLimit: 1000,
//       },
//   server: {
//     host: true,
//     port: 5173,
//     watch: {
//       usePolling: true,
//     },
//   },
// })




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     chunkSizeWarningLimit: 1000,
//   },
//   server: {
//     proxy: {
//       // '/api': {
//       //   target: 'https://nitgoa1.vercel.app',
//       //   changeOrigin: true,
//       //   secure: false,      
//       // }
//       '/static':{
//         target: 'https://localhost:5001',
//         changeOrigin: true,
//         secure: false,
//       }
//     }
//   },
// })