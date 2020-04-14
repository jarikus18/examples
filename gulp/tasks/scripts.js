'use strict'

module.exports = function () {
  $.gulp.task('scripts', function () {
    return $.gulp.src([
      './source/libs/micromodal/micromodal.min.js',
      './source/js/common.js' // Always at the end
    ])
    .pipe($.concat('scripts.min.js'))
    // .pipe($.uglify()) // Mifify js (opt.)
    .on('error', $.gp.notify.onError(function(){
      return {
        title: 'Scripts',
      }
    }))
    .pipe($.gulp.dest('./build/assets/js'))
    });
}