import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import postcss from 'rollup-plugin-postcss';
// 第三方组件集
import smelte from 'smelte/rollup-plugin-smelte';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require('child_process').spawn(
        'npm',
        ['run', 'start', '--', '--dev'],
        {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        },
      );

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    },
  };
}

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    svelte({
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
    }),
    smelte({
      purge: production,
      output: "public/build/bundle.css", // it defaults to static/global.css which is probably what you expect in Sapper 
      postcss: [
        tailwindcss(),
        autoprefixer
      ], // Your PostCSS plugins
      whitelist: [], // Array of classnames whitelisted from purging
      whitelistPatterns: [], // Same as above, but list of regexes
      tailwind: {
        darkMode: true,
        theme: {
          extend: {
            spacing: {
              '96': '24rem',
              '320': '80rem',
              '192': '48rem'
            },
          },

        },
      },
      // Any other props will be applied on top of default Smelte tailwind.config.js
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    // postcss({
    // extract: true,
    // // Or with custom file name
    // extract: path.resolve('public/build/bundle.css')
    // }),
    // css({ output: 'bundle.css' }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
