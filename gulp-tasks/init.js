var gulp = require('gulp')
var fs = require('fs')

gulp.task('init', function () {
  if (!fs.existsSync('./www')) {
    fs.mkdirSync('./www')
  }
  if (!fs.existsSync('./www/css')) {
    fs.mkdirSync('./www/css')
  }
  if (!fs.existsSync('./www/js')) {
    fs.mkdirSync('./www/js')
  }
  if (!fs.existsSync('./www/imgs')) {
    fs.mkdirSync('./www/imgs')
  }
  if (!fs.existsSync('./www/templates')) {
    fs.mkdirSync('./www/templates')
  }
  if (!fs.existsSync('./www/fonts')) {
    fs.mkdirSync('./www/fonts')
  }
  gulp.src('./src/imgs/**')
    .pipe(gulp.dest('./www/imgs'))
  gulp.src('./src/templates/**')
    .pipe(gulp.dest('./www/templates'))
  gulp.src(['./src/fonts/**',
    './bower_components/bootstrap-sass/assets/fonts/**'])
    .pipe(gulp.dest('./www/fonts/'))
  gulp.src('./bower_components/components-font-awesome/fonts/**')
    .pipe(gulp.dest('./www/fonts'))
  gulp.src('./src/html/**')
    .pipe(gulp.dest('./www'))
})
