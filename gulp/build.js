import gulp from 'gulp';
import './csslint';
import './jslint';
import './cssminify';
import './jsminify';
import './htmlminify';
import path from 'path';
import gutil from 'gulp-util';
import filter from 'gulp-filter';
import sourcemaps from 'gulp-sourcemaps';
import useref from 'gulp-useref';
import size from 'gulp-size';
import gulpLoadPlugins from 'gulp-load-plugins';


const $ = gulpLoadPlugins({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
})


gulp.task('html', () => {
  const jsFilter = $.filter('**/*.js', {restore: true});
  const cssFilter = $.filter('**/*.css', {restore: true});

  return gulp.src(path.join('.tmp', '/index.html'))
    .pipe(jsFilter)
    .pipe($.sourcemaps.init())
    .pipe($.sourcemaps.write('maps'))
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe($.sourcemaps.init())
    .pipe($.sourcemaps.write('maps'))
    .pipe(cssFilter.restore)
    // $.useref pulls the node and bower dependencies into the distribution
    // and restructures the js and css files into
    // scripts/app.js
    // scripts/vendor.js
    // styles/app.js
    // styles/vendor.js
    .pipe($.useref())
    // We need to update the font path in our dependencies,
    // so $.replace must be run after $.useref
   // .pipe($.replace("'../fonts", "'../assets/fonts"))
    .pipe(gulp.dest(path.join('dist', '/')))
    .pipe($.size({title: path.join('dist', '/'), showFiles: true}));
});


gulp.task('build', function() {
  gutil.env.type = "production";
  gulp.start('csslint', 'cssminify', 'jslint', 'jsminify', 'html', 'htmlminify');
});