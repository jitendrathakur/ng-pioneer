import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import Wiredep from 'wiredep';
const wiredep = Wiredep.stream;
import * as conf from './conf';
import gutil from 'gulp-util';
// import pug from 'pug';
// import gulppug from 'gulp-pug';

gulp.task('htmlminify', function() {
  return gulp.src('index.html')
	  .pipe(wiredep({
	      optional: 'configuration',
	      goes: 'here'
	    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(conf.destination(conf.paths[gutil.env.type], '')));
});

// gulp.task('views', function buildHTML() {
//   return gulp.src('src/**/*.pug')
//   .pipe(gulppug({
//     // Your options in here.
//   }))
// });