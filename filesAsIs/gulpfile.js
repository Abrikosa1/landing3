'use strict';
const fileinclude = require('gulp-file-include'),
      gulp = require('gulp'),
      cleanCSS = require('gulp-clean-css'),
      webp = require('gulp-webp'),
      replace = require('gulp-replace'),
      gs = require('glob-stream');

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


gulp.task('replaceHTML', () => {
  return gulp.src('app/index.html')
    .pipe(replace(/png|jpg/g, 'webp'))
    .pipe(gulp.dest('app/compiled/')); 
});

gulp.task('replaceCSS', () => {
  return gulp.src('app/compiled/css/style.css')
    .pipe(replace(/png|jpg/g, 'webp'))
    .pipe(gulp.dest('app/compiled/css/')); 
});

gulp.task('replaceJS', () => {
  return gulp.src('app/js/*.js')
    .pipe(gulp.dest('app/compiled/js/')); 
});

gulp.task('moveAsIs', () => {
  return gulp.src(['**', '!app/compiled/**', '!package-lock.json'], {base: '.'})
    .pipe(gulp.dest('app/compiled/filesAsIs')); 
});

