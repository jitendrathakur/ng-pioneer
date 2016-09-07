import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';
import rename from 'gulp-rename';
import sass from 'gulp-ruby-sass';
import * as conf from './conf';
import gutil from 'gulp-util';

gulp.task('cssminify', function() {
	console.log(conf.paths[gutil.env.type]);
  return sass('src/styles/main.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(conf.destination(conf.paths[gutil.env.type], '/assets/css')))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest(conf.destination(conf.paths[gutil.env.type], '/assets/css')));
});