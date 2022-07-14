const config = {
  enabled: true,
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      theme: {
        extend: {
          spacing: {
            '96': '24rem',
            '320': '80rem'
          },
        },

      },
    },
  },
  plugins: [],
};

module.exports = config;
