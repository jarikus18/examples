'use strict'

module.exports = function () {
  $.gulp.task('fonts', function () {
    return $.gulp.src('./source/fonts/**')
    .on('error', $.gp.notify.onError(function(error){
      return {
        title: 'fonts',
        message: error.message
      }
    }))
    .pipe($.gulp.dest('./build/assets/fonts/'))
    });
}