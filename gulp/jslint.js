import gulp from 'gulp';
import eslint from 'gulp-eslint';

gulp.task('jslint', () => {
  return gulp.src(['main.module.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
