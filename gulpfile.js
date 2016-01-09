var gulp = require('gulp')
var browserSync = require('browser-sync')

var requireDir = require('require-dir')
requireDir('./gulp-tasks')

gulp.task('default', ['compile'], function () {
  gulp.watch('./src/**/*.html', ['html'])
  gulp.watch('./src/**/*.tmpl', ['html'])
  gulp.watch('./src/scss/**/*.*', ['style'])
  gulp.watch('./src/js/**/*.js', ['script'])
  gulp.watch('./src/index.html')

  browserSync({
    notify: false,
    port: 3030,
    server: {
      baseDir: './www'
    }
  })
})

gulp.task('compile', ['init', 'html', 'style', 'script'])
