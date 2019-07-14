'use strict'

module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('./source/style/**/*.sass', 
      $.gulp.series('sass'));
    $.gulp.watch('./source/**/*.pug', 
      $.gulp.series('pug'));
     $.gulp.watch('./source/js/*.js', 
      $.gulp.series('scripts'));
    });
}