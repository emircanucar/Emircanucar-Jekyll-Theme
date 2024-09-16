/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", // Tüm HTML dosyalarını dahil et
    "./**/*.md", // Tüm Markdown dosyalarını dahil et
    "!./_site/**", // 'node_modules' adlı klasörü hariç tut
    "!./node_modules/**", // 'node_modules adlı klasörü hariç tut
    "!./.jekyll-cache/**", // 'jekyll-cache' adlı klasörü hariç tut
  ],
  theme: {
    extend: {
      backgroundImage: {
        default: "url('/assets/img/default.svg')",
      },
    },
    container: {
      center: true,
    },
  },
  safelist: ["show-sidenav"],
  plugins: [],
};
