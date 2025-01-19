import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
  // base: '/my-vue3-project/', // 确保此处与你的 GitHub Pages URL 相匹配
  plugins: [
    uni(),
  ],
})