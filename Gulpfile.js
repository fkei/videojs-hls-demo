var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('server', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      //directoryListing: true,
      //open: true,
      host: '0.0.0.0',
      https: true,
      port: 3000
    }));
});

gulp.task('default', ['server']);
