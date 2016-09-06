import gulp from 'gulp';
import './csslint';
import './jslint';
import './cssminify';
import './jsminify';
import './htmlminify';

gulp.task('build', function() {
  gulp.start('csslint', 'cssminify', 'jslint', 'jsminify', 'htmlminify');
});