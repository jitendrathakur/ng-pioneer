import gulp from 'gulp';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import * as conf from './conf';
import gutil from 'gulp-util';
//import babel from 'gulp-babel';
import webpack from 'webpack-stream';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import watchify from 'watchify';
import babel from 'babelify';
import path from 'path';

function compile(watch) {
  const sourcePath = path.join(conf.paths[gutil.env.type], 'assets/js');
  const sourceFile = path.join(sourcePath, 'main.js');
  var bundler = watchify(browserify(sourceFile, { debug: true }).transform(babel.configure({
    // Use all of the ES2015 spec
    presets: ["es2015"]
  })));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('main.min.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(sourcePath));
  }

  // if (watch) {
  //   bundler.on('update', function() {
  //     console.log('-> bundling...');
  //     rebundle();
  //   });
  // }

  rebundle();
}


gulp.task('jsminify', function () {
  gulp.src(['src/**/module.js', 'src/**/*.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(conf.destination(conf.paths[gutil.env.type], '/assets/js')))

});

gulp.task('compile', function () {
    return compile();
});
