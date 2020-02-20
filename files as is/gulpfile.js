'use strict';
const fileinclude = require('gulp-file-include');
const gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
const webp = require('gulp-webp');
gulp.task('fileinclude', function(cb) {
  gulp.src(['app/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('app/compiled/'));
    cb();
});


 
gulp.task('webp', () =>
    gulp.src(['app/img/*.+(jpg|png)',
      'app/img/contacts/*.+(jpg|png)',
      'app/img/services/*.+(jpg|png)',
      'app/img/social/*.+(jpg|png)'],
      {base: 'app/img'})
        .pipe(webp())
        .pipe(gulp.dest('app/compiled/img'))
);


 
gulp.task('minCSS', () => {
  return gulp.src('app/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('app/compiled/css'));
});