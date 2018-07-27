var gulp = require("gulp"),
  browserSync = require("browser-sync");

// Configure the browserSync task
gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Live task
gulp.task('live', ['browserSync'], function() {
    gulp.watch('./css/*.css', browserSync.reload);
    gulp.watch('./js/*.js', browserSync.reload);
    gulp.watch('./*.html', browserSync.reload);
})