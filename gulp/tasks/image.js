'use strict'

module.exports = function () {
  $.gulp.task('image', function () {
    return $.gulp.src('./source/image/**/*')
    .pipe($.imagemin())
    .pipe($.gulp.dest('./build/assets/img'))
    });
}