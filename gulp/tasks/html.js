'use strict'

module.exports = function () {
  $.gulp.task('html', function () {
    return $.gulp.src('./source/*.html')
    .on('error', $.gp.notify.onError(function(error){
      return {
        title: 'html',
        message: error.message
      }
    }))
    .pipe($.gulp.dest('./build/'))
    });
}