/* global watch */

var gulp = require('gulp')

gulp.task('image', function () {
  watch('src/imgs/**')
    .pipe(gulp.dest('./www/imgs'))
})
