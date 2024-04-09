import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';
import gltf from 'vite-plugin-gltf';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), gltf()],
  assetsInclude: ['**/*.gltf'],
  optimizeDeps: {
    include: [
      'three/examples/jsm/loaders/GLTFLoader.js',
      // Si estás utilizando GLTFLoader de Three.js para cargar archivos GLB
    ],
  },
  server: {
    // Configura el servidor para servir archivos estáticos desde la carpeta public
    // Esto es importante para que los archivos GLB se puedan servir correctamente
    fs: {
      strict: false,
    },
  },
})
