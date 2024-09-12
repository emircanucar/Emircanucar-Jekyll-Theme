/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html', // Tüm HTML dosyalarını dahil et
    './**/*.md', // Tüm Markdown dosyalarını dahil et
    '!./_site/**', // 'excluded-folder' adlı klasörü hariç tut
    '!./node_modules/**', // 'excluded-folder' adlı klasörü hariç tut
    '!./.jekyll-cache/**', // 'excluded-folder' adlı klasörü hariç tut
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
}
