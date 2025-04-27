module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    // Asegúrate de incluir los archivos donde usas Tailwind
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          400: '#cbd5e0', // Este es el color original de bg-gray-400
        },
      },
    },
  },
  plugins: [],
};
