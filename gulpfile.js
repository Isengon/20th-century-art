'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');

gulp.task('sass-compile', function() {
  return gulp.src('./style/scss/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('./style/css/'));
});

gulp.task('watch', function() {
  gulp.watch('./style/scss/**/*.scss', gulp.series('sass-compile'));
});
 