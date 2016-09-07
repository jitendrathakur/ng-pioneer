import gulp from 'gulp';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import * as conf from './conf';
import gutil from 'gulp-util';

gulp.task('jsminify', function () {
  gulp.src(['src/**/module.js', 'src/**/*.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(conf.destination(conf.paths[gutil.env.type], '/assets/js')))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(conf.destination(conf.paths[gutil.env.type], '/assets/js')));
});
