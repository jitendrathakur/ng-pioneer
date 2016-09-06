import gulp from 'gulp';
import './csslint';
import './jslint';
import './cssminify';
import './jsminify';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';

const baseDir = ["./"];
const adjustBowerRoute = true;
const browser = 'default';
const server = {
	baseDir,
	routes: adjustBowerRoute ? {'/bower_components': 'bower_components'} : undefined
};
gulp.task('serverTmp', function() {
  browserSync.instance = browserSync.init({server, browser, startPath: '/'});
});
gulp.task('serve', function() {
  runSequence('csslint', 'cssminify', 'jslint', 'jsminify', 'serverTmp');
});
