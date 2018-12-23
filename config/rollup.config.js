import path from 'path'
import fs from 'fs'

import json from 'rollup-plugin-json'
import eslint from 'rollup-plugin-eslint'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import alias from 'rollup-plugin-alias'

const rollupConf = {
  input: 'src/main.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'calculate-css-rule'
  },
  plugins: [
    json(),
    eslint(),
    alias({
      resolve: ['.js', '/index.js'],
      src: path.resolve(__dirname, '../src')
    }),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    buble()
  ]
}

export default rollupConf