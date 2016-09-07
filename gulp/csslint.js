import gulp from 'gulp';
import sassLint from 'gulp-sass-lint';

gulp.task('csslint', function() {
  return gulp.src('src/**/*.s+(a|c)ss')
    .pipe(sassLint({
      'config': 'lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});