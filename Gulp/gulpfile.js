var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

function handleError (error) {
  console.log(error.toString())
  this.emit('end')
}

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'application'
    },
  })
})
 
gulp.task('sass', function() {
  return gulp.src('application/scss/**/*.scss')
    .pipe(sass())
    .on('error', handleError)
    .pipe(gulp.dest('application/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});
 
gulp.task('watch',['browserSync','sass'], function(){
  gulp.watch('application/scss/**/*.scss', ['sass']);
  gulp.watch('application/*.html', browserSync.reload); 
  gulp.watch('application/js/**/*.js', browserSync.reload); 
})
