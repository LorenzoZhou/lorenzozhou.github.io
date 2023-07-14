import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'docs',
    // 默认情况下，若outDir在根目录下，则此选项默认为true
    // 若outDir在根目录之外则会警告，避免意外删除重要的文件。可通过此选项来关闭警告
    emptyOutDir: true,
  }
})
