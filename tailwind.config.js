/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7fef2',
          100: '#e8fde0',
          200: '#bcccbc',
          300: '#7cac64',
          400: '#acfa6f',
          500: '#9cfb5b',
          600: '#368103',
          700: '#2d6a02',
          800: '#245401',
          900: '#1a3d01',
        },
        secondary: {
          50: '#f2f7f2',
          100: '#e6efe6',
          200: '#bcccbc',
          300: '#9fb39f',
          400: '#7cac64',
          500: '#368103',
          600: '#2d6a02',
          700: '#245401',
          800: '#1a3d01',
          900: '#112701',
        },
        accent: {
          50: '#f5fef5',
          100: '#e8fee8',
          200: '#9cfb5b',
          300: '#acfa6f',
          400: '#7cac64',
          500: '#368103',
          600: '#2d6a02',
          700: '#245401',
          800: '#1a3d01',
          900: '#112701',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    }
  },
  plugins: []
}