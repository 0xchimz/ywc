var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var browserSync = require('browser-sync')

gulp.task('script', function () {
  return gulp.src([
    './bower_components/jquery/dist/jquery.js',
    './bower_components/moment/moment.js',
    './bower_components/angular/angular.js',
    './bower_components/textAngular/dist/textAngular-rangy.min.js',
    './bower_components/textAngular/dist/textAngular-sanitize.js',
    './bower_components/textAngular/dist/textAngularSetup.js',
    './bower_components/textAngular/dist/textAngular.js',
    './bower_components/angular-datepicker/dist/angular-datepicker.js',
    './bower_components/angular-animate/angular-animate.min.js',
    './bower_components/angular-ui-router/release/angular-ui-router.js',
    './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
    './bower_components/angular-moment/angular-moment.min.js',
    './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
    './bower_components/angular-ui-notification/dist/angular-ui-notification.min.js',
    './src/js/**/*.js'])
    .pipe(concat('scripts.js'))
    // .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('./www/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
})
