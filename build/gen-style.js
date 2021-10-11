const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const components = require('./components.json')

function buildCss(cb) {
  gulp
    .src('../src/styles/index.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('over-snail-ui.css'))
    .pipe(gulp.dest('../lib/styles'))
  cb()
}

function buildFont(cb) {
  const fontFiles = ['iconfont.ttf', 'iconfont.woff', 'iconfont.woff2']

  fontFiles.forEach((fileName) => {
    gulp.src(`../src/styles/font/${fileName}`).pipe(gulp.dest('../lib/styles/font'))
  })

  cb()
}

function buildSeperateCss(cb) {
  Object.keys(components).forEach((compName) => {
    gulp
      .src(`../src/styles/${compName}.scss`)
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(cleanCSS())
      .pipe(rename(`${compName}.css`))
      .pipe(gulp.dest('../lib/styles'))
  })

  cb()
}

exports.default = gulp.series(buildCss, buildFont, buildSeperateCss)
