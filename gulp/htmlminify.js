import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import pug from 'pug';
import gulppug from 'gulp-pug';

gulp.task('htmlminify', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('views', function buildHTML() {
  return gulp.src('src/**/*.pug')
  .pipe(gulppug({
    // Your options in here.
  }))
});