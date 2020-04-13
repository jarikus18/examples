'use strict'

global.$ = {
  path: {
    task: require('./gulp/paths/tasks.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  concat: require('gulp-concat'),
  uglify: require('gulp-uglify'),
  imagemin: require('gulp-imagemin'),
  gp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create()
};

$.path.task.forEach(function (tasksPath) {
  require(tasksPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    // 'pug',
    'html',
    'scripts',
    'image',
    'fonts',
  ),
  $.gulp.parallel(
    'watch',
    'serve',
  ),
))