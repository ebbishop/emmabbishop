var gulp = require('gulp');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var runSeq = require('run-sequence');
var rename = require('gulp-rename');


// re-load
gulp.task('reload', function () {
  livereload.reload();
});

gulp.task('reloadCSS', function(){
  return gulp.src('./public/style.css').pipe(livereload());
});

// build js
gulp.task('buildJS', function(){
  return gulp.src(['./browser/app.js', './browser/**/*.js'])
  .pipe(plumber())
  .pipe(concat('main.js'))
  .pipe(gulp.dest('./public'));
});

// build CSS
gulp.task('buildCSS', function(){
  return gulp.src(['./browser/scss/main.scss'])
  .pipe(plumber())
  .pipe(sass())
  .pipe(rename('style.css'))
  .pipe(gulp.dest('./public'));
});


// composed js & css tasks
gulp.task('build', function(){
    runSeq(['buildJS', 'buildCSS']);
});

gulp.task('default', function(){
  gulp.start('build');

  gulp.watch('browser/**/*.js', function(){
    runSeq('buildJS', 'reload');
  });

  gulp.watch('browser/**/*.scss', function(){
    runSeq('buildCSS', 'reloadCSS');
  });

  livereload.listen();

});