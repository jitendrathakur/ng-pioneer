import gulp from 'gulp';
import eslint from 'gulp-eslint';

gulp.task('jslint', () => {
  return gulp.src(['src/**/module.js', 'src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});
