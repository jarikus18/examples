'use strict'

module.exports = function () {
  $.gulp.task('sass', function () {
    return $.gulp.src('./source/style/*.sass')
    .pipe($.gp.sourcemaps.init())
    .pipe($.gp.sass())
    .on('error', $.gp.notify.onError({
      title: 'style',
    }))
    .pipe($.gp.autoprefixer())
    .pipe($.gp.csso()) // закомітити якщо не треба мініфікувати css
    .pipe($.gp.sourcemaps.write())
    .pipe($.gulp.dest('./build/assets/css'))
    });
}