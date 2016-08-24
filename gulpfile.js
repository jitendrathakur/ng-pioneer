var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload'),
  del = require('del'),
  connect = require('gulp-connect'),
  sassLint = require('gulp-sass-lint'),
  eslint = require('gulp-eslint');


gulp.task('styles', function() {
  return sass('src/styles/main.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});


gulp.task('connect', function() {
  connect.server();
});


gulp.task('scss-lint', function() {
  return gulp.src('src/styles/*.s+(a|c)ss')
    .pipe(sassLint({
      'config': 'lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('eslint', () => {
  //return gulp.src(['**/*.js','!node_modules/**'])
  return gulp.src(['main.module.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


gulp.task('default', ['connect'], function() {
  gulp.start('scss-lint', 'styles', 'eslint');
});