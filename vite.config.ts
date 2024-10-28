import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// export default defineConfig({
//   server: {
//     host: '0.0.0.0', // LANからアクセスできるように設定
//     port: 5173      // 必要に応じてポート番号を指定
//   }
// });

