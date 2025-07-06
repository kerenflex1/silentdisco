const { src, dest, series, parallel } = require('gulp');
const del        = require('del');
const postcss    = require('gulp-postcss');
const concat     = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify     = require('gulp-uglify');
const critical   = require('critical').stream;

function clean() {
  return del(['dist']);
}

function styles() {
  return src('assets/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      require('postcss-import'),
      require('autoprefixer'),
      require('cssnano')
    ]))
    .pipe(concat('style.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/css'));
}

function scripts() {
  return src('assets/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/js'));
}

function copyHtml() {
  return src('*.html')
    .pipe(dest('dist'));
}

function copyImages() {
  return src('assets/images/**/*')
    .pipe(dest('dist/assets/images'));
}

function copyStatic() {
  return src(['favicon.ico','manifest.json'])
    .pipe(dest('dist'));
}

function criticalCss() {
  return src('dist/index.html')
    .pipe(critical({
      base: 'dist/',
      inline: true,
      css: ['dist/assets/css/style.min.css'],
      minify: true,
      width: 1300,
      height: 900
    }))
    .pipe(dest('dist'));
}

const build = series(
  clean,
  parallel(styles, scripts, copyHtml, copyImages, copyStatic),
  criticalCss
);

exports.build = build;
exports.default = build;
