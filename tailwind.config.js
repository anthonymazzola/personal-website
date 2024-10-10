module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937', // Dark Gray
        secondary: {
          DEFAULT: '#3B82F6', // Original secondary color
          dark: '#2563EB',    // Darker shade for hover effects
        },
        accent: '#10B981', // Green
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};